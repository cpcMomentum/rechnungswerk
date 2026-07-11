<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\Settings;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use Psr\Log\LoggerInterface;

/**
 * Convenience filing of committed invoices into a Nextcloud folder (#38).
 *
 * The target folder is picked by the app admin and stored by FILE ID (like
 * the company logo), so it is resolved globally via IRootFolder::getById()
 * — independent of any user context and thus working for team/group folders.
 *
 * This is a comfort copy, NOT a GoBD/WORM archive: files are as mutable as
 * anything else in Nextcloud. The audit-proof archive stays with DATEV.
 */
class ArchiveService {

	/** Placeholders accepted in the archive subfolder pattern. */
	public const SUBFOLDER_PLACEHOLDERS = ['{YYYY}', '{MM}', '{DD}'];

	public function __construct(
		private readonly IRootFolder $rootFolder,
		private readonly ZugferdService $zugferdService,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * File the committed invoice's ZUGFeRD-PDF into the configured folder.
	 * Fire-and-forget like the DATEV hand-off: the invoice is already legally
	 * committed, so a filing failure is logged but never bubbles up.
	 *
	 * @param InvoiceItem[] $items
	 * @return bool|null true = filed, false = skipped (disabled/no folder),
	 *                   null = attempted but failed
	 */
	public function maybeArchive(Invoice $invoice, array $items, Settings $settings, ?string $relatedNumber = null, ?\DateTimeInterface $relatedIssueDate = null): ?bool {
		if ($settings->getArchiveEnabled() !== 1 || $settings->getArchiveFolderId() === null) {
			return false;
		}
		try {
			$target = $this->resolveTargetFolder($settings, $invoice);
			$pdf = $this->zugferdService->generatePdf($invoice, $items, $settings, $relatedNumber, $relatedIssueDate);
			$name = $this->uniqueName($target, InvoiceCalculator::buildPdfFileName($invoice, $settings));
			$target->newFile($name, $pdf);
			return true;
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: Ablage in Nextcloud fehlgeschlagen', [
				'exception' => $e,
				'invoice' => $invoice->getId(),
				'folderId' => $settings->getArchiveFolderId(),
			]);
			return null;
		}
	}

	/**
	 * Resolve the configured folder and descend into the rendered subfolder
	 * segments (created on demand).
	 */
	private function resolveTargetFolder(Settings $settings, Invoice $invoice): Folder {
		$node = $this->rootFolder->getById((int)$settings->getArchiveFolderId())[0] ?? null;
		if (!$node instanceof Folder) {
			throw new \RuntimeException('Ablage-Ordner nicht gefunden (id ' . $settings->getArchiveFolderId() . ').');
		}
		foreach (self::renderSubfolderSegments((string)$settings->getArchiveSubfolder(), $invoice) as $segment) {
			$node = $node->nodeExists($segment) ? $node->get($segment) : $node->newFolder($segment);
			if (!$node instanceof Folder) {
				throw new \RuntimeException('Ablage-Unterordner "' . $segment . '" ist keine Ordner-Datei.');
			}
		}
		return $node;
	}

	/**
	 * Render the subfolder pattern ('{YYYY}/…') into sanitized path segments.
	 * Pure so it can be unit-tested without a filesystem.
	 *
	 * @return list<string>
	 */
	public static function renderSubfolderSegments(string $pattern, Invoice $invoice): array {
		$pattern = trim($pattern);
		if ($pattern === '') {
			return [];
		}
		$date = $invoice->getIssueDate() ?? $invoice->getCommittedAt() ?? new \DateTimeImmutable();
		$rendered = strtr($pattern, [
			'{YYYY}' => $date->format('Y'),
			'{MM}' => $date->format('m'),
			'{DD}' => $date->format('d'),
		]);
		$segments = [];
		foreach (explode('/', $rendered) as $part) {
			$part = InvoiceCalculator::sanitizeFileName($part);
			if ($part !== '' && $part !== '..') {
				$segments[] = $part;
			}
		}
		return $segments;
	}

	/**
	 * Never overwrite silently: with unique invoice numbers a collision only
	 * happens on a re-run, and then both files are kept ('name.pdf',
	 * 'name-2.pdf', …).
	 */
	private function uniqueName(Folder $folder, string $fileName): string {
		if (!$folder->nodeExists($fileName)) {
			return $fileName;
		}
		$base = preg_replace('/\.pdf$/', '', $fileName);
		for ($i = 2; $i <= 100; $i++) {
			$candidate = $base . '-' . $i . '.pdf';
			if (!$folder->nodeExists($candidate)) {
				return $candidate;
			}
		}
		throw new \RuntimeException('Kein freier Dateiname für "' . $fileName . '" gefunden.');
	}
}
