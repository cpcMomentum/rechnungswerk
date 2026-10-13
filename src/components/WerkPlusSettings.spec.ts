/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { LicenseStatus } from '@/api/license'

const getLicense = vi.fn<() => Promise<LicenseStatus>>()
const activateLicense = vi.fn<(key: string, bucket: string) => Promise<LicenseStatus>>()
const refreshLicense = vi.fn<() => Promise<LicenseStatus>>()
const removeLicense = vi.fn<() => Promise<LicenseStatus>>()

vi.mock('@/api/license', () => ({
	EMPLOYEE_BUCKETS: ['1-5', '6-20', '21-50', '51-200', '200+'],
	getLicense: () => getLicense(),
	activateLicense: (key: string, bucket: string) => activateLicense(key, bucket),
	refreshLicense: () => refreshLicense(),
	removeLicense: () => removeLicense(),
}))

// Die echten Komponenten ziehen ihr CSS mit, das der Test-Runner nicht laedt.
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
vi.mock('@/components/ConfirmDialog.vue', () => ({
	default: {
		name: 'ConfirmDialog',
		props: ['open', 'name', 'message', 'confirmLabel'],
		emits: ['close', 'confirm'],
		template: '<div v-if="open" class="stub-confirm"><button class="stub-confirm-ok" @click="$emit(\'confirm\')" /></div>',
	},
}))

import WerkPlusSettings from './WerkPlusSettings.vue'

const status = (teil: Partial<LicenseStatus> = {}): LicenseStatus => ({
	instanceUuid: '3f2a1b64-9c8d-4e7f-a1b2-c3d4e5f60718',
	keySet: false,
	keyHint: null,
	employeeBucket: '1-5',
	state: 'none',
	tier: 'free',
	features: [],
	expiresAt: null,
	graceUntil: null,
	lastCheckAt: null,
	lastError: null,
	...teil,
})

const aktiv = (teil: Partial<LicenseStatus> = {}): LicenseStatus => status({
	keySet: true,
	keyHint: '…69B6',
	state: 'valid',
	tier: 'werkplus',
	features: ['tenants'],
	expiresAt: '2026-11-05T12:00:00Z',
	graceUntil: '2026-11-19T12:00:00Z',
	lastCheckAt: '2026-10-06T12:00:00Z',
	employeeBucket: '6-20',
	...teil,
})

function buttons(wrapper: ReturnType<typeof mount>): string[] {
	return wrapper.findAll('.stub-button').map((b) => b.text())
}

describe('WerkPlusSettings', () => {
	beforeEach(() => {
		getLicense.mockReset()
		activateLicense.mockReset()
		refreshLicense.mockReset()
		removeLicense.mockReset()
	})

	it('ohne Schlüssel: nur Eintragen, kein Prüfen oder Entfernen', async () => {
		getLicense.mockResolvedValue(status())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(buttons(wrapper)).toEqual(['Schlüssel prüfen und speichern'])
		expect(wrapper.find('.stub-button').attributes('disabled')).toBeDefined()
		expect(wrapper.find('dl').exists()).toBe(false)
		expect(wrapper.text()).toContain('3f2a1b64-9c8d-4e7f-a1b2-c3d4e5f60718')
	})

	it('mit Schlüssel: Tarif, Hinweis und alle Knöpfe, Größenklasse übernommen', async () => {
		getLicense.mockResolvedValue(aktiv())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--success').text()).toBe('WerkPlus ist aktiv.')
		expect(wrapper.find('dl').text()).toContain('WerkPlus')
		expect(wrapper.find('dl').text()).toContain('…69B6')
		expect(buttons(wrapper)).toEqual(['Speichern und prüfen', 'Jetzt prüfen', 'Schlüssel entfernen'])
		expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('6-20')
	})

	it('Grace-Frist: Warnung statt Erfolg', async () => {
		getLicense.mockResolvedValue(aktiv({ state: 'grace' }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--success').exists()).toBe(false)
		expect(wrapper.find('.stub-note--warning').text()).toContain('bleiben bis')
	})

	it('abgelaufen: Fehlerhinweis und Tarif Frei', async () => {
		getLicense.mockResolvedValue(aktiv({ state: 'expired', tier: 'free', features: [] }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--error').text()).toContain('freien Umfang')
		expect(wrapper.find('dl').text()).toContain('Frei')
	})

	it('sendet Schlüssel ohne Leerraum und die gewählte Größenklasse', async () => {
		getLicense.mockResolvedValue(status())
		activateLicense.mockResolvedValue(aktiv())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.find('input').setValue('  wp_ABC  ')
		await wrapper.find('select').setValue('21-50')
		await wrapper.find('.stub-button').trigger('click')
		await flushPromises()

		expect(activateLicense).toHaveBeenCalledWith('wp_ABC', '21-50')
		expect((wrapper.find('input').element as HTMLInputElement).value).toBe('')
		expect(wrapper.find('.stub-note--success').exists()).toBe(true)
	})

	it('zeigt die Fehlermeldung des Servers und lädt den Status neu', async () => {
		getLicense.mockResolvedValue(status())
		activateLicense.mockRejectedValue({ status: 400, message: 'Dieser Schlüssel ist nicht bekannt.' })
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.find('input').setValue('wp_FALSCH')
		await wrapper.find('select').setValue('51-200')
		await wrapper.find('.stub-button').trigger('click')
		await flushPromises()

		expect(wrapper.find('.stub-note--error').text()).toBe('Dieser Schlüssel ist nicht bekannt.')
		expect(getLicense).toHaveBeenCalledTimes(2)
		expect((wrapper.find('input').element as HTMLInputElement).value).toBe('wp_FALSCH')
		expect((wrapper.find('select').element as HTMLSelectElement).value).toBe('51-200')
	})

	it('Entfernen erst nach Bestätigung', async () => {
		getLicense.mockResolvedValue(aktiv())
		removeLicense.mockResolvedValue(status())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.findAll('.stub-button')[2].trigger('click')
		expect(removeLicense).not.toHaveBeenCalled()
		await wrapper.find('.stub-confirm-ok').trigger('click')
		await flushPromises()

		expect(removeLicense).toHaveBeenCalledOnce()
		expect(wrapper.find('.stub-confirm').exists()).toBe(false)
		expect(buttons(wrapper)).toEqual(['Schlüssel prüfen und speichern'])
	})
})
