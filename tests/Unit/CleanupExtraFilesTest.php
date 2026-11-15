<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Migration\CleanupExtraFiles;
use OCP\App\IAppManager;
use OCP\Migration\IOutput;
use PHPUnit\Framework\TestCase;

/**
 * Dateien aus Vorversionen wegraeumen.
 *
 * Nextclouds Update kopiert die neue Version ueber die alte und loescht nichts.
 * Liefert eine Abhaengigkeit weniger Dateien aus als vorher, bleiben alte
 * Dateien liegen und die Integritaetspruefung meldet EXTRA_FILE.
 *
 * Der Schritt loescht Dateien aktiv. Deshalb pruefen diese Tests insbesondere,
 * unter welchen Bedingungen NICHT geloescht werden darf.
 */
class CleanupExtraFilesTest extends TestCase {
	private const ENTRY = 'js/rechnungswerk-main.mjs';

	private string $appPath;

	protected function setUp(): void {
		parent::setUp();

		$this->appPath = sys_get_temp_dir()
			. '/rw-cleanup-'
			. bin2hex(random_bytes(6));

		mkdir($this->appPath . '/appinfo', 0777, true);
		mkdir($this->appPath . '/vendor/paket/src', 0777, true);
		mkdir($this->appPath . '/vendor/paket/tests', 0777, true);
		mkdir($this->appPath . '/lib', 0777, true);
		mkdir($this->appPath . '/js', 0777, true);
	}

	protected function tearDown(): void {
		$this->removeTree($this->appPath);

		parent::tearDown();
	}

	private function removeTree(string $path): void {
		if (!is_dir($path)) {
			return;
		}

		$iterator = new \RecursiveIteratorIterator(
			new \RecursiveDirectoryIterator(
				$path,
				\FilesystemIterator::SKIP_DOTS,
			),
			\RecursiveIteratorIterator::CHILD_FIRST,
		);

		foreach ($iterator as $item) {
			if ($item->isDir()) {
				@rmdir($item->getPathname());
			} else {
				@unlink($item->getPathname());
			}
		}

		@rmdir($path);
	}

	/**
	 * Schreibt eine realistische signature.json.
	 *
	 * Fuer Dateien, die im Test bereits existieren, wird der echte SHA-512-Hash
	 * eingetragen. Dadurch kann der Cleanup-Code pruefen, ob signature.json
	 * tatsaechlich zum aktuell installierten JS-Build gehoert.
	 *
	 * Die Signatur wird auf mehr als MIN_SIGNED Eintraege aufgefuellt, damit
	 * die Sicherheitspruefung nicht absichtlich den gesamten Cleanup stoppt.
	 *
	 * @param list<string> $signed
	 */
	private function writeSignature(array $signed): void {
		$hashes = [];

		foreach ($signed as $relativePath) {
			$absolutePath = $this->appPath . '/' . $relativePath;

			$hash = is_file($absolutePath)
				? hash_file('sha512', $absolutePath)
				: false;

			$hashes[$relativePath] = is_string($hash)
				? $hash
				: str_repeat('a', 128);
		}

		for ($i = 0; count($hashes) < 600; $i++) {
			$hashes['vendor/paket/src/Fuell' . $i . '.php']
				= str_repeat('b', 128);
		}

		file_put_contents(
			$this->appPath . '/appinfo/signature.json',
			json_encode(
				['hashes' => $hashes],
				JSON_THROW_ON_ERROR,
			),
		);
	}

	private function service(): CleanupExtraFiles {
		$appManager = $this->createMock(IAppManager::class);

		$appManager
			->method('getAppPath')
			->willReturn($this->appPath);

		return new CleanupExtraFiles($appManager);
	}

	/**
	 * Was die Signatur in vendor/ nicht kennt, wird entfernt.
	 * Signierte Dateien bleiben bestehen.
	 */
	public function testUnsignedVendorFilesAreRemovedAndSignedOnesKept(): void {
		file_put_contents(
			$this->appPath . '/vendor/paket/src/Echt.php',
			'<?php',
		);

		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		file_put_contents(
			$this->appPath . '/vendor/paket/tests/AuchAlt.php',
			'<?php',
		);

		$this->writeSignature([
			'vendor/paket/src/Echt.php',
		]);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/vendor/paket/src/Echt.php',
			'Signierte Datei muss bleiben',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/vendor/paket/tests/Alt.php',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/vendor/paket/tests/AuchAlt.php',
		);

		$this->assertDirectoryDoesNotExist(
			$this->appPath . '/vendor/paket/tests',
			'Leer gewordenes Verzeichnis muss entfernt werden',
		);
	}

	/**
	 * Bei einer passenden Signatur werden alte JS-Chunks entfernt und die
	 * Chunks des aktuellen Builds behalten.
	 */
	public function testStaleChunksAreRemovedAndCurrentOnesKept(): void {
		file_put_contents(
			$this->appPath . '/' . self::ENTRY,
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/js/FilePicker-NEU.chunk.mjs',
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/js/FilePicker-ALT.chunk.mjs',
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/js/rechnungswerk-main.js',
			'// altes IIFE-Bundle',
		);

		$this->writeSignature([
			self::ENTRY,
			'js/FilePicker-NEU.chunk.mjs',
		]);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/' . self::ENTRY,
			'Einstiegspunkt muss bleiben',
		);

		$this->assertFileExists(
			$this->appPath . '/js/FilePicker-NEU.chunk.mjs',
			'Aktueller Chunk muss bleiben',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/js/FilePicker-ALT.chunk.mjs',
			'Chunk der Vorversion muss entfernt werden',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/js/rechnungswerk-main.js',
			'Altes IIFE-Bundle muss entfernt werden',
		);
	}

	/**
	 * Regressionstest fuer den auf NC35 reproduzierten Fehler:
	 *
	 * Der Einstiegspunkt hat denselben Dateinamen wie im letzten Release,
	 * stammt aber aus einem anderen Build. Seine Chunks duerfen dann NICHT
	 * anhand der alten signature.json entfernt werden.
	 *
	 * vendor/ muss davon unabhaengig weiterhin bereinigt werden.
	 */
	public function testSignatureWithSameEntryPathButDifferentHashNeverTouchesJs(): void {
		file_put_contents(
			$this->appPath . '/' . self::ENTRY,
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/js/FilePicker-NEU.chunk.mjs',
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		// Signatur passt zunaechst exakt zum Einstiegspunkt.
		$this->writeSignature([
			self::ENTRY,
		]);

		// Danach simulieren wir einen neuen lokalen/PR-Build.
		// Der Dateiname bleibt identisch, der Inhalt und damit SHA-512 aendern sich.
		file_put_contents(
			$this->appPath . '/' . self::ENTRY,
			'export const changed = true;',
		);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/' . self::ENTRY,
			'Einstiegspunkt eines abweichenden Builds darf nicht geloescht werden',
		);

		$this->assertFileExists(
			$this->appPath . '/js/FilePicker-NEU.chunk.mjs',
			'Chunks eines abweichenden Builds duerfen nicht geloescht werden',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'vendor/ muss trotz abweichendem JS-Build weiterhin bereinigt werden',
		);
	}

	/**
	 * Fehlt der Einstiegspunkt komplett in der Signatur, gehoert die Signatur
	 * offensichtlich nicht zu diesem JS-Build.
	 *
	 * js/ bleibt unangetastet, vendor/ wird weiterhin bereinigt.
	 */
	public function testForeignSignatureNeverTouchesJs(): void {
		file_put_contents(
			$this->appPath . '/' . self::ENTRY,
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/js/FilePicker-NEU.chunk.mjs',
			'export{}',
		);

		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		$this->writeSignature([
			'vendor/paket/src/Echt.php',
		]);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/' . self::ENTRY,
			'Einstiegspunkt darf nicht geloescht werden',
		);

		$this->assertFileExists(
			$this->appPath . '/js/FilePicker-NEU.chunk.mjs',
			'Chunk darf nicht geloescht werden',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'vendor/ wird von einer fremden JS-Signatur nicht ausgebremst',
		);
	}

	/**
	 * Ausserhalb von vendor/ und js/ wird nichts angefasst.
	 */
	public function testNothingOutsideManagedDirectoriesIsTouched(): void {
		file_put_contents(
			$this->appPath . '/lib/Unsigniert.php',
			'<?php',
		);

		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		$this->writeSignature([]);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/lib/Unsigniert.php',
		);

		$this->assertFileDoesNotExist(
			$this->appPath . '/vendor/paket/tests/Alt.php',
		);
	}

	/**
	 * Ohne Signatur wird nichts geloescht.
	 */
	public function testMissingSignatureLeavesEverythingAlone(): void {
		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/vendor/paket/tests/Alt.php',
		);
	}

	/**
	 * Eine unglaubwuerdig kleine Signatur darf ebenfalls keine Dateien loeschen.
	 */
	public function testImplausiblySmallSignatureLeavesEverythingAlone(): void {
		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		file_put_contents(
			$this->appPath . '/appinfo/signature.json',
			json_encode(
				[
					'hashes' => [
						'vendor/paket/src/Echt.php' => 'x',
					],
				],
				JSON_THROW_ON_ERROR,
			),
		);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/vendor/paket/tests/Alt.php',
		);
	}

	/**
	 * Kaputtes JSON darf niemals zum Loeschen von Dateien fuehren.
	 */
	public function testBrokenSignatureLeavesEverythingAlone(): void {
		file_put_contents(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'<?php',
		);

		file_put_contents(
			$this->appPath . '/appinfo/signature.json',
			'{ kein json',
		);

		$this->service()->run(
			$this->createMock(IOutput::class),
		);

		$this->assertFileExists(
			$this->appPath . '/vendor/paket/tests/Alt.php',
		);
	}
}
