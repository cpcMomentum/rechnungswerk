<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\CountryService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IL10N;
use OCP\IRequest;

class CountryController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly PermissionService $permissionService,
		private readonly CountryService $countryService,
		private readonly IL10N $l10n,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/**
	 * Laenderliste fuer die Auswahlfelder in Rechnungs-Editor und Kunden-Dialog (#167).
	 * Die Namen folgen der Sprache des Nutzers, die Codes sind die fuer EN16931 zulaessigen.
	 */
	#[NoAdminRequired]
	public function index(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return new DataResponse($this->countryService->list($this->l10n->getLanguageCode()));
	}
}
