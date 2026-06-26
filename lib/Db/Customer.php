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
 * @method string getCustomerNumber()
 * @method void setCustomerNumber(string $customerNumber)
 * @method string getName()
 * @method void setName(string $name)
 * @method ?string getVatId()
 * @method void setVatId(?string $vatId)
 * @method ?string getAddress()
 * @method void setAddress(?string $address)
 * @method ?string getPostalCode()
 * @method void setPostalCode(?string $postalCode)
 * @method ?string getCity()
 * @method void setCity(?string $city)
 * @method ?string getCountry()
 * @method void setCountry(?string $country)
 * @method ?string getContactPerson()
 * @method void setContactPerson(?string $contactPerson)
 * @method ?string getPhone()
 * @method void setPhone(?string $phone)
 * @method ?string getEmail()
 * @method void setEmail(?string $email)
 * @method ?string getBankAccountHolder()
 * @method void setBankAccountHolder(?string $bankAccountHolder)
 * @method ?string getIban()
 * @method void setIban(?string $iban)
 * @method ?string getBic()
 * @method void setBic(?string $bic)
 * @method ?string getBankName()
 * @method void setBankName(?string $bankName)
 * @method ?int getDefaultPaymentTermDays()
 * @method void setDefaultPaymentTermDays(?int $defaultPaymentTermDays)
 * @method ?int getDefaultTaxRateBp()
 * @method void setDefaultTaxRateBp(?int $defaultTaxRateBp)
 * @method ?string getNote()
 * @method void setNote(?string $note)
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class Customer extends Entity implements JsonSerializable {
	protected ?string $ownerUserId = null;
	protected ?string $customerNumber = null;
	protected ?string $name = null;
	protected ?string $vatId = null;
	protected ?string $address = null;
	protected ?string $postalCode = null;
	protected ?string $city = null;
	protected ?string $country = null;
	protected ?string $contactPerson = null;
	protected ?string $phone = null;
	protected ?string $email = null;
	protected ?string $bankAccountHolder = null;
	protected ?string $iban = null;
	protected ?string $bic = null;
	protected ?string $bankName = null;
	protected ?int $defaultPaymentTermDays = null;
	protected ?int $defaultTaxRateBp = null;
	protected ?string $note = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('ownerUserId', Types::STRING);
		$this->addType('customerNumber', Types::STRING);
		$this->addType('name', Types::STRING);
		$this->addType('vatId', Types::STRING);
		$this->addType('address', Types::TEXT);
		$this->addType('postalCode', Types::STRING);
		$this->addType('city', Types::STRING);
		$this->addType('country', Types::STRING);
		$this->addType('contactPerson', Types::STRING);
		$this->addType('phone', Types::STRING);
		$this->addType('email', Types::STRING);
		$this->addType('bankAccountHolder', Types::STRING);
		$this->addType('iban', Types::STRING);
		$this->addType('bic', Types::STRING);
		$this->addType('bankName', Types::STRING);
		$this->addType('defaultPaymentTermDays', Types::INTEGER);
		$this->addType('defaultTaxRateBp', Types::INTEGER);
		$this->addType('note', Types::TEXT);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'customerNumber' => $this->getCustomerNumber(),
			'name' => $this->getName(),
			'vatId' => $this->getVatId(),
			'address' => $this->getAddress(),
			'postalCode' => $this->getPostalCode(),
			'city' => $this->getCity(),
			'country' => $this->getCountry(),
			'contactPerson' => $this->getContactPerson(),
			'phone' => $this->getPhone(),
			'email' => $this->getEmail(),
			'bankAccountHolder' => $this->getBankAccountHolder(),
			'iban' => $this->getIban(),
			'bic' => $this->getBic(),
			'bankName' => $this->getBankName(),
			'defaultPaymentTermDays' => $this->getDefaultPaymentTermDays(),
			'defaultTaxRateBp' => $this->getDefaultTaxRateBp(),
			'note' => $this->getNote(),
			'createdAt' => $this->getCreatedAt()?->format(\DateTimeInterface::ATOM),
			'updatedAt' => $this->getUpdatedAt()?->format(\DateTimeInterface::ATOM),
		];
	}
}
