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
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\DB\Exception as DbException;
use OCP\IDBConnection;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/** Derselbe Idempotenzschluessel legt nur eine Rechnung an. */
class InvoiceServiceIdempotencyTest extends TestCase {

	use TranslatorStub;
	use CompanyClockStub;

	private InvoiceMapper&MockObject $invoiceMapper;
	private AuditService&MockObject $audit;
	private InvoiceService $service;
	private ?Invoice $current = null;
	private Settings $settings;
	/** @var array<int|string, Invoice> */
	private array $stored = [];
	private ?\Throwable $failInsertWith = null;

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
			if ($this->failInsertWith !== null) {
				$e = $this->failInsertWith;
				$this->failInsertWith = null;
				$this->stored['race'] = $this->raceWinner($i->getIdempotencyKey());
				throw $e;
			}
			$i->setId(100 + count($this->stored));
			$this->stored[] = $i;
			return $i;
		});
		$this->invoiceMapper->method('findByIdempotencyKey')->willReturnCallback(function (string $hash): ?Invoice {
			foreach ($this->stored as $i) {
				if ($i->getIdempotencyKey() === $hash) {
					return $i;
				}
			}
			return null;
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

	private const DATA = ['recipientName' => 'Kunde AG', 'orderNumber' => 'WP-1', 'items' => [['name' => 'Beratung', 'quantity' => '1', 'unitPriceInput' => '149,00']]];

	private function raceWinner(?string $hash): Invoice {
		$winner = new Invoice();
		$winner->setId(999);
		$winner->setInvoiceType(Invoice::TYPE_INVOICE);
		$winner->setStatus(Invoice::STATUS_DRAFT);
		$winner->setIdempotencyKey($hash);
		$winner->setCreatedAt(new DateTime('2026-11-01'));
		$winner->setUpdatedAt(new DateTime('2026-11-01'));
		return $winner;
	}

	public function testLostAnswerRepeatedWithTheSameKeyYieldsTheSameInvoice(): void {
		$first = $this->service->create('alice', self::DATA, 3, 'bestellung-4711');
		$second = $this->service->create('alice', self::DATA, 3, 'bestellung-4711');

		$this->assertSame($first['id'], $second['id']);
		$this->assertCount(1, $this->stored);
		$this->assertSame([], $second['warnings']);
	}

	public function testWithoutAKeyEveryCallCreatesAnInvoice(): void {
		$first = $this->service->create('alice', self::DATA, 3);
		$second = $this->service->create('alice', self::DATA, 3, '  ');

		$this->assertNotSame($first['id'], $second['id']);
		$this->assertNull($this->stored[0]->getIdempotencyKey());
		$this->assertNull($this->stored[1]->getIdempotencyKey());
	}

	public function testDifferentKeysCreateDifferentInvoices(): void {
		$first = $this->service->create('alice', self::DATA, 3, 'a');
		$second = $this->service->create('alice', self::DATA, 3, 'b');

		$this->assertNotSame($first['id'], $second['id']);
	}

	public function testTheSameKeyOfAnotherClientDoesNotHitAForeignInvoice(): void {
		$byKey3 = $this->service->create('alice', self::DATA, 3, 'gleich');
		$byKey4 = $this->service->create('alice', self::DATA, 4, 'gleich');
		$bySession = $this->service->create('alice', self::DATA, null, 'gleich');
		$byOtherUser = $this->service->create('bob', self::DATA, null, 'gleich');

		$this->assertCount(4, array_unique([$byKey3['id'], $byKey4['id'], $bySession['id'], $byOtherUser['id']]));
	}

	public function testTheKeyIsStoredHashedNotInTheClear(): void {
		$this->service->create('alice', self::DATA, 3, 'bestellung-4711');

		$stored = (string)$this->stored[0]->getIdempotencyKey();
		$this->assertMatchesRegularExpression('/^[0-9a-f]{64}$/', $stored);
		$this->assertStringNotContainsString('4711', $stored);
	}

	public function testAnOverlongKeyIsRefusedBeforeAnythingIsStored(): void {
		$this->expectException(ValidationException::class);
		try {
			$this->service->create('alice', self::DATA, 3, str_repeat('x', 256));
		} finally {
			$this->assertSame([], $this->stored);
		}
	}

	public function testRepeatWithAnUnreadablePriceIsStillRefused(): void {
		$this->service->create('alice', self::DATA, 3, 'k');

		$this->expectException(ValidationException::class);
		$this->service->create('alice', ['items' => [['name' => 'x', 'unitPriceInput' => '149.00']]] + self::DATA, 3, 'k');
	}

	public function testConcurrentCallLosingAtTheUniqueIndexReturnsTheWinner(): void {
		$violation = $this->createMock(DbException::class);
		$violation->method('getReason')->willReturn(DbException::REASON_UNIQUE_CONSTRAINT_VIOLATION);
		$this->failInsertWith = $violation;

		$result = $this->service->create('alice', self::DATA, 3, 'gleichzeitig');

		$this->assertSame(999, $result['id']);
	}

	public function testAnotherDatabaseErrorIsNotSwallowed(): void {
		$other = $this->createMock(DbException::class);
		$other->method('getReason')->willReturn(DbException::REASON_CONNECTION_LOST);
		$this->failInsertWith = $other;

		$this->expectException(DbException::class);
		$this->service->create('alice', self::DATA, 3, 'kaputt');
	}
}
