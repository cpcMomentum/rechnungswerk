/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Produktauswahl (#305): Der Klick ins Feld muss die Produkte zeigen. Vorher
 * blieb die Liste ohne Suchbegriff leer — wer den Produktnamen nicht auswendig
 * wusste, musste den Rechnungsentwurf verlassen und im Produktbereich
 * nachsehen.
 */

import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductPicker from '@/components/ProductPicker.vue'
import type { Product } from '@/types/api'

function produkt(id: number, name: string): Product {
	return {
		id,
		name,
		description: '',
		defaultPriceE4: 950000,
		defaultUnitCode: 'HUR',
		defaultUnitLabel: '',
		defaultTaxRateBp: 1900,
	} as Product
}

function vieleProdukte(anzahl: number): Product[] {
	return Array.from({ length: anzahl }, (_, i) => produkt(i + 1, `Leistung ${String(i + 1).padStart(3, '0')}`))
}

function mounten(products: Product[]) {
	return mount(ProductPicker, { props: { products } })
}

describe('ProductPicker — Klick ins Feld zeigt die Auswahl (#305)', () => {
	it('zeigt beim Fokus alle Produkte, ohne dass getippt wurde', async () => {
		const w = mounten([produkt(1, 'Beratungsstunde'), produkt(2, 'Workshop')])

		await w.find('input').trigger('focus')

		const eintraege = w.findAll('.product-picker__item')
		expect(eintraege).toHaveLength(2)
		expect(eintraege[0].text()).toContain('Beratungsstunde')
		expect(eintraege[1].text()).toContain('Workshop')
	})

	it('nennt in der Kopfzeile, dass man alle sieht', async () => {
		const w = mounten([produkt(1, 'Beratungsstunde'), produkt(2, 'Workshop')])

		await w.find('input').trigger('focus')

		expect(w.find('.product-picker__head').text()).toContain('2')
	})

	it('grenzt beim Tippen weiter ein', async () => {
		const w = mounten([produkt(1, 'Beratungsstunde'), produkt(2, 'Workshop')])

		const input = w.find('input')
		await input.setValue('work')

		const eintraege = w.findAll('.product-picker__item')
		expect(eintraege).toHaveLength(1)
		expect(eintraege[0].text()).toContain('Workshop')
	})

	it('zeigt auch bei vielen Produkten ALLE, die Liste scrollt', async () => {
		// Bewusst keine Obergrenze: Eine abgeschnittene Liste verschweigt, was
		// es sonst noch gibt. Scrollen loest das besser als Weglassen.
		const w = mounten(vieleProdukte(50))

		await w.find('input').trigger('focus')

		expect(w.findAll('.product-picker__item')).toHaveLength(50)
		expect(w.find('.product-picker__head').text()).toContain('50')
	})

	it('oeffnet nichts, wenn es keine Produkte gibt', async () => {
		const w = mounten([])

		await w.find('input').trigger('focus')

		expect(w.find('.product-picker__panel').exists()).toBe(false)
	})

	it('oeffnet die Liste auch beim zweiten Klick, wenn der Fokus im Feld blieb', async () => {
		// Nach einer Auswahl schliesst choose() die Liste, der Fokus bleibt aber
		// im Feld. Haengt das Oeffnen nur an `focus`, bleibt die Liste danach zu
		// und man kommt ohne Umweg nicht mehr an sie heran.
		const w = mounten([produkt(1, 'Beratungsstunde')])
		const input = w.find('input')

		await input.trigger('focus')
		await w.find('.product-picker__item').trigger('mousedown')
		expect(w.find('.product-picker__panel').exists()).toBe(false)

		await input.trigger('click')

		expect(w.find('.product-picker__panel').exists()).toBe(true)
	})

	it('bleibt offen, wenn nach einem blur sofort zurueckgeklickt wird', async () => {
		// onBlur schliesst mit 150 ms Verzoegerung. Wird in dieser Zeit erneut
		// ins Feld geklickt, darf der alte Timer die frisch geoeffnete Liste
		// nicht wieder zumachen — genau das passierte auf der Testinstanz.
		vi.useFakeTimers()
		const w = mounten([produkt(1, 'Beratungsstunde')])
		const input = w.find('input')

		await input.trigger('focus')
		await input.trigger('blur')
		await input.trigger('click')
		vi.advanceTimersByTime(300)
		await w.vm.$nextTick()

		expect(w.find('.product-picker__panel').exists()).toBe(true)
		vi.useRealTimers()
	})

	it('meldet die Auswahl nach oben und leert das Feld', async () => {
		const w = mounten([produkt(1, 'Beratungsstunde')])

		await w.find('input').trigger('focus')
		await w.find('.product-picker__item').trigger('mousedown')

		expect(w.emitted('select')).toHaveLength(1)
		expect((w.emitted('select') as unknown[][])[0][0]).toMatchObject({ name: 'Beratungsstunde' })
		expect(w.find('.product-picker__panel').exists()).toBe(false)
	})
})
