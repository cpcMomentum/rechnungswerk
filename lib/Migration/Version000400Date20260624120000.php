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
 * DATEV confirmation feedback channel (#36): per-invoice DATEV status fed from
 * the upload-mail confirmations, plus the IMAP account used to read them.
 */
class Version000400Date20260624120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.4.0 (DATEV confirmation channel)';
	}

	public function description(): string {
		return 'Add per-invoice DATEV status + message-id and IMAP settings.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('datev_message_id')) {
				$table->addColumn('datev_message_id', Types::STRING, ['notnull' => false, 'length' => 512]);
			}
			if (!$table->hasColumn('datev_status')) {
				// '' = not handed to DATEV; pending | confirmed | failed | unknown
				$table->addColumn('datev_status', Types::STRING, ['notnull' => false, 'length' => 16]);
			}
			if (!$table->hasColumn('datev_status_at')) {
				$table->addColumn('datev_status_at', Types::DATETIME, ['notnull' => false]);
			}
			if (!$table->hasColumn('datev_response_raw')) {
				$table->addColumn('datev_response_raw', Types::TEXT, ['notnull' => false]);
			}
		}

		if ($schema->hasTable('rechnungswerk_settings')) {
			$table = $schema->getTable('rechnungswerk_settings');
			if (!$table->hasColumn('imap_host')) {
				$table->addColumn('imap_host', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
			if (!$table->hasColumn('imap_port')) {
				$table->addColumn('imap_port', Types::INTEGER, ['notnull' => false]);
			}
			if (!$table->hasColumn('imap_security')) {
				$table->addColumn('imap_security', Types::STRING, ['notnull' => false, 'length' => 16]);
			}
			if (!$table->hasColumn('imap_user')) {
				$table->addColumn('imap_user', Types::STRING, ['notnull' => false, 'length' => 255]);
			}
			if (!$table->hasColumn('imap_password')) {
				$table->addColumn('imap_password', Types::TEXT, ['notnull' => false]);
			}
		}

		return $schema;
	}
}
