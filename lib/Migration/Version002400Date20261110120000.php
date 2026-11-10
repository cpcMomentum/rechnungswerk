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

/** Kein Fremdschlüssel auf document_id: Einträge gelöschter Entwürfe bleiben stehen. */
class Version002400Date20261110120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.24.0 (Protokoll)';
	}

	public function description(): string {
		return 'Create rechnungswerk_audit for the per-document history and the audit log.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_audit')) {
			return null;
		}

		$table = $schema->createTable('rechnungswerk_audit');
		$table->addColumn('id', Types::BIGINT, [
			'autoincrement' => true,
			'notnull' => true,
		]);
		$table->addColumn('created_at', Types::BIGINT, [
			'notnull' => true,
			'default' => 0,
		]);
		// Nullable: Vorgänge ohne angemeldeten Nutzer (occ, Hintergrundjob).
		$table->addColumn('user_id', Types::STRING, [
			'length' => 64,
			'notnull' => false,
			'default' => null,
		]);
		$table->addColumn('api_key_id', Types::BIGINT, [
			'notnull' => false,
			'default' => null,
		]);
		$table->addColumn('action', Types::STRING, [
			'length' => 32,
			'notnull' => true,
		]);
		$table->addColumn('document_id', Types::BIGINT, [
			'notnull' => true,
		]);
		$table->addColumn('document_type', Types::STRING, [
			'length' => 32,
			'notnull' => true,
		]);
		$table->addColumn('document_number', Types::STRING, [
			'length' => 64,
			'notnull' => false,
			'default' => null,
		]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['document_id'], 'rw_audit_document');
		$table->addIndex(['created_at'], 'rw_audit_created');

		return $schema;
	}
}
