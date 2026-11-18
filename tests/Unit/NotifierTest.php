<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Notification\Notifier;
use OCA\Rechnungswerk\Service\EntitlementService;
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
	private int $now = self::TRIAL_END - 3 * 86400;
	private ?int $trialEndsAt = self::TRIAL_END;
	private string $tier = 'werkplus';

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

		$entitlement = $this->createMock(EntitlementService::class);
		$entitlement->method('trialEndsAt')->willReturnCallback(fn () => $this->trialEndsAt);
		$entitlement->method('tier')->willReturnCallback(fn () => $this->tier);

		$this->notifier = new Notifier($l10nFactory, $urlGenerator, $dates, $timeZones, $time, $entitlement);
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
	 * @return array<string, array{string, int, string}>
	 */
	public static function trialStages(): array {
		return [
			'7 Tage' => [TrialNoticeService::STAGE_7D, 3 * 86400, 'Der WerkPlus-Testzeitraum endet am 15.12.2026 Pacific/Auckland.'],
			'1 Tag' => [TrialNoticeService::STAGE_1D, 3600, 'Der WerkPlus-Testzeitraum endet am 15.12.2026 Pacific/Auckland.'],
			'Ende' => [TrialNoticeService::STAGE_END, -3600, 'Der WerkPlus-Testzeitraum ist beendet.'],
		];
	}

	#[DataProvider('trialStages')]
	public function testTrialNoticeOffersTheBuyLink(string $stage, int $left, string $subject): void {
		$this->now = self::TRIAL_END - $left;
		if ($stage === TrialNoticeService::STAGE_END) {
			$this->trialEndsAt = null;
			$this->tier = 'free';
		}
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

	private function prepareTrial(string $stage): void {
		$this->notifier->prepare($this->notification('rechnungswerk', Notifier::SUBJECT_TRIAL, ['stage' => $stage, 'trialEnd' => self::TRIAL_END]), 'de');
	}

	public function testSevenDayNoticeVanishesOnceTheOneDayStageIsDue(): void {
		$this->now = self::TRIAL_END - 86400;
		$this->expectException(AlreadyProcessedException::class);

		$this->prepareTrial(TrialNoticeService::STAGE_7D);
	}

	public function testOneDayNoticeVanishesAtTheTrialEnd(): void {
		$this->now = self::TRIAL_END;
		$this->expectException(AlreadyProcessedException::class);

		$this->prepareTrial(TrialNoticeService::STAGE_1D);
	}

	/**
	 * @return array<string, array{string}>
	 */
	public static function announcements(): array {
		return ['7 Tage' => [TrialNoticeService::STAGE_7D], '1 Tag' => [TrialNoticeService::STAGE_1D]];
	}

	#[DataProvider('announcements')]
	public function testAnnouncementsVanishAfterBuying(string $stage): void {
		$this->now = self::TRIAL_END - 2 * 86400;
		$this->trialEndsAt = null;
		$this->expectException(AlreadyProcessedException::class);

		$this->prepareTrial($stage);
	}

	#[DataProvider('announcements')]
	public function testAnnouncementsOfAnEarlierTrialVanish(string $stage): void {
		$this->now = self::TRIAL_END - 2 * 86400;
		$this->trialEndsAt = self::TRIAL_END + 30 * 86400;
		$this->expectException(AlreadyProcessedException::class);

		$this->prepareTrial($stage);
	}

	public function testEndNoticeVanishesAfterBuying(): void {
		$this->now = self::TRIAL_END + 86400;
		$this->trialEndsAt = null;
		$this->tier = 'werkplus';
		$this->expectException(AlreadyProcessedException::class);

		$this->prepareTrial(TrialNoticeService::STAGE_END);
	}

	public function testUnknownStageVanishes(): void {
		$this->expectException(AlreadyProcessedException::class);

		$this->prepareTrial('2d');
	}
}
