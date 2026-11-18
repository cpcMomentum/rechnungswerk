/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it, vi, beforeEach } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { LicenseStatus } from '@/api/license'

const getLicense = vi.fn<() => Promise<LicenseStatus>>()
const activateLicense = vi.fn<(key: string) => Promise<LicenseStatus>>()
const refreshLicense = vi.fn<() => Promise<LicenseStatus>>()
const removeLicense = vi.fn<() => Promise<LicenseStatus>>()
const startTrial = vi.fn<() => Promise<{ key: string, status: LicenseStatus }>>()

const LINKS = {
	buy: 'https://werkwolke.de/preis?app=rechnungswerk',
	features: 'https://werkwolke.de/funktionen#rechnungswerk',
	trial: 'https://werkwolke.de/testen?app=rechnungswerk',
}
vi.mock('@/werkplusLinks', () => ({ werkplusLinks: () => LINKS }))

vi.mock('@/api/license', () => ({
	getLicense: () => getLicense(),
	activateLicense: (key: string) => activateLicense(key),
	refreshLicense: () => refreshLicense(),
	removeLicense: () => removeLicense(),
	startTrial: () => startTrial(),
}))

// Die echten Komponenten ziehen ihr CSS mit, das der Test-Runner nicht laedt.
vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: {
		name: 'NcButton',
		props: ['variant', 'disabled', 'href', 'target'],
		emits: ['click'],
		template: '<a v-if="href" class="stub-button" :href="href" :target="target"><slot /></a><button v-else class="stub-button" :disabled="disabled" @click="$emit(\'click\')"><slot /></button>',
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

import WerkPlusSettings from './WerkPlusSettings.vue'

const status = (teil: Partial<LicenseStatus> = {}): LicenseStatus => ({
	instanceUuid: '8cb3c100-9e4c-5375-9e63-1f4d122ea315',
	keySet: false,
	keyHint: null,
	licensedEmployees: null,
	state: 'none',
	tier: 'free',
	features: [],
	trial: false,
	licenseValidUntil: null,
	trialEnded: false,
	expiresAt: null,
	graceUntil: null,
	lastCheckAt: null,
	lastError: null,
	storeTooNew: false,
	canManage: true,
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
		startTrial.mockReset()
	})

	it('ohne Schlüssel: Eintragen und Testen, kein Prüfen oder Entfernen', async () => {
		getLicense.mockResolvedValue(status())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(buttons(wrapper)).toEqual(['Schlüssel prüfen und speichern', '30 Tage testen', 'WerkPlus kaufen'])
		expect(wrapper.find('.stub-button').attributes('disabled')).toBeDefined()
		expect(wrapper.find('dl').exists()).toBe(false)
		expect(wrapper.text()).toContain('8cb3c100-9e4c-5375-9e63-1f4d122ea315')
	})

	it('mit Schlüssel: Tarif, Hinweis und alle Knöpfe, keine Größenklasse', async () => {
		getLicense.mockResolvedValue(aktiv())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--success').text()).toBe('WerkPlus ist aktiv.')
		expect(wrapper.find('dl').text()).toContain('WerkPlus')
		expect(wrapper.find('dl').text()).toContain('…69B6')
		expect(buttons(wrapper)).toEqual(['Speichern und prüfen', 'Jetzt prüfen', 'Schlüssel entfernen'])
		expect(wrapper.find('select').exists()).toBe(false)
		expect(wrapper.text()).not.toContain('Größenklasse')
		expect(wrapper.find('dl').text()).not.toContain('Lizenzierte Mitarbeitende')
	})

	it('gekaufte Lizenz: zeigt, für wie viele Mitarbeitende sie gilt', async () => {
		getLicense.mockResolvedValue(aktiv({ licensedEmployees: 12 }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		const facts = wrapper.findAll('dl > *').map((el) => el.text())
		expect(facts[facts.indexOf('Lizenzierte Mitarbeitende') + 1]).toBe('12')
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

	it('sendet nur den Schlüssel ohne Leerraum', async () => {
		getLicense.mockResolvedValue(status())
		activateLicense.mockResolvedValue(aktiv())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.find('input').setValue('  wp_ABC  ')
		await wrapper.find('.stub-button').trigger('click')
		await flushPromises()

		expect(activateLicense).toHaveBeenCalledWith('wp_ABC')
		expect((wrapper.find('input').element as HTMLInputElement).value).toBe('')
		expect(wrapper.find('.stub-note--success').exists()).toBe(true)
	})

	it('zeigt die Fehlermeldung des Servers und lädt den Status neu', async () => {
		getLicense.mockResolvedValue(status())
		activateLicense.mockRejectedValue({ status: 400, message: 'Dieser Schlüssel ist nicht bekannt.' })
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.find('input').setValue('wp_FALSCH')
		await wrapper.find('.stub-button').trigger('click')
		await flushPromises()

		expect(wrapper.find('.stub-note--error').text()).toBe('Dieser Schlüssel ist nicht bekannt.')
		expect(getLicense).toHaveBeenCalledTimes(2)
		expect((wrapper.find('input').element as HTMLInputElement).value).toBe('wp_FALSCH')
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
		expect(buttons(wrapper)).toEqual(['Schlüssel prüfen und speichern', '30 Tage testen', 'WerkPlus kaufen'])
	})

	it('Testzeitraum erst nach Bestätigung, zeigt den Schlüssel einmal', async () => {
		getLicense.mockResolvedValue(status())
		startTrial.mockResolvedValue({ key: 'wp_TESTKEY', status: aktiv({ keyHint: '…EKEY' }) })
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.findAll('.stub-button')[1].trigger('click')
		expect(startTrial).not.toHaveBeenCalled()
		await wrapper.find('.stub-confirm-ok').trigger('click')
		await flushPromises()

		expect(startTrial).toHaveBeenCalledWith()
		expect(wrapper.find('.rw-werkplus__trial-key').text()).toContain('wp_TESTKEY')
		expect(buttons(wrapper)).not.toContain('30 Tage testen')

		getLicense.mockResolvedValue(aktiv({ keyHint: '…EKEY' }))
		const neu = mount(WerkPlusSettings)
		await flushPromises()
		expect(neu.text()).not.toContain('wp_TESTKEY')
		expect(neu.find('dl').text()).toContain('…EKEY')
	})

	it('Token noch nicht geprüft: eigener Text, Schlüssel bleibt beim Prüfen sichtbar', async () => {
		getLicense.mockResolvedValue(status())
		const offen = status({ keySet: true, keyHint: '…EKEY', lastError: { code: 'TOKEN_REJECTED', message: 'nicht übernommen', at: null } })
		startTrial.mockResolvedValue({ key: 'wp_TESTKEY', status: offen })
		refreshLicense.mockResolvedValue(aktiv({ keyHint: '…EKEY' }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.findAll('.stub-button')[1].trigger('click')
		await wrapper.find('.stub-confirm-ok').trigger('click')
		await flushPromises()
		expect(wrapper.find('.rw-werkplus__trial-key').text()).toContain('noch nicht geprüft')
		expect(wrapper.find('.rw-werkplus__trial-key').text()).toContain('wp_TESTKEY')

		await wrapper.findAll('.stub-button').find((b) => b.text() === 'Jetzt prüfen')!.trigger('click')
		await flushPromises()
		expect(wrapper.find('.rw-werkplus__trial-key').text()).toContain('Der Testzeitraum läuft.')
		expect(wrapper.find('.rw-werkplus__trial-key').text()).toContain('wp_TESTKEY')
	})

	it('schon genutzter Testzeitraum: ruhiger Hinweis statt Fehler', async () => {
		getLicense.mockResolvedValue(status())
		startTrial.mockRejectedValue({ status: 400, code: 'TRIAL_ALREADY_USED', message: 'Diese Installation hat den Testzeitraum bereits genutzt.' })
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.findAll('.stub-button')[1].trigger('click')
		await wrapper.find('.stub-confirm-ok').trigger('click')
		await flushPromises()

		expect(wrapper.find('.stub-note--info').text()).toContain('bereits genutzt')
		expect(wrapper.find('.stub-note--error').exists()).toBe(false)
		expect(wrapper.find('.rw-werkplus__trial-key').exists()).toBe(false)
	})

	it('abgeschalteter Testzeitraum: Fehlerhinweis mit Verweis', async () => {
		getLicense.mockResolvedValue(status())
		startTrial.mockRejectedValue({ status: 400, code: 'TRIAL_UNAVAILABLE', message: 'Unter werkwolke.de/testen steht, wie es geht.' })
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		await wrapper.findAll('.stub-button')[1].trigger('click')
		await wrapper.find('.stub-confirm-ok').trigger('click')
		await flushPromises()

		expect(wrapper.find('.stub-note--error').text()).toContain('werkwolke.de/testen')
		expect(wrapper.find('.stub-note--error a').attributes('href')).toBe(LINKS.trial)
	})

	it('App-Admin ohne Nextcloud-Admin: sieht den Status, kann den Schlüssel nicht ändern', async () => {
		getLicense.mockResolvedValue(aktiv({ canManage: false }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(buttons(wrapper)).toEqual(['Jetzt prüfen'])
		expect(wrapper.find('input').exists()).toBe(false)
		expect(wrapper.text()).toContain('nur Nextcloud-Admins')
		expect(wrapper.text()).toContain('WerkPlus ist aktiv.')
	})

	it('Ablage in neuerem Format: Hinweis auf Update', async () => {
		getLicense.mockResolvedValue(aktiv({ storeTooNew: true }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--warning').text()).toContain('neueren Format')
		expect(buttons(wrapper)).toEqual([])
		expect(wrapper.find('input').exists()).toBe(false)
	})

	it('nennt die abgeleitete Kennung und dass der Schlüssel für alle Werk-Apps gilt', async () => {
		getLicense.mockResolvedValue(status())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.text()).toContain('alle Werk-Apps dieser Nextcloud')
		expect(wrapper.text()).toContain('Eine aus dieser Nextcloud abgeleitete Kennung')
		expect(wrapper.text()).toContain('8cb3c100-9e4c-5375-9e63-1f4d122ea315')
	})

	const facts = (wrapper: ReturnType<typeof mount>) => wrapper.findAll('dl > *').map((el) => el.text())
	const inDays = (days: number) => new Date(Date.now() + days * 86400000 - 60000).toISOString()

	it('Testzeitraum läuft: Tarif, Ende mit Resttagen, Jetzt kaufen und Hinweis zum Schlüssel', async () => {
		getLicense.mockResolvedValue(aktiv({ trial: true, licenseValidUntil: inDays(5), expiresAt: inDays(2) }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		const f = facts(wrapper)
		expect(f[f.indexOf('Tarif') + 1]).toBe('WerkPlus – Testzeitraum')
		expect(f[f.indexOf('Testzeitraum läuft bis') + 1]).toContain('noch 5 Tage')
		expect(buttons(wrapper)).toContain('Jetzt kaufen')
		expect(wrapper.find('a.stub-button').attributes('href')).toBe(LINKS.buy)
		expect(wrapper.text()).toContain('er ersetzt den Testschlüssel')
	})

	it('gekaufter Schlüssel: Laufzeit statt Token-Ende, kein Kauf-Link', async () => {
		getLicense.mockResolvedValue(aktiv({ licenseValidUntil: '2027-11-18T12:00:00Z' }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		const f = facts(wrapper)
		expect(f[f.indexOf('Tarif') + 1]).toBe('WerkPlus')
		expect(f[f.indexOf('Laufzeit bis') + 1]).toBe(new Date('2027-11-18T12:00:00Z').toLocaleDateString())
		expect(f).not.toContain('Gültig bis')
		expect(wrapper.find('a.stub-button').exists()).toBe(false)
		expect(wrapper.text()).not.toContain('Testschlüssel')
	})

	it('ohne Laufzeit im Token: keine Laufzeit-Zeile, auch nicht das Token-Ende', async () => {
		getLicense.mockResolvedValue(aktiv())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		const f = facts(wrapper)
		expect(f.some((x) => x.startsWith('Laufzeit') || x === 'Gültig bis')).toBe(false)
		expect(wrapper.find('dl').text()).not.toContain(new Date('2026-11-05T12:00:00Z').toLocaleDateString())
	})

	it('Laufzeit vorbei, Token in der Karenz: abgelaufen mit Karenz-Ende', async () => {
		getLicense.mockResolvedValue(aktiv({ state: 'grace', licenseValidUntil: '2020-01-01T00:00:00Z' }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		const f = facts(wrapper)
		expect(f[f.indexOf('Laufzeit') + 1]).toBe('abgelaufen, Karenz bis ' + new Date('2026-11-19T12:00:00Z').toLocaleDateString())
	})

	it('Testzeitraum beendet: eigener Hinweis statt Ablauf-Fehler, Jetzt kaufen', async () => {
		getLicense.mockResolvedValue(status({
			keySet: true,
			keyHint: '…69B6',
			trialEnded: true,
			lastError: { code: 'KEY_EXPIRED', message: 'Die Lizenz ist abgelaufen.', at: null },
		}))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--warning').text()).toContain('Der Testzeitraum ist beendet.')
		expect(wrapper.text()).not.toContain('Die Lizenz ist abgelaufen.')
		expect(buttons(wrapper)).toContain('Jetzt kaufen')
		expect(wrapper.text()).toContain('er ersetzt den Testschlüssel')
	})

	it('Testtoken abgelaufen, Server noch nicht gefragt: ebenfalls Testzeitraum beendet', async () => {
		getLicense.mockResolvedValue(aktiv({ trial: true, state: 'expired', tier: 'free', features: [], licenseValidUntil: '2026-11-01T12:00:00Z' }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(wrapper.find('.stub-note--warning').text()).toContain('Der Testzeitraum ist beendet.')
		expect(buttons(wrapper)).toContain('Jetzt kaufen')
		expect(wrapper.text()).toContain('er ersetzt den Testschlüssel')
	})

	it('Laufzeit vorbei, Token noch gültig: abgelaufen statt Datum in der Vergangenheit', async () => {
		getLicense.mockResolvedValue(aktiv({ licenseValidUntil: '2020-01-01T00:00:00Z' }))
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		expect(facts(wrapper)).not.toContain('Laufzeit bis')
		expect(facts(wrapper)[facts(wrapper).indexOf('Laufzeit') + 1]).toContain('abgelaufen, Karenz bis')
	})

	it('verlinkt die Funktionen-Seite in neuem Tab ohne Referrer', async () => {
		getLicense.mockResolvedValue(status())
		const wrapper = mount(WerkPlusSettings)
		await flushPromises()

		const link = wrapper.find('a.rw-werkplus__link')
		expect(link.attributes('href')).toBe(LINKS.features)
		expect(link.attributes('target')).toBe('_blank')
		expect(link.attributes('rel')).toBe('noopener noreferrer')
	})
})
