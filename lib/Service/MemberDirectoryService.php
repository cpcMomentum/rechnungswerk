<?php

declare(strict_types=1);

namespace OCA\Rechnungswerk\Service;

use OCP\IGroupManager;
use RuntimeException;

final class MemberDirectoryService {

	public function __construct(
		private readonly IGroupManager $groupManager,
		private readonly ProfileFieldsService $profileFieldsService,
	) {
	}

	public function getMembers(string $groupId): array {
		$groupId = trim($groupId);

		if ($groupId === '') {
			throw new RuntimeException('Keine Vereinsgruppe angegeben.');
		}

		$group = $this->groupManager->get($groupId);

		if ($group === null) {
			throw new RuntimeException(
				sprintf('Die Nextcloud-Gruppe "%s" wurde nicht gefunden.', $groupId)
			);
		}

		$members = [];

		foreach ($group->getUsers() as $user) {
			if (!$user->isEnabled()) {
				continue;
			}

			$uid = $user->getUID();

			$email = $user->getEMailAddress();

			if ($email !== null) {
				$email = trim($email);

				if ($email === '') {
					$email = null;
				}
			}

			$member = [
				'uid' => $uid,
				'displayName' => $user->getDisplayName(),
				'email' => $email,
				'hasEmail' => $email !== null,

				'firstName' => null,
				'lastName' => null,
				'street' => null,
				'houseNumber' => null,
				'postalCode' => null,
				'city' => null,
				'country' => null,

				'memberNumber' => null,
				'entryDate' => null,
				'membershipType' => null,
				'feeExempt' => null,

				'complete' => false,
				'readyForInvoice' => false,
				'missingFields' => [],
				'status' => 'incomplete',
			];

			try {
				$profile = $this->profileFieldsService->getMemberData($uid);

				$member['firstName'] = $profile['firstName'];
				$member['lastName'] = $profile['lastName'];
				$member['street'] = $profile['street'];
				$member['houseNumber'] = $profile['houseNumber'];
				$member['postalCode'] = $profile['postalCode'];
				$member['city'] = $profile['city'];
				$member['country'] = $profile['country'];

				$member['memberNumber'] = $profile['memberNumber'];
				$member['entryDate'] = $profile['entryDate'];
				$member['membershipType'] = $profile['membershipType'];
				$member['feeExempt'] = $profile['feeExempt'];

				$missingFields = $profile['missingFields'];

				if ($email === null) {
					$missingFields[] = 'E-Mail';
				}

				$member['missingFields'] = $missingFields;
				$member['complete'] = $missingFields === [];

				if ($member['feeExempt'] === true) {
					$member['status'] = 'fee_exempt';
					$member['readyForInvoice'] = false;
				} elseif ($member['complete']) {
					$member['status'] = 'ready';
					$member['readyForInvoice'] = true;
				} else {
					$member['status'] = 'incomplete';
					$member['readyForInvoice'] = false;
				}

			} catch (\Throwable $e) {
				$member['status'] = 'profile_error';
				$member['readyForInvoice'] = false;
				$member['missingFields'] = [
					'Profildaten konnten nicht gelesen werden',
				];
				$member['profileError'] = $e->getMessage();
			}

			$members[] = $member;
		}

		usort(
			$members,
			static fn(array $a, array $b): int =>
				strcasecmp(
					($a['lastName'] ?? '') . ($a['firstName'] ?? '') . $a['displayName'],
					($b['lastName'] ?? '') . ($b['firstName'] ?? '') . $b['displayName']
				)
		);

		return $members;
	}
}