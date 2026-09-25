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

class GroupController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly IGroupManager $groupManager,
		private readonly PermissionService $permissionService
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function index(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(
				['error' => 'Not authenticated'],
				Http::STATUS_UNAUTHORIZED
			);
		}

		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(
				['error' => 'Forbidden'],
				Http::STATUS_FORBIDDEN
			);
		}

		$groups = [];

		foreach ($this->groupManager->search('') as $group) {
			$groupId = $group->getGID();

			$groups[] = [
				'id' => $groupId,
				'displayName' => $groupId,
			];
		}

		usort(
			$groups,
			static fn(array $a, array $b): int =>
				strcasecmp($a['displayName'], $b['displayName'])
		);

		return new DataResponse([
			'groups' => $groups,
		]);
	}
}