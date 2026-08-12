<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Exception\NumberFormatException;

/**
 * Zahleneingaben in deutscher Schreibweise auswerten (#157).
 *
 * Die Menge lief bisher als Rohtext in eine numeric-Spalte. Wer "99.999.999"
 * eintippte, bekam einen HTTP 500 und keine Vorschau mehr; wer "1.000" eintippte,
 * bekam ohne jeden Hinweis die Menge 1 und damit eine um Faktor 1000 falsche
 * Rechnung. Beides ist keine Fehlbedienung: 1.000 und 12,5 sind die Schreibweise,
 * die deutsche Nutzer verwenden.
 *
 * Die Regel, seit #223 eng und ohne Ausnahme:
 *   - Leerzeichen fallen weg, auch geschuetzte
 *   - das Komma trennt die Dezimalstellen, hoechstens eines
 *   - der Punkt gruppiert Tausender und muss sauber in Dreiergruppen stehen
 *   - was danach kein sauberer Zahlwert ist, wird abgelehnt statt geraten
 *
 * Bis #223 galt zusaetzlich das LETZTE Trennzeichen als Dezimaltrennzeichen,
 * womit auch "1,234.5" und "12.5" lesbar waren. Diese Deutung war der eigentliche
 * Fehler: sie laesst "1.234" zwischen 1234 und 1,234 offen. Genau daran wurde der
 * Preis um den Faktor 1000 verfaelscht, weil das Preisfeld ein type="number" war
 * und damit Maschinenformat lieferte ("1.234" fuer 1,234 €), das hier deutsch
 * gelesen wurde. Beide Felder sind jetzt deutsche Textfelder.
 *
 * Dieselbe Regel liegt als src/utils/numberInput.ts im Frontend, mit
 * deckungsgleichen Testfaellen. Weichen beide Seiten ab, zeigt das Formular
 * etwas anderes an, als gespeichert wird.
 */
final class NumberInput {

	/** Menge: numeric(12,3) in der Datenbank. */
	public const QUANTITY_DECIMALS = 3;
	public const QUANTITY_INTEGER_DIGITS = 9;

	/** Preis: vier Nachkommastellen (1/10000 €, #147), gespeichert als bigint. */
	public const PRICE_DECIMALS = 4;
	public const PRICE_INTEGER_DIGITS = 9;

	/**
	 * Wertet eine Eingabe aus und gibt sie als normalisierten Dezimalstring
	 * zurueck ("1000", "12.5", "-2"), oder null wenn sie nicht eindeutig als
	 * Zahl lesbar ist.
	 */
	public static function parse(mixed $value, int $maxDecimals, int $maxIntegerDigits): ?string {
		if (is_int($value) || is_float($value)) {
			$value = (string)$value;
		}
		if (!is_string($value)) {
			return null;
		}
		// Leerzeichen inklusive geschuetztem und schmalem geschuetztem entfernen.
		$s = (string)preg_replace('/[\s\x{00A0}\x{202F}]+/u', '', $value);
		if ($s === '') {
			return null;
		}

		$negative = false;
		if (str_starts_with($s, '-')) {
			$negative = true;
			$s = substr($s, 1);
		} elseif (str_starts_with($s, '+')) {
			$s = substr($s, 1);
		}
		if ($s === '' || preg_match('/^[0-9.,]+$/', $s) !== 1) {
			return null;
		}

		// Das Komma trennt die Dezimalstellen, der Punkt gruppiert Tausender. Ein
		// zweites Komma, oder ein Punkt hinter dem Komma, ist keine deutsche
		// Schreibweise und wird abgelehnt statt gedeutet (#223).
		$firstComma = strpos($s, ',');

		if ($firstComma !== false) {
			if (substr_count($s, ',') > 1) {
				return null;
			}
			$integer = substr($s, 0, $firstComma);
			$fraction = substr($s, $firstComma + 1);
			if (str_contains($fraction, '.')) {
				return null;
			}
		} else {
			$integer = $s;
			$fraction = '';
		}

		// "1.000" ist die deutsche Tausendertrennung, nicht 1,0.
		if (!self::isGrouped($integer)) {
			return null;
		}
		$integer = str_replace('.', '', $integer);

		// Ein Trennzeichen ohne jede Ziffer ist keine Zahl.
		if ($integer === '' && $fraction === '') {
			return null;
		}
		if ($integer === '') {
			$integer = '0';
		}
		if (preg_match('/^\d+$/', $integer) !== 1) {
			return null;
		}
		if ($fraction !== '' && preg_match('/^\d+$/', $fraction) !== 1) {
			return null;
		}
		if (strlen($fraction) > $maxDecimals) {
			return null;
		}

		$integer = ltrim($integer, '0');
		if ($integer === '') {
			$integer = '0';
		}
		if (strlen($integer) > $maxIntegerDigits) {
			return null;
		}

		$fraction = rtrim($fraction, '0');
		$result = $integer . ($fraction !== '' ? '.' . $fraction : '');
		// Kein negatives Null.
		return $negative && $result !== '0' ? '-' . $result : $result;
	}

	/**
	 * Menge auswerten. Leere Eingabe bedeutet 1, so wie der Editor eine neue
	 * Position anlegt.
	 *
	 * Wirft ohne Prosa (#235): den Satz formuliert der aufrufende Service, der
	 * einen Uebersetzer hat. Diese Klasse bleibt statisch und damit der Zwilling
	 * von src/utils/numberInput.ts.
	 *
	 * @throws NumberFormatException
	 */
	public static function parseQuantity(mixed $value): string {
		if ($value === null || (is_string($value) && trim($value) === '')) {
			return '1';
		}
		$parsed = self::parse($value, self::QUANTITY_DECIMALS, self::QUANTITY_INTEGER_DIGITS);
		if ($parsed === null) {
			throw new NumberFormatException(
				trim((string)$value),
				NumberFormatException::KIND_QUANTITY,
			);
		}
		return $parsed;
	}

	/**
	 * Preiseingabe in Zehntausendstel-Euro (1/10000 €, #147).
	 *
	 * Bis #180 rechnete ausschliesslich der Browser um und schickte die fertige
	 * Zahl. Der Server sah damit nie, was eingegeben wurde, und konnte nichts
	 * pruefen: "95" ist als unitPriceE4 ein voellig legaler Wert fuer 0,0095 €,
	 * und ob jemand 95 Euro meinte, ist der Zahl nicht anzusehen. Die
	 * Umrechnung gehoert deshalb hierher.
	 *
	 * Leere Eingabe bedeutet 0, das ist ein zulaessiger Preis.
	 *
	 * Wirft ohne Prosa, siehe parseQuantity() (#235).
	 *
	 * @throws NumberFormatException
	 */
	public static function parsePrice(mixed $value): int {
		if ($value === null || (is_string($value) && trim($value) === '')) {
			return 0;
		}
		$parsed = self::parse($value, self::PRICE_DECIMALS, self::PRICE_INTEGER_DIGITS);
		if ($parsed === null) {
			throw new NumberFormatException(
				trim((string)$value),
				NumberFormatException::KIND_PRICE,
			);
		}
		if (str_starts_with($parsed, '-')) {
			throw new NumberFormatException(
				trim((string)$value),
				NumberFormatException::KIND_PRICE,
				NumberFormatException::REASON_NEGATIVE,
			);
		}
		return self::toE4($parsed);
	}

	/**
	 * Normalisierten Dezimalstring in Zehntausendstel umrechnen.
	 *
	 * Bewusst ueber Zeichenketten statt ueber Gleitkomma. Gemessen ueber alle
	 * 9999 Werte von 0,0001 bis 0,9999: (int)((float)$s * 10000) weicht in 573
	 * Faellen ab, etwa 0,0003 -> 2. Mit round() ginge es zwar auf, aber dann
	 * haengt die Richtigkeit an einer Rundung, die man nicht vergessen darf.
	 * Zeichenketten haben das Problem gar nicht.
	 */
	private static function toE4(string $decimal): int {
		[$integer, $fraction] = str_contains($decimal, '.')
			? explode('.', $decimal, 2)
			: [$decimal, ''];
		return (int)($integer . str_pad($fraction, self::PRICE_DECIMALS, '0'));
	}

	/** Ob der Vorkommateil sauber in Dreiergruppen getrennt ist, oder gar keinen Punkt enthaelt. */
	private static function isGrouped(string $value): bool {
		if (!str_contains($value, '.')) {
			return preg_match('/^\d*$/', $value) === 1;
		}
		return preg_match('/^\d{1,3}(\.\d{3})+$/', $value) === 1;
	}
}
