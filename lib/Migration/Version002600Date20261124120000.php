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

class Version002600Date20261124120000 extends SimpleMigrationStep {

	public const INDEX = 'rw_invoice_idem_unique';

	public function name(): string {
		return 'Schema v0.26.0 (Idempotenzschluessel)';
	}

	public function description(): string {
		return 'Adds the hashed idempotency key of POST /invoices to rechnungswerk_invoice.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('rechnungswerk_invoice');
		if (!$table->hasColumn('idempotency_key')) {
			$table->addColumn('idempotency_key', Types::STRING, [
				'notnull' => false,
				'length' => 64,
				'default' => null,
			]);
		}
		if (!$table->hasIndex(self::INDEX)) {
			$table->addUniqueIndex(['idempotency_key'], self::INDEX);
		}

		return $schema;
	}
}
