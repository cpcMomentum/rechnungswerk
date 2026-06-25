/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Money is stored as integer cents on the backend; the UI edits euros.
 * Conversion is centralised here to avoid float-rounding drift.
 */

/** Cents (int) -> euro amount string with 2 decimals, e.g. 1250 -> "12.50". */
export function centsToEuroInput(cents: number | null | undefined): string {
	if (cents === null || cents === undefined) {
		return ''
	}
	return (cents / 100).toFixed(2)
}

/** Euro input ("12,50" or "12.50") -> integer cents, rounded. */
export function euroInputToCents(value: string | number | null | undefined): number {
	if (value === null || value === undefined || value === '') {
		return 0
	}
	const normalized = String(value).replace(',', '.').trim()
	const euros = Number.parseFloat(normalized)
	if (Number.isNaN(euros)) {
		return 0
	}
	return Math.round(euros * 100)
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
