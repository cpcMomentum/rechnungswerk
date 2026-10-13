/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Positionstabelle: zwei Bedienfehler rund ums Einfügen von Produkten.
 *
 * #346 — Ohne angelegte Produkte fehlte das Auswahlfeld ganz, weil es an
 * `products.length > 0` hing. Ein neuer Nutzer erfuhr nie, dass es die
 * Funktion gibt.
 *
 * #347 — Ein eingefügtes Produkt wurde ANGEHÄNGT, sodass die leere Startzeile
 * des Entwurfs als erste Position mit 0,00 € stehen blieb.
 */

import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import InvoiceItemsTable from '@/components/InvoiceItemsTable.vue'
import { emptyItem } from '@/types/editor'
import type { EditorItem } from '@/types/editor'
import type { Product } from '@/types/api'

const push = vi.fn()
vi.mock('vue-router', () => ({ useRouter: () => ({ push }) }))

// Die echten Komponenten ziehen ihr CSS mit, das der Test-Runner nicht laedt
// (gleiches Muster wie in WhatsNewDialog.spec.ts).
vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: {
		name: 'NcButton',
		props: ['variant', 'ariaLabel'],
		emits: ['click'],
		template: '<button @click="$emit(\'click\')"><slot name="icon" /><slot /></button>',
	},
}))

function produkt(name: string): Product {
	return {
		id: 7,
		name,
		description: '',
		defaultPriceE4: 950000,
		defaultUnitCode: 'HUR',
		defaultUnitLabel: '',
		defaultTaxRateBp: 1900,
	} as Product
}

function benutzteZeile(name: string): EditorItem {
	return { ...emptyItem(), name, priceInput: '42,00' }
}

function mounten(items: EditorItem[], products: Product[]) {
	return mount(InvoiceItemsTable, {
		props: { items, products },
		global: {
			stubs: {
				ProductPicker: { name: 'ProductPicker', template: '<div class="stub-picker" />' },
			},
		},
	})
}

describe('Positionstabelle — Auswahl im Leerzustand (#346)', () => {
	it('zeigt das Auswahlfeld, sobald Produkte da sind', () => {
		const w = mounten([emptyItem()], [produkt('Beratungsstunde')])

		expect(w.findComponent({ name: 'ProductPicker' }).exists()).toBe(true)
	})

	it('zeigt ohne Produkte stattdessen einen Weg zum Produktbereich', () => {
		const w = mounten([emptyItem()], [])

		expect(w.findComponent({ name: 'ProductPicker' }).exists()).toBe(false)
		// Der Kern von #346: Es steht dort ETWAS. Vorher war die Stelle leer.
		expect(w.find('.rw-toolbar').text()).toContain('Produkte')
	})
})

describe('Positionstabelle — Produkt füllt die leere Zeile (#347)', () => {
	it('ersetzt die unberührte Startzeile, statt anzuhängen', async () => {
		const items: EditorItem[] = [emptyItem()]
		const w = mounten(items, [produkt('Beratungsstunde')])

		w.findComponent({ name: 'ProductPicker' }).vm.$emit('select', produkt('Beratungsstunde'))
		await w.vm.$nextTick()

		const nachher = w.props('items') as EditorItem[]
		expect(nachher).toHaveLength(1)
		expect(nachher[0].name).toBe('Beratungsstunde')
	})

	it('hängt an, wenn die letzte Zeile schon benutzt ist', async () => {
		const items: EditorItem[] = [benutzteZeile('Eigene Leistung')]
		const w = mounten(items, [produkt('Beratungsstunde')])

		w.findComponent({ name: 'ProductPicker' }).vm.$emit('select', produkt('Beratungsstunde'))
		await w.vm.$nextTick()

		const nachher = w.props('items') as EditorItem[]
		expect(nachher).toHaveLength(2)
		expect(nachher[0].name).toBe('Eigene Leistung')
		expect(nachher[1].name).toBe('Beratungsstunde')
	})

	it('legt keine zweite Leerzeile an, wenn schon eine dasteht', async () => {
		const items: EditorItem[] = [emptyItem()]
		const w = mounten(items, [])

		await w.find('.rw-toolbar button').trigger('click')

		expect((w.props('items') as EditorItem[])).toHaveLength(1)
	})
})
