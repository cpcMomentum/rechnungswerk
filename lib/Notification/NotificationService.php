<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Notification;

use OCA\Rechnungswerk\AppInfo\Application;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IGroupManager;
use OCP\Notification\IManager as INotificationManager;
use Psr\Log\LoggerInterface;

class NotificationService {

	public function __construct(
		private readonly INotificationManager $notificationManager,
		private readonly IGroupManager $groupManager,
		private readonly ITimeFactory $timeFactory,
		private readonly LoggerInterface $logger,
	) {
	}

	/** Nur Nextcloud-Admins koennen den Schluessel eintragen, deshalb erinnern wir nur sie. */
	public function notifyAdminsAboutTrial(string $stage, int $trialEnd): void {
		foreach ($this->adminUserIds() as $userId) {
			try {
				$notification = $this->notificationManager->createNotification();
				$notification->setApp(Application::APP_ID)
					->setUser($userId)
					->setDateTime(new \DateTime('@' . $this->timeFactory->getTime()))
					->setObject(Notifier::OBJECT_TRIAL, $stage)
					->setSubject(Notifier::SUBJECT_TRIAL, ['stage' => $stage, 'trialEnd' => $trialEnd]);
				$this->notificationManager->notify($notification);
			} catch (\Throwable $e) {
				$this->logger->warning('RechnungsWerk: Erinnerung zum Testzeitraum nicht zugestellt', ['reason' => get_class($e) . ': ' . $e->getMessage()]);
			}
		}
	}

	/** @return string[] */
	private function adminUserIds(): array {
		$adminGroup = $this->groupManager->get('admin');
		if ($adminGroup === null) {
			return [];
		}
		return array_map(static fn ($user) => $user->getUID(), $adminGroup->getUsers());
	}
}
