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
 * Adds contact-person fields for buyer (invoice) and seller (settings) so the
 * generated invoice can carry EN16931 BG-6 / BG-9 contact blocks.
 */
class Version000200Date20260623120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.2.0 (contact persons)';
	}

	public function description(): string {
		return 'Add buyer/seller contact-person, phone and email columns.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('recipient_contact_person')) {
				$table->addColumn('recipient_contact_person', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
			if (!$table->hasColumn('recipient_phone')) {
				$table->addColumn('recipient_phone', Types::STRING, ['notnull' => false, 'length' => 64]);
			}
		}

		if ($schema->hasTable('rechnungswerk_settings')) {
			$table = $schema->getTable('rechnungswerk_settings');
			if (!$table->hasColumn('contact_person')) {
				$table->addColumn('contact_person', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
			if (!$table->hasColumn('contact_phone')) {
				$table->addColumn('contact_phone', Types::STRING, ['notnull' => false, 'length' => 64]);
			}
			if (!$table->hasColumn('contact_email')) {
				$table->addColumn('contact_email', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
		}

		return $schema;
	}
}
