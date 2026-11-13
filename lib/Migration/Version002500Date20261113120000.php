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

class Version002500Date20261113120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.25.0 (Firmen-Zeitzone)';
	}

	public function description(): string {
		return 'Adds the company timezone (#405) to rechnungswerk_settings. Empty means automatic.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('rechnungswerk_settings');
		if (!$table->hasColumn('timezone')) {
			$table->addColumn('timezone', Types::STRING, [
				'notnull' => false,
				'length' => 64,
				'default' => null,
			]);
		}

		return $schema;
	}
}
