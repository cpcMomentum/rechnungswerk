<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ApiKeyService;
use OCA\Rechnungswerk\Service\AuthContext;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

/** Mandanten pflegen ihre eigenen API-Schluessel, App-Admins zusaetzlich alle — nur Session, kein Maschinenzugang. */
class ApiKeyController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly AuthContext $authContext,
		private readonly ApiKeyService $apiKeyService,
		private readonly EntitlementService $entitlementService,
		private readonly PermissionService $permissionService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function index(): DataResponse {
		if (($r = $this->guard()) !== null) {
			return $r;
		}
		$isAdmin = $this->permissionService->isAdmin($this->authContext->getUserId());
		$keys = $this->apiKeyService->list($this->authContext->getUserId(), $isAdmin);
		return new DataResponse(array_map(static fn ($k) => $k->jsonSerialize(), $keys));
	}

	#[NoAdminRequired]
	public function create(array $data = []): DataResponse {
		if (($r = $this->guard()) !== null) {
			return $r;
		}
		if (!$this->entitlementService->hasFeature('api_keys')) {
			return new DataResponse(['error' => 'API-Schluessel erfordern eine aktive WerkPlus-Lizenz.'], Http::STATUS_FORBIDDEN);
		}
		try {
			$scopes = array_key_exists('scopes', $data) && is_array($data['scopes']) ? $data['scopes'] : [];
			$result = $this->apiKeyService->create($this->authContext->getUserId(), (string)($data['name'] ?? ''), $scopes);
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
		return new DataResponse([
			...$result['key']->jsonSerialize(),
			'plaintext' => $result['plaintext'],
		], Http::STATUS_CREATED);
	}

	#[NoAdminRequired]
	public function destroy(int $id): DataResponse {
		if (($r = $this->guard()) !== null) {
			return $r;
		}
		$isAdmin = $this->permissionService->isAdmin($this->authContext->getUserId());
		if (!$this->apiKeyService->revoke($id, $this->authContext->getUserId(), $isAdmin)) {
			return new DataResponse(['error' => 'Schlüssel nicht gefunden.'], Http::STATUS_NOT_FOUND);
		}
		return new DataResponse(null, Http::STATUS_NO_CONTENT);
	}

	private function guard(): ?DataResponse {
		if ($this->authContext->rejection() !== null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		$userId = $this->authContext->getUserId();
		if ($userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if ($this->authContext->isMachine() || !$this->permissionService->hasAccess($userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}
}
