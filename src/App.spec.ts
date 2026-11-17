/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import type { PermissionInfo } from '@/api/permissions'

const getPermissionInfo = vi.fn<() => Promise<PermissionInfo>>()
const openArchive = vi.fn()

vi.mock('@/api/permissions', () => ({
	getPermissionInfo: () => getPermissionInfo(),
}))

vi.mock('@/components/WhatsNewDialog.vue', () => ({
	default: {
		name: 'WhatsNewDialog',
		setup(_: unknown, { expose }: { expose: (e: Record<string, unknown>) => void }) {
			expose({ openArchive })
			return () => null
		},
	},
}))

vi.mock('@nextcloud/vue/components/NcContent', () => ({ default: { name: 'NcContent', template: '<div><slot /></div>' } }))
vi.mock('@nextcloud/vue/components/NcAppContent', () => ({ default: { name: 'NcAppContent', template: '<div><slot /></div>' } }))
vi.mock('@nextcloud/vue/components/NcAppNavigation', () => ({
	default: { name: 'NcAppNavigation', template: '<nav><slot /><footer class="stub-footer"><slot name="footer" /></footer></nav>' },
}))
vi.mock('@nextcloud/vue/components/NcAppNavigationItem', () => ({
	default: {
		name: 'NcAppNavigationItem',
		props: ['name', 'to'],
		emits: ['click'],
		template: '<a class="stub-nav" href="#" @click="$emit(\'click\', $event)">{{ name }}</a>',
	},
}))
vi.mock('@nextcloud/vue/components/NcEmptyContent', () => ({
	default: { name: 'NcEmptyContent', props: ['name', 'description'], template: '<div class="stub-empty">{{ name }}</div>' },
}))
vi.mock('@nextcloud/vue/components/NcLoadingIcon', () => ({ default: { name: 'NcLoadingIcon', template: '<span />' } }))

import App from './App.vue'

const mountApp = async (info: PermissionInfo) => {
	getPermissionInfo.mockResolvedValue(info)
	const wrapper = mount(App, {
		global: { plugins: [createPinia()], stubs: { 'router-view': true } },
	})
	await flushPromises()
	return wrapper
}

const footer = (wrapper: Awaited<ReturnType<typeof mountApp>>) =>
	wrapper.findAll('.stub-footer .stub-nav').map(a => a.text())

describe('App-Navigation', () => {
	beforeEach(() => {
		openArchive.mockReset()
	})

	it('ordnet den Fuss nach dem Design-System', async () => {
		const wrapper = await mountApp({ isAdmin: true, hasAccess: true, canEdit: true })

		expect(footer(wrapper)).toEqual(['Protokoll', 'Neuerungen', 'Einstellungen', 'Verwaltung'])
	})

	it('blendet die Verwaltung fuer Nicht-Admins aus', async () => {
		const wrapper = await mountApp({ isAdmin: false, hasAccess: true, canEdit: true })

		expect(footer(wrapper)).toEqual(['Protokoll', 'Neuerungen', 'Einstellungen'])
	})

	it('oeffnet bei „Neuerungen" das Archiv, ohne die Seite zu wechseln', async () => {
		const wrapper = await mountApp({ isAdmin: false, hasAccess: true, canEdit: true })
		const item = wrapper.findAll('.stub-nav').find(a => a.text() === 'Neuerungen')!
		const event = new MouseEvent('click', { cancelable: true })

		item.element.dispatchEvent(event)

		expect(openArchive).toHaveBeenCalledTimes(1)
		expect(event.defaultPrevented).toBe(true)
	})

	it('zeigt ohne Zugriff weder Navigation noch Neuerungen', async () => {
		const wrapper = await mountApp({ isAdmin: false, hasAccess: false, canEdit: false })

		expect(wrapper.find('.stub-nav').exists()).toBe(false)
		expect(wrapper.find('.stub-empty').text()).toBe('Kein Zugriff')
	})
})
