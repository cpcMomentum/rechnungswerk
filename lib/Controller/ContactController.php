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
use OCA\Rechnungswerk\Service\UserContactService;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\Attribute\NoAdminRequired;
use OCP\AppFramework\Http\DataResponse;
use OCP\Accounts\IAccountManager;
use OCP\Contacts\IManager;
use OCP\IRequest;
use OCP\IUserManager;

class ContactController extends Controller {

	public function __construct(
		IRequest $request,
		private readonly ?string $userId,
		private readonly IManager $contactsManager,
		private readonly PermissionService $permissionService,
		private readonly IUserManager $userManager,
		private readonly IAccountManager $accountManager,
		private readonly UserContactService $userContactService,
	) {
		parent::__construct(Application::APP_ID, $request);
	}

	/**
	 * Seller-contact defaults for the current user, taken from their Nextcloud
	 * account (display name, email, phone). Used to pre-fill the per-invoice
	 * seller contact in the editor; falls back to the central company contact
	 * if left empty.
	 */
	#[NoAdminRequired]
	public function me(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		$user = $this->userManager->get($this->userId);
		$phone = '';
		if ($user !== null) {
			try {
				$phone = $this->accountManager->getAccount($user)
					->getProperty(IAccountManager::PROPERTY_PHONE)->getValue();
			} catch (\Throwable) {
				$phone = '';
			}
		}
		return new DataResponse([
			'person' => $user?->getDisplayName() ?? '',
			'phone' => $phone,
			'email' => $user?->getEMailAddress() ?? '',
		]);
	}

	/**
	 * The current user's personal seller-contact default (#47, cascade level 2).
	 */
	#[NoAdminRequired]
	public function getMyContact(): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		return new DataResponse($this->userContactService->get($this->userId));
	}

	/**
	 * Save the current user's personal seller-contact default.
	 *
	 * @param array<string, mixed> $data
	 */
	#[NoAdminRequired]
	public function saveMyContact(array $data = []): DataResponse {
		if ($this->userId === null) {
			return new DataResponse(['error' => 'Not authenticated'], Http::STATUS_UNAUTHORIZED);
		}
		if (!$this->permissionService->hasAccess($this->userId)) {
			return new DataResponse(['error' => 'Forbidden'], Http::STATUS_FORBIDDEN);
		}
		try {
			return new DataResponse($this->userContactService->save($this->userId, $data));
		} catch (ValidationException $e) {
			return new DataResponse(['error' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		}
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
				'phone' => $this->firstValue($contact['TEL'] ?? null),
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
