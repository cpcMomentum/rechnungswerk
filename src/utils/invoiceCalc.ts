/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Client-side mirror of the backend InvoiceCalculator for live editor previews.
 * The server stays authoritative on save; this only drives the UI.
 */

import type { TaxBreakdownRow } from '@/types/api'

/** Line total in cents from a decimal quantity string and a unit price in cents. */
export function lineTotalCents(quantity: string | number, unitPriceCents: number): number {
	const normalized = String(quantity).replace(',', '.').trim()
	if (normalized === '' || Number.isNaN(Number(normalized))) {
		return 0
	}
	const milli = Math.round(Number(normalized) * 1000)
	return Math.round((milli * unitPriceCents) / 1000)
}

export interface Totals {
	subtotalCents: number
	taxBreakdown: TaxBreakdownRow[]
	totalCents: number
}

/** Aggregate lines into subtotal, per-rate tax breakdown and gross total. */
export function computeTotals(lines: Array<{ taxRateBp: number, lineTotalCents: number }>): Totals {
	const netByRate = new Map<number, number>()
	let subtotal = 0
	for (const line of lines) {
		const rate = Number(line.taxRateBp)
		const net = Number(line.lineTotalCents)
		subtotal += net
		netByRate.set(rate, (netByRate.get(rate) ?? 0) + net)
	}

	const breakdown: TaxBreakdownRow[] = [...netByRate.entries()]
		.sort((a, b) => a[0] - b[0])
		.map(([rateBp, netCents]) => ({
			rateBp,
			netCents,
			taxCents: Math.round((netCents * rateBp) / 10000),
		}))

	const totalTax = breakdown.reduce((sum, row) => sum + row.taxCents, 0)
	return { subtotalCents: subtotal, taxBreakdown: breakdown, totalCents: subtotal + totalTax }
}
