<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

/**
 * Reine Kontrastrechnung nach WCAG 2.1 (#171).
 *
 * Die Kopfzeile der Positionstabelle im Rechnungs-PDF stand mit fest weisser
 * Schrift auf der frei waehlbaren Akzentfarbe. Der Standardwert traegt Weiss
 * muehelos, eine helle Firmenfarbe nicht: bei Gold (#ddcb55) bleiben 1,65:1,
 * gefordert sind 4,5:1. Die Farbe selbst wird nicht angetastet, es ist eine
 * Firmenfarbe. Angepasst wird nur die Schrift, die darauf sitzt.
 *
 * Portiert aus worktime/src/utils/colorUtils.js (cpcMomentum/worktime#548),
 * damit beide Apps dieselbe Entscheidung treffen.
 */
final class ColorContrast {

	/**
	 * Lesbare Schriftfarbe fuer einen farbigen Hintergrund.
	 *
	 * Reines Schwarz oder Weiss, nicht abgemildert: ein abgeschwaechtes #222
	 * bleibt bei Nextcloud-Blau in beide Richtungen unter 4,5:1.
	 *
	 * @param string|null $hex Hintergrundfarbe als #rrggbb oder #rgb
	 * @return string '#ffffff' oder '#000000'
	 */
	public static function textColorOn(?string $hex): string {
		$luminance = self::relativeLuminance($hex);
		// Ohne verwertbare Farbe gilt die normale Textfarbe, hier Schwarz.
		if ($luminance === null) {
			return '#000000';
		}
		return self::contrast($luminance, 1.0) >= self::contrast($luminance, 0.0)
			? '#ffffff'
			: '#000000';
	}

	/**
	 * Relative Helligkeit nach WCAG 2.1.
	 *
	 * @return float|null 0..1, oder null wenn die Eingabe kein Hexwert ist
	 */
	private static function relativeLuminance(?string $hex): ?float {
		if ($hex === null) {
			return null;
		}
		$value = ltrim(trim($hex), '#');
		if (strlen($value) === 3) {
			$value = $value[0] . $value[0] . $value[1] . $value[1] . $value[2] . $value[2];
		}
		if (preg_match('/^[0-9a-fA-F]{6}$/', $value) !== 1) {
			return null;
		}
		$number = (int)hexdec($value);

		return 0.2126 * self::channel(($number >> 16) & 255)
			+ 0.7152 * self::channel(($number >> 8) & 255)
			+ 0.0722 * self::channel($number & 255);
	}

	private static function channel(int $value): float {
		$c = $value / 255;
		return $c <= 0.03928 ? $c / 12.92 : (($c + 0.055) / 1.055) ** 2.4;
	}

	/** Kontrastverhaeltnis zweier Helligkeiten nach WCAG 2.1, 1 bis 21. */
	private static function contrast(float $a, float $b): float {
		$high = max($a, $b);
		$low = min($a, $b);
		return ($high + 0.05) / ($low + 0.05);
	}
}
