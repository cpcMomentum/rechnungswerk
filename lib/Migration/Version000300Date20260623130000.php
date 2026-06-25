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
 * Per-invoice seller contact override (BG-6). Resolution order at render time:
 * invoice override → issuing user's Nextcloud account → central company contact.
 */
class Version000300Date20260623130000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.3.0 (seller contact override)';
	}

	public function description(): string {
		return 'Add per-invoice seller contact person/phone/email columns.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('seller_contact_person')) {
				$table->addColumn('seller_contact_person', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
			if (!$table->hasColumn('seller_contact_phone')) {
				$table->addColumn('seller_contact_phone', Types::STRING, ['notnull' => false, 'length' => 64]);
			}
			if (!$table->hasColumn('seller_contact_email')) {
				$table->addColumn('seller_contact_email', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
		}

		return $schema;
	}
}
