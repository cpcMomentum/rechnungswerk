<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<Invoice>
 */
class InvoiceMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'rechnungswerk_invoice', Invoice::class);
	}

	/** @return Invoice[] */
	public function findByOwner(string $userId): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('owner_user_id', $qb->createNamedParameter($userId)))
			->orderBy('created_at', 'DESC')
			->addOrderBy('id', 'DESC');
		return $this->findEntities($qb);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findOneByOwner(int $id, string $userId): Invoice {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->eq('owner_user_id', $qb->createNamedParameter($userId)));
		return $this->findEntity($qb);
	}
}
