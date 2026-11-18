<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Notification;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\TrialNoticeService;
use OCA\Rechnungswerk\Service\WerkPlusLinks;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IDateTimeFormatter;
use OCP\IDateTimeZone;
use OCP\IURLGenerator;
use OCP\L10N\IFactory;
use OCP\Notification\AlreadyProcessedException;
use OCP\Notification\IAction;
use OCP\Notification\INotification;
use OCP\Notification\INotifier;
use OCP\Notification\UnknownNotificationException;

class Notifier implements INotifier {

	public const SUBJECT_TRIAL = 'werkplus_trial';
	public const OBJECT_TRIAL = 'werkplus_trial';

	public function __construct(
		private readonly IFactory $l10nFactory,
		private readonly IURLGenerator $urlGenerator,
		private readonly IDateTimeFormatter $dates,
		private readonly IDateTimeZone $timeZones,
		private readonly ITimeFactory $timeFactory,
		private readonly EntitlementService $entitlement,
	) {
	}

	public function getID(): string {
		return Application::APP_ID;
	}

	public function getName(): string {
		return 'RechnungsWerk';
	}

	public function prepare(INotification $notification, string $languageCode): INotification {
		if ($notification->getApp() !== Application::APP_ID || $notification->getSubject() !== self::SUBJECT_TRIAL) {
			throw new UnknownNotificationException();
		}
		$l10n = $this->l10nFactory->get(Application::APP_ID, $languageCode);
		$params = $notification->getSubjectParameters();
		$trialEnd = (int)($params['trialEnd'] ?? 0);
		$isEnd = ($params['stage'] ?? '') === TrialNoticeService::STAGE_END;
		if (!$this->isCurrent((string)($params['stage'] ?? ''), $trialEnd)) {
			throw new AlreadyProcessedException();
		}
		if ($isEnd) {
			$notification->setParsedSubject($l10n->t('Der WerkPlus-Testzeitraum ist beendet.'));
			$notification->setParsedMessage($l10n->t('RechnungsWerk läuft im freien Umfang weiter, deine Daten bleiben erhalten.'));
		} else {
			// Zeitzone des Empfaengers, sonst zeigt die Glocke beim Testende kurz vor Mitternacht den Vortag.
			$timeZone = $this->timeZones->getTimeZone($trialEnd, $notification->getUser());
			$notification->setParsedSubject($l10n->t('Der WerkPlus-Testzeitraum endet am %s.', [
				$this->dates->formatDate($trialEnd, 'long', $timeZone, $l10n),
			]));
			$notification->setParsedMessage($l10n->t('Danach läuft RechnungsWerk im freien Umfang weiter, deine Daten bleiben erhalten.'));
		}
		$notification->setIcon($this->urlGenerator->getAbsoluteURL($this->urlGenerator->imagePath(Application::APP_ID, 'app-dark.svg')));
		$buy = $notification->createAction();
		$buy->setLabel('buy')
			->setParsedLabel($l10n->t('Jetzt kaufen'))
			->setLink(WerkPlusLinks::BUY, IAction::TYPE_WEB)
			->setPrimary(true);
		$notification->addParsedAction($buy);
		return $notification;
	}

	// Nach Kauf, naechster Stufe oder neuem Testzeitraum ist die Erinnerung ueberholt.
	private function isCurrent(string $stage, int $trialEnd): bool {
		$now = $this->timeFactory->getTime();
		$trialEndsAt = $this->entitlement->trialEndsAt();
		return match ($stage) {
			TrialNoticeService::STAGE_7D => $trialEndsAt === $trialEnd && $now < $trialEnd - 86400,
			TrialNoticeService::STAGE_1D => $trialEndsAt === $trialEnd && $now < $trialEnd,
			TrialNoticeService::STAGE_END => !($this->entitlement->tier() === 'werkplus' && $trialEndsAt === null),
			default => false,
		};
	}
}
