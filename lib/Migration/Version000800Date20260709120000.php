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
 * Konfigurierbare Dateinamen (#37): file_name_format on the central settings
 * row. Default '{nummer}' keeps the existing behaviour (number.pdf, fallback
 * rechnung-{id}.pdf) for every existing install.
 */
class Version000800Date20260709120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.8.0 (Dateinamen-Schema)';
	}

	public function description(): string {
		return 'Add rechnungswerk_settings.file_name_format.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');
		if (!$table->hasColumn('file_name_format')) {
			$table->addColumn('file_name_format', Types::STRING, [
				'notnull' => true,
				'length' => 128,
				'default' => '{nummer}',
			]);
		}

		return $schema;
	}
}
