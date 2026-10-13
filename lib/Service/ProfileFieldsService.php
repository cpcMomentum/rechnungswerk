<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use JsonException;
use OCA\ProfileFields\Service\FieldDefinitionService;
use OCA\ProfileFields\Service\FieldValueService;
use OCP\App\IAppManager;
use OCP\IUserManager;
use Psr\Container\ContainerInterface;
use RuntimeException;

final class ProfileFieldsService {

	private const APP_ID = 'profile_fields';

	private const FIELD_KEYS = [
		'vereins_vorname',
		'vereins_nachname',
		'vereins_strasse',
		'vereins_hausnummer',
		'vereins_plz',
		'vereins_ort',
		'vereins_land',
		'mitgliedsnummer',
		'eintrittsdatum',
		'beitragsart',
		'beitragsfrei',
	];

	public function __construct(
		private readonly IAppManager $appManager,
		private readonly IUserManager $userManager,
		private readonly ContainerInterface $container,
	) {
	}

	public function getMemberData(string $userUid): array {
		$user = $this->userManager->get($userUid);

		if ($user === null) {
			throw new RuntimeException(
				sprintf('Nextcloud-Benutzer "%s" wurde nicht gefunden.', $userUid)
			);
		}

		// Immer die von Nextcloud zurückgegebene kanonische UID verwenden.
		// Beispiel: MaxMu -> MaxMU
		$canonicalUid = $user->getUID();

		$this->ensureProfileFieldsAvailable();

		/** @var FieldDefinitionService $definitionService */
		$definitionService = $this->container->get(
			FieldDefinitionService::class
		);

		/** @var FieldValueService $valueService */
		$valueService = $this->container->get(
			FieldValueService::class
		);

		$definitionsById = [];

		foreach ($definitionService->findActiveOrdered() as $definition) {
			$fieldKey = $definition->getFieldKey();

			if (!in_array($fieldKey, self::FIELD_KEYS, true)) {
				continue;
			}

			$definitionsById[$definition->getId()] = $fieldKey;
		}

		$rawValues = [];

		foreach ($valueService->findByUserUid($canonicalUid) as $fieldValue) {
			$definitionId = $fieldValue->getFieldDefinitionId();

			if (!isset($definitionsById[$definitionId])) {
				continue;
			}

			$fieldKey = $definitionsById[$definitionId];

			try {
				$decoded = json_decode(
					$fieldValue->getValueJson(),
					true,
					512,
					JSON_THROW_ON_ERROR
				);
			} catch (JsonException $e) {
				throw new RuntimeException(
					sprintf(
						'Profilfeld "%s" von Benutzer "%s" konnte nicht gelesen werden.',
						$fieldKey,
						$canonicalUid
					),
					0,
					$e
				);
			}

			$rawValues[$fieldKey] = $decoded['value'] ?? null;
		}

		$data = [
			'uid' => $canonicalUid,

			'firstName' => $this->stringValue(
				$rawValues['vereins_vorname'] ?? null
			),

			'lastName' => $this->stringValue(
				$rawValues['vereins_nachname'] ?? null
			),

			'street' => $this->stringValue(
				$rawValues['vereins_strasse'] ?? null
			),

			'houseNumber' => $this->stringValue(
				$rawValues['vereins_hausnummer'] ?? null
			),

			'postalCode' => $this->stringValue(
				$rawValues['vereins_plz'] ?? null
			),

			'city' => $this->stringValue(
				$rawValues['vereins_ort'] ?? null
			),

			'country' => $this->stringValue(
				$rawValues['vereins_land'] ?? null
			),

			'memberNumber' => $this->stringValue(
				$rawValues['mitgliedsnummer'] ?? null
			),

			'entryDate' => $this->stringValue(
				$rawValues['eintrittsdatum'] ?? null
			),

			'membershipType' => $this->stringValue(
				$rawValues['beitragsart'] ?? null
			),

			// null ist absichtlich etwas anderes als false:
			// null = Feld fehlt
			// false = ausdrücklich nicht beitragsfrei
			'feeExempt' => $this->booleanValue(
				$rawValues['beitragsfrei'] ?? null
			),
		];

		$data['missingFields'] = $this->findMissingFields($data);
		$data['complete'] = $data['missingFields'] === [];

		return $data;
	}

	private function ensureProfileFieldsAvailable(): void {
		/*
		 * isInstalled() ist in neueren Nextcloud-Versionen deprecated,
		 * funktioniert aber weiterhin und hält uns kompatibel zu NC 31.
		 */
		if (!$this->appManager->isInstalled(self::APP_ID)) {
			throw new RuntimeException(
				'Die Nextcloud-App "profile_fields" ist nicht aktiviert.'
			);
		}

		$this->appManager->loadApp(self::APP_ID);

		if (
			!class_exists(FieldDefinitionService::class)
			|| !class_exists(FieldValueService::class)
		) {
			throw new RuntimeException(
				'Die Dienste der App "profile_fields" konnten nicht geladen werden.'
			);
		}
	}

	private function stringValue(mixed $value): ?string {
		if (!is_string($value)) {
			return null;
		}

		$value = trim($value);

		return $value === '' ? null : $value;
	}

	private function booleanValue(mixed $value): ?bool {
		return is_bool($value) ? $value : null;
	}

	private function findMissingFields(array $data): array {
		$required = [
			'firstName' => 'Vorname',
			'lastName' => 'Nachname',
			'street' => 'Straße',
			'houseNumber' => 'Hausnummer',
			'postalCode' => 'PLZ',
			'city' => 'Ort',
			'country' => 'Land',
			'memberNumber' => 'Mitgliedsnummer',
			'entryDate' => 'Eintrittsdatum',
			'membershipType' => 'Beitragsart',
			'feeExempt' => 'Beitragsfrei',
		];

		$missing = [];

		foreach ($required as $key => $label) {
			if ($data[$key] === null) {
				$missing[] = $label;
			}
		}

		return $missing;
	}
}