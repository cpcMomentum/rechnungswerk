/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Zeiträume für den Umsatzbericht: Jahr, Quartal, Monat und Kalenderwoche.
 *
 * Gerechnet wird mit Kalendertagen als "Y-m-d", nie mit Zeitstempeln — ein
 * Bericht "Oktober" meint den 1. bis 31. unabhängig von Zeitzone und
 * Sommerzeit. Wochen sind ISO-Wochen (Montag bis Sonntag, DIN 1355 / ISO 8601),
 * so wie sie in Deutschland als "KW" gezählt werden.
 */

export type PeriodKind = 'year' | 'quarter' | 'month' | 'week'

export interface DateRange {
	/** Erster Tag, Y-m-d. */
	from: string
	/** Letzter Tag (einschließlich), Y-m-d. */
	to: string
}

function toIso(date: Date): string {
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	return `${String(date.getFullYear()).padStart(4, '0')}-${month}-${day}`
}

/** "Y-m-d" -> lokales Datum um 12 Uhr, damit keine Zeitumstellung den Tag verschiebt. */
export function parseIsoDay(iso: string): Date {
	const [year, month, day] = iso.split('-').map(Number)
	return new Date(year, month - 1, day, 12)
}

/** Der Zeitraum der gegebenen Art, in dem der Tag liegt. */
export function periodContaining(kind: PeriodKind, day: Date): DateRange {
	const year = day.getFullYear()
	const month = day.getMonth()
	switch (kind) {
	case 'year':
		return { from: toIso(new Date(year, 0, 1, 12)), to: toIso(new Date(year, 11, 31, 12)) }
	case 'quarter': {
		const first = month - (month % 3)
		return { from: toIso(new Date(year, first, 1, 12)), to: toIso(new Date(year, first + 3, 0, 12)) }
	}
	case 'month':
		return { from: toIso(new Date(year, month, 1, 12)), to: toIso(new Date(year, month + 1, 0, 12)) }
	case 'week': {
		// getDay(): Sonntag = 0. Auf Montag = 0 drehen.
		const sinceMonday = (day.getDay() + 6) % 7
		const monday = new Date(year, month, day.getDate() - sinceMonday, 12)
		const sunday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 6, 12)
		return { from: toIso(monday), to: toIso(sunday) }
	}
	}
}

/** Der Zeitraum davor (delta = -1) oder danach (delta = 1). */
export function shiftPeriod(kind: PeriodKind, range: DateRange, delta: number): DateRange {
	const start = parseIsoDay(range.from)
	switch (kind) {
	case 'year':
		return periodContaining(kind, new Date(start.getFullYear() + delta, 0, 1, 12))
	case 'quarter':
		return periodContaining(kind, new Date(start.getFullYear(), start.getMonth() + 3 * delta, 1, 12))
	case 'month':
		return periodContaining(kind, new Date(start.getFullYear(), start.getMonth() + delta, 1, 12))
	case 'week':
		return periodContaining(kind, new Date(start.getFullYear(), start.getMonth(), start.getDate() + 7 * delta, 12))
	}
}

/**
 * ISO-Kalenderwoche eines Tages. Das Jahr gehört dazu, weil die Tage um den
 * Jahreswechsel zur Woche des Nachbarjahres zählen können: der 29.12.2025 liegt
 * in KW 1/2026.
 */
export function isoWeek(day: Date): { week: number, year: number } {
	// Der Donnerstag der Woche entscheidet, zu welchem Jahr sie gehört.
	const thursday = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 3 - ((day.getDay() + 6) % 7), 12)
	const year = thursday.getFullYear()
	const jan1 = new Date(year, 0, 1, 12)
	const dayOfYear = Math.round((thursday.getTime() - jan1.getTime()) / 86_400_000)
	return { week: Math.floor(dayOfYear / 7) + 1, year }
}

/** Quartal (1–4) eines Tages. */
export function quarterOf(day: Date): number {
	return Math.floor(day.getMonth() / 3) + 1
}
