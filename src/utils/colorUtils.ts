/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

/**
 * Kontrastrechnung nach WCAG 2.1 (#171).
 *
 * Dieselbe Rechnung liegt als `lib/Service/ColorContrast.php` im Backend, das
 * die Rechnung erzeugt. Hier wird sie gebraucht, damit die Einstellungen schon
 * beim Farbwaehlen zeigen koennen, wie die Tabellenkopfzeile aussehen wird.
 * Beide Seiten muessen zum selben Ergebnis kommen, sonst zeigt die Vorschau
 * etwas anderes als das PDF.
 *
 * Portiert aus worktime/src/utils/colorUtils.js (cpcMomentum/worktime#548).
 */

/** Fallback im Backend, wenn keine Akzentfarbe gesetzt ist (ZugferdService). */
export const DEFAULT_ACCENT = '#2c3e50'

/**
 * Relative Helligkeit nach WCAG 2.1.
 *
 * @param hex Farbe als #rrggbb oder #rgb
 * @return 0..1, oder null wenn die Eingabe kein Hexwert ist
 */
function relativeLuminance(hex: string | null | undefined): number | null {
	if (typeof hex !== 'string') {
		return null
	}
	let h = hex.trim().replace(/^#/, '')
	if (h.length === 3) {
		h = h.split('').map((c) => c + c).join('')
	}
	if (!/^[0-9a-fA-F]{6}$/.test(h)) {
		return null
	}

	const channel = (v: number): number => {
		const c = v / 255
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
	}
	const n = parseInt(h, 16)
	return 0.2126 * channel((n >> 16) & 255)
		+ 0.7152 * channel((n >> 8) & 255)
		+ 0.0722 * channel(n & 255)
}

/** Kontrastverhaeltnis zweier Helligkeiten nach WCAG 2.1, 1 bis 21. */
function contrast(a: number, b: number): number {
	const [hi, lo] = a > b ? [a, b] : [b, a]
	return (hi + 0.05) / (lo + 0.05)
}

/**
 * Lesbare Schriftfarbe fuer einen farbigen Hintergrund.
 *
 * Reines Schwarz oder Weiss, nicht abgemildert: ein abgeschwaechtes #222
 * bleibt bei Nextcloud-Blau in beide Richtungen unter 4,5:1.
 */
export function textColorOn(hex: string | null | undefined): string {
	const lum = relativeLuminance(hex)
	// Ohne verwertbare Farbe gilt die normale Textfarbe, hier Schwarz.
	if (lum === null) {
		return '#000000'
	}
	return contrast(lum, 1) >= contrast(lum, 0) ? '#ffffff' : '#000000'
}

/**
 * Ob Weiss auf dieser Farbe die WCAG-AA-Schwelle von 4,5:1 reisst. Nur fuer
 * den Hinweis in den Einstellungen, die Farbe selbst wird nie abgelehnt.
 */
export function whiteWouldFail(hex: string | null | undefined): boolean {
	const lum = relativeLuminance(hex)
	if (lum === null) {
		return false
	}
	return contrast(lum, 1) < 4.5
}
