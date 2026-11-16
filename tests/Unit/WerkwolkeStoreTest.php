<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Service\WerkwolkeStore;
use OCP\IAppConfig;
use PHPUnit\Framework\TestCase;

class WerkwolkeStoreTest extends TestCase {

	/** @var array<string, string> */
	private array $config = [];

	private function store(): WerkwolkeStore {
		$appConfig = $this->createMock(IAppConfig::class);
		$appConfig->method('getValueString')->willReturnCallback(
			fn (string $app, string $key, string $default = '') => $this->config["$app/$key"] ?? $default
		);
		$appConfig->method('setValueString')->willReturnCallback(function (string $app, string $key, string $value): bool {
			$this->config["$app/$key"] = $value;
			return true;
		});
		$appConfig->method('deleteKey')->willReturnCallback(function (string $app, string $key): void {
			unset($this->config["$app/$key"]);
		});
		return new WerkwolkeStore($appConfig);
	}

	public function testAdoptingAKeyNeverOverwritesOneAnotherAppJustStored(): void {
		$this->config['werkwolke/key'] = 'wp_VONPROJEKTWERK';

		$this->assertFalse($this->store()->adoptKeyIfEmpty('wp_ALT'));
		$this->assertSame('wp_VONPROJEKTWERK', $this->config['werkwolke/key']);
	}

	public function testAdoptingAKeyIntoAnEmptyStoreWritesKeyAndVersion(): void {
		$this->assertTrue($this->store()->adoptKeyIfEmpty('wp_ALT'));
		$this->assertSame(['werkwolke/store_version' => '1', 'werkwolke/key' => 'wp_ALT'], $this->config);
	}

	public function testANewerFormatIsNeitherReadNorWritten(): void {
		$this->config = ['werkwolke/store_version' => '2', 'werkwolke/key' => 'wp_NEU', 'werkwolke/token' => 't'];
		$before = $this->config;
		$store = $this->store();

		$this->assertTrue($store->isTooNew());
		$this->assertSame('', $store->getKey());
		$this->assertSame('', $store->getToken());
		$store->setKeyAndToken('wp_X', 't2');
		$store->setKeyOnly('wp_X');
		$store->clear();
		$store->deleteTokenOfKey('wp_NEU');
		$this->assertFalse($store->adoptKeyIfEmpty('wp_X'));
		$this->assertFalse($store->replaceTokenIfNewer('wp_NEU', 't3', 99, fn () => 1));
		$this->assertSame($before, $this->config);
	}

	public function testClearKeepsTheFormatVersion(): void {
		$this->config = ['werkwolke/store_version' => '1', 'werkwolke/key' => 'wp_A', 'werkwolke/token' => 't'];
		$this->store()->clear();

		$this->assertSame(['werkwolke/store_version' => '1'], $this->config);
	}
}
