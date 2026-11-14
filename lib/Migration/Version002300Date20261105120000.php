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

class Version002300Date20261105120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.23.0 (Registernummer)';
	}

	public function description(): string {
		return 'Adds the seller register number (EN 16931 BT-30) to rechnungswerk_settings.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('rechnungswerk_settings');
		if (!$table->hasColumn('register_number')) {
			$table->addColumn('register_number', Types::STRING, [
				'notnull' => false,
				'length' => 128,
				'default' => null,
			]);
		}

		return $schema;
	}
}
