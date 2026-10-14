/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from 'vitest'
import { isoWeek, parseIsoDay, periodContaining, quarterOf, shiftPeriod } from './reportPeriod'

const day = (iso: string) => parseIsoDay(iso)

describe('periodContaining', () => {
	it('liefert das Kalenderjahr', () => {
		expect(periodContaining('year', day('2026-10-12'))).toEqual({ from: '2026-01-01', to: '2026-12-31' })
	})

	it('liefert das Quartal', () => {
		expect(periodContaining('quarter', day('2026-10-12'))).toEqual({ from: '2026-10-01', to: '2026-12-31' })
		expect(periodContaining('quarter', day('2026-03-31'))).toEqual({ from: '2026-01-01', to: '2026-03-31' })
		expect(periodContaining('quarter', day('2026-05-01'))).toEqual({ from: '2026-04-01', to: '2026-06-30' })
	})

	it('liefert den Monat, auch den Februar im Schaltjahr', () => {
		expect(periodContaining('month', day('2026-02-10'))).toEqual({ from: '2026-02-01', to: '2026-02-28' })
		expect(periodContaining('month', day('2028-02-10'))).toEqual({ from: '2028-02-01', to: '2028-02-29' })
	})

	it('liefert die Woche von Montag bis Sonntag', () => {
		// Der 12.10.2026 ist ein Montag, der 18.10. ein Sonntag.
		expect(periodContaining('week', day('2026-10-12'))).toEqual({ from: '2026-10-12', to: '2026-10-18' })
		expect(periodContaining('week', day('2026-10-18'))).toEqual({ from: '2026-10-12', to: '2026-10-18' })
		expect(periodContaining('week', day('2026-10-15'))).toEqual({ from: '2026-10-12', to: '2026-10-18' })
	})

	it('lässt eine Woche über den Jahreswechsel laufen', () => {
		expect(periodContaining('week', day('2026-01-01'))).toEqual({ from: '2025-12-29', to: '2026-01-04' })
	})
})

describe('shiftPeriod', () => {
	it('blättert jahres-, quartals- und monatsweise', () => {
		expect(shiftPeriod('year', { from: '2026-01-01', to: '2026-12-31' }, -1)).toEqual({ from: '2025-01-01', to: '2025-12-31' })
		expect(shiftPeriod('quarter', { from: '2026-01-01', to: '2026-03-31' }, -1)).toEqual({ from: '2025-10-01', to: '2025-12-31' })
		expect(shiftPeriod('month', { from: '2026-12-01', to: '2026-12-31' }, 1)).toEqual({ from: '2027-01-01', to: '2027-01-31' })
		// Vom 31. aus darf der Folgemonat nicht übersprungen werden.
		expect(shiftPeriod('month', { from: '2026-01-01', to: '2026-01-31' }, 1)).toEqual({ from: '2026-02-01', to: '2026-02-28' })
	})

	it('blättert wochenweise, auch über die Zeitumstellung', () => {
		// 25.10.2026: Ende der Sommerzeit.
		expect(shiftPeriod('week', { from: '2026-10-19', to: '2026-10-25' }, 1)).toEqual({ from: '2026-10-26', to: '2026-11-01' })
		expect(shiftPeriod('week', { from: '2026-10-26', to: '2026-11-01' }, -1)).toEqual({ from: '2026-10-19', to: '2026-10-25' })
	})
})

describe('isoWeek', () => {
	it.each([
		['2026-10-12', 42, 2026],
		['2026-01-01', 1, 2026],
		['2025-12-29', 1, 2026],
		['2027-01-03', 53, 2026],
		['2024-12-30', 1, 2025],
		['2021-01-03', 53, 2020],
	])('%s liegt in KW %i/%i', (iso, week, year) => {
		expect(isoWeek(day(iso))).toEqual({ week, year })
	})
})

describe('quarterOf', () => {
	it('zählt 1 bis 4', () => {
		expect(['2026-01-01', '2026-03-31', '2026-04-01', '2026-12-31'].map(d => quarterOf(day(d)))).toEqual([1, 1, 2, 4])
	})
})
