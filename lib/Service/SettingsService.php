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

	private const IMAP_SECURITIES = ['ssl', 'starttls', 'tls'];

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
	 * Decrypted IMAP config for the DATEV confirmation poller (#36), or null if
	 * no IMAP account is configured (host empty).
	 *
	 * @return array{host: string, port: int, security: string, user: string, password: string}|null
	 */
	public function getImapConfig(): ?array {
		$s = $this->getCompany();
		$host = trim((string)$s->getImapHost());
		if ($host === '') {
			return null;
		}
		$password = '';
		$stored = (string)$s->getImapPassword();
		if ($stored !== '') {
			try {
				$password = $this->crypto->decrypt($stored);
			} catch (\Throwable) {
				$password = '';
			}
		}
		return [
			'host' => $host,
			'port' => (int)($s->getImapPort() ?: 993),
			'security' => $s->getImapSecurity() ?: 'ssl',
			'user' => (string)$s->getImapUser(),
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
			$settings->setNumberResetMode(Settings::DEFAULT_RESET_MODE);
			$settings->setFileNameFormat(Settings::DEFAULT_FILE_NAME_FORMAT);
			$settings->setArchiveEnabled(0);
			$settings->setGirocodeEnabled(0);
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
		$settings = $this->getCompany();
		$this->validate($data, $settings);

		$stringFields = [
			'companyName', 'companyAddress', 'vatId', 'taxNumber', 'iban', 'bic',
			'bankName', 'contactPerson', 'contactPhone', 'contactEmail',
			'accentColor', 'numberFormat', 'fileNameFormat', 'archiveSubfolder', 'datevUploadMail',
			'smtpFromName', 'smtpFromEmail', 'smtpHost', 'smtpUser',
			'imapHost', 'imapUser',
			'greetingDefault', 'introDefault', 'closingDefault',
		];
		foreach ($stringFields as $field) {
			if (array_key_exists($field, $data)) {
				$value = $data[$field];
				$settings->{'set' . ucfirst($field)}($value !== null ? (string)$value : null);
			}
		}
		// logoFileId is intentionally NOT writable here. The logo is managed only
		// via the dedicated, validated endpoints (SettingsController::setLogo /
		// deleteLogo), which verify the file exists and is an allowed image type.
		// Accepting it on the generic save path would bypass that validation.
		if (array_key_exists('smallBusiness', $data)) {
			$settings->setSmallBusiness(!empty($data['smallBusiness']) ? 1 : 0);
		}
		if (array_key_exists('datevAutoSend', $data)) {
			$settings->setDatevAutoSend(!empty($data['datevAutoSend']) ? 1 : 0);
		}
		if (array_key_exists('imapCleanup', $data)) {
			$settings->setImapCleanup(!empty($data['imapCleanup']) ? 1 : 0);
		}
		if (array_key_exists('archiveEnabled', $data)) {
			// Only meaningful with a picked target folder (validated above).
			$settings->setArchiveEnabled(!empty($data['archiveEnabled']) ? 1 : 0);
		}
		if (array_key_exists('girocodeEnabled', $data)) {
			// Needs an IBAN to build an EPC payload (validated above).
			$settings->setGirocodeEnabled(!empty($data['girocodeEnabled']) ? 1 : 0);
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
		if (array_key_exists('imapPort', $data)) {
			$settings->setImapPort($data['imapPort'] !== null && $data['imapPort'] !== '' ? (int)$data['imapPort'] : null);
		}
		if (array_key_exists('imapSecurity', $data)) {
			$settings->setImapSecurity(in_array($data['imapSecurity'], self::IMAP_SECURITIES, true) ? (string)$data['imapSecurity'] : 'ssl');
		}
		if (array_key_exists('imapPassword', $data)) {
			$pw = (string)$data['imapPassword'];
			$settings->setImapPassword($pw !== '' ? $this->crypto->encrypt($pw) : '');
		}
		if (($settings->getNumberFormat() ?? '') === '') {
			$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		}
		if (trim((string)$settings->getFileNameFormat()) === '') {
			$settings->setFileNameFormat(Settings::DEFAULT_FILE_NAME_FORMAT);
		}
		if (array_key_exists('numberResetMode', $data)) {
			// validate() has already ensured the value is one of RESET_MODES.
			$oldMode = $settings->getNumberResetMode() ?: Settings::DEFAULT_RESET_MODE;
			$newMode = (string)$data['numberResetMode'];
			$settings->setNumberResetMode($newMode);
			// Mid-year switch continuous -> yearly: never restart the series
			// immediately (that could collide on the unique number index).
			// Anchor the counter to the current year so it keeps running for the
			// rest of the year; only the next Jan 1 resets to 1.
			if ($oldMode === Settings::RESET_MODE_CONTINUOUS && $newMode === Settings::RESET_MODE_YEARLY) {
				$settings->setNumberCounterYear((int)(new DateTime())->format('Y'));
			}
		}

		$settings->setUpdatedAt(new DateTime());
		return $this->mapper->update($settings);
	}

	/**
	 * Validate incoming settings data against format and column-length limits.
	 *
	 * The number format and the reset mode are validated together against the
	 * effective (merged) state — a change to either can make the combination
	 * invalid, even if the other field is not part of this request.
	 *
	 * @param array<string, mixed> $data
	 * @param Settings $current the persisted settings the request is applied onto
	 * @throws ValidationException
	 */
	private function validate(array $data, Settings $current): void {
		if (array_key_exists('numberResetMode', $data)
			&& !in_array((string)$data['numberResetMode'], Settings::RESET_MODES, true)) {
			throw new ValidationException('Ungültiger Nummernkreis-Modus.');
		}

		if (array_key_exists('numberFormat', $data)) {
			$format = trim((string)$data['numberFormat']);
			if ($format !== '' && !preg_match('/\{#+\}/', $format)) {
				throw new ValidationException('Das Nummernformat muss einen Zählerplatzhalter wie {####} enthalten.');
			}
		}

		if (array_key_exists('fileNameFormat', $data)) {
			$format = trim((string)$data['fileNameFormat']);
			if ($format !== '') {
				// {nummer} keeps file names unique per invoice — without it,
				// mails and the NC filing would silently overwrite each other.
				if (!str_contains($format, '{nummer}')) {
					throw new ValidationException('Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben.');
				}
				if (preg_match('/[\/\\\\]/', $format)) {
					throw new ValidationException('Das Dateinamen-Schema darf keine Pfadtrenner (/ oder \\) enthalten.');
				}
				// Reject unknown {…} tokens early instead of rendering them literally.
				$unknown = array_diff(
					preg_match_all('/\{[^{}]*\}/', $format, $m) ? $m[0] : [],
					InvoiceCalculator::FILE_NAME_PLACEHOLDERS,
				);
				if ($unknown !== []) {
					throw new ValidationException(sprintf('Unbekannte Platzhalter im Dateinamen-Schema: %s. Erlaubt sind %s.',
						implode(', ', $unknown), implode(', ', InvoiceCalculator::FILE_NAME_PLACEHOLDERS)));
				}
			}
		}

		if (array_key_exists('archiveEnabled', $data) && !empty($data['archiveEnabled'])) {
			$effectiveFolderId = $current->getArchiveFolderId();
			if ($effectiveFolderId === null) {
				throw new ValidationException('Für die Ablage muss zuerst ein Zielordner gewählt werden.');
			}
		}

		// Cross-field: the Girocode payload needs an IBAN; check the effective
		// (merged) state because both fields live in the same form.
		if (array_key_exists('girocodeEnabled', $data) && !empty($data['girocodeEnabled'])) {
			$effectiveIban = array_key_exists('iban', $data)
				? trim((string)$data['iban'])
				: trim((string)$current->getIban());
			if ($effectiveIban === '') {
				throw new ValidationException('Für den Girocode muss eine IBAN hinterlegt sein.');
			}
		}

		if (array_key_exists('archiveSubfolder', $data) && $data['archiveSubfolder'] !== null) {
			$pattern = trim((string)$data['archiveSubfolder']);
			if ($pattern !== '') {
				if (str_contains($pattern, '..')) {
					throw new ValidationException('Der Unterordner darf kein ".." enthalten.');
				}
				$unknown = array_diff(
					preg_match_all('/\{[^{}]*\}/', $pattern, $m) ? $m[0] : [],
					ArchiveService::SUBFOLDER_PLACEHOLDERS,
				);
				if ($unknown !== []) {
					throw new ValidationException(sprintf('Unbekannte Platzhalter im Unterordner: %s. Erlaubt sind %s.',
						implode(', ', $unknown), implode(', ', ArchiveService::SUBFOLDER_PLACEHOLDERS)));
				}
			}
		}

		// Cross-field: a yearly-resetting counter needs a year component in the
		// format, otherwise the number repeats every Jan 1 and violates the
		// unique index over `number`. Checked whenever either field changes.
		if (array_key_exists('numberFormat', $data) || array_key_exists('numberResetMode', $data)) {
			$effectiveFormat = array_key_exists('numberFormat', $data)
				? trim((string)$data['numberFormat'])
				: (string)$current->getNumberFormat();
			if ($effectiveFormat === '') {
				$effectiveFormat = Settings::DEFAULT_NUMBER_FORMAT;
			}
			$effectiveMode = array_key_exists('numberResetMode', $data)
				? (string)$data['numberResetMode']
				: ($current->getNumberResetMode() ?: Settings::DEFAULT_RESET_MODE);
			if ($effectiveMode === Settings::RESET_MODE_YEARLY
				&& !InvoiceCalculator::formatHasYear($effectiveFormat)) {
				throw new ValidationException('Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern.');
			}
		}

		// Column-length limits mirror the migration schema.
		$maxLengths = [
			'companyName' => 255, 'vatId' => 64, 'taxNumber' => 64, 'iban' => 34,
			'bic' => 16, 'bankName' => 255, 'accentColor' => 9, 'numberFormat' => 64,
			'fileNameFormat' => 128, 'archiveSubfolder' => 64,
			'contactPerson' => 255, 'contactPhone' => 64, 'contactEmail' => 255,
			'datevUploadMail' => 255, 'smtpFromName' => 255, 'smtpFromEmail' => 255,
			'smtpHost' => 255, 'smtpUser' => 255,
			'imapHost' => 255, 'imapUser' => 255,
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

		foreach (['datevUploadMail', 'smtpFromEmail', 'contactEmail'] as $emailField) {
			if (!empty($data[$emailField]) && filter_var((string)$data[$emailField], FILTER_VALIDATE_EMAIL) === false) {
				throw new ValidationException('Bitte eine gültige E-Mail-Adresse angeben.');
			}
		}
	}

	/**
	 * Persist the company logo file id (or null to clear it). Called only from
	 * the dedicated logo endpoints, which have already validated that the file
	 * exists and is an allowed image type.
	 */
	public function saveLogoFileId(?int $fileId): Settings {
		$settings = $this->getCompany();
		$settings->setLogoFileId($fileId);
		$settings->setUpdatedAt(new DateTime());
		return $this->mapper->update($settings);
	}

	/** Target folder for the Nextcloud filing (#38); managed like the logo via a dedicated, validated endpoint. */
	public function saveArchiveFolderId(?int $folderId): Settings {
		$settings = $this->getCompany();
		$settings->setArchiveFolderId($folderId);
		if ($folderId === null) {
			// Without a target the toggle is meaningless — switch it off so the
			// commit path does not log a failed filing on every invoice.
			$settings->setArchiveEnabled(0);
		}
		$settings->setUpdatedAt(new DateTime());
		return $this->mapper->update($settings);
	}

	/**
	 * Reserve and return the next invoice number for the given year, persisting
	 * the incremented counter.
	 *
	 * The counter either resets per calendar year ('yearly') or runs
	 * continuously across years ('continuous'), depending on number_reset_mode
	 * (see InvoiceCalculator::nextCounter). number_counter_year is always kept
	 * in sync so switching back to 'yearly' has a correct anchor.
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
		$select->select('number_counter', 'number_counter_year', 'number_format', 'number_reset_mode')
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
		$mode = (string)($row['number_reset_mode'] ?? Settings::DEFAULT_RESET_MODE);
		if (!in_array($mode, Settings::RESET_MODES, true)) {
			$mode = Settings::DEFAULT_RESET_MODE;
		}
		// Defence in depth: a yearly reset with a year-less format repeats the
		// number every Jan 1 (unique-index collision). validate() blocks this on
		// the write path, but a row migrated from a pre-#39 install can still hold
		// this combination — never reset in that case (continuous is collision-free
		// with a year-less format).
		if ($mode === Settings::RESET_MODE_YEARLY && !InvoiceCalculator::formatHasYear($format)) {
			$mode = Settings::RESET_MODE_CONTINUOUS;
		}

		$next = InvoiceCalculator::nextCounter($mode, $counter, $counterYear, $year);

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
