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
	let name = format
		.replaceAll('{nummer}', sample.nummer)
		.replaceAll('{YYYY}', String(sample.date.getFullYear()))
		.replaceAll('{MM}', pad(sample.date.getMonth() + 1))
		.replaceAll('{DD}', pad(sample.date.getDate()))
		.replaceAll('{kunde}', sample.kunde.replace(/[äöüßÄÖÜ]/g, (c) => TRANSLIT[c] ?? c))
		.replaceAll('{typ}', sample.typ)
	name = name
		.replace(/[/\\:*?"<>|]/g, '-')
		.replace(/\s+/g, ' ')
		.replace(/^[\s.]+|[\s.]+$/g, '')
		.slice(0, 120)
	return (name || 'rechnung-1') + '.pdf'
}
