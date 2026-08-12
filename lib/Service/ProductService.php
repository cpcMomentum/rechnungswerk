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
use OCA\Rechnungswerk\Exception\NumberFormatException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IL10N;

class ProductService {

	public function __construct(
		private readonly ProductMapper $mapper,
		private readonly NumberFormatMessage $numberFormatMessage,
		private readonly IL10N $l10n,
	) {
	}

	/** @return Product[] */
	public function list(): array {
		return $this->mapper->findAll();
	}

	/**
	 * @throws NotFoundException
	 */
	public function get(int $id): Product {
		return $this->findById($id);
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
	public function update(int $id, array $data): Product {
		$product = $this->findById($id);
		$this->validate($data, partial: true);
		$this->apply($product, $data, false);
		$product->setUpdatedAt(new DateTime());
		return $this->mapper->update($product);
	}

	/**
	 * @throws NotFoundException
	 */
	public function delete(int $id): void {
		$product = $this->findById($id);
		$this->mapper->delete($product);
	}

	/**
	 * @throws NotFoundException
	 */
	private function findById(int $id): Product {
		try {
			return $this->mapper->findOne($id);
		} catch (DoesNotExistException) {
			throw new NotFoundException($this->l10n->t('Produkt nicht gefunden.'));
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
				throw new ValidationException($this->l10n->t('Ein Name ist erforderlich.'));
			}
			if (mb_strlen($name) > 255) {
				throw new ValidationException($this->l10n->t('Der Name darf höchstens 255 Zeichen lang sein.'));
			}
		}
		if (array_key_exists('defaultUnitLabel', $data) && mb_strlen(trim((string)($data['defaultUnitLabel'] ?? ''))) > 64) {
			throw new ValidationException($this->l10n->t('Die eigene Einheit darf höchstens 64 Zeichen lang sein.'));
		}
		if (array_key_exists('defaultTaxRateBp', $data) && (int)$data['defaultTaxRateBp'] < 0) {
			throw new ValidationException($this->l10n->t('Der Steuersatz darf nicht negativ sein.'));
		}
		// Der Preis wird in apply() ueber NumberInput::parsePrice() geprueft und
		// umgerechnet (#180). Die frueher hier stehende Negativpruefung auf
		// defaultPriceE4 ist darin aufgegangen.
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
		if (array_key_exists('defaultUnitLabel', $data)) {
			$label = trim((string)($data['defaultUnitLabel'] ?? ''));
			$product->setDefaultUnitLabel($label !== '' ? $label : null);
		}
		// Wie bei der Rechnungsposition: der Rohtext ist massgeblich, nicht die
		// vom Browser vorberechnete Zahl (#180). Der Standardpreis fliesst ueber
		// "Aus Produkt" in jede Rechnung, die Luecke waere sonst nur verschoben.
		if (array_key_exists('defaultPriceInput', $data)) {
			// NumberInput wirft ohne Prosa (#235); den uebersetzten Satz macht
			// NumberFormatMessage daraus.
			try {
				$product->setDefaultPriceE4(NumberInput::parsePrice($data['defaultPriceInput']));
			} catch (NumberFormatException $e) {
				throw $this->numberFormatMessage->asValidationException($e);
			}
		} elseif ($isNew) {
			$product->setDefaultPriceE4(0);
		}
		if (array_key_exists('defaultTaxRateBp', $data)) {
			$product->setDefaultTaxRateBp((int)$data['defaultTaxRateBp']);
		} elseif ($isNew) {
			$product->setDefaultTaxRateBp(1900);
		}
	}
}
