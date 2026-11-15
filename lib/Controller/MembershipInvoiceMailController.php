<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\ClubSettingsService;
use OCA\Rechnungswerk\Service\MembershipInvoiceMailBatchService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

final class MembershipInvoiceMailController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly MembershipInvoiceMailBatchService $membershipInvoiceMailBatchService,
		private readonly ClubSettingsService $clubSettingsService,
		private readonly PermissionService $permissionService,
	) {
		parent::__construct(
			Application::APP_ID,
			$request
		);
	}

	/**
	 * Prüft bzw. versendet die fertigen Beitragsrechnungen
	 * eines Beitragsjahres per E-Mail.
	 *
	 * confirm=false:
	 *   Reiner Dry-Run.
	 *
	 * confirm=true:
	 *   Noch nicht versandte Rechnungen tatsächlich versenden.
	 */
	#[NoAdminRequired]
	public function batchSend(
		int $year = 0,
		bool $confirm = false,
	): DataResponse {
		if (($denied = $this->guardEdit()) !== null) {
			return $denied;
		}

		$group = $this->getConfiguredMemberGroup();

		if ($group === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' =>
						'Keine Mitgliedergruppe für den Vereinsmodus konfiguriert.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		/*
		 * Beim Versand muss das Beitragsjahr ausdrücklich
		 * angegeben werden. Kein stilles aktuelles Kalenderjahr.
		 */
		if ($year === 0) {
			return new DataResponse(
				[
					'success' => false,
					'error' =>
						'Kein Beitragsjahr angegeben.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$batch =
				$this
					->membershipInvoiceMailBatchService
					->sendBatch(
						$group,
						$year,
						$confirm
					);

			return new DataResponse([
				'success' => true,
				'confirmed' => $confirm,
				'batch' => $batch,
			]);
		} catch (\Throwable $e) {
			return new DataResponse(
				[
					'success' => false,
					'error' => $e->getMessage(),
					'exception' => get_class($e),
				],
				Http::STATUS_BAD_REQUEST
			);
		}
	}

	/**
	 * Beitragsrechnungsversand benötigt dieselbe
	 * Bearbeitungsberechtigung wie der Beitragslauf selbst.
	 */
	private function guardEdit(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Nicht angemeldet.',
				],
				Http::STATUS_UNAUTHORIZED
			);
		}

		if (
			!$this->permissionService
				->canEdit($this->userId)
		) {
			return new DataResponse(
				[
					'success' => false,
					'error' =>
						'Keine Berechtigung zum Erstellen oder Bearbeiten von Rechnungen.',
				],
				Http::STATUS_FORBIDDEN
			);
		}

		return $this->guardClubMode();
	}

	/**
	 * Der Beitragsrechnungsversand existiert ausschließlich
	 * im Vereinsmodus.
	 */
	private function guardClubMode(): ?DataResponse {
		$settings =
			$this->clubSettingsService->get();

		if (
			($settings['clubMode'] ?? false)
			!== true
		) {
			return new DataResponse(
				[
					'success' => false,
					'error' =>
						'Der Vereinsmodus ist deaktiviert.',
				],
				Http::STATUS_FORBIDDEN
			);
		}

		return null;
	}

	/**
	 * Die Vereinsgruppe wird ausschließlich aus der zentralen
	 * Vereinskonfiguration übernommen.
	 *
	 * Eine beliebige, vom Client übergebene Gruppe wird nicht
	 * unterstützt.
	 */
	private function getConfiguredMemberGroup(): ?string {
		$settings =
			$this->clubSettingsService->get();

		$memberGroup =
			$settings['memberGroup']
			?? null;

		if (!is_string($memberGroup)) {
			return null;
		}

		$memberGroup = trim($memberGroup);

		return $memberGroup !== ''
			? $memberGroup
			: null;
	}
}