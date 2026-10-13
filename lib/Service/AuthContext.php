<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\ApiKey;
use OCP\IRequest;

/** Session user or bearer key — rejection() carries the precise bearer failure, lazy and per-request cached. */
class AuthContext {

	private bool $resolved = false;
	private bool $machine = false;
	private ?string $userId = null;
	private ?ApiKey $key = null;
	/** @var ?array{status: int, error: string, message: string, retryAfter: int} */
	private ?array $rejection = null;

	private const MESSAGES = [
		ApiKeyService::ERR_API_KEY_INVALID => ['status' => 401, 'message' => 'Invalid API key'],
		ApiKeyService::ERR_KEY_GATE_CLOSED => ['status' => 403, 'message' => 'API keys require an active WerkPlus license.'],
		ApiKeyService::ERR_RATE_LIMITED => ['status' => 429, 'message' => 'Rate limit exceeded.'],
		ApiKeyService::ERR_API_KEY_FORBIDDEN => ['status' => 403, 'message' => 'The API key owner may not use this app.'],
	];

	public function __construct(
		private readonly IRequest $request,
		private readonly ApiKeyService $apiKeyService,
		private readonly ?string $sessionUserId,
	) {
	}

	public function isMachine(): bool {
		$this->resolve();
		return $this->machine;
	}

	public function getUserId(): ?string {
		$this->resolve();
		return $this->userId;
	}

	public function hasScope(string $scope): bool {
		$this->resolve();
		if (!$this->machine || $this->key === null) {
			return false;
		}
		return in_array($scope, $this->key->scopeList(), true);
	}

	/** @return ?array{status: int, error: string, message: string, retryAfter: int} */
	public function rejection(): ?array {
		$this->resolve();
		return $this->rejection;
	}

	private function resolve(): void {
		if ($this->resolved) {
			return;
		}
		$this->resolved = true;

		if ($this->sessionUserId !== null) {
			return;
		}

		$auth = $this->request->getHeader('Authorization');
		if (!preg_match('/^Bearer (\S+)$/i', $auth, $match)) {
			return;
		}
		$this->machine = true;
		$result = $this->apiKeyService->authenticate($match[1]);
		if ($result['error'] !== null) {
			$known = self::MESSAGES[$result['error']];
			$this->rejection = [
				'status' => $known['status'],
				'error' => $result['error'],
				'message' => $known['message'],
				'retryAfter' => $result['retryAfter'],
			];
			return;
		}
		$this->key = $result['key'];
		$this->userId = $result['key']->getOwnerId();
	}
}
