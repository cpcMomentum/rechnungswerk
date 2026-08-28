<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use OCP\IGroupManager;
use RuntimeException;

final class MembershipFeeService {

	public function __construct(
		private readonly IGroupManager $groupManager,
	) {
	}

	/**
	 * Neue Beitragsberechnung auf Basis eines gespeicherten
	 * Beitragslaufs.
	 *
	 * Erwartete Konfiguration:
	 *
	 * [
	 *     'run' => [...],
	 *     'groupFees' => [
	 *         '20NY' => '20.00',
	 *         '50nY' => '50.00',
	 *     ],
	 *     'membershipRules' => [
	 *         'Vollmitglied' => [
	 *             'type' => 'percent',
	 *             'value' => '100',
	 *         ],
	 *         ...
	 *     ],
	 * ]
	 */
	public function resolveConfigured(
		string $userUid,
		?string $membershipType,
		array $configuration,
	): array {
		$userUid = trim($userUid);

		if ($userUid === '') {
			throw new RuntimeException(
				'Keine Benutzer-ID für die Beitragsermittlung angegeben.'
			);
		}

		$groupFees = $configuration['groupFees'] ?? [];
		$membershipRules = $configuration['membershipRules'] ?? [];
		$run = $configuration['run'] ?? [];

		if (!is_array($groupFees) || $groupFees === []) {
			throw new RuntimeException(
				'Der Beitragslauf enthält keine Beitragsgruppen.'
			);
		}

		if (!is_array($membershipRules)) {
			throw new RuntimeException(
				'Die Beitragsart-Regeln des Beitragslaufs sind ungültig.'
			);
		}

		$currency = strtoupper(
			trim((string)($run['currency'] ?? 'EUR'))
		);

		$runId = isset($run['id'])
			? (int)$run['id']
			: null;

		/*
		 * Zuerst bestimmen wir genau eine Beitragsgruppe.
		 */
		$matchingGroups = [];

		foreach ($groupFees as $groupId => $amount) {
			$groupId = trim((string)$groupId);

			if ($groupId === '') {
				continue;
			}

			if (!$this->groupManager->groupExists($groupId)) {
				throw new RuntimeException(
					sprintf(
						'Die konfigurierte Beitragsgruppe "%s" existiert nicht.',
						$groupId
					)
				);
			}

			if ($this->groupManager->isInGroup($userUid, $groupId)) {
				$matchingGroups[] = $groupId;
			}
		}

		if ($matchingGroups === []) {
			return [
				'runId' => $runId,
				'userUid' => $userUid,

				'matchedGroup' => null,
				'matchingGroups' => [],

				'baseAmount' => null,

				'membershipType' => $membershipType,
				'adjustmentType' => null,
				'adjustmentValue' => null,

				'amount' => null,
				'currency' => $currency,

				'status' => 'no_fee_group',
			];
		}

		if (count($matchingGroups) > 1) {
			return [
				'runId' => $runId,
				'userUid' => $userUid,

				'matchedGroup' => null,
				'matchingGroups' => $matchingGroups,

				'baseAmount' => null,

				'membershipType' => $membershipType,
				'adjustmentType' => null,
				'adjustmentValue' => null,

				'amount' => null,
				'currency' => $currency,

				'status' => 'multiple_fee_groups',
			];
		}

		$matchedGroup = $matchingGroups[0];

		/*
		 * Grundbeitrag ausschließlich als Integer-Cent.
		 */
		$baseAmountCents = $this->decimalToCents(
			$groupFees[$matchedGroup]
		);

		$baseAmount = $this->centsToDecimal(
			$baseAmountCents
		);

		/*
		 * Die Beitragsgruppe ist bekannt, aber ohne Beitragsart
		 * können wir keine endgültige Berechnung durchführen.
		 */
		$membershipType = $membershipType !== null
			? trim($membershipType)
			: null;

		if ($membershipType === '') {
			$membershipType = null;
		}

		if ($membershipType === null) {
			return [
				'runId' => $runId,
				'userUid' => $userUid,

				'matchedGroup' => $matchedGroup,
				'matchingGroups' => [$matchedGroup],

				'baseAmount' => $baseAmount,

				'membershipType' => null,
				'adjustmentType' => null,
				'adjustmentValue' => null,

				'amount' => null,
				'currency' => $currency,

				'status' => 'no_membership_type',
			];
		}

		/*
		 * Für jede Beitragsart muss explizit eine Regel existieren.
		 *
		 * Keine automatische 100-%-Fallback-Regel.
		 */
		if (!array_key_exists(
			$membershipType,
			$membershipRules
		)) {
			return [
				'runId' => $runId,
				'userUid' => $userUid,

				'matchedGroup' => $matchedGroup,
				'matchingGroups' => [$matchedGroup],

				'baseAmount' => $baseAmount,

				'membershipType' => $membershipType,
				'adjustmentType' => null,
				'adjustmentValue' => null,

				'amount' => null,
				'currency' => $currency,

				'status' => 'no_membership_rule',
			];
		}

		$rule = $membershipRules[$membershipType];

		if (!is_array($rule)) {
			throw new RuntimeException(
				sprintf(
					'Die Beitragsregel für "%s" ist ungültig.',
					$membershipType
				)
			);
		}

		$calculationType = strtolower(
			trim((string)($rule['type'] ?? ''))
		);

		$value = $rule['value'] ?? null;

		/*
		 * Prozentregel:
		 *
		 * 20,00 EUR * 50 %
		 * =
		 * 10,00 EUR
		 *
		 * Ausschließlich Integerarithmetik.
		 */
		if ($calculationType === 'percent') {
			$percentBp = $this->percentToBasisPoints(
				$value
			);

			/*
			 * Kaufmännisches Runden auf den nächsten Cent.
			 *
			 * Beispiel:
			 * Cent * Basispunkte / 10000
			 */
			$finalAmountCents = intdiv(
				($baseAmountCents * $percentBp) + 5000,
				10000
			);

			return [
				'runId' => $runId,
				'userUid' => $userUid,

				'matchedGroup' => $matchedGroup,
				'matchingGroups' => [$matchedGroup],

				'baseAmount' => $baseAmount,

				'membershipType' => $membershipType,
				'adjustmentType' => 'percent',
				'adjustmentValue' =>
					$this->basisPointsToPercent(
						$percentBp
					),

				'amount' => $this->centsToDecimal(
					$finalAmountCents
				),

				'currency' => $currency,
				'status' => 'resolved',
			];
		}

		/*
		 * Festbetrag:
		 *
		 * Der Betrag der Beitragsart ersetzt den Grundbeitrag.
		 *
		 * Beispiel:
		 *
		 * Gruppe 50nY = 50,00 EUR
		 * Jugend = fixed 15,00 EUR
		 *
		 * Ergebnis = 15,00 EUR
		 */
		if ($calculationType === 'fixed') {
			$finalAmountCents = $this->decimalToCents(
				$value
			);

			return [
				'runId' => $runId,
				'userUid' => $userUid,

				'matchedGroup' => $matchedGroup,
				'matchingGroups' => [$matchedGroup],

				'baseAmount' => $baseAmount,

				'membershipType' => $membershipType,
				'adjustmentType' => 'fixed',
				'adjustmentValue' =>
					$this->centsToDecimal(
						$finalAmountCents
					),

				'amount' =>
					$this->centsToDecimal(
						$finalAmountCents
					),

				'currency' => $currency,
				'status' => 'resolved',
			];
		}

		throw new RuntimeException(
			sprintf(
				'Die Beitragsregel "%s" verwendet den unbekannten Berechnungstyp "%s".',
				$membershipType,
				$calculationType
			)
		);
	}

	/**
	 * ALTER TESTWEG.
	 *
	 * Bleibt vorerst erhalten, damit der bestehende /fee-
	 * und /preview-Endpunkt nicht sofort kaputt gehen.
	 *
	 * Wird entfernt, sobald alle Endpunkte auf die
	 * Datenbankkonfiguration umgestellt sind.
	 */
	public function resolve(
		string $userUid,
		array $feeGroups,
		string $currency = 'EUR',
	): array {
		$userUid = trim($userUid);

		if ($userUid === '') {
			throw new RuntimeException(
				'Keine Benutzer-ID für die Beitragsermittlung angegeben.'
			);
		}

		$matchingGroups = [];

		foreach ($feeGroups as $groupId => $amount) {
			$groupId = trim((string)$groupId);

			if ($groupId === '') {
				continue;
			}

			if (!$this->groupManager->groupExists($groupId)) {
				throw new RuntimeException(
					sprintf(
						'Die konfigurierte Beitragsgruppe "%s" existiert nicht.',
						$groupId
					)
				);
			}

			if ($this->groupManager->isInGroup(
				$userUid,
				$groupId
			)) {
				$matchingGroups[] = $groupId;
			}
		}

		if ($matchingGroups === []) {
			return [
				'userUid' => $userUid,
				'matchedGroup' => null,
				'amount' => null,
				'currency' => $currency,
				'status' => 'no_fee_group',
				'matchingGroups' => [],
			];
		}

		if (count($matchingGroups) > 1) {
			return [
				'userUid' => $userUid,
				'matchedGroup' => null,
				'amount' => null,
				'currency' => $currency,
				'status' => 'multiple_fee_groups',
				'matchingGroups' => $matchingGroups,
			];
		}

		$groupId = $matchingGroups[0];

		$amountCents = $this->decimalToCents(
			$feeGroups[$groupId]
		);

		return [
			'userUid' => $userUid,
			'matchedGroup' => $groupId,
			'amount' => $this->centsToDecimal(
				$amountCents
			),
			'currency' => $currency,
			'status' => 'resolved',
			'matchingGroups' => [$groupId],
		];
	}

	private function decimalToCents(
		mixed $value
	): int {
		if ($value === null) {
			throw new RuntimeException(
				'Ein Beitragsbetrag fehlt.'
			);
		}

		$value = trim((string)$value);
		$value = str_replace(',', '.', $value);

		if (!preg_match(
			'/^\d+(?:\.\d{1,2})?$/',
			$value
		)) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Geldbetrag "%s".',
					$value
				)
			);
		}

		[$euros, $cents] = array_pad(
			explode('.', $value, 2),
			2,
			''
		);

		$cents = str_pad(
			$cents,
			2,
			'0'
		);

		return ((int)$euros * 100)
			+ (int)$cents;
	}

	private function centsToDecimal(
		int $cents
	): string {
		return sprintf(
			'%d.%02d',
			intdiv($cents, 100),
			$cents % 100
		);
	}

	private function percentToBasisPoints(
		mixed $value
	): int {
		if ($value === null) {
			throw new RuntimeException(
				'Ein Prozentwert fehlt.'
			);
		}

		$value = trim((string)$value);
		$value = str_replace(',', '.', $value);

		if (!preg_match(
			'/^\d+(?:\.\d{1,2})?$/',
			$value
		)) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Prozentwert "%s".',
					$value
				)
			);
		}

		[$whole, $decimal] = array_pad(
			explode('.', $value, 2),
			2,
			''
		);

		$decimal = str_pad(
			$decimal,
			2,
			'0'
		);

		$result = ((int)$whole * 100)
			+ (int)$decimal;

		if ($result < 0 || $result > 10000) {
			throw new RuntimeException(
				'Ein Prozentwert muss zwischen 0 und 100 liegen.'
			);
		}

		return $result;
	}

	private function basisPointsToPercent(
		int $basisPoints
	): string {
		$whole = intdiv($basisPoints, 100);
		$decimal = $basisPoints % 100;

		if ($decimal === 0) {
			return (string)$whole;
		}

		return rtrim(
			rtrim(
				sprintf(
					'%d.%02d',
					$whole,
					$decimal
				),
				'0'
			),
			'.'
		);
	}
}