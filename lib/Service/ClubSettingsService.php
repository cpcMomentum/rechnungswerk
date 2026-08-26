<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use InvalidArgumentException;
use OCA\Rechnungswerk\Db\ClubSettingsMapper;
use OCP\IGroupManager;

class ClubSettingsService {

	public function __construct(
		private readonly ClubSettingsMapper $mapper,
		private readonly IGroupManager $groupManager
	) {
	}

	/**
	 * @return array{
	 *     clubMode: bool,
	 *     memberGroup: string|null
	 * }
	 */
	public function get(): array {
		$settings = $this->mapper->findCompany();

		return [
			'clubMode' => (bool)$settings->getClubMode(),
			'memberGroup' => $settings->getMemberGroup(),
		];
	}

	/**
	 * @return array{
	 *     clubMode: bool,
	 *     memberGroup: string|null
	 * }
	 */
	public function save(
		bool $clubMode,
		?string $memberGroup
	): array {
		$memberGroup = $memberGroup !== null
			? trim($memberGroup)
			: null;

		if ($memberGroup === '') {
			$memberGroup = null;
		}

		if ($clubMode && $memberGroup === null) {
			throw new InvalidArgumentException(
				'Member group is required when club mode is enabled.'
			);
		}

		if (
			$memberGroup !== null
			&& $this->groupManager->get($memberGroup) === null
		) {
			throw new InvalidArgumentException(
				'Selected member group does not exist.'
			);
		}

		$settings = $this->mapper->findCompany();

		$settings->setClubMode($clubMode ? 1 : 0);
		$settings->setMemberGroup($memberGroup);

		$this->mapper->update($settings);

		return [
			'clubMode' => (bool)$settings->getClubMode(),
			'memberGroup' => $settings->getMemberGroup(),
		];
	}
}