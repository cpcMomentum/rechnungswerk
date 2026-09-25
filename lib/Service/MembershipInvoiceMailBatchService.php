<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Invoice;
use RuntimeException;

final class MembershipInvoiceMailBatchService {

	public function __construct(
		private readonly MemberDirectoryService $memberDirectoryService,
		private readonly InvoiceService $invoiceService,
		private readonly MembershipInvoiceMailService $membershipInvoiceMailService,
	) {
	}

	/**
	 * Prüft bzw. versendet die festgeschriebenen Beitragsrechnungen
	 * eines Beitragsjahres an die Mitglieder der konfigurierten Vereinsgruppe.
	 *
	 * Die Gruppe bestimmt ausschließlich die Grundgesamtheit und die
	 * Mitgliedsnummer. Empfängeradresse und Rechnungsbeleg stammen immer
	 * aus der bereits festgeschriebenen Rechnung.
	 *
	 * confirm=false:
	 *   Reiner Dry-Run. Keine Statusänderung, keine E-Mail.
	 *
	 * confirm=true:
	 *   Noch nicht versandte Beitragsrechnungen tatsächlich versenden.
	 */
	public function sendBatch(
		string $groupId,
		int $year,
		bool $confirm = false,
	): array {
		$groupId = trim($groupId);

		$this->validateYear($year);

		if ($groupId === '') {
			throw new RuntimeException(
				'Keine Vereinsgruppe angegeben.'
			);
		}

		$members =
			$this->memberDirectoryService
				->getMembers($groupId);

		$invoicesByReference =
			$this->findCommittedContributionInvoices(
				$year
			);

		$results = [];
		$seenReferences = [];

		foreach ($members as $member) {
			$uid = trim(
				(string)($member['uid'] ?? '')
			);

			$memberNumber = trim(
				(string)($member['memberNumber'] ?? '')
			);

			$result = [
				'uid' => $uid,
				'memberNumber' => $memberNumber,
				'invoiceId' => null,
				'invoiceNumber' => null,
				'referenceNumber' => null,
				'recipientEmail' => null,
				'status' => null,
				'fileName' => null,
				'sha256' => null,
				'attemptCount' => 0,
				'messageId' => null,
				'sentAt' => null,
				'error' => null,
			];

			if ($memberNumber === '') {
				$result['status'] =
					'missing_member_number';

				$result['error'] =
					'Für das Mitglied fehlt die Mitgliedsnummer.';

				$results[] = $result;
				continue;
			}

			$referenceNumber = sprintf(
				'BEITRAG-%d-%s',
				$year,
				$memberNumber
			);

			$result['referenceNumber'] =
				$referenceNumber;

			/*
			 * Doppelte Mitgliedsnummern wären beim Mailversand besonders
			 * gefährlich: dieselbe Rechnung könnte zwei Mitgliedern
			 * zugeordnet erscheinen. Deshalb hart abbrechen.
			 */
			if (isset($seenReferences[$referenceNumber])) {
				throw new RuntimeException(
					sprintf(
						'Doppelte Mitgliedsnummer für Beitragsreferenz "%s" in der Vereinsgruppe gefunden.',
						$referenceNumber
					)
				);
			}

			$seenReferences[$referenceNumber] = true;

			if (
				!isset(
					$invoicesByReference[
						$referenceNumber
					]
				)
			) {
				$result['status'] =
					'no_committed_invoice';

				$results[] = $result;
				continue;
			}

			$invoice =
				$invoicesByReference[
					$referenceNumber
				];

			$invoiceId =
				(int)($invoice['id'] ?? 0);

			$result['invoiceId'] =
				$invoiceId;

			$result['invoiceNumber'] =
				$invoice['number'] ?? null;

			$result['recipientEmail'] =
				$invoice['recipientEmail'] ?? null;

			/*
			 * Niemals einen heute neu gerenderten Beleg versenden.
			 * MembershipInvoiceMailService prüft zusätzlich den SHA-256
			 * des tatsächlich gelesenen PDF-Inhalts.
			 */
			$documentFrozenAt =
				$invoice['documentFrozenAt']
				?? null;

			if (
				!is_string($documentFrozenAt)
				|| trim($documentFrozenAt) === ''
			) {
				$result['status'] =
					'document_not_frozen';

				$result['error'] =
					'Der Rechnungsbeleg ist noch nicht eingefroren.';

				$results[] = $result;
				continue;
			}

			$recipientEmail = trim(
				(string)(
					$invoice['recipientEmail']
					?? ''
				)
			);

			if ($recipientEmail === '') {
				$result['status'] =
					'missing_recipient_email';

				$result['error'] =
					'Für die Rechnung ist keine Empfängeradresse gespeichert.';

				$results[] = $result;
				continue;
			}

			try {
				$sent =
					$this
						->membershipInvoiceMailService
						->send(
							$invoiceId,
							$year,
							$confirm
						);

				$result = array_merge(
					$result,
					$sent
				);
			} catch (\Throwable $e) {
				$result['status'] =
					'send_error';

				$result['error'] =
					$e->getMessage();

				$result['exception'] =
					get_class($e);
			}

			$results[] = $result;
		}

		return [
			'group' => $groupId,
			'year' => $year,
			'confirmed' => $confirm,
			'summary' =>
				$this->buildSummary(
					$results
				),
			'members' => $results,
		];
	}

	/**
	 * Ausschließlich normale, festgeschriebene Beitragsrechnungen.
	 *
	 * Entwürfe, Angebote und Stornobelege werden ignoriert.
	 */
	private function findCommittedContributionInvoices(
		int $year,
	): array {
		$prefix =
			'BEITRAG-' . $year . '-';

		$result = [];

		foreach (
			$this->invoiceService->list()
			as $invoice
		) {
			if (
				(string)(
					$invoice['invoiceType']
					?? ''
				) !== Invoice::TYPE_INVOICE
			) {
				continue;
			}

			if (
				(string)(
					$invoice['status']
					?? ''
				) !== Invoice::STATUS_COMMITTED
			) {
				continue;
			}

			$reference = trim(
				(string)(
					$invoice['referenceNumber']
					?? ''
				)
			);

			if (
				$reference === ''
				|| !str_starts_with(
					$reference,
					$prefix
				)
			) {
				continue;
			}

			if (isset($result[$reference])) {
				throw new RuntimeException(
					sprintf(
						'Doppelte festgeschriebene Beitragsreferenz "%s" gefunden: Rechnungen %d und %d.',
						$reference,
						(int)(
							$result[$reference]['id']
							?? 0
						),
						(int)(
							$invoice['id']
							?? 0
						)
					)
				);
			}

			$result[$reference] =
				$invoice;
		}

		return $result;
	}

	private function buildSummary(
		array $results,
	): array {
		$summary = [
			'total' => count($results),
			'readyToSend' => 0,
			'readyToRetry' => 0,
			'sent' => 0,
			'alreadySent' => 0,
			'uncertain' => 0,
			'retryRequired' => 0,
			'failed' => 0,
			'noCommittedInvoice' => 0,
			'documentNotFrozen' => 0,
			'missingMemberNumber' => 0,
			'missingRecipientEmail' => 0,
			'errors' => 0,
		];

		foreach ($results as $result) {
			switch (
				(string)(
					$result['status']
					?? ''
				)
			) {
				case 'ready_to_send':
					$summary['readyToSend']++;
					break;

				case 'ready_to_retry':
					$summary['readyToRetry']++;
					break;

				case 'sent':
					$summary['sent']++;
					break;

				case 'already_sent':
					$summary['alreadySent']++;
					break;

				case 'uncertain':
					$summary['uncertain']++;
					break;

				case 'retry_required':
					$summary['retryRequired']++;
					break;

				case 'failed':
					$summary['failed']++;
					break;

				case 'no_committed_invoice':
					$summary['noCommittedInvoice']++;
					break;

				case 'document_not_frozen':
					$summary['documentNotFrozen']++;
					break;

				case 'missing_member_number':
					$summary['missingMemberNumber']++;
					break;

				case 'missing_recipient_email':
					$summary['missingRecipientEmail']++;
					break;

				case 'send_error':
					$summary['errors']++;
					break;
			}
		}

		return $summary;
	}

	private function validateYear(
		int $year,
	): void {
		if (
			$year < 2000
			|| $year > 2100
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiges Beitragsjahr "%d".',
					$year
				)
			);
		}
	}
}