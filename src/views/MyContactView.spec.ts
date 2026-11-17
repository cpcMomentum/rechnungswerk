/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { MeContactDefaults } from '@/types/api'

const getMyContact = vi.fn<() => Promise<MeContactDefaults>>()
const saveMyContact = vi.fn<(d: MeContactDefaults) => Promise<MeContactDefaults>>()
const getMyContactDefaults = vi.fn<() => Promise<MeContactDefaults>>()

vi.mock('@/api/me', () => ({
	getMyContact: () => getMyContact(),
	saveMyContact: (d: MeContactDefaults) => saveMyContact(d),
}))
vi.mock('@/api/contacts', () => ({
	getMyContactDefaults: () => getMyContactDefaults(),
}))
vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: {
		name: 'NcButton',
		props: ['variant', 'disabled'],
		emits: ['click'],
		template: '<button class="stub-button" :disabled="disabled" @click="$emit(\'click\')"><slot /></button>',
	},
}))
vi.mock('@nextcloud/vue/components/NcNoteCard', () => ({
	default: {
		name: 'NcNoteCard',
		props: ['type', 'text'],
		template: '<div :class="[\'stub-note\', \'stub-note--\' + type]">{{ text }}</div>',
	},
}))

import MyContactView from './MyContactView.vue'

const kontakt = (person: string): MeContactDefaults => ({ person, phone: '040 1', email: 'a@b.de' })
const button = (wrapper: ReturnType<typeof mount>, text: string) =>
	wrapper.findAll('.stub-button').find(b => b.text() === text)!

describe('MyContactView (persönliche Einstellungen)', () => {
	beforeEach(() => {
		getMyContact.mockReset()
		saveMyContact.mockReset()
		getMyContactDefaults.mockReset()
	})

	it('zeigt die Seite Einstellungen mit Gruppe und genau einem Abschnitt', async () => {
		getMyContact.mockResolvedValue(kontakt('Lea'))
		const wrapper = mount(MyContactView)
		await flushPromises()

		expect(wrapper.find('h2').text()).toBe('Einstellungen')
		expect(wrapper.find('.rw-subnav__group').text()).toBe('Persönlich')
		expect(wrapper.find('.rw-subnav__item').attributes('aria-current')).toBe('page')
		expect(wrapper.findAll('section.rw-section')).toHaveLength(1)
		expect(wrapper.find('section h3').text()).toBe('Ansprechpartner')
	})

	it('speichert die geänderten Felder und meldet Erfolg', async () => {
		getMyContact.mockResolvedValue(kontakt('Lea'))
		saveMyContact.mockImplementation(async d => d)
		const wrapper = mount(MyContactView)
		await flushPromises()

		await wrapper.find('input[type=text]').setValue('Lea Neu')
		await button(wrapper, 'Speichern').trigger('click')
		await flushPromises()

		expect(saveMyContact).toHaveBeenCalledWith(expect.objectContaining({ person: 'Lea Neu' }))
		expect(wrapper.find('.stub-note--success').text()).toBe('Gespeichert.')
	})

	it('übernimmt die Daten aus dem Nextcloud-Konto in die Felder', async () => {
		getMyContact.mockResolvedValue(kontakt(''))
		getMyContactDefaults.mockResolvedValue(kontakt('Aus Konto'))
		const wrapper = mount(MyContactView)
		await flushPromises()

		await button(wrapper, 'Aus meinem Nextcloud-Konto übernehmen').trigger('click')
		await flushPromises()

		expect((wrapper.find('input[type=text]').element as HTMLInputElement).value).toBe('Aus Konto')
	})

	it('meldet Fehler beim Laden und Speichern', async () => {
		getMyContact.mockRejectedValue({ message: 'Laden kaputt' })
		const wrapper = mount(MyContactView)
		await flushPromises()
		expect(wrapper.find('.stub-note--error').text()).toBe('Laden kaputt')

		getMyContact.mockResolvedValue(kontakt('Lea'))
		saveMyContact.mockRejectedValue({ message: 'Speichern kaputt' })
		const second = mount(MyContactView)
		await flushPromises()
		await button(second, 'Speichern').trigger('click')
		await flushPromises()
		expect(second.find('.stub-note--error').text()).toBe('Speichern kaputt')
	})
})
