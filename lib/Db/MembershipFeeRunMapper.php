<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Db;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<MembershipFeeRun>
 */
class MembershipFeeRunMapper extends QBMapper {

	public function __construct(IDBConnection $db) {
		parent::__construct(
			$db,
			'rechnungswerk_fee_run',
			MembershipFeeRun::class
		);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function find(int $id): MembershipFeeRun {
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
	public function findByYearAndGroup(
		int $year,
		string $memberGroup
	): MembershipFeeRun {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->tableName)
			->where(
				$qb->expr()->eq(
					'year',
					$qb->createNamedParameter($year)
				)
			)
			->andWhere(
				$qb->expr()->eq(
					'member_group',
					$qb->createNamedParameter($memberGroup)
				)
			);

		return $this->findEntity($qb);
	}

	/**
	 * @return MembershipFeeRun[]
	 */
	public function findAllOrdered(): array {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->tableName)
			->orderBy('year', 'DESC')
			->addOrderBy('id', 'DESC');

		return $this->findEntities($qb);
	}
}