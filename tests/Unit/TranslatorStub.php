<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCP\IL10N;

/**
 * Uebersetzer-Ersatz fuer Tests (#235).
 *
 * Seit die Services ihre Meldungen durch IL10N schicken, braucht jeder Test einen
 * Uebersetzer. Dieser gibt den Text unveraendert zurueck und setzt nur die
 * Platzhalter ein — genau das, was Nextclouds IL10N ohne vorhandene Uebersetzung
 * auch tut. Damit pruefen die bestehenden Aussagen auf deutsche Meldungen weiter
 * dasselbe, ohne dass eine Uebersetzungsdatei geladen werden muss.
 */
trait TranslatorStub {

	protected function l10nStub(): IL10N {
		$l10n = $this->createMock(IL10N::class);
		$l10n->method('t')->willReturnCallback(
			// Ohne Parameter NICHT durch vsprintf schicken: eine Meldung, die ein
			// literales Prozentzeichen enthaelt, wuerde daran scheitern.
			static function (string $text, $parameters = []): string {
				$parameters = (array)$parameters;
				return $parameters === [] ? $text : vsprintf($text, $parameters);
			}
		);
		return $l10n;
	}
}
