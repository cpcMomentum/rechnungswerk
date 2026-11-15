<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Invoice;
use RuntimeException;

final class MembershipInvoiceFileBatchService {

	public function __construct(
		private readonly MemberDirectoryService $memberDirectoryService,
		private readonly InvoiceService $invoiceService,
		private readonly MembershipInvoiceFileService $membershipInvoiceFileService,
	) {
	}

	/**
	 * Prüft bzw. legt die festgeschriebenen Beitragsrechnungen
	 * eines Beitragsjahres im persönlichen Nextcloud-Dateibereich
	 * der jeweiligen Mitglieder ab.
	 *
	 * confirm=false:
	 *   Nur prüfen, nichts schreiben.
	 *
	 * confirm=true:
	 *   Sichtbare Kopie unter
	 *   Verein/Beitragsrechnungen/<Jahr>/
	 *   ablegen.
	 */
	public function storeBatch(
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
				'status' => null,
				'path' => null,
				'fileId' => null,
				'sha256' => null,
				'error' => null,
			];

			if ($uid === '') {
				$result['status'] = 'missing_uid';
				$result['error'] =
					'Für das Mitglied fehlt die Nextcloud-Benutzer-ID.';

				$results[] = $result;
				continue;
			}

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

			/*
			 * Sichtbare Datei darf ausschließlich aus einem
			 * bereits eingefrorenen Rechnungsbeleg entstehen.
			 *
			 * Damit verhindern wir bewusst den Fallback von
			 * InvoiceService::generatePdf() auf eine heutige
			 * Neuerzeugung.
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

			try {
				$stored =
					$this
						->membershipInvoiceFileService
						->store(
							$invoiceId,
							$uid,
							$year,
							$confirm
						);

				$result = array_merge(
					$result,
					$stored
				);
			} catch (\Throwable $e) {
				$result['status'] =
					'store_error';

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
	 * Liefert ausschließlich festgeschriebene Beitragsrechnungen.
	 *
	 * Entwürfe werden ausdrücklich ignoriert. Das ist wichtig,
	 * weil ein alter oder erneut angelegter Entwurf dieselbe
	 * BEITRAG-Referenz wie die bereits fertige Rechnung besitzen kann.
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
					$invoice['status']
					?? ''
				) !== Invoice::STATUS_COMMITTED
			) {
				continue;
			}

			$reference = trim(
				(string)(
					$invoice[
						'referenceNumber'
					]
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
							$result[
								$reference
							]['id']
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
			'readyToStore' => 0,
			'stored' => 0,
			'alreadyStored' => 0,
			'noCommittedInvoice' => 0,
			'documentNotFrozen' => 0,
			'missingUid' => 0,
			'missingMemberNumber' => 0,
			'errors' => 0,
		];

		foreach ($results as $result) {
			switch (
				(string)(
					$result['status']
					?? ''
				)
			) {
				case 'ready_to_store':
					$summary[
						'readyToStore'
					]++;
					break;

				case 'stored':
					$summary[
						'stored'
					]++;
					break;

				case 'already_stored':
					$summary[
						'alreadyStored'
					]++;
					break;

				case 'no_committed_invoice':
					$summary[
						'noCommittedInvoice'
					]++;
					break;

				case 'document_not_frozen':
					$summary[
						'documentNotFrozen'
					]++;
					break;

				case 'missing_uid':
					$summary[
						'missingUid'
					]++;
					break;

				case 'missing_member_number':
					$summary[
						'missingMemberNumber'
					]++;
					break;

				case 'store_error':
					$summary[
						'errors'
					]++;
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