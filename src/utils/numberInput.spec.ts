/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from 'vitest'
import {
	decimalToInput,
	formatForInput,
	parseNumberInput,
	parsePrice,
	parseQuantity,
	QUANTITY_DECIMALS,
	QUANTITY_INTEGER_DIGITS,
} from './numberInput'
import { e4ToEuroInput, euroInputToE4 } from './money'
import { lineTotalCents } from './invoiceCalc'
import { itemFromInvoiceItem } from '@/types/editor'
import type { InvoiceItem } from '@/types/api'

const q = (v: string) => parseNumberInput(v, QUANTITY_DECIMALS, QUANTITY_INTEGER_DIGITS)

/**
 * #157. Die Fälle sind deckungsgleich mit tests/Unit/NumberInputTest.php.
 * Weichen beide Seiten ab, zeigt das Formular etwas anderes an, als gespeichert wird.
 */
describe('parseNumberInput', () => {
	it.each([
		['2', '2', ''],
		['1.000', '1000', 'der Fall, der still zu 1 wurde'],
		['99.999.999', '99999999', 'der gemeldete 500er'],
		['12,5', '12.5', ''],
		['1.234,5', '1234.5', 'Punkt gruppiert, Komma trennt die Dezimalstellen'],
		['1,875', '1.875', ''],
		[' 1 000 ', '1000', 'Leerzeichen als Gruppierung'],
		['1 000', '1000', 'geschütztes Leerzeichen'],
		['007', '7', ''],
		['2,50', '2.5', ''],
		[',5', '0.5', ''],
		['-2', '-2', 'Stornobelege tragen negative Mengen'],
		['-1.234,5', '-1234.5', ''],
		['+3', '3', ''],
		['-0', '0', 'kein negatives Null'],
		['999999999', '999999999', 'Grenze von numeric(12,3)'],
	])('%s ergibt %s (%s)', (input, expected) => {
		expect(q(input)).toBe(expected)
	})

	it.each([
		['abc', ''],
		['', ''],
		['   ', ''],
		[',', 'Trennzeichen ohne Ziffer'],
		['1,2,3', ''],
		['1.2.3', 'keine sauberen Dreiergruppen'],
		['1.23,5', 'Gruppierung muss in Dreiergruppen stehen'],
		['1,2345', 'die Spalte fasst drei Nachkommastellen'],
		['1000000000', 'numeric(12,3) fasst neun Vorkommastellen'],
		['12 €', ''],
		// Seit #223 abgelehnt statt gedeutet. Der Punkt ist ausschliesslich
		// Tausendertrenner; sonst bleibt "1.234" zwischen 1234 und 1,234 offen.
		['12.5', 'englische Schreibweise, der Punkt gruppiert nicht'],
		['1,234.5', 'gemischte Schreibweise'],
		['0.3456', 'das alte Maschinenformat des Preisfeldes'],
		['1.0000', 'keine saubere Dreiergruppe'],
	])('lehnt %s ab (%s)', (input) => {
		expect(q(input)).toBeNull()
	})

	it('lehnt null und undefined ab', () => {
		expect(parseNumberInput(null, 3, 9)).toBeNull()
		expect(parseNumberInput(undefined, 3, 9)).toBeNull()
	})

	/** Der Kern von #157: die stille Variante darf nicht zurückkehren. */
	it('liest den deutschen Tausenderpunkt nie als Dezimaltrennzeichen', () => {
		expect(parseQuantity('1.000')).toBe('1000')
		expect(parseQuantity('12.000')).toBe('12000')
		expect(parseQuantity('123.000')).toBe('123000')
		expect(q('1.0000')).toBeNull()
	})
})

describe('parseQuantity', () => {
	it('nimmt leer als 1, so wie der Editor eine neue Position anlegt', () => {
		expect(parseQuantity('')).toBe('1')
		expect(parseQuantity(null)).toBe('1')
		expect(parseQuantity('   ')).toBe('1')
	})
})

describe('parsePrice', () => {
	it('erlaubt vier Nachkommastellen (#147)', () => {
		expect(parsePrice('0,3456')).toBe('0.3456')
		expect(parsePrice('0,34567')).toBeNull()
		expect(parsePrice('1.000')).toBe('1000')
	})
})

/**
 * Seit #180 rechnet der Server den Preis aus dem Rohtext; euroInputToE4 treibt
 * nur noch die Live-Vorschau im Editor. Beide müssen trotzdem zum selben
 * Ergebnis kommen, sonst zeigt die Zeile einen anderen Betrag an als der, der
 * gespeichert wird. Die Fälle sind deckungsgleich mit dem priceProvider in
 * tests/Unit/NumberInputTest.php.
 */
describe('euroInputToE4', () => {
	it.each([
		['95', 950000, 'ganze Euro'],
		['95,00', 950000, ''],
		['0,3456', 3456, 'die feinere Preiseinheit aus #147'],
		['0.3456', 0, 'englische Schreibweise wird seit #223 nicht mehr gedeutet'],
		['1.234,56', 12345600, 'nicht 1,23 €'],
		['1.000', 10000000, 'tausend Euro, nicht ein Euro'],
		['0', 0, ''],
		['2,5000', 25000, 'nachlaufende Nullen'],
		['0,0001', 1, 'kleinster darstellbarer Betrag'],
		['', 0, 'leer bedeutet 0'],
		['abc', 0, 'unlesbares gibt 0 in der Vorschau; der Server lehnt es ab'],
	])('%s ergibt %s e4', (input, expected) => {
		expect(euroInputToE4(input)).toBe(expected)
	})

	it('driftet nicht auf der vierten Nachkommastelle', () => {
		for (let i = 1; i <= 9999; i++) {
			const decimal = '0,' + String(i).padStart(4, '0')
			expect(euroInputToE4(decimal)).toBe(i)
		}
	})
})

describe('lineTotalCents', () => {
	it('rechnet mit der erkannten Menge, nicht mit dem Rohtext', () => {
		// 1000 Stück × 95,00 € = 95.000,00 €, frueher kamen 95,00 € heraus.
		expect(lineTotalCents('1.000', 950000)).toBe(9500000)
		expect(lineTotalCents('2', 950000)).toBe(19000)
		expect(lineTotalCents('12,5', 950000)).toBe(118750)
	})

	it('ergibt 0 statt einer erfundenen Zahl, wenn die Menge unlesbar ist', () => {
		expect(lineTotalCents('abc', 950000)).toBe(0)
		expect(lineTotalCents('1.2.3', 950000)).toBe(0)
	})
})

describe('formatForInput', () => {
	it('zeigt den erkannten Wert in deutscher Schreibweise', () => {
		expect(formatForInput('1000')).toBe('1.000')
		expect(formatForInput('99999999')).toBe('99.999.999')
		expect(formatForInput('12.5')).toBe('12,5')
		expect(formatForInput('1234.5')).toBe('1.234,5')
		expect(formatForInput('-1234.5')).toBe('-1.234,5')
		expect(formatForInput('2')).toBe('2')
		expect(formatForInput(null)).toBe('')
	})

	it('laesst Nachkommastellen unangetastet, damit ein Preis seine zwei behaelt', () => {
		expect(formatForInput('1000.00')).toBe('1.000,00')
		expect(formatForInput('0.30')).toBe('0,30')
	})
})

/**
 * #223. Der gemeldete Fehler steckte nicht im Parser, sondern an der Grenze:
 * die API liefert Mengen als Dezimalwert der numeric(12,3)-Spalte ("1.000" für
 * die Menge 1), und dieser Wert lief unverändert ins Feld. Dort las ihn die
 * deutsche Regel als Tausendertrennung — aus 1 wurde beim Speichern 1000.
 */
describe('decimalToInput', () => {
	it.each([
		['1.000', '1', 'der gemeldete Fall'],
		['2.500', '2,5', ''],
		['0.500', '0,5', ''],
		['10.000', '10', ''],
		['1234.000', '1.234', 'Tausendertrennung erst bei der Anzeige'],
		['1234.500', '1.234,5', ''],
		['999999999.000', '999.999.999', 'Grenze von numeric(12,3)'],
		['-2.000', '-2', 'Stornobelege tragen negative Mengen'],
		['0.000', '0', ''],
		['1', '1', 'auch ohne Nachkommastellen'],
	])('%s wird im Feld zu %s (%s)', (stored, expected) => {
		expect(decimalToInput(stored)).toBe(expected)
	})

	it('laesst leere und unlesbare Werte stehen, statt sie still zu verlieren', () => {
		expect(decimalToInput(null)).toBe('')
		expect(decimalToInput(undefined)).toBe('')
		expect(decimalToInput('')).toBe('')
		expect(decimalToInput('abc')).toBe('abc')
	})
})

describe('e4ToEuroInput', () => {
	it.each([
		[10000, '1,00', 'mindestens zwei Nachkommastellen'],
		[20000, '2,00', ''],
		[3500, '0,35', 'nachlaufende Nullen jenseits der zweiten Stelle entfallen'],
		[3456, '0,3456', 'die feinere Preiseinheit aus #147'],
		[12340, '1,234', 'der zweite Fall aus #223: fruehere Ausgabe war "1.234"'],
		[123450, '12,345', ''],
		[10000000, '1.000,00', 'Tausendertrennung mit Punkt'],
		[0, '0,00', ''],
	])('%s e4 wird im Feld zu %s (%s)', (e4, expected) => {
		expect(e4ToEuroInput(e4)).toBe(expected)
	})

	it('ist leer, wenn es keinen Wert gibt', () => {
		expect(e4ToEuroInput(null)).toBe('')
		expect(e4ToEuroInput(undefined)).toBe('')
	})
})

describe('#223 Rundlauf gespeichert -> Feld -> gespeichert', () => {
	const item = (quantity: string, unitPriceE4: number): InvoiceItem => ({
		id: 1,
		invoiceId: 1,
		productId: null,
		name: 'Leistung',
		description: null,
		quantity,
		unitCode: 'C62',
		unitLabel: null,
		unitPriceE4,
		taxRateBp: 1900,
		lineTotalCents: 0,
		sortOrder: 1,
	})

	/**
	 * Der Melder tippt Menge 1 und Preis 10 €, speichert, schliesst und oeffnet
	 * erneut. Vorher stand dann 1.000 im Feld und 10.000,00 € am Zeilenende.
	 */
	it('haelt Menge und Zeilenbetrag ueber Speichern und Wiederoeffnen stabil', () => {
		const editorItem = itemFromInvoiceItem(item('1.000', 100000))
		expect(editorItem.quantity).toBe('1')
		expect(editorItem.priceInput).toBe('10,00')
		expect(lineTotalCents(editorItem.quantity, euroInputToE4(editorItem.priceInput))).toBe(1000)
		// Und was der Editor daraus zum Speichern schickt, ergibt wieder dasselbe.
		expect(parseQuantity(editorItem.quantity)).toBe('1')
		expect(euroInputToE4(editorItem.priceInput)).toBe(100000)
	})

	it.each([
		['1.000', 1],
		['2.500', 2.5],
		['0.500', 0.5],
		['12.000', 12],
		['1234.000', 1234],
	])('gespeicherte Menge %s bleibt %s', (stored, expected) => {
		const editorItem = itemFromInvoiceItem(item(stored, 10000))
		expect(Number(parseQuantity(editorItem.quantity))).toBe(expected)
	})

	/**
	 * Der zweite Fund: das Preisfeld war ein type="number" und lieferte damit
	 * Maschinenformat, das Browser und Server deutsch lasen. Aus 1,234 € wurden
	 * 1.234 €, und zwar schon beim ersten Speichern.
	 */
	it.each([10000, 12340, 123450, 3456, 10000000, 1, 999999])(
		'Preis %s e4 kommt unverändert zurueck', (e4) => {
			expect(euroInputToE4(e4ToEuroInput(e4))).toBe(e4)
		})

	it('driftet auf keinem der vier Nachkommastellen', () => {
		for (let e4 = 1; e4 <= 9999; e4++) {
			expect(euroInputToE4(e4ToEuroInput(e4))).toBe(e4)
		}
	})
})
