<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
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

/** Ueberschreibt der Kleinunternehmer-Fall den gesendeten Steuersatz, sagt die Antwort das. */
class InvoiceServiceWarningsTest extends TestCase {

	use TranslatorStub;
	use CompanyClockStub;

	private InvoiceMapper&MockObject $invoiceMapper;
	private AuditService&MockObject $audit;
	private InvoiceService $service;
	private ?Invoice $current = null;
	private Settings $settings;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->audit = $this->createMock(AuditService::class);
		$settingsService = $this->createMock(SettingsService::class);
		$settings = $this->settings = new Settings();
		$settings->setOwnerUserId('__company__');
		$settingsService->method('getCompany')->willReturn($settings);
		$itemMapper = $this->createMock(InvoiceItemMapper::class);
		$itemMapper->method('findByInvoice')->willReturn([]);

		$this->invoiceMapper->method('insert')->willReturnCallback(function (Invoice $i): Invoice {
			$i->setId(99);
			return $i;
		});
		$this->invoiceMapper->method('update')->willReturnArgument(0);
		$this->invoiceMapper->method('findOne')->willReturnCallback(fn () => $this->current);
		$this->invoiceMapper->method('findOneForUpdate')->willReturnCallback(fn () => $this->current);

		$this->service = new InvoiceService(
			$this->invoiceMapper,
			$itemMapper,
			$settingsService,
			$this->createMock(ZugferdService::class),
			$this->createMock(ArchiveService::class),
			$this->createMock(DocumentStore::class),
			$this->createMock(MailService::class),
			$this->createMock(CountryService::class),
			$this->createMock(IDBConnection::class),
			$this->createMock(LoggerInterface::class),
			new NumberFormatMessage($this->l10nStub()),
			$this->l10nStub(),
			$this->audit,
			$this->companyClock(),
		);
	}

	private const ITEM = ['name' => 'Beratung', 'quantity' => '1', 'unitPriceInput' => '149,00'];

	public function testSmallBusinessOverridingASentRateWarnsOnce(): void {
		$this->settings->setSmallBusiness(1);

		$result = $this->service->create('alice', ['recipientName' => 'Kunde AG', 'items' => [
			self::ITEM + ['taxRateBp' => 1900],
			self::ITEM + ['taxRateBp' => 700],
		]]);

		$this->assertSame(['TAX_RATE_OVERRIDDEN_SMALL_BUSINESS'], $result['warnings']);
	}

	public function testSmallBusinessWithoutASentRateDoesNotWarn(): void {
		$this->settings->setSmallBusiness(1);

		$result = $this->service->create('alice', ['recipientName' => 'Kunde AG', 'items' => [
			self::ITEM,
			self::ITEM + ['taxRateBp' => 0],
		]]);

		$this->assertSame([], $result['warnings']);
	}

	public function testRegularBusinessKeepsTheRateAndDoesNotWarn(): void {
		$this->settings->setSmallBusiness(0);

		$result = $this->service->create('alice', ['recipientName' => 'Kunde AG', 'items' => [self::ITEM + ['taxRateBp' => 1900]]]);

		$this->assertSame([], $result['warnings']);
	}

	public function testUpdateWarnsLikeCreate(): void {
		$this->settings->setSmallBusiness(1);
		$doc = new Invoice();
		$doc->setId(7);
		$doc->setInvoiceType(Invoice::TYPE_INVOICE);
		$doc->setStatus(Invoice::STATUS_DRAFT);
		$doc->setRecipientCountry('DE');
		$doc->setCreatedAt(new DateTime('2026-11-01'));
		$doc->setUpdatedAt(new DateTime('2026-11-01'));
		$this->current = $doc;

		$this->assertSame(
			['TAX_RATE_OVERRIDDEN_SMALL_BUSINESS'],
			$this->service->updateInvoice(7, ['items' => [self::ITEM + ['taxRateBp' => 1900]]])['warnings'],
		);
		$this->assertSame([], $this->service->updateInvoice(7, ['recipientName' => 'Neu AG'])['warnings']);
	}
}
