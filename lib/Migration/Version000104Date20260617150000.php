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
 * Adds the dedicated SMTP server fields to the (central) settings table.
 * The password is stored encrypted (OCP\Security\ICrypto), never in clear.
 */
class Version000104Date20260617150000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.1.4 (eigenes SMTP-Konto)';
	}

	public function description(): string {
		return 'Add smtp_host/port/security/user/password to the settings table.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_settings')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_settings');

		if (!$table->hasColumn('smtp_host')) {
			$table->addColumn('smtp_host', Types::STRING, ['notnull' => false, 'length' => 255]);
		}
		if (!$table->hasColumn('smtp_port')) {
			$table->addColumn('smtp_port', Types::INTEGER, ['notnull' => false]);
		}
		if (!$table->hasColumn('smtp_security')) {
			$table->addColumn('smtp_security', Types::STRING, ['notnull' => false, 'length' => 16]);
		}
		if (!$table->hasColumn('smtp_user')) {
			$table->addColumn('smtp_user', Types::STRING, ['notnull' => false, 'length' => 255]);
		}
		if (!$table->hasColumn('smtp_password')) {
			$table->addColumn('smtp_password', Types::TEXT, ['notnull' => false]);
		}

		return $schema;
	}
}
