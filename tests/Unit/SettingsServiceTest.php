<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Db\SettingsMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\SettingsService;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;
use OCP\Security\ICrypto;
use PHPUnit\Framework\TestCase;

/**
 * Pure validation / default-creation behaviour is unit-tested here. The
 * sequential numbering in reserveNextNumber() uses a row-locked SELECT ... FOR
 * UPDATE and is verified against a real database (NC Docker), not mocked.
 */
class SettingsServiceTest extends TestCase {

	private SettingsMapper $mapper;
	private SettingsService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->mapper = $this->createMock(SettingsMapper::class);
		$db = $this->createMock(IDBConnection::class);
		$crypto = $this->createMock(ICrypto::class);
		$crypto->method('encrypt')->willReturnCallback(static fn (string $v): string => 'enc:' . $v);
		$crypto->method('decrypt')->willReturnCallback(static fn (string $v): string => str_replace('enc:', '', $v));
		$this->service = new SettingsService($this->mapper, $db, $crypto);
	}

	public function testGetCompanyInsertsDefaultsOnFirstAccess(): void {
		$this->mapper->method('findByOwner')->willThrowException(new DoesNotExistException('none'));
		$this->mapper->method('insert')->willReturnArgument(0);

		$settings = $this->service->getCompany();

		$this->assertSame(SettingsService::COMPANY_KEY, $settings->getOwnerUserId());
		$this->assertSame(Settings::DEFAULT_NUMBER_FORMAT, $settings->getNumberFormat());
		$this->assertSame(0, $settings->getNumberCounter());
		$this->assertSame(0, $settings->getSmallBusiness());
		$this->assertSame(1900, $settings->getDefaultTaxRateBp());
	}

	public function testSaveRejectsNumberFormatWithoutCounter(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['numberFormat' => 'RE-{YYYY}']);
	}

	public function testSaveRejectsInvalidEmail(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['datevUploadMail' => 'not-an-email']);
	}

	public function testSaveRejectsInvalidAccentColor(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['accentColor' => 'blau']);
	}

	public function testSavedSmtpPasswordIsEncryptedAndMasked(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->mapper->method('update')->willReturnArgument(0);

		$saved = $this->service->save(['smtpHost' => 'smtp.example.com', 'smtpPassword' => 'secret']);

		$this->assertSame('enc:secret', $saved->getSmtpPassword());
		$json = $saved->jsonSerialize();
		$this->assertArrayNotHasKey('smtpPassword', $json);
		$this->assertTrue($json['smtpPasswordSet']);
	}

	public function testGetSmtpConfigDecryptsPassword(): void {
		$s = $this->existing();
		$s->setSmtpHost('smtp.example.com');
		$s->setSmtpPort(465);
		$s->setSmtpSecurity('ssl');
		$s->setSmtpUser('it@example.com');
		$s->setSmtpPassword('enc:secret');
		$this->mapper->method('findByOwner')->willReturn($s);

		$cfg = $this->service->getSmtpConfig();
		$this->assertNotNull($cfg);
		$this->assertSame('smtp.example.com', $cfg['host']);
		$this->assertSame(465, $cfg['port']);
		$this->assertSame('ssl', $cfg['security']);
		$this->assertSame('secret', $cfg['password']);
	}

	public function testGetSmtpConfigIsNullWithoutHost(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->assertNull($this->service->getSmtpConfig());
	}

	public function testSaveRejectsOutOfRangeSmtpPort(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['smtpPort' => 99999]);
	}

	public function testSaveRejectsYearlyModeWithoutYearComponent(): void {
		// Cross-field rule: yearly reset + a year-less format would repeat the
		// number every Jan 1 (unique-index violation). The counter placeholder is
		// present, so this must be caught by the mode<->format check, not the
		// existing placeholder check.
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['numberFormat' => '{####}']);
	}

	public function testSaveAllowsYearlessFormatWhenContinuous(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->mapper->method('update')->willReturnArgument(0);

		$saved = $this->service->save(['numberFormat' => '{######}', 'numberResetMode' => 'continuous']);

		$this->assertSame('continuous', $saved->getNumberResetMode());
		$this->assertSame('{######}', $saved->getNumberFormat());
	}

	public function testSaveRejectsUnknownResetMode(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['numberResetMode' => 'monthly']);
	}

	public function testSwitchingContinuousToYearlyAnchorsYearWithoutResettingCounter(): void {
		// Mid-year continuous -> yearly must NOT restart the series now; it anchors
		// the counter year to the current year (so the rest of the year keeps
		// running) and only the next Jan 1 resets.
		$s = $this->existing();
		$s->setNumberResetMode('continuous');
		$s->setNumberCounter(1234);
		$s->setNumberCounterYear(2019);
		$this->mapper->method('findByOwner')->willReturn($s);
		$this->mapper->method('update')->willReturnArgument(0);

		$saved = $this->service->save([
			'numberResetMode' => 'yearly',
			'numberFormat' => 'RE-{YYYY}-{####}',
		]);

		$currentYear = (int)(new \DateTime())->format('Y');
		$this->assertSame('yearly', $saved->getNumberResetMode());
		$this->assertSame(1234, $saved->getNumberCounter(), 'counter must not be reset on switch');
		$this->assertSame($currentYear, $saved->getNumberCounterYear(), 'counter year is anchored to the current year');
	}

	// --- Quote number circle (#111) --------------------------------------

	public function testSaveRejectsQuoteNumberFormatWithoutCounter(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['quoteNumberFormat' => 'AN-{YYYY}']);
	}

	public function testSaveRejectsYearlyQuoteModeWithoutYearComponent(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		// Yearly (the effective default) + a year-less quote format must be caught.
		$this->service->save(['quoteNumberFormat' => 'AN-{####}']);
	}

	public function testSaveRejectsUnknownQuoteResetMode(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save(['quoteNumberResetMode' => 'monthly']);
	}

	public function testSaveAcceptsCustomQuoteFormatIndependentlyOfInvoiceCircle(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->mapper->method('update')->willReturnArgument(0);

		$saved = $this->service->save([
			'quoteNumberFormat' => 'OFFER-{YY}-{#####}',
			'quoteNumberResetMode' => 'continuous',
		]);

		$this->assertSame('OFFER-{YY}-{#####}', $saved->getQuoteNumberFormat());
		$this->assertSame('continuous', $saved->getQuoteNumberResetMode());
		// The invoice circle must stay untouched by a quote-only change.
		$this->assertSame(Settings::DEFAULT_NUMBER_FORMAT, $saved->getNumberFormat());
	}

	public function testSwitchingQuoteCircleContinuousToYearlyAnchorsYear(): void {
		$s = $this->existing();
		$s->setQuoteNumberResetMode('continuous');
		$s->setQuoteNumberCounter(77);
		$s->setQuoteNumberCounterYear(2019);
		$this->mapper->method('findByOwner')->willReturn($s);
		$this->mapper->method('update')->willReturnArgument(0);

		$saved = $this->service->save([
			'quoteNumberResetMode' => 'yearly',
			'quoteNumberFormat' => 'AN-{YYYY}-{####}',
		]);

		$currentYear = (int)(new \DateTime())->format('Y');
		$this->assertSame('yearly', $saved->getQuoteNumberResetMode());
		$this->assertSame(77, $saved->getQuoteNumberCounter(), 'quote counter must not be reset on switch');
		$this->assertSame($currentYear, $saved->getQuoteNumberCounterYear(), 'quote counter year anchored to current year');
	}

	private function existing(): Settings {
		$settings = new Settings();
		$settings->setOwnerUserId('alice');
		$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		$settings->setNumberCounter(0);
		$settings->setNumberResetMode(Settings::DEFAULT_RESET_MODE);
		$settings->setSmallBusiness(0);
		$settings->setDefaultTaxRateBp(1900);
		return $settings;
	}
}
