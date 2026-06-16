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
 * @method string getName()
 * @method void setName(string $name)
 * @method ?string getDescription()
 * @method void setDescription(?string $description)
 * @method string getDefaultUnitCode()
 * @method void setDefaultUnitCode(string $defaultUnitCode)
 * @method int getDefaultPriceCents()
 * @method void setDefaultPriceCents(int $defaultPriceCents)
 * @method int getDefaultTaxRateBp()
 * @method void setDefaultTaxRateBp(int $defaultTaxRateBp)
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class Product extends Entity implements JsonSerializable {
	protected ?string $ownerUserId = null;
	protected ?string $name = null;
	protected ?string $description = null;
	protected ?string $defaultUnitCode = null;
	protected ?int $defaultPriceCents = null;
	protected ?int $defaultTaxRateBp = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('name', Types::STRING);
		$this->addType('description', Types::TEXT);
		$this->addType('defaultUnitCode', Types::STRING);
		$this->addType('defaultPriceCents', Types::INTEGER);
		$this->addType('defaultTaxRateBp', Types::INTEGER);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'name' => $this->getName(),
			'description' => $this->getDescription(),
			'defaultUnitCode' => $this->getDefaultUnitCode(),
			'defaultPriceCents' => $this->getDefaultPriceCents(),
			'defaultTaxRateBp' => $this->getDefaultTaxRateBp(),
			'createdAt' => $this->getCreatedAt()?->format(\DateTimeInterface::ATOM),
			'updatedAt' => $this->getUpdatedAt()?->format(\DateTimeInterface::ATOM),
		];
	}
}
