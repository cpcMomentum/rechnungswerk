/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { describe, expect, it } from 'vitest'
import { DEFAULT_ACCENT, textColorOn, whiteWouldFail } from './colorUtils'

/**
 * #171. Die Vorschau in den Einstellungen muss dieselbe Schriftfarbe zeigen,
 * die das Backend in die Rechnung schreibt. Die Faelle hier sind deckungsgleich
 * mit tests/Unit/ColorContrastTest.php.
 */
describe('textColorOn', () => {
	it.each([
		['#2c3e50', '#ffffff', 'Standardfarbe, weiss traegt mit 10,98:1'],
		['#919191', '#000000', 'produktive Akzentfarbe, weiss kaeme nur auf 3,15:1'],
		['#ddcb55', '#000000', 'Gold, weiss kaeme nur auf 1,65:1'],
		['#d3a967', '#000000', 'Whiskey'],
		['#0082c9', '#000000', 'Nextcloud-Blau, knapp unter AA'],
		['#e74c3c', '#000000', 'kraeftiges Rot'],
		['#b6469d', '#ffffff', 'Lila, weiss traegt mit 4,83:1'],
		['#000000', '#ffffff', 'Schwarz'],
		['#ffffff', '#000000', 'Weiss'],
		['#fff', '#000000', 'Kurzschreibweise'],
		['2c3e50', '#ffffff', 'Raute optional'],
		['  #2c3e50  ', '#ffffff', 'Leerraum'],
		['#DDCB55', '#000000', 'Grossbuchstaben'],
	])('%s ergibt %s (%s)', (input, expected) => {
		expect(textColorOn(input)).toBe(expected)
	})

	it.each([null, undefined, '', 'rot', '#12', '#1234567', '#gggggg'])(
		'faellt bei %s auf Schwarz zurueck',
		(input) => {
			expect(textColorOn(input as string | null | undefined)).toBe('#000000')
		},
	)

	it('waehlt ueber den gesamten Graukeil immer die kontrastreichere Schrift', () => {
		const luminance = (hex: string): number => {
			const n = parseInt(hex.replace('#', ''), 16)
			const ch = (v: number) => {
				const c = v / 255
				return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
			}
			return 0.2126 * ch((n >> 16) & 255) + 0.7152 * ch((n >> 8) & 255) + 0.0722 * ch(n & 255)
		}
		const ratio = (a: string, b: string) => {
			const [x, y] = [luminance(a), luminance(b)]
			return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05)
		}

		for (let v = 0; v <= 255; v += 5) {
			const hex = '#' + v.toString(16).padStart(2, '0').repeat(3)
			const chosen = textColorOn(hex)
			const other = chosen === '#ffffff' ? '#000000' : '#ffffff'
			expect(ratio(hex, chosen)).toBeGreaterThanOrEqual(ratio(hex, other))
		}
	})
})

describe('whiteWouldFail', () => {
	it('meldet die Faelle, in denen weisse Schrift AA reisst', () => {
		expect(whiteWouldFail('#919191')).toBe(true)
		expect(whiteWouldFail('#ddcb55')).toBe(true)
		expect(whiteWouldFail('#0082c9')).toBe(true)
	})

	it('meldet nichts, wo weiss traegt', () => {
		expect(whiteWouldFail(DEFAULT_ACCENT)).toBe(false)
		expect(whiteWouldFail('#b6469d')).toBe(false)
		expect(whiteWouldFail('#000000')).toBe(false)
	})

	it('meldet nichts ohne verwertbare Farbe, der Hinweis darf nicht grundlos erscheinen', () => {
		expect(whiteWouldFail(null)).toBe(false)
		expect(whiteWouldFail('')).toBe(false)
		expect(whiteWouldFail('rot')).toBe(false)
	})
})
