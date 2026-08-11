/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Vollständigkeit der Übersetzungen (#234).
 *
 * Anlass: fünf Texte erschienen in der englischen Oberfläche auf Deutsch, weil im
 * Quellcode ein geschütztes Leerzeichen (U+00A0) vor den Auslassungspunkten steht
 * und in den l10n-Dateien ein normales (U+0020). Die Übersetzung war da, der
 * Schlüssel passte nur byteweise nicht. Beim Draufschauen sind beide identisch —
 * so etwas findet kein Mensch, das muss eine Maschine prüfen.
 *
 * Dazu fehlten acht Strings aus dem DATEV-Bereich ganz und fünfzehn Schlüssel
 * waren Altlasten ohne Fundstelle im Code.
 *
 * Dieser Test läuft über `npm test` und damit in der CI. Er ersetzt bewusst kein
 * separates Skript mit eigenem CI-Schritt: der Vertragstest aus #221 liest
 * genauso Dateien vom Datenträger, das Muster ist da.
 *
 * WICHTIG bei einem Fehlschlag "Waise": das heißt nicht zwangsläufig, dass der
 * Schlüssel weg muss. Läuft ein String dynamisch durch `t()` — etwa aus einer
 * Label-Konstante —, muss stattdessen die Sammlung unten erweitert werden. Genau
 * dieser Fall betrifft heute 15 von 515 Aufrufen; ohne ihn wäre die Prüfung
 * wertlos, weil sie gültige Einträge als Waisen melden würde.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

const SRC = join(import.meta.dirname, '..')
const L10N = join(SRC, '..', 'l10n')

/** Label-Konstanten in types/api.ts, deren Werte dynamisch durch t() laufen. */
const LABEL_MAPS = [
	'UNIT_CODE_LABELS',
	'SNIPPET_DOC_TYPE_LABELS',
	'SNIPPET_SLOT_LABELS',
	'INVOICE_STATUS_LABELS',
	'INVOICE_TYPE_LABELS',
	'QUOTE_STATUS_LABELS',
]

function sourceFiles(dir: string): string[] {
	return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const path = join(dir, entry.name)
		if (entry.isDirectory()) {
			return sourceFiles(path)
		}
		if (!/\.(vue|ts|js)$/.test(entry.name) || entry.name.endsWith('.spec.ts')) {
			return []
		}
		return [path]
	})
}

/** Einfach-gequotete JS-Zeichenkette entschärfen. */
function unescape(raw: string): string {
	return raw.replace(/\\'/g, "'").replace(/\\\\/g, '\\')
}

/** Jeder String, der zur Laufzeit durch t() geht — Literale UND dynamische. */
function translatableStrings(): Map<string, string[]> {
	const found = new Map<string, string[]>()
	const add = (value: string, where: string) => {
		const list = found.get(value) ?? []
		list.push(where)
		found.set(value, list)
	}

	// 1. Literale: t('rechnungswerk', '…'). Alle Aufrufe im Projekt haben diese
	//    Form — einzeilig, einfache Anführungszeichen, kein Template-Literal.
	const literal = /t\(\s*'rechnungswerk'\s*,\s*'((?:[^'\\]|\\.)*)'/g
	for (const file of sourceFiles(SRC)) {
		const source = readFileSync(file, 'utf8')
		for (const match of source.matchAll(literal)) {
			add(unescape(match[1]), file.slice(SRC.length + 1))
		}
	}

	// 2. Werte der Label-Konstanten. Sie werden als t('rechnungswerk', MAP[key])
	//    übersetzt, tauchen also nirgends als Literal auf.
	const api = readFileSync(join(SRC, 'types', 'api.ts'), 'utf8')
	for (const name of LABEL_MAPS) {
		const start = api.indexOf(`export const ${name}`)
		expect(start, `Label-Konstante ${name} nicht gefunden — Liste veraltet?`).toBeGreaterThan(-1)
		const block = api.slice(start, api.indexOf('\n}', start))
		for (const match of block.matchAll(/:\s*'((?:[^'\\]|\\.)*)'/g)) {
			add(unescape(match[1]), `types/api.ts (${name})`)
		}
	}

	// 3. Beschriftungen der Filter-Chips: { key: '…', label: '…' }, ebenfalls
	//    dynamisch als t('rechnungswerk', f.label).
	for (const file of sourceFiles(join(SRC, 'views'))) {
		const source = readFileSync(file, 'utf8')
		for (const match of source.matchAll(/\{\s*key:\s*'[^']*',\s*label:\s*'((?:[^'\\]|\\.)*)'/g)) {
			add(unescape(match[1]), file.slice(SRC.length + 1))
		}
	}

	return found
}

function fromJson(name: string): Record<string, string> {
	return JSON.parse(readFileSync(join(L10N, name), 'utf8')).translations
}

/** Die .js-Variante ist ein OC.L10N.register(...)-Aufruf, kein JSON. */
function fromJs(name: string): Record<string, string> {
	const source = readFileSync(join(L10N, name), 'utf8')
	const body = source.slice(source.indexOf('{'), source.lastIndexOf('}') + 1)
	const out: Record<string, string> = {}
	for (const match of body.matchAll(/"((?:[^"\\]|\\.)*)"\s*:\s*"((?:[^"\\]|\\.)*)"/g)) {
		out[JSON.parse(`"${match[1]}"`)] = JSON.parse(`"${match[2]}"`)
	}
	return out
}

const FILES: Record<string, Record<string, string>> = {
	'de.json': fromJson('de.json'),
	'en.json': fromJson('en.json'),
	'de.js': fromJs('de.js'),
	'en.js': fromJs('en.js'),
}

const USED = translatableStrings()

describe('Übersetzungen sind vollständig', () => {
	it('findet überhaupt Strings, sonst prüft dieser Test nichts', () => {
		expect(USED.size).toBeGreaterThan(300)
		for (const [name, entries] of Object.entries(FILES)) {
			expect(Object.keys(entries).length, name).toBeGreaterThan(300)
		}
	})

	it.each(Object.keys(FILES))('%s kennt jeden übersetzbaren String', (name) => {
		const entries = FILES[name]
		const missing = [...USED.keys()]
			.filter(key => !(key in entries))
			// Fundstelle mitgeben: ohne sie sucht man den Schluessel von Hand.
			.map(key => `${JSON.stringify(key)}  <- ${USED.get(key)!.join(', ')}`)
		expect(missing, `${name}: fehlende Schlüssel`).toEqual([])
	})

	/**
	 * Siehe Kopfkommentar: eine Waise kann auch bedeuten, dass die Sammlung oben
	 * einen dynamischen Fall nicht kennt. Dann gehört die Sammlung erweitert, nicht
	 * der Schlüssel gelöscht.
	 */
	it('führt keine Schlüssel, die der Quellcode nicht benutzt', () => {
		const orphans = Object.keys(FILES['de.json']).filter(key => !USED.has(key))
		expect(orphans, 'Waisen in l10n/de.json').toEqual([])
	})

	it('hält die vier Dateien auf demselben Stand', () => {
		const base = Object.keys(FILES['de.json']).sort()
		for (const [name, entries] of Object.entries(FILES)) {
			expect(Object.keys(entries).sort(), `${name} weicht von de.json ab`).toEqual(base)
		}
	})

	it('lässt die deutschen Werte gleich den Schlüsseln, weil Deutsch die Quellsprache ist', () => {
		for (const name of ['de.json', 'de.js']) {
			const drifted = Object.entries(FILES[name])
				.filter(([key, value]) => key !== value)
				.map(([key, value]) => `${JSON.stringify(key)} -> ${JSON.stringify(value)}`)
			expect(drifted, name).toEqual([])
		}
	})

	it('übersetzt englisch, wo es einen Unterschied gibt', () => {
		// Woerter, die in beiden Sprachen gleich sind. Alles andere waere ein
		// vergessener Eintrag, deshalb steht die Liste hier ausdruecklich.
		const GLEICH = new Set([
			'BIC', 'Bank', 'Branding', 'Format', 'IBAN', 'Name', 'Port', 'Status',
			'Text', 'Tonne', 'kWh', 'kg', 'm²',
		])
		for (const name of ['en.json', 'en.js']) {
			const untranslated = Object.entries(FILES[name])
				.filter(([key, value]) => key === value && !GLEICH.has(key))
				.map(([key]) => key)
			expect(untranslated, `${name}: sieht unübersetzt aus`).toEqual([])
		}
	})
})
