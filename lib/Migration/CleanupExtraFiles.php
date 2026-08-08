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
 * Gemessen beim Sprung 0.3.1 -> 0.4.0: horstoeko/zugferd 1.0.124 liefert seine
 * eigenen tests/, make/ und build/-Verzeichnisse nicht mehr mit (154 Dateien
 * weniger). Ohne diesen Schritt saehe jede Instanz, die aktualisiert, einen
 * Integritaetsfehler — bei einer Rechnungs-App die unangenehmste Meldung
 * ueberhaupt, obwohl kein einziger Laufzeit-Bestandteil fehlt.
 *
 * Abgeglichen wird gegen signature.json, nicht gegen eine gepflegte Liste: die
 * Signatur ist die verbindliche Aussage darueber, was zur Auslieferung gehoert,
 * und sie veraltet nicht. Angetastet wird ausschliesslich vendor/ — dort liegt
 * reiner Composer-Output, der exakt der Signatur entsprechen muss. Alles
 * andere bleibt unberuehrt, auch wenn es unsigniert ist.
 */
class CleanupExtraFiles implements IRepairStep {

	/**
	 * Untergrenze als Sicherung: eine unvollstaendig gelesene oder leere
	 * Signatur duerfte nie dazu fuehren, dass vendor/ ausgeraeumt wird. Das
	 * Release traegt gut 2.700 Eintraege.
	 */
	private const MIN_SIGNED = 500;

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

		$vendorPath = $appPath . '/vendor';
		if (!is_dir($vendorPath)) {
			return;
		}

		$removed = 0;
		$iterator = new \RecursiveIteratorIterator(
			new \RecursiveDirectoryIterator($vendorPath, \FilesystemIterator::SKIP_DOTS),
			\RecursiveIteratorIterator::CHILD_FIRST,
		);
		foreach ($iterator as $item) {
			/** @var \SplFileInfo $item */
			$absolute = $item->getPathname();
			$relative = substr($absolute, strlen($appPath) + 1);

			if ($item->isDir()) {
				// Erst nach den Dateien dran (CHILD_FIRST), deshalb ist ein leer
				// gewordenes Verzeichnis hier zuverlaessig erkennbar.
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

		if ($removed > 0) {
			$output->info('Rechnungswerk: ' . $removed . ' Datei(en) aus einer Vorversion entfernt');
		}
	}

	/**
	 * Die signierten Pfade, oder null wenn die Signatur fehlt oder
	 * unglaubwuerdig klein ist.
	 *
	 * @return array<string, true>|null
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
		$hashes = is_array($decoded) ? ($decoded['hashes'] ?? null) : null;
		if (!is_array($hashes) || count($hashes) < self::MIN_SIGNED) {
			return null;
		}
		return array_fill_keys(array_keys($hashes), true);
	}

	private function isEmptyDir(string $path): bool {
		$entries = @scandir($path);
		return is_array($entries) && count($entries) === 2;
	}
}
