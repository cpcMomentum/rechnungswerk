<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\ContactController;
use OCA\Rechnungswerk\Service\CountryService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\UserContactService;
use OCP\Accounts\IAccountManager;
use OCP\Contacts\IManager;
use OCP\IRequest;
use OCP\IUserManager;
use PHPUnit\Framework\TestCase;

/**
 * Regressionstest zu #167: ein Adressbuch-Kontakt mit ausgeschriebenem
 * Laendernamen darf keinen Wert liefern, der die zwei Zeichen breite
 * Spalte sprengt.
 */
class ContactControllerAddressTest extends TestCase {

	/**
	 * Fuer jeden Aufruf ein frischer Mock: mehrere willReturn() auf demselben
	 * Mock wuerden sich nicht ueberschreiben, sondern der erste bliebe gueltig.
	 *
	 * @param string $adr vCard-ADR-Wert
	 * @return array<string, mixed> der erste Treffer
	 */
	private function searchWithAddress(string $adr): array {
		$contactsManager = $this->createMock(IManager::class);
		$contactsManager->method('isEnabled')->willReturn(true);
		$contactsManager->method('search')->willReturn([
			[
				'FN' => 'Beispiel GmbH',
				'EMAIL' => 'info@beispiel.de',
				'ADR' => $adr,
			],
		]);

		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('hasAccess')->willReturn(true);

		$controller = new ContactController(
			$this->createMock(IRequest::class),
			'alice',
			$contactsManager,
			$permissions,
			$this->createMock(IUserManager::class),
			$this->createMock(IAccountManager::class),
			$this->createMock(UserContactService::class),
			new CountryService(),
		);

		$data = $controller->search('Beispiel')->getData();
		$this->assertIsArray($data);
		$this->assertNotEmpty($data, 'Der Kontakt muss im Ergebnis auftauchen');
		return $data[0];
	}

	public function testGermanCountryNameBecomesIsoCode(): void {
		$match = $this->searchWithAddress(';;Musterweg 1;Musterstadt;;12345;Deutschland');

		$this->assertSame('DE', $match['country']);
		$this->assertSame('Musterweg 1', $match['address']);
		$this->assertSame('12345', $match['postalCode']);
		$this->assertSame('Musterstadt', $match['city']);
	}

	public function testEnglishCountryNameBecomesIsoCode(): void {
		$this->assertSame('DE', $this->searchWithAddress(';;Musterweg 1;Musterstadt;;12345;Germany')['country']);
	}

	public function testIsoCodeSurvivesUnchanged(): void {
		$this->assertSame('AT', $this->searchWithAddress(';;Gasse 2;Wien;;1010;AT')['country']);
	}

	public function testUnknownCountryIsDroppedInsteadOfBreakingTheImport(): void {
		$match = $this->searchWithAddress(';;Musterweg 1;Musterstadt;;12345;Absurdistan');

		$this->assertSame('', $match['country'], 'Unbekanntes Land wird verworfen');
		$this->assertSame('Musterstadt', $match['city'], 'Der Rest der Adresse bleibt erhalten');
	}

	public function testMissingCountryStaysEmpty(): void {
		$this->assertSame('', $this->searchWithAddress(';;Musterweg 1;Musterstadt;;12345;')['country']);
	}

	public function testCountryNeverExceedsTheColumnWidth(): void {
		foreach (['Deutschland', 'Germany', 'Absurdistan', 'Österreich', ''] as $name) {
			$country = $this->searchWithAddress(';;Weg;Stadt;;1;' . $name)['country'];
			$this->assertLessThanOrEqual(2, strlen((string)$country), 'Land "' . $name . '" sprengt varchar(2)');
		}
	}
}
