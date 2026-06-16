<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/**
 * @method string getOwnerUserId()
 * @method void setOwnerUserId(string $ownerUserId)
 * @method ?string getNumber()
 * @method void setNumber(?string $number)
 * @method string getStatus()
 * @method void setStatus(string $status)
 * @method string getInvoiceType()
 * @method void setInvoiceType(string $invoiceType)
 * @method ?string getRecipientName()
 * @method void setRecipientName(?string $recipientName)
 * @method ?string getRecipientContactId()
 * @method void setRecipientContactId(?string $recipientContactId)
 * @method ?string getRecipientAddress()
 * @method void setRecipientAddress(?string $recipientAddress)
 * @method ?string getRecipientPostalCode()
 * @method void setRecipientPostalCode(?string $recipientPostalCode)
 * @method ?string getRecipientCity()
 * @method void setRecipientCity(?string $recipientCity)
 * @method ?string getRecipientCountry()
 * @method void setRecipientCountry(?string $recipientCountry)
 * @method ?string getRecipientEmail()
 * @method void setRecipientEmail(?string $recipientEmail)
 * @method ?string getRecipientVatId()
 * @method void setRecipientVatId(?string $recipientVatId)
 * @method ?\DateTime getIssueDate()
 * @method void setIssueDate(?\DateTime $issueDate)
 * @method ?\DateTime getPerformanceDate()
 * @method void setPerformanceDate(?\DateTime $performanceDate)
 * @method ?\DateTime getPerformancePeriodStart()
 * @method void setPerformancePeriodStart(?\DateTime $performancePeriodStart)
 * @method ?\DateTime getPerformancePeriodEnd()
 * @method void setPerformancePeriodEnd(?\DateTime $performancePeriodEnd)
 * @method ?string getReferenceNumber()
 * @method void setReferenceNumber(?string $referenceNumber)
 * @method ?string getOrderNumber()
 * @method void setOrderNumber(?string $orderNumber)
 * @method ?string getBuyerReference()
 * @method void setBuyerReference(?string $buyerReference)
 * @method ?int getRelatedInvoiceId()
 * @method void setRelatedInvoiceId(?int $relatedInvoiceId)
 * @method int getSubtotalCents()
 * @method void setSubtotalCents(int $subtotalCents)
 * @method int getTotalCents()
 * @method void setTotalCents(int $totalCents)
 * @method ?string getTaxBreakdown()
 * @method void setTaxBreakdown(?string $taxBreakdown)
 * @method ?string getSpecialTaxCase()
 * @method void setSpecialTaxCase(?string $specialTaxCase)
 * @method ?string getGreeting()
 * @method void setGreeting(?string $greeting)
 * @method ?string getExtraText()
 * @method void setExtraText(?string $extraText)
 * @method ?string getCustomFields()
 * @method void setCustomFields(?string $customFields)
 * @method ?int getPaymentTermDays()
 * @method void setPaymentTermDays(?int $paymentTermDays)
 * @method ?\DateTime getDueDate()
 * @method void setDueDate(?\DateTime $dueDate)
 * @method ?string getDiscountTerms()
 * @method void setDiscountTerms(?string $discountTerms)
 * @method ?\DateTime getCommittedAt()
 * @method void setCommittedAt(?\DateTime $committedAt)
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class Invoice extends Entity implements JsonSerializable {
	public const STATUS_DRAFT = 'draft';
	public const STATUS_COMMITTED = 'committed';
	public const STATUS_CANCELLED = 'cancelled';

	public const STATUSES = [
		self::STATUS_DRAFT,
		self::STATUS_COMMITTED,
		self::STATUS_CANCELLED,
	];

	public const TYPE_INVOICE = 'invoice';
	public const TYPE_CANCELLATION = 'cancellation';
	public const TYPE_CREDIT_NOTE = 'credit_note';

	public const TYPES = [
		self::TYPE_INVOICE,
		self::TYPE_CANCELLATION,
		self::TYPE_CREDIT_NOTE,
	];

	protected ?string $ownerUserId = null;
	protected ?string $number = null;
	protected ?string $status = null;
	protected ?string $invoiceType = null;
	protected ?string $recipientName = null;
	protected ?string $recipientContactId = null;
	protected ?string $recipientAddress = null;
	protected ?string $recipientPostalCode = null;
	protected ?string $recipientCity = null;
	protected ?string $recipientCountry = null;
	protected ?string $recipientEmail = null;
	protected ?string $recipientVatId = null;
	protected ?\DateTime $issueDate = null;
	protected ?\DateTime $performanceDate = null;
	protected ?\DateTime $performancePeriodStart = null;
	protected ?\DateTime $performancePeriodEnd = null;
	protected ?string $referenceNumber = null;
	protected ?string $orderNumber = null;
	protected ?string $buyerReference = null;
	protected ?int $relatedInvoiceId = null;
	protected ?int $subtotalCents = null;
	protected ?int $totalCents = null;
	protected ?string $taxBreakdown = null;
	protected ?string $specialTaxCase = null;
	protected ?string $greeting = null;
	protected ?string $extraText = null;
	protected ?string $customFields = null;
	protected ?int $paymentTermDays = null;
	protected ?\DateTime $dueDate = null;
	protected ?string $discountTerms = null;
	protected ?\DateTime $committedAt = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('number', Types::STRING);
		$this->addType('status', Types::STRING);
		$this->addType('invoiceType', Types::STRING);
		$this->addType('recipientName', Types::STRING);
		$this->addType('recipientContactId', Types::STRING);
		$this->addType('recipientAddress', Types::TEXT);
		$this->addType('recipientPostalCode', Types::STRING);
		$this->addType('recipientCity', Types::STRING);
		$this->addType('recipientCountry', Types::STRING);
		$this->addType('recipientEmail', Types::STRING);
		$this->addType('recipientVatId', Types::STRING);
		$this->addType('issueDate', Types::DATE);
		$this->addType('performanceDate', Types::DATE);
		$this->addType('performancePeriodStart', Types::DATE);
		$this->addType('performancePeriodEnd', Types::DATE);
		$this->addType('referenceNumber', Types::STRING);
		$this->addType('orderNumber', Types::STRING);
		$this->addType('buyerReference', Types::STRING);
		$this->addType('relatedInvoiceId', Types::INTEGER);
		$this->addType('subtotalCents', Types::INTEGER);
		$this->addType('totalCents', Types::INTEGER);
		$this->addType('taxBreakdown', Types::TEXT);
		$this->addType('specialTaxCase', Types::STRING);
		$this->addType('greeting', Types::TEXT);
		$this->addType('extraText', Types::TEXT);
		$this->addType('customFields', Types::TEXT);
		$this->addType('paymentTermDays', Types::INTEGER);
		$this->addType('dueDate', Types::DATE);
		$this->addType('discountTerms', Types::STRING);
		$this->addType('committedAt', Types::DATETIME);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	/** @return list<array{rateBp: int, netCents: int, taxCents: int}> */
	public function getTaxBreakdownArray(): array {
		if ($this->taxBreakdown === null || $this->taxBreakdown === '') {
			return [];
		}
		$decoded = json_decode($this->taxBreakdown, true);
		return is_array($decoded) ? $decoded : [];
	}

	/** @return list<array{label: string, value: string}> */
	public function getCustomFieldsArray(): array {
		if ($this->customFields === null || $this->customFields === '') {
			return [];
		}
		$decoded = json_decode($this->customFields, true);
		return is_array($decoded) ? $decoded : [];
	}

	private function formatDate(?\DateTime $date): ?string {
		return $date?->format('Y-m-d');
	}

	private function formatDateTime(?\DateTime $date): ?string {
		return $date?->format(\DateTimeInterface::ATOM);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'number' => $this->getNumber(),
			'status' => $this->getStatus(),
			'invoiceType' => $this->getInvoiceType(),
			'recipientName' => $this->getRecipientName(),
			'recipientContactId' => $this->getRecipientContactId(),
			'recipientAddress' => $this->getRecipientAddress(),
			'recipientPostalCode' => $this->getRecipientPostalCode(),
			'recipientCity' => $this->getRecipientCity(),
			'recipientCountry' => $this->getRecipientCountry(),
			'recipientEmail' => $this->getRecipientEmail(),
			'recipientVatId' => $this->getRecipientVatId(),
			'issueDate' => $this->formatDate($this->getIssueDate()),
			'performanceDate' => $this->formatDate($this->getPerformanceDate()),
			'performancePeriodStart' => $this->formatDate($this->getPerformancePeriodStart()),
			'performancePeriodEnd' => $this->formatDate($this->getPerformancePeriodEnd()),
			'referenceNumber' => $this->getReferenceNumber(),
			'orderNumber' => $this->getOrderNumber(),
			'buyerReference' => $this->getBuyerReference(),
			'relatedInvoiceId' => $this->getRelatedInvoiceId(),
			'subtotalCents' => $this->getSubtotalCents(),
			'totalCents' => $this->getTotalCents(),
			'taxBreakdown' => $this->getTaxBreakdownArray(),
			'specialTaxCase' => $this->getSpecialTaxCase(),
			'greeting' => $this->getGreeting(),
			'extraText' => $this->getExtraText(),
			'customFields' => $this->getCustomFieldsArray(),
			'paymentTermDays' => $this->getPaymentTermDays(),
			'dueDate' => $this->formatDate($this->getDueDate()),
			'discountTerms' => $this->getDiscountTerms(),
			'committedAt' => $this->formatDateTime($this->getCommittedAt()),
			'createdAt' => $this->formatDateTime($this->getCreatedAt()),
			'updatedAt' => $this->formatDateTime($this->getUpdatedAt()),
		];
	}
}
