<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Service\PermissionService;
use OCP\IConfig;
use OCP\IGroupManager;
use PHPUnit\Framework\TestCase;

class PermissionServiceTest extends TestCase {

	private function service(array $appConfig, array $ncAdmins = [], array $groupMembers = []): PermissionService {
		$config = $this->createMock(IConfig::class);
		$config->method('getAppValue')->willReturnCallback(
			static fn (string $app, string $key, string $default = ''): string => $appConfig[$key] ?? $default,
		);
		$groupManager = $this->createMock(IGroupManager::class);
		$groupManager->method('isAdmin')->willReturnCallback(
			static fn (string $uid): bool => in_array($uid, $ncAdmins, true),
		);
		$groupManager->method('isInGroup')->willReturnCallback(
			static fn (string $uid, string $gid): bool => in_array($uid, $groupMembers[$gid] ?? [], true),
		);
		return new PermissionService($config, $groupManager);
	}

	public function testNextcloudAdminIsAlwaysAdminAndHasAccess(): void {
		$svc = $this->service([], ncAdmins: ['root']);
		$this->assertTrue($svc->isAdmin('root'));
		$this->assertTrue($svc->hasAccess('root'));
		$this->assertTrue($svc->canEdit('root'));
	}

	public function testNamedAppAdminIsAdmin(): void {
		$svc = $this->service([PermissionService::KEY_ADMINS => json_encode(['user:alice'])]);
		$this->assertTrue($svc->isAdmin('alice'));
		$this->assertTrue($svc->hasAccess('alice'));
		$this->assertFalse($svc->isAdmin('bob'));
	}

	public function testUserOnAccessListHasAccessButIsNotAdmin(): void {
		$svc = $this->service([PermissionService::KEY_USERS => json_encode(['user:bob'])]);
		$this->assertTrue($svc->hasAccess('bob'));
		$this->assertTrue($svc->canEdit('bob'));
		$this->assertFalse($svc->isAdmin('bob'));
	}

	public function testGroupMembershipGrantsAccess(): void {
		$svc = $this->service(
			[PermissionService::KEY_USERS => json_encode(['group:buchhaltung'])],
			groupMembers: ['buchhaltung' => ['carol']],
		);
		$this->assertTrue($svc->hasAccess('carol'));
		$this->assertFalse($svc->hasAccess('dave'));
	}

	public function testUnknownUserHasNoAccess(): void {
		$svc = $this->service([
			PermissionService::KEY_USERS => json_encode(['user:bob']),
			PermissionService::KEY_ADMINS => json_encode(['user:alice']),
		]);
		$this->assertFalse($svc->hasAccess('eve'));
		$this->assertFalse($svc->isAdmin('eve'));
		$this->assertFalse($svc->canEdit('eve'));
	}

	public function testSetListKeepsOnlyValidPrefixedEntries(): void {
		$config = $this->createMock(IConfig::class);
		$captured = null;
		$config->method('setAppValue')->willReturnCallback(
			function (string $app, string $key, string $value) use (&$captured): void {
				$captured = $value;
			},
		);
		$svc = new PermissionService($config, $this->createMock(IGroupManager::class));
		$svc->setUsers(['user:bob', 'group:team', 'garbage', 123]);
		$this->assertSame(['user:bob', 'group:team'], json_decode((string)$captured, true));
	}
}
