<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Customer;
use OCA\Rechnungswerk\Db\CustomerMapper;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;

class CustomerService {

	public function __construct(
		private readonly CustomerMapper $mapper,
	) {
	}

	/** @return Customer[] */
	public function list(): array {
		return $this->mapper->findAll();
	}

	/**
	 * @throws NotFoundException
	 */
	public function get(int $id): Customer {
		return $this->findById($id);
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws ValidationException
	 */
	public function create(string $userId, array $data): Customer {
		$this->validate($data);
		$this->ensureUniqueNumber((string)$data['customerNumber'], null);

		$now = new DateTime();
		$customer = new Customer();
		$customer->setOwnerUserId($userId);
		$customer->setCreatedAt($now);
		$customer->setUpdatedAt($now);
		$this->apply($customer, $data, true);
		return $this->mapper->insert($customer);
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws NotFoundException
	 * @throws ValidationException
	 */
	public function update(int $id, array $data): Customer {
		$customer = $this->findById($id);
		$this->validate($data, partial: true);
		if (array_key_exists('customerNumber', $data)) {
			$this->ensureUniqueNumber((string)$data['customerNumber'], $id);
		}
		$this->apply($customer, $data, false);
		$customer->setUpdatedAt(new DateTime());
		return $this->mapper->update($customer);
	}

	/**
	 * @throws NotFoundException
	 */
	public function delete(int $id): void {
		$customer = $this->findById($id);
		$this->mapper->delete($customer);
	}

	/**
	 * @throws NotFoundException
	 */
	private function findById(int $id): Customer {
		try {
			return $this->mapper->findOne($id);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Kunde nicht gefunden.');
		}
	}

	/**
	 * Company-wide unique customer numbers (manual entry, mirrors DATEV debitor no.).
	 *
	 * @throws ValidationException
	 */
	private function ensureUniqueNumber(string $customerNumber, ?int $excludeId): void {
		$customerNumber = trim($customerNumber);
		if ($customerNumber === '') {
			return;
		}
		try {
			$existing = $this->mapper->findByNumber($customerNumber);
		} catch (DoesNotExistException) {
			return;
		}
		if ($existing->getId() !== $excludeId) {
			throw new ValidationException('Die Kundennummer ' . $customerNumber . ' ist bereits vergeben.');
		}
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws ValidationException
	 */
	private function validate(array $data, bool $partial = false): void {
		if (!$partial || array_key_exists('name', $data)) {
			$name = trim((string)($data['name'] ?? ''));
			if ($name === '') {
				throw new ValidationException('Ein Name ist erforderlich.');
			}
			if (mb_strlen($name) > 255) {
				throw new ValidationException('Der Name darf höchstens 255 Zeichen lang sein.');
			}
		}
		if (!$partial || array_key_exists('customerNumber', $data)) {
			$number = trim((string)($data['customerNumber'] ?? ''));
			if ($number === '') {
				throw new ValidationException('Eine Kundennummer ist erforderlich.');
			}
			if (mb_strlen($number) > 64) {
				throw new ValidationException('Die Kundennummer darf höchstens 64 Zeichen lang sein.');
			}
		}
		if (array_key_exists('iban', $data) && trim((string)$data['iban']) !== '' && !$this->isValidIban((string)$data['iban'])) {
			throw new ValidationException('Die IBAN ist ungültig (Format oder Prüfziffer).');
		}
		if (array_key_exists('defaultTaxRateBp', $data) && $data['defaultTaxRateBp'] !== null && (int)$data['defaultTaxRateBp'] < 0) {
			throw new ValidationException('Der Steuersatz darf nicht negativ sein.');
		}
		if (array_key_exists('defaultPaymentTermDays', $data) && $data['defaultPaymentTermDays'] !== null && (int)$data['defaultPaymentTermDays'] < 0) {
			throw new ValidationException('Das Zahlungsziel darf nicht negativ sein.');
		}
	}

	/**
	 * ISO 13616 IBAN check: structure plus ISO 7064 mod-97 checksum.
	 */
	private function isValidIban(string $iban): bool {
		$iban = strtoupper(str_replace([' ', '-'], '', trim($iban)));
		if (!preg_match('/^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/', $iban) || mb_strlen($iban) > 34) {
			return false;
		}
		// Move the four leading chars to the end and convert letters to numbers (A=10 … Z=35).
		$rearranged = substr($iban, 4) . substr($iban, 0, 4);
		$digits = '';
		foreach (str_split($rearranged) as $ch) {
			$digits .= ctype_alpha($ch) ? (string)(ord($ch) - 55) : $ch;
		}
		// Piecewise mod-97 to stay within native int range.
		$remainder = 0;
		foreach (str_split($digits) as $d) {
			$remainder = ($remainder * 10 + (int)$d) % 97;
		}
		return $remainder === 1;
	}

	/**
	 * @param array<string, mixed> $data
	 */
	private function apply(Customer $customer, array $data, bool $isNew): void {
		if (array_key_exists('customerNumber', $data)) {
			$customer->setCustomerNumber(trim((string)$data['customerNumber']));
		}
		if (array_key_exists('name', $data)) {
			$customer->setName(trim((string)$data['name']));
		}
		foreach ([
			'vatId' => 'setVatId',
			'address' => 'setAddress',
			'postalCode' => 'setPostalCode',
			'city' => 'setCity',
			'contactPerson' => 'setContactPerson',
			'phone' => 'setPhone',
			'email' => 'setEmail',
			'bankAccountHolder' => 'setBankAccountHolder',
			'iban' => 'setIban',
			'bic' => 'setBic',
			'bankName' => 'setBankName',
			'note' => 'setNote',
		] as $key => $setter) {
			if (array_key_exists($key, $data)) {
				$value = $data[$key] !== null && trim((string)$data[$key]) !== '' ? trim((string)$data[$key]) : null;
				$customer->$setter($value);
			}
		}
		if (array_key_exists('country', $data)) {
			$country = strtoupper(trim((string)$data['country']));
			$customer->setCountry($country !== '' ? $country : 'DE');
		} elseif ($isNew) {
			$customer->setCountry('DE');
		}
		if (array_key_exists('defaultPaymentTermDays', $data)) {
			$customer->setDefaultPaymentTermDays($data['defaultPaymentTermDays'] !== null && $data['defaultPaymentTermDays'] !== '' ? (int)$data['defaultPaymentTermDays'] : null);
		}
		if (array_key_exists('defaultTaxRateBp', $data)) {
			$customer->setDefaultTaxRateBp($data['defaultTaxRateBp'] !== null && $data['defaultTaxRateBp'] !== '' ? (int)$data['defaultTaxRateBp'] : null);
		}
	}
}
