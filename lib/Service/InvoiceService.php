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
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

class InvoiceService {

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly InvoiceItemMapper $itemMapper,
		private readonly SettingsService $settingsService,
		private readonly ZugferdService $zugferdService,
		private readonly MailService $mailService,
		private readonly IDBConnection $db,
		private readonly LoggerInterface $logger,
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
		return array_map(static function (Invoice $invoice) use ($numbersById): array {
			$data = $invoice->jsonSerialize();
			$relatedId = $invoice->getRelatedInvoiceId();
			$data['relatedNumber'] = $relatedId !== null ? ($numbersById[$relatedId] ?? null) : null;
			return $data;
		}, $invoices);
	}

	/**
	 * @return array<string, mixed> invoice fields plus an "items" list
	 * @throws NotFoundException
	 */
	public function get(int $id): array {
		$invoice = $this->findById($id);
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

		$this->db->beginTransaction();
		try {
			$invoice = $this->invoiceMapper->insert($invoice);
			$this->replaceItems($invoice, $this->extractItems($data));
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
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function update(int $id, array $data): array {
		// Fast 404/409 outside the transaction for a quick user-visible error.
		$this->assertDraft($this->findById($id));

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock so a concurrent commit() cannot slip
			// between our pre-check and this write and leave a committed
			// invoice with its status overwritten back to draft.
			$invoice = $this->findByIdForUpdate($id);
			$this->assertDraft($invoice);
			$this->applyHeader($invoice, $data);
			if (array_key_exists('items', $data)) {
				$this->replaceItems($invoice, $this->extractItems($data));
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
		$invoice = $this->findById($id);
		$this->assertDraft($invoice);

		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		if (count($items) === 0) {
			throw new ValidationException('Eine Rechnung ohne Positionen kann nicht festgeschrieben werden.');
		}
		if (($invoice->getRecipientName() ?? '') === '') {
			throw new ValidationException('Ein Empfänger ist zum Festschreiben erforderlich.');
		}

		// Create the settings row outside the transaction: a failed INSERT would
		// otherwise abort the commit transaction on PostgreSQL.
		$this->settingsService->getCompany();

		$now = new DateTime();
		$year = (int)$now->format('Y');

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock and re-check the status inside the
			// transaction. Two concurrent commits on the same draft would
			// otherwise both pass the pre-check and each reserve a number,
			// leaving a gap in the sequence (GoBD violation).
			$invoice = $this->findByIdForUpdate($id);
			$this->assertDraft($invoice);

			$number = $this->settingsService->reserveNextNumber($year);
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
		$result = $this->present($invoice);
		$result['datevMailSent'] = $this->maybeSendToDatev($invoice);
		return $result;
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
			$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
			$pdf = $this->zugferdService->generatePdf($invoice, $items, $settings, $this->relatedNumber($invoice));
			$number = (string)$invoice->getNumber();
			$this->mailService->sendInvoicePdf(
				$target,
				'ZUGFeRD-Rechnung ' . $number,
				"Automatische DATEV-Übergabe aus Rechnungswerk.\n\nRechnung: " . $number
					. "\n\nDie E-Rechnung (ZUGFeRD-PDF) ist als Anhang beigefügt.",
				$pdf,
				$number . '.pdf',
				$settings,
				$this->settingsService->getSmtpConfig(),
			);
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
		$invoice = $this->findById($id);
		if ($invoice->getStatus() !== Invoice::STATUS_COMMITTED) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können versendet werden.');
		}
		if (trim($subject) === '') {
			throw new ValidationException('Ein Betreff ist erforderlich.');
		}
		$settings = $this->settingsService->getCompany();
		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$pdf = $this->zugferdService->generatePdf($invoice, $items, $settings, $this->relatedNumber($invoice));
		$base = ($invoice->getNumber() ?? '') !== '' ? (string)$invoice->getNumber() : 'rechnung-' . $invoice->getId();
		$this->mailService->sendInvoicePdf($to, $subject, $body, $pdf, $base . '.pdf', $settings, $this->settingsService->getSmtpConfig());
	}

	/**
	 * Storno: cancel a committed invoice by creating a negated cancellation
	 * document (own number) and marking the original as cancelled.
	 *
	 * @return array<string, mixed> the cancellation document
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function cancel(int $id, string $userId): array {
		$original = $this->findById($id);
		if ($original->getStatus() !== Invoice::STATUS_COMMITTED) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können storniert werden.');
		}

		$this->settingsService->getCompany();

		$now = new DateTime();
		$year = (int)$now->format('Y');

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
			$storno->setIssueDate($now);
			$storno->setCommittedAt($now);
			$storno->setCreatedAt($now);
			$storno->setUpdatedAt($now);
			$storno->setNumber($this->settingsService->reserveNextNumber($year));
			$storno = $this->invoiceMapper->insert($storno);

			foreach ($originalItems as $item) {
				$copy = new InvoiceItem();
				$copy->setInvoiceId((int)$storno->getId());
				$copy->setProductId($item->getProductId());
				$copy->setName($item->getName());
				$copy->setDescription($item->getDescription());
				$copy->setQuantity($item->getQuantity());
				$copy->setUnitCode($item->getUnitCode());
				$copy->setUnitPriceCents(-$item->getUnitPriceCents());
				$copy->setTaxRateBp($item->getTaxRateBp());
				$copy->setLineTotalCents(-$item->getLineTotalCents());
				$copy->setSortOrder($item->getSortOrder());
				$this->itemMapper->insert($copy);
			}
			$this->recomputeTotals($storno);
			$this->invoiceMapper->update($storno);

			$original->setStatus(Invoice::STATUS_CANCELLED);
			$original->setUpdatedAt($now);
			$this->invoiceMapper->update($original);

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		// Hand the cancellation document to DATEV as well (same fire-and-forget
		// rule as commit): the original was already transmitted, so the storno
		// must follow to keep the DATEV beleg state consistent. A mail failure is
		// only logged, never rolls back the (legally final) storno.
		$result = $this->present($storno);
		$result['datevMailSent'] = $this->maybeSendToDatev($storno);
		return $result;
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
		$invoice = $this->findById($id);
		if ($invoice->getStatus() === Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können als PDF heruntergeladen werden.');
		}
		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$settings = $this->settingsService->getCompany();
		$content = $this->zugferdService->generatePdf($invoice, $items, $settings, $this->relatedNumber($invoice));
		$base = ($invoice->getNumber() ?? '') !== '' ? (string)$invoice->getNumber() : 'rechnung-' . $invoice->getId();
		return ['filename' => $base . '.pdf', 'content' => $content];
	}

	// --- internals -------------------------------------------------------

	/**
	 * Resolve the number of the invoice a storno/credit note refers to, so it
	 * can be printed and embedded as the preceding-invoice reference (BG-3).
	 */
	private function relatedNumber(Invoice $invoice): ?string {
		$relatedId = $invoice->getRelatedInvoiceId();
		if ($relatedId === null) {
			return null;
		}
		try {
			return $this->invoiceMapper->findOne($relatedId)->getNumber();
		} catch (DoesNotExistException) {
			return null;
		}
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
			'orderNumber', 'buyerReference', 'specialTaxCase', 'greeting', 'extraText',
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
		if (array_key_exists('recipientCountry', $data)) {
			$country = $data['recipientCountry'];
			$invoice->setRecipientCountry($country !== null && $country !== '' ? (string)$country : 'DE');
		} elseif ($invoice->getRecipientCountry() === null) {
			$invoice->setRecipientCountry('DE');
		}
		foreach (['performanceDate', 'performancePeriodStart', 'performancePeriodEnd'] as $dateField) {
			if (array_key_exists($dateField, $data)) {
				$invoice->{'set' . ucfirst($dateField)}($this->parseDate($data[$dateField]));
			}
		}
		if (array_key_exists('customFields', $data)) {
			$invoice->setCustomFields($this->encodeCustomFields($data['customFields']));
		}
	}

	private function copyRecipient(Invoice $from, Invoice $to): void {
		$to->setRecipientName($from->getRecipientName());
		$to->setRecipientContactId($from->getRecipientContactId());
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
			$quantity = isset($row['quantity']) ? (string)$row['quantity'] : '1';
			$unitPriceCents = (int)($row['unitPriceCents'] ?? 0);
			$taxRateBp = $smallBusiness ? 0 : (int)($row['taxRateBp'] ?? 0);

			$name = (string)($row['name'] ?? '');
			if (mb_strlen($name) > 255) {
				throw new ValidationException('Positionsname darf maximal 255 Zeichen lang sein.');
			}

			$item = new InvoiceItem();
			$item->setProductId(isset($row['productId']) && $row['productId'] !== null ? (int)$row['productId'] : null);
			$item->setName($name);
			$item->setDescription(isset($row['description']) && $row['description'] !== '' ? (string)$row['description'] : null);
			$item->setQuantity($quantity);
			$item->setUnitCode((string)($row['unitCode'] ?? InvoiceItem::UNIT_PIECE));
			$item->setUnitPriceCents($unitPriceCents);
			$item->setTaxRateBp($taxRateBp);
			$item->setLineTotalCents(InvoiceCalculator::lineTotalCents($quantity, $unitPriceCents));
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

	private function recomputeTotals(Invoice $invoice): void {
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
		$smallBusiness = $this->settingsService->getCompany()->getSmallBusiness() === 1;
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
		return $data;
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

	private function encodeCustomFields(mixed $value): ?string {
		if (!is_array($value)) {
			return null;
		}
		$clean = [];
		foreach ($value as $entry) {
			if (is_array($entry) && isset($entry['label'])) {
				$clean[] = [
					'label' => (string)$entry['label'],
					'value' => (string)($entry['value'] ?? ''),
				];
			}
		}
		return $clean === [] ? null : json_encode($clean);
	}
}
