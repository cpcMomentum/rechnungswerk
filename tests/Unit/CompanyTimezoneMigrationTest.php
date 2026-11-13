<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Migration\Version002500Date20261113120000;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class CompanyTimezoneMigrationTest extends TestCase {

	/** getTable() returns a Doctrine Table up to ocp 33 and OCP\DB\Schema\ITable from 34 on. */
	private function table(): MockObject {
		$type = (new \ReflectionMethod(ISchemaWrapper::class, 'getTable'))->getReturnType();
		return $this->createMock($type instanceof \ReflectionNamedType ? $type->getName() : \Doctrine\DBAL\Schema\Table::class);
	}

	private function migrate(MockObject $table): void {
		$schema = $this->createMock(ISchemaWrapper::class);
		$schema->method('getTable')->with('rechnungswerk_settings')->willReturn($table);
		(new Version002500Date20261113120000())->changeSchema($this->createMock(IOutput::class), static fn () => $schema, []);
	}

	public function testAddsAnOptionalTimezoneColumn(): void {
		$table = $this->table();
		$table->method('hasColumn')->with('timezone')->willReturn(false);
		$table->expects($this->once())->method('addColumn')
			->with('timezone', Types::STRING, ['notnull' => false, 'length' => 64, 'default' => null]);

		$this->migrate($table);
	}

	public function testAnExistingColumnIsLeftAlone(): void {
		$table = $this->table();
		$table->method('hasColumn')->with('timezone')->willReturn(true);
		$table->expects($this->never())->method('addColumn');

		$this->migrate($table);
	}
}
