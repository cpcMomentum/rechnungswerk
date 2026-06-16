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
use PHPUnit\Framework\TestCase;

class SettingsServiceTest extends TestCase {

	private SettingsMapper $mapper;
	private SettingsService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->mapper = $this->createMock(SettingsMapper::class);
		$this->service = new SettingsService($this->mapper);
	}

	public function testGetOrCreateInsertsDefaultsOnFirstAccess(): void {
		$this->mapper->method('findByOwner')->willThrowException(new DoesNotExistException('none'));
		$this->mapper->method('insert')->willReturnArgument(0);

		$settings = $this->service->getOrCreate('alice');

		$this->assertSame('alice', $settings->getOwnerUserId());
		$this->assertSame(Settings::DEFAULT_NUMBER_FORMAT, $settings->getNumberFormat());
		$this->assertSame(0, $settings->getNumberCounter());
		$this->assertSame(0, $settings->getSmallBusiness());
		$this->assertSame(1900, $settings->getDefaultTaxRateBp());
	}

	public function testSaveRejectsNumberFormatWithoutCounter(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save('alice', ['numberFormat' => 'RE-{YYYY}']);
	}

	public function testSaveRejectsInvalidEmail(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save('alice', ['datevUploadMail' => 'not-an-email']);
	}

	public function testSaveRejectsInvalidAccentColor(): void {
		$this->mapper->method('findByOwner')->willReturn($this->existing());
		$this->expectException(ValidationException::class);
		$this->service->save('alice', ['accentColor' => 'blau']);
	}

	public function testReserveNextNumberIncrementsWithinSameYear(): void {
		$settings = $this->existing();
		$settings->setNumberCounter(5);
		$settings->setNumberCounterYear(2026);
		$this->mapper->method('findByOwner')->willReturn($settings);
		$this->mapper->method('update')->willReturnArgument(0);

		$number = $this->service->reserveNextNumber('alice', 2026);

		$this->assertSame('RE-2026-0006', $number);
		$this->assertSame(6, $settings->getNumberCounter());
	}

	public function testReserveNextNumberResetsOnYearChange(): void {
		$settings = $this->existing();
		$settings->setNumberCounter(42);
		$settings->setNumberCounterYear(2025);
		$this->mapper->method('findByOwner')->willReturn($settings);
		$this->mapper->method('update')->willReturnArgument(0);

		$number = $this->service->reserveNextNumber('alice', 2026);

		$this->assertSame('RE-2026-0001', $number);
		$this->assertSame(1, $settings->getNumberCounter());
		$this->assertSame(2026, $settings->getNumberCounterYear());
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
