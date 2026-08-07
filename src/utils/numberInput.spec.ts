/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from 'vitest'
import {
	formatForInput,
	parseNumberInput,
	parsePrice,
	parseQuantity,
	QUANTITY_DECIMALS,
	QUANTITY_INTEGER_DIGITS,
} from './numberInput'
import { euroInputToE4 } from './money'
import { lineTotalCents } from './invoiceCalc'

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
		['12.5', '12.5', 'englische Schreibweise bleibt lesbar'],
		['1.234,5', '1234.5', 'letztes Trennzeichen ist das Dezimaltrennzeichen'],
		['1,234.5', '1234.5', 'dito, andersherum'],
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

describe('euroInputToE4', () => {
	it.each([
		['2', 20000, ''],
		['2,00', 20000, ''],
		['0,3456', 3456, ''],
		['1.000', 10000000, 'tausend Euro, nicht ein Euro'],
		['1.234,5', 12345000, 'nicht 1,23 €'],
		['', 0, ''],
		['abc', 0, ''],
	])('%s ergibt %s e4', (input, expected) => {
		expect(euroInputToE4(input)).toBe(expected)
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
})
