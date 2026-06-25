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

	private function existing(): Settings {
		$settings = new Settings();
		$settings->setOwnerUserId('alice');
		$settings->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		$settings->setNumberCounter(0);
		$settings->setSmallBusiness(0);
		$settings->setDefaultTaxRateBp(1900);
		return $settings;
	}
}
