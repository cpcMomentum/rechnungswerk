<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/**
 * @method int getRunId()
 * @method void setRunId(int $runId)
 *
 * @method string getRuleType()
 * @method void setRuleType(string $ruleType)
 *
 * @method string getRuleKey()
 * @method void setRuleKey(string $ruleKey)
 *
 * @method string getCalculationType()
 * @method void setCalculationType(string $calculationType)
 *
 * @method ?int getAmountCents()
 * @method void setAmountCents(?int $amountCents)
 *
 * @method ?int getPercentBp()
 * @method void setPercentBp(?int $percentBp)
 *
 * @method int getSortOrder()
 * @method void setSortOrder(int $sortOrder)
 *
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 *
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class MembershipFeeRule extends Entity implements JsonSerializable {

	public const TYPE_GROUP = 'group';
	public const TYPE_MEMBERSHIP = 'membership_type';

	public const CALC_FIXED = 'fixed';
	public const CALC_PERCENT = 'percent';

	protected ?int $runId = null;
	protected ?string $ruleType = null;
	protected ?string $ruleKey = null;
	protected ?string $calculationType = null;
	protected ?int $amountCents = null;
	protected ?int $percentBp = null;
	protected ?int $sortOrder = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('runId', Types::INTEGER);
		$this->addType('ruleType', Types::STRING);
		$this->addType('ruleKey', Types::STRING);
		$this->addType('calculationType', Types::STRING);
		$this->addType('amountCents', Types::INTEGER);
		$this->addType('percentBp', Types::INTEGER);
		$this->addType('sortOrder', Types::INTEGER);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'runId' => $this->getRunId(),
			'ruleType' => $this->getRuleType(),
			'ruleKey' => $this->getRuleKey(),
			'calculationType' => $this->getCalculationType(),

			'amountCents' => $this->getAmountCents(),
			'amount' => $this->getAmountCents() !== null
				? number_format($this->getAmountCents() / 100, 2, '.', '')
				: null,

			'percentBp' => $this->getPercentBp(),
			'percent' => $this->getPercentBp() !== null
				? $this->getPercentBp() / 100
				: null,

			'sortOrder' => $this->getSortOrder(),

			'createdAt' => $this->getCreatedAt()?->format(\DateTimeInterface::ATOM),
			'updatedAt' => $this->getUpdatedAt()?->format(\DateTimeInterface::ATOM),
		];
	}
}