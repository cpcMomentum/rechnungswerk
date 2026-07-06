<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\InvoiceCalculator;
use OCP\DB\ISchemaWrapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\Types;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Nummernkreis-Modus (#39): number_reset_mode ('yearly' | 'continuous') on the
 * central settings row. Default 'yearly' keeps the existing per-year reset
 * behaviour for anyone already numbering with a year component.
 *
 * Reconciliation: a pre-#39 install could legitimately have a year-less format
 * (e.g. 'RE-{####}'). Leaving such a row on the 'yearly' default would repeat
 * the number every Jan 1 (unique-index collision). Those rows are switched to
 * 'continuous', which is collision-free with a year-less format.
 */
class Version000700Date20260706120000 extends SimpleMigrationStep {

	public function __construct(
		private readonly IDBConnection $db,
	) {
	}

	public function name(): string {
		return 'Schema v0.7.0 (Nummernkreis-Modus)';
	}

	public function description(): string {
		return 'Add rechnungswerk_settings.number_reset_mode (yearly|continuous).';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');
		if (!$table->hasColumn('number_reset_mode')) {
			$table->addColumn('number_reset_mode', Types::STRING, [
				'notnull' => true,
				'length' => 16,
				'default' => 'yearly',
			]);
		}

		return $schema;
	}

	#[\Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
		// Switch legacy year-less-format rows to 'continuous' so they never hit a
		// Jan-1 reset-to-1 collision under the freshly added default 'yearly'.
		$select = $this->db->getQueryBuilder();
		$select->select('id', 'number_format')
			->from('rechnungswerk_settings');
		$result = $select->executeQuery();
		$reconciled = 0;
		while ($row = $result->fetch()) {
			$format = (string)($row['number_format'] ?? '');
			if ($format === '' || InvoiceCalculator::formatHasYear($format)) {
				continue;
			}
			$update = $this->db->getQueryBuilder();
			$update->update('rechnungswerk_settings')
				->set('number_reset_mode', $update->createNamedParameter(Settings::RESET_MODE_CONTINUOUS))
				->where($update->expr()->eq('id', $update->createNamedParameter((int)$row['id'], IQueryBuilder::PARAM_INT)));
			$update->executeStatement();
			$reconciled++;
		}
		$result->closeCursor();
		if ($reconciled > 0) {
			$output->info(sprintf('Nummernkreis: %d Zeile(n) mit jahreslosem Format auf "fortlaufend" gestellt.', $reconciled));
		}
	}
}
