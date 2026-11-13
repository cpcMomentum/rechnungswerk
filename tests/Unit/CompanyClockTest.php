<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTimeZone;
use OCA\Rechnungswerk\Db\SettingsMapper;
use OCA\Rechnungswerk\Service\CompanyClock;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IConfig;
use PHPUnit\Framework\TestCase;

class CompanyClockTest extends TestCase {

	use CompanyClockStub;

	public function testCompanyFieldWinsOverTheInstanceZone(): void {
		$clock = $this->companyClock('now', 'America/New_York', 'Europe/Vienna');
		$this->assertSame('America/New_York', $clock->timeZone()->getName());
	}

	public function testInstanceZoneAppliesWhenTheCompanyFieldIsEmpty(): void {
		$clock = $this->companyClock('now', null, 'Europe/Vienna');
		$this->assertSame('Europe/Vienna', $clock->timeZone()->getName());
	}

	public function testUtcFromTheInstanceCountsAsUnset(): void {
		$clock = $this->companyClock('now', '', 'UTC');
		$this->assertSame(CompanyClock::FALLBACK, $clock->timeZone()->getName());
	}

	public function testWithoutAnySettingBerlinApplies(): void {
		$this->assertSame('Europe/Berlin', $this->companyClock()->timeZone()->getName());
	}

	public function testAnUnknownCompanyValueFallsThroughToTheInstanceZone(): void {
		$clock = $this->companyClock('now', 'Mars/Olympus', 'Europe/Vienna');
		$this->assertSame('Europe/Vienna', $clock->timeZone()->getName());
	}

	public function testHalfPastMidnightOnNewYearIsAlreadyTheNewYearInBerlin(): void {
		$today = $this->companyClock('2026-12-31 23:30:00')->today();
		$this->assertSame('2027-01-01 00:00:00 UTC', $today->format('Y-m-d H:i:s e'));
	}

	public function testSummerTimeShiftsTheDayAtTwentyTwoUtc(): void {
		$this->assertSame('2026-07-15', $this->companyClock('2026-07-14 22:30:00')->today()->format('Y-m-d'));
		$this->assertSame('2026-07-14', $this->companyClock('2026-07-14 21:30:00')->today()->format('Y-m-d'));
	}

	public function testAZoneWestOfUtcStaysOnTheOldDay(): void {
		$clock = $this->companyClock('2027-01-01 03:00:00', 'America/New_York');
		$this->assertSame('2026-12-31', $clock->today()->format('Y-m-d'));
		$this->assertSame(2026, $clock->currentYear());
	}

	public function testWithoutACompanyRowTheInstanceZoneApplies(): void {
		$mapper = $this->createMock(SettingsMapper::class);
		$mapper->method('findByOwner')->willThrowException(new DoesNotExistException('none'));
		$config = $this->createMock(IConfig::class);
		$config->method('getSystemValueString')->willReturn('Europe/Vienna');

		$clock = new CompanyClock($mapper, $config, $this->createMock(ITimeFactory::class));

		$this->assertSame('Europe/Vienna', $clock->timeZone()->getName());
	}

	public function testEveryNameOfferedToThePickerIsAccepted(): void {
		$names = CompanyClock::zoneNames();
		$this->assertContains('Europe/Berlin', $names);
		$this->assertContains('UTC', $names);
		foreach ($names as $name) {
			$this->assertTrue(CompanyClock::isValid($name), $name);
		}
	}

	public function testAliasesThisServerKnowsAreAcceptedButNotOffered(): void {
		$aliases = array_diff(DateTimeZone::listIdentifiers(DateTimeZone::ALL_WITH_BC), DateTimeZone::listIdentifiers());
		if ($aliases === []) {
			$this->markTestSkipped('This PHP build ships no legacy zone names.');
		}
		$alias = reset($aliases);

		$this->assertTrue(CompanyClock::isValid($alias));
		$this->assertNotContains($alias, CompanyClock::zoneNames());
		$this->assertSame($alias, $this->companyClock('now', null, $alias)->timeZone()->getName());
	}

	public function testIsValidAcceptsOnlyKnownIdentifiers(): void {
		$this->assertTrue(CompanyClock::isValid('Europe/Berlin'));
		$this->assertFalse(CompanyClock::isValid('Mars/Olympus'));
		$this->assertFalse(CompanyClock::isValid(''));
		$this->assertFalse(CompanyClock::isValid('+02:00'));
	}
}
