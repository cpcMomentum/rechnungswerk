<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<Settings>
 */
class SettingsMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'rechnungswerk_settings', Settings::class);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findByOwner(string $userId): Settings {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('owner_user_id', $qb->createNamedParameter($userId)));
		return $this->findEntity($qb);
	}
}
