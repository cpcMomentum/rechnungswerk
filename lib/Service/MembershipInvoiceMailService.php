<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\MembershipInvoiceMail;
use OCA\Rechnungswerk\Db\MembershipInvoiceMailMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\DB\Exception as DBException;
use OCP\IDBConnection;
use Psr\Log\LoggerInterface;

/**
 * Sicherer, idempotenter Mailversand einer einzelnen Beitragsrechnung.
 *
 * Der eigentliche Versand erfolgt über den bestehenden MailService.
 * Dieser Service kapselt ausschließlich die Vereinslogik sowie den
 * persistenten Versandstatus der Beitragsrechnung.
 *
 * Grundregel:
 *
 * - sent:
 *   niemals erneut automatisch versenden
 *
 * - sending:
 *   Ausgang möglicherweise unklar, niemals automatisch erneut versenden
 *
 * - failed:
 *   eindeutig fehlgeschlagen, aber ebenfalls kein automatischer Retry
 *
 * - kein Versandstatus:
 *   darf bei confirm=true einmalig für den Versand reserviert werden
 */
final class MembershipInvoiceMailService {

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly MembershipInvoiceMailMapper $mailMapper,
		private readonly InvoiceService $invoiceService,
		private readonly MailService $mailService,
		private readonly SettingsService $settingsService,
		private readonly IDBConnection $db,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Beitragsrechnung prüfen bzw. versenden.
	 *
	 * confirm=false:
	 *   Reiner Dry-Run. Keine Datenbankänderung und kein Mailversand.
	 *
	 * confirm=true:
	 *   Eine bislang noch nicht versandte Beitragsrechnung darf
	 *   einmalig für den Versand reserviert und versendet werden.
	 *
	 * @return array<string, mixed>
	 */
	public function send(
		int $invoiceId,
		int $year,
		bool $confirm = false,
	): array {
		$invoice = $this->invoiceMapper->findOne($invoiceId);

		$this->validateInvoice($invoice, $year);

		$recipientEmail = trim(
			(string)$invoice->getRecipientEmail()
		);

		$expectedSha256 = trim(
			(string)$invoice->getDocumentSha256()
		);

		/*
		 * generatePdf() liefert bei einer festgeschriebenen Rechnung
		 * über InvoiceService::documentFor() bevorzugt den eingefrorenen
		 * Beleg.
		 *
		 * Zusätzlich wird der gelesene Inhalt zwingend gegen den beim
		 * Festschreiben gespeicherten SHA-256 geprüft.
		 */
		$document = $this->invoiceService->generatePdf(
			$invoiceId
		);

		$pdfContent = (string)($document['content'] ?? '');
		$fileName = trim(
			(string)($document['filename'] ?? '')
		);

		if ($fileName === '') {
			throw new \RuntimeException(
				'Für den Rechnungsbeleg fehlt der PDF-Dateiname.'
			);
		}

		$actualSha256 = hash(
			'sha256',
			$pdfContent
		);

		if (
			!hash_equals(
				$expectedSha256,
				$actualSha256
			)
		) {
			throw new \RuntimeException(
				'Der eingefrorene Rechnungsbeleg stimmt nicht mit dem gespeicherten SHA-256 überein.'
			);
		}

		/*
		 * Der Mailinhalt wird bereits für den Dry-Run erzeugt.
		 * Dadurch kann vor dem echten Versand exakt geprüft werden,
		 * was an die Mitglieder gesendet würde.
		 */
		$subject = $this->buildSubject(
			$invoice,
			$year
		);

		$body = $this->buildBody(
			$invoice,
			$year
		);

		$existing = $this->findExisting(
			$invoiceId
		);

		if ($existing !== null) {
			$this->assertStateMatches(
				$existing,
				$recipientEmail,
				$actualSha256
			);

			$status = (string)$existing->getStatus();

			if (
				$status ===
				MembershipInvoiceMail::STATUS_SENT
			) {
				return $this->result(
					$invoice,
					$existing,
					'already_sent',
					$fileName,
					$actualSha256,
					$subject,
					$body
				);
			}

			if (
				$status ===
				MembershipInvoiceMail::STATUS_SENDING
			) {
				return $this->result(
					$invoice,
					$existing,
					'uncertain',
					$fileName,
					$actualSha256,
					$subject,
					$body
				);
			}

			if (
				$status ===
				MembershipInvoiceMail::STATUS_FAILED
			) {
				if ($confirm) {
					return $this->result(
						$invoice,
						$existing,
						'retry_required',
						$fileName,
						$actualSha256,
						$subject,
						$body
					);
				}

				return $this->result(
					$invoice,
					$existing,
					'ready_to_retry',
					$fileName,
					$actualSha256,
					$subject,
					$body
				);
			}

			throw new \RuntimeException(
				sprintf(
					'Unbekannter Versandstatus "%s" für Rechnung %d.',
					$status,
					$invoiceId
				)
			);
		}

		/*
		 * Dry-Run:
		 *
		 * Bis hierher wurden Rechnung, eingefrorenes Dokument,
		 * SHA-256, Empfängeradresse und Mailinhalt geprüft.
		 *
		 * Es wird weder ein Versandstatus angelegt noch eine Mail
		 * versendet.
		 */
		if (!$confirm) {
			return [
				'invoiceId' =>
					(int)$invoice->getId(),
				'invoiceNumber' =>
					(string)$invoice->getNumber(),
				'referenceNumber' =>
					(string)$invoice->getReferenceNumber(),
				'recipientEmail' =>
					$recipientEmail,
				'status' =>
					'ready_to_send',
				'subject' =>
					$subject,
				'body' =>
					$body,
				'fileName' =>
					$fileName,
				'sha256' =>
					$actualSha256,
				'attemptCount' =>
					0,
				'messageId' =>
					null,
				'sentAt' =>
					null,
				'error' =>
					null,
			];
		}

		/*
		 * Vor jedem externen Netzwerkzugriff muss persistent
		 * STATUS_SENDING gespeichert und committed sein.
		 *
		 * Stirbt PHP nach diesem Punkt, verhindert STATUS_SENDING
		 * jeden späteren automatischen Doppelversand.
		 */
		$mailState = $this->reserveSend(
			$invoiceId,
			$recipientEmail,
			$actualSha256
		);

		/** @var MembershipInvoiceMail $state */
		$state = $mailState['state'];

		if ($mailState['reserved'] !== true) {
			return $this->result(
				$invoice,
				$state,
				(string)$mailState['status'],
				$fileName,
				$actualSha256,
				$subject,
				$body
			);
		}

		/*
		 * Erst nachdem STATUS_SENDING persistent gespeichert wurde,
		 * darf der bestehende MailService aufgerufen werden.
		 */
		try {
			$messageId =
				$this->mailService->sendInvoicePdf(
					$recipientEmail,
					$subject,
					$body,
					$pdfContent,
					$fileName,
					$this->settingsService->getCompany(),
					$this->settingsService->getSmtpConfig()
				);
		} catch (ValidationException $e) {
			/*
			 * Die Empfängeradresse wird durch MailService vor jedem
			 * Netzwerkzugriff geprüft.
			 *
			 * Dieser Fehler ist deshalb eindeutig: Es wurde keine Mail
			 * an einen Mailserver übergeben.
			 */
			$this->markFailed(
				$state,
				$e
			);

			return $this->result(
				$invoice,
				$state,
				'failed',
				$fileName,
				$actualSha256,
				$subject,
				$body
			);
		} catch (\Throwable $e) {
			/*
			 * Bei SMTP-, Transport- oder sonstigen Mailerfehlern
			 * lässt sich nicht in jedem Fall beweisen, ob die Nachricht
			 * möglicherweise bereits angenommen wurde.
			 *
			 * STATUS_SENDING bleibt deshalb bestehen.
			 */
			$this->markUncertain(
				$state,
				$e
			);

			return $this->result(
				$invoice,
				$state,
				'uncertain',
				$fileName,
				$actualSha256,
				$subject,
				$body
			);
		}

		/*
		 * MailService ist ohne Exception zurückgekehrt.
		 *
		 * Erst jetzt darf STATUS_SENT gespeichert werden.
		 */
		try {
			$now = new \DateTime();

			$state->setStatus(
				MembershipInvoiceMail::STATUS_SENT
			);

			$state->setSentAt(
				$now
			);

			$state->setUpdatedAt(
				$now
			);

			$state->setLastError(
				null
			);

			if (
				$messageId !== null
				&& trim($messageId) !== ''
			) {
				$state->setMessageId(
					$messageId
				);
			}

			$state =
				$this->mailMapper->update(
					$state
				);
		} catch (\Throwable $e) {
			/*
			 * Die Mail wurde zu diesem Zeitpunkt bereits erfolgreich
			 * an den Mailer übergeben.
			 *
			 * Ein fehlgeschlagenes DB-Update darf deshalb niemals
			 * STATUS_FAILED erzeugen und niemals einen automatischen
			 * erneuten Versand ermöglichen.
			 */
			$this->logger->error(
				'Rechnungswerk: Beitragsrechnung versendet, Versandstatus konnte nicht gespeichert werden.',
				[
					'exception' => $e,
					'invoice' => $invoiceId,
				]
			);

			return $this->result(
				$invoice,
				$state,
				'uncertain',
				$fileName,
				$actualSha256,
				$subject,
				$body,
				'Die E-Mail wurde versendet, der erfolgreiche Versand konnte jedoch nicht abschließend gespeichert werden.'
			);
		}

		return $this->result(
			$invoice,
			$state,
			'sent',
			$fileName,
			$actualSha256,
			$subject,
			$body
		);
	}

	/**
	 * Prüft, ob ausschließlich eine festgeschriebene
	 * Beitragsrechnung des angegebenen Jahres verarbeitet wird.
	 */
	private function validateInvoice(
		Invoice $invoice,
		int $year,
	): void {
		if (
			$invoice->getInvoiceType()
			!== Invoice::TYPE_INVOICE
		) {
			throw new \RuntimeException(
				'Keine Rechnung.'
			);
		}

		if (
			$invoice->getStatus()
			!== Invoice::STATUS_COMMITTED
		) {
			throw new \RuntimeException(
				'Nur festgeschriebene Beitragsrechnungen können versendet werden.'
			);
		}

		$reference = trim(
			(string)$invoice->getReferenceNumber()
		);

		if (
			!str_starts_with(
				$reference,
				'BEITRAG-' . $year . '-'
			)
		) {
			throw new \RuntimeException(
				'Die Rechnung gehört nicht zum angegebenen Beitragsjahr.'
			);
		}

		if (
			$invoice->getDocumentFrozenAt()
			=== null
		) {
			throw new \RuntimeException(
				'Der Rechnungsbeleg ist noch nicht eingefroren.'
			);
		}

		$sha256 = trim(
			(string)$invoice->getDocumentSha256()
		);

		if (
			strlen($sha256) !== 64
			|| preg_match(
				'/^[0-9a-f]{64}$/i',
				$sha256
			) !== 1
		) {
			throw new \RuntimeException(
				'Für den eingefrorenen Rechnungsbeleg fehlt ein gültiger SHA-256.'
			);
		}

		if (
			trim(
				(string)$invoice->getRecipientEmail()
			) === ''
		) {
			throw new \RuntimeException(
				'Für die Rechnung ist keine Empfängeradresse gespeichert.'
			);
		}
	}

	/**
	 * Bereits vorhandenen Versandstatus laden.
	 */
	private function findExisting(
		int $invoiceId,
	): ?MembershipInvoiceMail {
		try {
			return $this->mailMapper
				->findByInvoiceId(
					$invoiceId
				);
		} catch (DoesNotExistException) {
			return null;
		}
	}

	/**
	 * Prüft, ob ein vorhandener Versandstatus weiterhin exakt
	 * zu Rechnung, Empfängeradresse und eingefrorenem PDF gehört.
	 */
	private function assertStateMatches(
		MembershipInvoiceMail $state,
		string $recipientEmail,
		string $documentSha256,
	): void {
		if (
			!hash_equals(
				(string)$state->getDocumentSha256(),
				$documentSha256
			)
		) {
			throw new \RuntimeException(
				'Der gespeicherte Versandstatus gehört zu einem anderen Rechnungsbeleg.'
			);
		}

		/*
		 * Die beim Versand protokollierte Adresse muss exakt der
		 * Empfängeradresse der festgeschriebenen Rechnung entsprechen.
		 */
		if (
			trim(
				(string)$state->getRecipientEmail()
			) !== $recipientEmail
		) {
			throw new \RuntimeException(
				'Die gespeicherte Versandadresse stimmt nicht mit der Rechnung überein.'
			);
		}
	}

	/**
	 * Reserviert eine Rechnung atomar für den Mailversand.
	 *
	 * Wichtig:
	 *
	 * Nur wenn bislang überhaupt kein Versandstatus existiert,
	 * darf ein neuer STATUS_SENDING-Datensatz angelegt werden.
	 *
	 * Vorhandene Zustände werden niemals automatisch verändert.
	 *
	 * @return array{
	 *     reserved: bool,
	 *     status: string,
	 *     state: MembershipInvoiceMail
	 * }
	 */
	private function reserveSend(
		int $invoiceId,
		string $recipientEmail,
		string $documentSha256,
	): array {
		$this->db->beginTransaction();

		try {
			try {
				$state =
					$this->mailMapper
						->findByInvoiceIdForUpdate(
							$invoiceId
						);

				$this->assertStateMatches(
					$state,
					$recipientEmail,
					$documentSha256
				);

				$status =
					(string)$state->getStatus();

				if (
					$status ===
					MembershipInvoiceMail::STATUS_SENT
				) {
					$this->db->commit();

					return [
						'reserved' => false,
						'status' => 'already_sent',
						'state' => $state,
					];
				}

				if (
					$status ===
					MembershipInvoiceMail::STATUS_SENDING
				) {
					$this->db->commit();

					return [
						'reserved' => false,
						'status' => 'uncertain',
						'state' => $state,
					];
				}

				if (
					$status ===
					MembershipInvoiceMail::STATUS_FAILED
				) {
					$this->db->commit();

					return [
						'reserved' => false,
						'status' => 'retry_required',
						'state' => $state,
					];
				}

				throw new \RuntimeException(
					sprintf(
						'Unbekannter Versandstatus "%s" für Rechnung %d.',
						$status,
						$invoiceId
					)
				);
			} catch (DoesNotExistException) {
				/*
				 * Für diese Rechnung existiert noch keinerlei
				 * Versandstatus.
				 *
				 * Erst jetzt darf STATUS_SENDING angelegt werden.
				 */
				$now = new \DateTime();

				$state =
					new MembershipInvoiceMail();

				$state->setInvoiceId(
					$invoiceId
				);

				$state->setRecipientEmail(
					$recipientEmail
				);

				$state->setDocumentSha256(
					$documentSha256
				);

				$state->setStatus(
					MembershipInvoiceMail::STATUS_SENDING
				);

				$state->setAttemptCount(
					1
				);

				$state->setStartedAt(
					$now
				);

				$state->setCreatedAt(
					$now
				);

				$state->setUpdatedAt(
					$now
				);

				try {
					$state =
						$this->mailMapper->insert(
							$state
						);

					$this->db->commit();

					return [
						'reserved' => true,
						'status' => 'sending',
						'state' => $state,
					];
				} catch (DBException $e) {
					/*
					 * Möglicherweise hat ein paralleler Request
					 * aufgrund von UNIQUE(invoice_id) gewonnen.
					 */
					$this->db->rollBack();

					try {
						$existing =
							$this->mailMapper
								->findByInvoiceId(
									$invoiceId
								);
					} catch (DoesNotExistException) {
						/*
						 * Kein konkurrierender Datensatz vorhanden:
						 * Dann war die DBException kein erwarteter
						 * UNIQUE-Konflikt.
						 */
						throw $e;
					}

					$this->assertStateMatches(
						$existing,
						$recipientEmail,
						$documentSha256
					);

					$status =
						(string)$existing->getStatus();

					if (
						$status ===
						MembershipInvoiceMail::STATUS_SENT
					) {
						return [
							'reserved' => false,
							'status' => 'already_sent',
							'state' => $existing,
						];
					}

					if (
						$status ===
						MembershipInvoiceMail::STATUS_SENDING
					) {
						return [
							'reserved' => false,
							'status' => 'uncertain',
							'state' => $existing,
						];
					}

					if (
						$status ===
						MembershipInvoiceMail::STATUS_FAILED
					) {
						return [
							'reserved' => false,
							'status' => 'retry_required',
							'state' => $existing,
						];
					}

					throw new \RuntimeException(
						sprintf(
							'Unbekannter Versandstatus "%s" für Rechnung %d.',
							$status,
							$invoiceId
						)
					);
				}
			}
		} catch (\Throwable $e) {
			if ($this->db->inTransaction()) {
				$this->db->rollBack();
			}

			throw $e;
		}
	}

	/**
	 * Eindeutig fehlgeschlagenen Versand speichern.
	 *
	 * Aktuell wird STATUS_FAILED ausschließlich für eine vom
	 * MailService vor dem Netzwerkzugriff abgelehnte Empfängeradresse
	 * verwendet.
	 */
	private function markFailed(
		MembershipInvoiceMail $state,
		\Throwable $error,
	): void {
		try {
			$now = new \DateTime();

			$state->setStatus(
				MembershipInvoiceMail::STATUS_FAILED
			);

			$state->setUpdatedAt(
				$now
			);

			$state->setLastError(
				mb_substr(
					$error->getMessage(),
					0,
					4000
				)
			);

			$this->mailMapper->update(
				$state
			);
		} catch (\Throwable $persistError) {
			$this->logger->error(
				'Rechnungswerk: Fehlerstatus des Beitragsrechnungsversands konnte nicht gespeichert werden.',
				[
					'exception' => $persistError,
					'invoice' => $state->getInvoiceId(),
					'mailException' => $error,
				]
			);
		}
	}

	/**
	 * Unklaren Versandzustand protokollieren.
	 *
	 * STATUS_SENDING bleibt bewusst bestehen, damit kein späterer
	 * Batch automatisch erneut versendet.
	 */
	private function markUncertain(
		MembershipInvoiceMail $state,
		\Throwable $error,
	): void {
		try {
			$now = new \DateTime();

			$state->setUpdatedAt(
				$now
			);

			$state->setLastError(
				mb_substr(
					$error->getMessage(),
					0,
					4000
				)
			);

			$this->mailMapper->update(
				$state
			);
		} catch (\Throwable $persistError) {
			$this->logger->error(
				'Rechnungswerk: Unklarer Zustand des Beitragsrechnungsversands konnte nicht gespeichert werden.',
				[
					'exception' => $persistError,
					'invoice' => $state->getInvoiceId(),
					'mailException' => $error,
				]
			);
		}
	}

	private function buildSubject(
		Invoice $invoice,
		int $year,
	): string {
		return sprintf(
			'Beitragsrechnung %d – %s',
			$year,
			(string)$invoice->getNumber()
		);
	}

	private function buildBody(
		Invoice $invoice,
		int $year,
	): string {
		$name = trim(
			(string)$invoice->getRecipientName()
		);

		$salutation =
			$name !== ''
				? 'Guten Tag ' . $name . ','
				: 'Guten Tag,';

		$settings =
			$this->settingsService->getCompany();

		$senderName = trim(
			(string)$settings->getClubName()
		);

		if ($senderName === '') {
			$senderName = trim(
				(string)$settings->getCompanyName()
			);
		}

		$body = $salutation
			. "\n\n"
			. 'anbei erhalten Sie Ihre Beitragsrechnung für das Jahr '
			. $year
			. '.'
			. "\n\n"
			. 'Rechnungsnummer: '
			. (string)$invoice->getNumber()
			. "\n"
			. 'Referenz: '
			. (string)$invoice->getReferenceNumber()
			. "\n\n"
			. 'Die Rechnung ist als PDF beigefügt.'
			. "\n\n"
			. 'Mit freundlichen Grüßen';

		if ($senderName !== '') {
			$body .= "\n\n" . $senderName;
		}

		return $body;
	}

	/**
	 * Einheitliches Ergebnis für bereits vorhandene bzw.
	 * abgeschlossene Versandzustände.
	 *
	 * @return array<string, mixed>
	 */
	private function result(
		Invoice $invoice,
		MembershipInvoiceMail $state,
		string $status,
		string $fileName,
		string $sha256,
		string $subject,
		string $body,
		?string $errorOverride = null,
	): array {
		return [
			'invoiceId' =>
				(int)$invoice->getId(),
			'invoiceNumber' =>
				(string)$invoice->getNumber(),
			'referenceNumber' =>
				(string)$invoice->getReferenceNumber(),
			'recipientEmail' =>
				(string)$invoice->getRecipientEmail(),
			'status' =>
				$status,
			'subject' =>
				$subject,
			'body' =>
				$body,
			'fileName' =>
				$fileName,
			'sha256' =>
				$sha256,
			'attemptCount' =>
				(int)$state->getAttemptCount(),
			'messageId' =>
				$state->getMessageId(),
			'sentAt' =>
				$state->getSentAt()?->format(
					\DateTimeInterface::ATOM
				),
			'error' =>
				$errorOverride
				?? $state->getLastError(),
		];
	}
}