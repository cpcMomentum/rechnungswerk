<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/** Magic setters/getters via Entity::__call for all protected fields. */
class ApiKey extends Entity implements JsonSerializable {
	protected ?string $ownerId = null;
	protected ?string $name = null;
	protected ?string $keyPrefix = null;
	protected ?string $keyHash = null;
	protected ?string $scopes = null;
	protected ?int $createdAt = null;
	protected ?int $lastUsedAt = null;
	protected ?int $revokedAt = null;
	protected ?int $rlWindowStart = null;
	protected ?int $rlHits = null;

	public function __construct() {
		$this->addType('ownerId', Types::STRING);
		$this->addType('name', Types::STRING);
		$this->addType('keyPrefix', Types::STRING);
		$this->addType('keyHash', Types::STRING);
		$this->addType('scopes', Types::TEXT);
		$this->addType('createdAt', Types::INTEGER);
		$this->addType('lastUsedAt', Types::INTEGER);
		$this->addType('revokedAt', Types::INTEGER);
		$this->addType('rlWindowStart', Types::INTEGER);
		$this->addType('rlHits', Types::INTEGER);
	}

	/** @return string[] */
	public function scopeList(): array {
		$decoded = json_decode($this->getScopes() ?? '', true);
		if (!is_array($decoded)) {
			return [];
		}
		return array_values(array_filter($decoded, 'is_string'));
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'ownerId' => $this->getOwnerId(),
			'name' => $this->getName(),
			'keyPrefix' => $this->getKeyPrefix(),
			'scopes' => $this->scopeList(),
			'createdAt' => $this->getCreatedAt(),
			'lastUsedAt' => $this->getLastUsedAt(),
			'revokedAt' => $this->getRevokedAt(),
		];
	}
}
