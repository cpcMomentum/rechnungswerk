<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Customer;
use OCA\Rechnungswerk\Db\CustomerMapper;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\CustomerService;
use OCP\AppFramework\Db\DoesNotExistException;
use PHPUnit\Framework\TestCase;

class CustomerServiceTest extends TestCase {

	private CustomerMapper $mapper;
	private CustomerService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->mapper = $this->createMock(CustomerMapper::class);
		$this->service = new CustomerService($this->mapper);
	}

	private function freeNumber(): void {
		$this->mapper->method('findByNumber')
			->willThrowException(new DoesNotExistException('none'));
	}

	public function testCreateAppliesDefaults(): void {
		$this->freeNumber();
		$this->mapper->method('insert')->willReturnArgument(0);

		$customer = $this->service->create('alice', [
			'customerNumber' => ' 10001 ',
			'name' => '  Muster GmbH  ',
		]);

		$this->assertSame('10001', $customer->getCustomerNumber());
		$this->assertSame('Muster GmbH', $customer->getName());
		$this->assertSame('alice', $customer->getOwnerUserId());
		$this->assertSame('DE', $customer->getCountry());
		$this->assertNull($customer->getDefaultPaymentTermDays());
		$this->assertNull($customer->getDefaultTaxRateBp());
	}

	public function testCreateKeepsProvidedValues(): void {
		$this->freeNumber();
		$this->mapper->method('insert')->willReturnArgument(0);

		$customer = $this->service->create('alice', [
			'customerNumber' => '10002',
			'name' => 'Hofladen',
			'iban' => 'DE89 3704 0044 0532 0130 00',
			'defaultPaymentTermDays' => 30,
			'defaultTaxRateBp' => 700,
			'country' => 'at',
		]);

		$this->assertSame('DE89 3704 0044 0532 0130 00', $customer->getIban());
		$this->assertSame(30, $customer->getDefaultPaymentTermDays());
		$this->assertSame(700, $customer->getDefaultTaxRateBp());
		$this->assertSame('AT', $customer->getCountry());
	}

	public function testCreateRejectsEmptyName(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['customerNumber' => '1', 'name' => '   ']);
	}

	public function testCreateRejectsEmptyCustomerNumber(): void {
		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['customerNumber' => '  ', 'name' => 'X']);
	}

	public function testCreateRejectsDuplicateNumber(): void {
		$existing = new Customer();
		$existing->setId(7);
		$existing->setCustomerNumber('10001');
		$this->mapper->method('findByNumber')->willReturn($existing);

		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['customerNumber' => '10001', 'name' => 'Zweiter']);
	}

	public function testCreateRejectsInvalidIban(): void {
		$this->freeNumber();
		$this->expectException(ValidationException::class);
		$this->service->create('alice', [
			'customerNumber' => '10003',
			'name' => 'X',
			'iban' => 'DE89 3704 0044 0532 0130 01', // wrong check digits
		]);
	}

	public function testUpdateRejectsDuplicateNumberOfOtherCustomer(): void {
		$current = new Customer();
		$current->setId(1);
		$current->setCustomerNumber('10001');
		$other = new Customer();
		$other->setId(2);
		$other->setCustomerNumber('10002');

		$this->mapper->method('findOne')->willReturn($current);
		$this->mapper->method('findByNumber')->willReturn($other);

		$this->expectException(ValidationException::class);
		$this->service->update(1, ['customerNumber' => '10002']);
	}

	public function testUpdateAllowsKeepingOwnNumber(): void {
		$current = new Customer();
		$current->setId(1);
		$current->setCustomerNumber('10001');
		$current->setName('Alt');

		$this->mapper->method('findOne')->willReturn($current);
		$this->mapper->method('findByNumber')->willReturn($current);
		$this->mapper->method('update')->willReturnArgument(0);

		$updated = $this->service->update(1, ['customerNumber' => '10001', 'name' => 'Neu']);
		$this->assertSame('Neu', $updated->getName());
	}

	public function testGetUnknownThrowsNotFound(): void {
		$this->mapper->method('findOne')
			->willThrowException(new DoesNotExistException('nope'));

		$this->expectException(NotFoundException::class);
		$this->service->get(999);
	}
}
