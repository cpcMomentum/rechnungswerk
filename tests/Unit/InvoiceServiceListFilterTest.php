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
use OCA\Rechnungswerk\Exception\ValidationException;
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
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/** Die Rechnungsliste laesst sich eingrenzen; ohne Filter bleibt sie der ganze Bestand. */
class InvoiceServiceListFilterTest extends TestCase {

	use TranslatorStub;
	use CompanyClockStub;

	private InvoiceMapper&MockObject $invoiceMapper;
	private InvoiceService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$settingsService = $this->createMock(SettingsService::class);
		$settingsService->method('getCompany')->willReturn(new Settings());

		$this->service = new InvoiceService(
			$this->invoiceMapper,
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
			$this->createMock(AuditService::class),
			$this->companyClock(),
		);
	}

	public function testWithoutFilterTheWholeStockIsRead(): void {
		$this->invoiceMapper->expects($this->once())->method('findAll')->willReturn([]);
		$this->invoiceMapper->expects($this->never())->method('findFiltered');

		$this->assertSame([], $this->service->list());
	}

	public function testEmptyUnknownAndArrayParametersAreNoFilter(): void {
		$this->invoiceMapper->expects($this->once())->method('findAll')->willReturn([]);
		$this->invoiceMapper->expects($this->never())->method('findFiltered');

		$this->service->list(['orderNumber' => null, 'status' => '', 'from' => ' ', 'colour' => 'blue', 'limit' => ['5']]);
	}

	public function testOrderNumberIsPassedOnExactly(): void {
		$this->invoiceMapper->expects($this->once())->method('findFiltered')
			->with(['orderNumber' => 'WP-2026-000123'])
			->willReturn([]);

		$this->assertSame([], $this->service->list(['orderNumber' => ' WP-2026-000123 ']));
	}

	public function testAllFiltersTogether(): void {
		$captured = null;
		$this->invoiceMapper->method('findFiltered')->willReturnCallback(function (array $filter) use (&$captured): array {
			$captured = $filter;
			return [];
		});

		$this->service->list(['status' => 'committed', 'from' => '2026-01-01', 'to' => '2026-01-31', 'limit' => '20', 'offset' => '40']);

		$this->assertSame('committed', $captured['status']);
		$this->assertSame('2026-01-01 00:00:00', $captured['from']->format('Y-m-d H:i:s'));
		$this->assertSame('2026-01-31', $captured['to']->format('Y-m-d'));
		$this->assertSame(20, $captured['limit']);
		$this->assertSame(40, $captured['offset']);
	}

	public function testLimitIsCappedAndOffsetAloneGetsTheCap(): void {
		$captured = [];
		$this->invoiceMapper->method('findFiltered')->willReturnCallback(function (array $filter) use (&$captured): array {
			$captured[] = $filter;
			return [];
		});

		$this->service->list(['limit' => '100000']);
		$this->service->list(['offset' => '10']);

		$this->assertSame(InvoiceService::LIST_LIMIT_MAX, $captured[0]['limit']);
		$this->assertSame(['offset' => 10, 'limit' => InvoiceService::LIST_LIMIT_MAX], $captured[1]);
	}

	/** @return array<string, array{array<string, string>}> */
	public static function unreadable(): array {
		return [
			'unbekannter Status' => [['status' => 'paid']],
			'Datum deutsch' => [['from' => '31.01.2026']],
			'Datum unmoeglich' => [['to' => '2026-02-30']],
			'Limit null' => [['limit' => '0']],
			'Limit Text' => [['limit' => 'viele']],
			'Offset negativ' => [['offset' => '-1']],
		];
	}

	/** @param array<string, string> $query */
	#[DataProvider('unreadable')]
	public function testUnreadableValueOfAKnownFilterIsRefused(array $query): void {
		$this->invoiceMapper->expects($this->never())->method('findFiltered');
		$this->invoiceMapper->expects($this->never())->method('findAll');

		$this->expectException(ValidationException::class);
		$this->service->list($query);
	}

	public function testCancellationOutsideTheSliceStillNamesItsOriginal(): void {
		$storno = new Invoice();
		$storno->setId(8);
		$storno->setInvoiceType(Invoice::TYPE_CANCELLATION);
		$storno->setStatus(Invoice::STATUS_COMMITTED);
		$storno->setRelatedInvoiceId(7);
		$storno->setCreatedAt(new DateTime('2026-11-01'));
		$storno->setUpdatedAt(new DateTime('2026-11-01'));
		$this->invoiceMapper->method('findFiltered')->willReturn([$storno, clone $storno]);
		$this->invoiceMapper->expects($this->once())->method('findNumbersByIds')->with([7, 7])->willReturn([7 => 'RE-2026-0007']);
		$this->invoiceMapper->expects($this->never())->method('findOne');

		$rows = $this->service->list(['orderNumber' => 'WP-1']);

		$this->assertSame('RE-2026-0007', $rows[0]['relatedNumber']);
		$this->assertSame('RE-2026-0007', $rows[1]['relatedNumber']);
	}
}
