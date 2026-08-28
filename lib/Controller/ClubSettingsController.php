<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use InvalidArgumentException;
use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\ClubSettingsService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class ClubSettingsController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly ClubSettingsService $clubSettingsService,
		private readonly PermissionService $permissionService
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function show(): DataResponse {
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

		return new DataResponse(
			$this->clubSettingsService->get()
		);
	}

	#[NoAdminRequired]
	public function update(
		bool $clubMode,
		?string $memberGroup = null
	): DataResponse {
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

		try {
			return new DataResponse(
				$this->clubSettingsService->save(
					$clubMode,
					$memberGroup
				)
			);
		} catch (InvalidArgumentException $e) {
			return new DataResponse(
				['error' => $e->getMessage()],
				Http::STATUS_BAD_REQUEST
			);
		}
	}
}