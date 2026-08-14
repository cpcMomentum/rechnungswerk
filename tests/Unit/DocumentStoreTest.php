<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Service\DocumentStore;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException as FilesNotFoundException;
use OCP\Files\SimpleFS\ISimpleFile;
use OCP\Files\SimpleFS\ISimpleFolder;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * #181, Schritt 2: der eingefrorene Beleg.
 *
 * Geprüft wird vor allem die Nur-einmal-Regel. Ohne sie wäre
 * „unveränderlich" eine Behauptung: ein Programmierfehler könnte den Beleg
 * später stillschweigend ersetzen, und genau das soll ausgeschlossen sein.
 */
class DocumentStoreTest extends TestCase {

	use TranslatorStub;

	private IAppData $appData;
	private ISimpleFolder $folder;
	private LoggerInterface $logger;
	private DocumentStore $store;

	protected function setUp(): void {
		parent::setUp();
		$this->folder = $this->createMock(ISimpleFolder::class);
		$this->appData = $this->createMock(IAppData::class);
		$this->appData->method('getFolder')->willReturn($this->folder);
		$this->logger = $this->createMock(LoggerInterface::class);
		$this->store = new DocumentStore($this->appData, $this->logger, $this->l10nStub());
	}

	private function invoice(int $id = 7, ?string $sha = null): Invoice {
		$invoice = new Invoice();
		$invoice->setId($id);
		$invoice->setNumber('RE-2026-0007');
		$invoice->setCommittedAt(new DateTime('2026-08-08'));
		if ($sha !== null) {
			$invoice->setDocumentSha256($sha);
		}
		return $invoice;
	}

	public function testFreezeStoresTheDocumentAndReturnsItsChecksum(): void {
		$pdf = '%PDF-1.7 Beispielbeleg';
		$this->folder->method('fileExists')->willReturn(false);
		$this->folder->expects($this->once())
			->method('newFile')
			->with('7.pdf', $pdf);

		$this->assertSame(hash('sha256', $pdf), $this->store->freeze($this->invoice(), $pdf));
	}

	/**
	 * Der Kern: ein bereits abgelegter Beleg wird NIE überschrieben.
	 */
	public function testFreezeRefusesToOverwriteAnExistingDocument(): void {
		$this->folder->method('fileExists')->willReturn(true);
		$this->folder->expects($this->never())->method('newFile');

		$this->expectException(IllegalStateException::class);
		$this->expectExceptionMessage('RE-2026-0007');
		$this->store->freeze($this->invoice(), '%PDF neu');
	}

	public function testReadReturnsNullWhenNothingIsStored(): void {
		$this->folder->method('fileExists')->willReturn(false);

		$this->assertNull($this->store->read($this->invoice()));
	}

	public function testReadReturnsTheStoredDocument(): void {
		$pdf = '%PDF-1.7 Beispielbeleg';
		$file = $this->createMock(ISimpleFile::class);
		$file->method('getContent')->willReturn($pdf);
		$this->folder->method('fileExists')->willReturn(true);
		$this->folder->method('getFile')->willReturn($file);

		$this->assertSame($pdf, $this->store->read($this->invoice(7, hash('sha256', $pdf))));
	}

	/**
	 * Bei abweichender Prüfsumme wird protokolliert, der abgelegte Inhalt aber
	 * geliefert: er ist das, was existiert. Still auf Neuerzeugung auszuweichen
	 * wäre schlechter — dann merkt niemand, dass die Ablage angetastet wurde.
	 */
	public function testReadReportsAChecksumMismatchButStillReturnsTheDocument(): void {
		$pdf = '%PDF nachtraeglich veraendert';
		$file = $this->createMock(ISimpleFile::class);
		$file->method('getContent')->willReturn($pdf);
		$this->folder->method('fileExists')->willReturn(true);
		$this->folder->method('getFile')->willReturn($file);
		$this->logger->expects($this->once())->method('error');

		$this->assertSame($pdf, $this->store->read($this->invoice(7, hash('sha256', 'etwas anderes'))));
	}

	public function testReadSurvivesAnUnreadableStore(): void {
		$folder = $this->createMock(ISimpleFolder::class);
		$folder->method('fileExists')->willThrowException(new FilesNotFoundException('weg'));
		$appData = $this->createMock(IAppData::class);
		$appData->method('getFolder')->willReturn($folder);
		$this->logger->expects($this->once())->method('warning');

		$store = new DocumentStore($appData, $this->logger, $this->l10nStub());

		$this->assertNull($store->read($this->invoice()), 'Rückfall auf Neuerzeugung statt Absturz');
	}

	public function testHasIsFalseWhenTheStoreIsUnavailable(): void {
		$appData = $this->createMock(IAppData::class);
		$appData->method('getFolder')->willThrowException(new FilesNotFoundException('weg'));
		$appData->method('newFolder')->willThrowException(new FilesNotFoundException('weg'));

		$store = new DocumentStore($appData, $this->createMock(LoggerInterface::class), $this->l10nStub());

		$this->assertFalse($store->has($this->invoice()));
	}
}
