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
 * Opt-in: move processed (confirmed) DATEV confirmation mails to Trash (#36).
 */
class Version000500Date20260624130000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.5.0 (IMAP cleanup toggle)';
	}

	public function description(): string {
		return 'Add settings.imap_cleanup flag.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_settings')) {
			$table = $schema->getTable('rechnungswerk_settings');
			if (!$table->hasColumn('imap_cleanup')) {
				$table->addColumn('imap_cleanup', Types::SMALLINT, ['notnull' => false, 'default' => 0]);
			}
		}

		return $schema;
	}
}
