<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCA\Rechnungswerk\Db\TextSnippet;
use OCA\Rechnungswerk\Service\SettingsService;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/** Fixed German texts, not t(): they become editable data and the language at migration time is arbitrary. */
class Version002400Date20261110160000 extends SimpleMigrationStep {

	public const DEFAULTS = [
		TextSnippet::DOC_TYPE_INVOICE => [
			TextSnippet::SLOT_OPENING => ['Standard Rechnungseinleitung', "Sehr geehrte Damen und Herren,\n\nvielen Dank für Ihren Auftrag. Hiermit erhalten Sie unsere Rechnung."],
			TextSnippet::SLOT_CLOSING => ['Standard Rechnungsschluss', "Wir danken Ihnen für die gute Zusammenarbeit.\n\nMit freundlichen Grüßen"],
		],
		TextSnippet::DOC_TYPE_QUOTE => [
			TextSnippet::SLOT_OPENING => ['Standard Angebotseinleitung', "Sehr geehrte Damen und Herren,\n\nvielen Dank für Ihre Anfrage. Gerne unterbreiten wir Ihnen unser Angebot."],
			TextSnippet::SLOT_CLOSING => ['Standard Angebotsschluss', "Wir freuen uns auf Ihre Rückmeldung.\n\nMit freundlichen Grüßen"],
		],
	];

	public function __construct(
		private readonly IDBConnection $db,
	) {
	}

	public function name(): string {
		return 'Standard-Textbausteine';
	}

	public function description(): string {
		return 'Seed default opening and closing snippets per document type when the catalog is empty.';
	}

	#[\Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
		// An instance with its own snippets keeps exactly those.
		$count = $this->db->getQueryBuilder();
		$count->select($count->func()->count('*', 'cnt'))
			->from('rechnungswerk_text_snippet');
		$result = $count->executeQuery();
		$existing = (int)($result->fetchOne() ?: 0);
		$result->closeCursor();
		if ($existing > 0) {
			return;
		}

		$now = (new \DateTime())->format('Y-m-d H:i:s');
		foreach (self::DEFAULTS as $docType => $slots) {
			foreach ($slots as $slot => [$label, $content]) {
				$insert = $this->db->getQueryBuilder();
				$insert->insert('rechnungswerk_text_snippet')
					->values([
						'owner_user_id' => $insert->createNamedParameter(SettingsService::COMPANY_KEY),
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
		$output->info('Textbausteine: 4 Standard-Bausteine angelegt.');
	}
}
