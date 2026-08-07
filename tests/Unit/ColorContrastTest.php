<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Service\ColorContrast;
use PHPUnit\Framework\TestCase;

/**
 * #171: Die Kopfzeile der Positionstabelle stand mit fest weisser Schrift auf
 * der frei waehlbaren Akzentfarbe.
 */
class ColorContrastTest extends TestCase {

	/**
	 * Die Werte stammen aus der Kontrastrechnung im Issue.
	 *
	 * @dataProvider colorProvider
	 */
	public function testTextColorFollowsTheBackground(string $background, string $expected, string $why): void {
		$this->assertSame($expected, ColorContrast::textColorOn($background), $why);
	}

	/** @return array<string, array{0: string, 1: string, 2: string}> */
	public static function colorProvider(): array {
		return [
			'Standardfarbe dunkelblau' => ['#2c3e50', '#ffffff', 'weiss traegt mit 10,98:1'],
			'produktive Akzentfarbe grau' => ['#919191', '#000000', 'weiss kaeme nur auf 3,15:1'],
			'Gold' => ['#ddcb55', '#000000', 'weiss kaeme nur auf 1,65:1'],
			'Whiskey' => ['#d3a967', '#000000', 'weiss kaeme nur auf 2,18:1'],
			'Nextcloud-Blau' => ['#0082c9', '#000000', 'weiss kaeme nur auf 4,17:1, knapp unter AA'],
			'kraeftiges Rot' => ['#e74c3c', '#000000', 'weiss kaeme nur auf 3,82:1'],
			'Lila' => ['#b6469d', '#ffffff', 'weiss traegt mit 4,83:1'],
			'reines Schwarz' => ['#000000', '#ffffff', ''],
			'reines Weiss' => ['#ffffff', '#000000', ''],
			'Kurzschreibweise' => ['#fff', '#000000', 'drei Stellen werden verdoppelt'],
			'ohne Raute' => ['2c3e50', '#ffffff', 'die Raute ist optional'],
			'mit Leerraum' => ['  #2c3e50  ', '#ffffff', ''],
			'Grossbuchstaben' => ['#DDCB55', '#000000', ''],
		];
	}

	/**
	 * Ohne verwertbare Farbe gilt die normale Textfarbe. In der PDF-Erzeugung
	 * kann das nicht auftreten, weil dort bereits auf die Standardfarbe
	 * zurueckgefallen wird, die Funktion muss es trotzdem tragen.
	 *
	 * @dataProvider invalidProvider
	 */
	public function testFallsBackToBlackOnUnusableInput(?string $input): void {
		$this->assertSame('#000000', ColorContrast::textColorOn($input));
	}

	/** @return array<string, array{0: ?string}> */
	public static function invalidProvider(): array {
		return [
			'null' => [null],
			'leer' => [''],
			'kein Hex' => ['rot'],
			'zu kurz' => ['#12'],
			'zu lang' => ['#1234567'],
			'ungueltige Zeichen' => ['#gggggg'],
		];
	}

	/**
	 * Die gewaehlte Schrift muss immer die kontrastreichere von beiden sein.
	 * Geprueft ueber den kompletten Graukeil, damit die Umschaltgrenze nicht
	 * versehentlich auf die falsche Seite rutscht.
	 */
	public function testAlwaysPicksTheHigherContrastOfTheTwo(): void {
		for ($v = 0; $v <= 255; $v += 5) {
			$hex = sprintf('#%02x%02x%02x', $v, $v, $v);
			$chosen = ColorContrast::textColorOn($hex);
			$other = $chosen === '#ffffff' ? '#000000' : '#ffffff';

			$this->assertGreaterThanOrEqual(
				$this->ratio($hex, $other),
				$this->ratio($hex, $chosen),
				'Bei ' . $hex . ' waere ' . $other . ' kontrastreicher gewesen',
			);
		}
	}

	private function ratio(string $a, string $b): float {
		$lum = static function (string $hex): float {
			$n = (int)hexdec(ltrim($hex, '#'));
			$ch = static function (int $v): float {
				$c = $v / 255;
				return $c <= 0.03928 ? $c / 12.92 : (($c + 0.055) / 1.055) ** 2.4;
			};
			return 0.2126 * $ch(($n >> 16) & 255) + 0.7152 * $ch(($n >> 8) & 255) + 0.0722 * $ch($n & 255);
		};
		$x = $lum($a);
		$y = $lum($b);
		return (max($x, $y) + 0.05) / (min($x, $y) + 0.05);
	}
}
