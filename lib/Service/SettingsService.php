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
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\Security\ICrypto;

class SettingsService {

	private const SETTINGS_TABLE = 'rechnungswerk_settings';

	private const SMTP_SECURITIES = ['none', 'starttls', 'ssl'];

	/**
	 * Single central company-settings row. The app is one company per Nextcloud
	 * instance (It. 6); the per-user model of It. 1–5 is collapsed into one row
	 * keyed by this constant in owner_user_id.
	 */
	public const COMPANY_KEY = '__company__';

	public function __construct(
		private readonly SettingsMapper $mapper,
		private readonly IDBConnection $db,
		private readonly ICrypto $crypto,
	) {
	}

	/**
	 * Decrypted SMTP server config for the mailer, or null if no own SMTP
	 * account is configured (host empty) → caller falls back to Nextcloud's
	 * system mailer.
	 *
	 * @return array{host: string, port: int, security: string, user: string, password: string}|null
	 */
	public function getSmtpConfig(): ?array {
		$s = $this->getCompany();
		$host = trim((string)$s->getSmtpHost());
		if ($host === '') {
			return null;
		}
		$password = '';
		$stored = (string)$s->getSmtpPassword();
		if ($stored !== '') {
			try {
				$password = $this->crypto->decrypt($stored);
			} catch (\Throwable) {
				$password = '';
			}
		}
		return [
			'host' => $host,
			'port' => (int)($s->getSmtpPort() ?: 587),
			'security' => $s->getSmtpSecurity() ?: 'starttls',
			'user' => (string)$s->getSmtpUser(),
			'password' => $password,
		];
	}

	/**
	 * Return the central company settings, creating a default row on first access.
	 */
	public function getCompany(): Settings {
		try {
			return $this->mapper->findByOwner(self::COMPANY_KEY);
		} catch (DoesNotExistException) {
			$settings = new Settings();
			$settings->setOwnerUserId(self::COMPANY_KEY);
			$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
			$settings->setNumberCounter(0);
			$settings->setNumberCounterYear(null);
			$settings->setSmallBusiness(0);
			$settings->setDatevAutoSend(0);
			$settings->setDefaultTaxRateBp(1900);
			$now = new DateTime();
			$settings->setCreatedAt($now);
			$settings->setUpdatedAt($now);
			try {
				return $this->mapper->insert($settings);
			} catch (DBException) {
				// Concurrent first-access: unique constraint hit; return the row that won.
				return $this->mapper->findByOwner(self::COMPANY_KEY);
			}
		}
	}

	/**
	 * @param array<string, mixed> $data
	 */
	public function save(array $data): Settings {
		$this->validate($data);

		$settings = $this->getCompany();

		$stringFields = [
			'companyName', 'companyAddress', 'vatId', 'taxNumber', 'iban', 'bic',
			'bankName', 'accentColor', 'numberFormat', 'datevUploadMail',
			'smtpFromName', 'smtpFromEmail', 'smtpHost', 'smtpUser',
			'greetingDefault', 'introDefault', 'closingDefault',
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
		if (array_key_exists('datevAutoSend', $data)) {
			$settings->setDatevAutoSend(!empty($data['datevAutoSend']) ? 1 : 0);
		}
		if (array_key_exists('defaultTaxRateBp', $data)) {
			$settings->setDefaultTaxRateBp((int)$data['defaultTaxRateBp']);
		}
		if (array_key_exists('smtpPort', $data)) {
			$settings->setSmtpPort($data['smtpPort'] !== null && $data['smtpPort'] !== '' ? (int)$data['smtpPort'] : null);
		}
		if (array_key_exists('smtpSecurity', $data)) {
			$settings->setSmtpSecurity(in_array($data['smtpSecurity'], self::SMTP_SECURITIES, true) ? (string)$data['smtpSecurity'] : 'starttls');
		}
		// The password is masked in the API; only overwrite it when a new,
		// non-empty value is sent (encrypted at rest). An explicit empty string
		// clears it.
		if (array_key_exists('smtpPassword', $data)) {
			$pw = (string)$data['smtpPassword'];
			$settings->setSmtpPassword($pw !== '' ? $this->crypto->encrypt($pw) : '');
		}
		if (($settings->getNumberFormat() ?? '') === '') {
			$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		}

		$settings->setUpdatedAt(new DateTime());
		return $this->mapper->update($settings);
	}

	/**
	 * Validate incoming settings data against format and column-length limits.
	 *
	 * @param array<string, mixed> $data
	 * @throws ValidationException
	 */
	private function validate(array $data): void {
		if (array_key_exists('numberFormat', $data)) {
			$format = trim((string)$data['numberFormat']);
			if ($format !== '' && !preg_match('/\{#+\}/', $format)) {
				throw new ValidationException('Das Nummernformat muss einen Zählerplatzhalter wie {####} enthalten.');
			}
		}

		// Column-length limits mirror the migration schema.
		$maxLengths = [
			'companyName' => 255, 'vatId' => 64, 'taxNumber' => 64, 'iban' => 34,
			'bic' => 16, 'bankName' => 255, 'accentColor' => 9, 'numberFormat' => 64,
			'datevUploadMail' => 255, 'smtpFromName' => 255, 'smtpFromEmail' => 255,
			'smtpHost' => 255, 'smtpUser' => 255,
		];
		foreach ($maxLengths as $field => $max) {
			if (array_key_exists($field, $data) && $data[$field] !== null && mb_strlen((string)$data[$field]) > $max) {
				throw new ValidationException(sprintf('Feld "%s" darf höchstens %d Zeichen lang sein.', $field, $max));
			}
		}

		if (!empty($data['accentColor']) && !preg_match('/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/', (string)$data['accentColor'])) {
			throw new ValidationException('Die Akzentfarbe muss ein Hex-Farbwert wie #1a2b3c sein.');
		}

		if (array_key_exists('smtpPort', $data) && $data['smtpPort'] !== null && $data['smtpPort'] !== '') {
			$port = (int)$data['smtpPort'];
			if ($port < 1 || $port > 65535) {
				throw new ValidationException('Der SMTP-Port muss zwischen 1 und 65535 liegen.');
			}
		}

		foreach (['datevUploadMail', 'smtpFromEmail'] as $emailField) {
			if (!empty($data[$emailField]) && filter_var((string)$data[$emailField], FILTER_VALIDATE_EMAIL) === false) {
				throw new ValidationException('Bitte eine gültige E-Mail-Adresse angeben.');
			}
		}
	}

	/**
	 * Reserve and return the next invoice number for the given year, persisting
	 * the incremented counter. The counter resets per calendar year.
	 *
	 * MUST be called inside a DB transaction owned by the caller. The central
	 * company settings row is locked with SELECT ... FOR UPDATE so that
	 * concurrent commits serialise and can never hand out the same sequential
	 * number (a duplicate invoice number would violate GoBD).
	 */
	public function reserveNextNumber(int $year): string {
		$this->getCompany();

		// Lock the company settings row for the rest of the caller's transaction.
		$select = $this->db->getQueryBuilder();
		$select->select('number_counter', 'number_counter_year', 'number_format')
			->from(self::SETTINGS_TABLE)
			->where($select->expr()->eq('owner_user_id', $select->createNamedParameter(self::COMPANY_KEY)))
			->forUpdate();
		$result = $select->executeQuery();
		$row = $result->fetch();
		$result->closeCursor();

		$counter = (int)($row['number_counter'] ?? 0);
		$counterYear = isset($row['number_counter_year']) && $row['number_counter_year'] !== null
			? (int)$row['number_counter_year'] : null;
		$format = (string)($row['number_format'] ?? '');
		if ($format === '') {
			$format = Settings::DEFAULT_NUMBER_FORMAT;
		}

		$next = ($counterYear === $year) ? $counter + 1 : 1;

		$update = $this->db->getQueryBuilder();
		$update->update(self::SETTINGS_TABLE)
			->set('number_counter', $update->createNamedParameter($next, IQueryBuilder::PARAM_INT))
			->set('number_counter_year', $update->createNamedParameter($year, IQueryBuilder::PARAM_INT))
			->set('updated_at', $update->createNamedParameter(new DateTime(), IQueryBuilder::PARAM_DATETIME_MUTABLE))
			->where($update->expr()->eq('owner_user_id', $update->createNamedParameter(self::COMPANY_KEY)));
		$update->executeStatement();

		return InvoiceCalculator::formatNumber($format, $next, $year);
	}
}
