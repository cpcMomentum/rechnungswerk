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
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
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

/** Ein API-Schlüssel löscht nur Entwürfe, die er selbst angelegt hat. */
class InvoiceServiceApiKeyDeleteTest extends TestCase {

	use TranslatorStub;
	use CompanyClockStub;

	private InvoiceMapper&MockObject $invoiceMapper;
	private AuditService&MockObject $audit;
	private InvoiceService $service;
	private ?Invoice $current = null;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->audit = $this->createMock(AuditService::class);
		$settingsService = $this->createMock(SettingsService::class);
		$settings = new Settings();
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

	private function draft(?int $apiKeyId, string $status = Invoice::STATUS_DRAFT): Invoice {
		$doc = new Invoice();
		$doc->setId(7);
		$doc->setInvoiceType(Invoice::TYPE_INVOICE);
		$doc->setStatus($status);
		$doc->setApiKeyId($apiKeyId);
		$doc->setRecipientName('Kunde AG');
		$doc->setRecipientCountry('DE');
		$doc->setCreatedAt(new DateTime('2026-11-01'));
		$doc->setUpdatedAt(new DateTime('2026-11-01'));
		$this->current = $doc;
		return $doc;
	}

	public function testCreateByKeyRemembersTheKey(): void {
		$inserted = null;
		$this->invoiceMapper->expects($this->once())->method('insert')->willReturnCallback(function (Invoice $i) use (&$inserted): Invoice {
			$i->setId(99);
			$inserted = $i;
			return $i;
		});

		$this->service->create('alice', ['recipientName' => 'Kunde AG', 'items' => []], 3);

		$this->assertSame(3, $inserted?->getApiKeyId());
	}

	public function testKeyDeletesItsOwnDraft(): void {
		$this->draft(3);
		$this->invoiceMapper->expects($this->once())->method('delete');
		$this->audit->expects($this->once())->method('record')->with(AuditEntry::DELETE, $this->anything());

		$this->service->deleteInvoice(7, 3);
	}

	public function testKeyCannotDeleteADraftOfAnotherKey(): void {
		$this->draft(4);
		$this->invoiceMapper->expects($this->never())->method('delete');
		$this->expectException(NotFoundException::class);

		$this->service->deleteInvoice(7, 3);
	}

	public function testKeyCannotDeleteADraftCreatedInTheUi(): void {
		$this->draft(null);
		$this->invoiceMapper->expects($this->never())->method('delete');
		$this->expectException(NotFoundException::class);

		$this->service->deleteInvoice(7, 3);
	}

	public function testKeyCannotDeleteADraftEditedInTheUi(): void {
		$this->draft(3);
		$this->service->updateInvoice(7, ['recipientName' => 'Neu AG']);
		$this->assertNull($this->current?->getApiKeyId());

		$this->invoiceMapper->expects($this->never())->method('delete');
		$this->expectException(NotFoundException::class);
		$this->service->deleteInvoice(7, 3);
	}

	public function testKeyCannotDeleteACommittedInvoiceItCreated(): void {
		$this->draft(3, Invoice::STATUS_COMMITTED);
		$this->invoiceMapper->expects($this->never())->method('delete');
		$this->expectException(IllegalStateException::class);

		$this->service->deleteInvoice(7, 3);
	}

	public function testForeignCommittedInvoiceLooksMissingToAKey(): void {
		$this->draft(null, Invoice::STATUS_COMMITTED);
		$this->expectException(NotFoundException::class);

		$this->service->deleteInvoice(7, 3);
	}

	public function testOwnershipIsCheckedUnderTheRowLock(): void {
		$own = $this->draft(3);
		$edited = clone $own;
		$edited->setApiKeyId(null);
		$service = $this->serviceWithLockedRow($own, $edited);

		$this->expectException(NotFoundException::class);
		$service->deleteInvoice(7, 3);
	}

	public function testSessionDeletesAnyDraft(): void {
		$this->draft(null);
		$this->invoiceMapper->expects($this->once())->method('delete');

		$this->service->deleteInvoice(7);
	}

	private function serviceWithLockedRow(Invoice $beforeLock, Invoice $underLock): InvoiceService {
		$mapper = $this->createMock(InvoiceMapper::class);
		$mapper->method('findOne')->willReturn($beforeLock);
		$mapper->method('findOneForUpdate')->willReturn($underLock);
		$mapper->expects($this->never())->method('delete');
		$settingsService = $this->createMock(SettingsService::class);
		$settingsService->method('getCompany')->willReturn(new Settings());
		return new InvoiceService(
			$mapper,
			$this->createMock(InvoiceItemMapper::class),
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
}
