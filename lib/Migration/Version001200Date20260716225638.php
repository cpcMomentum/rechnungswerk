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
 * Payment tracking (#117): a nullable payment date on the invoice (set = paid,
 * null = open; overdue is derived from the due date) and a global default
 * payment term in the settings that pre-fills new invoices.
 */
class Version001200Date20260716225638 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.12.0 (Zahlungsstatus)';
	}

	public function description(): string {
		return 'Add rechnungswerk_invoice.paid_at and rechnungswerk_settings.default_payment_term_days.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('paid_at')) {
				$table->addColumn('paid_at', Types::DATETIME, ['notnull' => false, 'default' => null]);
			}
		}

		if ($schema->hasTable('rechnungswerk_settings')) {
			$settings = $schema->getTable('rechnungswerk_settings');
			if (!$settings->hasColumn('default_payment_term_days')) {
				$settings->addColumn('default_payment_term_days', Types::INTEGER, ['notnull' => false, 'default' => null]);
			}
		}

		return $schema;
	}
}
