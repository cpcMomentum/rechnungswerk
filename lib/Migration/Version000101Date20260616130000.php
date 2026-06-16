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
 * Adds payment-term fields to the invoice table (Zahlungsbedingungen).
 */
class Version000101Date20260616130000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.1.1 (Zahlungsbedingungen)';
	}

	public function description(): string {
		return 'Add payment_term_days, due_date and discount_terms to the invoice table.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_invoice')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_invoice');

		if (!$table->hasColumn('payment_term_days')) {
			$table->addColumn('payment_term_days', Types::INTEGER, ['notnull' => false]);
		}
		if (!$table->hasColumn('due_date')) {
			$table->addColumn('due_date', Types::DATE, ['notnull' => false]);
		}
		if (!$table->hasColumn('discount_terms')) {
			$table->addColumn('discount_terms', Types::STRING, ['notnull' => false, 'length' => 255]);
		}

		return $schema;
	}
}
