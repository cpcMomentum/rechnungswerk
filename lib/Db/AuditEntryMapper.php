<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Append-only: no update or delete helpers on purpose.
 *
 * @template-extends QBMapper<AuditEntry>
 */
class AuditEntryMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'rechnungswerk_audit', AuditEntry::class);
	}

	/** @return AuditEntry[] newest first */
	public function findByDocument(int $documentId): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('document_id', $qb->createNamedParameter($documentId, IQueryBuilder::PARAM_INT)))
			->orderBy('created_at', 'DESC')
			->addOrderBy('id', 'DESC');
		return $this->findEntities($qb);
	}

	/** @return AuditEntry[] newest first */
	public function findPage(?string $number, int $limit, int $offset): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName);
		if ($number !== null && $number !== '') {
			$qb->where($qb->expr()->iLike('document_number', $qb->createNamedParameter('%' . $this->db->escapeLikeParameter($number) . '%')));
		}
		$qb->orderBy('created_at', 'DESC')
			->addOrderBy('id', 'DESC')
			->setMaxResults($limit)
			->setFirstResult($offset);
		return $this->findEntities($qb);
	}

	/**
	 * @param int[] $ids
	 * @return array<int, true> the ids that still exist in the invoice table
	 */
	public function existingDocumentIds(array $ids): array {
		if ($ids === []) {
			return [];
		}
		$qb = $this->db->getQueryBuilder();
		$qb->select('id')->from('rechnungswerk_invoice')
			->where($qb->expr()->in('id', $qb->createNamedParameter(array_values(array_unique($ids)), IQueryBuilder::PARAM_INT_ARRAY)));
		$result = $qb->executeQuery();
		$existing = [];
		while (($row = $result->fetch()) !== false) {
			$existing[(int)$row['id']] = true;
		}
		$result->closeCursor();
		return $existing;
	}
}
