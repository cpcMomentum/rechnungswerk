<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\ClubSettingsService;
use OCA\Rechnungswerk\Service\MemberDirectoryService;
use OCA\Rechnungswerk\Service\MembershipFeeConfigurationService;
use OCA\Rechnungswerk\Service\MembershipFeeService;
use OCA\Rechnungswerk\Service\MembershipInvoiceBatchService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\ProfileFieldsService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\Attribute\NoCSRFRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\IRequest;

class MembershipInvoiceController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly MemberDirectoryService $memberDirectoryService,
		private readonly ProfileFieldsService $profileFieldsService,
		private readonly MembershipFeeService $membershipFeeService,
		private readonly MembershipInvoiceBatchService $membershipInvoiceBatchService,
		private readonly MembershipFeeConfigurationService $membershipFeeConfigurationService,
		private readonly ClubSettingsService $clubSettingsService,
		private readonly PermissionService $permissionService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/**
	 * Legacy-Testvorschau.
	 *
	 * Arbeitet weiterhin mit direkt übergebenen Beitragssätzen,
	 * damit der bisherige Test-Endpunkt erhalten bleibt.
	 *
	 * Der produktive Beitragslauf verwendet batchPreview()
	 * und lädt seine Konfiguration aus der Datenbank.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function preview(
		string $group = '',
		string $fee20NY = '20.00',
		string $fee50nY = '50.00',
	): DataResponse {
		if (($denied = $this->guardAccess()) !== null) {
			return $denied;
		}

		$group = trim($group);

		if ($group === '') {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Nextcloud-Gruppe angegeben.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$members = $this->memberDirectoryService->getMembers($group);

			$feeGroups = [
				'20NY' => $fee20NY,
				'50nY' => $fee50nY,
			];

			foreach ($members as &$member) {
				$member['feeGroup'] = null;
				$member['feeAmount'] = null;
				$member['feeCurrency'] = 'EUR';
				$member['feeStatus'] = null;
				$member['feeMatchingGroups'] = [];

				if ($member['feeExempt'] === true) {
					$member['feeStatus'] = 'fee_exempt';
					$member['readyForInvoice'] = false;
					$member['status'] = 'fee_exempt';
					continue;
				}

				try {
					$fee = $this->membershipFeeService->resolve(
						$member['uid'],
						$feeGroups,
						'EUR'
					);

					$member['feeGroup'] = $fee['matchedGroup'];
					$member['feeAmount'] = $fee['amount'];
					$member['feeCurrency'] = $fee['currency'];
					$member['feeStatus'] = $fee['status'];
					$member['feeMatchingGroups'] = $fee['matchingGroups'];

					if (
						$member['complete'] === true
						&& $fee['status'] === 'resolved'
						&& $fee['amount'] !== null
					) {
						$member['readyForInvoice'] = true;
						$member['status'] = 'ready';
					} else {
						$member['readyForInvoice'] = false;

						if ($member['complete'] === true) {
							$member['status'] = $fee['status'];
						}
					}
				} catch (\Throwable $e) {
					$member['readyForInvoice'] = false;
					$member['feeStatus'] = 'fee_error';
					$member['status'] = 'fee_error';
					$member['feeError'] = $e->getMessage();
				}
			}

			unset($member);

			$withEmail = 0;
			$withoutEmail = 0;
			$readyForInvoice = 0;
			$feeExempt = 0;
			$incomplete = 0;
			$noFeeGroup = 0;
			$multipleFeeGroups = 0;
			$feeErrors = 0;
			$profileErrors = 0;

			foreach ($members as $member) {
				if ($member['hasEmail']) {
					$withEmail++;
				} else {
					$withoutEmail++;
				}

				switch ($member['status']) {
					case 'ready':
						$readyForInvoice++;
						break;

					case 'fee_exempt':
						$feeExempt++;
						break;

					case 'no_fee_group':
						$noFeeGroup++;
						break;

					case 'multiple_fee_groups':
						$multipleFeeGroups++;
						break;

					case 'fee_error':
						$feeErrors++;
						break;

					case 'profile_error':
						$profileErrors++;
						break;

					default:
						$incomplete++;
						break;
				}
			}

			return new DataResponse([
				'success' => true,
				'group' => $group,
				'count' => count($members),

				'feeGroups' => $feeGroups,
				'currency' => 'EUR',

				'withEmail' => $withEmail,
				'withoutEmail' => $withoutEmail,

				'readyForInvoice' => $readyForInvoice,
				'feeExempt' => $feeExempt,
				'incomplete' => $incomplete,

				'noFeeGroup' => $noFeeGroup,
				'multipleFeeGroups' => $multipleFeeGroups,
				'feeErrors' => $feeErrors,
				'profileErrors' => $profileErrors,

				'members' => $members,
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
	 * Test-Endpunkt:
	 * Profildaten eines einzelnen Mitglieds.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function profile(string $uid = ''): DataResponse {
		if (($denied = $this->guardAccess()) !== null) {
			return $denied;
		}

		$uid = trim($uid);

		if ($uid === '') {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Benutzer-ID angegeben.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$profile = $this->profileFieldsService->getMemberData($uid);

			return new DataResponse([
				'success' => true,
				'profile' => $profile,
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
	 * Legacy-Test-Endpunkt:
	 * Beitragsgruppe eines einzelnen Mitglieds.
	 *
	 * Arbeitet noch mit direkt übergebenen Gruppenbeträgen.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function fee(
		string $uid = '',
		string $fee20NY = '20.00',
		string $fee50nY = '50.00',
	): DataResponse {
		if (($denied = $this->guardAccess()) !== null) {
			return $denied;
		}

		$uid = trim($uid);

		if ($uid === '') {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Benutzer-ID angegeben.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$feeGroups = [
				'20NY' => $fee20NY,
				'50nY' => $fee50nY,
			];

			$result = $this->membershipFeeService->resolve(
				$uid,
				$feeGroups,
				'EUR'
			);

			return new DataResponse([
				'success' => true,
				'feeGroups' => $feeGroups,
				'fee' => $result,
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
	 * Vorschau eines gespeicherten Beitragslaufs.
	 *
	 * Die Beitragssätze und Beitragsart-Regeln werden aus
	 * der Datenbank geladen.
	 *
	 * Es werden KEINE Rechnungen erzeugt.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function batchPreview(
		string $group = '',
		int $year = 0,
	): DataResponse {
		if (($denied = $this->guardAccess()) !== null) {
			return $denied;
		}

		$group = $this->getConfiguredMemberGroup();

		if ($group === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Mitgliedergruppe für den Vereinsmodus konfiguriert.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		if ($year === 0) {
			$year = (int)date('Y');
		}

		try {
			$result = $this
				->membershipInvoiceBatchService
				->preview(
					$group,
					$year
				);

			return new DataResponse([
				'success' => true,
				'batch' => $result,
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
	 * Speichert oder aktualisiert die Konfiguration
	 * eines Beitragsjahres.
	 *
	 * Nur RechnungsWerk-Administratoren dürfen
	 * Beitragsläufe konfigurieren.
	 *
	 * POST mit regulärem Nextcloud-CSRF-Schutz.
	 */
	#[NoAdminRequired]
	public function saveConfiguration(
		int $year = 0,
		string $group = '',
		array $groupFees = [],
		array $membershipRules = [],
		string $currency = 'EUR',
		string $invoiceText = '',
		int $paymentTermDays = 14,
		int $taxRateBp = 0,
		?string $issueDate = null,
		?string $dueDate = null,
	): DataResponse {
		if (($denied = $this->guardAdmin()) !== null) {
			return $denied;
		}

		$group = $this->getConfiguredMemberGroup();

		if ($group === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Mitgliedergruppe für den Vereinsmodus konfiguriert.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$result = $this
				->membershipFeeConfigurationService
				->saveDraft(
					$this->userId,
					$this->userId,
					$year,
					$group,
					$groupFees,
					$membershipRules,
					$currency,
					$invoiceText,
					$paymentTermDays,
					$taxRateBp,
					$issueDate,
					$dueDate
				);

			return new DataResponse([
				'success' => true,
				'configuration' => $result,
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
	 * Lädt einen gespeicherten Beitragslauf.
	 */
	#[NoAdminRequired]
	#[NoCSRFRequired]
	public function getConfiguration(
		int $year = 0,
		string $group = '',
	): DataResponse {
		if (($denied = $this->guardAccess()) !== null) {
			return $denied;
		}

		if ($year === 0) {
			$year = (int)date('Y');
		}

		$group = $this->getConfiguredMemberGroup();

		if ($group === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Mitgliedergruppe für den Vereinsmodus konfiguriert.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$result = $this
				->membershipFeeConfigurationService
				->getConfiguration(
					$year,
					$group
				);

			return new DataResponse([
				'success' => true,
				'configuration' => $result,
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
	 * Erstellt Rechnungsentwürfe für einen gespeicherten Beitragslauf.
	 *
	 * Erlaubt für Benutzer/Gruppen mit Schreibberechtigung
	 * in RechnungsWerk.
	 *
	 * Es werden:
	 * - Rechnungsentwürfe angelegt
	 *
	 * Es werden NICHT:
	 * - Rechnungen festgeschrieben
	 * - E-Mails versendet
	 * - PDFs verteilt
	 * - Buchungen erzeugt
	 *
	 * POST mit regulärem Nextcloud-CSRF-Schutz.
	 */
	#[NoAdminRequired]
	public function batchCreateDrafts(
		string $group = '',
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
					'error' => 'Keine Mitgliedergruppe für den Vereinsmodus konfiguriert.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		if ($year === 0) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Kein Beitragsjahr angegeben.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		if ($confirm !== true) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Die Erstellung der Rechnungsentwürfe wurde nicht bestätigt.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		try {
			$result = $this
				->membershipInvoiceBatchService
				->createDrafts(
					$group,
					$year
				);

			return new DataResponse([
				'success' => true,
				'batch' => $result,
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
	 * Darf der aktuelle Benutzer RechnungsWerk überhaupt benutzen?
	 */
	private function guardAccess(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Nicht angemeldet.',
				],
				Http::STATUS_UNAUTHORIZED
			);
		}

		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Berechtigung für RechnungsWerk.',
				],
				Http::STATUS_FORBIDDEN
			);
		}
		if (($denied = $this->guardClubMode()) !== null) {
			return $denied;
		}

		return null;
	}

	/**
	 * Darf der aktuelle Benutzer Rechnungen erstellen/bearbeiten?
	 *
	 * Der PermissionService unterstützt dabei auch Nextcloud-Gruppen.
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

		if (!$this->permissionService->canEdit($this->userId)) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Berechtigung zum Erstellen oder Bearbeiten von Rechnungen.',
				],
				Http::STATUS_FORBIDDEN
			);
		}
		if (($denied = $this->guardClubMode()) !== null) {
			return $denied;
		}

		return null;
	}

	/**
	 * Darf der aktuelle Benutzer die RechnungsWerk-Konfiguration ändern?
	 */
	private function guardAdmin(): ?DataResponse {
		if ($this->userId === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Nicht angemeldet.',
				],
				Http::STATUS_UNAUTHORIZED
			);
		}

		if (!$this->permissionService->isAdmin($this->userId)) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Administratorberechtigung für RechnungsWerk.',
				],
				Http::STATUS_FORBIDDEN
			);
		}
		if (($denied = $this->guardClubMode()) !== null) {
			return $denied;
		}

		return null;
	}

    #[NoAdminRequired]
    public function batchCommit(
        string $group = '',
        int $year = 0,
        bool $confirm = false,
    ): DataResponse {
        $guard = $this->guardEdit();

        if ($guard !== null) {
            return $guard;
        }

		$group = $this->getConfiguredMemberGroup();

		if ($group === null) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Keine Mitgliedergruppe für den Vereinsmodus konfiguriert.',
				],
				Http::STATUS_BAD_REQUEST
			);
		}

		if ($year === 0) {
            $year = (int)date('Y');
        }

        try {
            $batch =
                $this->membershipInvoiceBatchService
                    ->commitDrafts(
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
	 * Ist der Vereinsmodus aktiviert?
	 */
	private function guardClubMode(): ?DataResponse {
		$settings = $this->clubSettingsService->get();

		if ($settings['clubMode'] !== true) {
			return new DataResponse(
				[
					'success' => false,
					'error' => 'Der Vereinsmodus ist deaktiviert.',
				],
				Http::STATUS_FORBIDDEN
			);
		}

		return null;
	}
	/**
	 * Liefert die zentral konfigurierte Mitgliedergruppe.
	 */
	private function getConfiguredMemberGroup(): ?string {
		$settings = $this->clubSettingsService->get();
		$memberGroup = $settings['memberGroup'] ?? null;

		if (!is_string($memberGroup)) {
			return null;
		}

		$memberGroup = trim($memberGroup);

		return $memberGroup !== '' ? $memberGroup : null;
	}
}
