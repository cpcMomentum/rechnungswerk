<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Notification\NotificationService;
use OCP\AppFramework\Utility\ITimeFactory;

/** Der Vermerk in `werkwolke` sorgt dafuer, dass bei mehreren Werk-Apps nur eine erinnert. */
class TrialNoticeService {

	public const STAGE_7D = '7d';
	public const STAGE_1D = '1d';
	public const STAGE_END = 'end';

	public function __construct(
		private readonly WerkwolkeStore $store,
		private readonly NotificationService $notifications,
		private readonly ITimeFactory $timeFactory,
	) {
	}

	/** Verschickt die faellige Stufe; ist eine spaetere schon faellig, entfaellt die fruehere. */
	public function sendDue(EntitlementToken $token): void {
		if (!$token->isTrial()) {
			return;
		}
		$until = self::trialEnd($token);
		$left = $until - $this->timeFactory->getTime();
		$stage = match (true) {
			$left <= 0 => self::STAGE_END,
			$left <= 86400 => self::STAGE_1D,
			$left <= 7 * 86400 => self::STAGE_7D,
			default => null,
		};
		if ($stage !== null) {
			$this->send($stage, $until);
		}
	}

	/** Vor dem Loeschen des Tokens bei KEY_EXPIRED, danach weiss keine App mehr, dass es ein Test war. */
	public function sendEnd(EntitlementToken $token): void {
		if ($token->isTrial()) {
			$this->send(self::STAGE_END, self::trialEnd($token));
		}
	}

	// `exp` nur als Vermerk-Wert, angezeigt wird es nie.
	private static function trialEnd(EntitlementToken $token): int {
		return $token->licenseValidUntil ?? $token->expiresAt;
	}

	// Erst der Vermerk, dann der Versand: lieber eine Erinnerung verlieren als doppelt schicken.
	private function send(string $stage, int $until): void {
		$value = (string)$until;
		if ($this->store->getTrialNotice($stage) === $value) {
			return;
		}
		if (!$this->store->setTrialNotice($stage, $value)) {
			return;
		}
		$this->notifications->notifyAdminsAboutTrial($stage, $until);
	}
}
