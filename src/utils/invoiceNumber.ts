/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Client-side mirror of the backend InvoiceCalculator::formatNumber() for a
 * live preview. The server stays authoritative for the real numbering.
 */

/** Render a preview number: {YYYY}, {YY} and {#…#} (zero-padded counter). */
export function previewInvoiceNumber(format: string, counter: number, year: number): string {
	const withYear = format
		.replace(/\{YYYY\}/g, String(year).padStart(4, '0'))
		.replace(/\{YY\}/g, String(year % 100).padStart(2, '0'))
	return withYear.replace(/\{(#+)\}/g, (_match, hashes: string) =>
		String(counter).padStart(hashes.length, '0'))
}
