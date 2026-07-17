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

	/**
	 * Documents of the company (shared pool) restricted to the given document
	 * types, newest first. owner_user_id stays on each row only as "created by";
	 * access is governed by PermissionService, not here.
	 *
	 * Quotes and invoices share this table but are listed separately (#111), so
	 * every listing query goes through here with an explicit type filter — a
	 * quote must never surface in the invoice list, nor an invoice in the quote list.
	 *
	 * @param non-empty-list<string> $types
	 * @return Invoice[]
	 */
	public function findByTypes(array $types): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->in('invoice_type', $qb->createNamedParameter($types, IQueryBuilder::PARAM_STR_ARRAY)))
			->orderBy('created_at', 'DESC')
			->addOrderBy('id', 'DESC');
		return $this->findEntities($qb);
	}

	/**
	 * All real invoices (invoice + cancellation) of the company, newest first.
	 * Excludes quotes (#111), which have their own list.
	 *
	 * @return Invoice[]
	 */
	public function findAll(): array {
		return $this->findByTypes(Invoice::INVOICE_TYPES);
	}

	/**
	 * All invoices (not quotes) referencing a given customer (newest first), for
	 * the customer view (#60).
	 *
	 * @return Invoice[]
	 */
	public function findByCustomerId(int $customerId): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('customer_id', $qb->createNamedParameter($customerId, IQueryBuilder::PARAM_INT)))
			->andWhere($qb->expr()->in('invoice_type', $qb->createNamedParameter(Invoice::INVOICE_TYPES, IQueryBuilder::PARAM_STR_ARRAY)))
			->orderBy('created_at', 'DESC')
			->addOrderBy('id', 'DESC');
		return $this->findEntities($qb);
	}

	/**
	 * Invoices handed to DATEV that are still awaiting a confirmation (#36).
	 *
	 * @return Invoice[]
	 */
	public function findPendingDatev(): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('datev_status', $qb->createNamedParameter(Invoice::DATEV_PENDING)));
		return $this->findEntities($qb);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findOne(int $id): Invoice {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)));
		return $this->findEntity($qb);
	}

	/**
	 * Like findOne() but locks the row (SELECT ... FOR UPDATE) so the caller's
	 * transaction holds it until commit. Serialises commit/cancel and prevents
	 * gaps/duplicates in the sequential number on concurrent calls.
	 *
	 * @throws DoesNotExistException
	 */
	public function findOneForUpdate(int $id): Invoice {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)))
			->forUpdate();
		return $this->findEntity($qb);
	}
}
