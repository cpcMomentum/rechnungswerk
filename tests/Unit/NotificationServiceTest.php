<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Notification\NotificationService;
use OCA\Rechnungswerk\Notification\Notifier;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IGroup;
use OCP\IGroupManager;
use OCP\IUser;
use OCP\Notification\IManager as INotificationManager;
use OCP\Notification\INotification;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class NotificationServiceTest extends TestCase {

	private INotificationManager&MockObject $notificationManager;

	protected function setUp(): void {
		parent::setUp();
		$this->notificationManager = $this->createMock(INotificationManager::class);
	}

	private function serviceWithAdmins(LoggerInterface $logger, string ...$admins): NotificationService {
		$users = array_map(function (string $uid): IUser {
			$user = $this->createMock(IUser::class);
			$user->method('getUID')->willReturn($uid);
			return $user;
		}, $admins);
		$group = $this->createMock(IGroup::class);
		$group->method('getUsers')->willReturn($users);
		$groupManager = $this->createMock(IGroupManager::class);
		$groupManager->method('get')->with('admin')->willReturn($group);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturn(1796000000);
		return new NotificationService($this->notificationManager, $groupManager, $time, $logger);
	}

	public function testTrialReminderGoesToEachAdminOnly(): void {
		$recipients = [];
		$notification = $this->createMock(INotification::class);
		foreach (['setApp', 'setDateTime'] as $setter) {
			$notification->method($setter)->willReturnSelf();
		}
		$notification->method('setUser')->willReturnCallback(function (string $uid) use (&$recipients, $notification) {
			$recipients[] = $uid;
			return $notification;
		});
		$notification->expects($this->exactly(2))->method('setObject')->with(Notifier::OBJECT_TRIAL, '7d')->willReturnSelf();
		$notification->expects($this->exactly(2))->method('setSubject')
			->with(Notifier::SUBJECT_TRIAL, ['stage' => '7d', 'trialEnd' => 1796134323])->willReturnSelf();
		$this->notificationManager->method('createNotification')->willReturn($notification);
		$this->notificationManager->expects($this->exactly(2))->method('notify');

		$this->serviceWithAdmins($this->createMock(LoggerInterface::class), 'admin', 'zweitadmin')
			->notifyAdminsAboutTrial('7d', 1796134323);

		$this->assertSame(['admin', 'zweitadmin'], $recipients);
	}

	public function testWithoutAdminGroupNothingIsSent(): void {
		$groupManager = $this->createMock(IGroupManager::class);
		$groupManager->method('get')->willReturn(null);
		$this->notificationManager->expects($this->never())->method('notify');

		(new NotificationService($this->notificationManager, $groupManager, $this->createMock(ITimeFactory::class), $this->createMock(LoggerInterface::class)))
			->notifyAdminsAboutTrial('7d', 1796134323);
	}

	public function testTrialReminderFailureIsLoggedNotThrown(): void {
		$notification = $this->createMock(INotification::class);
		foreach (['setApp', 'setUser', 'setDateTime', 'setObject', 'setSubject'] as $setter) {
			$notification->method($setter)->willReturnSelf();
		}
		$this->notificationManager->method('createNotification')->willReturn($notification);
		$this->notificationManager->method('notify')->willThrowException(new \RuntimeException('kaputt'));
		$logger = $this->createMock(LoggerInterface::class);
		$logger->expects($this->once())->method('warning');

		$this->serviceWithAdmins($logger, 'admin')->notifyAdminsAboutTrial('end', 1796134323);
	}
}
