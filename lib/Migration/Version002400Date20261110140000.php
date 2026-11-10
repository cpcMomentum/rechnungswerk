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

class Version002400Date20261110140000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.24.0 (API-Entwürfe)';
	}

	public function description(): string {
		return 'Adds api_key_id to rechnungswerk_invoice so a key can delete only the drafts it created.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('rechnungswerk_invoice');
		if ($table->hasColumn('api_key_id')) {
			return null;
		}
		$table->addColumn('api_key_id', Types::BIGINT, [
			'notnull' => false,
			'default' => null,
		]);

		return $schema;
	}
}
