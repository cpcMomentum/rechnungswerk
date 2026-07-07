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
 * @method int getInvoiceId()
 * @method void setInvoiceId(int $invoiceId)
 * @method ?int getProductId()
 * @method void setProductId(?int $productId)
 * @method string getName()
 * @method void setName(string $name)
 * @method ?string getDescription()
 * @method void setDescription(?string $description)
 * @method string getQuantity()
 * @method void setQuantity(string $quantity)
 * @method string getUnitCode()
 * @method void setUnitCode(string $unitCode)
 * @method int getUnitPriceCents()
 * @method void setUnitPriceCents(int $unitPriceCents)
 * @method int getTaxRateBp()
 * @method void setTaxRateBp(int $taxRateBp)
 * @method int getLineTotalCents()
 * @method void setLineTotalCents(int $lineTotalCents)
 * @method int getSortOrder()
 * @method void setSortOrder(int $sortOrder)
 */
class InvoiceItem extends Entity implements JsonSerializable {
	// UN/ECE Recommendation 20 unit codes used in EN16931.
	public const UNIT_PIECE = 'C62';  // Stück / one
	public const UNIT_HOUR = 'HUR';   // Stunde
	public const UNIT_DAY = 'DAY';    // Tag
	public const UNIT_MONTH = 'MON';  // Monat
	public const UNIT_KILOGRAM = 'KGM'; // kg
	public const UNIT_LUMP_SUM = 'LS'; // Pauschal

	public const UNIT_CODES = [
		self::UNIT_PIECE,
		self::UNIT_HOUR,
		self::UNIT_DAY,
		self::UNIT_MONTH,
		self::UNIT_KILOGRAM,
		self::UNIT_LUMP_SUM,
	];

	protected ?int $invoiceId = null;
	protected ?int $productId = null;
	protected ?string $name = null;
	protected ?string $description = null;
	/** Decimal string (e.g. "2.500") — line_total_cents stays the authoritative money value. */
	protected ?string $quantity = null;
	protected ?string $unitCode = null;
	protected ?int $unitPriceCents = null;
	protected ?int $taxRateBp = null;
	protected ?int $lineTotalCents = null;
	protected ?int $sortOrder = null;

	public function __construct() {
		$this->addType('invoiceId', Types::INTEGER);
		$this->addType('productId', Types::INTEGER);
		$this->addType('name', Types::STRING);
		$this->addType('description', Types::TEXT);
		$this->addType('quantity', Types::DECIMAL);
		$this->addType('unitCode', Types::STRING);
		$this->addType('unitPriceCents', Types::INTEGER);
		$this->addType('taxRateBp', Types::INTEGER);
		$this->addType('lineTotalCents', Types::INTEGER);
		$this->addType('sortOrder', Types::INTEGER);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'invoiceId' => $this->getInvoiceId(),
			'productId' => $this->getProductId(),
			'name' => $this->getName(),
			'description' => $this->getDescription(),
			'quantity' => $this->getQuantity(),
			'unitCode' => $this->getUnitCode(),
			'unitPriceCents' => $this->getUnitPriceCents(),
			'taxRateBp' => $this->getTaxRateBp(),
			'lineTotalCents' => $this->getLineTotalCents(),
			'sortOrder' => $this->getSortOrder(),
		];
	}
}
