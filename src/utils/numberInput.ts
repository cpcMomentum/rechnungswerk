/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Zahleneingaben in deutscher Schreibweise auswerten (#157, verschaerft mit #223).
 *
 * Zwilling von lib/Service/NumberInput.php, mit deckungsgleichen Testfaellen.
 * Weichen beide Seiten ab, zeigt das Formular etwas anderes an, als gespeichert
 * wird.
 *
 * Vorher ersetzte der Editor nur das ERSTE Komma durch einen Punkt und liess
 * Tausenderpunkte stehen. "1.000" wurde dadurch zu 1, "1.234,5" zu 1,23 — beides
 * ohne jeden Hinweis, auf einer Rechnung, die an Kunden geht.
 *
 * Die Regel ist seit #223 eng und ohne Ausnahme:
 *   - das Komma trennt die Dezimalstellen, hoechstens eines
 *   - der Punkt gruppiert Tausender und muss in Dreiergruppen stehen
 *   - alles andere wird abgelehnt statt gedeutet
 *
 * Bis #223 galt zusaetzlich das LETZTE Trennzeichen als Dezimaltrennzeichen,
 * womit auch "1,234.5" lesbar war. Diese Deutung war der eigentliche Fehler:
 * sie laesst "1.234" zwischen 1234 und 1,234 offen. Genau daran wurden Mengen
 * und Preise um den Faktor 1000 verfaelscht, sobald ein gespeicherter Wert
 * ("1.000" aus einer numeric(12,3)-Spalte) in ein Feld zurueckgeschrieben wurde.
 * Maschinenformat gehoert deshalb nie ungewandelt in ein Feld — dafuer gibt es
 * decimalToInput().
 */

/** Menge: numeric(12,3) in der Datenbank. */
export const QUANTITY_DECIMALS = 3
export const QUANTITY_INTEGER_DIGITS = 9

/** Preis in 1/10000 € (#147); 9 Vorkommastellen sind mehr als genug. */
export const PRICE_DECIMALS = 4
export const PRICE_INTEGER_DIGITS = 9

/** Ob der Vorkommateil sauber in Dreiergruppen getrennt ist, oder gar keinen Punkt enthält. */
function isGrouped(value: string): boolean {
	if (!value.includes('.')) {
		return /^\d*$/.test(value)
	}
	return /^\d{1,3}(\.\d{3})+$/.test(value)
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

	// Das Komma trennt die Dezimalstellen, der Punkt gruppiert Tausender. Ein
	// zweites Komma, oder ein Punkt hinter dem Komma, ist keine deutsche
	// Schreibweise und wird abgelehnt statt gedeutet (#223).
	const firstComma = s.indexOf(',')
	let integer: string
	let fraction: string

	if (firstComma >= 0) {
		if (s.includes(',', firstComma + 1)) {
			return null
		}
		integer = s.slice(0, firstComma)
		fraction = s.slice(firstComma + 1)
		if (fraction.includes('.')) {
			return null
		}
	} else {
		integer = s
		fraction = ''
	}

	// "1.000" ist die deutsche Tausendertrennung, nicht 1,0.
	if (!isGrouped(integer)) {
		return null
	}
	integer = integer.split('.').join('')

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
 *
 * Erwartet einen Dezimalstring mit Punkt ("1234.5"). Nachkommastellen bleiben
 * unverändert, damit ein Preis seine zwei Stellen behält ("1000.00" -> "1.000,00").
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

/**
 * Gespeicherten Wert in die Schreibweise des Eingabefeldes wandeln (#223).
 *
 * Die Menge steht als numeric(12,3) in der Datenbank, die Datenbank liefert
 * deshalb "1.000" — mit dem Punkt als DEZIMALtrennzeichen. Genau dieser String
 * lief bis #223 unverändert ins Mengenfeld und wurde dort regelkonform als
 * Tausendertrennung gelesen: aus der Menge 1 wurde beim nächsten Speichern 1000.
 *
 * Bedeutungslose Nullen fallen weg, damit im Feld "1" steht und nicht "1,000".
 * Was kein Maschinenwert ist, bleibt unverändert stehen, statt still zu
 * verschwinden.
 */
export function decimalToInput(value: string | number | null | undefined): string {
	if (value === null || value === undefined) {
		return ''
	}
	let s = String(value).trim()
	if (s === '') {
		return ''
	}
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(s)) {
		return s
	}
	const negative = s.startsWith('-')
	if (negative || s.startsWith('+')) {
		s = s.slice(1)
	}
	const [rawInt, rawFrac = ''] = s.split('.')
	const int = rawInt.replace(/^0+/, '') || '0'
	const frac = rawFrac.replace(/0+$/, '')
	const zero = int === '0' && frac === ''
	return formatForInput((negative && !zero ? '-' : '') + int + (frac !== '' ? '.' + frac : ''))
}
