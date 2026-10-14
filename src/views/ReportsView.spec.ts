/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Umsatzbericht: Die Seite muss den gewählten Zeitraum abfragen, die Summen
 * zeigen und genau diesen Zeitraum exportieren.
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import type { Report } from '@/types/api'
import type { ReportQuery } from '@/api/reports'
import { periodContaining } from '@/utils/reportPeriod'

const getReport = vi.fn<(q: ReportQuery) => Promise<Report>>()
const downloadReport = vi.fn<(format: string, q: ReportQuery) => void>()

vi.mock('@/api/reports', () => ({
	getReport: (q: ReportQuery) => getReport(q),
	downloadReport: (format: string, q: ReportQuery) => downloadReport(format, q),
}))
vi.mock('vue-router', () => ({ useRouter: () => ({ push: vi.fn() }) }))

// Die echten Komponenten ziehen ihr CSS mit, das der Test-Runner nicht laedt.
vi.mock('@nextcloud/vue/components/NcButton', () => ({
	default: {
		name: 'NcButton',
		props: ['variant', 'disabled'],
		emits: ['click'],
		template: '<button class="stub-button" :disabled="disabled" @click="$emit(\'click\')"><slot /></button>',
	},
}))
vi.mock('@nextcloud/vue/components/NcEmptyContent', () => ({
	default: { name: 'NcEmptyContent', props: ['name', 'description'], template: '<div class="stub-empty">{{ name }}</div>' },
}))
vi.mock('@nextcloud/vue/components/NcLoadingIcon', () => ({
	default: { name: 'NcLoadingIcon', template: '<span class="stub-loading" />' },
}))
vi.mock('@nextcloud/vue/components/NcNoteCard', () => ({
	default: { name: 'NcNoteCard', props: ['text'], template: '<div class="stub-note">{{ text }}</div>' },
}))

import ReportsView from './ReportsView.vue'

const report = (teil: Partial<Report> = {}): Report => ({
	from: '2026-01-01',
	to: '2026-12-31',
	basis: 'issue',
	rows: [{
		id: 7,
		number: 'RE-2026-0007',
		invoiceType: 'invoice',
		status: 'committed',
		recipientName: 'Muster GmbH',
		date: '2026-03-02',
		issueDate: '2026-03-02',
		paidAt: null,
		taxCategory: 'standard',
		taxLabel: '',
		netCents: 10000,
		taxCents: 1900,
		grossCents: 11900,
	}],
	totals: { count: 1, netCents: 10000, taxCents: 1900, grossCents: 11900 },
	taxGroups: [{ category: 'standard', rateBp: 1900, label: 'Umsätze zu 19 %', netCents: 10000, taxCents: 1900 }],
	months: [{ month: '2026-03', count: 1, netCents: 10000, taxCents: 1900, grossCents: 11900 }],
	...teil,
})

const chip = (wrapper: ReturnType<typeof mount>, label: string) =>
	wrapper.findAll('.rw-chip').find(c => c.text() === label)!
const button = (wrapper: ReturnType<typeof mount>, label: string) =>
	wrapper.findAll('.stub-button').find(b => b.text() === label)!

describe('ReportsView', () => {
	beforeEach(() => {
		getReport.mockReset()
		downloadReport.mockReset()
		getReport.mockResolvedValue(report())
	})

	it('lädt beim Öffnen das laufende Jahr nach Rechnungsdatum', async () => {
		const wrapper = mount(ReportsView)
		await flushPromises()

		expect(getReport).toHaveBeenCalledWith({ ...periodContaining('year', new Date()), basis: 'issue' })
		expect(wrapper.text()).toContain('RE-2026-0007')
		expect(wrapper.text()).toContain('Umsätze zu 19 %')
		expect(wrapper.findAll('.rw-report-card__value')).toHaveLength(4)
	})

	it('fragt nach einem Wechsel den neuen Zeitraum und die neue Sicht ab', async () => {
		const wrapper = mount(ReportsView)
		await flushPromises()

		await chip(wrapper, 'Monat').trigger('click')
		await chip(wrapper, 'Nach Zahlungseingang').trigger('click')
		await flushPromises()

		expect(getReport).toHaveBeenLastCalledWith({ ...periodContaining('month', new Date()), basis: 'payment' })
	})

	it('exportiert genau den angezeigten Zeitraum', async () => {
		const wrapper = mount(ReportsView)
		await flushPromises()

		await chip(wrapper, 'Woche').trigger('click')
		await flushPromises()
		await button(wrapper, 'CSV-Export').trigger('click')

		expect(downloadReport).toHaveBeenCalledWith('csv', { ...periodContaining('week', new Date()), basis: 'issue' })
	})

	it('bietet ohne Belege keinen Export an', async () => {
		getReport.mockResolvedValue(report({
			rows: [], taxGroups: [], months: [], totals: { count: 0, netCents: 0, taxCents: 0, grossCents: 0 },
		}))
		const wrapper = mount(ReportsView)
		await flushPromises()

		expect(wrapper.find('.stub-empty').exists()).toBe(true)
		expect(button(wrapper, 'PDF-Export').attributes('disabled')).toBeDefined()
	})

	it('zeigt die Fehlermeldung des Servers', async () => {
		getReport.mockRejectedValue({ status: 400, message: 'Bitte einen gültigen Zeitraum angeben.' })
		const wrapper = mount(ReportsView)
		await flushPromises()

		expect(wrapper.find('.stub-note').text()).toBe('Bitte einen gültigen Zeitraum angeben.')
	})
})
