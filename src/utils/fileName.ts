/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Client-side mirror of the backend InvoiceCalculator::buildPdfFileName() for
 * a live preview in the settings. The server stays authoritative for the real
 * file names.
 */

export const FILE_NAME_PLACEHOLDERS = ['{nummer}', '{YYYY}', '{MM}', '{DD}', '{kunde}', '{typ}'] as const

const TRANSLIT: Record<string, string> = {
	ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss', Ä: 'Ae', Ö: 'Oe', Ü: 'Ue',
}

/** Render a preview file name (including '.pdf') from the scheme and sample values. */
export function previewFileName(format: string, sample: { nummer: string, date: Date, kunde: string, typ: string }): string {
	const pad = (n: number) => String(n).padStart(2, '0')
	const values: Record<string, string> = {
		'{nummer}': sample.nummer,
		'{YYYY}': String(sample.date.getFullYear()),
		'{MM}': pad(sample.date.getMonth() + 1),
		'{DD}': pad(sample.date.getDate()),
		'{kunde}': sample.kunde.replace(/[äöüßÄÖÜ]/g, (c) => TRANSLIT[c] ?? c),
		'{typ}': sample.typ,
	}
	// Substitute all placeholders in a single pass so a replacement value that
	// happens to contain a literal token (e.g. '{typ}' in a customer name) is
	// never picked up by a later replacement, unlike chained replaceAll() calls.
	let name = format.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (token) => values[token])
	name = name
		.replace(/[/\\:*?"<>|]/g, '-')
		.replace(/\s+/g, ' ')
		.replace(/^[\s.]+|[\s.]+$/g, '')
		.slice(0, 120)
	return (name || 'rechnung-1') + '.pdf'
}
