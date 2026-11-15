<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\ClubSettingsService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\ProfileFieldsService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class ClubStatusController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly ClubSettingsService $clubSettingsService,
		private readonly PermissionService $permissionService,
		private readonly ProfileFieldsService $profileFieldsService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function show(bool $includeMembershipTypes = false): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(
				['error' => 'Not authenticated'],
				Http::STATUS_UNAUTHORIZED
			);
		}

		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(
				['error' => 'Forbidden'],
				Http::STATUS_FORBIDDEN
			);
		}

		$settings = $this->clubSettingsService->get();

		$data = [
			'clubMode' => $settings['clubMode'],
			'memberGroup' => $settings['memberGroup'],
		];
		if ($includeMembershipTypes && $settings['clubMode']) {
			try {
				$data['membershipTypes'] = $this->profileFieldsService->getMembershipTypes();
			} catch (\RuntimeException | \JsonException $e) {
				$data['membershipTypesError'] = $e->getMessage();
			}
		}

		return new DataResponse($data);
	}
}
