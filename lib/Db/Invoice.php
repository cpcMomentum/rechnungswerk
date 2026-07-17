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
 * @method ?int getCustomerId()
 * @method void setCustomerId(?int $customerId)
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
 * @method ?string getRecipientContactPerson()
 * @method void setRecipientContactPerson(?string $recipientContactPerson)
 * @method ?string getRecipientPhone()
 * @method void setRecipientPhone(?string $recipientPhone)
 * @method ?string getSellerContactPerson()
 * @method void setSellerContactPerson(?string $sellerContactPerson)
 * @method ?string getSellerContactPhone()
 * @method void setSellerContactPhone(?string $sellerContactPhone)
 * @method ?string getSellerContactEmail()
 * @method void setSellerContactEmail(?string $sellerContactEmail)
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
 * @method ?string getContractNumber()
 * @method void setContractNumber(?string $contractNumber)
 * @method ?string getProjectReference()
 * @method void setProjectReference(?string $projectReference)
 * @method ?int getRelatedInvoiceId()
 * @method void setRelatedInvoiceId(?int $relatedInvoiceId)
 * @method ?\DateTime getValidUntil()
 * @method void setValidUntil(?\DateTime $validUntil)
 * @method ?string getQuoteStatus()
 * @method void setQuoteStatus(?string $quoteStatus)
 * @method ?int getOfferFreeform()
 * @method void setOfferFreeform(?int $offerFreeform)
 * @method ?int getRelatedQuoteId()
 * @method void setRelatedQuoteId(?int $relatedQuoteId)
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
 * @method ?string getDatevMessageId()
 * @method void setDatevMessageId(?string $datevMessageId)
 * @method ?string getDatevStatus()
 * @method void setDatevStatus(?string $datevStatus)
 * @method ?\DateTime getDatevStatusAt()
 * @method void setDatevStatusAt(?\DateTime $datevStatusAt)
 * @method ?string getDatevResponseRaw()
 * @method void setDatevResponseRaw(?string $datevResponseRaw)
 * @method ?\DateTime getCommittedAt()
 * @method void setCommittedAt(?\DateTime $committedAt)
 * @method ?\DateTime getPaidAt()
 * @method void setPaidAt(?\DateTime $paidAt)
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
	/** Quotes (#111) live on the same table as a third document type. */
	public const TYPE_QUOTE = 'quote';

	public const TYPES = [
		self::TYPE_INVOICE,
		self::TYPE_CANCELLATION,
		self::TYPE_QUOTE,
	];

	/** Document types that behave like real invoices (own sequential number circle). */
	public const INVOICE_TYPES = [
		self::TYPE_INVOICE,
		self::TYPE_CANCELLATION,
	];

	/**
	 * Quote lifecycle status (#111). Stored outcomes (accepted/rejected/converted)
	 * live in quote_status; draft/open/expired are derived — draft from the
	 * document status, expired from valid_until — and never stored. Only
	 * meaningful for TYPE_QUOTE documents; null otherwise.
	 */
	public const QUOTE_DRAFT = 'draft';
	public const QUOTE_OPEN = 'open';
	public const QUOTE_EXPIRED = 'expired';
	public const QUOTE_ACCEPTED = 'accepted';
	public const QUOTE_REJECTED = 'rejected';
	public const QUOTE_CONVERTED = 'converted';

	/** The outcomes that are actually persisted in the quote_status column. */
	public const QUOTE_STORED_STATUSES = [
		self::QUOTE_ACCEPTED,
		self::QUOTE_REJECTED,
		self::QUOTE_CONVERTED,
	];

	/** Special VAT treatment (document level). Empty/null = regular taxation. */
	public const SPECIAL_TAX_REVERSE_CHARGE = 'reverse_charge';
	public const SPECIAL_TAX_INTRA_COMMUNITY = 'intra_community';
	public const SPECIAL_TAX_EXPORT = 'export';

	/** Special cases that make the whole invoice VAT-exempt (0 % tax charged). */
	public const SPECIAL_TAX_EXEMPT_CASES = [
		self::SPECIAL_TAX_REVERSE_CHARGE,
		self::SPECIAL_TAX_INTRA_COMMUNITY,
		self::SPECIAL_TAX_EXPORT,
	];

	/**
	 * Derived payment status (#117), not stored — computed from paidAt and the
	 * due date at read time. Only meaningful for committed, non-cancellation
	 * invoices; null otherwise.
	 */
	public const PAYMENT_UNPAID = 'unpaid';
	public const PAYMENT_OVERDUE = 'overdue';
	public const PAYMENT_PAID = 'paid';

	/** DATEV hand-off status (fed by the upload-mail confirmation channel, #36). */
	public const DATEV_PENDING = 'pending';
	public const DATEV_CONFIRMED = 'confirmed';
	public const DATEV_FAILED = 'failed';
	public const DATEV_UNKNOWN = 'unknown';

	protected ?string $ownerUserId = null;
	protected ?string $number = null;
	protected ?string $status = null;
	protected ?string $invoiceType = null;
	protected ?string $recipientName = null;
	protected ?string $recipientContactId = null;
	protected ?int $customerId = null;
	protected ?string $recipientAddress = null;
	protected ?string $recipientPostalCode = null;
	protected ?string $recipientCity = null;
	protected ?string $recipientCountry = null;
	protected ?string $recipientEmail = null;
	protected ?string $recipientVatId = null;
	protected ?string $recipientContactPerson = null;
	protected ?string $recipientPhone = null;
	protected ?string $sellerContactPerson = null;
	protected ?string $sellerContactPhone = null;
	protected ?string $sellerContactEmail = null;
	protected ?\DateTime $issueDate = null;
	protected ?\DateTime $performanceDate = null;
	protected ?\DateTime $performancePeriodStart = null;
	protected ?\DateTime $performancePeriodEnd = null;
	protected ?string $referenceNumber = null;
	protected ?string $orderNumber = null;
	protected ?string $buyerReference = null;
	protected ?string $contractNumber = null;
	protected ?string $projectReference = null;
	protected ?int $relatedInvoiceId = null;
	protected ?\DateTime $validUntil = null;
	protected ?string $quoteStatus = null;
	protected ?int $offerFreeform = null;
	protected ?int $relatedQuoteId = null;
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
	protected ?string $datevMessageId = null;
	protected ?string $datevStatus = null;
	protected ?\DateTime $datevStatusAt = null;
	protected ?string $datevResponseRaw = null;
	protected ?\DateTime $committedAt = null;
	protected ?\DateTime $paidAt = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('number', Types::STRING);
		$this->addType('status', Types::STRING);
		$this->addType('invoiceType', Types::STRING);
		$this->addType('recipientName', Types::STRING);
		$this->addType('recipientContactId', Types::STRING);
		$this->addType('customerId', Types::INTEGER);
		$this->addType('recipientAddress', Types::TEXT);
		$this->addType('recipientPostalCode', Types::STRING);
		$this->addType('recipientCity', Types::STRING);
		$this->addType('recipientCountry', Types::STRING);
		$this->addType('recipientEmail', Types::STRING);
		$this->addType('recipientVatId', Types::STRING);
		$this->addType('recipientContactPerson', Types::STRING);
		$this->addType('recipientPhone', Types::STRING);
		$this->addType('sellerContactPerson', Types::STRING);
		$this->addType('sellerContactPhone', Types::STRING);
		$this->addType('sellerContactEmail', Types::STRING);
		$this->addType('issueDate', Types::DATE);
		$this->addType('performanceDate', Types::DATE);
		$this->addType('performancePeriodStart', Types::DATE);
		$this->addType('performancePeriodEnd', Types::DATE);
		$this->addType('referenceNumber', Types::STRING);
		$this->addType('orderNumber', Types::STRING);
		$this->addType('buyerReference', Types::STRING);
		$this->addType('contractNumber', Types::STRING);
		$this->addType('projectReference', Types::STRING);
		$this->addType('relatedInvoiceId', Types::INTEGER);
		$this->addType('validUntil', Types::DATE);
		$this->addType('quoteStatus', Types::STRING);
		$this->addType('offerFreeform', Types::SMALLINT);
		$this->addType('relatedQuoteId', Types::INTEGER);
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
		$this->addType('datevMessageId', Types::STRING);
		$this->addType('datevStatus', Types::STRING);
		$this->addType('datevStatusAt', Types::DATETIME);
		$this->addType('datevResponseRaw', Types::TEXT);
		$this->addType('committedAt', Types::DATETIME);
		$this->addType('paidAt', Types::DATETIME);
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

	/**
	 * Whether this invoice carries a VAT-exempt special case (reverse charge,
	 * intra-community supply or export) and therefore charges no VAT.
	 */
	public function isTaxExemptCase(): bool {
		return in_array($this->getSpecialTaxCase(), self::SPECIAL_TAX_EXEMPT_CASES, true);
	}

	/**
	 * Plain-text invoice notes (BT-22), stored as a JSON list of strings in the
	 * custom_fields column. Legacy rows may still hold the abandoned
	 * label/value custom-field shape (#41) — those read as "label: value".
	 *
	 * @return list<string>
	 */
	public function getNotesArray(): array {
		if ($this->customFields === null || $this->customFields === '') {
			return [];
		}
		$decoded = json_decode($this->customFields, true);
		if (!is_array($decoded)) {
			return [];
		}
		$notes = [];
		foreach ($decoded as $entry) {
			if (is_string($entry)) {
				$note = trim($entry);
			} elseif (is_array($entry)) {
				$label = trim((string)($entry['label'] ?? ''));
				$value = trim((string)($entry['value'] ?? ''));
				$note = $label !== '' && $value !== '' ? $label . ': ' . $value : ($label . $value);
			} else {
				continue;
			}
			if ($note !== '') {
				$notes[] = $note;
			}
		}
		return $notes;
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
			'customerId' => $this->getCustomerId(),
			'recipientAddress' => $this->getRecipientAddress(),
			'recipientPostalCode' => $this->getRecipientPostalCode(),
			'recipientCity' => $this->getRecipientCity(),
			'recipientCountry' => $this->getRecipientCountry(),
			'recipientEmail' => $this->getRecipientEmail(),
			'recipientVatId' => $this->getRecipientVatId(),
			'recipientContactPerson' => $this->getRecipientContactPerson(),
			'recipientPhone' => $this->getRecipientPhone(),
			'sellerContactPerson' => $this->getSellerContactPerson(),
			'sellerContactPhone' => $this->getSellerContactPhone(),
			'sellerContactEmail' => $this->getSellerContactEmail(),
			'issueDate' => $this->formatDate($this->getIssueDate()),
			'performanceDate' => $this->formatDate($this->getPerformanceDate()),
			'performancePeriodStart' => $this->formatDate($this->getPerformancePeriodStart()),
			'performancePeriodEnd' => $this->formatDate($this->getPerformancePeriodEnd()),
			'referenceNumber' => $this->getReferenceNumber(),
			'orderNumber' => $this->getOrderNumber(),
			'buyerReference' => $this->getBuyerReference(),
			'contractNumber' => $this->getContractNumber(),
			'projectReference' => $this->getProjectReference(),
			'relatedInvoiceId' => $this->getRelatedInvoiceId(),
			// Quote fields (#111). The effective quote status (open/expired/…) is
			// derived and added by the service layer, just like paymentStatus.
			'validUntil' => $this->formatDate($this->getValidUntil()),
			'offerFreeform' => (bool)$this->getOfferFreeform(),
			'relatedQuoteId' => $this->getRelatedQuoteId(),
			'subtotalCents' => $this->getSubtotalCents(),
			'totalCents' => $this->getTotalCents(),
			'taxBreakdown' => $this->getTaxBreakdownArray(),
			'specialTaxCase' => $this->getSpecialTaxCase(),
			'greeting' => $this->getGreeting(),
			'extraText' => $this->getExtraText(),
			'notes' => $this->getNotesArray(),
			'paymentTermDays' => $this->getPaymentTermDays(),
			'dueDate' => $this->formatDate($this->getDueDate()),
			'discountTerms' => $this->getDiscountTerms(),
			'datevStatus' => $this->getDatevStatus(),
			'datevStatusAt' => $this->formatDateTime($this->getDatevStatusAt()),
			'committedAt' => $this->formatDateTime($this->getCommittedAt()),
			'paidAt' => $this->formatDateTime($this->getPaidAt()),
			'createdAt' => $this->formatDateTime($this->getCreatedAt()),
			'updatedAt' => $this->formatDateTime($this->getUpdatedAt()),
		];
	}
}
