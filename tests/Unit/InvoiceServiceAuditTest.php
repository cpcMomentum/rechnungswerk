<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\AuditEntry;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\ArchiveService;
use OCA\Rechnungswerk\Service\AuditService;
use OCA\Rechnungswerk\Service\CountryService;
use OCA\Rechnungswerk\Service\DocumentStore;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\MailService;
use OCA\Rechnungswerk\Service\NumberFormatMessage;
use OCA\Rechnungswerk\Service\SettingsService;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\IDBConnection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class InvoiceServiceAuditTest extends TestCase {

	use TranslatorStub;
	use CompanyClockStub;

	private InvoiceMapper&MockObject $invoiceMapper;
	private InvoiceItemMapper&MockObject $itemMapper;
	private SettingsService&MockObject $settingsService;
	private IDBConnection&MockObject $db;
	private AuditService&MockObject $audit;
	private MailService&MockObject $mail;
	private Settings $settings;
	private InvoiceService $service;
	/** @var list<array{string, int}> */
	private array $recorded = [];

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->itemMapper = $this->createMock(InvoiceItemMapper::class);
		$this->settingsService = $this->createMock(SettingsService::class);
		$this->db = $this->createMock(IDBConnection::class);
		$this->audit = $this->createMock(AuditService::class);

		$this->mail = $this->createMock(MailService::class);
		$this->settings = $settings = new Settings();
		$settings->setOwnerUserId('__company__');
		$settings->setCompanyName('Muster GmbH');
		$settings->setVatId('DE123456789');
		$settings->setFileNameFormat('{nummer}');
		$this->settingsService->method('getCompany')->willReturn($settings);
		$this->settingsService->method('reserveNextNumber')->willReturn('RE-2026-0001');
		$this->settingsService->method('reserveNextQuoteNumber')->willReturn('AN-2026-0001');
		$this->invoiceMapper->method('insert')->willReturnCallback(function (Invoice $i): Invoice {
			if ($i->getId() === null) {
				$i->setId(99);
			}
			return $i;
		});
		$this->invoiceMapper->method('update')->willReturnArgument(0);
		$this->itemMapper->method('findByInvoice')->willReturn([$this->item()]);
		$capture = function (string $action, Invoice $doc): void {
			$this->recorded[] = [$action, (int)$doc->getId()];
		};
		$this->audit->method('record')->willReturnCallback($capture);
		$this->audit->method('recordNow')->willReturnCallback($capture);

		$this->service = $this->newService($this->invoiceMapper, $this->audit);
	}

	private function newService(InvoiceMapper $mapper, AuditService $audit): InvoiceService {
		return new InvoiceService(
			$mapper,
			$this->itemMapper,
			$this->settingsService,
			$this->createMock(ZugferdService::class),
			$this->createMock(ArchiveService::class),
			$this->createMock(DocumentStore::class),
			$this->mail,
			$this->createMock(CountryService::class),
			$this->db,
			$this->createMock(LoggerInterface::class),
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
			$audit,
			$this->companyClock(),
		);
	}

	private function item(): InvoiceItem {
		$item = new InvoiceItem();
		$item->setInvoiceId(7);
		$item->setName('Beratung');
		$item->setQuantity('1');
		$item->setUnitCode('HUR');
		$item->setUnitPriceE4(1000000);
		$item->setTaxRateBp(1900);
		$item->setLineTotalCents(10000);
		$item->setSortOrder(0);
		return $item;
	}

	private function document(string $type, string $status, ?string $number = null): Invoice {
		$doc = new Invoice();
		$doc->setId(7);
		$doc->setInvoiceType($type);
		$doc->setStatus($status);
		$doc->setNumber($number);
		$doc->setRecipientName('Kunde AG');
		$doc->setRecipientCountry('DE');
		$doc->setCreatedAt(new DateTime('2026-11-01'));
		$doc->setUpdatedAt(new DateTime('2026-11-01'));
		$this->invoiceMapper->method('findOne')->willReturn($doc);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($doc);
		return $doc;
	}

	public function testCreateRecordsOnce(): void {
		$this->service->create('alice', ['recipientName' => 'Kunde AG', 'items' => []]);
		$this->assertSame([[AuditEntry::CREATE, 99]], $this->recorded);
	}

	public function testUpdateRecordsOnce(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->service->updateInvoice(7, ['recipientName' => 'Neu AG']);
		$this->assertSame([[AuditEntry::UPDATE, 7]], $this->recorded);
	}

	public function testDeleteRecordsOnce(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->service->deleteInvoice(7);
		$this->assertSame([[AuditEntry::DELETE, 7]], $this->recorded);
	}

	public function testCommitRecordsOnce(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->service->commit(7);
		$this->assertSame([[AuditEntry::COMMIT, 7]], $this->recorded);
	}

	public function testSendRecordsAfterMail(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED, 'RE-2026-0007');
		$this->service->sendToCustomer(7, 'kunde@example.com', 'Rechnung', 'Anbei.');
		$this->assertSame([[AuditEntry::SEND, 7]], $this->recorded);
	}

	public function testPayAndUnpayRecord(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED, 'RE-2026-0007');
		$this->service->markPaid(7, '2026-11-10');
		$this->service->markUnpaid(7);
		$this->assertSame([[AuditEntry::PAY, 7], [AuditEntry::UNPAY, 7]], $this->recorded);
	}

	public function testCancelRecordsOriginalAndStorno(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED, 'RE-2026-0007');
		$this->service->cancel(7, 'alice');
		$this->assertSame([[AuditEntry::CANCEL, 7], [AuditEntry::CANCEL_DOCUMENT, 99]], $this->recorded);
	}

	public function testDuplicateRecordsTheCopy(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED, 'RE-2026-0007');
		$this->service->duplicate(7, 'alice');
		$this->assertSame([[AuditEntry::DUPLICATE, 99]], $this->recorded);
	}

	public function testCreateQuoteRecordsOnce(): void {
		$this->service->createQuote('alice', ['recipientName' => 'Kunde AG', 'items' => []]);
		$this->assertSame([[AuditEntry::CREATE, 99]], $this->recorded);
	}

	public function testCommitQuoteRecordsOnce(): void {
		$this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_DRAFT);
		$this->service->commitQuote(7);
		$this->assertSame([[AuditEntry::COMMIT, 7]], $this->recorded);
	}

	public function testCommittingARevisionRecordsTheSupersededSource(): void {
		$revision = $this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_DRAFT);
		$revision->setRelatedQuoteId(7);
		$revision->setNumber('AN-2026-0001');
		$this->invoiceMapper->method('findQuoteNumbersInFamily')->willReturn(['AN-2026-0001']);
		$this->service->commitQuote(7);
		$this->assertSame([[AuditEntry::SUPERSEDE, 7], [AuditEntry::COMMIT, 7]], $this->recorded);
	}

	public function testActionsFlushTheAuditEventsAfterCommit(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->audit->expects($this->once())->method('flush');
		$this->audit->expects($this->never())->method('discard');
		$this->service->deleteInvoice(7);
	}

	public function testQuoteOutcomeRecordsAcceptAndReject(): void {
		$this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_COMMITTED, 'AN-2026-0001');
		$this->service->markQuoteAccepted(7);
		$this->service->markQuoteRejected(7);
		$this->assertSame([[AuditEntry::ACCEPT, 7], [AuditEntry::REJECT, 7]], $this->recorded);
	}

	public function testReviseRecordsTheRevision(): void {
		$this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_COMMITTED, 'AN-2026-0001');
		$this->service->reviseQuote(7, 'alice');
		$this->assertSame([[AuditEntry::REVISE, 99]], $this->recorded);
	}

	public function testConvertRecordsQuoteAndNewInvoice(): void {
		$this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_COMMITTED, 'AN-2026-0001');
		$this->service->convertToInvoice(7, 'alice');
		$this->assertSame([[AuditEntry::CONVERT, 7], [AuditEntry::CONVERT_DOCUMENT, 99]], $this->recorded);
	}

	public function testSendQuoteRecordsAfterMail(): void {
		$this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_COMMITTED, 'AN-2026-0001');
		$this->service->sendQuoteToCustomer(7, 'kunde@example.com', 'Angebot', 'Anbei.');
		$this->assertSame([[AuditEntry::SEND, 7]], $this->recorded);
	}

	private function enableDatev(): void {
		$this->settings->setDatevAutoSend(1);
		$this->settings->setDatevUploadMail('upload@datev.example');
	}

	public function testCommitRecordsTheDatevHandOff(): void {
		$this->enableDatev();
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->mail->method('sendInvoicePdf')->willReturn('<msg@localhost>');

		$result = $this->service->commit(7);

		$this->assertTrue($result['datevMailSent']);
		$this->assertSame([[AuditEntry::COMMIT, 7], [AuditEntry::DATEV_SEND, 7]], $this->recorded);
	}

	public function testFailedDatevMailIsRecorded(): void {
		$this->enableDatev();
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->mail->method('sendInvoicePdf')->willThrowException(new \RuntimeException('smtp down'));

		$result = $this->service->commit(7);

		$this->assertNull($result['datevMailSent']);
		$this->assertSame([[AuditEntry::COMMIT, 7], [AuditEntry::DATEV_SEND_FAILED, 7]], $this->recorded);
	}

	public function testDatevMailThatWentOutIsRecordedAsSentEvenIfTheStatusUpdateFails(): void {
		$this->enableDatev();
		$doc = $this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$this->mail->method('sendInvoicePdf')->willReturn('<msg@localhost>');
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->invoiceMapper->method('findOne')->willReturn($doc);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($doc);
		$this->invoiceMapper->method('update')->willReturnCallback(function (Invoice $i): Invoice {
			if ($i->getDatevStatus() === Invoice::DATEV_PENDING) {
				throw new \RuntimeException('db down');
			}
			return $i;
		});
		$service = $this->newService($this->invoiceMapper, $this->audit);

		$result = $service->commit(7);

		$this->assertTrue($result['datevMailSent']);
		$this->assertSame([[AuditEntry::COMMIT, 7], [AuditEntry::DATEV_SEND, 7]], $this->recorded);
	}

	public function testFailingRecordRollsTheActionBack(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$audit = $this->createMock(AuditService::class);
		$audit->method('record')->willThrowException(new \RuntimeException('db down'));
		$service = $this->newService($this->invoiceMapper, $audit);

		$audit->expects($this->once())->method('discard');
		$audit->expects($this->never())->method('flush');
		$this->db->expects($this->never())->method('commit');
		$this->db->expects($this->once())->method('rollBack');
		$this->expectException(\RuntimeException::class);

		$service->deleteInvoice(7);
	}
}
