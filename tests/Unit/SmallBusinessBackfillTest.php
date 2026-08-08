<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Migration\Version001700Date20260808120000;
use PHPUnit\Framework\TestCase;

/**
 * #181, Schritt 1: die Nachbefüllung des Steuerfalls an Bestandsrechnungen.
 *
 * Getrennt geprüft, weil Nextcloud eine abgehakte Migrationsnummer nie erneut
 * ausführt — die Regel liesse sich sonst nach dem ersten Lauf gar nicht mehr
 * überprüfen, und ein Fehler darin würde Bestandsrechnungen dauerhaft falsch
 * einordnen.
 */
class SmallBusinessBackfillTest extends TestCase {

	private static function row(?string $specialTaxCase, array $breakdown): array {
		return [
			'id' => 1,
			'special_tax_case' => $specialTaxCase,
			'tax_breakdown' => json_encode($breakdown),
		];
	}

	/**
	 * Regel 1: Ausgewiesene Steuer schliesst §19 aus. Das ist die Richtung, aus
	 * der die ungültigen XML entstanden, und sie ist eindeutig — unabhängig
	 * davon, was heute in den Einstellungen steht.
	 */
	public function testInvoiceWithTaxIsNeverSmallBusiness(): void {
		$row = self::row(null, [['rateBp' => 1900, 'netCents' => 10000, 'taxCents' => 1900]]);

		$this->assertFalse(Version001700Date20260808120000::decideSmallBusiness($row, 0));
		$this->assertFalse(
			Version001700Date20260808120000::decideSmallBusiness($row, 1),
			'auch wenn heute Kleinunternehmer eingestellt ist: diese Rechnung wies Steuer aus',
		);
	}

	public function testMixedRatesWithAnyTaxAreNeverSmallBusiness(): void {
		$row = self::row(null, [
			['rateBp' => 0, 'netCents' => 5000, 'taxCents' => 0],
			['rateBp' => 700, 'netCents' => 10000, 'taxCents' => 700],
		]);

		$this->assertFalse(Version001700Date20260808120000::decideSmallBusiness($row, 1));
	}

	/** Regel 2: Ein besonderer Steuerfall ist aus anderem Grund steuerfrei. */
	public function testSpecialTaxCaseIsNeverSmallBusiness(): void {
		foreach (['reverse_charge', 'intra_community', 'export'] as $case) {
			$row = self::row($case, [['rateBp' => 0, 'netCents' => 10000, 'taxCents' => 0]]);
			$this->assertFalse(
				Version001700Date20260808120000::decideSmallBusiness($row, 1),
				$case . ' ist steuerfrei, aber nicht wegen §19',
			);
		}
	}

	/**
	 * Regel 3: Ohne Steuer und ohne Sonderfall ist der Fall nicht von einer
	 * echten 0-%-Position zu unterscheiden. Dann gilt der heutige Stand, damit
	 * sich für diese Rechnungen nichts ändert.
	 */
	public function testUndecidableFallsBackToTheCurrentSetting(): void {
		$row = self::row(null, [['rateBp' => 0, 'netCents' => 10000, 'taxCents' => 0]]);

		$this->assertTrue(Version001700Date20260808120000::decideSmallBusiness($row, 1));
		$this->assertFalse(Version001700Date20260808120000::decideSmallBusiness($row, 0));
	}

	/** Kaputte oder leere Aufteilung darf die Migration nicht aus der Bahn werfen. */
	public function testSurvivesUnusableBreakdown(): void {
		foreach (['[]', 'null', '', 'kein json', '{"unerwartet": true}'] as $raw) {
			$row = ['id' => 1, 'special_tax_case' => null, 'tax_breakdown' => $raw];
			$this->assertFalse(
				Version001700Date20260808120000::decideSmallBusiness($row, 0),
				'Eingabe: ' . var_export($raw, true),
			);
			$this->assertTrue(Version001700Date20260808120000::decideSmallBusiness($row, 1));
		}
	}

	public function testEmptyStringSpecialTaxCaseCountsAsNone(): void {
		$row = self::row('', [['rateBp' => 0, 'netCents' => 10000, 'taxCents' => 0]]);

		$this->assertTrue(
			Version001700Date20260808120000::decideSmallBusiness($row, 1),
			'ein leerer Sonderfall ist kein Sonderfall',
		);
	}
}
