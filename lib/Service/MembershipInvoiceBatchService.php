<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use RuntimeException;

final class MembershipInvoiceBatchService {

	public function __construct(
		private readonly MemberDirectoryService $memberDirectoryService,
		private readonly MembershipFeeService $membershipFeeService,
		private readonly MembershipFeeConfigurationService $membershipFeeConfigurationService,
		private readonly InvoiceService $invoiceService,
	) {
	}

	/**
	 * Vorschau eines gespeicherten Beitragslaufs.
	 *
	 * Es werden KEINE Rechnungen erzeugt.
	 */
	public function preview(
		string $groupId,
		int $year,
	): array {
		$groupId = trim($groupId);

		$this->validateYear($year);

		if ($groupId === '') {
			throw new RuntimeException(
				'Keine Vereinsgruppe angegeben.'
			);
		}

		$configuration =
			$this->membershipFeeConfigurationService
				->getConfiguration(
					$year,
					$groupId
				);

		$members =
			$this->memberDirectoryService
				->getMembers($groupId);

		$result = [];

		foreach ($members as $member) {
			$result[] = $this->evaluateMember(
				$member,
				$configuration,
				$year
			);
		}

		return [
			'group' => $groupId,
			'year' => $year,

			'run' => $configuration['run'],

			'groupFees' =>
				$configuration['groupFees'],

			'membershipRules' =>
				$configuration['membershipRules'],

			'summary' =>
				$this->buildSummary($result),

			'members' => $result,
		];
	}

	/**
	 * Erstellt die Rechnungsentwürfe des Beitragslaufs.
	 *
	 * Solange der Beitragslauf den Status "draft" besitzt,
	 * können Beitragssätze und Regeln verändert werden.
	 *
	 * Sobald alle erzeugbaren Beitragsrechnungen erfolgreich
	 * als Entwurf angelegt wurden, wechselt der Lauf auf
	 * "processing" und die Beitragskonfiguration ist gesperrt.
	 */
	public function createDrafts(
		string $groupId,
		int $year,
	): array {
		$groupId = trim($groupId);

		$this->validateYear($year);

		if ($groupId === '') {
			throw new RuntimeException(
				'Keine Vereinsgruppe angegeben.'
			);
		}

		$configuration =
			$this->membershipFeeConfigurationService
				->getConfiguration(
					$year,
					$groupId
				);

		$run = $configuration['run'];

		if (($run['status'] ?? null) !== 'draft') {
			throw new RuntimeException(
				sprintf(
					'Der Beitragslauf hat den Status "%s" und kann nicht erneut zur Entwurfserstellung gestartet werden.',
					(string)($run['status'] ?? '')
				)
			);
		}

		$ownerUserId = trim(
			(string)($run['ownerUserId'] ?? '')
		);

		if ($ownerUserId === '') {
			throw new RuntimeException(
				'Der Beitragslauf besitzt keinen Rechnungsinhaber.'
			);
		}

		$paymentTermDays = (int)(
			$run['paymentTermDays'] ?? 14
		);

		$taxRateBp = (int)(
			$run['taxRateBp'] ?? 0
		);

		$invoiceText = trim(
			(string)(
				$run['invoiceText']
				?? ('Mitgliedsbeitrag ' . $year)
			)
		);

		if ($invoiceText === '') {
			$invoiceText =
				'Mitgliedsbeitrag ' . $year;
		}

		$existingReferences =
			$this->findExistingReferences();

		$members =
			$this->memberDirectoryService
				->getMembers($groupId);

		$results = [];

		foreach ($members as $member) {
			$candidate = $this->evaluateMember(
				$member,
				$configuration,
				$year
			);

			if (
				$candidate['readyForInvoice']
				!== true
			) {
				$results[] = $candidate;
				continue;
			}

			$referenceNumber =
				$candidate['referenceNumber'];

			/*
			 * Wiederholungsschutz.
			 *
			 * Eine bereits vorhandene Referenz erzeugt
			 * niemals eine zweite Rechnung.
			 */
			if (
				$referenceNumber !== null
				&& isset(
					$existingReferences[
						$referenceNumber
					]
				)
			) {
				$candidate['readyForInvoice'] =
					false;

				$candidate['status'] =
					'already_exists';

				$candidate['existingInvoiceId'] =
					$existingReferences[
						$referenceNumber
					];

				$results[] = $candidate;
				continue;
			}

			try {
				$invoiceData =
					$this->buildInvoiceData(
						$candidate,
						$year,
						$paymentTermDays,
						$taxRateBp,
						$invoiceText
					);

				$invoice =
					$this->invoiceService->create(
						$ownerUserId,
						$invoiceData
					);

				$candidate['status'] =
					'draft_created';

				$candidate['readyForInvoice'] =
					false;

				$candidate['invoiceId'] =
					isset($invoice['id'])
						? (int)$invoice['id']
						: null;

				$candidate['invoiceNumber'] =
					$invoice['number'] ?? null;

				if ($referenceNumber !== null) {
					$existingReferences[
						$referenceNumber
					] = $candidate['invoiceId'];
				}
			} catch (\Throwable $e) {
				$candidate['status'] =
					'create_error';

				$candidate['readyForInvoice'] =
					false;

				$candidate['error'] =
					$e->getMessage();

				$candidate['exception'] =
					get_class($e);
			}

			$results[] = $candidate;
		}

		$summary =
			$this->buildSummary($results);

		/*
		 * WICHTIG:
		 *
		 * Ab dem erfolgreichen Erzeugen der Beitragsrechnungen
		 * wird die Jahreskonfiguration gesperrt.
		 *
		 * Das bedeutet:
		 *
		 * draft
		 *   -> Beiträge und Regeln änderbar
		 *
		 * Beitragsrechnungen erstellen
		 *   -> processing
		 *
		 * processing
		 *   -> Beiträge und Regeln nicht mehr änderbar
		 *
		 * Bei einem fachlichen oder technischen Fehler bleibt
		 * der Lauf dagegen auf draft, damit die Ursache behoben
		 * werden kann.
		 *
		 * Beitragsfreie Mitglieder sind ausdrücklich KEIN Fehler.
		 */
		if (
			$this->canLockAfterDraftCreation(
				$summary
			)
		) {
			$run =
				$this->membershipFeeConfigurationService
					->markProcessing(
						(int)$run['id']
					);
		}

		return [
			'group' => $groupId,
			'year' => $year,
			'run' => $run,

			'groupFees' =>
				$configuration['groupFees'],

			'membershipRules' =>
				$configuration['membershipRules'],

			'summary' => $summary,

			'members' => $results,
		];
	}

	/**
	 * Schreibt die bereits erzeugten Beitrags-Rechnungsentwürfe fest.
	 *
	 * Es werden nur Entwürfe verarbeitet, deren Referenznummer und Betrag
	 * exakt zum aktuellen Beitragslauf passen.
	 */
	public function commitDrafts(
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

		$configuration =
			$this->membershipFeeConfigurationService
				->getConfiguration(
					$year,
					$groupId
				);

		$run = $configuration['run'];

		/*
		 * Festschreiben ist nur für einen gestarteten
		 * Beitragslauf sinnvoll.
		 *
		 * Für bestehende ältere Läufe erlauben wir außerdem
		 * "draft", damit ein vor Einführung der neuen Sperre
		 * angelegter Lauf weiterhin verarbeitet werden kann.
		 */
		$runStatus =
			(string)($run['status'] ?? '');

		if (
			$runStatus !== 'draft'
			&& $runStatus !== 'processing'
		) {
			throw new RuntimeException(
				sprintf(
					'Der Beitragslauf hat den Status "%s" und kann nicht festgeschrieben werden.',
					$runStatus
				)
			);
		}

		$ownerUserId = trim(
			(string)($run['ownerUserId'] ?? '')
		);

		if ($ownerUserId === '') {
			throw new RuntimeException(
				'Der Beitragslauf besitzt keinen Rechnungsinhaber.'
			);
		}

		$issueDate = $this->parseRunDate(
			$run['issueDate'] ?? null,
			'Rechnungsdatum'
		);

		if ($issueDate === null) {
			throw new RuntimeException(
				'Der Beitragslauf besitzt kein Rechnungsdatum.'
			);
		}

		$dueDate = $this->parseRunDate(
			$run['dueDate'] ?? null,
			'Fälligkeitsdatum',
			true
		);

		$existingReferences =
			$this->findExistingReferences();

		$members =
			$this->memberDirectoryService
				->getMembers($groupId);

		$results = [];

		foreach ($members as $member) {
			$candidate = $this->evaluateMember(
				$member,
				$configuration,
				$year
			);

			/*
			 * Beitragsfreie oder fehlerhafte Mitglieder
			 * werden nicht verarbeitet.
			 */
			if (
				$candidate['readyForInvoice']
				!== true
			) {
				$results[] = $candidate;
				continue;
			}

			$referenceNumber = trim(
				(string)(
					$candidate['referenceNumber']
					?? ''
				)
			);

			if (
				$referenceNumber === ''
				|| !isset(
					$existingReferences[
						$referenceNumber
					]
				)
			) {
				$candidate['status'] =
					'missing_draft';

				$candidate['readyForInvoice'] =
					false;

				$results[] = $candidate;
				continue;
			}

			$invoiceId = (int)
				$existingReferences[
					$referenceNumber
				];

			try {
				/*
				 * Rechnung unmittelbar vor der
				 * Festschreibung noch einmal lesen.
				 */
				$invoice =
					$this->invoiceService->get(
						$invoiceId
					);

				$candidate['invoiceId'] =
					$invoiceId;

				$candidate['invoiceNumber'] =
					$invoice['number'] ?? null;

				$invoiceStatus = (string)(
					$invoice['status'] ?? ''
				);

				/*
				 * Bereits festgeschrieben:
				 * niemals ein zweites Mal festschreiben.
				 */
				if (
					$invoiceStatus
					=== Invoice::STATUS_COMMITTED
				) {
					$candidate['status'] =
						'already_committed';

					$candidate['readyForInvoice'] =
						false;

					$results[] = $candidate;
					continue;
				}

				/*
				 * Nur echte Entwürfe dürfen über diesen
				 * Weg festgeschrieben werden.
				 */
				if (
					$invoiceStatus
					!== Invoice::STATUS_DRAFT
				) {
					$candidate['status'] =
						'invoice_not_draft';

					$candidate['readyForInvoice'] =
						false;

					$results[] = $candidate;
					continue;
				}

				/*
				 * Sicherheitsprüfung:
				 *
				 * Der Betrag des Rechnungsentwurfs muss exakt
				 * dem gespeicherten Beitragslauf entsprechen.
				 */
				$expectedTotalCents =
					$this->decimalToCents(
						(string)$candidate['feeAmount']
					);

				$invoiceTotalCents = (int)(
					$invoice['totalCents'] ?? -1
				);

				if (
					$invoiceTotalCents
					!== $expectedTotalCents
				) {
					$candidate['status'] =
						'amount_mismatch';

					$candidate['readyForInvoice'] =
						false;

					$candidate['expectedTotalCents'] =
						$expectedTotalCents;

					$candidate['invoiceTotalCents'] =
						$invoiceTotalCents;

					$results[] = $candidate;
					continue;
				}

				/*
				 * Trockenlauf.
				 *
				 * Ohne confirm=true wird ausschließlich
				 * geprüft, ob festgeschrieben werden könnte.
				 */
				if ($confirm !== true) {
					$candidate['status'] =
						'ready_to_commit';

					$candidate['readyForInvoice'] =
						false;

					$candidate['invoiceId'] =
						$invoiceId;

					$candidate['invoiceNumber'] =
						$invoice['number'] ?? null;

					$candidate['issueDate'] =
						$issueDate->format('Y-m-d');

					$candidate['dueDate'] =
						$dueDate?->format('Y-m-d');

					$results[] = $candidate;
					continue;
				}

				/*
				 * Echte Festschreibung.
				 *
				 * Rechnungsdatum und Fälligkeit stammen
				 * ausdrücklich aus der Jahresabrechnung.
				 */
				$committed =
					$this->invoiceService
						->commitWithDates(
							$invoiceId,
							$issueDate,
							$dueDate
						);

				$candidate['status'] =
					'committed';

				$candidate['readyForInvoice'] =
					false;

				$candidate['invoiceId'] =
					isset($committed['id'])
						? (int)$committed['id']
						: $invoiceId;

				$candidate['invoiceNumber'] =
					$committed['number'] ?? null;

				$candidate['issueDate'] =
					$committed['issueDate'] ?? null;

				$candidate['dueDate'] =
					$committed['dueDate'] ?? null;
			} catch (\Throwable $e) {
				$candidate['status'] =
					'commit_error';

				$candidate['readyForInvoice'] =
					false;

				$candidate['error'] =
					$e->getMessage();

				$candidate['exception'] =
					get_class($e);
			}

			$results[] = $candidate;
		}

		$summary =
			$this->buildSummary($results);

		/*
		 * Für ältere Läufe, die beim Erzeugen der Entwürfe
		 * noch nicht auf processing gesetzt wurden.
		 *
		 * markProcessing() ist idempotent und verändert einen
		 * bereits auf processing stehenden Lauf nicht erneut.
		 */
		if (
			$confirm === true
			&& $this->canRemainProcessingAfterCommit(
				$summary
			)
		) {
			$run =
				$this->membershipFeeConfigurationService
					->markProcessing(
						(int)$run['id']
					);
		}

		return [
			'group' => $groupId,
			'year' => $year,
			'run' => $run,
			'summary' => $summary,
			'members' => $results,
		];
	}

	private function evaluateMember(
		array $member,
		array $configuration,
		int $year,
	): array {
		$result = $member;

		$result['feeRunId'] =
			$configuration['run']['id'] ?? null;

		$result['feeGroup'] = null;
		$result['baseFeeAmount'] = null;
		$result['feeAmount'] = null;

		$result['feeCurrency'] =
			$configuration['run']['currency']
			?? 'EUR';

		$result['feeStatus'] = null;
		$result['feeMatchingGroups'] = [];

		$result['adjustmentType'] = null;
		$result['adjustmentValue'] = null;

		$result['referenceNumber'] = null;

		/*
		 * profile_fields konnte gar nicht gelesen werden.
		 */
		if (
			($member['status'] ?? null)
			=== 'profile_error'
		) {
			$result['readyForInvoice'] = false;

			return $result;
		}

		/*
		 * Beitragsfrei überschreibt jede andere Regel.
		 */
		if (
			($member['feeExempt'] ?? null)
			=== true
		) {
			$result['status'] = 'fee_exempt';
			$result['feeStatus'] = 'fee_exempt';
			$result['readyForInvoice'] = false;

			return $result;
		}

		try {
			$fee =
				$this->membershipFeeService
					->resolveConfigured(
						(string)$member['uid'],
						$member['membershipType']
							?? null,
						$configuration
					);

			$result['feeGroup'] =
				$fee['matchedGroup'];

			$result['baseFeeAmount'] =
				$fee['baseAmount'];

			$result['feeAmount'] =
				$fee['amount'];

			$result['feeCurrency'] =
				$fee['currency'];

			$result['feeStatus'] =
				$fee['status'];

			$result['feeMatchingGroups'] =
				$fee['matchingGroups'];

			$result['adjustmentType'] =
				$fee['adjustmentType'];

			$result['adjustmentValue'] =
				$fee['adjustmentValue'];
		} catch (\Throwable $e) {
			$result['status'] = 'fee_error';
			$result['feeStatus'] = 'fee_error';
			$result['readyForInvoice'] = false;
			$result['feeError'] = $e->getMessage();

			return $result;
		}

		/*
		 * Profil muss vollständig sein.
		 */
		if (
			($member['complete'] ?? false)
			!== true
		) {
			$result['status'] = 'incomplete';
			$result['readyForInvoice'] = false;

			return $result;
		}

		/*
		 * Beitragsberechnung muss vollständig aufgelöst sein.
		 */
		if ($result['feeStatus'] !== 'resolved') {
			$result['status'] =
				$result['feeStatus'];

			$result['readyForInvoice'] = false;

			return $result;
		}

		/*
		 * 0-Euro-Rechnungen werden nicht erzeugt.
		 *
		 * Für echte Beitragsfreiheit existiert
		 * profile_fields -> beitragsfrei.
		 */
		if (
			$result['feeAmount'] === null
			|| $this->decimalIsZero(
				$result['feeAmount']
			)
		) {
			$result['status'] = 'zero_fee';
			$result['readyForInvoice'] = false;

			return $result;
		}

		$memberNumber = trim(
			(string)(
				$member['memberNumber'] ?? ''
			)
		);

		if ($memberNumber === '') {
			$result['status'] = 'incomplete';
			$result['readyForInvoice'] = false;

			if (
				!in_array(
					'Mitgliedsnummer',
					$result['missingFields'] ?? [],
					true
				)
			) {
				$result['missingFields'][] =
					'Mitgliedsnummer';
			}

			return $result;
		}

		/*
		 * Beitragsjahr + Mitgliedsnummer
		 * ergeben eine stabile Referenz.
		 */
		$result['referenceNumber'] = sprintf(
			'BEITRAG-%d-%s',
			$year,
			$memberNumber
		);

		$result['status'] = 'ready';
		$result['readyForInvoice'] = true;

		return $result;
	}

	private function buildInvoiceData(
		array $member,
		int $year,
		int $paymentTermDays,
		int $taxRateBp,
		string $invoiceText,
	): array {
		$recipientName = trim(
			(string)$member['firstName']
			. ' '
			. (string)$member['lastName']
		);

		$recipientAddress = trim(
			(string)$member['street']
			. ' '
			. (string)$member['houseNumber']
		);

		$baseFeeFormatted =
			$this->formatMoney(
				(string)$member['baseFeeAmount']
			);

		$finalFeeFormatted =
			$this->formatMoney(
				(string)$member['feeAmount']
			);

		$descriptionParts = [
			'Mitgliedsnummer: '
				. $member['memberNumber'],

			'Beitragsgruppe: '
				. $member['feeGroup'],

			'Grundbeitrag: '
				. $baseFeeFormatted,

			'Beitragsart: '
				. $member['membershipType'],
		];

		if (
			$member['adjustmentType']
			=== 'percent'
		) {
			$descriptionParts[] =
				'Beitragsregel: '
				. $member['adjustmentValue']
				. ' %';
		}

		if (
			$member['adjustmentType']
			=== 'fixed'
		) {
			$descriptionParts[] =
				'Festbetrag: '
				. $this->formatMoney(
					(string)$member['adjustmentValue']
				);
		}

		$notes = [
			'Beitragsjahr: ' . $year,
			'Mitgliedsnummer: ' . $member['memberNumber'],
			'Beitragsgruppe: ' . $member['feeGroup'],
			'Grundbeitrag: ' . $baseFeeFormatted,
			'Beitragsart: ' . $member['membershipType'],
		];

		if (
			$member['adjustmentType']
			=== 'percent'
		) {
			$notes[] =
				'Beitragsregel: '
				. $member['adjustmentValue']
				. ' %';
		} elseif (
			$member['adjustmentType']
			=== 'fixed'
		) {
			$notes[] =
				'Beitragsregel: Festbetrag '
				. $this->formatMoney(
					(string)$member['adjustmentValue']
				);
		}

		$notes[] =
			'Endbeitrag: '
			. $finalFeeFormatted;

		return [
			'recipientName' => $recipientName,

			'recipientAddress' =>
				$recipientAddress,

			'recipientPostalCode' =>
				$member['postalCode'],

			'recipientCity' =>
				$member['city'],

			'recipientCountry' =>
				$member['country'],

			'recipientEmail' =>
				$member['email'],

			'referenceNumber' =>
				$member['referenceNumber'],

			'paymentTermDays' =>
				$paymentTermDays,

			'extraText' => sprintf(
				'Mitgliedsbeitrag für das Beitragsjahr %d.',
				$year
			),

			'notes' => $notes,

			'items' => [
				[
					'name' => $invoiceText,

					'description' =>
						implode(
							' · ',
							$descriptionParts
						),

					'quantity' => '1',

					'unitCode' =>
						InvoiceItem::UNIT_LUMP_SUM,

					'unitPriceInput' =>
						$this->toInvoicePriceInput(
							(string)$member['feeAmount']
						),

					'taxRateBp' =>
						$taxRateBp,
				],
			],
		];
	}

	/**
	 * Liefert vorhandene Rechnungen nach Referenznummer.
	 *
	 * Doppelte Referenzen sind ein harter Fehler.
	 * Es wird niemals willkürlich eine Rechnung ausgewählt.
	 */
	private function findExistingReferences(): array {
		$result = [];

		foreach (
			$this->invoiceService->list()
			as $invoice
		) {
			$reference = trim(
				(string)(
					$invoice['referenceNumber']
					?? ''
				)
			);

			if ($reference === '') {
				continue;
			}

			if (!isset($invoice['id'])) {
				continue;
			}

			$invoiceId =
				(int)$invoice['id'];

			if (isset($result[$reference])) {
				throw new RuntimeException(
					sprintf(
						'Doppelte Rechnungsreferenz "%s" gefunden: Rechnungen %d und %d.',
						$reference,
						$result[$reference],
						$invoiceId
					)
				);
			}

			$result[$reference] =
				$invoiceId;
		}

		return $result;
	}

	private function buildSummary(
		array $members
	): array {
		$summary = [
			'total' => count($members),

			'ready' => 0,
			'draftCreated' => 0,

			'feeExempt' => 0,
			'incomplete' => 0,

			'noFeeGroup' => 0,
			'multipleFeeGroups' => 0,

			'noMembershipType' => 0,
			'noMembershipRule' => 0,

			'zeroFee' => 0,

			'alreadyExists' => 0,

			'profileErrors' => 0,
			'feeErrors' => 0,
			'createErrors' => 0,

			'committed' => 0,
			'alreadyCommitted' => 0,
			'missingDrafts' => 0,
			'amountMismatches' => 0,
			'invoiceNotDraft' => 0,
			'commitErrors' => 0,
			'readyToCommit' => 0,
		];

		foreach ($members as $member) {
			switch ($member['status'] ?? '') {
				case 'ready':
					$summary['ready']++;
					break;

				case 'draft_created':
					$summary['draftCreated']++;
					break;

				case 'fee_exempt':
					$summary['feeExempt']++;
					break;

				case 'incomplete':
					$summary['incomplete']++;
					break;

				case 'no_fee_group':
					$summary['noFeeGroup']++;
					break;

				case 'multiple_fee_groups':
					$summary['multipleFeeGroups']++;
					break;

				case 'no_membership_type':
					$summary['noMembershipType']++;
					break;

				case 'no_membership_rule':
					$summary['noMembershipRule']++;
					break;

				case 'zero_fee':
					$summary['zeroFee']++;
					break;

				case 'already_exists':
					$summary['alreadyExists']++;
					break;

				case 'profile_error':
					$summary['profileErrors']++;
					break;

				case 'fee_error':
					$summary['feeErrors']++;
					break;

				case 'create_error':
					$summary['createErrors']++;
					break;

				case 'committed':
					$summary['committed']++;
					break;

				case 'already_committed':
					$summary['alreadyCommitted']++;
					break;

				case 'missing_draft':
					$summary['missingDrafts']++;
					break;

				case 'amount_mismatch':
					$summary['amountMismatches']++;
					break;

				case 'invoice_not_draft':
					$summary['invoiceNotDraft']++;
					break;

				case 'commit_error':
					$summary['commitErrors']++;
					break;

				case 'ready_to_commit':
					$summary['readyToCommit']++;
					break;
			}
		}

		return $summary;
	}

	/**
	 * Entscheidet, ob die Beitragskonfiguration nach dem
	 * Erzeugen der Entwürfe gesperrt werden darf.
	 */
	private function canLockAfterDraftCreation(
		array $summary
	): bool {
		/*
		 * Mindestens eine Beitragsrechnung muss vorhanden sein.
		 *
		 * alreadyExists zählt ebenfalls, weil ein wiederaufgenommener
		 * Lauf bereits erfolgreich erzeugte Entwürfe enthalten kann.
		 */
		$invoiceCount =
			(int)$summary['draftCreated']
			+ (int)$summary['alreadyExists'];

		if ($invoiceCount === 0) {
			return false;
		}

		return
			$summary['createErrors'] === 0
			&& $summary['incomplete'] === 0
			&& $summary['noFeeGroup'] === 0
			&& $summary['multipleFeeGroups'] === 0
			&& $summary['noMembershipType'] === 0
			&& $summary['noMembershipRule'] === 0
			&& $summary['zeroFee'] === 0
			&& $summary['profileErrors'] === 0
			&& $summary['feeErrors'] === 0;
	}

	/**
	 * Sicherheitsprüfung nach der Festschreibung.
	 *
	 * Ein bereits auf processing stehender Lauf bleibt dort.
	 * Für ältere draft-Läufe kann markProcessing() hier
	 * nachgezogen werden.
	 */
	private function canRemainProcessingAfterCommit(
		array $summary
	): bool {
		return
			$summary['commitErrors'] === 0
			&& $summary['missingDrafts'] === 0
			&& $summary['amountMismatches'] === 0
			&& $summary['invoiceNotDraft'] === 0
			&& $summary['incomplete'] === 0
			&& $summary['noFeeGroup'] === 0
			&& $summary['multipleFeeGroups'] === 0
			&& $summary['noMembershipType'] === 0
			&& $summary['noMembershipRule'] === 0
			&& $summary['feeErrors'] === 0
			&& $summary['profileErrors'] === 0;
	}

	private function decimalIsZero(
		string $value
	): bool {
		$value = trim($value);

		return in_array(
			$value,
			[
				'0',
				'0.0',
				'0.00',
				'0,0',
				'0,00',
			],
			true
		);
	}

	/**
	 * RechnungsWerk erwartet Preise als deutsches Eingabeformat.
	 *
	 * Interner Wert:
	 * 50.00
	 *
	 * InvoiceService:
	 * 50,00
	 */
	private function toInvoicePriceInput(
		string $amount
	): string {
		$amount = trim($amount);

		if (
			!preg_match(
				'/^\d+\.\d{2}$/',
				$amount
			)
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Beitragsbetrag "%s".',
					$amount
				)
			);
		}

		return str_replace(
			'.',
			',',
			$amount
		);
	}

	/**
	 * Formatiert einen internen Dezimalbetrag
	 * für sichtbare Rechnungstexte.
	 *
	 * 20.00 -> 20,00 €
	 * 10.50 -> 10,50 €
	 */
	private function formatMoney(
		string $amount
	): string {
		$amount = trim($amount);

		if (
			!preg_match(
				'/^\d+\.\d{2}$/',
				$amount
			)
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Beitragsbetrag "%s".',
					$amount
				)
			);
		}

		[$euros, $cents] =
			explode(
				'.',
				$amount,
				2
			);

		$euros = number_format(
			(int)$euros,
			0,
			',',
			'.'
		);

		return
			$euros
			. ','
			. $cents
			. ' €';
	}

	private function decimalToCents(
		string $amount
	): int {
		$amount = trim($amount);

		if (
			!preg_match(
				'/^(\d+)\.(\d{2})$/',
				$amount,
				$matches
			)
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Beitragsbetrag "%s".',
					$amount
				)
			);
		}

		return
			((int)$matches[1] * 100)
			+ (int)$matches[2];
	}

	private function parseRunDate(
		mixed $value,
		string $label,
		bool $allowNull = false,
	): ?DateTime {
		if (
			$value === null
			|| trim((string)$value) === ''
		) {
			if ($allowNull) {
				return null;
			}

			throw new RuntimeException(
				sprintf(
					'%s fehlt im Beitragslauf.',
					$label
				)
			);
		}

		$value =
			trim((string)$value);

		$date =
			DateTime::createFromFormat(
				'!Y-m-d',
				$value
			);

		$errors =
			DateTime::getLastErrors();

		if (
			$date === false
			|| (
				is_array($errors)
				&& (
					$errors['warning_count'] > 0
					|| $errors['error_count'] > 0
				)
			)
			|| $date->format('Y-m-d') !== $value
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiges %s "%s".',
					$label,
					$value
				)
			);
		}

		return $date;
	}

	private function validateYear(
		int $year
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