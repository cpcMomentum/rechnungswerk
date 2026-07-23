/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Client-side mirror of the backend InvoiceCalculator::formatNumber() for a
 * live preview. The server stays authoritative for the real numbering.
 */

/** Render a preview number: {YYYY}, {YY}, {MM}, {DD} and {#…#} (zero-padded counter). */
export function previewInvoiceNumber(format: string, counter: number, year: number, month: number, day: number): string {
	const withDate = format
		.replace(/\{YYYY\}/g, String(year).padStart(4, '0'))
		.replace(/\{YY\}/g, String(year % 100).padStart(2, '0'))
		.replace(/\{MM\}/g, String(month).padStart(2, '0'))
		.replace(/\{DD\}/g, String(day).padStart(2, '0'))
	return withDate.replace(/\{(#+)\}/g, (_match, hashes: string) =>
		String(counter).padStart(hashes.length, '0'))
}
