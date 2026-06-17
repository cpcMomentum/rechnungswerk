<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Controller;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\Contacts\IManager;
use OCP\IRequest;

class ContactController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly IManager $contactsManager,
		private readonly PermissionService $permissionService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/**
	 * Search the user's address books and return invoice-recipient-shaped matches.
	 */
	#[NoAdminRequired]
	public function search(string $q = ''): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		$pattern = trim($q);
		if ($pattern === '' || !$this->contactsManager->isEnabled()) {
			return new DataResponse([]);
		}

		$matches = $this->contactsManager->search(
			$pattern,
			['FN', 'EMAIL', 'ORG'],
			['limit' => 20, 'types' => false],
		);

		$results = [];
		foreach ($matches as $contact) {
			// Skip the synthetic "local system address book" self-entries without a name.
			$name = $this->firstValue($contact['FN'] ?? null);
			if ($name === '') {
				continue;
			}
			$adr = $this->parseAddress($this->firstValue($contact['ADR'] ?? null));
			$results[] = [
				'name' => $name,
				'email' => $this->firstValue($contact['EMAIL'] ?? null),
				'address' => $adr['street'],
				'postalCode' => $adr['postalCode'],
				'city' => $adr['city'],
				'country' => $adr['country'],
			];
		}
		return new DataResponse($results);
	}

	/**
	 * vCard properties may be a string, a list of strings, or a list of
	 * type/value pairs. Return the first scalar value as a trimmed string.
	 */
	private function firstValue(mixed $value): string {
		if (is_string($value)) {
			return trim($value);
		}
		if (is_array($value)) {
			$first = reset($value);
			if (is_array($first)) {
				$first = $first['value'] ?? '';
			}
			return is_string($first) ? trim($first) : '';
		}
		return '';
	}

	/**
	 * Parse a vCard ADR value
	 * (PObox;Ext;Street;Locality;Region;PostalCode;Country) into our fields.
	 *
	 * @return array{street: string, postalCode: string, city: string, country: string}
	 */
	private function parseAddress(string $adr): array {
		$parts = $adr === '' ? [] : explode(';', $adr);
		return [
			'street' => trim($parts[2] ?? ''),
			'city' => trim($parts[3] ?? ''),
			'postalCode' => trim($parts[5] ?? ''),
			'country' => trim($parts[6] ?? ''),
		];
	}
}
