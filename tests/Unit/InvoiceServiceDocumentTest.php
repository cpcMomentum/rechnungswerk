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
use OCA\Rechnungswerk\Service\NumberFormatMessage;
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

	use TranslatorStub;

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
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
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
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
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

	/** Ein regulär beim Festschreiben eingefrorener Beleg ist nicht nachgezogen. */
	public function testFreezingAtCommitTimeIsNotMarkedAsBackfilled(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDocumentSha256(null);
		$invoice->setDocumentFileName(null);
		$invoice->setDocumentFrozenAt(null);
		$this->documentStore->method('read')->willReturn(null);
		$this->documentStore->method('freeze')->willReturn(hash('sha256', self::RENDERED));
		$this->invoiceMapper->expects($this->once())->method('update');

		$this->assertTrue($this->service->freezeDocument($invoice));
		$this->assertSame(0, $invoice->getDocumentBackfilled());
		$this->assertSame(hash('sha256', self::RENDERED), $invoice->getDocumentSha256());
		$this->assertNotNull($invoice->getDocumentFrozenAt());
	}

	/** Der Nachzieh-Lauf (#181, Schritt 3) kennzeichnet den Beleg als nachträglich erzeugt. */
	public function testBackfillMarksTheDocumentAsRegeneratedLater(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDocumentSha256(null);
		$invoice->setDocumentFileName(null);
		$invoice->setDocumentFrozenAt(null);
		$this->documentStore->method('read')->willReturn(null);
		$this->documentStore->method('freeze')->willReturn(hash('sha256', self::RENDERED));

		$this->assertTrue($this->service->freezeDocument($invoice, true));
		$this->assertSame(1, $invoice->getDocumentBackfilled());
		$this->assertSame('RE-2026-0007.pdf', $invoice->getDocumentFileName());
	}

	/**
	 * Liegt die Datei, fehlen aber die Angaben am Datensatz — die Ablage gelang,
	 * das Update danach nicht —, werden sie aus dem abgelegten Inhalt nachgezogen
	 * und NICHT neu gerendert: die Ablage ist nur einmal beschreibbar, ein
	 * zweiter Schreibversuch wäre ein Fehler. Ohne diesen Zweig bliebe
	 * document_frozen_at leer und der Hintergrundauftrag griffe dieselbe Rechnung
	 * bei jedem Lauf erneut auf.
	 */
	public function testAnOrphanedFileGetsItsRecordRepairedInsteadOfBeingRewritten(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDocumentSha256(null);
		$invoice->setDocumentFileName(null);
		$invoice->setDocumentFrozenAt(null);
		$this->documentStore->method('read')->willReturn(self::FROZEN);
		$this->documentStore->expects($this->never())->method('freeze');
		$this->zugferdService->expects($this->never())->method('generatePdf');

		$this->assertTrue($this->service->freezeDocument($invoice, true));
		$this->assertSame(hash('sha256', self::FROZEN), $invoice->getDocumentSha256());
		$this->assertSame(1, $invoice->getDocumentBackfilled());
	}

	/** Ist schon alles eingefroren, wird nichts angefasst. */
	public function testAnAlreadyFrozenDocumentIsLeftAlone(): void {
		$invoice = $this->committedInvoice();
		$this->documentStore->method('read')->willReturn(self::FROZEN);
		$this->documentStore->expects($this->never())->method('freeze');
		$this->invoiceMapper->expects($this->never())->method('update');

		$this->assertTrue($this->service->freezeDocument($invoice, true));
		$this->assertNull($invoice->getDocumentBackfilled());
	}

	/**
	 * Ein Fehlschlag wird gemeldet, nicht geworfen: beim Festschreiben darf er die
	 * rechtlich fertige Rechnung nicht kippen, und im Nachzieh-Lauf nicht das
	 * restliche Häppchen mitnehmen.
	 */
	public function testAFailureIsReportedInsteadOfThrown(): void {
		$invoice = $this->committedInvoice();
		$invoice->setDocumentFrozenAt(null);
		$this->documentStore->method('read')->willReturn(null);

		$zugferd = $this->createMock(ZugferdService::class);
		$zugferd->method('generatePdf')->willThrowException(new \RuntimeException('Logo unlesbar'));
		$service = new InvoiceService(
			$this->invoiceMapper,
			$this->itemMapper,
			$this->settingsService,
			$zugferd,
			$this->archiveService,
			$this->documentStore,
			$this->mailService,
			$this->createMock(CountryService::class),
			$this->db,
			$this->createMock(LoggerInterface::class),
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
		);

		$this->assertFalse($service->freezeDocument($invoice, true));
		$this->assertNull($invoice->getDocumentFrozenAt());
		$this->assertNull($invoice->getDocumentBackfilled());
	}

}
