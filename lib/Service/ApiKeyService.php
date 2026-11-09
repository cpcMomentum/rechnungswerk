<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\ApiKey;
use OCA\Rechnungswerk\Db\ApiKeyMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IL10N;

/** Der Klartext exists only in create()'s return value; the database stores only the SHA-256 hash. */
class ApiKeyService {

	public const SCOPES = [
		'invoices:create', 'invoices:commit', 'invoices:send', 'invoices:pay',
		'invoices:cancel', 'invoices:read', 'invoices:pdf',
	];

	public const RATE_LIMIT_DEFAULT = 60;
	public const RATE_LIMIT_MAX = 10000;
	public const RATE_WINDOW = 60;

	public const ERR_API_KEY_INVALID = 'API_KEY_INVALID';
	public const ERR_KEY_GATE_CLOSED = 'KEY_GATE_CLOSED';
	public const ERR_RATE_LIMITED = 'RATE_LIMITED';
	public const ERR_API_KEY_FORBIDDEN = 'API_KEY_FORBIDDEN';

	public function __construct(
		private readonly ApiKeyMapper $mapper,
		private readonly EntitlementService $entitlementService,
		private readonly PermissionService $permissionService,
		private readonly ITimeFactory $timeFactory,
		private readonly IL10N $l10n,
	) {
	}

	/** @param string[] $scopes @return array{key: ApiKey, plaintext: string} @throws ValidationException */
	public function create(string $ownerId, string $name, array $scopes, ?int $rateLimit = null): array {
		$name = trim($name);
		if ($name === '' || mb_strlen($name) > 64) {
			throw new ValidationException($this->l10n->t('Bitte einen Namen mit höchstens 64 Zeichen angeben.'));
		}
		$scopes = array_values(array_unique(array_values(array_intersect($scopes, self::SCOPES))));
		if ($scopes === []) {
			throw new ValidationException($this->l10n->t('Bitte mindestens einen Rechtebereich auswählen.'));
		}
		if ($ownerId === '') {
			throw new ValidationException($this->l10n->t('Ungültiger Mandant.'));
		}
		if ($rateLimit === null) {
			$rateLimit = self::RATE_LIMIT_DEFAULT;
		} elseif ($rateLimit < 1 || $rateLimit > self::RATE_LIMIT_MAX) {
			throw new ValidationException($this->l10n->t('Anfragen pro Minute muss zwischen 1 und %d liegen.', [self::RATE_LIMIT_MAX]));
		}

		$plaintext = 'rwrk_' . rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
		$now = $this->timeFactory->getTime();

		$key = new ApiKey();
		$key->setOwnerId($ownerId);
		$key->setName($name);
		$key->setKeyPrefix(substr($plaintext, 0, 12));
		$key->setKeyHash(hash('sha256', $plaintext));
		$key->setScopes(json_encode($scopes));
		$key->setCreatedAt($now);
		$key->setRateLimit($rateLimit);
		$key->setRlHits(0);
		$this->mapper->insert($key);

		return ['key' => $key, 'plaintext' => $plaintext];
	}

	/** Checks a bearer token and books a rate-limit hit on success; @return array{key: ?ApiKey, error: ?string, retryAfter: int} */
	public function authenticate(string $token): array {
		$fail = static fn (string $error): array => ['key' => null, 'error' => $error, 'retryAfter' => 0];

		if (!preg_match('/^rwrk_[A-Za-z0-9_-]{43}$/', $token)) {
			return $fail(self::ERR_API_KEY_INVALID);
		}

		$matches = $this->mapper->findByPrefix(substr($token, 0, 12));
		$key = null;
		foreach ($matches as $candidate) {
			if (hash_equals($candidate->getKeyHash(), hash('sha256', $token))) {
				$key = $candidate;
				break;
			}
		}
		if ($key === null || $key->getRevokedAt() !== null) {
			return $fail(self::ERR_API_KEY_INVALID);
		}

		if (!$this->entitlementService->hasFeature('api_keys')) {
			return $fail(self::ERR_KEY_GATE_CLOSED);
		}

		$now = $this->timeFactory->getTime();
		$rateLimit = $key->getRateLimit() ?? self::RATE_LIMIT_DEFAULT;
		if ($key->getRlWindowStart() === null || $key->getRlWindowStart() <= $now - self::RATE_WINDOW) {
			$key->setRlWindowStart($now);
			$key->setRlHits(0);
		}
		if ($key->getRlHits() >= $rateLimit) {
			$retryAfter = $key->getRlWindowStart() + self::RATE_WINDOW - $now;
			$this->mapper->update($key);
			return ['key' => null, 'error' => self::ERR_RATE_LIMITED, 'retryAfter' => max(1, $retryAfter)];
		}
		$key->setRlHits($key->getRlHits() + 1);
		$key->setLastUsedAt($now);
		$this->mapper->update($key);

		if (!$this->permissionService->hasAccess($key->getOwnerId())) {
			return $fail(self::ERR_API_KEY_FORBIDDEN);
		}
		return ['key' => $key, 'error' => null, 'retryAfter' => 0];
	}

	/** @return ApiKey[] */
	public function list(string $requesterId, bool $requesterIsAdmin): array {
		return $requesterIsAdmin ? $this->mapper->findAll() : $this->mapper->findByOwner($requesterId);
	}

	public function revoke(int $id, string $requesterId, bool $requesterIsAdmin): bool {
		$key = $this->mapper->find($id);
		if ($key === null || $key->getRevokedAt() !== null) {
			return false;
		}
		if (!$requesterIsAdmin && $key->getOwnerId() !== $requesterId) {
			return false;
		}
		$key->setRevokedAt($this->timeFactory->getTime());
		$this->mapper->update($key);
		return true;
	}
}
