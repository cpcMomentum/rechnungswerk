<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\RowLock;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use PHPUnit\Framework\TestCase;

/**
 * The number-issuing paths lock their row so concurrent commits cannot hand out
 * the same invoice number. SQLite has no SELECT ... FOR UPDATE and Doctrine
 * throws on it, which made every commit on a SQLite instance fail with a 500
 * (#319). RowLock decides per platform; that decision is what is tested here.
 */
class RowLockTest extends TestCase {
	private function dbWithProvider(string $provider): IDBConnection {
		$db = $this->createMock(IDBConnection::class);
		$db->method('getDatabaseProvider')->willReturn($provider);
		return $db;
	}

	/**
	 * @return array<string, array{string}>
	 */
	public static function lockingPlatformProvider(): array {
		return [
			'postgres' => [IDBConnection::PLATFORM_POSTGRES],
			'mysql' => [IDBConnection::PLATFORM_MYSQL],
			'oracle' => [IDBConnection::PLATFORM_ORACLE],
			// getDatabaseProvider() reports MariaDB as 'mysql' unless asked in
			// strict mode, where it says 'mariadb'. Spelled out rather than
			// using PLATFORM_MARIADB, which older OCP versions do not have.
			'mariadb (strict)' => ['mariadb'],
		];
	}

	/**
	 * @dataProvider lockingPlatformProvider
	 */
	public function testPlatformWithRowLockGetsTheLock(string $provider): void {
		$qb = $this->createMock(IQueryBuilder::class);
		$qb->expects($this->once())->method('forUpdate')->willReturnSelf();

		$this->assertSame($qb, RowLock::apply($qb, $this->dbWithProvider($provider)));
	}

	public function testSqliteIsLeftWithoutRowLock(): void {
		$qb = $this->createMock(IQueryBuilder::class);
		$qb->expects($this->never())->method('forUpdate');

		// The builder still comes back unchanged, so the caller can execute it.
		$this->assertSame($qb, RowLock::apply($qb, $this->dbWithProvider(IDBConnection::PLATFORM_SQLITE)));
	}
}
