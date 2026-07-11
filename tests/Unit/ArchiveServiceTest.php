<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\ArchiveService;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class ArchiveServiceTest extends TestCase {

	private ArchiveService $service;
	private IRootFolder&MockObject $rootFolder;
	private ZugferdService&MockObject $zugferd;

	protected function setUp(): void {
		parent::setUp();
		$this->rootFolder = $this->createMock(IRootFolder::class);
		$this->zugferd = $this->createMock(ZugferdService::class);
		$this->service = new ArchiveService(
			$this->rootFolder,
			$this->zugferd,
			$this->createMock(LoggerInterface::class),
		);
	}

	private function invoice(): Invoice {
		$invoice = new Invoice();
		$invoice->setId(7);
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setStatus(Invoice::STATUS_COMMITTED);
		$invoice->setNumber('RE-2026-0007');
		$invoice->setIssueDate(new DateTime('2026-07-11'));
		$invoice->setRecipientName('Kunde AG');
		return $invoice;
	}

	private function settings(int $enabled = 1, ?int $folderId = 99, ?string $subfolder = null): Settings {
		$settings = new Settings();
		$settings->setArchiveEnabled($enabled);
		$settings->setArchiveFolderId($folderId);
		$settings->setArchiveSubfolder($subfolder);
		$settings->setFileNameFormat('{nummer}');
		return $settings;
	}

	public function testSkipsWhenDisabled(): void {
		$this->rootFolder->expects($this->never())->method('getById');
		$this->assertFalse($this->service->maybeArchive($this->invoice(), [], $this->settings(enabled: 0)));
	}

	public function testSkipsWithoutTargetFolder(): void {
		$this->rootFolder->expects($this->never())->method('getById');
		$this->assertFalse($this->service->maybeArchive($this->invoice(), [], $this->settings(folderId: null)));
	}

	public function testArchivesPdfIntoResolvedFolder(): void {
		$folder = $this->createMock(Folder::class);
		$this->rootFolder->method('getById')->with(99)->willReturn([$folder]);
		$this->zugferd->method('generatePdf')->willReturn('%PDF-fake');
		$folder->method('nodeExists')->willReturn(false);
		$folder->expects($this->once())->method('newFile')
			->with('RE-2026-0007.pdf', '%PDF-fake');

		$this->assertTrue($this->service->maybeArchive($this->invoice(), [], $this->settings()));
	}

	public function testCollisionGetsSuffixInsteadOfOverwrite(): void {
		$folder = $this->createMock(Folder::class);
		$this->rootFolder->method('getById')->willReturn([$folder]);
		$this->zugferd->method('generatePdf')->willReturn('%PDF-fake');
		$folder->method('nodeExists')->willReturnCallback(
			static fn (string $name): bool => $name === 'RE-2026-0007.pdf',
		);
		$folder->expects($this->once())->method('newFile')
			->with('RE-2026-0007-2.pdf', '%PDF-fake');

		$this->assertTrue($this->service->maybeArchive($this->invoice(), [], $this->settings()));
	}

	public function testDescendsIntoSubfolderCreatedOnDemand(): void {
		$target = $this->createMock(Folder::class);
		$target->method('nodeExists')->willReturn(false);
		$target->expects($this->once())->method('newFile')->with('RE-2026-0007.pdf', '%PDF-fake');

		$root = $this->createMock(Folder::class);
		$root->method('nodeExists')->with('2026')->willReturn(false);
		$root->expects($this->once())->method('newFolder')->with('2026')->willReturn($target);

		$this->rootFolder->method('getById')->willReturn([$root]);
		$this->zugferd->method('generatePdf')->willReturn('%PDF-fake');

		$this->assertTrue($this->service->maybeArchive($this->invoice(), [], $this->settings(subfolder: '{YYYY}')));
	}

	public function testReturnsNullWhenFolderIsGone(): void {
		$this->rootFolder->method('getById')->willReturn([]);
		$this->assertNull($this->service->maybeArchive($this->invoice(), [], $this->settings()));
	}

	// --- renderSubfolderSegments (pure) -----------------------------------

	public function testRenderSubfolderSegmentsRendersDatePlaceholders(): void {
		$this->assertSame(
			['2026', '07'],
			ArchiveService::renderSubfolderSegments('{YYYY}/{MM}', $this->invoice()),
		);
	}

	public function testRenderSubfolderSegmentsEmptyPatternMeansNoDescent(): void {
		$this->assertSame([], ArchiveService::renderSubfolderSegments('', $this->invoice()));
		$this->assertSame([], ArchiveService::renderSubfolderSegments('   ', $this->invoice()));
	}

	public function testRenderSubfolderSegmentsSanitizesAndDropsTraversal(): void {
		$this->assertSame(
			['evil', '2026'],
			ArchiveService::renderSubfolderSegments('../evil/{YYYY}', $this->invoice()),
		);
	}
}
