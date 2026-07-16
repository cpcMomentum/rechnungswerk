<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/**
 * Per-owner company / mandant settings. Exactly one row per owner.
 *
 * @method string getOwnerUserId()
 * @method void setOwnerUserId(string $ownerUserId)
 * @method ?string getCompanyName()
 * @method void setCompanyName(?string $companyName)
 * @method ?string getCompanyAddress()
 * @method void setCompanyAddress(?string $companyAddress)
 * @method ?string getVatId()
 * @method void setVatId(?string $vatId)
 * @method ?string getTaxNumber()
 * @method void setTaxNumber(?string $taxNumber)
 * @method ?string getIban()
 * @method void setIban(?string $iban)
 * @method ?string getBic()
 * @method void setBic(?string $bic)
 * @method ?string getBankName()
 * @method void setBankName(?string $bankName)
 * @method ?string getContactPerson()
 * @method void setContactPerson(?string $contactPerson)
 * @method ?string getContactPhone()
 * @method void setContactPhone(?string $contactPhone)
 * @method ?string getContactEmail()
 * @method void setContactEmail(?string $contactEmail)
 * @method ?int getLogoFileId()
 * @method void setLogoFileId(?int $logoFileId)
 * @method ?string getAccentColor()
 * @method void setAccentColor(?string $accentColor)
 * @method string getNumberFormat()
 * @method void setNumberFormat(string $numberFormat)
 * @method int getNumberCounter()
 * @method void setNumberCounter(int $numberCounter)
 * @method ?int getNumberCounterYear()
 * @method void setNumberCounterYear(?int $numberCounterYear)
 * @method string getNumberResetMode()
 * @method void setNumberResetMode(string $numberResetMode)
 * @method ?string getFileNameFormat()
 * @method void setFileNameFormat(?string $fileNameFormat)
 * @method int getArchiveEnabled()
 * @method void setArchiveEnabled(int $archiveEnabled)
 * @method ?int getArchiveFolderId()
 * @method void setArchiveFolderId(?int $archiveFolderId)
 * @method ?string getArchiveSubfolder()
 * @method void setArchiveSubfolder(?string $archiveSubfolder)
 * @method int getGirocodeEnabled()
 * @method void setGirocodeEnabled(int $girocodeEnabled)
 * @method int getSmallBusiness()
 * @method void setSmallBusiness(int $smallBusiness)
 * @method int getDefaultTaxRateBp()
 * @method void setDefaultTaxRateBp(int $defaultTaxRateBp)
 * @method ?int getDefaultPaymentTermDays()
 * @method void setDefaultPaymentTermDays(?int $defaultPaymentTermDays)
 * @method ?string getDatevUploadMail()
 * @method void setDatevUploadMail(?string $datevUploadMail)
 * @method int getDatevAutoSend()
 * @method void setDatevAutoSend(int $datevAutoSend)
 * @method ?string getSmtpFromName()
 * @method void setSmtpFromName(?string $smtpFromName)
 * @method ?string getSmtpFromEmail()
 * @method void setSmtpFromEmail(?string $smtpFromEmail)
 * @method ?string getSmtpHost()
 * @method void setSmtpHost(?string $smtpHost)
 * @method ?int getSmtpPort()
 * @method void setSmtpPort(?int $smtpPort)
 * @method ?string getSmtpSecurity()
 * @method void setSmtpSecurity(?string $smtpSecurity)
 * @method ?string getSmtpUser()
 * @method void setSmtpUser(?string $smtpUser)
 * @method ?string getSmtpPassword()
 * @method void setSmtpPassword(?string $smtpPassword)
 * @method ?string getImapHost()
 * @method void setImapHost(?string $imapHost)
 * @method ?int getImapPort()
 * @method void setImapPort(?int $imapPort)
 * @method ?string getImapSecurity()
 * @method void setImapSecurity(?string $imapSecurity)
 * @method ?string getImapUser()
 * @method void setImapUser(?string $imapUser)
 * @method ?string getImapPassword()
 * @method void setImapPassword(?string $imapPassword)
 * @method int getImapCleanup()
 * @method void setImapCleanup(int $imapCleanup)
 * @method ?string getGreetingDefault()
 * @method void setGreetingDefault(?string $greetingDefault)
 * @method ?string getIntroDefault()
 * @method void setIntroDefault(?string $introDefault)
 * @method ?string getClosingDefault()
 * @method void setClosingDefault(?string $closingDefault)
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class Settings extends Entity implements JsonSerializable {
	public const DEFAULT_NUMBER_FORMAT = 'RE-{YYYY}-{####}';

	/** Counter resets to 1 each calendar year (needs a year component in the format). */
	public const RESET_MODE_YEARLY = 'yearly';
	/** Counter runs continuously across years (year component optional). */
	public const RESET_MODE_CONTINUOUS = 'continuous';
	public const RESET_MODES = [self::RESET_MODE_YEARLY, self::RESET_MODE_CONTINUOUS];
	public const DEFAULT_RESET_MODE = self::RESET_MODE_YEARLY;

	/** File-name scheme for generated PDFs; '{nummer}' = historical behaviour. */
	public const DEFAULT_FILE_NAME_FORMAT = '{nummer}';

	protected ?string $ownerUserId = null;
	protected ?string $companyName = null;
	protected ?string $companyAddress = null;
	protected ?string $vatId = null;
	protected ?string $taxNumber = null;
	protected ?string $iban = null;
	protected ?string $bic = null;
	protected ?string $bankName = null;
	protected ?string $contactPerson = null;
	protected ?string $contactPhone = null;
	protected ?string $contactEmail = null;
	protected ?int $logoFileId = null;
	protected ?string $accentColor = null;
	protected ?string $numberFormat = null;
	protected ?int $numberCounter = null;
	protected ?int $numberCounterYear = null;
	protected ?string $numberResetMode = null;
	protected ?string $fileNameFormat = null;
	protected ?int $archiveEnabled = null;
	protected ?int $archiveFolderId = null;
	protected ?string $archiveSubfolder = null;
	protected ?int $girocodeEnabled = null;
	protected ?int $smallBusiness = null;
	protected ?int $defaultTaxRateBp = null;
	protected ?int $defaultPaymentTermDays = null;
	protected ?string $datevUploadMail = null;
	protected ?int $datevAutoSend = null;
	protected ?string $smtpFromName = null;
	protected ?string $smtpFromEmail = null;
	protected ?string $smtpHost = null;
	protected ?int $smtpPort = null;
	protected ?string $smtpSecurity = null;
	protected ?string $smtpUser = null;
	protected ?string $smtpPassword = null;
	protected ?string $imapHost = null;
	protected ?int $imapPort = null;
	protected ?string $imapSecurity = null;
	protected ?string $imapUser = null;
	protected ?string $imapPassword = null;
	protected ?int $imapCleanup = null;
	protected ?string $greetingDefault = null;
	protected ?string $introDefault = null;
	protected ?string $closingDefault = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('companyName', Types::STRING);
		$this->addType('companyAddress', Types::TEXT);
		$this->addType('vatId', Types::STRING);
		$this->addType('taxNumber', Types::STRING);
		$this->addType('iban', Types::STRING);
		$this->addType('bic', Types::STRING);
		$this->addType('bankName', Types::STRING);
		$this->addType('contactPerson', Types::STRING);
		$this->addType('contactPhone', Types::STRING);
		$this->addType('contactEmail', Types::STRING);
		$this->addType('logoFileId', Types::INTEGER);
		$this->addType('accentColor', Types::STRING);
		$this->addType('numberFormat', Types::STRING);
		$this->addType('numberCounter', Types::INTEGER);
		$this->addType('numberCounterYear', Types::INTEGER);
		$this->addType('numberResetMode', Types::STRING);
		$this->addType('fileNameFormat', Types::STRING);
		$this->addType('archiveEnabled', Types::SMALLINT);
		$this->addType('archiveFolderId', Types::INTEGER);
		$this->addType('archiveSubfolder', Types::STRING);
		$this->addType('girocodeEnabled', Types::SMALLINT);
		$this->addType('smallBusiness', Types::SMALLINT);
		$this->addType('defaultTaxRateBp', Types::INTEGER);
		$this->addType('defaultPaymentTermDays', Types::INTEGER);
		$this->addType('datevUploadMail', Types::STRING);
		$this->addType('datevAutoSend', Types::SMALLINT);
		$this->addType('smtpFromName', Types::STRING);
		$this->addType('smtpFromEmail', Types::STRING);
		$this->addType('smtpHost', Types::STRING);
		$this->addType('smtpPort', Types::INTEGER);
		$this->addType('smtpSecurity', Types::STRING);
		$this->addType('smtpUser', Types::STRING);
		$this->addType('smtpPassword', Types::TEXT);
		$this->addType('imapHost', Types::STRING);
		$this->addType('imapPort', Types::INTEGER);
		$this->addType('imapSecurity', Types::STRING);
		$this->addType('imapUser', Types::STRING);
		$this->addType('imapPassword', Types::TEXT);
		$this->addType('imapCleanup', Types::SMALLINT);
		$this->addType('greetingDefault', Types::TEXT);
		$this->addType('introDefault', Types::TEXT);
		$this->addType('closingDefault', Types::TEXT);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'companyName' => $this->getCompanyName(),
			'companyAddress' => $this->getCompanyAddress(),
			'vatId' => $this->getVatId(),
			'taxNumber' => $this->getTaxNumber(),
			'iban' => $this->getIban(),
			'bic' => $this->getBic(),
			'bankName' => $this->getBankName(),
			'contactPerson' => $this->getContactPerson(),
			'contactPhone' => $this->getContactPhone(),
			'contactEmail' => $this->getContactEmail(),
			'logoFileId' => $this->getLogoFileId(),
			'accentColor' => $this->getAccentColor(),
			'numberFormat' => $this->getNumberFormat(),
			'numberCounter' => $this->getNumberCounter(),
			'numberCounterYear' => $this->getNumberCounterYear(),
			'numberResetMode' => $this->getNumberResetMode() ?: self::DEFAULT_RESET_MODE,
			'fileNameFormat' => $this->getFileNameFormat() ?: self::DEFAULT_FILE_NAME_FORMAT,
			'archiveEnabled' => (bool)$this->getArchiveEnabled(),
			'archiveFolderId' => $this->getArchiveFolderId(),
			'archiveSubfolder' => $this->getArchiveSubfolder(),
			'girocodeEnabled' => (bool)$this->getGirocodeEnabled(),
			'smallBusiness' => (bool)$this->getSmallBusiness(),
			'defaultTaxRateBp' => $this->getDefaultTaxRateBp(),
			'defaultPaymentTermDays' => $this->getDefaultPaymentTermDays(),
			'datevUploadMail' => $this->getDatevUploadMail(),
			'datevAutoSend' => (bool)$this->getDatevAutoSend(),
			'smtpFromName' => $this->getSmtpFromName(),
			'smtpFromEmail' => $this->getSmtpFromEmail(),
			'smtpHost' => $this->getSmtpHost(),
			'smtpPort' => $this->getSmtpPort(),
			'smtpSecurity' => $this->getSmtpSecurity() ?? 'starttls',
			'smtpUser' => $this->getSmtpUser(),
			// Never expose the stored (encrypted) password; only whether one is set.
			'smtpPasswordSet' => ($this->getSmtpPassword() ?? '') !== '',
			'imapHost' => $this->getImapHost(),
			'imapPort' => $this->getImapPort(),
			'imapSecurity' => $this->getImapSecurity() ?? 'ssl',
			'imapUser' => $this->getImapUser(),
			'imapPasswordSet' => ($this->getImapPassword() ?? '') !== '',
			'imapCleanup' => (bool)$this->getImapCleanup(),
			'greetingDefault' => $this->getGreetingDefault(),
			'introDefault' => $this->getIntroDefault(),
			'closingDefault' => $this->getClosingDefault(),
		];
	}
}
