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
 * #157. Die Faelle stehen in tests/fixtures/number-input-cases.json und werden
 * von src/utils/numberInput.spec.ts aus derselben Datei gelesen (#229).
 *
 * Weichen beide Seiten ab, zeigt das Formular etwas anderes an, als gespeichert
 * wird. Bis #229 war die Deckungsgleichheit nur eine Zusicherung im Kommentar,
 * und die Tabelle stand doppelt da: wer eine Seite aenderte und die andere
 * vergass, bekam zwei gruene Suiten und trotzdem zwei Wahrheiten.
 *
 * Geteilt wird nur die Auswertungsregel. Was eine Seite allein betrifft, steht
 * weiter hier: PHP wirft bei unlesbarer Eingabe eine Ausnahme, der Browser gibt
 * fuer die Vorschau 0 zurueck, und PHP kennt Eingabetypen (null, Array), die es
 * im Formular gar nicht gibt.
 */
class NumberInputTest extends TestCase {

	/** @return array<string, mixed> */
	private static function sharedCases(): array {
		$path = __DIR__ . '/../fixtures/number-input-cases.json';
		$raw = file_get_contents($path);
		if ($raw === false) {
			self::fail('Geteilte Falltabelle nicht lesbar: ' . $path);
		}
		return json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
	}

	/** Ohne Faelle prueft der Rest dieser Datei nichts. */
	public function testSharedCaseTableIsReadable(): void {
		$cases = self::sharedCases();
		$this->assertGreaterThan(10, count($cases['quantity']['accepted']));
		$this->assertGreaterThan(10, count($cases['quantity']['rejected']));
		$this->assertGreaterThan(5, count($cases['price']['toE4']));
	}

	/** @dataProvider quantityProvider */
	public function testParsesGermanNumberInput(string $input, string $expected, string $why): void {
		$this->assertSame(
			$expected,
			NumberInput::parse($input, NumberInput::QUANTITY_DECIMALS, NumberInput::QUANTITY_INTEGER_DIGITS),
			$why,
		);
	}

	/**
	 * Die akzeptierten Faelle aus der geteilten Tabelle. Der Schluessel ist die
	 * Begruendung, damit ein Fehlschlag sagt, welche Eigenschaft gebrochen ist.
	 *
	 * @return array<string, array{0: string, 1: string, 2: string}>
	 */
	public static function quantityProvider(): array {
		$out = [];
		foreach (self::sharedCases()['quantity']['accepted'] as [$input, $expected, $why]) {
			$out[$why !== '' ? $why : $input] = [$input, $expected, $why];
		}
		return $out;
	}

	/** @dataProvider rejectedProvider */
	public function testRejectsWhatItCannotReadUnambiguously(mixed $input, string $why): void {
		$this->assertNull(
			NumberInput::parse($input, NumberInput::QUANTITY_DECIMALS, NumberInput::QUANTITY_INTEGER_DIGITS),
			$why,
		);
	}

	/**
	 * Die abgelehnten Faelle aus der geteilten Tabelle, ergaenzt um die Eingabetypen,
	 * die es nur auf der PHP-Seite gibt: aus dem Formular kommt immer ein String.
	 *
	 * @return array<string, array{0: mixed, 1: string}>
	 */
	public static function rejectedProvider(): array {
		$out = [];
		foreach (self::sharedCases()['quantity']['rejected'] as [$input, $why]) {
			$out[$why !== '' ? $why : $input] = [$input, $why];
		}
		$out['null'] = [null, 'nur auf der PHP-Seite moeglich'];
		$out['Array'] = [[1], 'nur auf der PHP-Seite moeglich'];
		return $out;
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

	/**
	 * #223. Das Preisfeld war ein type="number" und lieferte deshalb
	 * Maschinenformat mit Dezimalpunkt: "0.3456" fuer 0,3456 €. Hier wurde das
	 * deutsch gelesen, also als 3456 €, und zwar schon beim ersten Speichern.
	 * Das Feld schickt jetzt deutsche Schreibweise, und Maschinenformat wird
	 * abgelehnt statt gedeutet.
	 */
	public function testMachineNotationFromTheOldPriceFieldIsRejected(): void {
		$this->expectException(ValidationException::class);
		NumberInput::parsePrice('0.3456');
	}

	/**
	 * Die Kehrseite, die bleiben muss: "1.234" ist als deutsche Schreibweise
	 * eindeutig und bedeutet eintausendzweihundertvierunddreissig Euro. Genau
	 * deshalb durfte der Ladepfad diesen String nie fuer 1,234 € erzeugen.
	 */
	public function testThousandSeparatorKeepsItsGermanMeaningInPrices(): void {
		$this->assertSame(12340000, NumberInput::parsePrice('1.234'));
	}

	/**
	 * #180: Der Preis wird jetzt serverseitig aus dem Rohtext gerechnet.
	 *
	 * @dataProvider priceProvider
	 */
	public function testParsePriceConvertsToTenThousandths(string $input, int $expected, string $why): void {
		$this->assertSame($expected, NumberInput::parsePrice($input), $why);
	}

	/**
	 * Die Preisumrechnung aus der geteilten Tabelle. Leere und unlesbare Eingaben
	 * stehen nicht darin: hier werfen sie eine Ausnahme, im Browser ergeben sie
	 * fuer die Vorschau 0. Beide Verhalten sind gewollt und werden je Seite
	 * einzeln geprueft.
	 *
	 * @return array<string, array{0: string, 1: int, 2: string}>
	 */
	public static function priceProvider(): array {
		$out = [];
		foreach (self::sharedCases()['price']['toE4'] as [$input, $expected, $why]) {
			$out[$why !== '' ? $why : $input] = [$input, $expected, $why];
		}
		return $out;
	}

	public function testParsePriceTreatsEmptyAsZero(): void {
		$this->assertSame(0, NumberInput::parsePrice(null));
		$this->assertSame(0, NumberInput::parsePrice(''));
		$this->assertSame(0, NumberInput::parsePrice('   '));
	}

	public function testParsePriceRejectsUnreadableInput(): void {
		$this->expectException(ValidationException::class);
		$this->expectExceptionMessage('gratis');
		NumberInput::parsePrice('gratis');
	}

	public function testParsePriceRejectsTooManyDecimals(): void {
		$this->expectException(ValidationException::class);
		NumberInput::parsePrice('0,34567');
	}

	public function testParsePriceRejectsNegative(): void {
		$this->expectException(ValidationException::class);
		$this->expectExceptionMessage('negativ');
		NumberInput::parsePrice('-5');
	}

	/**
	 * Die Umrechnung laeuft ueber Zeichenketten, nicht ueber Gleitkomma.
	 * Gemessen ueber genau diesen Bereich: (int)((float)$s * 10000) weicht in
	 * 573 von 9999 Faellen ab, der erste ist 0,0003 -> 2. Dieser Test deckt
	 * jeden einzelnen Wert ab, damit die Umstellung auf Gleitkomma auffaellt.
	 */
	public function testConversionDoesNotDriftOnTheFourthDecimal(): void {
		foreach (range(1, 9999) as $tenThousandths) {
			$decimal = sprintf('0,%04d', $tenThousandths);
			$this->assertSame($tenThousandths, NumberInput::parsePrice($decimal), $decimal);
		}
	}
}
