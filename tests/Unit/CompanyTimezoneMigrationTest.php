<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use Doctrine\DBAL\Schema\Table;
use OCA\Rechnungswerk\Migration\Version002500Date20261113120000;
use OCP\DB\ISchemaWrapper;
use OCP\Migration\IOutput;
use PHPUnit\Framework\TestCase;

class CompanyTimezoneMigrationTest extends TestCase {

	private function migrate(Table $table): void {
		$schema = $this->createMock(ISchemaWrapper::class);
		$schema->method('getTable')->with('rechnungswerk_settings')->willReturn($table);
		(new Version002500Date20261113120000())->changeSchema($this->createMock(IOutput::class), static fn () => $schema, []);
	}

	public function testAddsAnOptionalTimezoneColumn(): void {
		$table = new Table('oc_rechnungswerk_settings');
		$this->migrate($table);

		$column = $table->getColumn('timezone');
		$this->assertFalse($column->getNotnull());
		$this->assertSame(64, $column->getLength());
		$this->assertNull($column->getDefault());
	}

	public function testRunningTwiceKeepsTheColumn(): void {
		$table = new Table('oc_rechnungswerk_settings');
		$this->migrate($table);
		$this->migrate($table);

		$this->assertTrue($table->hasColumn('timezone'));
	}
}
