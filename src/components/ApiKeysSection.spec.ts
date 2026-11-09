/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { ApiKey, CreatedApiKey } from '@/api/apiKeys'

const getApiKeys = vi.fn<() => Promise<ApiKey[]>>()
const createApiKey = vi.fn<(name: string, scopes: string[], rateLimit: number | null) => Promise<CreatedApiKey>>()
const revokeApiKey = vi.fn<(id: number) => Promise<void>>()

vi.mock('@/api/apiKeys', () => ({
	getApiKeys: () => getApiKeys(),
	createApiKey: (name: string, scopes: string[], rateLimit: number | null) => createApiKey(name, scopes, rateLimit),
	revokeApiKey: (id: number) => revokeApiKey(id),
}))

vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: {
		name: 'NcButton',
		props: ['variant', 'disabled'],
		emits: ['click'],
		template: '<button class="stub-button" :disabled="disabled" @click="$emit(\'click\')"><slot /></button>',
	},
}))
vi.mock('@nextcloud/vue/components/NcModal', () => ({
	default: {
		name: 'NcModal',
		props: ['name'],
		emits: ['close'],
		template: '<div v-if="true" class="stub-modal"><slot /></div>',
	},
}))
vi.mock('@nextcloud/vue/components/NcNoteCard', () => ({
	default: {
		name: 'NcNoteCard',
		props: ['type', 'text'],
		template: '<div :class="[\'stub-note\', \'stub-note--\' + type]"><slot>{{ text }}</slot></div>',
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

import ApiKeysSection from './ApiKeysSection.vue'

const KEY: ApiKey = {
	id: 1,
	ownerId: 'alice',
	name: 'WerkPlus',
	keyPrefix: 'rwrk_abc123',
	scopes: ['invoices:create', 'invoices:read'],
	createdAt: 1760000000,
	lastUsedAt: null,
	revokedAt: null,
	rateLimit: null,
}

describe('ApiKeysSection', () => {
	beforeEach(() => {
		getApiKeys.mockReset()
		createApiKey.mockReset()
		revokeApiKey.mockReset()
	})

	it('zeigt einen leeren Hinweis ohne Schlüssel', async () => {
		getApiKeys.mockResolvedValue([])
		const wrapper = mount(ApiKeysSection)
		await flushPromises()

		expect(wrapper.text()).toContain('Noch kein API-Schlüssel angelegt.')
		expect(wrapper.find('table').exists()).toBe(false)
	})

	it('listet die Schlüssel mit ihren Rechten', async () => {
		getApiKeys.mockResolvedValue([KEY])
		const wrapper = mount(ApiKeysSection)
		await flushPromises()

		expect(wrapper.find('table').text()).toContain('WerkPlus')
		expect(wrapper.find('table').text()).toContain('rwrk_abc123')
		expect(wrapper.find('table').text()).toContain('Rechnungen anlegen, Rechnungen lesen')
	})

	it('zeigt widerrufene Schlüssel ohne Widerrufs-Knopf', async () => {
		getApiKeys.mockResolvedValue([{ ...KEY, revokedAt: 1759999999 }])
		const wrapper = mount(ApiKeysSection)
		await flushPromises()

		const labels = wrapper.findAll('.stub-button').map((b) => b.text())
		expect(wrapper.text()).toContain('Widerrufen')
		expect(labels).toContain('API-Schlüssel anlegen')
		expect(labels).not.toContain('Widerrufen')
	})

	it('zeigt den Klartext nach dem Anlegen genau einmal', async () => {
		getApiKeys.mockResolvedValue([])
		createApiKey.mockResolvedValue({ ...KEY, plaintext: 'rwrk_newplaintext' })
		const wrapper = mount(ApiKeysSection)
		await flushPromises()

		await wrapper.find('.stub-button').trigger('click')
		const nameInput = wrapper.find('input[type="text"]')
		await nameInput.setValue('WerkPlus')
		const checkboxes = wrapper.findAll('input[type="checkbox"]')
		await checkboxes[0].setValue(true)
		// [0] anlegen öffnet das Modal, [1] ist Abbrechen, [2] ist Anlegen.
		await wrapper.findAll('.stub-button')[2].trigger('click')
		await flushPromises()

		expect(createApiKey).toHaveBeenCalledWith('WerkPlus', ['invoices:create'], null)
		expect(wrapper.text()).toContain('rwrk_newplaintext')
	})

	it('übergibt ein gesetztes Rate-Limit', async () => {
		getApiKeys.mockResolvedValue([])
		createApiKey.mockResolvedValue({ ...KEY, plaintext: 'rwrk_newplaintext' })
		const wrapper = mount(ApiKeysSection)
		await flushPromises()

		await wrapper.find('.stub-button').trigger('click')
		await wrapper.find('input[type="text"]').setValue('WerkPlus')
		await wrapper.find('input[type="checkbox"]').setValue(true)
		await wrapper.find('input[type="number"]').setValue('500')
		await wrapper.findAll('.stub-button')[2].trigger('click')
		await flushPromises()

		expect(createApiKey).toHaveBeenCalledWith('WerkPlus', ['invoices:create'], 500)
	})

	it('zeigt ein eigenes Rate-Limit und den Standard an', async () => {
		getApiKeys.mockResolvedValue([
			{ ...KEY, id: 1, rateLimit: 500 },
			{ ...KEY, id: 2 },
		])
		const wrapper = mount(ApiKeysSection)
		await flushPromises()

		expect(wrapper.find('table').text()).toContain('500')
		expect(wrapper.find('table').text()).toContain('Standard (60)')
	})
})
