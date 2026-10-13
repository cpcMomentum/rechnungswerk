<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Db;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\IDBConnection;

/**
 * @template-extends QBMapper<MembershipFeeRule>
 */
class MembershipFeeRuleMapper extends QBMapper {

	public function __construct(IDBConnection $db) {
		parent::__construct(
			$db,
			'rechnungswerk_fee_rule',
			MembershipFeeRule::class
		);
	}

	/**
	 * @return MembershipFeeRule[]
	 */
	public function findByRun(int $runId): array {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->tableName)
			->where(
				$qb->expr()->eq(
					'run_id',
					$qb->createNamedParameter($runId)
				)
			)
			->orderBy('sort_order', 'ASC')
			->addOrderBy('id', 'ASC');

		return $this->findEntities($qb);
	}

	/**
	 * @throws DoesNotExistException
	 */
	public function findRule(
		int $runId,
		string $ruleType,
		string $ruleKey
	): MembershipFeeRule {
		$qb = $this->db->getQueryBuilder();

		$qb->select('*')
			->from($this->tableName)
			->where(
				$qb->expr()->eq(
					'run_id',
					$qb->createNamedParameter($runId)
				)
			)
			->andWhere(
				$qb->expr()->eq(
					'rule_type',
					$qb->createNamedParameter($ruleType)
				)
			)
			->andWhere(
				$qb->expr()->eq(
					'rule_key',
					$qb->createNamedParameter($ruleKey)
				)
			);

		return $this->findEntity($qb);
	}

	public function deleteByRun(int $runId): void {
		$qb = $this->db->getQueryBuilder();

		$qb->delete($this->tableName)
			->where(
				$qb->expr()->eq(
					'run_id',
					$qb->createNamedParameter($runId)
				)
			);

		$qb->executeStatement();
	}
}