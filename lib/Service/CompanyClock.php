<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use DateTimeZone;
use OCA\Rechnungswerk\Db\SettingsMapper;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IConfig;

/** Single source for "today" on documents: Nextcloud pins PHP to UTC, which is still yesterday after local midnight. */
class CompanyClock {

	public const FALLBACK = 'Europe/Berlin';

	private ?DateTimeZone $resolved = null;

	public function __construct(
		private readonly SettingsMapper $settingsMapper,
		private readonly IConfig $config,
		private readonly ITimeFactory $timeFactory,
	) {
	}

	/** UTC counts as unset: it is Nextcloud's value without any setting, not a choice for invoice dates. */
	public function timeZone(): DateTimeZone {
		if ($this->resolved !== null) {
			return $this->resolved;
		}
		$system = $this->config->getSystemValueString('default_timezone', '');
		return $this->resolved = self::create($this->companyValue())
			?? ($system !== 'UTC' ? self::create($system) : null)
			?? new DateTimeZone(self::FALLBACK);
	}

	/** Anchored at UTC midnight, the way DATE columns are read back, so it compares directly with stored dates. */
	public function today(): DateTime {
		$local = $this->timeFactory->now()->setTimezone($this->timeZone())->format('Y-m-d'); // tz-ok: wird hier in die Firmen-Zeitzone umgerechnet
		return new DateTime($local, new DateTimeZone('UTC'));
	}

	public function currentYear(): int {
		return (int)$this->today()->format('Y');
	}

	public function reset(): void {
		$this->resolved = null;
	}

	public static function isValid(string $name): bool {
		return self::create($name) !== null;
	}

	private function companyValue(): string {
		try {
			return (string)$this->settingsMapper->findByOwner(SettingsService::COMPANY_KEY)->getTimezone();
		} catch (DoesNotExistException) {
			return '';
		}
	}

	/** @return list<string> canonical names for the picker; isValid() also takes the aliases this server knows */
	public static function zoneNames(): array {
		return DateTimeZone::listIdentifiers();
	}

	private static function create(string $name): ?DateTimeZone {
		return isset(self::knownNames()[$name]) ? new DateTimeZone($name) : null;
	}

	/** @return array<string, int> */
	private static function knownNames(): array {
		static $names = null;
		return $names ??= array_flip(DateTimeZone::listIdentifiers(DateTimeZone::ALL_WITH_BC));
	}
}
