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
 * @template-extends QBMapper<MembershipInvoiceMail>
 */
class MembershipInvoiceMailMapper extends QBMapper {

	public function __construct(IDBConnection $db) {
		parent::__construct(
			$db,
			'rechnungswerk_fee_mail',
			MembershipInvoiceMail::class
		);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function find(int $id): MembershipInvoiceMail {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->tableName)
			->where(
				$qb->expr()->eq(
					'id',
					$qb->createNamedParameter($id)
				)
			);

		return $this->findEntity($qb);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findByInvoiceId(int $invoiceId): MembershipInvoiceMail {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->tableName)
			->where(
				$qb->expr()->eq(
					'invoice_id',
					$qb->createNamedParameter(
                        $invoiceId,
                        IQueryBuilder::PARAM_INT
                    )
				)
			);

		return $this->findEntity($qb);
	}
    /**
     * Versandstatus einer Rechnung sperren.
     *
     * Muss innerhalb einer laufenden DB-Transaktion verwendet werden.
     *
     * @throws DoesNotExistException
     */
    public function findByInvoiceIdForUpdate(int $invoiceId): MembershipInvoiceMail {
        $qb = $this->db->getQueryBuilder();

        $qb->select('*')
            ->from($this->tableName)
            ->where(
                $qb->expr()->eq(
                    'invoice_id',
                    $qb->createNamedParameter(
                        $invoiceId,
                        IQueryBuilder::PARAM_INT
                    )
                )
            )
            ->forUpdate();

        return $this->findEntity($qb);
    }
}