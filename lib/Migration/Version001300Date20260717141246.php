<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Quotes (#111): a quote is a third document type ('quote') on the existing
 * invoice table, so it only needs a few extra nullable columns — a validity
 * date ("gültig bis"), the stored outcome (accepted/rejected/converted; null =
 * open, expired is derived), a freeform ("freibleibend", §145 BGB) flag and the
 * link from a converted invoice back to its source quote. Its own number circle
 * lives in the settings table (independent counter, own format AN-{YYYY}-{####}).
 */
class Version001300Date20260717141246 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.13.0 (Angebote)';
	}

	public function description(): string {
		return 'Add quote columns to rechnungswerk_invoice and a separate quote number circle to rechnungswerk_settings.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			// "gültig bis" — the quote analogue of the invoice due date.
			if (!$table->hasColumn('valid_until')) {
				$table->addColumn('valid_until', Types::DATE, ['notnull' => false, 'default' => null]);
			}
			// Stored quote outcome: accepted / rejected / converted (null = open;
			// expired is derived from valid_until, never stored).
			if (!$table->hasColumn('quote_status')) {
				$table->addColumn('quote_status', Types::STRING, ['notnull' => false, 'length' => 16, 'default' => null]);
			}
			// Freibleibend / unverbindlich (§145 BGB) — printed as a PDF note.
			if (!$table->hasColumn('offer_freeform')) {
				$table->addColumn('offer_freeform', Types::SMALLINT, ['notnull' => false, 'default' => 0]);
			}
			// Link a converted invoice back to the quote it originated from.
			if (!$table->hasColumn('related_quote_id')) {
				$table->addColumn('related_quote_id', Types::INTEGER, ['notnull' => false, 'default' => null]);
			}
		}

		if ($schema->hasTable('rechnungswerk_settings')) {
			$settings = $schema->getTable('rechnungswerk_settings');
			// Independent quote number circle, mirroring the invoice number_* columns.
			if (!$settings->hasColumn('quote_number_format')) {
				$settings->addColumn('quote_number_format', Types::STRING, ['notnull' => false, 'length' => 64, 'default' => null]);
			}
			if (!$settings->hasColumn('quote_number_counter')) {
				$settings->addColumn('quote_number_counter', Types::INTEGER, ['notnull' => false, 'default' => 0]);
			}
			if (!$settings->hasColumn('quote_number_counter_year')) {
				$settings->addColumn('quote_number_counter_year', Types::INTEGER, ['notnull' => false, 'default' => null]);
			}
			if (!$settings->hasColumn('quote_number_reset_mode')) {
				$settings->addColumn('quote_number_reset_mode', Types::STRING, ['notnull' => false, 'length' => 16, 'default' => null]);
			}
		}

		return $schema;
	}
}
