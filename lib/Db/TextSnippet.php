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
 * A reusable text block (#126/#141) for the opening (salutation + intro) or the
 * closing text, kept separately per document type so quotes can carry different
 * wording than invoices. Exactly one snippet per (docType, slot) may be flagged
 * as the default that pre-fills a freshly created document. The catalog is
 * shared company-wide, mirroring the product catalog; owner_user_id stays as
 * "created by".
 *
 * @method string getOwnerUserId()
 * @method void setOwnerUserId(string $ownerUserId)
 * @method string getDocType()
 * @method void setDocType(string $docType)
 * @method string getSlot()
 * @method void setSlot(string $slot)
 * @method string getLabel()
 * @method void setLabel(string $label)
 * @method ?string getContent()
 * @method void setContent(?string $content)
 * @method int getIsDefault()
 * @method void setIsDefault(int $isDefault)
 * @method int getSortOrder()
 * @method void setSortOrder(int $sortOrder)
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class TextSnippet extends Entity implements JsonSerializable {
	/** Applies to normal invoices. */
	public const DOC_TYPE_INVOICE = 'invoice';
	/** Applies to quotes (#111). */
	public const DOC_TYPE_QUOTE = 'quote';
	public const DOC_TYPES = [self::DOC_TYPE_INVOICE, self::DOC_TYPE_QUOTE];

	/** Salutation + intro, rendered above the line items. */
	public const SLOT_OPENING = 'opening';
	/** Closing text, rendered at the bottom. */
	public const SLOT_CLOSING = 'closing';
	public const SLOTS = [self::SLOT_OPENING, self::SLOT_CLOSING];

	protected ?string $ownerUserId = null;
	protected ?string $docType = null;
	protected ?string $slot = null;
	protected ?string $label = null;
	protected ?string $content = null;
	protected ?int $isDefault = null;
	protected ?int $sortOrder = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('docType', Types::STRING);
		$this->addType('slot', Types::STRING);
		$this->addType('label', Types::STRING);
		$this->addType('content', Types::TEXT);
		$this->addType('isDefault', Types::SMALLINT);
		$this->addType('sortOrder', Types::INTEGER);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'docType' => $this->getDocType(),
			'slot' => $this->getSlot(),
			'label' => $this->getLabel(),
			'content' => $this->getContent(),
			'isDefault' => (bool)$this->getIsDefault(),
			'sortOrder' => (int)$this->getSortOrder(),
			'createdAt' => $this->getCreatedAt()?->format(\DateTimeInterface::ATOM),
			'updatedAt' => $this->getUpdatedAt()?->format(\DateTimeInterface::ATOM),
		];
	}
}
