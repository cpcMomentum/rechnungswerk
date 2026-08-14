<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\CountryData;
use OCA\Rechnungswerk\Service\CountryService;
use PHPUnit\Framework\TestCase;

class CountryServiceTest extends TestCase {

	use TranslatorStub;

	private CountryService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->service = new CountryService($this->l10nStub());
	}

	/**
	 * Der Fall aus #167: Adressbuecher liefern den ausgeschriebenen Namen.
	 *
	 * @dataProvider resolvableProvider
	 */
	public function testResolvesToIsoCode(string $input, string $expected): void {
		$this->assertSame($expected, $this->service->resolve($input));
	}

	/** @return array<string, array{0: string, 1: string}> */
	public static function resolvableProvider(): array {
		return [
			'deutscher Name' => ['Deutschland', 'DE'],
			'englischer Name' => ['Germany', 'DE'],
			'kleingeschrieben' => ['deutschland', 'DE'],
			'mit Leerraum' => ['  Deutschland  ', 'DE'],
			'Code klein' => ['de', 'DE'],
			'Code gross' => ['DE', 'DE'],
			'Umlaut' => ['Österreich', 'AT'],
			'Umlaut ausgeschrieben' => ['Oesterreich', 'AT'],
			'Umlaut weggelassen' => ['Osterreich', 'AT'],
			'Umlaut versal' => ['ÖSTERREICH', 'AT'],
			'Schweiz deutsch' => ['Schweiz', 'CH'],
			'Schweiz englisch' => ['Switzerland', 'CH'],
			'Alias USA' => ['USA', 'US'],
			'Alias mit Punkten' => ['U.S.A.', 'US'],
			'Alias Grossbritannien' => ['Großbritannien', 'GB'],
			'Alias UK' => ['UK', 'GB'],
			'Alias Holland' => ['Holland', 'NL'],
			'Alias Czech Republic' => ['Czech Republic', 'CZ'],
			'Akzent im Namen' => ['Côte d’Ivoire', 'CI'],
			'Akzent ohne Sonderzeichen' => ['Cote dIvoire', 'CI'],
			'Kosovo trotz Nicht-Buchstaben-Code' => ['Kosovo', '1A'],
		];
	}

	/** @dataProvider unresolvableProvider */
	public function testReturnsNullForUnresolvable(?string $input): void {
		$this->assertNull($this->service->resolve($input));
	}

	/** @return array<string, array{0: ?string}> */
	public static function unresolvableProvider(): array {
		return [
			'null' => [null],
			'leer' => [''],
			'nur Leerraum' => ['   '],
			'Fantasieland' => ['Absurdistan'],
			'Tippfehler' => ['Deutschlnd'],
			'kein gueltiger Code' => ['XX'],
			'Satzzeichen allein' => ['---'],
		];
	}

	/** Der Schreibpfad, den Rechnung und Kunde teilen. */
	public function testResolveForStorageTranslatesAndDefaults(): void {
		$this->assertSame('DE', $this->service->resolveForStorage('Deutschland'));
		$this->assertSame('AT', $this->service->resolveForStorage('Österreich'));
		$this->assertSame('DE', $this->service->resolveForStorage(''), 'leer bedeutet Inland');
		$this->assertSame('DE', $this->service->resolveForStorage(null));
		$this->assertSame('DE', $this->service->resolveForStorage('   '));
	}

	public function testResolveForStorageRejectsUnknownCountry(): void {
		$this->expectException(ValidationException::class);
		$this->expectExceptionMessage('Absurdistan');
		$this->service->resolveForStorage('Absurdistan');
	}

	public function testKnownCodeChecksAgainstTheEn16931List(): void {
		$this->assertTrue($this->service->isKnownCode('DE'));
		$this->assertTrue($this->service->isKnownCode('1A'));
		$this->assertFalse($this->service->isKnownCode('XX'));
		$this->assertFalse($this->service->isKnownCode('de'));
	}

	public function testEveryResolvedCodeFitsTheDatabaseColumn(): void {
		foreach (array_keys(CountryData::NAMES) as $code) {
			$this->assertLessThanOrEqual(2, strlen((string)$code), 'Code ' . $code . ' passt nicht in varchar(2)');
		}
	}

	public function testListStartsWithDachAndIsOtherwiseAlphabetical(): void {
		$list = $this->service->list('de');

		$this->assertSame(['DE', 'AT', 'CH'], array_column(array_slice($list, 0, 3), 'code'));
		$this->assertCount(count(CountryData::NAMES), $list);
		$this->assertSame('Deutschland', $list[0]['label']);

		$rest = array_column(array_slice($list, 3), 'label');
		$this->assertNotContains('Deutschland', $rest, 'DACH darf nicht doppelt auftauchen');

		// Oesterreich steht oben, aber die Sortierung des Restes muss Umlaute
		// trotzdem einreihen statt sie ans Ende zu schieben.
		$positionOfO = array_search('Oman', $rest, true);
		$positionOfP = array_search('Pakistan', $rest, true);
		$this->assertIsInt($positionOfO);
		$this->assertIsInt($positionOfP);
		$this->assertLessThan($positionOfP, $positionOfO);
	}

	public function testListFollowsTheLanguage(): void {
		$german = $this->service->list('de_DE');
		$english = $this->service->list('en');

		$this->assertSame('Deutschland', $german[0]['label']);
		$this->assertSame('Germany', $english[0]['label']);
	}
}
