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
 * Adresszusatz beim Kunden (#304).
 *
 * Eine freie Zeile zwischen Firmenname und Strasse: „z. Hd. Frau Meyer",
 * „Gebaeude B", „c/o ...". EN16931 sieht dafuer eigene Adresszeilen vor
 * (BT-50/51/163), der Zusatz muss also nicht mit der Strasse verklebt werden.
 *
 * Zwei Spalten, nicht eine: Der Wert am Kunden ist der gepflegte Stammdatensatz,
 * der Wert an der Rechnung der beim Festschreiben eingefrorene Stand (#181).
 * Aendert der Kunde spaeter seine Anschrift, darf sich ein festgeschriebener
 * Beleg nicht rueckwirkend mitaendern.
 *
 * Beide Spalten sind nullable ohne Vorgabewert: Bestandszeilen bleiben leer, und
 * eine leere Zeile erzeugt weder im PDF noch im XML eine Luecke (siehe
 * ZugferdService). Kein NOT NULL, damit die Migration auf jedem unterstuetzten
 * Datenbanksystem ohne Tabellen-Neuschreiben durchlaeuft.
 */
class Version002000Date20260921170000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.20.0 (Adresszusatz beim Kunden)';
	}

	public function description(): string {
		return 'Add rechnungswerk_customer.address_addition and rechnungswerk_invoice.recipient_address_addition for the extra address line (#304).';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();
		$geaendert = false;

		if ($schema->hasTable('rechnungswerk_customer')) {
			$table = $schema->getTable('rechnungswerk_customer');
			if (!$table->hasColumn('address_addition')) {
				$table->addColumn('address_addition', Types::STRING, [
					'notnull' => false,
					'length' => 255,
					'default' => null,
				]);
				$geaendert = true;
			}
		}

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('recipient_address_addition')) {
				$table->addColumn('recipient_address_addition', Types::STRING, [
					'notnull' => false,
					'length' => 255,
					'default' => null,
				]);
				$geaendert = true;
			}
		}

		return $geaendert ? $schema : null;
	}
}
