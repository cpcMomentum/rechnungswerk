<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use RuntimeException;

final class MembershipInvoiceFileService {

	public function __construct(
		private readonly IRootFolder $rootFolder,
		private readonly InvoiceService $invoiceService,
	) {
	}

	/**
	 * Legt eine festgeschriebene Beitragsrechnung
	 * im Nextcloud-Dateibereich des Mitglieds ab.
	 *
	 * Ziel:
	 *
	 * Verein/
	 *   Beitragsrechnungen/
	 *     2026/
	 *       <Rechnungsdatei>.pdf
	 *
	 * Die Ablage ist idempotent:
	 *
	 * - gleiche Datei vorhanden -> already_stored
	 * - anderer Inhalt unter gleichem Namen -> Fehler
	 * - niemals still überschreiben
	 */
	public function store(
		int $invoiceId,
		string $userUid,
		int $year,
		bool $confirm = false,
	): array {
		$userUid = trim($userUid);

		if ($userUid === '') {
			throw new RuntimeException(
				'Keine Benutzer-ID für die Dateiablage angegeben.'
			);
		}

		if ($year < 2000 || $year > 2100) {
			throw new RuntimeException(
				sprintf(
					'Ungültiges Beitragsjahr "%d".',
					$year
				)
			);
		}

		/*
		 * Sicherheitsprüfung:
		 * nur festgeschriebene Rechnungen.
		 */
		$invoice =
			$this->invoiceService->get(
				$invoiceId
			);

		if (
			(string)($invoice['status'] ?? '')
			!== 'committed'
		) {
			throw new RuntimeException(
				sprintf(
					'Rechnung %d ist nicht festgeschrieben.',
					$invoiceId
				)
			);
		}

		/*
		 * InvoiceService liefert bei einer festgeschriebenen
		 * Rechnung den eingefrorenen Rechnungsbeleg.
		 */
		$document =
			$this->invoiceService
				->generatePdf(
					$invoiceId
				);

		$fileName = trim(
			(string)($document['filename'] ?? '')
		);

		$content =
			$document['content'] ?? null;

		if ($fileName === '') {
			throw new RuntimeException(
				sprintf(
					'Rechnung %d besitzt keinen PDF-Dateinamen.',
					$invoiceId
				)
			);
		}

		if (
			!is_string($content)
			|| $content === ''
		) {
			throw new RuntimeException(
				sprintf(
					'Rechnung %d besitzt keinen PDF-Inhalt.',
					$invoiceId
				)
			);
		}

		$folderParts = [
			'Verein',
			'Beitragsrechnungen',
			(string)$year,
		];

		$relativeFolder =
			implode('/', $folderParts);

		$relativePath =
			$relativeFolder
			. '/'
			. $fileName;

		$sha256 =
			hash(
				'sha256',
				$content
			);

		/*
		 * Trockenlauf:
		 *
		 * PDF wird geprüft und Zielpfad bestimmt,
		 * aber im Benutzerkonto noch nichts geschrieben.
		 */
		if ($confirm !== true) {
			return [
				'status' => 'ready_to_store',
				'invoiceId' => $invoiceId,
				'invoiceNumber' =>
					$invoice['number'] ?? null,
				'userUid' => $userUid,
				'path' => $relativePath,
				'fileName' => $fileName,
				'sha256' => $sha256,
			];
		}

		$userFolder =
			$this->rootFolder
				->getUserFolder(
					$userUid
				);

		$targetFolder =
			$this->ensureFolderPath(
				$userFolder,
				$folderParts
			);

		/*
		 * Datei existiert bereits.
		 *
		 * Wir überschreiben sie niemals einfach.
		 */
		if (
			$targetFolder->nodeExists(
				$fileName
			)
		) {
			$node =
				$targetFolder->get(
					$fileName
				);

			if (!$node instanceof File) {
				throw new RuntimeException(
					sprintf(
						'Im Zielpfad "%s" existiert bereits ein Ordner mit dem Rechnungsdateinamen.',
						$relativePath
					)
				);
			}

			$existingContent =
				$node->getContent();

			$existingHash =
				hash(
					'sha256',
					$existingContent
				);

			/*
			 * Gleicher Inhalt:
			 * Der vorherige Lauf war bereits erfolgreich.
			 */
			if (
				hash_equals(
					$sha256,
					$existingHash
				)
			) {
				return [
					'status' => 'already_stored',
					'invoiceId' => $invoiceId,
					'invoiceNumber' =>
						$invoice['number'] ?? null,
					'userUid' => $userUid,
					'path' => $relativePath,
					'fileName' => $fileName,
					'fileId' => $node->getId(),
					'sha256' => $sha256,
				];
			}

			/*
			 * Gleicher Name, aber anderer Inhalt:
			 * niemals überschreiben.
			 */
			throw new RuntimeException(
				sprintf(
					'Dateikonflikt bei "%s": Eine Datei mit gleichem Namen, aber anderem Inhalt existiert bereits.',
					$relativePath
				)
			);
		}

		$file =
			$targetFolder->newFile(
				$fileName,
				$content
			);

		return [
			'status' => 'stored',
			'invoiceId' => $invoiceId,
			'invoiceNumber' =>
				$invoice['number'] ?? null,
			'userUid' => $userUid,
			'path' => $relativePath,
			'fileName' => $fileName,
			'fileId' => $file->getId(),
			'sha256' => $sha256,
		];
	}

	/**
	 * Erstellt einen Ordnerpfad schrittweise.
	 *
	 * Bereits vorhandene Ordner werden wiederverwendet.
	 */
	private function ensureFolderPath(
		Folder $root,
		array $parts,
	): Folder {
		$current = $root;

		foreach ($parts as $part) {
			$part = trim((string)$part);

			if (
				$part === ''
				|| $part === '.'
				|| $part === '..'
				|| str_contains($part, '/')
				|| str_contains($part, '\\')
			) {
				throw new RuntimeException(
					sprintf(
						'Ungültiger Ordnername "%s".',
						$part
					)
				);
			}

			if ($current->nodeExists($part)) {
				$node = $current->get($part);

				if (!$node instanceof Folder) {
					throw new RuntimeException(
						sprintf(
							'"%s" existiert bereits, ist aber kein Ordner.',
							$part
						)
					);
				}

				$current = $node;
				continue;
			}

			$current =
				$current->newFolder(
					$part
				);
		}

		return $current;
	}
}