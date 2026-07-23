/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Money is stored as integer cents on the backend; the UI edits euros.
 * Conversion is centralised here to avoid float-rounding drift.
 */

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

/** Euro input ("0,3456" or "0.3456") -> ten-thousandths of a euro, rounded (#147). */
export function euroInputToE4(value: string | number | null | undefined): number {
	if (value === null || value === undefined || value === '') {
		return 0
	}
	const euros = Number.parseFloat(String(value).replace(',', '.').trim())
	return Number.isNaN(euros) ? 0 : Math.round(euros * 10000)
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
