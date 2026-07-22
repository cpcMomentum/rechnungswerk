<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCA\Rechnungswerk\Db\TextSnippet;
use OCP\DB\ISchemaWrapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\Types;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Text snippet library (#126/#141): a named catalog of reusable opening and
 * closing texts, kept separately per document type so quotes can differ from
 * invoices. Replaces the single greeting_default/intro_default/closing_default
 * fields on the settings row — those three values are migrated into default
 * snippets for BOTH document types so existing behaviour is preserved (invoices
 * keep their exact text; quotes start from the same wording and can then be
 * differentiated). The old settings columns are left in place for now and will
 * be dropped in a later release once no code reads them.
 *
 * Also adds settings.small_business_note: the configurable §19 UStG hint printed
 * on invoices when the small-business switch is on (#141).
 */
class Version001400Date20260722120000 extends SimpleMigrationStep {

	public function __construct(
		private readonly IDBConnection $db,
	) {
	}

	public function name(): string {
		return 'Schema v0.14.0 (Textbausteine)';
	}

	public function description(): string {
		return 'Add rechnungswerk_text_snippet catalog and settings.small_business_note; migrate default texts into snippets.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_text_snippet')) {
			$table = $schema->createTable('rechnungswerk_text_snippet');
			$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20]);
			$table->addColumn('owner_user_id', Types::STRING, ['notnull' => true, 'length' => 64]);
			$table->addColumn('doc_type', Types::STRING, ['notnull' => true, 'length' => 16, 'default' => 'invoice']);
			$table->addColumn('slot', Types::STRING, ['notnull' => true, 'length' => 16, 'default' => 'opening']);
			$table->addColumn('label', Types::STRING, ['notnull' => true, 'length' => 255]);
			$table->addColumn('content', Types::TEXT, ['notnull' => false]);
			$table->addColumn('is_default', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
			$table->addColumn('sort_order', Types::INTEGER, ['notnull' => true, 'default' => 0]);
			$table->addColumn('created_at', Types::DATETIME, ['notnull' => true]);
			$table->addColumn('updated_at', Types::DATETIME, ['notnull' => true]);
			$table->setPrimaryKey(['id']);
			$table->addIndex(['doc_type', 'slot'], 'rw_snippet_type_slot');
		}

		if ($schema->hasTable('rechnungswerk_settings')) {
			$settings = $schema->getTable('rechnungswerk_settings');
			if (!$settings->hasColumn('small_business_note')) {
				$settings->addColumn('small_business_note', Types::TEXT, ['notnull' => false, 'default' => null]);
			}
		}

		return $schema;
	}

	#[\Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
		// Only seed on the very first run — never duplicate snippets on a re-run.
		$count = $this->db->getQueryBuilder();
		$count->select($count->func()->count('*', 'cnt'))
			->from('rechnungswerk_text_snippet');
		$result = $count->executeQuery();
		$existing = (int)($result->fetchOne() ?: 0);
		$result->closeCursor();
		if ($existing > 0) {
			return;
		}

		$select = $this->db->getQueryBuilder();
		$select->select('owner_user_id', 'greeting_default', 'intro_default', 'closing_default')
			->from('rechnungswerk_settings');
		$rows = $select->executeQuery();
		$now = (new \DateTime())->format('Y-m-d H:i:s');
		$seeded = 0;
		while ($row = $rows->fetch()) {
			$owner = (string)($row['owner_user_id'] ?? '');
			if ($owner === '') {
				continue;
			}
			$opening = implode("\n\n", array_filter([
				trim((string)($row['greeting_default'] ?? '')),
				trim((string)($row['intro_default'] ?? '')),
			], static fn (string $p): bool => $p !== ''));
			$closing = trim((string)($row['closing_default'] ?? ''));

			// Descriptive default names per document type + slot, so the migrated
			// snippet does not just read "Standard" next to the "Standard" badge.
			$labels = [
				TextSnippet::DOC_TYPE_INVOICE => [
					TextSnippet::SLOT_OPENING => 'Standard Rechnungseinleitung',
					TextSnippet::SLOT_CLOSING => 'Standard Rechnungsschluss',
				],
				TextSnippet::DOC_TYPE_QUOTE => [
					TextSnippet::SLOT_OPENING => 'Standard Angebotseinleitung',
					TextSnippet::SLOT_CLOSING => 'Standard Angebotsschluss',
				],
			];
			foreach (TextSnippet::DOC_TYPES as $docType) {
				if ($opening !== '') {
					$this->insertSnippet($owner, $docType, TextSnippet::SLOT_OPENING, $labels[$docType][TextSnippet::SLOT_OPENING], $opening, $now);
					$seeded++;
				}
				if ($closing !== '') {
					$this->insertSnippet($owner, $docType, TextSnippet::SLOT_CLOSING, $labels[$docType][TextSnippet::SLOT_CLOSING], $closing, $now);
					$seeded++;
				}
			}
		}
		$rows->closeCursor();
		if ($seeded > 0) {
			$output->info(sprintf('Textbausteine: %d Standard-Vorlage(n) aus den bisherigen Standardtexten übernommen.', $seeded));
		}
	}

	private function insertSnippet(string $owner, string $docType, string $slot, string $label, string $content, string $now): void {
		$insert = $this->db->getQueryBuilder();
		$insert->insert('rechnungswerk_text_snippet')
			->values([
				'owner_user_id' => $insert->createNamedParameter($owner),
				'doc_type' => $insert->createNamedParameter($docType),
				'slot' => $insert->createNamedParameter($slot),
				'label' => $insert->createNamedParameter($label),
				'content' => $insert->createNamedParameter($content),
				'is_default' => $insert->createNamedParameter(1, IQueryBuilder::PARAM_INT),
				'sort_order' => $insert->createNamedParameter(0, IQueryBuilder::PARAM_INT),
				'created_at' => $insert->createNamedParameter($now),
				'updated_at' => $insert->createNamedParameter($now),
			]);
		$insert->executeStatement();
	}
}
