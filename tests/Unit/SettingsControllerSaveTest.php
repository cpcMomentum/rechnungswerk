<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\SettingsController;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\SettingsService;
use OCP\Files\Folder;
use OCP\Files\IRootFolder;
use OCP\IRequest;
use PHPUnit\Framework\TestCase;

/**
 * Regressionstest zu #301: save() muss – wie show() – den berechneten
 * Anzeigepfad des Ablageordners (archiveFolderPath) zurueckgeben. Zuvor lieferte
 * save() die rohe Entity ohne dieses Feld, wodurch der gewaehlte Ordner nach dem
 * Speichern in der UI verschwand (nur Anzeige; der Ordner blieb gesetzt).
 */
class SettingsControllerSaveTest extends TestCase {

	private function buildController(Settings $saved): SettingsController {
		$settingsService = $this->createMock(SettingsService::class);
		$settingsService->method('save')->willReturn($saved);

		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('isAdmin')->willReturn(true);
		$permissions->method('hasAccess')->willReturn(true);

		// Der Ordner mit der gespeicherten ID ist im View des Admins gemountet
		// und liegt unter „Rechnungen".
		$node = $this->createMock(Folder::class);
		$node->method('getPath')->willReturn('/admin/files/Rechnungen');

		$userFolder = $this->createMock(Folder::class);
		$userFolder->method('getById')->willReturn([$node]);
		$userFolder->method('getRelativePath')->willReturn('Rechnungen');

		$rootFolder = $this->createMock(IRootFolder::class);
		$rootFolder->method('getUserFolder')->willReturn($userFolder);

		return new SettingsController(
			$this->createMock(IRequest::class),
			'admin',
			$settingsService,
			$permissions,
			$rootFolder,
		);
	}

	public function testSaveReturnsArchiveFolderPath(): void {
		$saved = new Settings();
		$saved->setArchiveFolderId(123);

		$controller = $this->buildController($saved);
		$data = $controller->save(['iban' => 'DE00'])->getData();

		$this->assertIsArray($data);
		$this->assertArrayHasKey('archiveFolderPath', $data,
			'save() muss archiveFolderPath enthalten, sonst verschwindet die Anzeige (#301)');
		$this->assertSame('Rechnungen', $data['archiveFolderPath']);
		$this->assertSame(123, $data['archiveFolderId']);
	}
}
