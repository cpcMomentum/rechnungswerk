<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\SettingsService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataDisplayResponse;
use OCP\AppFramework\Http\DataResponse;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use OCP\Files\NotFoundException;
use OCP\IRequest;

/**
 * Central company settings. Readable by every user with access (the editor
 * needs defaults like tax rate / standard texts); writable by app admins only.
 */
class SettingsController extends Controller {

	/** Logo formats the PDF renderer (dompdf) can embed reliably. */
	private const LOGO_MIMES = ['image/png', 'image/jpeg', 'image/gif'];

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly SettingsService $settingsService,
		private readonly PermissionService $permissionService,
		private readonly IRootFolder $rootFolder,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function show(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return new DataResponse($this->settingsService->getCompany());
	}

	#[NoAdminRequired]
	public function save(array $data = []): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		try {
			return new DataResponse($this->settingsService->save($data));
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
	}

	/**
	 * Set the company logo from a file in the current admin's Nextcloud files.
	 * The path is resolved to a stable file id (stored centrally); the file is
	 * later read back globally via the root folder (see ZugferdService), so it
	 * does not matter that the central settings are not owned by a real user.
	 */
	#[NoAdminRequired]
	public function setLogo(string $path = ''): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		if (trim($path) === '') {
			return new DataResponse(['error' => 'Kein Pfad angegeben.'], Http::STATUS_BAD_REQUEST);
		}
		try {
			$node = $this->rootFolder->getUserFolder($this->userId)->get($path);
		} catch (NotFoundException) {
			return new DataResponse(['error' => 'Datei nicht gefunden.'], Http::STATUS_NOT_FOUND);
		}
		if (!$node instanceof File || !in_array($node->getMimeType(), self::LOGO_MIMES, true)) {
			return new DataResponse(['error' => 'Bitte ein PNG-, JPEG- oder GIF-Bild wählen.'], Http::STATUS_BAD_REQUEST);
		}
		$settings = $this->settingsService->save(['logoFileId' => $node->getId()]);
		return new DataResponse(['logoFileId' => $settings->getLogoFileId()]);
	}

	/** Remove the company logo (app admin only). */
	#[NoAdminRequired]
	public function deleteLogo(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		$this->settingsService->save(['logoFileId' => null]);
		return new DataResponse(['logoFileId' => null]);
	}

	/**
	 * Stream the company logo for the settings preview. Readable by every user
	 * with access (mirrors show()); resolved globally by file id.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function getLogo(): DataDisplayResponse|DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		$fileId = $this->settingsService->getCompany()->getLogoFileId();
		if ($fileId === null) {
			return new DataResponse(['error' => 'Kein Logo gesetzt.'], Http::STATUS_NOT_FOUND);
		}
		$node = $this->rootFolder->getById($fileId)[0] ?? null;
		if (!$node instanceof File) {
			return new DataResponse(['error' => 'Logo-Datei nicht gefunden.'], Http::STATUS_NOT_FOUND);
		}
		// Re-check the type at read time: the underlying file content could have
		// been replaced after it was picked (the file id stays the same).
		$mime = $node->getMimeType();
		if (!in_array($mime, self::LOGO_MIMES, true)) {
			return new DataResponse(['error' => 'Logo ist kein gültiges Bild.'], Http::STATUS_NOT_FOUND);
		}
		return new DataDisplayResponse(
			$node->getContent(),
			Http::STATUS_OK,
			['Content-Type' => $mime],
		);
	}
}
