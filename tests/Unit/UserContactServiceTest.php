<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\UserContactService;
use OCP\IConfig;
use PHPUnit\Framework\TestCase;

class UserContactServiceTest extends TestCase {

	private IConfig $config;
	private UserContactService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->config = $this->createMock(IConfig::class);
		$this->service = new UserContactService($this->config);
	}

	public function testGetReturnsStoredUserValues(): void {
		$this->config->method('getUserValue')->willReturnMap([
			['alice', 'rechnungswerk', 'sellerContactPerson', '', 'Alice Seller'],
			['alice', 'rechnungswerk', 'sellerContactPhone', '', '+49 30 1'],
			['alice', 'rechnungswerk', 'sellerContactEmail', '', 'alice@example.com'],
		]);

		$this->assertSame([
			'person' => 'Alice Seller',
			'phone' => '+49 30 1',
			'email' => 'alice@example.com',
		], $this->service->get('alice'));
	}

	public function testSaveTrimsAndPersistsAllThreeValues(): void {
		$this->config->expects($this->exactly(3))->method('setUserValue');

		$saved = $this->service->save('alice', [
			'person' => '  Alice Seller  ',
			'phone' => ' +49 30 1 ',
			'email' => 'alice@example.com',
		]);

		$this->assertSame(['person' => 'Alice Seller', 'phone' => '+49 30 1', 'email' => 'alice@example.com'], $saved);
	}

	public function testSaveRejectsInvalidEmail(): void {
		$this->expectException(ValidationException::class);
		$this->service->save('alice', ['email' => 'not-an-email']);
	}

	public function testSaveRejectsOverlongName(): void {
		$this->expectException(ValidationException::class);
		$this->service->save('alice', ['person' => str_repeat('x', 256)]);
	}

	public function testSaveAllowsEmptyValues(): void {
		$this->config->expects($this->exactly(3))->method('setUserValue');
		$saved = $this->service->save('alice', []);
		$this->assertSame(['person' => '', 'phone' => '', 'email' => ''], $saved);
	}
}
