/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Zahleneingaben in deutscher Schreibweise auswerten (#157).
 *
 * Zwilling von lib/Service/NumberInput.php, mit deckungsgleichen Testfaellen.
 * Weichen beide Seiten ab, zeigt das Formular etwas anderes an, als gespeichert
 * wird.
 *
 * Vorher ersetzte der Editor nur das ERSTE Komma durch einen Punkt und liess
 * Tausenderpunkte stehen. "1.000" wurde dadurch zu 1, "1.234,5" zu 1,23 — beides
 * ohne jeden Hinweis, auf einer Rechnung, die an Kunden geht.
 */

/** Menge: numeric(12,3) in der Datenbank. */
export const QUANTITY_DECIMALS = 3
export const QUANTITY_INTEGER_DIGITS = 9

/** Preis in 1/10000 € (#147); 9 Vorkommastellen sind mehr als genug. */
export const PRICE_DECIMALS = 4
export const PRICE_INTEGER_DIGITS = 9

/** Ob der Wert sauber in Dreiergruppen getrennt ist, oder gar keine Gruppierung enthält. */
function isGrouped(value: string, groupChar: string): boolean {
	if (!value.includes(groupChar)) {
		return /^\d*$/.test(value)
	}
	const g = groupChar === '.' ? '\\.' : ','
	return new RegExp(`^\\d{1,3}(${g}\\d{3})+$`).test(value)
}

/**
 * Wertet eine Eingabe aus und gibt sie als normalisierten Dezimalstring zurück
 * ("1000", "12.5", "-2"), oder null wenn sie nicht eindeutig als Zahl lesbar ist.
 */
export function parseNumberInput(
	value: string | number | null | undefined,
	maxDecimals: number,
	maxIntegerDigits: number,
): string | null {
	if (value === null || value === undefined) {
		return null
	}
	// Leerzeichen inklusive geschütztem und schmalem geschütztem entfernen.
	// Die beiden Sonderzeichen im Ausdruck sind Absicht (U+00A0, U+202F): Zahlen
	// aus Tabellen und Zwischenablagen tragen sie als Tausendertrenner. Genau
	// hier wurden Mengen und Preise still verfälscht (#157), deshalb bleibt der
	// Ausdruck unangetastet.
	// eslint-disable-next-line no-irregular-whitespace -- s. o., bewusst
	let s = String(value).replace(/[\s  ]+/g, '')
	if (s === '') {
		return null
	}

	let negative = false
	if (s.startsWith('-')) {
		negative = true
		s = s.slice(1)
	} else if (s.startsWith('+')) {
		s = s.slice(1)
	}
	if (s === '' || !/^[0-9.,]+$/.test(s)) {
		return null
	}

	const lastDot = s.lastIndexOf('.')
	const lastComma = s.lastIndexOf(',')
	let integer: string
	let fraction: string

	if (lastDot >= 0 && lastComma >= 0) {
		const decimalPos = Math.max(lastDot, lastComma)
		const groupChar = s[decimalPos] === ',' ? '.' : ','
		integer = s.slice(0, decimalPos)
		fraction = s.slice(decimalPos + 1)
		if (!isGrouped(integer, groupChar)) {
			return null
		}
		integer = integer.split(groupChar).join('')
	} else if (lastComma >= 0) {
		if ((s.match(/,/g) || []).length > 1) {
			return null
		}
		integer = s.slice(0, lastComma)
		fraction = s.slice(lastComma + 1)
	} else if (lastDot >= 0) {
		if (/^\d{1,3}(\.\d{3})+$/.test(s)) {
			// "1.000" ist die deutsche Tausendertrennung, nicht 1,0.
			integer = s.split('.').join('')
			fraction = ''
		} else {
			if ((s.match(/\./g) || []).length > 1) {
				return null
			}
			integer = s.slice(0, lastDot)
			fraction = s.slice(lastDot + 1)
		}
	} else {
		integer = s
		fraction = ''
	}

	// Ein Trennzeichen ohne jede Ziffer ist keine Zahl.
	if (integer === '' && fraction === '') {
		return null
	}
	if (integer === '') {
		integer = '0'
	}
	if (!/^\d+$/.test(integer)) {
		return null
	}
	if (fraction !== '' && !/^\d+$/.test(fraction)) {
		return null
	}
	if (fraction.length > maxDecimals) {
		return null
	}

	integer = integer.replace(/^0+/, '')
	if (integer === '') {
		integer = '0'
	}
	if (integer.length > maxIntegerDigits) {
		return null
	}

	fraction = fraction.replace(/0+$/, '')
	const result = integer + (fraction !== '' ? '.' + fraction : '')
	// Kein negatives Null.
	return negative && result !== '0' ? '-' + result : result
}

/** Menge auswerten; null wenn die Eingabe nicht lesbar ist. Leer bedeutet 1. */
export function parseQuantity(value: string | number | null | undefined): string | null {
	if (value === null || value === undefined || String(value).trim() === '') {
		return '1'
	}
	return parseNumberInput(value, QUANTITY_DECIMALS, QUANTITY_INTEGER_DIGITS)
}

/** Preis auswerten; null wenn die Eingabe nicht lesbar ist. Leer bedeutet 0. */
export function parsePrice(value: string | number | null | undefined): string | null {
	if (value === null || value === undefined || String(value).trim() === '') {
		return '0'
	}
	return parseNumberInput(value, PRICE_DECIMALS, PRICE_INTEGER_DIGITS)
}

/**
 * Erkannten Wert in deutscher Schreibweise zurückgeben, um ihn beim Verlassen
 * des Feldes anzuzeigen. Wer "1.000" tippt und danach "1.000" mit dem passenden
 * Zeilenbetrag sieht, erkennt sofort, ob die App ihn richtig verstanden hat.
 */
export function formatForInput(normalized: string | null): string {
	if (normalized === null) {
		return ''
	}
	const [int, frac] = normalized.split('.')
	const sign = int.startsWith('-') ? '-' : ''
	const digits = sign ? int.slice(1) : int
	const grouped = digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
	return sign + grouped + (frac ? ',' + frac : '')
}
