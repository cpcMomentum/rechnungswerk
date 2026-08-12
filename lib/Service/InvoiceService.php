<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\NumberFormatException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;
use OCP\IL10N;
use Psr\Log\LoggerInterface;

class InvoiceService {

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly InvoiceItemMapper $itemMapper,
		private readonly SettingsService $settingsService,
		private readonly ZugferdService $zugferdService,
		private readonly ArchiveService $archiveService,
		private readonly DocumentStore $documentStore,
		private readonly MailService $mailService,
		private readonly CountryService $countryService,
		private readonly IDBConnection $db,
		private readonly LoggerInterface $logger,
		private readonly NumberFormatMessage $numberFormatMessage,
		private readonly IL10N $l10n,
	) {
	}

	/**
	 * @return array<int, array<string, mixed>> serialized invoices, each with a
	 *   "relatedNumber" (the original invoice number a storno refers to, or null)
	 */
	public function list(): array {
		$invoices = $this->invoiceMapper->findAll();
		// Build an id -> number lookup from the same result set so resolving the
		// storno's original number needs no extra query (no N+1).
		$numbersById = [];
		foreach ($invoices as $invoice) {
			$numbersById[(int)$invoice->getId()] = $invoice->getNumber();
		}
		return array_map(function (Invoice $invoice) use ($numbersById): array {
			$data = $invoice->jsonSerialize();
			$relatedId = $invoice->getRelatedInvoiceId();
			$data['relatedNumber'] = $relatedId !== null ? ($numbersById[$relatedId] ?? null) : null;
			// The list feeds the payment-status column/filter (#117); the derived
			// status is not stored, so compute it here just like present() does.
			$data['paymentStatus'] = $this->derivePaymentStatus($invoice);
			$data['quoteStatus'] = $this->deriveQuoteStatus($invoice);
			return $data;
		}, $invoices);
	}

	/**
	 * @return array<string, mixed> invoice fields plus an "items" list
	 * @throws NotFoundException
	 */
	public function get(int $id): array {
		$invoice = $this->assertInvoiceType($this->findById($id));
		return $this->present($invoice);
	}

	/**
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws ValidationException
	 */
	public function create(string $userId, array $data): array {
		$now = new DateTime();
		$invoice = new Invoice();
		$invoice->setOwnerUserId($userId);
		$invoice->setStatus(Invoice::STATUS_DRAFT);
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setCreatedAt($now);
		$invoice->setUpdatedAt($now);
		$this->applyHeader($invoice, $data);
		// Positionen VOR der Transaktion auswerten: eine unlesbare Menge oder ein
		// unlesbarer Preis soll die Datenbank gar nicht erst anfassen, so wie es
		// beim Empfaengerland in applyHeader() schon der Fall ist (#180).
		// Nebeneffekt: der Settings-Zugriff darin kann eine Zeile anlegen, und ein
		// fehlschlagender INSERT wuerde die Transaktion auf PostgreSQL abbrechen —
		// dieselbe Ueberlegung wie in commit().
		$items = $this->extractItems($data);

		$this->db->beginTransaction();
		try {
			$invoice = $this->invoiceMapper->insert($invoice);
			$this->replaceItems($invoice, $items);
			$this->recomputeTotals($invoice);
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($invoice);
	}

	/**
	 * Type-guarded entry point for InvoiceController: rejects a quote id before
	 * reusing the shared update() transaction (see assertInvoiceType()).
	 *
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function updateInvoice(int $id, array $data): array {
		$this->assertInvoiceType($this->findById($id));
		return $this->update($id, $data);
	}

	/**
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function update(int $id, array $data): array {
		// Fast 404/409 outside the transaction for a quick user-visible error.
		$this->assertDraft($this->findById($id));
		// Wie in create(): Eingaben auswerten, bevor die Transaktion aufgeht (#180).
		$items = array_key_exists('items', $data) ? $this->extractItems($data) : null;

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock so a concurrent commit() cannot slip
			// between our pre-check and this write and leave a committed
			// invoice with its status overwritten back to draft.
			$invoice = $this->findByIdForUpdate($id);
			$this->assertDraft($invoice);
			$this->applyHeader($invoice, $data);
			if ($items !== null) {
				$this->replaceItems($invoice, $items);
			}
			$this->recomputeTotals($invoice);
			$invoice->setUpdatedAt(new DateTime());
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($invoice);
	}

	/**
	 * Type-guarded entry point for InvoiceController: rejects a quote id before
	 * reusing the shared delete() transaction (see assertInvoiceType()).
	 *
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function deleteInvoice(int $id): void {
		$this->assertInvoiceType($this->findById($id));
		$this->delete($id);
	}

	/**
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function delete(int $id): void {
		$this->findById($id); // Fast 404 before opening a transaction.

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock to prevent a concurrent commit() from
			// slipping through: without this a committed (GoBD-relevant)
			// invoice could be deleted by a concurrent in-flight delete call.
			$invoice = $this->findByIdForUpdate($id);
			$this->assertDraft($invoice);
			$this->itemMapper->deleteByInvoice((int)$invoice->getId());
			$this->invoiceMapper->delete($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
	}

	/**
	 * Festschreibung: assign the final sequential number and lock the invoice.
	 *
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 * @throws ValidationException
	 */
	public function commit(int $id): array {
		$invoice = $this->assertInvoiceType($this->findById($id));
		$this->assertDraft($invoice);

		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		if (count($items) === 0) {
			throw new ValidationException($this->l10n->t('Eine Rechnung ohne Positionen kann nicht festgeschrieben werden.'));
		}
		if (($invoice->getRecipientName() ?? '') === '') {
			throw new ValidationException($this->l10n->t('Ein Empfänger ist zum Festschreiben erforderlich.'));
		}

		// Create the settings row outside the transaction: a failed INSERT would
		// otherwise abort the commit transaction on PostgreSQL.
		$this->settingsService->getCompany();

		$now = new DateTime();

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock and re-check the status inside the
			// transaction. Two concurrent commits on the same draft would
			// otherwise both pass the pre-check and each reserve a number,
			// leaving a gap in the sequence (GoBD violation).
			$invoice = $this->findByIdForUpdate($id);
			$this->assertDraft($invoice);

			$number = $this->settingsService->reserveNextNumber($now);
			$invoice->setNumber($number);
			$invoice->setStatus(Invoice::STATUS_COMMITTED);
			$invoice->setIssueDate($now);
			if ($invoice->getPaymentTermDays() !== null) {
				$due = (clone $now);
				$due->modify('+' . (int)$invoice->getPaymentTermDays() . ' days');
				$due->setTime(0, 0, 0);
				$invoice->setDueDate($due);
			}
			$invoice->setCommittedAt($now);
			$invoice->setUpdatedAt($now);
			$this->recomputeTotals($invoice);
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		// Fire-and-forget DATEV hand-off AFTER the invoice is committed: the
		// invoice is already legally finalised, so a mail failure must never
		// roll it back — it is only logged. The result is surfaced to the UI.
		// Beleg einfrieren, BEVOR er irgendwohin geht (#181, Schritt 2). Ab hier
		// wird er nur noch gelesen, nie neu erzeugt: DATEV, Kundenversand,
		// Download und Ablage bekommen damit garantiert dieselbe Datei.
		//
		// Ausserhalb der Transaktion, weil ein Dateisystem-Schreibvorgang sich
		// nicht zurueckrollen laesst — und weil die Rechnungsnummer erst in der
		// Transaktion entsteht, vorher gaebe es gar nichts zu rendern.
		$this->freezeDocument($invoice);

		$result = $this->present($invoice);
		$result['datevMailSent'] = $this->maybeSendToDatev($invoice);
		$result['archived'] = $this->maybeArchive($invoice);
		return $result;
	}

	/**
	 * Beleg ablegen (#181, Schritt 2), regulaer beim Festschreiben.
	 *
	 * Ein Fehlschlag darf die bereits festgeschriebene Rechnung nicht kippen —
	 * sie ist rechtlich fertig. Er wird protokolliert; die Rechnung bleibt dann
	 * ohne eingefrorenen Beleg und faellt beim Abruf auf Neuerzeugung zurueck.
	 * Der Hintergrundauftrag aus Schritt 3 nimmt sie beim naechsten Lauf mit.
	 *
	 * Oeffentlich, weil der Nachzieh-Auftrag (DocumentBackfillService) genau
	 * diesen Weg gehen muss: wuerde er die Erzeugung nachbauen, koennten sich
	 * nachgezogene und regulaer eingefrorene Belege auseinanderentwickeln, sobald
	 * sich an einer der beiden Stellen etwas aendert.
	 *
	 * @param bool $backfilled true, wenn der Beleg nicht beim Festschreiben,
	 *   sondern nachtraeglich entsteht — das gehoert an den Datensatz, weil ein
	 *   nachgezogener Beleg inhaltlich stimmt, im Aussehen aber der heutige Stand ist
	 * @return bool ob am Ende ein eingefrorener Beleg vorliegt
	 */
	public function freezeDocument(Invoice $invoice, bool $backfilled = false): bool {
		try {
			$settings = $this->settingsService->getCompany();

			// Liegt die Datei schon, wird nie neu gerendert: die Ablage ist nur
			// einmal beschreibbar. Fehlen dann noch die Angaben am Datensatz — die
			// Datei war geschrieben, das Update danach scheiterte —, werden sie aus
			// dem abgelegten Inhalt nachgezogen. Ohne das bliebe document_frozen_at
			// leer und der Hintergrundauftrag griffe dieselbe Rechnung endlos auf.
			$existing = $this->documentStore->read($invoice);
			if ($existing !== null) {
				if ($invoice->getDocumentFrozenAt() === null) {
					$this->stampDocument($invoice, hash('sha256', $existing), $settings, $backfilled);
				}
				return true;
			}

			$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
			[$relatedNumber, $relatedIssueDate] = $this->relatedReference($invoice);
			$pdf = $this->zugferdService->generatePdf($invoice, $items, $settings, $relatedNumber, $relatedIssueDate);

			$this->stampDocument($invoice, $this->documentStore->freeze($invoice, $pdf), $settings, $backfilled);
			return true;
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: Beleg konnte nicht eingefroren werden', [
				'invoice' => $invoice->getId(),
				'number' => $invoice->getNumber(),
				'exception' => $e,
			]);
			return false;
		}
	}

	/**
	 * Die Angaben zum eingefrorenen Beleg an die Rechnung schreiben.
	 *
	 * Der Dateiname entsteht aus dem aktuellen Namensschema. Beim Festschreiben
	 * ist das genau der Name, den der Kunde bekommt; beim Nachziehen ist es der
	 * beste verfuegbare Stand — welchen Namen die Datei damals trug, steht
	 * nirgends im Datensatz.
	 */
	private function stampDocument(Invoice $invoice, string $hash, Settings $settings, bool $backfilled): void {
		$invoice->setDocumentSha256($hash);
		$invoice->setDocumentFileName(InvoiceCalculator::buildPdfFileName($invoice, $settings));
		$invoice->setDocumentFrozenAt(new DateTime());
		$invoice->setDocumentBackfilled($backfilled ? 1 : 0);
		$this->invoiceMapper->update($invoice);
	}

	/**
	 * Der auszuliefernde Beleg: der eingefrorene, wenn es einen gibt.
	 *
	 * Der Rueckfall auf Neuerzeugung gilt Rechnungen aus der Zeit vor dieser
	 * Aenderung und dem seltenen Fall, dass das Einfrieren fehlschlug. Er ist
	 * bewusst still, aber am Datensatz erkennbar: ohne documentFrozenAt ist der
	 * Beleg nicht der urspruengliche.
	 *
	 * @return array{filename: string, content: string}
	 */
	private function documentFor(Invoice $invoice): array {
		$frozen = $this->documentStore->read($invoice);
		if ($frozen !== null) {
			$name = (string)$invoice->getDocumentFileName();
			if ($name === '') {
				$name = InvoiceCalculator::buildPdfFileName($invoice, $this->settingsService->getCompany());
			}
			return ['filename' => $name, 'content' => $frozen];
		}

		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$settings = $this->settingsService->getCompany();
		[$relatedNumber, $relatedIssueDate] = $this->relatedReference($invoice);
		return [
			'filename' => InvoiceCalculator::buildPdfFileName($invoice, $settings),
			'content' => $this->zugferdService->generatePdf($invoice, $items, $settings, $relatedNumber, $relatedIssueDate),
		];
	}

	/**
	 * Attempt the automatic DATEV hand-off for a freshly committed invoice.
	 * Returns true if a mail was sent, false if skipped (toggle off / no
	 * address), null if it was attempted but failed.
	 */
	private function maybeSendToDatev(Invoice $invoice): ?bool {
		try {
			$settings = $this->settingsService->getCompany();
			$target = $settings->getDatevUploadMail();
			if ($settings->getDatevAutoSend() !== 1 || $target === null || $target === '') {
				return false;
			}
			// Derselbe eingefrorene Beleg, den auch Kunde und Download bekommen (#181).
			$document = $this->documentFor($invoice);
			$pdf = $document['content'];
			$number = (string)$invoice->getNumber();
			$messageId = $this->mailService->sendInvoicePdf(
				$target,
				'ZUGFeRD-Rechnung ' . $number,
				"Automatische DATEV-Übergabe aus RechnungsWerk.\n\nRechnung: " . $number
					. "\n\nDie E-Rechnung (ZUGFeRD-PDF) ist als Anhang beigefügt.",
				$pdf,
				$document['filename'],
				$settings,
				$this->settingsService->getSmtpConfig(),
			);
			// Record the hand-off so the DATEV confirmation channel (#36) can match
			// the reply (via In-Reply-To = this Message-ID) and flip the status.
			$invoice->setDatevStatus(Invoice::DATEV_PENDING);
			$invoice->setDatevStatusAt(new \DateTime());
			if ($messageId !== null && $messageId !== '') {
				$invoice->setDatevMessageId($messageId);
			}
			$this->invoiceMapper->update($invoice);
			return true;
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: DATEV-Auto-Versand fehlgeschlagen', [
				'exception' => $e,
				'invoice' => $invoice->getId(),
			]);
			return null;
		}
	}

	/**
	 * Send a committed invoice to a recipient as a ZUGFeRD-PDF mail attachment.
	 *
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 * @throws ValidationException
	 */
	public function sendToCustomer(int $id, string $to, string $subject, string $body): void {
		$invoice = $this->assertInvoiceType($this->findById($id));
		if ($invoice->getStatus() !== Invoice::STATUS_COMMITTED) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können versendet werden.');
		}
		if (trim($subject) === '') {
			throw new ValidationException($this->l10n->t('Ein Betreff ist erforderlich.'));
		}
		$settings = $this->settingsService->getCompany();
		// Der Kunde bekommt exakt den eingefrorenen Beleg (#181). Vorher wurde er
		// zum Sendezeitpunkt neu erzeugt und konnte sich damit von dem
		// unterscheiden, was beim Festschreiben ins Archiv ging.
		$document = $this->documentFor($invoice);
		$this->mailService->sendInvoicePdf($to, $subject, $body, $document['content'], $document['filename'], $settings, $this->settingsService->getSmtpConfig());
	}

	/**
	 * Storno: cancel a committed invoice by creating a correction document
	 * (EN16931 corrected invoice / typeCode 384, own number, negative amounts)
	 * and marking the original as cancelled. The reversal is expressed by a
	 * negative quantity per line (net price stays positive, BR-27) plus the
	 * mandatory reference to the original invoice.
	 *
	 * @return array<string, mixed> the cancellation document
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function cancel(int $id, string $userId): array {
		$original = $this->assertInvoiceType($this->findById($id));
		if ($original->getStatus() !== Invoice::STATUS_COMMITTED) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können storniert werden.');
		}

		$this->settingsService->getCompany();

		$now = new DateTime();

		$this->db->beginTransaction();
		try {
			// Lock the original and re-check inside the transaction so a double
			// cancel cannot create two storno documents for the same invoice.
			$original = $this->findByIdForUpdate($id);
			if ($original->getStatus() !== Invoice::STATUS_COMMITTED) {
				throw new IllegalStateException('Nur festgeschriebene Rechnungen können storniert werden.');
			}
			$originalItems = $this->itemMapper->findByInvoice((int)$original->getId());

			$storno = new Invoice();
			$storno->setOwnerUserId($userId);
			$storno->setStatus(Invoice::STATUS_COMMITTED);
			$storno->setInvoiceType(Invoice::TYPE_CANCELLATION);
			$storno->setRelatedInvoiceId((int)$original->getId());
			$this->copyRecipient($original, $storno);
			$storno->setSellerContactPerson($original->getSellerContactPerson());
			$storno->setSellerContactPhone($original->getSellerContactPhone());
			$storno->setSellerContactEmail($original->getSellerContactEmail());
			$storno->setSpecialTaxCase($original->getSpecialTaxCase());
			$storno->setGreeting($original->getGreeting());
			$storno->setCustomFields($original->getCustomFields());
			// The storno corrects the original, so it carries the same business
			// references (order, our reference, Leitweg, contract, project).
			$storno->setReferenceNumber($original->getReferenceNumber());
			$storno->setOrderNumber($original->getOrderNumber());
			$storno->setBuyerReference($original->getBuyerReference());
			$storno->setContractNumber($original->getContractNumber());
			$storno->setProjectReference($original->getProjectReference());
			$storno->setIssueDate($now);
			$storno->setCommittedAt($now);
			$storno->setCreatedAt($now);
			$storno->setUpdatedAt($now);
			$storno->setNumber($this->settingsService->reserveNextNumber($now));
			$storno = $this->invoiceMapper->insert($storno);

			foreach ($originalItems as $item) {
				$copy = new InvoiceItem();
				$copy->setInvoiceId((int)$storno->getId());
				$copy->setProductId($item->getProductId());
				$copy->setName($item->getName());
				$copy->setDescription($item->getDescription());
				// Reverse via a negative quantity (BT-129); the net price stays
				// positive (BR-27) so the line net amount — and thus subtotal and
				// VAT — become negative.
				$copy->setQuantity(InvoiceCalculator::negateQuantity($item->getQuantity()));
				$copy->setUnitCode($item->getUnitCode());
				$copy->setUnitLabel($item->getUnitLabel());
				$copy->setUnitPriceE4($item->getUnitPriceE4());
				$copy->setTaxRateBp($item->getTaxRateBp());
				$copy->setLineTotalCents(-$item->getLineTotalCents());
				$copy->setSortOrder($item->getSortOrder());
				$this->itemMapper->insert($copy);
			}
			// Der Storno korrigiert das Original und muss dessen Steuerfall fort-
			// fuehren, nicht den heutigen Einstellungsstand — sonst kann sich der
			// Fall zwischen Original und Storno unterscheiden (#181).
			$this->recomputeTotals($storno, (int)$original->getSmallBusiness() === 1);
			$this->invoiceMapper->update($storno);

			$original->setStatus(Invoice::STATUS_CANCELLED);
			$original->setUpdatedAt($now);
			$this->invoiceMapper->update($original);

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		// Auch der Storno ist ab hier festgeschrieben und muss seinen Beleg
		// einfrieren (#181, Schritt 2) — sonst wuerde jeder DATEV-/Kunden-/
		// Download-Zugriff auf ihn weiterhin neu erzeugen, waehrend das fuer die
		// Originalrechnung bereits ausgeschlossen ist.
		$this->freezeDocument($storno);

		// Hand the cancellation document to DATEV as well (same fire-and-forget
		// rule as commit): the original was already transmitted, so the storno
		// must follow to keep the DATEV beleg state consistent. A mail failure is
		// only logged, never rolls back the (legally final) storno.
		$result = $this->present($storno);
		$result['datevMailSent'] = $this->maybeSendToDatev($storno);
		$result['archived'] = $this->maybeArchive($storno);
		return $result;
	}

	/**
	 * Duplicate any invoice into a fresh, editable DRAFT (#124): recurring
	 * invoices differ only in a few fields, so we clone the source (recipient,
	 * seller contact, references, notes, content texts and all positions) but
	 * reset everything lifecycle-bound. Reuses the same copy mechanics as
	 * cancel() — but as a normal invoice, with positive amounts and no number.
	 *
	 * @return array<string, mixed> the new draft
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function duplicate(int $id, string $userId): array {
		$original = $this->assertInvoiceType($this->findById($id));
		// Storno documents carry negative line amounts; cloning one into a normal
		// invoice would yield a nonsensical negative draft. Cancelled *invoices*
		// keep their positive amounts and stay duplicable.
		if ($original->getInvoiceType() === Invoice::TYPE_CANCELLATION) {
			throw new IllegalStateException('Stornobelege können nicht dupliziert werden.');
		}
		$originalItems = $this->itemMapper->findByInvoice((int)$original->getId());

		$now = new DateTime();

		$this->db->beginTransaction();
		try {
			$copy = new Invoice();
			$copy->setOwnerUserId($userId);
			// A duplicate starts life as a fresh draft: no final number, no
			// commit/issue/due dates, no DATEV state, not linked to the source.
			$copy->setStatus(Invoice::STATUS_DRAFT);
			$copy->setInvoiceType(Invoice::TYPE_INVOICE);
			$copy->setCreatedAt($now);
			$copy->setUpdatedAt($now);
			$this->copyRecipient($original, $copy);
			$copy->setSellerContactPerson($original->getSellerContactPerson());
			$copy->setSellerContactPhone($original->getSellerContactPhone());
			$copy->setSellerContactEmail($original->getSellerContactEmail());
			$copy->setSpecialTaxCase($original->getSpecialTaxCase());
			$copy->setGreeting($original->getGreeting());
			$copy->setCustomFields($original->getCustomFields());
			$copy->setReferenceNumber($original->getReferenceNumber());
			$copy->setOrderNumber($original->getOrderNumber());
			$copy->setBuyerReference($original->getBuyerReference());
			$copy->setContractNumber($original->getContractNumber());
			$copy->setProjectReference($original->getProjectReference());
			// Content the user wants to keep as a starting point (editable). These
			// are exactly the fields cancel() drops but a template must carry over.
			$copy->setExtraText($original->getExtraText());
			$copy->setPaymentTermDays($original->getPaymentTermDays());
			$copy->setDiscountTerms($original->getDiscountTerms());
			$copy->setPerformanceDate($original->getPerformanceDate());
			$copy->setPerformancePeriodStart($original->getPerformancePeriodStart());
			$copy->setPerformancePeriodEnd($original->getPerformancePeriodEnd());
			$copy = $this->invoiceMapper->insert($copy);

			foreach ($originalItems as $item) {
				$line = new InvoiceItem();
				$line->setInvoiceId((int)$copy->getId());
				$line->setProductId($item->getProductId());
				$line->setName($item->getName());
				$line->setDescription($item->getDescription());
				$line->setQuantity($item->getQuantity());
				$line->setUnitCode($item->getUnitCode());
				$line->setUnitLabel($item->getUnitLabel());
				$line->setUnitPriceE4($item->getUnitPriceE4());
				$line->setTaxRateBp($item->getTaxRateBp());
				$line->setLineTotalCents($item->getLineTotalCents());
				$line->setSortOrder($item->getSortOrder());
				$this->itemMapper->insert($line);
			}
			$this->recomputeTotals($copy);
			$this->invoiceMapper->update($copy);

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($copy);
	}

	/**
	 * Fire-and-forget Nextcloud filing of a freshly committed document (#38);
	 * mirrors the DATEV hand-off contract (true/false/null, never throws).
	 */
	private function maybeArchive(Invoice $invoice): ?bool {
		try {
			$settings = $this->settingsService->getCompany();
			// Vorpruefen statt den Beleg (documentFor) unbedingt an ArchiveService
			// zu uebergeben: PHP wertet Funktionsargumente vor dem Aufruf aus, das
			// wuerde bei jedem Festschreiben lesen/erzeugen, auch wenn die Ablage
			// gar nicht aktiviert ist.
			if ($settings->getArchiveEnabled() !== 1 || $settings->getArchiveFolderId() === null) {
				return false;
			}
			$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
			[$relatedNumber, $relatedIssueDate] = $this->relatedReference($invoice);
			return $this->archiveService->maybeArchive($invoice, $items, $settings, $relatedNumber, $relatedIssueDate, $this->documentFor($invoice));
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: Ablage-Aufruf fehlgeschlagen', [
				'exception' => $e,
				'invoice' => $invoice->getId(),
			]);
			return null;
		}
	}

	/**
	 * Render a committed invoice as a ZUGFeRD PDF/A-3 (visible layout plus the
	 * embedded EN16931 CII-XML). Drafts have no final number and are rejected.
	 *
	 * @return array{filename: string, content: string}
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function generatePdf(int $id): array {
		$invoice = $this->assertInvoiceType($this->findById($id));
		if ($invoice->getStatus() === Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können als PDF heruntergeladen werden.');
		}
		// Der eingefrorene Beleg, nicht ein neu erzeugter (#181, Schritt 2).
		return $this->documentFor($invoice);
	}

	/**
	 * Render a DRAFT invoice as a watermarked preview PDF (visible layout
	 * only, no embedded e-invoice XML). Committed invoices already have the
	 * real ZUGFeRD download and are rejected here — the two must not mix.
	 *
	 * @return array{filename: string, content: string}
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function generatePreviewPdf(int $id): array {
		$invoice = $this->assertInvoiceType($this->findById($id));
		if ($invoice->getStatus() !== Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Die Vorschau ist nur für Entwürfe verfügbar. Festgeschriebene Rechnungen können als PDF heruntergeladen werden.');
		}
		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$settings = $this->settingsService->getCompany();
		$content = $this->zugferdService->generateDraftPreviewPdf($invoice, $items, $settings);
		return ['filename' => 'entwurf-' . $invoice->getId() . '.pdf', 'content' => $content];
	}

	// --- internals -------------------------------------------------------

	/**
	 * Resolve the number of the invoice a storno/credit note refers to, so it
	 * can be printed and embedded as the preceding-invoice reference (BG-3).
	 */
	private function relatedInvoice(Invoice $invoice): ?Invoice {
		$relatedId = $invoice->getRelatedInvoiceId();
		if ($relatedId === null) {
			return null;
		}
		try {
			return $this->invoiceMapper->findOne($relatedId);
		} catch (DoesNotExistException) {
			return null;
		}
	}

	private function relatedNumber(Invoice $invoice): ?string {
		return $this->relatedInvoice($invoice)?->getNumber();
	}

	/**
	 * Number of the quote this document derives from via related_quote_id — for a
	 * revision, its source quote (#111 Modell B); for a converted invoice, the
	 * source quote. Null if unlinked or the source is gone.
	 */
	private function relatedQuoteNumber(Invoice $invoice): ?string {
		$rid = $invoice->getRelatedQuoteId();
		if ($rid === null) {
			return null;
		}
		try {
			return $this->invoiceMapper->findOne($rid)->getNumber();
		} catch (DoesNotExistException) {
			return null;
		}
	}

	/**
	 * @return array{0: ?string, 1: ?\DateTime} [number, issueDate] of the related invoice, or [null, null].
	 */
	private function relatedReference(Invoice $invoice): array {
		$related = $this->relatedInvoice($invoice);
		return [$related?->getNumber(), $related?->getIssueDate()];
	}

	/**
	 * @throws NotFoundException
	 */
	private function findById(int $id): Invoice {
		try {
			return $this->invoiceMapper->findOne($id);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Rechnung nicht gefunden.');
		}
	}

	/**
	 * Quotes (#111) share this table's id space with invoices/cancellations, so
	 * every invoice-only entry point (the generic findById()/findByIdForUpdate()
	 * do not filter by type) must reject a quote id here — otherwise a quote
	 * could be committed/sent/downloaded through the invoice endpoints and, most
	 * critically, consume a real sequential invoice number.
	 *
	 * @throws NotFoundException
	 */
	private function assertInvoiceType(Invoice $invoice): Invoice {
		if (!in_array($invoice->getInvoiceType(), Invoice::INVOICE_TYPES, true)) {
			throw new NotFoundException('Rechnung nicht gefunden.');
		}
		return $invoice;
	}

	/**
	 * @throws NotFoundException
	 */
	private function findByIdForUpdate(int $id): Invoice {
		try {
			return $this->invoiceMapper->findOneForUpdate($id);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Rechnung nicht gefunden.');
		}
	}

	/**
	 * @throws IllegalStateException
	 */
	private function assertDraft(Invoice $invoice): void {
		if ($invoice->getStatus() !== Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Festgeschriebene oder stornierte Rechnungen können nicht mehr geändert werden.');
		}
	}

	/**
	 * @param array<string, mixed> $data
	 */
	private function applyHeader(Invoice $invoice, array $data): void {
		$strings = [
			'recipientName', 'recipientContactId', 'recipientAddress', 'recipientPostalCode',
			'recipientCity', 'recipientEmail', 'recipientVatId', 'recipientContactPerson',
			'recipientPhone', 'sellerContactPerson', 'sellerContactPhone', 'sellerContactEmail',
			'referenceNumber',
			'orderNumber', 'buyerReference', 'contractNumber', 'projectReference',
			'specialTaxCase', 'greeting', 'extraText',
			'discountTerms',
		];
		foreach ($strings as $field) {
			if (array_key_exists($field, $data)) {
				$value = $data[$field];
				$invoice->{'set' . ucfirst($field)}($value !== null && $value !== '' ? (string)$value : null);
			}
		}
		if (array_key_exists('paymentTermDays', $data)) {
			$days = $data['paymentTermDays'];
			$invoice->setPaymentTermDays($days !== null && $days !== '' ? max(0, (int)$days) : null);
		}
		if (array_key_exists('customerId', $data)) {
			$customerId = $data['customerId'];
			$invoice->setCustomerId($customerId !== null && $customerId !== '' ? (int)$customerId : null);
		}
		if (array_key_exists('recipientCountry', $data)) {
			$invoice->setRecipientCountry($this->countryService->resolveForStorage($data['recipientCountry']));
		} elseif ($invoice->getRecipientCountry() === null) {
			$invoice->setRecipientCountry('DE');
		}
		foreach (['performanceDate', 'performancePeriodStart', 'performancePeriodEnd', 'validUntil'] as $dateField) {
			if (array_key_exists($dateField, $data)) {
				$invoice->{'set' . ucfirst($dateField)}($this->parseDate($data[$dateField]));
			}
		}
		// Quote-only fields (#111); harmless no-ops for invoices, which never send them.
		if (array_key_exists('offerFreeform', $data)) {
			$invoice->setOfferFreeform(!empty($data['offerFreeform']) ? 1 : 0);
		}
		if (array_key_exists('notes', $data)) {
			$invoice->setCustomFields($this->encodeNotes($data['notes']));
		}
	}

	private function copyRecipient(Invoice $from, Invoice $to): void {
		$to->setRecipientName($from->getRecipientName());
		$to->setRecipientContactId($from->getRecipientContactId());
		$to->setCustomerId($from->getCustomerId());
		$to->setRecipientAddress($from->getRecipientAddress());
		$to->setRecipientPostalCode($from->getRecipientPostalCode());
		$to->setRecipientCity($from->getRecipientCity());
		$to->setRecipientCountry($from->getRecipientCountry());
		$to->setRecipientEmail($from->getRecipientEmail());
		$to->setRecipientVatId($from->getRecipientVatId());
		$to->setRecipientContactPerson($from->getRecipientContactPerson());
		$to->setRecipientPhone($from->getRecipientPhone());
	}

	/**
	 * Build (but do not persist) InvoiceItem entities from request data.
	 * For small-business owners (§19) the effective tax rate is forced to 0.
	 *
	 * @param array<string, mixed> $data
	 * @return InvoiceItem[]
	 */
	private function extractItems(array $data): array {
		$raw = $data['items'] ?? [];
		if (!is_array($raw)) {
			return [];
		}
		$smallBusiness = $this->settingsService->getCompany()->getSmallBusiness() === 1;

		$items = [];
		$sort = 0;
		foreach ($raw as $row) {
			if (!is_array($row)) {
				continue;
			}
			// Ungeprueft lief die Menge frueher als Rohtext in eine numeric-Spalte:
			// "99.999.999" brach mit einem 500er ab, "1.000" wurde still zu 1 und
			// machte die Rechnung um Faktor 1000 falsch (#157).
			//
			// Der Preis kommt ebenfalls als Rohtext und wird HIER umgerechnet (#180).
			// Vorher rechnete allein der Browser und schickte die fertige Zahl; der
			// Server konnte sie nicht pruefen, weil einer blossen Zahl nicht anzusehen
			// ist, ob 95 als 0,0095 € oder als 95 € gemeint war.
			//
			// NumberInput wirft ohne Prosa, damit es statisch bleiben kann; den
			// uebersetzten Satz macht NumberFormatMessage daraus (#235).
			try {
				$quantity = NumberInput::parseQuantity($row['quantity'] ?? null);
				$unitPriceE4 = NumberInput::parsePrice($row['unitPriceInput'] ?? null);
			} catch (NumberFormatException $e) {
				throw $this->numberFormatMessage->asValidationException($e);
			}
			$taxRateBp = $smallBusiness ? 0 : (int)($row['taxRateBp'] ?? 0);

			$name = (string)($row['name'] ?? '');
			if (mb_strlen($name) > 255) {
				throw new ValidationException($this->l10n->t('Positionsname darf maximal 255 Zeichen lang sein.'));
			}
			$unitLabel = isset($row['unitLabel']) && trim((string)$row['unitLabel']) !== '' ? trim((string)$row['unitLabel']) : null;
			if ($unitLabel !== null && mb_strlen($unitLabel) > 64) {
				throw new ValidationException($this->l10n->t('Die eigene Einheit darf höchstens 64 Zeichen lang sein.'));
			}

			$item = new InvoiceItem();
			$item->setProductId(isset($row['productId']) && $row['productId'] !== null ? (int)$row['productId'] : null);
			$item->setName($name);
			$item->setDescription(isset($row['description']) && $row['description'] !== '' ? (string)$row['description'] : null);
			$item->setQuantity($quantity);
			$item->setUnitCode((string)($row['unitCode'] ?? InvoiceItem::UNIT_PIECE));
			$item->setUnitLabel($unitLabel);
			$item->setUnitPriceE4($unitPriceE4);
			$item->setTaxRateBp($taxRateBp);
			$item->setLineTotalCents(InvoiceCalculator::lineTotalCents($quantity, $unitPriceE4));
			$item->setSortOrder($sort++);
			$items[] = $item;
		}
		return $items;
	}

	/**
	 * @param InvoiceItem[] $items
	 */
	private function replaceItems(Invoice $invoice, array $items): void {
		$invoiceId = (int)$invoice->getId();
		$this->itemMapper->deleteByInvoice($invoiceId);
		foreach ($items as $item) {
			$item->setInvoiceId($invoiceId);
			$this->itemMapper->insert($item);
		}
	}

	/**
	 * @param bool|null $smallBusinessOverride Erzwingt den Kleinunternehmer-Fall
	 *  statt ihn aus den aktuellen Einstellungen zu lesen. Fuer eine Korrektur
	 *  (Storno), die den Steuerfall der Original-Rechnung fortfuehren muss —
	 *  sonst faellt genau der mit #181 behobene Fehler fuer Storno-Belege wieder
	 *  an, wenn zwischen Original und Storno die Einstellung gewechselt wurde.
	 */
	private function recomputeTotals(Invoice $invoice, ?bool $smallBusinessOverride = null): void {
		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$lines = array_map(
			static fn (InvoiceItem $i): array => [
				'taxRateBp' => (int)$i->getTaxRateBp(),
				'lineTotalCents' => (int)$i->getLineTotalCents(),
			],
			$items,
		);
		// VAT is dropped to 0 for §19 small businesses and for special tax cases
		// (reverse charge / intra-community / export) — see ZugferdService for the
		// matching EN16931 category codes and exemption reasons.
		$smallBusiness = $smallBusinessOverride ?? ($this->settingsService->getCompany()->getSmallBusiness() === 1);
		// Den Fall an der Rechnung festhalten (#181). Hier und nicht anderswo,
		// weil an dieser Stelle ohnehin die Summen daraus entstehen — so koennen
		// gespeicherter Schalter und gespeicherte Betraege nicht auseinanderlaufen.
		// Solange die Rechnung ein Entwurf ist, folgt sie damit dem aktuellen
		// Stand; ab dem Festschreiben ist sie unveraenderlich.
		$invoice->setSmallBusiness($smallBusiness ? 1 : 0);
		$taxExempt = $smallBusiness || $invoice->isTaxExemptCase();
		$totals = InvoiceCalculator::computeTotals($lines, $taxExempt);
		$invoice->setSubtotalCents($totals['subtotalCents']);
		$invoice->setTotalCents($totals['totalCents']);
		$invoice->setTaxBreakdown(json_encode($totals['taxBreakdown']) ?: '[]');
	}

	/**
	 * @return array<string, mixed>
	 */
	private function present(Invoice $invoice): array {
		$data = $invoice->jsonSerialize();
		$data['items'] = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$data['relatedNumber'] = $this->relatedNumber($invoice);
		$data['relatedQuoteNumber'] = $this->relatedQuoteNumber($invoice);
		$data['paymentStatus'] = $this->derivePaymentStatus($invoice);
		$data['quoteStatus'] = $this->deriveQuoteStatus($invoice);
		return $data;
	}

	/**
	 * Derive the effective quote status (#111). Only quotes have one; every other
	 * document type returns null. draft/open/expired are computed (a draft from
	 * the document status, expired from valid_until once committed and still
	 * open); accepted/rejected/converted are read from the stored outcome.
	 */
	private function deriveQuoteStatus(Invoice $quote): ?string {
		if ($quote->getInvoiceType() !== Invoice::TYPE_QUOTE) {
			return null;
		}
		if ($quote->getStatus() === Invoice::STATUS_DRAFT) {
			return Invoice::QUOTE_DRAFT;
		}
		$stored = $quote->getQuoteStatus();
		if ($stored !== null && $stored !== '') {
			return $stored;
		}
		$validUntil = $quote->getValidUntil();
		if ($validUntil !== null) {
			$today = new DateTime();
			$today->setTime(0, 0, 0);
			if ($validUntil < $today) {
				return Invoice::QUOTE_EXPIRED;
			}
		}
		return Invoice::QUOTE_OPEN;
	}

	/**
	 * Derive the payment status (#117). Only regular, committed invoices can be
	 * paid; drafts and cancellation documents return null. paid = a payment date
	 * is set; overdue = still open and past the due date; otherwise unpaid.
	 */
	private function derivePaymentStatus(Invoice $invoice): ?string {
		if ($invoice->getStatus() !== Invoice::STATUS_COMMITTED
			|| $invoice->getInvoiceType() !== Invoice::TYPE_INVOICE) {
			return null;
		}
		if ($invoice->getPaidAt() !== null) {
			return Invoice::PAYMENT_PAID;
		}
		$due = $invoice->getDueDate();
		if ($due !== null) {
			$today = new DateTime();
			$today->setTime(0, 0, 0);
			if ($due < $today) {
				return Invoice::PAYMENT_OVERDUE;
			}
		}
		return Invoice::PAYMENT_UNPAID;
	}

	/**
	 * Record a payment (#117): mark a committed invoice as paid on the given date
	 * (default today). Only regular committed invoices are payable — drafts and
	 * cancellation documents are rejected.
	 *
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function markPaid(int $id, ?string $date = null): array {
		$invoice = $this->assertPayable($this->findById($id));
		$paidAt = $this->parseDate($date) ?? (function () {
			$now = new DateTime();
			$now->setTime(0, 0, 0);
			return $now;
		})();

		$this->db->beginTransaction();
		try {
			$invoice = $this->assertPayable($this->findByIdForUpdate($id));
			$invoice->setPaidAt($paidAt);
			$invoice->setUpdatedAt(new DateTime());
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($invoice);
	}

	/**
	 * Undo a recorded payment (#117): clear the payment date so the invoice is
	 * open again (and derives overdue as usual).
	 *
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function markUnpaid(int $id): array {
		$this->assertPayable($this->findById($id));

		$this->db->beginTransaction();
		try {
			$invoice = $this->assertPayable($this->findByIdForUpdate($id));
			$invoice->setPaidAt(null);
			$invoice->setUpdatedAt(new DateTime());
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($invoice);
	}

	/**
	 * @throws IllegalStateException
	 */
	private function assertPayable(Invoice $invoice): Invoice {
		if ($invoice->getStatus() !== Invoice::STATUS_COMMITTED
			|| $invoice->getInvoiceType() !== Invoice::TYPE_INVOICE) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können als bezahlt markiert werden.');
		}
		return $invoice;
	}

	// --- Quotes (#111) ---------------------------------------------------

	/**
	 * @return array<int, array<string, mixed>> serialized quotes, each with the
	 *   derived quoteStatus (open/expired/…)
	 */
	public function listQuotes(): array {
		$quotes = $this->invoiceMapper->findByTypes([Invoice::TYPE_QUOTE]);
		return array_map(function (Invoice $quote): array {
			$data = $quote->jsonSerialize();
			$data['quoteStatus'] = $this->deriveQuoteStatus($quote);
			return $data;
		}, $quotes);
	}

	/**
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 */
	public function getQuote(int $id): array {
		return $this->present($this->assertQuoteType($this->findById($id)));
	}

	/**
	 * Create a quote draft (#111): same header/positions/totals mechanics as an
	 * invoice, only stamped TYPE_QUOTE so it lives in the quote list and number
	 * circle. Freibleibend defaults to off.
	 *
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws ValidationException
	 */
	public function createQuote(string $userId, array $data): array {
		$now = new DateTime();
		$quote = new Invoice();
		$quote->setOwnerUserId($userId);
		$quote->setStatus(Invoice::STATUS_DRAFT);
		$quote->setInvoiceType(Invoice::TYPE_QUOTE);
		$quote->setOfferFreeform(0);
		$quote->setCreatedAt($now);
		$quote->setUpdatedAt($now);
		$this->applyHeader($quote, $data);
		// Wie in create(): Eingaben auswerten, bevor die Transaktion aufgeht (#180).
		$items = $this->extractItems($data);

		$this->db->beginTransaction();
		try {
			$quote = $this->invoiceMapper->insert($quote);
			$this->replaceItems($quote, $items);
			$this->recomputeTotals($quote);
			$this->invoiceMapper->update($quote);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($quote);
	}

	/**
	 * Update a quote draft. Type-guards first (a non-quote id yields a 404) so
	 * the quote endpoints can only ever touch quotes, then reuses the shared
	 * invoice update transaction (row lock, header + positions, totals).
	 *
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws NotFoundException|IllegalStateException|ValidationException
	 */
	public function updateQuote(int $id, array $data): array {
		$this->assertQuoteType($this->findById($id));
		return $this->update($id, $data);
	}

	/**
	 * @throws NotFoundException|IllegalStateException
	 */
	public function deleteQuote(int $id): void {
		$this->assertQuoteType($this->findById($id));
		$this->delete($id);
	}

	/**
	 * Festschreibung of a quote (#111): reserve the final quote number from the
	 * independent circle and lock the document. Unlike an invoice commit there is
	 * no due date, no DATEV hand-off and no archiving — a quote is not a
	 * booking-relevant beleg.
	 *
	 * @return array<string, mixed>
	 * @throws NotFoundException|IllegalStateException|ValidationException
	 */
	public function commitQuote(int $id): array {
		$quote = $this->assertQuoteDraft($this->findById($id));

		$items = $this->itemMapper->findByInvoice((int)$quote->getId());
		if (count($items) === 0) {
			throw new ValidationException($this->l10n->t('Ein Angebot ohne Positionen kann nicht festgeschrieben werden.'));
		}
		if (($quote->getRecipientName() ?? '') === '') {
			throw new ValidationException($this->l10n->t('Ein Empfänger ist zum Festschreiben erforderlich.'));
		}

		// Create the settings row outside the transaction (see commit()).
		$this->settingsService->getCompany();

		$now = new DateTime();

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock and re-check inside the transaction so two
			// concurrent commits cannot both reserve a quote number.
			$quote = $this->assertQuoteDraft($this->findByIdForUpdate($id));
			// A revision (#111 Modell B) carries a link to its source quote; it gets
			// a "{base}-{n}" number from its family instead of a fresh AN number, and
			// supersedes its source. A normal quote pulls from the AN counter.
			if ($quote->getRelatedQuoteId() !== null) {
				$quote->setNumber($this->reserveNextRevisionNumber($quote));
				$this->markSourceSuperseded((int)$quote->getRelatedQuoteId(), $now);
			} else {
				$quote->setNumber($this->settingsService->reserveNextQuoteNumber($now));
			}
			$quote->setStatus(Invoice::STATUS_COMMITTED);
			$quote->setIssueDate($now);
			$quote->setCommittedAt($now);
			$quote->setUpdatedAt($now);
			$this->recomputeTotals($quote);
			$this->invoiceMapper->update($quote);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($quote);
	}

	/**
	 * Compute the next revision number for a revision quote (#111 Modell B). The
	 * base is the family's root number (walked via related_quote_id), never
	 * derived from the string — quote numbers contain their own hyphens.
	 *
	 * @throws ValidationException
	 */
	private function reserveNextRevisionNumber(Invoice $revision): string {
		$root = $this->rootQuote($revision);
		// Serialise concurrent revision commits of the same family: lock the root
		// quote row FOR UPDATE for the rest of the caller's transaction, then read
		// the family numbers. Without this, two revisions of one family could read
		// the same set and both compute the same "-n" suffix — the unique index on
		// `number` would reject one with a raw DB error instead of the clean
		// serialisation the regular AN counter already gets from the settings lock.
		// The root is always the family anchor and is acquired before the source
		// row (markSourceSuperseded), so the lock order stays consistent (no
		// deadlock). A vanished root (never for a committed source) falls back to
		// the already-walked instance.
		try {
			$root = $this->invoiceMapper->findOneForUpdate((int)$root->getId());
		} catch (DoesNotExistException) {
			// keep the unlocked root resolved above
		}
		$base = (string)$root->getNumber();
		if ($base === '') {
			throw new ValidationException($this->l10n->t('Das Ursprungsangebot hat keine Nummer und kann nicht revidiert werden.'));
		}
		$existing = $this->invoiceMapper->findQuoteNumbersInFamily($base);
		return InvoiceCalculator::nextRevisionNumber($base, $existing);
	}

	/**
	 * Walk related_quote_id up to the family root — the original quote committed
	 * with a plain AN number (related_quote_id null). A missing/cyclic link stops
	 * the walk and returns the last resolved quote.
	 */
	private function rootQuote(Invoice $quote): Invoice {
		$current = $quote;
		$seen = [(int)$quote->getId() => true];
		while (($parentId = $current->getRelatedQuoteId()) !== null) {
			if (isset($seen[$parentId])) {
				break;
			}
			$seen[$parentId] = true;
			try {
				$parent = $this->invoiceMapper->findOne($parentId);
			} catch (DoesNotExistException) {
				break;
			}
			if ($parent->getInvoiceType() !== Invoice::TYPE_QUOTE) {
				break;
			}
			$current = $parent;
		}
		return $current;
	}

	/** Mark a revision's source quote as superseded (best-effort; source may be gone). */
	private function markSourceSuperseded(int $sourceId, DateTime $now): void {
		try {
			$source = $this->invoiceMapper->findOneForUpdate($sourceId);
		} catch (DoesNotExistException) {
			return;
		}
		if ($source->getInvoiceType() !== Invoice::TYPE_QUOTE) {
			return;
		}
		$source->setQuoteStatus(Invoice::QUOTE_SUPERSEDED);
		$source->setUpdatedAt($now);
		$this->invoiceMapper->update($source);
	}

	/**
	 * Revise a committed quote (#111 Modell B): clone its content into a fresh,
	 * editable quote draft linked to the source (related_quote_id). Allowed from
	 * any live state except converted/superseded (assertQuoteRevisable) — both
	 * are already terminal. The source is only marked "superseded" once the
	 * revision is itself festgeschrieben (commitQuote) — a discarded revision
	 * draft must leave the original untouched. On commit the revision receives a
	 * "{Ursprung}-{n}" number (AN-2026-0007-1, -2, …).
	 *
	 * @return array<string, mixed> the new revision draft
	 * @throws NotFoundException|IllegalStateException
	 */
	public function reviseQuote(int $id, string $userId): array {
		$this->assertQuoteRevisable($this->assertCommittedQuote($this->findById($id)));
		$now = new DateTime();

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock and re-check inside the transaction so a
			// concurrent convert/revise cannot slip through the pre-check.
			$source = $this->assertCommittedQuote($this->findByIdForUpdate($id));
			$this->assertQuoteRevisable($source);
			$sourceItems = $this->itemMapper->findByInvoice((int)$source->getId());

			$revision = new Invoice();
			$revision->setOwnerUserId($userId);
			$revision->setStatus(Invoice::STATUS_DRAFT);
			$revision->setInvoiceType(Invoice::TYPE_QUOTE);
			$revision->setOfferFreeform($source->getOfferFreeform() ?? 0);
			$revision->setCreatedAt($now);
			$revision->setUpdatedAt($now);
			$this->copyRecipient($source, $revision);
			$revision->setSellerContactPerson($source->getSellerContactPerson());
			$revision->setSellerContactPhone($source->getSellerContactPhone());
			$revision->setSellerContactEmail($source->getSellerContactEmail());
			$revision->setSpecialTaxCase($source->getSpecialTaxCase());
			$revision->setGreeting($source->getGreeting());
			$revision->setCustomFields($source->getCustomFields());
			$revision->setExtraText($source->getExtraText());
			$revision->setReferenceNumber($source->getReferenceNumber());
			$revision->setOrderNumber($source->getOrderNumber());
			$revision->setBuyerReference($source->getBuyerReference());
			$revision->setContractNumber($source->getContractNumber());
			$revision->setProjectReference($source->getProjectReference());
			$revision->setPerformanceDate($source->getPerformanceDate());
			$revision->setPerformancePeriodStart($source->getPerformancePeriodStart());
			$revision->setPerformancePeriodEnd($source->getPerformancePeriodEnd());
			$revision->setValidUntil($source->getValidUntil());
			// The link that both marks this as a revision (drives the "-n" numbering
			// and source supersession on commit) and preserves the family chain.
			$revision->setRelatedQuoteId((int)$source->getId());
			$revision = $this->invoiceMapper->insert($revision);

			foreach ($sourceItems as $item) {
				$line = new InvoiceItem();
				$line->setInvoiceId((int)$revision->getId());
				$line->setProductId($item->getProductId());
				$line->setName($item->getName());
				$line->setDescription($item->getDescription());
				$line->setQuantity($item->getQuantity());
				$line->setUnitCode($item->getUnitCode());
				$line->setUnitLabel($item->getUnitLabel());
				$line->setUnitPriceE4($item->getUnitPriceE4());
				$line->setTaxRateBp($item->getTaxRateBp());
				$line->setLineTotalCents($item->getLineTotalCents());
				$line->setSortOrder($item->getSortOrder());
				$this->itemMapper->insert($line);
			}
			$this->recomputeTotals($revision);
			$this->invoiceMapper->update($revision);

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($revision);
	}

	/**
	 * Record the outcome of a committed quote (#111): accepted or rejected. A
	 * converted quote is terminal and cannot be changed.
	 *
	 * @return array<string, mixed>
	 * @throws NotFoundException|IllegalStateException
	 */
	public function markQuoteAccepted(int $id): array {
		return $this->setQuoteOutcome($id, Invoice::QUOTE_ACCEPTED);
	}

	/**
	 * @return array<string, mixed>
	 * @throws NotFoundException|IllegalStateException
	 */
	public function markQuoteRejected(int $id): array {
		return $this->setQuoteOutcome($id, Invoice::QUOTE_REJECTED);
	}

	/**
	 * @return array<string, mixed>
	 * @throws NotFoundException|IllegalStateException
	 */
	private function setQuoteOutcome(int $id, string $outcome): array {
		$this->assertCommittedQuote($this->findById($id));

		$this->db->beginTransaction();
		try {
			$quote = $this->assertCommittedQuote($this->findByIdForUpdate($id));
			if ($quote->getQuoteStatus() === Invoice::QUOTE_CONVERTED) {
				throw new IllegalStateException('Ein übernommenes Angebot kann nicht mehr geändert werden.');
			}
			$quote->setQuoteStatus($outcome);
			$quote->setUpdatedAt(new DateTime());
			$this->invoiceMapper->update($quote);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($quote);
	}

	/**
	 * Convert a committed quote into a fresh invoice draft (#111): clone all
	 * content (recipient, seller contact, references, notes, texts, positions)
	 * into a new TYPE_INVOICE draft that only gets its own sequential number when
	 * committed. The invoice links back to the quote (related_quote_id) and
	 * carries the quote number as its reference; the quote flips to 'converted'.
	 *
	 * @return array<string, mixed> the new invoice draft
	 * @throws NotFoundException|IllegalStateException
	 */
	public function convertToInvoice(int $id, string $userId): array {
		$this->assertQuoteConvertible($this->assertCommittedQuote($this->findById($id)));
		$now = new DateTime();

		$this->db->beginTransaction();
		try {
			// Lock and re-check so a double convert cannot create two invoices and
			// so a concurrent reject/convert cannot slip through the pre-check.
			$quote = $this->assertCommittedQuote($this->findByIdForUpdate($id));
			$this->assertQuoteConvertible($quote);
			$quoteItems = $this->itemMapper->findByInvoice((int)$quote->getId());

			$invoice = new Invoice();
			$invoice->setOwnerUserId($userId);
			$invoice->setStatus(Invoice::STATUS_DRAFT);
			$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
			$invoice->setCreatedAt($now);
			$invoice->setUpdatedAt($now);
			$this->copyRecipient($quote, $invoice);
			$invoice->setSellerContactPerson($quote->getSellerContactPerson());
			$invoice->setSellerContactPhone($quote->getSellerContactPhone());
			$invoice->setSellerContactEmail($quote->getSellerContactEmail());
			$invoice->setSpecialTaxCase($quote->getSpecialTaxCase());
			$invoice->setGreeting($quote->getGreeting());
			$invoice->setCustomFields($quote->getCustomFields());
			$invoice->setExtraText($quote->getExtraText());
			// Carry the agreed payment/discount conditions into the invoice draft
			// (mirrors duplicate()); the user can still adjust them before commit.
			$invoice->setPaymentTermDays($quote->getPaymentTermDays());
			$invoice->setDiscountTerms($quote->getDiscountTerms());
			// Carry the business references over; our own reference points at the
			// source quote so the link is visible on the invoice (BT-25-ish).
			$invoice->setReferenceNumber($quote->getNumber());
			$invoice->setOrderNumber($quote->getOrderNumber());
			$invoice->setBuyerReference($quote->getBuyerReference());
			$invoice->setContractNumber($quote->getContractNumber());
			$invoice->setProjectReference($quote->getProjectReference());
			$invoice->setPerformanceDate($quote->getPerformanceDate());
			$invoice->setPerformancePeriodStart($quote->getPerformancePeriodStart());
			$invoice->setPerformancePeriodEnd($quote->getPerformancePeriodEnd());
			$invoice->setRelatedQuoteId((int)$quote->getId());
			$invoice = $this->invoiceMapper->insert($invoice);

			foreach ($quoteItems as $item) {
				$line = new InvoiceItem();
				$line->setInvoiceId((int)$invoice->getId());
				$line->setProductId($item->getProductId());
				$line->setName($item->getName());
				$line->setDescription($item->getDescription());
				$line->setQuantity($item->getQuantity());
				$line->setUnitCode($item->getUnitCode());
				$line->setUnitLabel($item->getUnitLabel());
				$line->setUnitPriceE4($item->getUnitPriceE4());
				$line->setTaxRateBp($item->getTaxRateBp());
				$line->setLineTotalCents($item->getLineTotalCents());
				$line->setSortOrder($item->getSortOrder());
				$this->itemMapper->insert($line);
			}
			$this->recomputeTotals($invoice);
			$this->invoiceMapper->update($invoice);

			$quote->setQuoteStatus(Invoice::QUOTE_CONVERTED);
			$quote->setUpdatedAt($now);
			$this->invoiceMapper->update($quote);

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
		return $this->present($invoice);
	}

	/**
	 * Render a committed quote as a plain PDF — visible layout only, no ZUGFeRD
	 * XML (a quote is not an e-invoice).
	 *
	 * @return array{filename: string, content: string}
	 * @throws NotFoundException|IllegalStateException
	 */
	public function generateQuotePdf(int $id): array {
		$quote = $this->assertCommittedQuote($this->findById($id));
		$items = $this->itemMapper->findByInvoice((int)$quote->getId());
		$settings = $this->settingsService->getCompany();
		$content = $this->zugferdService->generateQuotePdf($quote, $items, $settings);
		return ['filename' => $this->quoteFileName($quote), 'content' => $content];
	}

	/**
	 * Render a DRAFT quote as a watermarked preview PDF.
	 *
	 * @return array{filename: string, content: string}
	 * @throws NotFoundException|IllegalStateException
	 */
	public function generateQuotePreviewPdf(int $id): array {
		$quote = $this->assertQuoteType($this->findById($id));
		if ($quote->getStatus() !== Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Die Vorschau ist nur für Angebots-Entwürfe verfügbar. Festgeschriebene Angebote können als PDF heruntergeladen werden.');
		}
		$items = $this->itemMapper->findByInvoice((int)$quote->getId());
		$settings = $this->settingsService->getCompany();
		$content = $this->zugferdService->generateQuotePreviewPdf($quote, $items, $settings);
		return ['filename' => 'angebot-entwurf-' . $quote->getId() . '.pdf', 'content' => $content];
	}

	/**
	 * Send a committed quote to a recipient as a PDF mail attachment.
	 *
	 * @throws NotFoundException|IllegalStateException|ValidationException
	 */
	public function sendQuoteToCustomer(int $id, string $to, string $subject, string $body): void {
		$quote = $this->assertCommittedQuote($this->findById($id));
		if (trim($subject) === '') {
			throw new ValidationException($this->l10n->t('Ein Betreff ist erforderlich.'));
		}
		$settings = $this->settingsService->getCompany();
		$items = $this->itemMapper->findByInvoice((int)$quote->getId());
		$pdf = $this->zugferdService->generateQuotePdf($quote, $items, $settings);
		$this->mailService->sendInvoicePdf($to, $subject, $body, $pdf, $this->quoteFileName($quote), $settings, $this->settingsService->getSmtpConfig());
	}

	private function quoteFileName(Invoice $quote): string {
		$number = trim((string)$quote->getNumber());
		$base = $number !== '' ? 'Angebot-' . $number : 'angebot-' . $quote->getId();
		$base = InvoiceCalculator::sanitizeFileName($base);
		if ($base === '') {
			$base = 'angebot-' . $quote->getId();
		}
		return $base . '.pdf';
	}

	/**
	 * @throws NotFoundException
	 */
	private function assertQuoteType(Invoice $quote): Invoice {
		if ($quote->getInvoiceType() !== Invoice::TYPE_QUOTE) {
			throw new NotFoundException('Angebot nicht gefunden.');
		}
		return $quote;
	}

	/**
	 * @throws NotFoundException|IllegalStateException
	 */
	private function assertQuoteDraft(Invoice $quote): Invoice {
		$this->assertQuoteType($quote);
		if ($quote->getStatus() !== Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Festgeschriebene Angebote können nicht mehr geändert werden.');
		}
		return $quote;
	}

	/**
	 * @throws NotFoundException|IllegalStateException
	 */
	private function assertCommittedQuote(Invoice $quote): Invoice {
		$this->assertQuoteType($quote);
		if ($quote->getStatus() !== Invoice::STATUS_COMMITTED) {
			throw new IllegalStateException('Diese Aktion ist nur für festgeschriebene Angebote möglich.');
		}
		return $quote;
	}

	/**
	 * A quote can only be turned into an invoice while it is still live — open,
	 * expired or accepted. A rejected quote was declined and a converted one has
	 * already produced an invoice; both are terminal for conversion. Accepting or
	 * rejecting an offer stays freely reversible (a customer may reconsider), but
	 * a rejected offer must be re-accepted before it can become an invoice.
	 *
	 * @throws IllegalStateException
	 */
	private function assertQuoteConvertible(Invoice $quote): void {
		$status = $quote->getQuoteStatus();
		if ($status === Invoice::QUOTE_CONVERTED) {
			throw new IllegalStateException('Dieses Angebot wurde bereits in eine Rechnung übernommen.');
		}
		if ($status === Invoice::QUOTE_REJECTED) {
			throw new IllegalStateException('Ein abgelehntes Angebot kann nicht in eine Rechnung übernommen werden.');
		}
	}

	/**
	 * A quote can be revised from any live state, but not once it is already
	 * terminal for this purpose: a converted quote already produced an invoice
	 * (revising it would let the source's 'converted' status be silently
	 * overwritten with 'superseded' once the revision commits), and a superseded
	 * quote already has a newer revision.
	 *
	 * @throws IllegalStateException
	 */
	private function assertQuoteRevisable(Invoice $quote): void {
		$status = $quote->getQuoteStatus();
		if ($status === Invoice::QUOTE_CONVERTED) {
			throw new IllegalStateException('Ein übernommenes Angebot kann nicht mehr revidiert werden.');
		}
		if ($status === Invoice::QUOTE_SUPERSEDED) {
			throw new IllegalStateException('Dieses Angebot wurde bereits revidiert.');
		}
	}

	private function parseDate(mixed $value): ?DateTime {
		if (!is_string($value) || trim($value) === '') {
			return null;
		}
		$date = DateTime::createFromFormat('Y-m-d', substr($value, 0, 10));
		if ($date === false) {
			return null;
		}
		$date->setTime(0, 0, 0);
		return $date;
	}

	/**
	 * Encode the plain-text invoice notes (BT-22) as a JSON list of strings
	 * for the custom_fields column. Empty entries are dropped.
	 */
	private function encodeNotes(mixed $value): ?string {
		if (!is_array($value)) {
			return null;
		}
		$clean = [];
		foreach ($value as $entry) {
			if (is_string($entry) && trim($entry) !== '') {
				$clean[] = trim($entry);
			}
		}
		return $clean === [] ? null : json_encode($clean, JSON_UNESCAPED_UNICODE);
	}
}
