<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\Product;
use OCA\Rechnungswerk\Db\ProductMapper;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;

class ProductService {

	public function __construct(
		private readonly ProductMapper $mapper,
	) {
	}

	/** @return Product[] */
	public function list(string $userId): array {
		return $this->mapper->findByOwner($userId);
	}

	/**
	 * @throws NotFoundException
	 */
	public function get(int $id, string $userId): Product {
		return $this->findOwned($id, $userId);
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws ValidationException
	 */
	public function create(string $userId, array $data): Product {
		$this->validate($data);

		$now = new DateTime();
		$product = new Product();
		$product->setOwnerUserId($userId);
		$product->setCreatedAt($now);
		$product->setUpdatedAt($now);
		$this->apply($product, $data, true);
		return $this->mapper->insert($product);
	}

	/**
	 * @param array<string, mixed> $data
	 * @throws NotFoundException
	 * @throws ValidationException
	 */
	public function update(int $id, string $userId, array $data): Product {
		$product = $this->findOwned($id, $userId);
		$this->validate($data, partial: true);
		$this->apply($product, $data, false);
		$product->setUpdatedAt(new DateTime());
		return $this->mapper->update($product);
	}

	/**
	 * @throws NotFoundException
	 */
	public function delete(int $id, string $userId): void {
		$product = $this->findOwned($id, $userId);
		$this->mapper->delete($product);
	}

	/**
	 * @throws NotFoundException
	 */
	private function findOwned(int $id, string $userId): Product {
		try {
			return $this->mapper->findOneByOwner($id, $userId);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Produkt nicht gefunden.');
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
		if (array_key_exists('defaultTaxRateBp', $data) && (int)$data['defaultTaxRateBp'] < 0) {
			throw new ValidationException('Der Steuersatz darf nicht negativ sein.');
		}
		if (array_key_exists('defaultPriceCents', $data) && (int)$data['defaultPriceCents'] < 0) {
			throw new ValidationException('Der Preis darf nicht negativ sein.');
		}
	}

	/**
	 * @param array<string, mixed> $data
	 */
	private function apply(Product $product, array $data, bool $isNew): void {
		if (array_key_exists('name', $data)) {
			$product->setName(trim((string)$data['name']));
		}
		if (array_key_exists('description', $data)) {
			$product->setDescription($data['description'] !== null && $data['description'] !== '' ? (string)$data['description'] : null);
		}
		if (array_key_exists('defaultUnitCode', $data)) {
			$product->setDefaultUnitCode((string)$data['defaultUnitCode']);
		} elseif ($isNew) {
			$product->setDefaultUnitCode(InvoiceItem::UNIT_PIECE);
		}
		if (array_key_exists('defaultPriceCents', $data)) {
			$product->setDefaultPriceCents((int)$data['defaultPriceCents']);
		} elseif ($isNew) {
			$product->setDefaultPriceCents(0);
		}
		if (array_key_exists('defaultTaxRateBp', $data)) {
			$product->setDefaultTaxRateBp((int)$data['defaultTaxRateBp']);
		} elseif ($isNew) {
			$product->setDefaultTaxRateBp(1900);
		}
	}
}
