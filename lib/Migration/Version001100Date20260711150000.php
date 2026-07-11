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
 * Standard-Referenzfelder (#41): contract number (BT-12) and object/project
 * reference (BT-18) as first-class, structured invoice fields. Free-form
 * key-value custom fields are no longer pursued; the existing custom_fields
 * column becomes the carrier of the plain-text invoice notes (BT-22).
 */
class Version001100Date20260711150000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.11.0 (Referenzfelder BT-12/BT-18)';
	}

	public function description(): string {
		return 'Add rechnungswerk_invoice.contract_number and project_reference.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_invoice')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_invoice');
		if (!$table->hasColumn('contract_number')) {
			$table->addColumn('contract_number', Types::STRING, ['notnull' => false, 'length' => 255]);
		}
		if (!$table->hasColumn('project_reference')) {
			$table->addColumn('project_reference', Types::STRING, ['notnull' => false, 'length' => 255]);
		}

		return $schema;
	}
}
