<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\ClubSettingsService;
use OCA\Rechnungswerk\Service\MembershipInvoiceFileBatchService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

final class MembershipInvoiceFileController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly MembershipInvoiceFileBatchService $membershipInvoiceFileBatchService,
		private readonly ClubSettingsService $clubSettingsService,
		private readonly PermissionService $permissionService,
	) {
		parent::__construct(
			Application::APP_ID,
			$request
		);
	}

	/**
	 * Prüft bzw. speichert die fertigen Beitragsrechnungen
	 * im persönlichen Nextcloud-Dateibereich der Mitglieder.
	 *
	 * confirm=false:
	 *   reiner Dry-Run
	 *
	 * confirm=true:
	 *   Dateien tatsächlich schreiben
	 */
	#[NoAdminRequired]
	public function batchStore(
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
		 * Bei einer Verteilaktion verlangen wir das Beitragsjahr
		 * ausdrücklich. Ein stilles Ausweichen auf das aktuelle
		 * Kalenderjahr wäre hier zu gefährlich.
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
					->membershipInvoiceFileBatchService
					->storeBatch(
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
	 * Schreiben von Beitragsrechnungen in Mitgliederkonten
	 * benötigt dieselbe Bearbeitungsberechtigung wie der
	 * Beitragslauf selbst.
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
	 * Die Mitgliederablage existiert ausschließlich
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
	 * Die Zielgruppe wird ausschließlich aus der zentralen
	 * Vereinskonfiguration übernommen.
	 *
	 * Eine vom Client übergebene beliebige Nextcloud-Gruppe
	 * wird bewusst nicht unterstützt.
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