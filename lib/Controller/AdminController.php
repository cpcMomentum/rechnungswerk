<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IGroupManager;
use OCP\IRequest;
use OCP\IUserManager;

/**
 * App-admin endpoints: the current user's permission info (open to every
 * logged-in user so the frontend can gate itself) plus the access-list
 * management and principal search (app-admin only).
 */
class AdminController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly PermissionService $permissionService,
		private readonly IUserManager $userManager,
		private readonly IGroupManager $groupManager,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/** Current user's permissions — any logged-in user, so the UI can gate. */
	#[NoAdminRequired]
	public function permissionInfo(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		return new DataResponse($this->permissionService->getPermissionInfo($this->userId));
	}

	#[NoAdminRequired]
	public function getPermissions(): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		return new DataResponse([
			'admins' => $this->permissionService->getAdmins(),
			'users' => $this->permissionService->getUsers(),
		]);
	}

	/**
	 * @param string[]|null $admins
	 * @param string[]|null $users
	 */
	#[NoAdminRequired]
	public function updatePermissions(?array $admins = null, ?array $users = null): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		if ($admins !== null) {
			$this->permissionService->setAdmins($admins);
		}
		if ($users !== null) {
			$this->permissionService->setUsers($users);
		}
		return new DataResponse([
			'admins' => $this->permissionService->getAdmins(),
			'users' => $this->permissionService->getUsers(),
		]);
	}

	/** Search users + groups for the access-list pickers (app-admin only). */
	#[NoAdminRequired]
	public function searchPrincipals(string $query = ''): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		$limit = 25;
		$results = [];
		foreach ($this->groupManager->search($query, $limit) as $group) {
			$results[] = [
				'id' => 'group:' . $group->getGID(),
				'type' => 'group',
				'displayName' => $group->getDisplayName(),
			];
		}
		foreach ($this->userManager->search($query, $limit) as $user) {
			$results[] = [
				'id' => 'user:' . $user->getUID(),
				'type' => 'user',
				'displayName' => $user->getDisplayName() ?: $user->getUID(),
			];
		}
		return new DataResponse($results);
	}

	private function requireAdmin(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}
}
