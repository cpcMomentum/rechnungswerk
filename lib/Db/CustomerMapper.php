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
 * @template-extends QBMapper<Customer>
 */
class CustomerMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'rechnungswerk_customer', Customer::class);
	}

	/**
	 * The shared company customer base. owner_user_id stays as "created by".
	 *
	 * @return Customer[]
	 */
	public function findAll(): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->orderBy('name', 'ASC');
		return $this->findEntities($qb);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findOne(int $id): Customer {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)));
		return $this->findEntity($qb);
	}

	/**
	 * Lookup by company-wide customer number for the duplicate guard.
	 *
	 * @throws DoesNotExistException
	 */
	public function findByNumber(string $customerNumber): Customer {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('customer_number', $qb->createNamedParameter($customerNumber, IQueryBuilder::PARAM_STR)));
		return $this->findEntity($qb);
	}
}
