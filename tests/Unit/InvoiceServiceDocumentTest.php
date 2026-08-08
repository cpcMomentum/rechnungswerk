<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\ArchiveService;
use OCA\Rechnungswerk\Service\CountryService;
use OCA\Rechnungswerk\Service\DocumentStore;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\MailService;
use OCA\Rechnungswerk\Service\SettingsService;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\IDBConnection;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * #181, Schritt 2: die Ausgabewege liefern den eingefrorenen Beleg.
 *
 * Bewusst OHNE Mailserver. Am Versand selbst hat sich nichts geändert; neu ist
 * allein, woher Inhalt und Dateiname kommen. Genau das wird hier festgehalten —
 * ein echter SMTP-Test würde prüfen, ob Nextcloud Mails verschickt, und das war
 * nie die Frage.
 */
class InvoiceServiceDocumentTest extends TestCase {

	private const FROZEN = '%PDF-1.7 eingefrorener Beleg';
	private const RENDERED = '%PDF-1.7 frisch gerendert';

	private InvoiceMapper $invoiceMapper;
	private InvoiceItemMapper $itemMapper;
	private SettingsService $settingsService;
	private ZugferdService $zugferdService;
	private ArchiveService $archiveService;
	private DocumentStore $documentStore;
	private MailService $mailService;
	private IDBConnection $db;
	private InvoiceService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->itemMapper = $this->createMock(InvoiceItemMapper::class);
		$this->settingsService = $this->createMock(SettingsService::class);
		$this->zugferdService = $this->createMock(ZugferdService::class);
		$this->archiveService = $this->createMock(ArchiveService::class);
		$this->documentStore = $this->createMock(DocumentStore::class);
		$this->mailService = $this->createMock(MailService::class);
		$this->db = $this->createMock(IDBConnection::class);

		$settings = new Settings();
		$settings->setOwnerUserId('__company__');
		$settings->setCompanyName('Muster GmbH');
		$settings->setFileNameFormat('{nummer}');
		$this->settingsService->method('getCompany')->willReturn($settings);
		$this->zugferdService->method('generatePdf')->willReturn(self::RENDERED);

		$this->service = new InvoiceService(
			$this->invoiceMapper,
			$this->itemMapper,
			$this->settingsService,
			$this->zugferdService,
			$this->archiveService,
			$this->documentStore,
			$this->mailService,
			$this->createMock(CountryService::class),
			$this->db,
			$this->createMock(LoggerInterface::class),
		);
	}

	private function committedInvoice(): Invoice {
		$invoice = new Invoice();
		$invoice->setId(7);
		$invoice->setNumber('RE-2026-0007');
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setStatus(Invoice::STATUS_COMMITTED);
		$invoice->setRecipientName('Kunde AG');
		$invoice->setCommittedAt(new DateTime('2026-08-08'));
		$invoice->setDocumentFileName('RE-2026-0007.pdf');
		$invoice->setDocumentSha256(hash('sha256', self::FROZEN));
		$invoice->setDocumentFrozenAt(new DateTime('2026-08-08'));
		return $invoice;
	}

	/** Der Kunde bekommt exakt den eingefrorenen Beleg, nicht eine Neuerzeugung. */
	public function testCustomerMailCarriesTheFrozenDocument(): void {
		$invoice = $this->committedInvoice();
		$this->invoiceMapper->method('findOne')->willReturn($invoice);
		$this->documentStore->method('read')->willReturn(self::FROZEN);

		$this->mailService->expects($this->once())
			->method('sendInvoicePdf')
			->with(
				'kunde@example.com',
				'Ihre Rechnung',
				'Anbei.',
				self::FROZEN,
				'RE-2026-0007.pdf',
				$this->anything(),
				$this->anything(),
			);

		$this->service->sendToCustomer(7, 'kunde@example.com', 'Ihre Rechnung', 'Anbei.');
	}

	/**
	 * Ohne eingefrorenen Beleg (Rechnungen von vor dieser Änderung) wird
	 * erzeugt, statt den Versand scheitern zu lassen.
	 */
	public function testCustomerMailFallsBackToRenderingWhenNothingIsFrozen(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDocumentFileName(null);
		$invoice->setDocumentSha256(null);
		$invoice->setDocumentFrozenAt(null);
		$this->invoiceMapper->method('findOne')->willReturn($invoice);
		$this->documentStore->method('read')->willReturn(null);

		$this->mailService->expects($this->once())
			->method('sendInvoicePdf')
			->with(
				$this->anything(),
				$this->anything(),
				$this->anything(),
				self::RENDERED,
				'RE-2026-0007.pdf',
				$this->anything(),
				$this->anything(),
			);

		$this->service->sendToCustomer(7, 'kunde@example.com', 'Betreff', 'Text');
	}

	/**
	 * DATEV-Übergabe und Ablage nehmen beim Festschreiben denselben Beleg.
	 * Beide sind privat und nur über commit() erreichbar — deshalb der Umweg
	 * über die Mapper-Attrappen statt künstlicher Sichtbarkeit im
	 * Produktivcode oder eines Zugriffs per Reflection.
	 */
	public function testDatevAndArchiveCarryTheSameFrozenDocument(): void {
		$draft = $this->committedInvoice();
		$draft->setStatus(Invoice::STATUS_DRAFT);
		$draft->setNumber(null);
		$draft->setDocumentFileName(null);
		$draft->setDocumentSha256(null);
		$draft->setDocumentFrozenAt(null);

		$item = new InvoiceItem();
		$item->setName('Beratung');
		$item->setQuantity('1');
		$item->setUnitPriceE4(1000000);
		$item->setTaxRateBp(1900);
		$item->setLineTotalCents(10000);

		$settings = new Settings();
		$settings->setOwnerUserId('__company__');
		$settings->setCompanyName('Muster GmbH');
		$settings->setFileNameFormat('{nummer}');
		$settings->setDatevAutoSend(1);
		$settings->setDatevUploadMail('datev@example.com');
		$settings->setSmallBusiness(0);
		// Ablage einschalten: seit der Vorpruefung wird ArchiveService bei
		// abgeschalteter Ablage gar nicht mehr aufgerufen, der Test pruefte
		// sonst nichts.
		$settings->setArchiveEnabled(1);
		$settings->setArchiveFolderId(42);

		$settingsService = $this->createMock(SettingsService::class);
		$settingsService->method('getCompany')->willReturn($settings);
		$settingsService->method('reserveNextNumber')->willReturn('RE-2026-0007');

		$this->invoiceMapper->method('findOne')->willReturn($draft);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($draft);
		$this->invoiceMapper->method('update')->willReturnArgument(0);
		$this->itemMapper->method('findByInvoice')->willReturn([$item]);
		// Der Beleg ist beim Versand bereits eingefroren.
		$this->documentStore->method('has')->willReturn(true);
		$this->documentStore->method('read')->willReturn(self::FROZEN);

		$service = new InvoiceService(
			$this->invoiceMapper,
			$this->itemMapper,
			$settingsService,
			$this->zugferdService,
			$this->archiveService,
			$this->documentStore,
			$this->mailService,
			$this->createMock(CountryService::class),
			$this->db,
			$this->createMock(LoggerInterface::class),
		);

		// Dieselbe Datei geht auch in die Ablage — hier mitgeprueft, statt eine
		// private Methode per Reflection anzufassen.
		$this->archiveService->expects($this->once())
			->method('maybeArchive')
			->with(
				$this->anything(),
				$this->anything(),
				$this->anything(),
				$this->anything(),
				$this->anything(),
				['filename' => 'RE-2026-0007.pdf', 'content' => self::FROZEN],
			);

		$this->mailService->expects($this->once())
			->method('sendInvoicePdf')
			->with(
				'datev@example.com',
				$this->anything(),
				$this->anything(),
				self::FROZEN,
				'RE-2026-0007.pdf',
				$this->anything(),
				$this->anything(),
			);

		$service->commit(7);
	}

}
