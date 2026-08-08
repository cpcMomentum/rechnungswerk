/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * ESLint war bis 08.08.2026 als Abhaengigkeit deklariert, lief aber nirgends:
 * keine Konfiguration, kein Skript, kein CI-Schritt — waehrend CLAUDE.md und der
 * CI-Job "lint-and-build" das Gegenteil behaupteten (#210).
 *
 * Grundlage ist die Nextcloud-Empfehlung fuer Vue 3. Die reinen
 * FORMATIERUNGSREGELN sind hier abgeschaltet, und zwar aus einem gemessenen
 * Grund: mit dem vollen Regelsatz meldet dieses Projekt 1337 Befunde, davon
 * 1259 (94 %) Einrueckung, Zeilenumbrueche in Vue-Vorlagen, Import-Sortierung
 * und JSDoc-Pflicht. Sie alle auf einmal umzuschreiben waere ein Diff ueber
 * jede Frontend-Datei ohne fachlichen Gewinn — und wuerde die 78 inhaltlichen
 * Befunde darin begraben. Die uebrigen Apps der Flotte (worktime,
 * contractmanager, brandmail) erzwingen diese Regeln ebenfalls nicht; sie
 * abzuschalten haelt rechnungswerk also im Einklang, statt es strenger zu
 * machen als den Rest.
 *
 * Wieder einschalten ist eine Zeile: den entsprechenden Block unten entfernen.
 */

import { recommended } from '@nextcloud/eslint-config'

export default [
	...recommended,
	{
		name: 'rechnungswerk/formatierung-aus',
		rules: {
			// Vue-Vorlagen: Umbrueche, Einrueckung, Attributverteilung
			'vue/singleline-html-element-content-newline': 'off',
			'vue/multiline-html-element-content-newline': 'off',
			'vue/html-indent': 'off',
			'vue/max-attributes-per-line': 'off',
			'vue/html-self-closing': 'off',
			'vue/first-attribute-linebreak': 'off',
			'vue/html-closing-bracket-newline': 'off',
			'vue/attributes-order': 'off',
			// Import-Reihenfolge und Sortierung von Schluesseln
			'perfectionist/sort-imports': 'off',
			'perfectionist/sort-named-imports': 'off',
			'perfectionist/sort-exports': 'off',
			'perfectionist/sort-objects': 'off',
			// JSDoc-Pflicht: der Code kommentiert das Warum in Prosa, nicht in Tags
			'jsdoc/require-jsdoc': 'off',
			'jsdoc/require-param': 'off',
			'jsdoc/require-param-description': 'off',
			'jsdoc/require-param-type': 'off',
			'jsdoc/require-returns': 'off',
			'jsdoc/require-returns-description': 'off',
			// Reine Schreibweise
			'antfu/top-level-function': 'off',
			'import-extensions/extensions': 'off',
			'import-extensions/ban-inline-type-imports': 'off',
			'vue/prefer-separate-static-class': 'off',
			'vue/define-macros-order': 'off',
			'jsdoc/escape-inline-tags': 'off',
		},
	},
	{
		name: 'rechnungswerk/stylistic-aus',
		rules: Object.fromEntries([
			'implicit-arrow-linebreak', 'exp-list-style', 'indent', 'quotes', 'semi',
			'comma-dangle', 'operator-linebreak', 'space-before-function-paren',
			'arrow-parens', 'brace-style', 'max-len', 'no-tabs', 'member-delimiter-style',
			'max-statements-per-line', 'function-paren-newline',
		].map((r) => ['@stylistic/' + r, 'off'])),
	},
	{
		name: 'rechnungswerk/angepasste-regeln',
		rules: {
			/*
			 * console.error bleibt erlaubt. Die Regel soll vergessenes
			 * console.log-Debugging verhindern; hier steht in jedem
			 * Fehlerbehandler ein console.error mit einheitlichem
			 * "[rechnungswerk]"-Praefix neben der sichtbaren Fehlermeldung. Das
			 * ist die einzige Spur, die bleibt, wenn jemand ein Problem meldet.
			 * Nur error, nicht warn: der Code benutzt ausschliesslich console.error,
			 * und eine Erlaubnis fuer etwas Unbenutztes waere eine offene Tuer.
			 */
			'no-console': ['error', { allow: ['error'] }],
			/*
			 * `x != null` ist absichtlich lose: es prueft null UND undefined in
			 * einem Ausdruck. Ein `!==` daraus zu machen waere kein Aufraeumen,
			 * sondern ein eingebauter Fehler — betroffen waren drei Stellen, an
			 * denen Standardwerte von Kunden uebernommen werden.
			 */
			eqeqeq: ['error', 'always', { null: 'ignore' }],
		},
	},
	{
		// OC.dialogs ist seit NC 30 veraltet und wird an vier Stellen fuer die
		// Dateiauswahl benutzt. Der Ersatz (@nextcloud/dialogs) ist ein
		// ausgetauschter Bedienpfad mit eigenem Klicktest, siehe #221 — deshalb
		// hier eine benannte Ausnahme statt einer stillen Abschaltung.
		name: 'rechnungswerk/oc-dialogs-schuld-221',
		files: ['src/views/SettingsView.vue'],
		rules: {
			'@nextcloud/no-deprecated-globals': 'off',
		},
	},
]
