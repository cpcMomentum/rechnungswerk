<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

/**
 * Zahleneingaben in deutscher Schreibweise auswerten (#157).
 *
 * Die Menge lief bisher als Rohtext in eine numeric-Spalte. Wer "99.999.999"
 * eintippte, bekam einen HTTP 500 und keine Vorschau mehr; wer "1.000" eintippte,
 * bekam ohne jeden Hinweis die Menge 1 und damit eine um Faktor 1000 falsche
 * Rechnung. Beides ist keine Fehlbedienung: 1.000 und 12,5 sind die Schreibweise,
 * die deutsche Nutzer verwenden.
 *
 * Die Regel:
 *   - Leerzeichen fallen weg, auch geschuetzte
 *   - kommen "." und "," beide vor, ist das LETZTE das Dezimaltrennzeichen und
 *     das andere Gruppierung ("1.234,5" und "1,234.5" sind beide eindeutig)
 *   - nur "," ist immer Dezimaltrennzeichen
 *   - nur "." ist Gruppierung, wenn es dem Dreiergruppenmuster folgt ("1.000"),
 *     sonst Dezimalpunkt ("12.5")
 *   - Gruppierung muss sauber in Dreiergruppen stehen, sonst wird abgelehnt
 *   - was danach kein sauberer Zahlwert ist, wird abgelehnt statt geraten
 *
 * Dieselbe Regel liegt als src/utils/numberInput.ts im Frontend, mit
 * deckungsgleichen Testfaellen. Weichen beide Seiten ab, zeigt das Formular
 * etwas anderes an, als gespeichert wird.
 */
final class NumberInput {

	/** Menge: numeric(12,3) in der Datenbank. */
	public const QUANTITY_DECIMALS = 3;
	public const QUANTITY_INTEGER_DIGITS = 9;

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

		$lastDot = strrpos($s, '.');
		$lastComma = strrpos($s, ',');

		if ($lastDot !== false && $lastComma !== false) {
			$decimalPos = max($lastDot, $lastComma);
			$groupChar = $s[$decimalPos] === ',' ? '.' : ',';
			$integer = substr($s, 0, $decimalPos);
			$fraction = substr($s, $decimalPos + 1);
			if (!self::isGrouped($integer, $groupChar)) {
				return null;
			}
			$integer = str_replace($groupChar, '', $integer);
		} elseif ($lastComma !== false) {
			if (substr_count($s, ',') > 1) {
				return null;
			}
			$integer = substr($s, 0, $lastComma);
			$fraction = substr($s, $lastComma + 1);
		} elseif ($lastDot !== false) {
			if (preg_match('/^\d{1,3}(\.\d{3})+$/', $s) === 1) {
				// "1.000" ist die deutsche Tausendertrennung, nicht 1,0.
				$integer = str_replace('.', '', $s);
				$fraction = '';
			} else {
				if (substr_count($s, '.') > 1) {
					return null;
				}
				$integer = substr($s, 0, $lastDot);
				$fraction = substr($s, $lastDot + 1);
			}
		} else {
			$integer = $s;
			$fraction = '';
		}

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
	 * @throws \OCA\Rechnungswerk\Exception\ValidationException
	 */
	public static function parseQuantity(mixed $value): string {
		if ($value === null || (is_string($value) && trim($value) === '')) {
			return '1';
		}
		$parsed = self::parse($value, self::QUANTITY_DECIMALS, self::QUANTITY_INTEGER_DIGITS);
		if ($parsed === null) {
			throw new \OCA\Rechnungswerk\Exception\ValidationException(
				'"' . trim((string)$value) . '" ist keine gültige Menge. Erlaubt sind Zahlen mit bis zu '
				. self::QUANTITY_DECIMALS . ' Nachkommastellen, zum Beispiel 1.000 oder 12,5.'
			);
		}
		return $parsed;
	}

	/** Ob $value sauber in Dreiergruppen getrennt ist, oder gar keine Gruppierung enthaelt. */
	private static function isGrouped(string $value, string $groupChar): bool {
		if (!str_contains($value, $groupChar)) {
			return preg_match('/^\d*$/', $value) === 1;
		}
		return preg_match('/^\d{1,3}(' . preg_quote($groupChar, '/') . '\d{3})+$/', $value) === 1;
	}
}
