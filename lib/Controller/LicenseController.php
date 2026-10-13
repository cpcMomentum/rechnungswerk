<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\WerkPlusApiException;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\WerkPlusClient;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IL10N;
use OCP\IRequest;

// WerkPlus-Lizenz im Admin; nur App-Admins.
class LicenseController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly PermissionService $permissionService,
		private readonly EntitlementService $entitlementService,
		private readonly IL10N $l10n,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	#[NoAdminRequired]
	public function show(): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		return new DataResponse($this->status());
	}

	#[NoAdminRequired]
	public function activate(#[\SensitiveParameter] string $key = '', string $employeeBucket = EntitlementService::DEFAULT_BUCKET): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		try {
			$this->entitlementService->activate($key, $employeeBucket);
		} catch (\InvalidArgumentException $e) {
			return $this->invalidInput($e->getMessage());
		} catch (WerkPlusApiException $e) {
			return $this->apiError($e);
		}
		return new DataResponse($this->status());
	}

	#[NoAdminRequired]
	public function refresh(): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		try {
			$this->entitlementService->refresh();
		} catch (\InvalidArgumentException $e) {
			return $this->invalidInput($e->getMessage());
		} catch (WerkPlusApiException $e) {
			return $this->apiError($e);
		}
		return new DataResponse($this->status());
	}

	#[NoAdminRequired]
	public function destroy(): DataResponse {
		if (($resp = $this->requireAdmin()) !== null) {
			return $resp;
		}
		$this->entitlementService->removeKey();
		return new DataResponse($this->status());
	}

	/**
	 * @return array<string, mixed>
	 */
	private function status(): array {
		$status = $this->entitlementService->getStatus();
		$lastError = $status['lastError'];
		$status['lastError'] = $lastError === null ? null : [
			'code' => $lastError['code'],
			'message' => $this->messageFor($lastError['code'], $lastError['serverMessage']),
			'at' => $lastError['at'] > 0 ? gmdate('Y-m-d\TH:i:s\Z', $lastError['at']) : null,
		];
		return $status;
	}

	private function apiError(WerkPlusApiException $e): DataResponse {
		return new DataResponse([
			'error' => $this->messageFor($e->getErrorCode(), $e->getServerMessage()),
			'code' => $e->getErrorCode(),
			'status' => $this->status(),
		], Http::STATUS_BAD_REQUEST);
	}

	private function invalidInput(string $field): DataResponse {
		$message = $field === 'employeeBucket'
			? $this->l10n->t('Bitte wähle eine gültige Größenklasse.')
			: $this->l10n->t('Bitte gib einen gültigen WerkPlus-Schlüssel ein.');
		return new DataResponse(['error' => $message, 'code' => 'INPUT_INVALID'], Http::STATUS_BAD_REQUEST);
	}

	// Verzweigt wird ueber den Code; die Servermeldung erscheint nur, wenn der Code unbekannt ist.
	private function messageFor(string $code, string $serverMessage): string {
		return match ($code) {
			'REQUEST_INVALID' => $this->l10n->t('Die Anfrage an WerkPlus war fehlerhaft. Bitte melde den Fehler dem Anbieter.'),
			'KEY_UNKNOWN' => $this->l10n->t('Dieser Schlüssel ist nicht bekannt. Bitte prüfe die Schreibweise.'),
			'KEY_REVOKED' => $this->l10n->t('Dieser Schlüssel wurde gesperrt. RechnungsWerk arbeitet im freien Umfang weiter.'),
			'KEY_EXPIRED' => $this->l10n->t('Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.'),
			'INSTANCE_LIMIT_REACHED' => $this->l10n->t('Dieser Schlüssel gehört bereits zu einer anderen Installation. Ein Umzug wird vom Anbieter freigeschaltet.'),
			'RATE_LIMITED' => $this->l10n->t('Zu viele Versuche. Bitte versuche es später erneut.'),
			WerkPlusClient::UNREACHABLE => $this->l10n->t('WerkPlus ist gerade nicht erreichbar. Bitte versuche es später erneut.'),
			EntitlementService::TOKEN_REJECTED => $this->l10n->t('Die Antwort von WerkPlus ließ sich nicht prüfen. Die Lizenz wurde nicht übernommen.'),
			'SERVER_ERROR', WerkPlusClient::INVALID_RESPONSE => $this->l10n->t('WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.'),
			default => $serverMessage !== '' ? $serverMessage : $this->l10n->t('WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.'),
		};
	}

	private function requireAdmin(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return null;
	}
}
