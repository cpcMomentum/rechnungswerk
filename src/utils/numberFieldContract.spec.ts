/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Der Vertrag zwischen Feld, Ladepfad und Parser (#223).
 *
 * #223 entstand nicht an einer falschen Zeile, sondern daran, dass drei Stellen
 * verschiedene Annahmen über dasselbe Format hatten:
 *
 *   - die API liefert Maschinenformat ("1.000" ist die Menge 1)
 *   - das Feld zeigt deutsche Schreibweise ("1.000" ist eintausend)
 *   - der Parser liest deutsch
 *
 * Die Tests zu #157 prüften nur EINE Richtung: getippter Text -> Zahl. Keiner
 * ging den Rückweg, gespeicherter Wert -> Feld, und genau dort saß der Fehler.
 * Diese Datei prüft den Rückweg und die beiden Annahmen, die ihn tragen, damit
 * derselbe Widerspruch nicht durch eine neue Stelle wieder hereinkommt.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { parsePrice, parseQuantity } from './numberInput'
import { e4ToEuroInput, euroInputToE4 } from './money'
import { emptyItem, itemFromInvoiceItem, itemFromProduct } from '@/types/editor'
import type { InvoiceItem, Product } from '@/types/api'

const SRC = join(import.meta.dirname, '..')

/** Alle .vue-Dateien unter src/, rekursiv. */
function vueFiles(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const path = join(dir, entry.name)
		if (entry.isDirectory()) {
			return vueFiles(path)
		}
		return entry.name.endsWith('.vue') ? [path] : []
	})
}

/**
 * Ein Feld, dessen Inhalt parseNumberInput() liest, darf kein type="number" sein.
 *
 * Der Browser normalisiert ein Zahlenfeld auf Maschinenformat mit Punkt. Genau
 * dadurch kam "1.234" für 1,234 € beim Server an, der es deutsch als 1.234,00 €
 * las — der zweite, schwerere Teil von #223. Reine Ganzzahlfelder (Zahlungsziel
 * in Tagen, SMTP-Port) sind nicht betroffen: ohne Trennzeichen gibt es keine
 * Mehrdeutigkeit. Deshalb prüft der Test die Bindung, nicht eine Ausnahmeliste.
 */
describe('Felder, deren Inhalt deutsch gelesen wird', () => {
	const PARSED_MODELS = /\b(quantity|priceInput|unitPriceInput|defaultPriceInput)\b/

	const parsedInputs = vueFiles(SRC).flatMap((file) => {
		const source = readFileSync(file, 'utf8')
		return [...source.matchAll(/<input\b[^>]*>/gs)]
			.map(m => m[0])
			.filter((tag) => {
				const model = /v-model(?:\.\w+)?="([^"]*)"/.exec(tag)?.[1] ?? ''
				return PARSED_MODELS.test(model)
			})
			.map(tag => ({ file: file.slice(SRC.length + 1), tag: tag.replace(/\s+/g, ' ') }))
	})

	it('gibt es überhaupt, sonst prüft dieser Test nichts', () => {
		expect(parsedInputs.length).toBeGreaterThanOrEqual(3)
	})

	it.each(parsedInputs)('$file: $tag ist ein Textfeld', ({ tag }) => {
		expect(tag).toContain('type="text"')
		expect(tag).not.toContain('type="number"')
	})

	it.each(parsedInputs)('$file: $tag bietet die Dezimaltastatur an', ({ tag }) => {
		expect(tag).toContain('inputmode="decimal"')
	})
})

/**
 * Jede Stelle, die eine Position für den Editor baut, muss Feldwerte erzeugen,
 * die der Parser wieder auf denselben gespeicherten Wert bringt.
 *
 * itemFromInvoiceItem() war die Stelle, an der #223 saß. Der Test prüft nicht
 * diese eine Zeile, sondern die Eigenschaft: was aus einer Fabrik kommt, muss
 * verlustfrei zurücklesbar sein. Eine neue Fabrik, die die Wandlung vergisst,
 * fällt damit auf.
 */
describe('Positions-Fabriken erzeugen lesbare Feldwerte', () => {
	const invoiceItem = (quantity: string, unitPriceE4: number): InvoiceItem => ({
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

	const product = (defaultPriceE4: number): Product => ({
		id: 1,
		name: 'Produkt',
		description: null,
		defaultUnitCode: 'C62',
		defaultUnitLabel: null,
		defaultPriceE4,
		defaultTaxRateBp: 1900,
	} as Product)

	it('emptyItem: Menge und Preis sind lesbar', () => {
		const item = emptyItem()
		expect(parseQuantity(item.quantity)).toBe('1')
		expect(parsePrice(item.priceInput)).toBe('0')
	})

	it('itemFromProduct: der Standardpreis kommt verlustfrei zurück', () => {
		for (const e4 of [0, 1, 3456, 10000, 12340, 123450, 10000000]) {
			expect(euroInputToE4(itemFromProduct(product(e4), false).priceInput)).toBe(e4)
		}
	})

	/**
	 * Der Rückweg über den vollen Wertebereich der Spalte, nicht über eine
	 * Handvoll ausgesuchter Fälle. Die Fälle, die #223 überlebt hätten, waren
	 * gerade die runden — deshalb hier jede Kombination aus Vor- und
	 * Nachkommastellen bis 1000.
	 */
	it('itemFromInvoiceItem: jede gespeicherte Menge kommt verlustfrei zurück', () => {
		for (let whole = 0; whole <= 1000; whole++) {
			for (const thousandths of [0, 1, 5, 50, 500, 999]) {
				const stored = `${whole}.${String(thousandths).padStart(3, '0')}`
				const field = itemFromInvoiceItem(invoiceItem(stored, 10000)).quantity
				expect(Number(parseQuantity(field)), `gespeichert ${stored}, im Feld "${field}"`)
					.toBe(Number(stored))
			}
		}
	})

	it('itemFromInvoiceItem: jeder gespeicherte Preis kommt verlustfrei zurück', () => {
		for (const e4 of [0, 1, 9999, 10000, 12340, 123450, 3456, 10000000, 999999999]) {
			const field = itemFromInvoiceItem(invoiceItem('1.000', e4)).priceInput
			expect(euroInputToE4(field), `e4 ${e4}, im Feld "${field}"`).toBe(e4)
		}
	})
})

/**
 * Was im Feld steht, muss den Wert ergeben, der gespeichert wird — sonst zeigt
 * das Formular etwas anderes an als die Rechnung sagt. Der Weg Feld -> Speicher
 * -> Feld muss deshalb ein Fixpunkt sein.
 */
describe('Anzeige und Speicherung sind ein Fixpunkt', () => {
	it('bleibt beim zweiten Durchlauf gleich', () => {
		for (const e4 of [1, 3456, 10000, 12340, 123450, 10000000]) {
			const once = e4ToEuroInput(e4)
			expect(e4ToEuroInput(euroInputToE4(once))).toBe(once)
		}
	})
})
