<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\NumberInput;
use PHPUnit\Framework\TestCase;

/**
 * #157. Die Faelle sind deckungsgleich mit src/utils/numberInput.spec.ts.
 * Weichen beide Seiten ab, zeigt das Formular etwas anderes an, als gespeichert
 * wird.
 */
class NumberInputTest extends TestCase {

	/** @dataProvider quantityProvider */
	public function testParsesGermanNumberInput(string $input, string $expected, string $why): void {
		$this->assertSame(
			$expected,
			NumberInput::parse($input, NumberInput::QUANTITY_DECIMALS, NumberInput::QUANTITY_INTEGER_DIGITS),
			$why,
		);
	}

	/** @return array<string, array{0: string, 1: string, 2: string}> */
	public static function quantityProvider(): array {
		return [
			'einfache Zahl' => ['2', '2', ''],
			'Tausenderpunkt' => ['1.000', '1000', 'der Fall, der still zu 1 wurde'],
			'mehrere Tausendergruppen' => ['99.999.999', '99999999', 'der gemeldete 500er'],
			'Dezimalkomma' => ['12,5', '12.5', ''],
			'Dezimalpunkt' => ['12.5', '12.5', 'englische Schreibweise bleibt lesbar'],
			'deutsch gemischt' => ['1.234,5', '1234.5', 'letztes Trennzeichen ist das Dezimaltrennzeichen'],
			'englisch gemischt' => ['1,234.5', '1234.5', 'dito, andersherum'],
			'drei Nachkommastellen' => ['1,875', '1.875', ''],
			'Leerzeichen' => [' 1 000 ', '1000', 'Leerzeichen als Gruppierung'],
			'geschuetztes Leerzeichen' => ["1\u{00A0}000", '1000', ''],
			'fuehrende Nullen' => ['007', '7', ''],
			'nachlaufende Null' => ['2,50', '2.5', ''],
			'nur Nachkommastellen' => [',5', '0.5', ''],
			'negativ' => ['-2', '-2', 'Stornobelege tragen negative Mengen'],
			'negativ mit Komma' => ['-1.234,5', '-1234.5', ''],
			'Plus' => ['+3', '3', ''],
			'negative Null' => ['-0', '0', 'kein negatives Null'],
			'neun Vorkommastellen' => ['999999999', '999999999', 'Grenze von numeric(12,3)'],
		];
	}

	/** @dataProvider rejectedProvider */
	public function testRejectsWhatItCannotReadUnambiguously(mixed $input, string $why): void {
		$this->assertNull(
			NumberInput::parse($input, NumberInput::QUANTITY_DECIMALS, NumberInput::QUANTITY_INTEGER_DIGITS),
			$why,
		);
	}

	/** @return array<string, array{0: mixed, 1: string}> */
	public static function rejectedProvider(): array {
		return [
			'Text' => ['abc', ''],
			'leer' => ['', ''],
			'nur Leerzeichen' => ['   ', ''],
			'nur Trennzeichen' => [',', ''],
			'zwei Kommata' => ['1,2,3', ''],
			'zwei Punkte ohne Gruppenmuster' => ['1.2.3', 'keine sauberen Dreiergruppen'],
			'kaputte Gruppierung' => ['1.23,5', 'Gruppierung muss in Dreiergruppen stehen'],
			'zu viele Nachkommastellen' => ['1,2345', 'die Spalte fasst drei'],
			'zehn Vorkommastellen' => ['1000000000', 'numeric(12,3) fasst neun'],
			'Waehrungszeichen' => ['12 €', ''],
			'null' => [null, ''],
			'Array' => [[1], ''],
		];
	}

	public function testQuantityDefaultsToOneWhenEmpty(): void {
		$this->assertSame('1', NumberInput::parseQuantity(null));
		$this->assertSame('1', NumberInput::parseQuantity(''));
		$this->assertSame('1', NumberInput::parseQuantity('   '));
	}

	public function testQuantityRejectionCarriesTheOffendingValue(): void {
		$this->expectException(ValidationException::class);
		$this->expectExceptionMessage('99.99.9');
		NumberInput::parseQuantity('99.99.9');
	}

	/**
	 * Der Kern von #157: die stille Variante darf nicht zurueckkehren.
	 * "1.000" muss tausend ergeben, nicht eins.
	 */
	public function testGermanThousandSeparatorIsNeverReadAsDecimal(): void {
		$this->assertSame('1000', NumberInput::parseQuantity('1.000'));
		$this->assertSame('12000', NumberInput::parseQuantity('12.000'));
		$this->assertSame('123000', NumberInput::parseQuantity('123.000'));
		// Vier Nachkommastellen sind keine Dreiergruppe, das bleibt ein Dezimalpunkt.
		$this->assertNull(NumberInput::parse('1.0000', 3, 9));
	}

	/** Preise haben vier Nachkommastellen (#147), sonst dieselbe Regel. */
	public function testPriceAllowsFourDecimals(): void {
		$this->assertSame('0.3456', NumberInput::parse('0,3456', 4, 9));
		$this->assertNull(NumberInput::parse('0,34567', 4, 9));
		$this->assertSame('1000', NumberInput::parse('1.000', 4, 9));
	}
}
