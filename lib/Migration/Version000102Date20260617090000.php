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
 * Adds the DATEV auto-send toggle to the settings table.
 */
class Version000102Date20260617090000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.1.2 (DATEV-Auto-Versand)';
	}

	public function description(): string {
		return 'Add datev_auto_send toggle to the settings table.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');

		if (!$table->hasColumn('datev_auto_send')) {
			$table->addColumn('datev_auto_send', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
		}

		return $schema;
	}
}
