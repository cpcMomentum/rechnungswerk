<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use DateTimeInterface;
use DateTimeZone;
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

/** 31.12.2026 23:30 UTC is already 1.1.2027 00:30 in Berlin: every document date must follow Berlin. */
class InvoiceServiceCompanyDayTest extends TestCase {

	use TranslatorStub;
	use CompanyClockStub;

	private const NEW_YEAR_HALF_PAST_MIDNIGHT_BERLIN = '2026-12-31 23:30:00';

	private InvoiceMapper&MockObject $invoiceMapper;
	private InvoiceItemMapper&MockObject $itemMapper;
	private SettingsService&MockObject $settingsService;
	private ?DateTimeInterface $reservedFor = null;
	private ?Invoice $inserted = null;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->itemMapper = $this->createMock(InvoiceItemMapper::class);
		$this->settingsService = $this->createMock(SettingsService::class);

		$settings = new Settings();
		$settings->setOwnerUserId('__company__');
		$settings->setCompanyName('Muster GmbH');
		$settings->setVatId('DE123456789');
		$settings->setFileNameFormat('{nummer}');
		$this->settingsService->method('getCompany')->willReturn($settings);
		$reserve = function (DateTimeInterface $date): string {
			$this->reservedFor = $date;
			return 'X-' . $date->format('Y') . '-0001';
		};
		$this->settingsService->method('reserveNextNumber')->willReturnCallback($reserve);
		$this->settingsService->method('reserveNextQuoteNumber')->willReturnCallback($reserve);

		$this->invoiceMapper->method('insert')->willReturnCallback(function (Invoice $i): Invoice {
			$i->setId(99);
			return $this->inserted = $i;
		});
		$this->invoiceMapper->method('update')->willReturnArgument(0);
		$this->itemMapper->method('findByInvoice')->willReturn([$this->item()]);
	}

	private function service(string $utcInstant = self::NEW_YEAR_HALF_PAST_MIDNIGHT_BERLIN, ?string $companyZone = null): InvoiceService {
		return new InvoiceService(
			$this->invoiceMapper,
			$this->itemMapper,
			$this->settingsService,
			$this->createMock(ZugferdService::class),
			$this->createMock(ArchiveService::class),
			$this->createMock(DocumentStore::class),
			$this->createMock(MailService::class),
			$this->createMock(CountryService::class),
			$this->createMock(IDBConnection::class),
			$this->createMock(LoggerInterface::class),
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
			$this->createMock(AuditService::class),
			$this->companyClock($utcInstant, $companyZone),
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

	private function document(string $type, string $status): Invoice {
		$doc = new Invoice();
		$doc->setId(7);
		$doc->setInvoiceType($type);
		$doc->setStatus($status);
		$doc->setNumber($status === Invoice::STATUS_DRAFT ? null : 'RE-2026-0007');
		$doc->setRecipientName('Kunde AG');
		$doc->setRecipientCountry('DE');
		$doc->setCreatedAt(new DateTime('2026-11-01'));
		$doc->setUpdatedAt(new DateTime('2026-11-01'));
		$this->invoiceMapper->method('findOne')->willReturn($doc);
		$this->invoiceMapper->method('findOneForUpdate')->willReturn($doc);
		return $doc;
	}

	private static function day(?DateTimeInterface $date): ?string {
		return $date?->format('Y-m-d');
	}

	public function testCommitDatesAndNumbersTheInvoiceInTheNewYear(): void {
		$draft = $this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_DRAFT);
		$draft->setPaymentTermDays(14);

		$this->service()->commit(7);

		$this->assertSame('2027-01-01', self::day($draft->getIssueDate()));
		$this->assertSame('2027', $this->reservedFor?->format('Y'));
		$this->assertSame('X-2027-0001', $draft->getNumber());
		$this->assertSame('2027-01-15', self::day($draft->getDueDate()));
	}

	public function testCancelDatesAndNumbersTheStornoInTheNewYear(): void {
		$this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED);

		$this->service()->cancel(7, 'alice');

		$this->assertSame('2027-01-01', self::day($this->inserted?->getIssueDate()));
		$this->assertSame('2027', $this->reservedFor?->format('Y'));
	}

	public function testCommitQuoteDatesAndNumbersTheQuoteInTheNewYear(): void {
		$quote = $this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_DRAFT);

		$this->service()->commitQuote(7);

		$this->assertSame('2027-01-01', self::day($quote->getIssueDate()));
		$this->assertSame('2027', $this->reservedFor?->format('Y'));
	}

	public function testMarkPaidWithoutDateTakesTheCompanyDay(): void {
		$invoice = $this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED);

		$this->service()->markPaid(7);

		$this->assertSame('2027-01-01', self::day($invoice->getPaidAt()));
	}

	public function testDueOnNewYearsEveIsOverdueFromBerlinMidnight(): void {
		$invoice = $this->document(Invoice::TYPE_INVOICE, Invoice::STATUS_COMMITTED);
		$invoice->setDueDate(new DateTime('2026-12-31', new DateTimeZone('UTC')));

		$this->assertSame(Invoice::PAYMENT_OVERDUE, $this->service()->get(7)['paymentStatus']);
		$this->assertSame(Invoice::PAYMENT_UNPAID, $this->service(self::NEW_YEAR_HALF_PAST_MIDNIGHT_BERLIN, 'UTC')->get(7)['paymentStatus']);
	}

	public function testQuoteValidUntilNewYearsEveExpiresFromBerlinMidnight(): void {
		$quote = $this->document(Invoice::TYPE_QUOTE, Invoice::STATUS_COMMITTED);
		$quote->setValidUntil(new DateTime('2026-12-31', new DateTimeZone('UTC')));

		$this->assertSame(Invoice::QUOTE_EXPIRED, $this->service()->getQuote(7)['quoteStatus']);
		$this->assertSame(Invoice::QUOTE_OPEN, $this->service(self::NEW_YEAR_HALF_PAST_MIDNIGHT_BERLIN, 'UTC')->getQuote(7)['quoteStatus']);
	}
}
