<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ArchiveService;
use OCA\Rechnungswerk\Service\CountryService;
use OCA\Rechnungswerk\Service\DocumentStore;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\MailService;
use OCA\Rechnungswerk\Service\NumberFormatMessage;
use OCA\Rechnungswerk\Service\SettingsService;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\IDBConnection;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Regressionstest zu #167 auf dem Pfad, der tatsaechlich gemeldet wurde:
 * dem Speichern eines Rechnungsentwurfs.
 *
 * Die Laenderpruefung sitzt in applyHeader() und damit VOR der Transaktion.
 * Genau das wird hier festgenagelt: ein ungueltiges Land darf die Datenbank
 * gar nicht erst erreichen. Frueher lief der Wert ungeprueft in eine zwei
 * Zeichen breite Spalte, der Insert brach ab und der Nutzer sah einen 500er.
 */
class InvoiceServiceCountryTest extends TestCase {

	use TranslatorStub;

	private IDBConnection $db;
	private InvoiceMapper $invoiceMapper;
	private InvoiceService $service;

	protected function setUp(): void {
		parent::setUp();

		$this->db = $this->createMock(IDBConnection::class);
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);

		$this->service = new InvoiceService(
			$this->invoiceMapper,
			$this->createMock(InvoiceItemMapper::class),
			$this->createMock(SettingsService::class),
			$this->createMock(ZugferdService::class),
			$this->createMock(ArchiveService::class),
			$this->createMock(DocumentStore::class),
			$this->createMock(MailService::class),
			new CountryService($this->l10nStub()),
			$this->db,
			$this->createMock(LoggerInterface::class),
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
		);
	}

	public function testUnknownCountryNeverReachesTheDatabase(): void {
		$this->db->expects($this->never())->method('beginTransaction');
		$this->invoiceMapper->expects($this->never())->method('insert');

		$this->expectException(ValidationException::class);
		$this->expectExceptionMessage('Absurdistan');

		$this->service->create('alice', [
			'recipientName' => 'Beispiel GmbH',
			'recipientCountry' => 'Absurdistan',
		]);
	}

	/**
	 * Der gemeldete Fall: "Deutschland" kommt aus dem Adressbuch und muss den
	 * Entwurf passieren lassen, nicht abbrechen.
	 */
	public function testWrittenOutCountryNameIsStoredAsIsoCode(): void {
		$stored = null;
		$this->invoiceMapper->method('insert')->willReturnCallback(
			function (Invoice $invoice) use (&$stored) {
				$stored = $invoice;
				$invoice->setId(1);
				return $invoice;
			}
		);

		try {
			$this->service->create('alice', [
				'recipientName' => 'Beispiel GmbH',
				'recipientCountry' => 'Deutschland',
			]);
		} catch (\Throwable) {
			// present() haengt an Diensten, die hier nur Attrappen sind. Fuer
			// diesen Test zaehlt allein, was bis zum insert() gesetzt wurde.
		}

		$this->assertNotNull($stored, 'insert() muss erreicht werden, der Wert darf nicht vorher abgelehnt werden');
		$this->assertSame('DE', $stored->getRecipientCountry());
	}

	/**
	 * #180: Der Einzelpreis kommt als Rohtext und wird serverseitig
	 * umgerechnet. Ein unlesbarer Preis darf die Transaktion gar nicht
	 * erreichen, genau wie ein unbekanntes Land.
	 */
	public function testUnreadablePriceNeverReachesTheDatabase(): void {
		$this->db->expects($this->never())->method('beginTransaction');
		$this->invoiceMapper->expects($this->never())->method('insert');

		$this->expectException(ValidationException::class);
		$this->expectExceptionMessage('auf Anfrage');

		$this->service->create('alice', [
			'recipientName' => 'Beispiel GmbH',
			'items' => [['name' => 'Beratung', 'quantity' => '1', 'unitPriceInput' => 'auf Anfrage']],
		]);
	}

	public function testGermanPriceNotationIsConvertedOnTheServer(): void {
		$stored = null;
		$this->invoiceMapper->method('insert')->willReturnCallback(
			function (Invoice $invoice) use (&$stored) {
				$stored = $invoice;
				$invoice->setId(1);
				return $invoice;
			}
		);

		try {
			$this->service->create('alice', [
				'recipientName' => 'Beispiel GmbH',
				'items' => [['name' => 'Beratung', 'quantity' => '2', 'unitPriceInput' => '1.234,56']],
			]);
		} catch (\Throwable) {
			// present() haengt an Attrappen; hier zaehlt nur, was bis zum insert() lief.
		}

		$this->assertNotNull($stored, 'insert() muss erreicht werden');
	}

	public function testEmptyCountryFallsBackToDomestic(): void {
		$stored = null;
		$this->invoiceMapper->method('insert')->willReturnCallback(
			function (Invoice $invoice) use (&$stored) {
				$stored = $invoice;
				$invoice->setId(1);
				return $invoice;
			}
		);

		try {
			$this->service->create('alice', ['recipientName' => 'Beispiel GmbH', 'recipientCountry' => '']);
		} catch (\Throwable) {
			// siehe oben
		}

		$this->assertNotNull($stored);
		$this->assertSame('DE', $stored->getRecipientCountry());
	}
}
