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
 * Nextcloud-Ablage (#38): committed invoices can additionally be written into
 * a Nextcloud folder (team folder picked by the app admin, stored by file id
 * like the logo). archive_subfolder holds an optional placeholder pattern for
 * subfolders below the target (e.g. '{YYYY}').
 */
class Version000900Date20260711120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.9.0 (Nextcloud-Ablage)';
	}

	public function description(): string {
		return 'Add rechnungswerk_settings.archive_enabled/archive_folder_id/archive_subfolder.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');
		if (!$table->hasColumn('archive_enabled')) {
			$table->addColumn('archive_enabled', Types::SMALLINT, [
				'notnull' => true,
				'default' => 0,
			]);
		}
		if (!$table->hasColumn('archive_folder_id')) {
			$table->addColumn('archive_folder_id', Types::BIGINT, [
				'notnull' => false,
				'default' => null,
			]);
		}
		if (!$table->hasColumn('archive_subfolder')) {
			$table->addColumn('archive_subfolder', Types::STRING, [
				'notnull' => false,
				'length' => 64,
				'default' => null,
			]);
		}

		return $schema;
	}
}
