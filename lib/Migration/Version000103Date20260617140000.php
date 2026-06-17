<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCA\Rechnungswerk\Service\SettingsService;
use OCP\DB\ISchemaWrapper;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * It. 6: collapse the per-owner settings rows into a single central company
 * settings row (owner_user_id = SettingsService::COMPANY_KEY). The oldest
 * existing row wins and becomes the company config; any other rows are dropped.
 * Invoices/products keep their owner_user_id (now meaning "created by").
 */
class Version000103Date20260617140000 extends SimpleMigrationStep {

	private const TABLE = 'rechnungswerk_settings';

	public function __construct(
		private readonly IDBConnection $db,
	) {
	}

	public function name(): string {
		return 'Schema v0.1.2 → zentrale Firmen-Settings';
	}

	public function description(): string {
		return 'Collapse per-owner settings into one central company settings row.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		// No schema change — data migration only (postSchemaChange).
		return null;
	}

	#[\Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
		$companyKey = SettingsService::COMPANY_KEY;

		// Already migrated?
		$check = $this->db->getQueryBuilder();
		$check->select('id')->from(self::TABLE)
			->where($check->expr()->eq('owner_user_id', $check->createNamedParameter($companyKey)))
			->setMaxResults(1);
		$result = $check->executeQuery();
		$exists = $result->fetchOne() !== false;
		$result->closeCursor();
		if ($exists) {
			return;
		}

		// Oldest row becomes the company config.
		$pick = $this->db->getQueryBuilder();
		$pick->select('id')->from(self::TABLE)->orderBy('id', 'ASC')->setMaxResults(1);
		$result = $pick->executeQuery();
		$keepId = $result->fetchOne();
		$result->closeCursor();
		if ($keepId === false) {
			return; // no settings yet — getCompany() will create the row lazily
		}

		$promote = $this->db->getQueryBuilder();
		$promote->update(self::TABLE)
			->set('owner_user_id', $promote->createNamedParameter($companyKey))
			->where($promote->expr()->eq('id', $promote->createNamedParameter((int)$keepId)));
		$promote->executeStatement();

		$drop = $this->db->getQueryBuilder();
		$drop->delete(self::TABLE)
			->where($drop->expr()->neq('owner_user_id', $drop->createNamedParameter($companyKey)));
		$drop->executeStatement();

		$output->info('Rechnungswerk: zentrale Firmen-Settings-Zeile gesetzt (id ' . (int)$keepId . ').');
	}
}
