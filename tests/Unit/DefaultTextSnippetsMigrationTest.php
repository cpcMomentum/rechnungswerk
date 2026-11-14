<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\TextSnippet;
use OCA\Rechnungswerk\Migration\Version002400Date20261110160000;
use OCP\DB\IResult;
use OCP\DB\QueryBuilder\IFunctionBuilder;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use PHPUnit\Framework\TestCase;

/** Standard-Textbausteine ab Werk: nur in einen leeren Katalog, nie Dubletten. */
class DefaultTextSnippetsMigrationTest extends TestCase {

	/** @var list<array<string, mixed>> */
	private array $inserted = [];

	public function testSeedsOneDefaultPerTypeAndSlotIntoAnEmptyCatalog(): void {
		$this->migration(existing: 0)->postSchemaChange($this->createMock(IOutput::class), fn () => null, []);

		$this->assertCount(4, $this->inserted);
		$pairs = array_map(fn (array $row) => $row['doc_type'] . '/' . $row['slot'], $this->inserted);
		sort($pairs);
		$this->assertSame(['invoice/closing', 'invoice/opening', 'quote/closing', 'quote/opening'], $pairs);
		foreach ($this->inserted as $row) {
			$this->assertSame(1, $row['is_default']);
			$this->assertSame('__company__', $row['owner_user_id']);
			$this->assertNotSame('', $row['content']);
		}
	}

	public function testLeavesAnExistingCatalogAlone(): void {
		$this->migration(existing: 1)->postSchemaChange($this->createMock(IOutput::class), fn () => null, []);

		$this->assertSame([], $this->inserted);
	}

	public function testDefaultsAddressTheCustomerFormally(): void {
		foreach (Version002400Date20261110160000::DEFAULTS as $slots) {
			foreach ($slots as [$label, $content]) {
				$this->assertDoesNotMatchRegularExpression('/\b(du|dich|dir|dein\w*)\b/iu', $content, $label);
			}
		}
		$this->assertSame([TextSnippet::DOC_TYPE_INVOICE, TextSnippet::DOC_TYPE_QUOTE], array_keys(Version002400Date20261110160000::DEFAULTS));
	}

	private function migration(int $existing): Version002400Date20261110160000 {
		$db = $this->createMock(IDBConnection::class);
		$db->method('getQueryBuilder')->willReturnCallback(fn () => $this->queryBuilder($existing));
		return new Version002400Date20261110160000($db);
	}

	private function queryBuilder(int $existing): IQueryBuilder {
		$qb = $this->createMock(IQueryBuilder::class);
		$params = [];
		$qb->method('createNamedParameter')->willReturnCallback(function ($value) use (&$params): string {
			$key = ':p' . count($params);
			$params[$key] = $value;
			return $key;
		});
		$func = $this->createMock(IFunctionBuilder::class);
		$qb->method('func')->willReturn($func);
		$qb->method('select')->willReturnSelf();
		$qb->method('from')->willReturnSelf();
		$qb->method('insert')->willReturnSelf();
		$result = $this->createMock(IResult::class);
		$result->method('fetchOne')->willReturn((string)$existing);
		$qb->method('executeQuery')->willReturn($result);
		$values = [];
		$qb->method('values')->willReturnCallback(function (array $v) use ($qb, &$values): IQueryBuilder {
			$values = $v;
			return $qb;
		});
		$qb->method('executeStatement')->willReturnCallback(function () use (&$values, &$params): int {
			$this->inserted[] = array_map(fn (string $key) => $params[$key], $values);
			return 1;
		});
		return $qb;
	}
}
