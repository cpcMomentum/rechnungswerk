<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\AppInfo\Application;
use OCP\IConfig;
use OCP\IGroupManager;

/**
 * Access control for Rechnungswerk (pattern adapted from contractmanager).
 *
 * Two app-config lists, each a JSON array of "user:<uid>" / "group:<gid>" entries:
 * - admins: additional app administrators besides the Nextcloud server admins.
 *   App admins configure the central company settings, DATEV, SMTP and the
 *   access lists themselves.
 * - users: who may use the app at all (see/create the shared company invoices).
 *
 * A Nextcloud server admin is ALWAYS an app admin (bootstrapping — whoever
 * installs the app can hand out access). Enforcement happens per controller
 * method (403), there is no middleware.
 */
class PermissionService {

	public const KEY_ADMINS = 'app_admins';
	public const KEY_USERS = 'app_users';

	public function __construct(
		private readonly IConfig $config,
		private readonly IGroupManager $groupManager,
	) {
	}

	/** A Nextcloud server admin is always an app admin. */
	public function isNextcloudAdmin(string $userId): bool {
		return $this->groupManager->isAdmin($userId);
	}

	/** App admin = NC server admin OR listed in the app-admins config. */
	public function isAdmin(string $userId): bool {
		return $this->isNextcloudAdmin($userId) || $this->matches($userId, self::KEY_ADMINS);
	}

	/** May use the app at all: admins plus everyone on the users list. */
	public function hasAccess(string $userId): bool {
		return $this->isAdmin($userId) || $this->matches($userId, self::KEY_USERS);
	}

	/**
	 * May create/edit invoices. v1: every user with access may edit (no
	 * separate read-only role yet — deferred).
	 */
	public function canEdit(string $userId): bool {
		return $this->hasAccess($userId);
	}

	/** @return array{isAdmin: bool, hasAccess: bool, canEdit: bool} */
	public function getPermissionInfo(string $userId): array {
		$isAdmin = $this->isAdmin($userId);
		$hasAccess = $isAdmin || $this->matches($userId, self::KEY_USERS);
		return [
			'isAdmin' => $isAdmin,
			'hasAccess' => $hasAccess,
			'canEdit' => $hasAccess,
		];
	}

	/** @return string[] "user:<uid>"/"group:<gid>" entries */
	public function getAdmins(): array {
		return $this->getList(self::KEY_ADMINS);
	}

	/** @param string[] $entries */
	public function setAdmins(array $entries): void {
		$this->setList(self::KEY_ADMINS, $entries);
	}

	/** @return string[] "user:<uid>"/"group:<gid>" entries */
	public function getUsers(): array {
		return $this->getList(self::KEY_USERS);
	}

	/** @param string[] $entries */
	public function setUsers(array $entries): void {
		$this->setList(self::KEY_USERS, $entries);
	}

	// --- internals -------------------------------------------------------

	/** @return string[] */
	private function getList(string $key): array {
		$decoded = json_decode($this->config->getAppValue(Application::APP_ID, $key, '[]'), true);
		if (!is_array($decoded)) {
			return [];
		}
		return array_values(array_filter($decoded, 'is_string'));
	}

	/** @param string[] $entries */
	private function setList(string $key, array $entries): void {
		$clean = array_values(array_filter($entries, static fn ($e): bool => is_string($e)
			&& (str_starts_with($e, 'user:') || str_starts_with($e, 'group:'))));
		$this->config->setAppValue(Application::APP_ID, $key, json_encode($clean));
	}

	private function matches(string $userId, string $key): bool {
		foreach ($this->getList($key) as $entry) {
			if (str_starts_with($entry, 'user:')) {
				if (substr($entry, 5) === $userId) {
					return true;
				}
			} elseif (str_starts_with($entry, 'group:')) {
				if ($this->groupManager->isInGroup($userId, substr($entry, 6))) {
					return true;
				}
			}
		}
		return false;
	}
}
