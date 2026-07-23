<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\Types;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Finer unit prices (#147): the unit net price used to be stored in integer
 * cents (1/100 €), which only allows two decimals. Consumption prices (e.g. €/kWh
 * with four decimals) need more precision. New columns store the unit price in
 * ten-thousandths of a euro (1/10000 €, 4 decimals); line totals and all summed
 * amounts stay in cents (rounding happens once at the line total). EN16931
 * allows more than two decimals on the item net price (BT-146), so the XML stays
 * valid.
 *
 * The old *_cents columns are kept (backfilled × 100) for a safe rollback and
 * will be dropped in a later release once no code reads them.
 */
class Version001500Date20260723090000 extends SimpleMigrationStep {

	public function __construct(
		private readonly IDBConnection $db,
	) {
	}

	public function name(): string {
		return 'Schema v0.15.0 (Preise mit 4 Nachkommastellen)';
	}

	public function description(): string {
		return 'Add unit_price_e4 / default_price_e4 (ten-thousandths of a euro) and backfill from the cent columns.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice_item')) {
			$table = $schema->getTable('rechnungswerk_invoice_item');
			if (!$table->hasColumn('unit_price_e4')) {
				$table->addColumn('unit_price_e4', Types::BIGINT, ['notnull' => true, 'default' => 0]);
			}
		}
		if ($schema->hasTable('rechnungswerk_product')) {
			$table = $schema->getTable('rechnungswerk_product');
			if (!$table->hasColumn('default_price_e4')) {
				$table->addColumn('default_price_e4', Types::BIGINT, ['notnull' => true, 'default' => 0]);
			}
		}

		return $schema;
	}

	#[\Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
		// Backfill the ten-thousandths columns from the existing cent values
		// (1/100 € -> 1/10000 €, i.e. × 100). Only touch rows not yet migrated so
		// a re-run is harmless.
		$items = $this->db->getQueryBuilder();
		$items->update('rechnungswerk_invoice_item')
			->set('unit_price_e4', $items->createFunction('unit_price_cents * 100'))
			->where($items->expr()->eq('unit_price_e4', $items->createNamedParameter(0, IQueryBuilder::PARAM_INT)))
			->andWhere($items->expr()->neq('unit_price_cents', $items->createNamedParameter(0, IQueryBuilder::PARAM_INT)));
		$n1 = $items->executeStatement();

		$products = $this->db->getQueryBuilder();
		$products->update('rechnungswerk_product')
			->set('default_price_e4', $products->createFunction('default_price_cents * 100'))
			->where($products->expr()->eq('default_price_e4', $products->createNamedParameter(0, IQueryBuilder::PARAM_INT)))
			->andWhere($products->expr()->neq('default_price_cents', $products->createNamedParameter(0, IQueryBuilder::PARAM_INT)));
		$n2 = $products->executeStatement();

		if ($n1 > 0 || $n2 > 0) {
			$output->info(sprintf('Preise: %d Positionen und %d Produkte auf 4-stellige Preise migriert.', $n1, $n2));
		}
	}
}
