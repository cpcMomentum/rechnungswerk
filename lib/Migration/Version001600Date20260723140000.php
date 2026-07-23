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
 * Free-text unit labels (#153): a human-readable unit name (e.g. "Personen",
 * "Sitzung") for cases without a matching UN/ECE standard code. The label is
 * shown in the editor and PDF; the embedded EN16931 XML keeps a valid generic
 * unit code (C62) when a free-text label is used, so the e-invoice stays valid.
 *
 * The standard unit_code column stays authoritative for the XML; unit_label is
 * an optional display-only override (default_unit_label on the product template).
 */
class Version001600Date20260723140000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.16.0 (Freitext-Einheiten)';
	}

	public function description(): string {
		return 'Add optional free-text unit labels (invoice_item.unit_label, product.default_unit_label).';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice_item')) {
			$table = $schema->getTable('rechnungswerk_invoice_item');
			if (!$table->hasColumn('unit_label')) {
				$table->addColumn('unit_label', Types::STRING, ['notnull' => false, 'length' => 64, 'default' => null]);
			}
		}
		if ($schema->hasTable('rechnungswerk_product')) {
			$table = $schema->getTable('rechnungswerk_product');
			if (!$table->hasColumn('default_unit_label')) {
				$table->addColumn('default_unit_label', Types::STRING, ['notnull' => false, 'length' => 64, 'default' => null]);
			}
		}

		return $schema;
	}
}
