<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Migration\Version002600Date20261124120000;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class IdempotencyKeyMigrationTest extends TestCase {

	/** getTable() returns a Doctrine Table up to ocp 33 and OCP\DB\Schema\ITable from 34 on. */
	private function table(): MockObject {
		$type = (new \ReflectionMethod(ISchemaWrapper::class, 'getTable'))->getReturnType();
		return $this->createMock($type instanceof \ReflectionNamedType ? $type->getName() : \Doctrine\DBAL\Schema\Table::class);
	}

	private function migrate(MockObject $table): void {
		$schema = $this->createMock(ISchemaWrapper::class);
		$schema->method('getTable')->with('rechnungswerk_invoice')->willReturn($table);
		(new Version002600Date20261124120000())->changeSchema($this->createMock(IOutput::class), static fn () => $schema, []);
	}

	public function testAddsTheColumnAndItsUniqueIndex(): void {
		$table = $this->table();
		$table->method('hasColumn')->with('idempotency_key')->willReturn(false);
		$table->method('hasIndex')->with(Version002600Date20261124120000::INDEX)->willReturn(false);
		$table->expects($this->once())->method('addColumn')
			->with('idempotency_key', Types::STRING, ['notnull' => false, 'length' => 64, 'default' => null]);
		$table->expects($this->once())->method('addUniqueIndex')
			->with(['idempotency_key'], Version002600Date20261124120000::INDEX);

		$this->migrate($table);
	}

	public function testASecondRunChangesNothing(): void {
		$table = $this->table();
		$table->method('hasColumn')->willReturn(true);
		$table->method('hasIndex')->willReturn(true);
		$table->expects($this->never())->method('addColumn');
		$table->expects($this->never())->method('addUniqueIndex');

		$this->migrate($table);
	}

	public function testTheIndexNameFitsEveryDatabase(): void {
		$this->assertLessThanOrEqual(30, strlen(Version002600Date20261124120000::INDEX));
	}
}
