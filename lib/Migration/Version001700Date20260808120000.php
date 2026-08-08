<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\DB\Types;
use OCP\IDBConnection;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Kleinunternehmer-Fall an der Rechnung festhalten (#181, Schritt 1).
 *
 * Bisher las die Beleg-Erzeugung den Schalter aus den AKTUELLEN Einstellungen.
 * Wer von der Regelbesteuerung zur Kleinunternehmerregelung wechselt, aenderte
 * damit rueckwirkend jede bereits festgeschriebene Rechnung: gemessen wurde eine
 * Rechnung ueber 100,00 EUR netto mit 19 %, die nach dem Umlegen des Schalters
 * mit CategoryCode E und 0,00 % rendert, waehrend TaxTotalAmount weiter 19,00
 * ausweist. Eine E-Rechnung mit Kategorie E und Steuerbetrag ungleich null
 * verletzt EN16931 — die Rechnung war beim Festschreiben gueltig und ist es
 * danach nicht mehr.
 *
 * Der Schalter gehoert deshalb an die Rechnung, nicht an die Einstellungen.
 *
 * SMALLINT statt BOOLEAN nach Projektvorgabe (CLAUDE.md).
 */
class Version001700Date20260808120000 extends SimpleMigrationStep {

	public function __construct(
		private readonly IDBConnection $db,
	) {
	}

	public function name(): string {
		return 'Schema v0.17.0 (Steuerfall an der Rechnung)';
	}

	public function description(): string {
		return 'Add rechnungswerk_invoice.small_business so the tax treatment stops following the current settings.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_invoice')) {
			$table = $schema->getTable('rechnungswerk_invoice');
			if (!$table->hasColumn('small_business')) {
				$table->addColumn('small_business', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
			}
		}

		return $schema;
	}

	/**
	 * Bestandsrechnungen befuellen.
	 *
	 * Der Wert laesst sich fuer die entscheidenden Faelle aus dem Datensatz
	 * ableiten, und das ist besser als ihn aus den heutigen Einstellungen zu
	 * uebernehmen — genau die sind ja der Grund fuer das Problem:
	 *
	 *   1. Weist die Rechnung Steuer aus (Betrag ungleich null), war es keine
	 *      Kleinunternehmer-Rechnung. Das ist die Richtung, aus der die
	 *      ungueltigen XML entstehen, und sie ist eindeutig.
	 *   2. Traegt sie einen besonderen Steuerfall (Reverse Charge, innergemein-
	 *      schaftlich, Ausfuhr), ist sie aus einem anderen Grund steuerfrei.
	 *   3. Bleibt sie ohne Steuer und ohne Sonderfall, ist der Fall nicht
	 *      unterscheidbar von einer echten 0-%-Position. Dann gilt der heutige
	 *      Stand aus den Einstellungen — das aendert das Verhalten fuer diese
	 *      Rechnungen nicht, und mehr ist aus dem Datensatz nicht zu holen.
	 */
	#[\Override]
	public function postSchemaChange(IOutput $output, Closure $schemaClosure, array $options): void {
		// Bewusst zeilenweise in PHP statt per SQL-Ausdruck: die Steueraufteilung
		// liegt als JSON in einer Textspalte, und SQL-LIKE kann sie nicht
		// zuverlaessig lesen (Zeichenklassen gibt es dort nicht). Die Zahl der
		// Rechnungen ist ueberschaubar, Genauigkeit geht hier vor Eleganz.
		$current = $this->currentSettingsValue();

		$select = $this->db->getQueryBuilder();
		$select->select('id', 'special_tax_case', 'tax_breakdown')->from('rechnungswerk_invoice');
		$result = $select->executeQuery();

		$smallBusinessIds = [];
		$total = 0;
		while ($row = $result->fetch()) {
			$total++;
			if (self::decideSmallBusiness($row, $current)) {
				$smallBusinessIds[] = (int)$row['id'];
			}
		}
		$result->closeCursor();

		// Die Spalte steht bereits auf 0 (Default), gesetzt wird nur der Rest.
		foreach (array_chunk($smallBusinessIds, 500) as $chunk) {
			$qb = $this->db->getQueryBuilder();
			$qb->update('rechnungswerk_invoice')
				->set('small_business', $qb->createNamedParameter(1, IQueryBuilder::PARAM_INT))
				->where($qb->expr()->in('id', $qb->createNamedParameter($chunk, IQueryBuilder::PARAM_INT_ARRAY)));
			$qb->executeStatement();
		}

		$output->info(sprintf(
			'rechnungswerk: Steuerfall an %d von %d Rechnungen festgeschrieben (§19: %d).',
			$total,
			$total,
			count($smallBusinessIds),
		));
	}

	/** Der heute in den Einstellungen gesetzte Wert, als Rueckfall fuer den nicht entscheidbaren Fall. */
	private function currentSettingsValue(): int {
		$qb = $this->db->getQueryBuilder();
		$qb->select('small_business')->from('rechnungswerk_settings')->setMaxResults(1);
		$result = $qb->executeQuery();
		$value = $result->fetchOne();
		$result->closeCursor();
		return $value === false ? 0 : (int)$value;
	}

	/**
	 * Oeffentlich und statisch, damit die Regel geprueft werden kann, ohne die
	 * Migration laufen zu lassen — NC fuehrt eine abgehakte Migrationsnummer
	 * nicht erneut aus, die Nachbefuellung liesse sich sonst nie testen.
	 *
	 * @param array<string, mixed> $row
	 */
	public static function decideSmallBusiness(array $row, int $current): bool {
		// 2. Ein besonderer Steuerfall ist aus anderem Grund steuerfrei.
		if (($row['special_tax_case'] ?? null) !== null && (string)$row['special_tax_case'] !== '') {
			return false;
		}
		// 1. Ausgewiesene Steuer schliesst §19 aus. Eindeutig, und genau die
		//    Richtung, aus der die ungueltigen XML entstehen.
		$breakdown = json_decode((string)($row['tax_breakdown'] ?? '[]'), true);
		if (is_array($breakdown)) {
			foreach ($breakdown as $group) {
				if (is_array($group) && (int)($group['taxCents'] ?? 0) !== 0) {
					return false;
				}
			}
		}
		// 3. Nicht entscheidbar: heutiger Stand, damit sich fuer diese Rechnungen
		//    nichts aendert.
		return $current === 1;
	}
}
