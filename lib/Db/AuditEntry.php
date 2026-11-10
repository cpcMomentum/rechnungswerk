<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/** Magic setters/getters via Entity::__call for all protected fields. */
class AuditEntry extends Entity {
	public const CREATE = 'create';
	public const UPDATE = 'update';
	public const DELETE = 'delete';
	public const COMMIT = 'commit';
	public const SEND = 'send';
	public const PAY = 'pay';
	public const UNPAY = 'unpay';
	public const CANCEL = 'cancel';
	public const CANCEL_DOCUMENT = 'cancel_document';
	public const DUPLICATE = 'duplicate';
	public const REVISE = 'revise';
	public const ACCEPT = 'accept';
	public const REJECT = 'reject';
	public const CONVERT = 'convert';
	public const CONVERT_DOCUMENT = 'convert_document';
	public const SUPERSEDE = 'supersede';

	protected ?int $createdAt = null;
	protected ?string $userId = null;
	protected ?int $apiKeyId = null;
	protected ?string $action = null;
	protected ?int $documentId = null;
	protected ?string $documentType = null;
	protected ?string $documentNumber = null;

	public function __construct() {
		$this->addType('createdAt', Types::INTEGER);
		$this->addType('userId', Types::STRING);
		$this->addType('apiKeyId', Types::INTEGER);
		$this->addType('action', Types::STRING);
		$this->addType('documentId', Types::INTEGER);
		$this->addType('documentType', Types::STRING);
		$this->addType('documentNumber', Types::STRING);
	}
}
