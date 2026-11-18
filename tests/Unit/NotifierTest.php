<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Notification\Notifier;
use OCA\Rechnungswerk\Service\TrialNoticeService;
use OCA\Rechnungswerk\Service\WerkPlusLinks;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IDateTimeFormatter;
use OCP\IDateTimeZone;
use OCP\IL10N;
use OCP\IURLGenerator;
use OCP\L10N\IFactory;
use OCP\Notification\AlreadyProcessedException;
use OCP\Notification\IAction;
use OCP\Notification\INotification;
use OCP\Notification\UnknownNotificationException;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

class NotifierTest extends TestCase {

	private const TRIAL_END = 1796134323;

	private Notifier $notifier;
	private int $now = self::TRIAL_END - 86400;

	protected function setUp(): void {
		parent::setUp();
		$urlGenerator = $this->createMock(IURLGenerator::class);
		$urlGenerator->method('imagePath')->willReturn('/apps/rechnungswerk/img/app-dark.svg');
		$urlGenerator->method('getAbsoluteURL')->willReturnCallback(static fn (string $path) => 'https://cloud.example' . $path);
		$l = $this->createMock(IL10N::class);
		$l->method('t')->willReturnCallback(static fn (string $text, array $params = []): string => vsprintf($text, $params));
		$l10nFactory = $this->createMock(IFactory::class);
		$l10nFactory->method('get')->willReturn($l);
		$dates = $this->createMock(IDateTimeFormatter::class);
		$dates->method('formatDate')->willReturnCallback(
			static fn (int $ts, string $format, \DateTimeZone $tz) => '15.12.2026 ' . $tz->getName()
		);
		$timeZones = $this->createMock(IDateTimeZone::class);
		$timeZones->method('getTimeZone')->willReturnCallback(
			static fn (int|false $ts, ?string $user) => new \DateTimeZone($user === 'admin' ? 'Pacific/Auckland' : 'UTC')
		);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturnCallback(fn () => $this->now);

		$this->notifier = new Notifier($l10nFactory, $urlGenerator, $dates, $timeZones, $time);
	}

	private function notification(string $app, string $subject, array $params = []): INotification {
		$notification = $this->createMock(INotification::class);
		$notification->method('getApp')->willReturn($app);
		$notification->method('getSubject')->willReturn($subject);
		$notification->method('getSubjectParameters')->willReturn($params);
		$notification->method('getUser')->willReturn('admin');
		$notification->method('setParsedMessage')->willReturnSelf();
		$notification->method('setIcon')->willReturnSelf();
		return $notification;
	}

	public function testForeignAppIsRejected(): void {
		$this->expectException(UnknownNotificationException::class);
		$this->notifier->prepare($this->notification('files', Notifier::SUBJECT_TRIAL), 'de');
	}

	public function testUnknownSubjectIsRejected(): void {
		$this->expectException(UnknownNotificationException::class);
		$this->notifier->prepare($this->notification('rechnungswerk', 'etwas_anderes'), 'de');
	}

	/**
	 * @return array<string, array{string, string}>
	 */
	public static function trialStages(): array {
		return [
			'7 Tage' => [TrialNoticeService::STAGE_7D, 'Der WerkPlus-Testzeitraum endet am 15.12.2026 Pacific/Auckland.'],
			'1 Tag' => [TrialNoticeService::STAGE_1D, 'Der WerkPlus-Testzeitraum endet am 15.12.2026 Pacific/Auckland.'],
			'Ende' => [TrialNoticeService::STAGE_END, 'Der WerkPlus-Testzeitraum ist beendet.'],
		];
	}

	#[DataProvider('trialStages')]
	public function testTrialNoticeOffersTheBuyLink(string $stage, string $subject): void {
		$notification = $this->notification('rechnungswerk', Notifier::SUBJECT_TRIAL, ['stage' => $stage, 'trialEnd' => self::TRIAL_END]);
		$action = $this->createMock(IAction::class);
		$action->method('setLabel')->willReturnSelf();
		$action->method('setParsedLabel')->willReturnSelf();
		$action->method('setPrimary')->willReturnSelf();
		$action->expects($this->once())->method('setLink')->with(WerkPlusLinks::BUY, IAction::TYPE_WEB)->willReturnSelf();
		$notification->method('createAction')->willReturn($action);
		$notification->expects($this->once())->method('addParsedAction')->with($action)->willReturnSelf();
		$notification->expects($this->once())->method('setParsedSubject')->with($subject)->willReturnSelf();
		$notification->expects($this->once())->method('setIcon')->with('https://cloud.example/apps/rechnungswerk/img/app-dark.svg')->willReturnSelf();

		$this->notifier->prepare($notification, 'de');
	}

	public function testLinksCarryOnlyTheAppName(): void {
		foreach (WerkPlusLinks::all() as $url) {
			$query = (string)parse_url($url, PHP_URL_QUERY);
			$this->assertContains($query, ['', 'app=rechnungswerk'], $url);
			$this->assertStringStartsWith('https://werkwolke.de/', $url);
		}
	}

	public function testAnAnnouncedEndVanishesOnceTheTrialIsOver(): void {
		$this->now = self::TRIAL_END + 60;
		$this->expectException(AlreadyProcessedException::class);

		$this->notifier->prepare($this->notification('rechnungswerk', Notifier::SUBJECT_TRIAL, ['stage' => TrialNoticeService::STAGE_7D, 'trialEnd' => self::TRIAL_END]), 'de');
	}
}
