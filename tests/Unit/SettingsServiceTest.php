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
		$this->service = new SettingsService($this->mapper, $db);
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
