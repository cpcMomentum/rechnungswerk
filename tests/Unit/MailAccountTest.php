<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Service\MailAccount;
use PHPUnit\Framework\TestCase;

/**
 * Zugangsdaten duerfen nicht im Log landen.
 *
 * Vorfall vom 21.09.2026: Ein Tippfehler in der Absenderadresse liess den
 * SMTP-Versand scheitern; die Ausnahme wanderte samt Aufrufargumenten ins
 * `nextcloud.log` der Produktivinstanz — mit dem SMTP-Passwort im Klartext.
 * Ursache war, dass die Konfiguration als Array durch die Aufrufkette ging.
 *
 * Nextclouds `ExceptionSerializer::encodeArg()` schreibt ein Array
 * vollstaendig, bei einem Objekt nimmt es `['__class__' => …] + get_object_vars($arg)`.
 * Von aussen aufgerufen liefert `get_object_vars()` nur oeffentliche
 * Eigenschaften — die Felder hier sind privat, also bleibt nichts uebrig.
 */
class MailAccountTest extends TestCase {

	private const PASSWORT = 'streng-geheim-42';

	private function konto(): MailAccount {
		return new MailAccount('smtp.example.org', 587, 'starttls', 'post@example.org', self::PASSWORT);
	}

	public function testDieWerteKommenSauberWiederHeraus(): void {
		$konto = $this->konto();

		self::assertSame('smtp.example.org', $konto->host());
		self::assertSame(587, $konto->port());
		self::assertSame('starttls', $konto->security());
		self::assertSame('post@example.org', $konto->user());
		self::assertSame(self::PASSWORT, $konto->password());
	}

	public function testNextcloudsStacktraceSiehtKeineZugangsdaten(): void {
		// Exakt der Weg aus ExceptionSerializer::encodeArg().
		$kodiert = array_merge(['__class__' => MailAccount::class], get_object_vars($this->konto()));

		self::assertSame(['__class__' => MailAccount::class], $kodiert);
		self::assertStringNotContainsString(self::PASSWORT, json_encode($kodiert, JSON_THROW_ON_ERROR));
	}

	public function testJsonKodierungGibtNichtsPreis(): void {
		// Falls die Konfiguration je in einer Antwort oder einem Kontext landet.
		self::assertSame('{}', json_encode($this->konto(), JSON_THROW_ON_ERROR));
	}

	public function testVarDumpZeigtDasPasswortNicht(): void {
		ob_start();
		var_dump($this->konto());
		$ausgabe = (string)ob_get_clean();

		self::assertStringNotContainsString(self::PASSWORT, $ausgabe);
		self::assertStringContainsString('smtp.example.org', $ausgabe, 'Host darf sichtbar bleiben, er hilft beim Suchen');
	}
}
