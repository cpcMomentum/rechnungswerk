<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use DateTime;
use DateTimeZone;
use OCA\Rechnungswerk\Db\MembershipFeeRule;
use OCA\Rechnungswerk\Db\MembershipFeeRuleMapper;
use OCA\Rechnungswerk\Db\MembershipFeeRun;
use OCA\Rechnungswerk\Db\MembershipFeeRunMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;
use RuntimeException;

final class MembershipFeeConfigurationService {

	public function __construct(
		private readonly MembershipFeeRunMapper $runMapper,
		private readonly MembershipFeeRuleMapper $ruleMapper,
		private readonly IDBConnection $db,
	) {
	}

	/**
	 * Speichert oder aktualisiert einen Beitragslauf im Status "draft".
	 *
	 * Bereits laufende oder abgeschlossene Beitragsläufe
	 * dürfen nicht mehr verändert werden.
	 *
	 * @param array<string, string|int|float> $groupFees
	 * @param array<string, array<string, mixed>> $membershipRules
	 */
	public function saveDraft(
		string $ownerUserId,
		string $createdByUserId,
		int $year,
		string $memberGroup,
		array $groupFees,
		array $membershipRules,
		string $currency = 'EUR',
		string $invoiceText = '',
		int $paymentTermDays = 14,
		int $taxRateBp = 0,
		?string $issueDate = null,
		?string $dueDate = null,
	): array {
		$ownerUserId = trim($ownerUserId);
		$createdByUserId = trim($createdByUserId);
		$memberGroup = trim($memberGroup);
		$currency = strtoupper(trim($currency));
		$invoiceText = trim($invoiceText);

		$this->validateYear($year);

		if ($ownerUserId === '') {
			throw new RuntimeException(
				'Kein Rechnungsinhaber angegeben.'
			);
		}

		if ($createdByUserId === '') {
			throw new RuntimeException(
				'Kein Benutzer für die Erstellung angegeben.'
			);
		}

		if ($memberGroup === '') {
			throw new RuntimeException(
				'Keine Vereinsgruppe angegeben.'
			);
		}

		if (!preg_match('/^[A-Z]{3}$/', $currency)) {
			throw new RuntimeException(
				'Ungültiger Währungscode.'
			);
		}

		if ($invoiceText === '') {
			$invoiceText = 'Mitgliedsbeitrag ' . $year;
		}

		if (
			$paymentTermDays < 0
			|| $paymentTermDays > 365
		) {
			throw new RuntimeException(
				'Das Zahlungsziel muss zwischen 0 und 365 Tagen liegen.'
			);
		}

		if (
			$taxRateBp < 0
			|| $taxRateBp > 10000
		) {
			throw new RuntimeException(
				'Der Umsatzsteuersatz ist ungültig.'
			);
		}

		if ($groupFees === []) {
			throw new RuntimeException(
				'Es wurde keine Beitragsgruppe konfiguriert.'
			);
		}

		$parsedIssueDate = $this->parseDate(
			$issueDate,
			'Rechnungsdatum'
		);

		$parsedDueDate = $this->parseDate(
			$dueDate,
			'Fälligkeitsdatum'
		);

		/*
		 * Wenn ein Rechnungsdatum vorhanden ist, aber kein separates
		 * Fälligkeitsdatum angegeben wurde, wird die Fälligkeit aus
		 * dem Zahlungsziel berechnet.
		 */
		if (
			$parsedIssueDate !== null
			&& $parsedDueDate === null
		) {
			$parsedDueDate = clone $parsedIssueDate;

			if ($paymentTermDays > 0) {
				$parsedDueDate->modify(
					'+' . $paymentTermDays . ' days'
				);
			}
		}

		if (
			$parsedIssueDate !== null
			&& $parsedDueDate !== null
			&& $parsedDueDate < $parsedIssueDate
		) {
			throw new RuntimeException(
				'Das Fälligkeitsdatum darf nicht vor dem Rechnungsdatum liegen.'
			);
		}

		/*
		 * Alle Regeln bereits vor Beginn der Transaktion validieren.
		 */
		$preparedRules = $this->prepareRules(
			$groupFees,
			$membershipRules
		);

		$this->db->beginTransaction();

		try {
			$now = $this->now();

			try {
				$run = $this->runMapper->findByYearAndGroup(
					$year,
					$memberGroup
				);

				if (
					$run->getStatus()
					!== MembershipFeeRun::STATUS_DRAFT
				) {
					throw new RuntimeException(
						sprintf(
							'Der Beitragslauf %d für "%s" hat den Status "%s" und darf nicht mehr verändert werden.',
							$year,
							$memberGroup,
							$run->getStatus()
						)
					);
				}

				$run->setOwnerUserId($ownerUserId);
				$run->setCurrency($currency);
				$run->setInvoiceText($invoiceText);
				$run->setPaymentTermDays($paymentTermDays);
				$run->setIssueDate($parsedIssueDate);
				$run->setDueDate($parsedDueDate);
				$run->setTaxRateBp($taxRateBp);
				$run->setUpdatedAt($now);

				$run = $this->runMapper->update($run);

				/*
				 * Solange der Lauf ein Entwurf ist, dürfen die
				 * Beitragsregeln vollständig ersetzt werden.
				 */
				$this->ruleMapper->deleteByRun(
					(int)$run->getId()
				);
			} catch (DoesNotExistException) {
				$run = new MembershipFeeRun();

				$run->setOwnerUserId($ownerUserId);
				$run->setYear($year);
				$run->setMemberGroup($memberGroup);
				$run->setCurrency($currency);
				$run->setInvoiceText($invoiceText);
				$run->setPaymentTermDays($paymentTermDays);
				$run->setIssueDate($parsedIssueDate);
				$run->setDueDate($parsedDueDate);
				$run->setTaxRateBp($taxRateBp);

				$run->setStatus(
					MembershipFeeRun::STATUS_DRAFT
				);

				$run->setCreatedByUserId(
					$createdByUserId
				);

				$run->setCreatedAt($now);
				$run->setUpdatedAt($now);
				$run->setCompletedAt(null);

				$run = $this->runMapper->insert($run);
			}

			$sortOrder = 10;

			foreach ($preparedRules as $preparedRule) {
				$rule = new MembershipFeeRule();

				$rule->setRunId(
					(int)$run->getId()
				);

				$rule->setRuleType(
					$preparedRule['ruleType']
				);

				$rule->setRuleKey(
					$preparedRule['ruleKey']
				);

				$rule->setCalculationType(
					$preparedRule['calculationType']
				);

				$rule->setAmountCents(
					$preparedRule['amountCents']
				);

				$rule->setPercentBp(
					$preparedRule['percentBp']
				);

				$rule->setSortOrder($sortOrder);

				$rule->setCreatedAt($now);
				$rule->setUpdatedAt($now);

				$this->ruleMapper->insert($rule);

				$sortOrder += 10;
			}

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();

			throw $e;
		}

		return $this->getConfiguration(
			$year,
			$memberGroup
		);
	}

	/**
	 * Lädt einen gespeicherten Beitragslauf.
	 */
	public function getConfiguration(
		int $year,
		string $memberGroup,
	): array {
		$this->validateYear($year);

		$memberGroup = trim($memberGroup);

		if ($memberGroup === '') {
			throw new RuntimeException(
				'Keine Vereinsgruppe angegeben.'
			);
		}

		try {
			$run = $this->runMapper->findByYearAndGroup(
				$year,
				$memberGroup
			);
		} catch (DoesNotExistException) {
			throw new RuntimeException(
				sprintf(
					'Für %d und die Gruppe "%s" existiert noch kein Beitragslauf.',
					$year,
					$memberGroup
				)
			);
		}

		$rules = $this->ruleMapper->findByRun(
			(int)$run->getId()
		);

		return $this->buildConfiguration(
			$run,
			$rules
		);
	}

	/**
	 * Setzt einen Beitragslauf von "draft" auf "processing".
	 *
	 * Der Vorgang ist idempotent:
	 *
	 * - processing bleibt processing
	 * - completed bleibt completed
	 * - nur draft darf auf processing wechseln
	 */
	public function markProcessing(
		int $runId
	): array {
		$run = $this->runMapper->find($runId);

		$status = (string)$run->getStatus();

		if (
			$status
			=== MembershipFeeRun::STATUS_COMPLETED
		) {
			return $run->jsonSerialize();
		}

		if (
			$status
			=== MembershipFeeRun::STATUS_PROCESSING
		) {
			return $run->jsonSerialize();
		}

		if (
			$status
			!== MembershipFeeRun::STATUS_DRAFT
		) {
			throw new RuntimeException(
				sprintf(
					'Der Beitragslauf %d besitzt den unerwarteten Status "%s".',
					$runId,
					$status
				)
			);
		}

		$run->setStatus(
			MembershipFeeRun::STATUS_PROCESSING
		);

		$run->setUpdatedAt(
			$this->now()
		);

		$run = $this->runMapper->update($run);

		return $run->jsonSerialize();
	}

	/**
	 * @param array<string, string|int|float> $groupFees
	 * @param array<string, array<string, mixed>> $membershipRules
	 *
	 * @return array<int, array<string, mixed>>
	 */
	private function prepareRules(
		array $groupFees,
		array $membershipRules,
	): array {
		$result = [];

		/*
		 * Beitragsgruppen bilden den Grundbetrag.
		 *
		 * Beispiel:
		 *
		 * 20NY => 20,00 EUR
		 * 50nY => 50,00 EUR
		 */
		foreach ($groupFees as $groupId => $amount) {
			$groupId = trim(
				(string)$groupId
			);

			if ($groupId === '') {
				throw new RuntimeException(
					'Eine Beitragsgruppe besitzt keinen Namen.'
				);
			}

			$result[] = [
				'ruleType' =>
					MembershipFeeRule::TYPE_GROUP,

				'ruleKey' =>
					$groupId,

				'calculationType' =>
					MembershipFeeRule::CALC_FIXED,

				'amountCents' =>
					$this->decimalToCents($amount),

				'percentBp' =>
					null,
			];
		}

		/*
		 * Beitragsarten verändern den Grundbetrag.
		 *
		 * Beispiele:
		 *
		 * Vollmitglied:
		 *   percent 100
		 *
		 * Ehrenmitglied:
		 *   percent 50
		 *
		 * Jugend:
		 *   fixed 10.00
		 */
		foreach (
			$membershipRules
			as $membershipType => $config
		) {
			$membershipType = trim(
				(string)$membershipType
			);

			if ($membershipType === '') {
				throw new RuntimeException(
					'Eine Beitragsart besitzt keinen Namen.'
				);
			}

			if (!is_array($config)) {
				throw new RuntimeException(
					sprintf(
						'Ungültige Regel für Beitragsart "%s".',
						$membershipType
					)
				);
			}

			$type = strtolower(
				trim(
					(string)(
						$config['type']
						?? ''
					)
				)
			);

			$value =
				$config['value']
				?? null;

			if (
				$type
				=== MembershipFeeRule::CALC_PERCENT
			) {
				$result[] = [
					'ruleType' =>
						MembershipFeeRule::TYPE_MEMBERSHIP,

					'ruleKey' =>
						$membershipType,

					'calculationType' =>
						MembershipFeeRule::CALC_PERCENT,

					'amountCents' =>
						null,

					'percentBp' =>
						$this->percentToBasisPoints(
							$value
						),
				];

				continue;
			}

			if (
				$type
				=== MembershipFeeRule::CALC_FIXED
			) {
				$result[] = [
					'ruleType' =>
						MembershipFeeRule::TYPE_MEMBERSHIP,

					'ruleKey' =>
						$membershipType,

					'calculationType' =>
						MembershipFeeRule::CALC_FIXED,

					'amountCents' =>
						$this->decimalToCents(
							$value
						),

					'percentBp' =>
						null,
				];

				continue;
			}

			throw new RuntimeException(
				sprintf(
					'Beitragsart "%s" besitzt den unbekannten Berechnungstyp "%s".',
					$membershipType,
					$type
				)
			);
		}

		return $result;
	}

	/**
	 * @param MembershipFeeRule[] $rules
	 */
	private function buildConfiguration(
		MembershipFeeRun $run,
		array $rules,
	): array {
		$groupFees = [];
		$membershipRules = [];

		foreach ($rules as $rule) {
			if (
				$rule->getRuleType()
				=== MembershipFeeRule::TYPE_GROUP
			) {
				$groupFees[
					$rule->getRuleKey()
				] = $this->centsToDecimal(
					(int)$rule->getAmountCents()
				);

				continue;
			}

			if (
				$rule->getRuleType()
				!== MembershipFeeRule::TYPE_MEMBERSHIP
			) {
				continue;
			}

			if (
				$rule->getCalculationType()
				=== MembershipFeeRule::CALC_PERCENT
			) {
				$membershipRules[
					$rule->getRuleKey()
				] = [
					'type' => 'percent',

					'value' =>
						$this->basisPointsToPercent(
							(int)$rule->getPercentBp()
						),
				];

				continue;
			}

			if (
				$rule->getCalculationType()
				=== MembershipFeeRule::CALC_FIXED
			) {
				$membershipRules[
					$rule->getRuleKey()
				] = [
					'type' => 'fixed',

					'value' =>
						$this->centsToDecimal(
							(int)$rule->getAmountCents()
						),
				];
			}
		}

		return [
			'run' =>
				$run->jsonSerialize(),

			'groupFees' =>
				$groupFees,

			'membershipRules' =>
				$membershipRules,
		];
	}

	/**
	 * Wandelt einen Geldbetrag ohne Float-Berechnung in Cent um.
	 *
	 * 20      => 2000
	 * 20.00   => 2000
	 * 20,50   => 2050
	 */
	private function decimalToCents(
		string|int|float|null $value
	): int {
		if ($value === null) {
			throw new RuntimeException(
				'Ein Beitragsbetrag fehlt.'
			);
		}

		$value = trim(
			(string)$value
		);

		$value = str_replace(
			',',
			'.',
			$value
		);

		if (
			!preg_match(
				'/^\d+(?:\.\d{1,2})?$/',
				$value
			)
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Geldbetrag "%s".',
					$value
				)
			);
		}

		[$euros, $cents] = array_pad(
			explode(
				'.',
				$value,
				2
			),
			2,
			''
		);

		$cents = str_pad(
			$cents,
			2,
			'0'
		);

		return
			((int)$euros * 100)
			+ (int)$cents;
	}

	/**
	 * Prozentwert in Basispunkte umwandeln.
	 *
	 * 100    => 10000
	 * 75     => 7500
	 * 50     => 5000
	 * 12.5   => 1250
	 */
	private function percentToBasisPoints(
		mixed $value
	): int {
		if ($value === null) {
			throw new RuntimeException(
				'Ein Prozentwert fehlt.'
			);
		}

		$value = trim(
			(string)$value
		);

		$value = str_replace(
			',',
			'.',
			$value
		);

		if (
			!preg_match(
				'/^\d+(?:\.\d{1,2})?$/',
				$value
			)
		) {
			throw new RuntimeException(
				sprintf(
					'Ungültiger Prozentwert "%s".',
					$value
				)
			);
		}

		[$whole, $decimal] = array_pad(
			explode(
				'.',
				$value,
				2
			),
			2,
			''
		);

		$decimal = str_pad(
			$decimal,
			2,
			'0'
		);

		$result =
			((int)$whole * 100)
			+ (int)$decimal;

		if (
			$result < 0
			|| $result > 10000
		) {
			throw new RuntimeException(
				'Ein Prozentwert muss zwischen 0 und 100 liegen.'
			);
		}

		return $result;
	}

	private function centsToDecimal(
		int $cents
	): string {
		return sprintf(
			'%d.%02d',
			intdiv(
				$cents,
				100
			),
			$cents % 100
		);
	}

	private function basisPointsToPercent(
		int $basisPoints
	): string {
		$whole = intdiv(
			$basisPoints,
			100
		);

		$decimal =
			$basisPoints % 100;

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

	private function parseDate(
		?string $value,
		string $label,
	): ?DateTime {
		if (
			$value === null
			|| trim($value) === ''
		) {
			return null;
		}

		$value = trim($value);

		$date = DateTime::createFromFormat(
			'!Y-m-d',
			$value,
			new DateTimeZone('UTC')
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
					'%s "%s" ist ungültig. Erwartet wird YYYY-MM-DD.',
					$label,
					$value
				)
			);
		}

		return $date;
	}

	private function now(): DateTime {
		return new DateTime(
			'now',
			new DateTimeZone('UTC')
		);
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