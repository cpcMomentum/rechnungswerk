/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Money is stored as integer cents on the backend; the UI edits euros.
 * Conversion is centralised here to avoid float-rounding drift.
 */

import { parsePrice } from './numberInput'

/**
 * Unit price in ten-thousandths of a euro (#147) -> euro input string with 2–4
 * decimals: at least two, up to four, trailing zeros beyond the second trimmed.
 * 20000 -> "2.00", 3456 -> "0.3456", 3500 -> "0.35".
 */
export function e4ToEuroInput(e4: number | null | undefined): string {
	if (e4 === null || e4 === undefined) {
		return ''
	}
	return (e4 / 10000).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, '$1$2')
}

/**
 * Euro input ("0,3456", "0.3456", "1.234,56") -> ten-thousandths of a euro (#147).
 *
 * Frueher wurde nur das ERSTE Komma ersetzt und dann geparst. "1.000" (tausend
 * Euro) wurde dadurch zu 1,00 € und "1.234,5" zu 1,23 €, jeweils ohne Hinweis
 * (#157). Die Auswertung folgt jetzt derselben Regel wie im Backend.
 */
export function euroInputToE4(value: string | number | null | undefined): number {
	const parsed = parsePrice(value)
	if (parsed === null) {
		return 0
	}
	return Math.round(Number.parseFloat(parsed) * 10000)
}

/**
 * Unit price (1/10000 €, #147) -> localized currency string with 2–4 decimals,
 * e.g. 3456 -> "0,3456 €", 20000 -> "2,00 €".
 */
export function formatUnitPriceE4(e4: number | null | undefined): string {
	const value = (e4 ?? 0) / 10000
	return new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2,
		maximumFractionDigits: 4,
	}).format(value)
}

/** Cents (int) -> localized currency string, e.g. 1250 -> "12,50 €". */
export function formatCents(cents: number | null | undefined): string {
	const value = (cents ?? 0) / 100
	return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'EUR' }).format(value)
}

/** Basis points (int) -> percent string, e.g. 1900 -> "19 %". */
export function formatTaxRate(bp: number): string {
	return `${bp / 100} %`
}
