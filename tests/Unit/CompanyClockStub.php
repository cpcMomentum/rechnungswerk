<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTimeImmutable;
use DateTimeZone;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Db\SettingsMapper;
use OCA\Rechnungswerk\Service\CompanyClock;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IConfig;

/** Real CompanyClock over a frozen instant, so tests choose the company zone and the moment. */
trait CompanyClockStub {

	private function companyClock(string $utcInstant = 'now', ?string $companyZone = null, string $systemZone = ''): CompanyClock {
		$settings = new Settings();
		$settings->setTimezone($companyZone);
		$mapper = $this->createMock(SettingsMapper::class);
		$mapper->method('findByOwner')->willReturn($settings);

		$config = $this->createMock(IConfig::class);
		$config->method('getSystemValueString')->willReturnCallback(
			static fn (string $key, string $default = '') => $key === 'default_timezone' ? $systemZone : $default,
		);

		$time = $this->createMock(ITimeFactory::class);
		$time->method('now')->willReturn(new DateTimeImmutable($utcInstant, new DateTimeZone('UTC')));

		return new CompanyClock($mapper, $config, $time);
	}
}
