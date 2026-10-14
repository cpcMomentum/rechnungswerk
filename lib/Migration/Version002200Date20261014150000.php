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

class Version002200Date20261014150000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.22.0 (Rate-Limit pro API-Schluessel)';
	}

	public function description(): string {
		return 'Adds the per-key rate limit to rechnungswerk_api_keys.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$table = $schema->getTable('rechnungswerk_api_keys');
		if (!$table->hasColumn('rate_limit')) {
			$table->addColumn('rate_limit', Types::INTEGER, [
				'notnull' => false,
				'default' => null,
			]);
		}

		return $schema;
	}
}
