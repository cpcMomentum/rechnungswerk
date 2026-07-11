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
 * Girocode (#79): opt-in EPC-QR (EPC069-12) on the invoice PDF next to the
 * bank details. Default off — the admin enables it consciously.
 */
class Version001000Date20260711130000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v1.0.0 (Girocode)';
	}

	public function description(): string {
		return 'Add rechnungswerk_settings.girocode_enabled.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');
		if (!$table->hasColumn('girocode_enabled')) {
			$table->addColumn('girocode_enabled', Types::SMALLINT, [
				'notnull' => true,
				'default' => 0,
			]);
		}

		return $schema;
	}
}
