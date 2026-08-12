<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\IL10N;

/**
 * Uebersetzt Laenderangaben in ISO-3166-1-alpha-2-Codes (#167).
 *
 * Adressbuecher liefern im vCard-Feld ADR laut RFC 6350 einen frei
 * geschriebenen Laendernamen ("Deutschland", "Germany"), unsere Spalten
 * fassen aber nur zwei Zeichen und die E-Rechnung nach EN16931 verlangt in
 * BT-40/BT-55 den Code. Ohne Uebersetzung an der Eingangsstelle brach das
 * Speichern mit einem Datenbankfehler ab.
 */
class CountryService {

	public function __construct(
		private readonly IL10N $l10n,
	) {
	}

	/** Diese Codes stehen in der Auswahlliste oben, alles andere folgt alphabetisch. */
	private const PRIORITY = ['DE', 'AT', 'CH'];

	/**
	 * Gebraeuchliche Bezeichnungen, die es in den CLDR-Namen nicht gibt.
	 * Schluessel sind bereits gefaltet (siehe fold()).
	 */
	private const ALIASES = [
		'usa' => 'US',
		'vereinigtestaatenvonamerika' => 'US',
		'unitedstatesofamerica' => 'US',
		'uk' => 'GB',
		'grossbritannien' => 'GB',
		'england' => 'GB',
		'schottland' => 'GB',
		'wales' => 'GB',
		'nordirland' => 'GB',
		'greatbritain' => 'GB',
		'holland' => 'NL',
		'czechrepublic' => 'CZ',
		'tschechischerepublik' => 'CZ',
		'tschechei' => 'CZ',
		'suedkorea' => 'KR',
		'southkorea' => 'KR',
		'nordkorea' => 'KP',
		'northkorea' => 'KP',
		'elfenbeinkueste' => 'CI',
		'ivorycoast' => 'CI',
	];

	/** Umlaute in die deutsche Ersatzschreibung. */
	private const TRANSLITERATION = [
		'ä' => 'ae', 'ö' => 'oe', 'ü' => 'ue', 'ß' => 'ss',
		'Ä' => 'ae', 'Ö' => 'oe', 'Ü' => 'ue',
	];

	/** Akzente auf den Grundbuchstaben. Deckt Latin-1 ab, nicht nur die 13 Zeichen aus CountryData. */
	private const DIACRITICS = [
		'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a', 'æ' => 'ae',
		'ç' => 'c', 'è' => 'e', 'é' => 'e', 'ê' => 'e', 'ë' => 'e',
		'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i',
		'ñ' => 'n', 'ò' => 'o', 'ó' => 'o', 'ô' => 'o', 'õ' => 'o', 'ö' => 'o', 'ø' => 'o',
		'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ü' => 'u', 'ý' => 'y', 'ÿ' => 'y',
		'š' => 's', 'ž' => 'z', 'č' => 'c', 'ć' => 'c', 'ł' => 'l', 'ő' => 'o', 'ű' => 'u',
		'ß' => 'ss',
	];

	/**
	 * Gefalteter Name => Code. Einmal pro Prozess aufgebaut, die Tabelle ist konstant.
	 *
	 * @var array<string, string>|null
	 */
	private static ?array $index = null;

	/**
	 * Loest eine beliebige Laenderangabe in einen ISO-Code auf.
	 *
	 * Akzeptiert den Code selbst ("de", "DE"), den deutschen oder englischen
	 * Namen ("Deutschland", "Germany") und gaengige Schreibvarianten
	 * ("Oesterreich", "OSTERREICH").
	 *
	 * @return string|null Der Code, oder null wenn leer oder nicht zuzuordnen.
	 */
	public function resolve(?string $input): ?string {
		$value = trim((string)$input);
		if ($value === '') {
			return null;
		}
		$upper = mb_strtoupper($value, 'UTF-8');
		if (isset(CountryData::NAMES[$upper])) {
			return $upper;
		}
		return $this->index()[$this->fold($value)] ?? null;
	}

	/**
	 * Wie resolve(), aber mit den Regeln der Schreibpfade: leer bedeutet Inland,
	 * Unbekanntes wird abgelehnt statt in die zwei Zeichen breite Spalte zu
	 * laufen und dort einen Datenbankfehler auszuloesen (#167).
	 *
	 * @throws ValidationException
	 */
	public function resolveForStorage(mixed $value): string {
		$raw = trim((string)($value ?? ''));
		if ($raw === '') {
			return 'DE';
		}
		$code = $this->resolve($raw);
		if ($code === null) {
			throw new ValidationException($this->l10n->t('"%s" ist kein gültiges Land. Bitte aus der Liste wählen.', [$raw]));
		}
		return $code;
	}

	/** Ob der Code so in der EN16931-Liste steht. Erwartet bereits Grossbuchstaben. */
	public function isKnownCode(string $code): bool {
		return isset(CountryData::NAMES[$code]);
	}

	/**
	 * Die Auswahlliste fuer das Frontend: DACH zuerst, danach alphabetisch.
	 *
	 * @param string $languageCode NC-Sprachcode, entscheidet ueber deutsche oder englische Namen.
	 * @return list<array{code: string, label: string}>
	 */
	public function list(string $languageCode): array {
		$german = str_starts_with(strtolower($languageCode), 'de');

		$rest = [];
		foreach (CountryData::NAMES as $code => $names) {
			if (in_array($code, self::PRIORITY, true)) {
				continue;
			}
			$rest[] = ['code' => $code, 'label' => $german ? $names[0] : $names[1]];
		}
		// Ohne intl-Collator wird nach dem akzentfreien Namen sortiert,
		// damit "Österreich" unter O steht und nicht hinter Z.
		usort($rest, fn (array $a, array $b) => strcmp($this->fold($a['label']), $this->fold($b['label'])));

		$top = [];
		foreach (self::PRIORITY as $code) {
			$names = CountryData::NAMES[$code];
			$top[] = ['code' => $code, 'label' => $german ? $names[0] : $names[1]];
		}

		return array_merge($top, $rest);
	}

	/**
	 * Baut den Suchindex ueber alle Namen und ihre Schreibvarianten auf.
	 *
	 * @return array<string, string>
	 */
	private function index(): array {
		if (self::$index !== null) {
			return self::$index;
		}
		$index = [];
		foreach (CountryData::NAMES as $code => $names) {
			foreach ($names as $name) {
				foreach ($this->foldVariants($name) as $key) {
					// Erster Treffer gewinnt, damit ein Alias unten nicht still ueberschrieben wird.
					if ($key !== '' && !isset($index[$key])) {
						$index[$key] = (string)$code;
					}
				}
			}
		}
		foreach (self::ALIASES as $key => $code) {
			$index[$key] = $code;
		}
		self::$index = $index;
		return $index;
	}

	/**
	 * Beide Schreibvarianten eines Namens: "Österreich" faellt sowohl auf
	 * "osterreich" als auch auf "oesterreich".
	 *
	 * @return list<string>
	 */
	private function foldVariants(string $value): array {
		$stripped = $this->fold($value);
		$transliterated = $this->squash(strtr(mb_strtolower($value, 'UTF-8'), self::TRANSLITERATION));
		return $stripped === $transliterated ? [$stripped] : [$stripped, $transliterated];
	}

	/** Kleinschreibung, Akzente weg, alles ausser a-z0-9 weg. */
	private function fold(string $value): string {
		return $this->squash(strtr(mb_strtolower($value, 'UTF-8'), self::DIACRITICS));
	}

	private function squash(string $value): string {
		return (string)preg_replace('/[^a-z0-9]/u', '', $value);
	}
}
