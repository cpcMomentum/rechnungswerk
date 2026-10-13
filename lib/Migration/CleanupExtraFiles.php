<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use OCP\App\AppPathNotFoundException;
use OCP\App\IAppManager;
use OCP\Migration\IOutput;
use OCP\Migration\IRepairStep;

/**
 * Raeumt Dateien weg, die eine Vorversion mitgeliefert hat und die aktuelle
 * nicht mehr.
 *
 * Nextclouds Update kopiert die neue Version ueber die alte und loescht dabei
 * nichts. Liefert eine Abhaengigkeit ploetzlich weniger Dateien aus, bleiben
 * die alten liegen, und die Integritaetspruefung meldet sie als EXTRA_FILE.
 *
 * Abgeglichen wird gegen signature.json, nicht gegen eine gepflegte Liste:
 * die Signatur ist die verbindliche Aussage darueber, was zur Auslieferung
 * gehoert.
 *
 * Angetastet werden ausschliesslich vendor/ und js/ — beides reiner Build-
 * bzw. Composer-Output. Alles andere bleibt unberuehrt.
 *
 * Besonderheit bei js/:
 *
 * Seit der Umstellung auf ES-Module besteht das Frontend aus einem stabil
 * benannten Einstiegspunkt (js/rechnungswerk-main.mjs) und Chunks mit
 * Inhalts-Hashes im Dateinamen.
 *
 * Bei lokalen Deploys oder PR-Builds kann deshalb dieselbe signature.json wie
 * im letzten signierten Release vorhanden sein, waehrend rechnungswerk-main.mjs
 * bereits aus einem neuen Build stammt und andere Chunks importiert.
 *
 * Nur das Vorhandensein des Einstiegspunkts in signature.json reicht daher
 * NICHT aus, um anzunehmen, dass die Signatur zum aktuellen Build gehoert.
 *
 * Bevor js/ bereinigt wird, muss der SHA-512-Hash des aktuell installierten
 * Einstiegspunkts exakt mit dem Hash aus signature.json uebereinstimmen.
 * Andernfalls wird js/ vollstaendig unangetastet gelassen.
 */
class CleanupExtraFiles implements IRepairStep {

	private const MIN_SIGNED = 500;

	private const MANAGED_DIRS = ['vendor', 'js'];

	private const ENTRY_FILE = 'js/rechnungswerk-main.mjs';

	public function __construct(
		private readonly IAppManager $appManager,
	) {
	}

	public function getName(): string {
		return 'Dateien aus Vorversionen entfernen (Integritaet)';
	}

	public function run(IOutput $output): void {
		try {
			$appPath = $this->appManager->getAppPath('rechnungswerk');
		} catch (AppPathNotFoundException) {
			return;
		}

		$signed = $this->signedFiles($appPath);
		if ($signed === null) {
			return;
		}

		$removed = 0;

		foreach (self::MANAGED_DIRS as $dir) {
			if ($dir === 'js' && !$this->signatureMatchesCurrentJsBuild($appPath, $signed)) {
				$output->info(
					'Rechnungswerk: signature.json passt nicht zu diesem Build, js/ wird nicht aufgeraeumt'
				);
				continue;
			}

			$removed += $this->cleanDir(
				$appPath,
				$appPath . '/' . $dir,
				$signed,
			);
		}

		if ($removed > 0) {
			$output->info(
				'Rechnungswerk: ' . $removed . ' Datei(en) aus einer Vorversion entfernt'
			);
		}
	}

	/**
	 * @param array<string, string> $signed
	 */
	private function signatureMatchesCurrentJsBuild(
		string $appPath,
		array $signed,
	): bool {
		$expectedHash = $signed[self::ENTRY_FILE] ?? null;
		if (!is_string($expectedHash) || $expectedHash === '') {
			return false;
		}

		$entryPath = $appPath . '/' . self::ENTRY_FILE;
		if (!is_file($entryPath)) {
			return false;
		}

		$actualHash = @hash_file('sha512', $entryPath);
		if (!is_string($actualHash) || $actualHash === '') {
			return false;
		}

		return hash_equals(
			strtolower($expectedHash),
			strtolower($actualHash),
		);
	}

	/**
	 * @param array<string, string> $signed
	 *
	 * @return int Zahl der entfernten Dateien
	 */
	private function cleanDir(
		string $appPath,
		string $path,
		array $signed,
	): int {
		if (!is_dir($path)) {
			return 0;
		}

		$removed = 0;

		$iterator = new \RecursiveIteratorIterator(
			new \RecursiveDirectoryIterator(
				$path,
				\FilesystemIterator::SKIP_DOTS,
			),
			\RecursiveIteratorIterator::CHILD_FIRST,
		);

		foreach ($iterator as $item) {
			/** @var \SplFileInfo $item */
			$absolute = $item->getPathname();

			$relative = substr(
				$absolute,
				strlen($appPath) + 1,
			);

			/*
			 * signature.json verwendet unabhaengig vom Betriebssystem immer
			 * Slash-Pfade. RecursiveDirectoryIterator liefert unter Windows
			 * dagegen Backslashes. Vor dem Vergleich deshalb normalisieren.
			 */
			$relative = str_replace('\\', '/', $relative);

			if ($item->isDir()) {
				if ($this->isEmptyDir($absolute)) {
					@rmdir($absolute);
				}
				continue;
			}

			if (isset($signed[$relative])) {
				continue;
			}

			if (@unlink($absolute)) {
				$removed++;
			}
		}

		return $removed;
	}

	/**
	 * @return array<string, string>|null
	 */
	private function signedFiles(string $appPath): ?array {
		$path = $appPath . '/appinfo/signature.json';

		if (!is_file($path)) {
			return null;
		}

		$raw = @file_get_contents($path);
		if ($raw === false) {
			return null;
		}

		$decoded = json_decode($raw, true);
		if (!is_array($decoded)) {
			return null;
		}

		$hashes = $decoded['hashes'] ?? null;
		if (!is_array($hashes) || count($hashes) < self::MIN_SIGNED) {
			return null;
		}

		$result = [];

		foreach ($hashes as $file => $hash) {
			if (!is_string($file) || !is_string($hash)) {
				continue;
			}

			$result[str_replace('\\', '/', $file)] = $hash;
		}

		if (count($result) < self::MIN_SIGNED) {
			return null;
		}

		return $result;
	}

	private function isEmptyDir(string $path): bool {
		$entries = @scandir($path);

		return is_array($entries) && count($entries) === 2;
	}
}
