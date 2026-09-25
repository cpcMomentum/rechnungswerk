/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * „Was ist neu?"-Fenster (#308): Das Fenster darf nur erscheinen, wenn es
 * wirklich etwas zu berichten gibt, und es darf die App nie blockieren.
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { WhatsNewEntry, WhatsNewPayload } from '@/types/api'

const getWhatsNew = vi.fn<() => Promise<WhatsNewPayload>>()
const markWhatsNewSeen = vi.fn<() => Promise<void>>()

vi.mock('@/api/whatsnew', () => ({
	getWhatsNew: () => getWhatsNew(),
	markWhatsNewSeen: () => markWhatsNewSeen(),
}))

// Die echten Komponenten ziehen ihr CSS mit, das der Test-Runner nicht laedt.
vi.mock('@nextcloud/vue/components/NcModal', () => ({
	default: {
		name: 'NcModal',
		// Bewusst `labelId` statt `name`: NcModal baut aus `name` eine eigene
		// Kopfzeile, die am oberen Bildschirmrand schwebt und dort die
		// Nextcloud-Leiste ueberdeckt (#308).
		props: ['labelId', 'name'],
		emits: ['close'],
		template: '<div class="stub-modal"><slot /></div>',
	},
}))
vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: {
		name: 'NcButton',
		props: ['variant'],
		emits: ['click'],
		template: '<button class="stub-button" @click="$emit(\'click\')"><slot /></button>',
	},
}))

import WhatsNewDialog from './WhatsNewDialog.vue'

const eintrag = (teil: Partial<WhatsNewEntry>): WhatsNewEntry => ({
	title: 'Adresszusatz beim Kunden',
	text: 'Zweite Adresszeile.',
	icon: 'account-group',
	where: '',
	adminOnly: false,
	plus: false,
	...teil,
})

const payload = (entries: WhatsNewPayload['entries']): WhatsNewPayload => ({
	version: '0.5.3',
	entries,
})

describe('WhatsNewDialog', () => {
	beforeEach(() => {
		getWhatsNew.mockReset()
		markWhatsNewSeen.mockReset()
		markWhatsNewSeen.mockResolvedValue(undefined)
	})

	it('zeigt kein Fenster, wenn es nichts zu berichten gibt', async () => {
		getWhatsNew.mockResolvedValue(payload([]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		expect(wrapper.find('.stub-modal').exists()).toBe(false)
	})

	it('zeigt Titel und Text der Eintraege', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ title: 'Adresszusatz beim Kunden', text: 'Zweite Adresszeile.', plus: false }),
			eintrag({ title: 'Ablageordner', text: 'Pfad bleibt stehen.', plus: false }),
		]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		expect(wrapper.find('.stub-modal').exists()).toBe(true)
		expect(wrapper.text()).toContain('Adresszusatz beim Kunden')
		expect(wrapper.text()).toContain('Pfad bleibt stehen.')
		expect(wrapper.findAll('.whatsnew__entry')).toHaveLength(2)
	})

	it('quittiert beim Schliessen und schliesst das Fenster', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ title: 'Adresszusatz beim Kunden', text: 'Zweite Adresszeile.', plus: false }),
		]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		await wrapper.find('.stub-button').trigger('click')
		await flushPromises()

		expect(markWhatsNewSeen).toHaveBeenCalledTimes(1)
		expect(wrapper.find('.stub-modal').exists()).toBe(false)
	})

	it('zeigt Badge und Link nur bei WerkPlus-Eintraegen', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ title: 'WerkPlus ist da', text: 'Alles zusammen.', plus: true }),
			eintrag({ title: 'Adresszusatz', text: 'Zweite Adresszeile.', plus: false }),
		]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		const badges = wrapper.findAll('.whatsnew__badge')
		expect(badges).toHaveLength(1)
		expect(badges[0].text()).toBe('WerkPlus')

		const links = wrapper.findAll('.whatsnew__link')
		expect(links).toHaveLength(1)
		expect(links[0].attributes('href')).toBe('https://werkwolke.de')
		expect(links[0].attributes('rel')).toContain('noopener')
	})

	it('zeigt die Fundort-Zeile nur, wenn ein Ort angegeben ist', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ title: 'Mit Ort', where: 'Kunden' }),
			eintrag({ title: 'Ohne Ort', where: '' }),
		]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		const zeilen = wrapper.findAll('.whatsnew__where')
		expect(zeilen).toHaveLength(1)
		expect(zeilen[0].text()).toContain('Kunden')
	})

	it('schreibt bei adminpflichtigen Stellen den Hinweis dazu', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ where: 'Einstellungen', adminOnly: true }),
		]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		expect(wrapper.find('.whatsnew__where').text()).toContain('Administratoren')
	})

	it('zeigt zu jedem Eintrag ein Symbol, auch bei unbekanntem Namen', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ title: 'Bekannt', icon: 'folder' }),
			eintrag({ title: 'Unbekannt', icon: 'gibt-es-nicht' }),
			eintrag({ title: 'Leer', icon: '' }),
		]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		const symbole = wrapper.findAll('.whatsnew__icon')
		expect(symbole).toHaveLength(3)
		for (const symbol of symbole) {
			expect(symbol.find('svg').exists()).toBe(true)
		}
	})

	it('beschriftet NcModal ueber die eigene Ueberschrift, nicht ueber name', async () => {
		getWhatsNew.mockResolvedValue(payload([eintrag({})]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		const modal = wrapper.findComponent({ name: 'NcModal' })
		expect(modal.props('name')).toBeUndefined()
		expect(modal.props('labelId')).toBe('whatsnew-title')
		expect(wrapper.find('h2').attributes('id')).toBe('whatsnew-title')
	})

	it('quittiert auch beim Schliessen ueber X oder Escape', async () => {
		getWhatsNew.mockResolvedValue(payload([eintrag({})]))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		// NcModal meldet X, Escape und den Klick daneben ueber dasselbe Ereignis.
		wrapper.findComponent({ name: 'NcModal' }).vm.$emit('close')
		await flushPromises()

		expect(markWhatsNewSeen).toHaveBeenCalledTimes(1)
		expect(wrapper.find('.stub-modal').exists()).toBe(false)
	})

	it('bleibt still, wenn der Abruf scheitert', async () => {
		getWhatsNew.mockRejectedValue(new Error('offline'))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		expect(wrapper.find('.stub-modal').exists()).toBe(false)
	})

	it('schliesst auch dann, wenn die Quittung scheitert', async () => {
		getWhatsNew.mockResolvedValue(payload([
			eintrag({ title: 'Adresszusatz', text: 'Zweite Adresszeile.', plus: false }),
		]))
		markWhatsNewSeen.mockRejectedValue(new Error('offline'))

		const wrapper = mount(WhatsNewDialog)
		await flushPromises()

		await wrapper.find('.stub-button').trigger('click')
		await flushPromises()

		expect(wrapper.find('.stub-modal').exists()).toBe(false)
	})
})
