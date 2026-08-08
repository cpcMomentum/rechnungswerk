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
 * Eingefrorene Belege (#181, Schritt 2).
 *
 * Der beim Festschreiben erzeugte Beleg wird abgelegt und ab dann ausgeliefert,
 * statt bei jedem Zugriff neu zu entstehen. Diese Spalten halten fest, was
 * dazugehoert:
 *
 *   document_sha256     Pruefsumme des abgelegten PDF. Ohne sie waere
 *                       "unveraenderlich" eine Behauptung statt einer
 *                       nachweisbaren Eigenschaft.
 *   document_file_name  Der Dateiname zum Zeitpunkt des Festschreibens. Das
 *                       Namensschema steht in den Einstellungen; aendert man es,
 *                       hiesse der Download einer alten Rechnung sonst anders
 *                       als das, was der Kunde bekommen hat.
 *   document_frozen_at  Wann eingefroren wurde. Beantwortet die Frage, ob ein
 *                       Beleg im Original vorliegt oder nachtraeglich erzeugt
 *                       wurde (Schritt 3 zieht den Bestand nach).
 *
 * Die Datei selbst liegt im app-eigenen Speicher, siehe DocumentStore.
 */
class Version001800Date20260808130000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.18.0 (eingefrorene Belege)';
	}

	public function description(): string {
		return 'Add rechnungswerk_invoice.document_sha256/document_file_name/document_frozen_at for frozen invoice documents.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('rechnungswerk_invoice')) {
			return null;
		}
		$table = $schema->getTable('rechnungswerk_invoice');

		if (!$table->hasColumn('document_sha256')) {
			$table->addColumn('document_sha256', Types::STRING, ['notnull' => false, 'length' => 64, 'default' => null]);
		}
		if (!$table->hasColumn('document_file_name')) {
			$table->addColumn('document_file_name', Types::STRING, ['notnull' => false, 'length' => 255, 'default' => null]);
		}
		if (!$table->hasColumn('document_frozen_at')) {
			$table->addColumn('document_frozen_at', Types::DATETIME, ['notnull' => false, 'default' => null]);
		}

		return $schema;
	}
}
