<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Product;
use OCA\Rechnungswerk\Db\ProductMapper;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ProductService;
use OCP\AppFramework\Db\DoesNotExistException;
use PHPUnit\Framework\TestCase;

class ProductServiceTest extends TestCase {

	private ProductMapper $mapper;
	private ProductService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->mapper = $this->createMock(ProductMapper::class);
		$this->service = new ProductService($this->mapper);
	}

	public function testCreateAppliesDefaults(): void {
		$this->mapper->method('insert')->willReturnArgument(0);

		$product = $this->service->create('alice', ['name' => '  Beratung  ']);

		$this->assertSame('Beratung', $product->getName());
		$this->assertSame('alice', $product->getOwnerUserId());
		$this->assertSame('C62', $product->getDefaultUnitCode());
		$this->assertSame(0, $product->getDefaultPriceE4());
		$this->assertSame(1900, $product->getDefaultTaxRateBp());
	}

	public function testCreateKeepsProvidedValues(): void {
		$this->mapper->method('insert')->willReturnArgument(0);

		$product = $this->service->create('alice', [
			'name' => 'Stundensatz',
			'description' => 'Entwicklung',
			'defaultUnitCode' => 'HUR',
			'defaultPriceE4' => 9500,
			'defaultTaxRateBp' => 700,
		]);

		$this->assertSame('HUR', $product->getDefaultUnitCode());
		$this->assertSame(9500, $product->getDefaultPriceE4());
		$this->assertSame(700, $product->getDefaultTaxRateBp());
		$this->assertSame('Entwicklung', $product->getDescription());
	}

	public function testCreateRejectsEmptyName(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['name' => '   ']);
	}

	public function testCreateRejectsNegativePrice(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['name' => 'X', 'defaultPriceE4' => -1]);
	}

	public function testUpdateRejectsEmptyNameWhenProvided(): void {
		$existing = new Product();
		$existing->setOwnerUserId('alice');
		$existing->setName('Alt');
		$this->mapper->method('findOne')->willReturn($existing);

		$this->expectException(ValidationException::class);
		$this->service->update(1, ['name' => '']);
	}

	public function testGetUnknownThrowsNotFound(): void {
		$this->mapper->method('findOne')
			->willThrowException(new DoesNotExistException('nope'));

		$this->expectException(NotFoundException::class);
		$this->service->get(999);
	}
}
