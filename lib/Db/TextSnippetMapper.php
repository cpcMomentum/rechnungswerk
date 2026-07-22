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
 * @template-extends QBMapper<TextSnippet>
 */
class TextSnippetMapper extends QBMapper {
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'rechnungswerk_text_snippet', TextSnippet::class);
	}

	/**
	 * The shared company text-snippet catalog. owner_user_id stays as "created by".
	 *
	 * @return TextSnippet[]
	 */
	public function findAll(): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->orderBy('doc_type', 'ASC')
			->addOrderBy('slot', 'ASC')
			->addOrderBy('sort_order', 'ASC')
			->addOrderBy('label', 'ASC');
		return $this->findEntities($qb);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findOne(int $id): TextSnippet {
		$qb = $this->db->getQueryBuilder();
		$qb->select('*')->from($this->tableName)
			->where($qb->expr()->eq('id', $qb->createNamedParameter($id, IQueryBuilder::PARAM_INT)));
		return $this->findEntity($qb);
	}

	/**
	 * Clear the default flag on all snippets of a (docType, slot) pair, optionally
	 * except one — used to keep at most a single default per pair.
	 */
	public function clearDefault(string $docType, string $slot, ?int $exceptId = null): void {
		$qb = $this->db->getQueryBuilder();
		$qb->update($this->tableName)
			->set('is_default', $qb->createNamedParameter(0, IQueryBuilder::PARAM_INT))
			->where($qb->expr()->eq('doc_type', $qb->createNamedParameter($docType)))
			->andWhere($qb->expr()->eq('slot', $qb->createNamedParameter($slot)))
			->andWhere($qb->expr()->eq('is_default', $qb->createNamedParameter(1, IQueryBuilder::PARAM_INT)));
		if ($exceptId !== null) {
			$qb->andWhere($qb->expr()->neq('id', $qb->createNamedParameter($exceptId, IQueryBuilder::PARAM_INT)));
		}
		$qb->executeStatement();
	}
}
