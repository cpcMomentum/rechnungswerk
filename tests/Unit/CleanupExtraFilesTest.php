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
 * Dateien aus Vorversionen wegräumen.
 *
 * Nextclouds Update kopiert die neue Version über die alte und löscht nichts.
 * Liefert eine Abhängigkeit weniger Dateien aus als vorher, bleiben die alten
 * liegen und die Integritätsprüfung meldet EXTRA_FILE. Genau das ist beim
 * Sprung 0.3.1 → 0.4.0 gemessen worden: horstoeko/zugferd 1.0.124 shippt seine
 * eigenen tests/ nicht mehr mit.
 *
 * Der Schritt löscht scharf, deshalb prüfen diese Tests vor allem, wo er es
 * NICHT tut.
 */
class CleanupExtraFilesTest extends TestCase {
	/** Der Einstiegspunkt, an dem der Schritt erkennt, ob die Signatur zu diesem Build gehoert. */
	private const ENTRY = 'js/rechnungswerk-main.mjs';

	private string $appPath;

	protected function setUp(): void {
		parent::setUp();
		$this->appPath = sys_get_temp_dir() . '/rw-cleanup-' . bin2hex(random_bytes(6));
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
		$it = new \RecursiveIteratorIterator(
			new \RecursiveDirectoryIterator($path, \FilesystemIterator::SKIP_DOTS),
			\RecursiveIteratorIterator::CHILD_FIRST,
		);
		foreach ($it as $item) {
			$item->isDir() ? @rmdir($item->getPathname()) : @unlink($item->getPathname());
		}
		@rmdir($path);
	}

	/** @param list<string> $signed */
	private function writeSignature(array $signed): void {
		// Ueber die Untergrenze von 500 Eintraegen auffuellen, sonst greift die
		// Sicherung und der Schritt tut absichtlich nichts.
		$hashes = [];
		foreach ($signed as $rel) {
			$hashes[$rel] = str_repeat('a', 128);
		}
		for ($i = 0; count($hashes) < 600; $i++) {
			$hashes['vendor/paket/src/Fuell' . $i . '.php'] = str_repeat('b', 128);
		}
		file_put_contents(
			$this->appPath . '/appinfo/signature.json',
			json_encode(['hashes' => $hashes], JSON_THROW_ON_ERROR),
		);
	}

	private function service(): CleanupExtraFiles {
		$appManager = $this->createMock(IAppManager::class);
		$appManager->method('getAppPath')->willReturn($this->appPath);
		return new CleanupExtraFiles($appManager);
	}

	/**
	 * Der Kern: was die Signatur nicht kennt, verschwindet aus vendor/ — was sie
	 * kennt, bleibt.
	 */
	public function testUnsignedVendorFilesAreRemovedAndSignedOnesKept(): void {
		file_put_contents($this->appPath . '/vendor/paket/src/Echt.php', '<?php');
		file_put_contents($this->appPath . '/vendor/paket/tests/Alt.php', '<?php');
		file_put_contents($this->appPath . '/vendor/paket/tests/AuchAlt.php', '<?php');
		$this->writeSignature(['vendor/paket/src/Echt.php']);

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/vendor/paket/src/Echt.php', 'Signierte Datei muss bleiben');
		$this->assertFileDoesNotExist($this->appPath . '/vendor/paket/tests/Alt.php');
		$this->assertFileDoesNotExist($this->appPath . '/vendor/paket/tests/AuchAlt.php');
		$this->assertDirectoryDoesNotExist($this->appPath . '/vendor/paket/tests', 'Leer gewordenes Verzeichnis muss weg');
	}

	/**
	 * #221: Chunks aus einer Vorversion muessen weg, die der aktuellen bleiben.
	 *
	 * Seit der Umstellung auf ES-Module traegt jeder Chunk einen Inhalts-Hash im
	 * Namen. Jede Version bringt damit andere Dateinamen mit, und NCs Update
	 * loescht die alten nicht — ohne diesen Schritt sammelt sich js/ zu und die
	 * Integritaetspruefung meldet EXTRA_FILE.
	 */
	public function testStaleChunksAreRemovedAndCurrentOnesKept(): void {
		file_put_contents($this->appPath . '/' . self::ENTRY, 'export{}');
		file_put_contents($this->appPath . '/js/FilePicker-NEU.chunk.mjs', 'export{}');
		file_put_contents($this->appPath . '/js/FilePicker-ALT.chunk.mjs', 'export{}');
		file_put_contents($this->appPath . '/js/rechnungswerk-main.js', '// iife aus 0.4.1');
		$this->writeSignature([self::ENTRY, 'js/FilePicker-NEU.chunk.mjs']);

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/' . self::ENTRY, 'Einstiegspunkt muss bleiben');
		$this->assertFileExists($this->appPath . '/js/FilePicker-NEU.chunk.mjs', 'Aktueller Chunk muss bleiben');
		$this->assertFileDoesNotExist($this->appPath . '/js/FilePicker-ALT.chunk.mjs', 'Chunk der Vorversion muss weg');
		$this->assertFileDoesNotExist($this->appPath . '/js/rechnungswerk-main.js', 'Das alte iife-Bundle muss weg');
	}

	/**
	 * Die wichtigste Absicherung an js/: kennt die Signatur den Einstiegspunkt
	 * nicht, stammt sie aus einer anderen Version. Dann darf der Schritt js/ NICHT
	 * anfassen, sonst loescht er die frisch gebauten Chunks und die App startet
	 * nicht mehr. Genau das passiert bei lokalen Deploys, die eine signature.json
	 * vom letzten Release mitbringen.
	 */
	public function testForeignSignatureNeverTouchesJs(): void {
		file_put_contents($this->appPath . '/' . self::ENTRY, 'export{}');
		file_put_contents($this->appPath . '/js/FilePicker-NEU.chunk.mjs', 'export{}');
		file_put_contents($this->appPath . '/vendor/paket/tests/Alt.php', '<?php');
		// Signatur ohne den Einstiegspunkt = gehoert nicht zu diesem Build.
		$this->writeSignature(['vendor/paket/src/Echt.php']);

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/' . self::ENTRY, 'Einstiegspunkt darf nicht geloescht werden');
		$this->assertFileExists($this->appPath . '/js/FilePicker-NEU.chunk.mjs', 'Chunk darf nicht geloescht werden');
		$this->assertFileDoesNotExist(
			$this->appPath . '/vendor/paket/tests/Alt.php',
			'vendor/ wird davon nicht ausgebremst',
		);
	}

	/**
	 * Ausserhalb von vendor/ und js/ wird nichts angetastet, auch nichts Unsigniertes.
	 * Dort liegt eigener Code, nicht Composer-Output, und ein Fehlgriff waere
	 * nicht wiederherstellbar.
	 */
	public function testNothingOutsideVendorIsTouched(): void {
		file_put_contents($this->appPath . '/lib/Unsigniert.php', '<?php');
		file_put_contents($this->appPath . '/vendor/paket/tests/Alt.php', '<?php');
		$this->writeSignature([]);

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/lib/Unsigniert.php');
		$this->assertFileDoesNotExist($this->appPath . '/vendor/paket/tests/Alt.php');
	}

	/**
	 * Ohne Signatur wird nichts gelöscht. Sonst würde ein fehlgeschlagenes
	 * Signieren dazu führen, dass vendor/ ausgeräumt und die App unbrauchbar wird.
	 */
	public function testMissingSignatureLeavesEverythingAlone(): void {
		file_put_contents($this->appPath . '/vendor/paket/tests/Alt.php', '<?php');

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/vendor/paket/tests/Alt.php');
	}

	/**
	 * Eine unglaubwürdig kleine Signatur ist derselbe Fall: verdächtig, also
	 * Finger weg. Das Release trägt gut 2.700 Einträge.
	 */
	public function testImplausiblySmallSignatureLeavesEverythingAlone(): void {
		file_put_contents($this->appPath . '/vendor/paket/tests/Alt.php', '<?php');
		file_put_contents(
			$this->appPath . '/appinfo/signature.json',
			json_encode(['hashes' => ['vendor/paket/src/Echt.php' => 'x']], JSON_THROW_ON_ERROR),
		);

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/vendor/paket/tests/Alt.php');
	}

	/** Kaputtes JSON darf ebenfalls nicht zum Löschen führen. */
	public function testBrokenSignatureLeavesEverythingAlone(): void {
		file_put_contents($this->appPath . '/vendor/paket/tests/Alt.php', '<?php');
		file_put_contents($this->appPath . '/appinfo/signature.json', '{ kein json');

		$this->service()->run($this->createMock(IOutput::class));

		$this->assertFileExists($this->appPath . '/vendor/paket/tests/Alt.php');
	}
}
