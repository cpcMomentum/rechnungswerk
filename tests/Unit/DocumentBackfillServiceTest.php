<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Service\DocumentBackfillService;
use OCA\Rechnungswerk\Service\InvoiceService;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * #181, Schritt 3: den Bestand nachziehen.
 *
 * Die beiden Eigenschaften, auf die es ankommt: der Lauf kennzeichnet jeden
 * nachgezogenen Beleg als solchen, und eine einzelne Rechnung, die sich nicht
 * erzeugen lässt, beendet den Lauf nicht. Ohne die zweite blockierte eine
 * kaputte Rechnung den gesamten restlichen Bestand.
 */
class DocumentBackfillServiceTest extends TestCase {

	private InvoiceMapper $invoiceMapper;
	private InvoiceService $invoiceService;
	private DocumentBackfillService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->invoiceMapper = $this->createMock(InvoiceMapper::class);
		$this->invoiceService = $this->createMock(InvoiceService::class);
		$this->service = new DocumentBackfillService(
			$this->invoiceMapper,
			$this->invoiceService,
			$this->createMock(LoggerInterface::class),
		);
	}

	private function committed(int $id): Invoice {
		$invoice = new Invoice();
		$invoice->setId($id);
		$invoice->setNumber('RE-2026-000' . $id);
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setStatus(Invoice::STATUS_COMMITTED);
		$invoice->setCommittedAt(new DateTime('2026-07-01'));
		return $invoice;
	}

	/** Ist der Bestand durch, kostet der Lauf nur die Abfrage. */
	public function testNothingPendingDoesNothing(): void {
		$this->invoiceMapper->method('findWithoutFrozenDocument')->willReturn([]);
		$this->invoiceService->expects($this->never())->method('freezeDocument');

		$this->assertSame(['pending' => 0, 'frozen' => 0, 'failed' => 0], $this->service->run());
	}

	/**
	 * Jeder nachgezogene Beleg wird als nachgezogen gekennzeichnet. Das ist keine
	 * Kosmetik: inhaltlich stimmt er, im Aussehen ist er der heutige Stand und
	 * nicht das, was der Kunde damals bekommen hat.
	 */
	public function testEveryDocumentIsFrozenAndMarkedAsBackfilled(): void {
		$invoices = [$this->committed(1), $this->committed(2), $this->committed(3)];
		$this->invoiceMapper->method('findWithoutFrozenDocument')->willReturn($invoices);
		$this->invoiceMapper->method('countWithoutFrozenDocument')->willReturn(0);

		$seen = [];
		$this->invoiceService->expects($this->exactly(3))
			->method('freezeDocument')
			->willReturnCallback(function (Invoice $invoice, bool $backfilled) use (&$seen): bool {
				$this->assertTrue($backfilled, 'Der Nachzieh-Lauf muss den Beleg als nachgezogen kennzeichnen');
				$seen[] = (int)$invoice->getId();
				return true;
			});

		$this->assertSame(['pending' => 3, 'frozen' => 3, 'failed' => 0], $this->service->run());
		$this->assertSame([1, 2, 3], $seen);
	}

	/**
	 * Eine Rechnung, die sich nicht erzeugen lässt (unlesbares Logo, fehlende
	 * Firmendaten), darf den Rest des Häppchens nicht mitnehmen. Sie wird beim
	 * nächsten Lauf wieder aufgegriffen, weil document_frozen_at leer bleibt.
	 */
	public function testOneFailureDoesNotStopTheRest(): void {
		$this->invoiceMapper->method('findWithoutFrozenDocument')
			->willReturn([$this->committed(1), $this->committed(2), $this->committed(3)]);
		$this->invoiceMapper->method('countWithoutFrozenDocument')->willReturn(1);

		$this->invoiceService->method('freezeDocument')
			->willReturnCallback(static fn (Invoice $invoice): bool => (int)$invoice->getId() !== 2);

		$this->assertSame(['pending' => 3, 'frozen' => 2, 'failed' => 1], $this->service->run());
	}

	/** Häppchenweise: der Lauf holt nie mehr als die vorgegebene Menge. */
	public function testTheBatchSizeIsPassedToTheQuery(): void {
		$this->invoiceMapper->expects($this->once())
			->method('findWithoutFrozenDocument')
			->with(DocumentBackfillService::BATCH_SIZE)
			->willReturn([]);

		$this->service->run();
	}
}
