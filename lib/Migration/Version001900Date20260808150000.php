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
 * Nachtraeglich eingefrorene Belege kennzeichnen (#181, Schritt 3).
 *
 * Schritt 2 friert jeden Beleg beim Festschreiben ein. Fuer den Bestand — alles,
 * was vor dieser Aenderung festgeschrieben wurde — holt ein Hintergrundauftrag
 * das nach. Diese Belege sind aber nicht dasselbe: das Original-Aussehen ist
 * bereits verloren (Spaltenbreiten aus #157, Kopfzeilenfarbe aus #171,
 * zwischenzeitlich geaenderte Firmendaten), festgehalten wird der heutige, nach
 * Schritt 1 korrigierte Stand.
 *
 * Deshalb steht am Datensatz, ob der Beleg beim Festschreiben entstand oder
 * spaeter nachgezogen wurde. Ohne diese Unterscheidung waere jeder Beleg
 * gleichermassen "eingefroren" und die Ablage behauptete mehr, als sie halten
 * kann.
 *
 * Kein Nachbefuellen hier: das Rendern von tausend PDFs im occ upgrade waeren
 * Minuten Wartungsmodus mit Abbruchrisiko. Bestandszeilen bleiben NULL, was der
 * Hintergrundauftrag als "noch nicht dran" liest.
 *
 * Dazu ein Index auf (invoice_type, status, document_frozen_at): der Auftrag
 * fragt genau diese Spalten alle fuenf Minuten ab, dauerhaft — auch wenn der
 * Bestand laengst durch ist. Ohne Index waere das ein Full-Table-Scan bei
 * jedem Lauf, fuer immer.
 */
class Version001900Date20260808150000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.19.0 (nachgezogene Belege kennzeichnen)';
	}

	public function description(): string {
		return 'Add rechnungswerk_invoice.document_backfilled and an index on (invoice_type, status, document_frozen_at) for the backfill job query (#181 step 3).';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_invoice')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_invoice');

		if (!$table->hasColumn('document_backfilled')) {
			$table->addColumn('document_backfilled', Types::SMALLINT, ['notnull' => false, 'default' => null]);
		}

		if (!$table->hasIndex('rw_invoice_backfill_pending')) {
			$table->addIndex(['invoice_type', 'status', 'document_frozen_at'], 'rw_invoice_backfill_pending');
		}

		return $schema;
	}
}
