<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Db\SettingsMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\DB\Exception as DBException;

class SettingsService {

	public function __construct(
		private readonly SettingsMapper $mapper,
	) {
	}

	/**
	 * Return the owner's settings, creating a default row on first access.
	 */
	public function getOrCreate(string $userId): Settings {
		try {
			return $this->mapper->findByOwner($userId);
		} catch (DoesNotExistException) {
			$settings = new Settings();
			$settings->setOwnerUserId($userId);
			$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
			$settings->setNumberCounter(0);
			$settings->setNumberCounterYear(null);
			$settings->setSmallBusiness(0);
			$settings->setDefaultTaxRateBp(1900);
			$now = new DateTime();
			$settings->setCreatedAt($now);
			$settings->setUpdatedAt($now);
			try {
				return $this->mapper->insert($settings);
			} catch (DBException) {
				// Concurrent first-access: unique constraint hit; return the row that won.
				return $this->mapper->findByOwner($userId);
			}
		}
	}

	/**
	 * @param array<string, mixed> $data
	 */
	public function save(string $userId, array $data): Settings {
		if (array_key_exists('numberFormat', $data)) {
			$format = trim((string)$data['numberFormat']);
			if ($format !== '' && !preg_match('/\{#+\}/', $format)) {
				throw new ValidationException('Das Nummernformat muss einen Zählerplatzhalter wie {####} enthalten.');
			}
		}

		$settings = $this->getOrCreate($userId);

		$stringFields = [
			'companyName', 'companyAddress', 'vatId', 'taxNumber', 'iban', 'bic',
			'bankName', 'accentColor', 'numberFormat', 'datevUploadMail',
			'smtpFromName', 'smtpFromEmail', 'greetingDefault', 'introDefault', 'closingDefault',
		];
		foreach ($stringFields as $field) {
			if (array_key_exists($field, $data)) {
				$value = $data[$field];
				$settings->{'set' . ucfirst($field)}($value !== null ? (string)$value : null);
			}
		}
		if (array_key_exists('logoFileId', $data)) {
			$settings->setLogoFileId($data['logoFileId'] !== null ? (int)$data['logoFileId'] : null);
		}
		if (array_key_exists('smallBusiness', $data)) {
			$settings->setSmallBusiness(!empty($data['smallBusiness']) ? 1 : 0);
		}
		if (array_key_exists('defaultTaxRateBp', $data)) {
			$settings->setDefaultTaxRateBp((int)$data['defaultTaxRateBp']);
		}
		if (($settings->getNumberFormat() ?? '') === '') {
			$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		}

		$settings->setUpdatedAt(new DateTime());
		return $this->mapper->update($settings);
	}

	/**
	 * Reserve and return the next invoice number for the given year, persisting
	 * the incremented counter. Counter resets per calendar year.
	 *
	 * Must be called inside a DB transaction owned by the caller.
	 */
	public function reserveNextNumber(string $userId, int $year): string {
		$settings = $this->getOrCreate($userId);

		if ($settings->getNumberCounterYear() !== $year) {
			$settings->setNumberCounterYear($year);
			$settings->setNumberCounter(0);
		}
		$next = $settings->getNumberCounter() + 1;
		$settings->setNumberCounter($next);
		$settings->setUpdatedAt(new DateTime());
		$this->mapper->update($settings);

		$format = $settings->getNumberFormat() ?? Settings::DEFAULT_NUMBER_FORMAT;
		return InvoiceCalculator::formatNumber($format, $next, $year);
	}
}
