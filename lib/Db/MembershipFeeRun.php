<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/**
 * @method string getOwnerUserId()
 * @method void setOwnerUserId(string $ownerUserId)
 *
 * @method int getYear()
 * @method void setYear(int $year)
 *
 * @method string getMemberGroup()
 * @method void setMemberGroup(string $memberGroup)
 *
 * @method string getCurrency()
 * @method void setCurrency(string $currency)
 *
 * @method string getInvoiceText()
 * @method void setInvoiceText(string $invoiceText)
 *
 * @method int getPaymentTermDays()
 * @method void setPaymentTermDays(int $paymentTermDays)
 *
 * @method ?\DateTime getIssueDate()
 * @method void setIssueDate(?\DateTime $issueDate)
 *
 * @method ?\DateTime getDueDate()
 * @method void setDueDate(?\DateTime $dueDate)
 *
 * @method int getTaxRateBp()
 * @method void setTaxRateBp(int $taxRateBp)
 *
 * @method string getStatus()
 * @method void setStatus(string $status)
 *
 * @method string getCreatedByUserId()
 * @method void setCreatedByUserId(string $createdByUserId)
 *
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 *
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 *
 * @method ?\DateTime getCompletedAt()
 * @method void setCompletedAt(?\DateTime $completedAt)
 */
class MembershipFeeRun extends Entity implements JsonSerializable {

	public const STATUS_DRAFT = 'draft';
	public const STATUS_PROCESSING = 'processing';
	public const STATUS_COMPLETED = 'completed';

	protected ?string $ownerUserId = null;
	protected ?int $year = null;
	protected ?string $memberGroup = null;
	protected ?string $currency = null;
	protected ?string $invoiceText = null;
	protected ?int $paymentTermDays = null;
	protected ?\DateTime $issueDate = null;
	protected ?\DateTime $dueDate = null;
	protected ?int $taxRateBp = null;
	protected ?string $status = null;
	protected ?string $createdByUserId = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;
	protected ?\DateTime $completedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('year', Types::INTEGER);
		$this->addType('memberGroup', Types::STRING);
		$this->addType('currency', Types::STRING);
		$this->addType('invoiceText', Types::STRING);
		$this->addType('paymentTermDays', Types::INTEGER);
		$this->addType('issueDate', Types::DATE);
		$this->addType('dueDate', Types::DATE);
		$this->addType('taxRateBp', Types::INTEGER);
		$this->addType('status', Types::STRING);
		$this->addType('createdByUserId', Types::STRING);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
		$this->addType('completedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'ownerUserId' => $this->getOwnerUserId(),
			'year' => $this->getYear(),
			'memberGroup' => $this->getMemberGroup(),
			'currency' => $this->getCurrency(),
			'invoiceText' => $this->getInvoiceText(),
			'paymentTermDays' => $this->getPaymentTermDays(),
			'issueDate' => $this->getIssueDate()?->format('Y-m-d'),
			'dueDate' => $this->getDueDate()?->format('Y-m-d'),
			'taxRateBp' => $this->getTaxRateBp(),
			'status' => $this->getStatus(),
			'createdByUserId' => $this->getCreatedByUserId(),
			'createdAt' => $this->getCreatedAt()?->format(\DateTimeInterface::ATOM),
			'updatedAt' => $this->getUpdatedAt()?->format(\DateTimeInterface::ATOM),
			'completedAt' => $this->getCompletedAt()?->format(\DateTimeInterface::ATOM),
		];
	}
}