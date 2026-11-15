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

/** Nur der SHA-256-Hash des Klartexts wird gespeichert; Widerruf behaelt die History. */
class Version002100Date20261013100000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.21.0 (API-Schluessel)';
	}

	public function description(): string {
		return 'Create rechnungswerk_api_keys for machine access to the REST API.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_api_keys')) {
			return null;
		}

		$table = $schema->createTable('rechnungswerk_api_keys');
		$table->addColumn('id', Types::BIGINT, [
			'autoincrement' => true,
			'notnull' => true,
		]);
		$table->addColumn('owner_id', Types::STRING, [
			'length' => 64,
			'notnull' => true,
		]);
		$table->addColumn('name', Types::STRING, [
			'length' => 64,
			'notnull' => true,
		]);
		$table->addColumn('key_prefix', Types::STRING, [
			'length' => 12,
			'notnull' => true,
		]);
		$table->addColumn('key_hash', Types::STRING, [
			'length' => 64,
			'notnull' => true,
		]);
		$table->addColumn('scopes', Types::TEXT, [
			'notnull' => false,
			'default' => null,
		]);
		$table->addColumn('created_at', Types::INTEGER, [
			'notnull' => true,
			'default' => 0,
		]);
		$table->addColumn('last_used_at', Types::INTEGER, [
			'notnull' => false,
			'default' => null,
		]);
		$table->addColumn('revoked_at', Types::INTEGER, [
			'notnull' => false,
			'default' => null,
		]);
		$table->addColumn('rl_window_start', Types::INTEGER, [
			'notnull' => false,
			'default' => null,
		]);
		$table->addColumn('rl_hits', Types::INTEGER, [
			'notnull' => true,
			'default' => 0,
		]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['key_prefix'], 'rw_api_keys_prefix');
		$table->addIndex(['owner_id'], 'rw_api_keys_owner');

		return $schema;
	}
}
