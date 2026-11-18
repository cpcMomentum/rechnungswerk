<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Exception\WerkPlusApiException;
use OCA\Rechnungswerk\Notification\NotificationService;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\TrialNoticeService;
use OCA\Rechnungswerk\Service\WerkPlusClient;
use OCA\Rechnungswerk\Service\WerkwolkeStore;
use OCP\App\IAppManager;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IAppConfig;
use OCP\IConfig;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class EntitlementServiceTest extends TestCase {
	use EntitlementTokenFactory;
	use TraceStrings;

	private const KEY = 'wp_B7K2M9QX4TN6RJ8VC3HD5PKW2FSY7GZA3EFA69B6';
	private const OTHER_KEY = 'wp_ANDERERSCHLUESSEL';

	/** @var array<string, string> Schluessel „app/key“ */
	private array $config = [];
	/** @var array<string, bool> */
	private array $sensitive = [];
	/** @var array<string, string> */
	private array $installedApps = [];
	private int $now = self::NOW;
	private WerkPlusClient&MockObject $client;
	private LoggerInterface&MockObject $logger;
	private NotificationService&MockObject $notifications;

	protected function setUp(): void {
		parent::setUp();
		$this->config = [];
		$this->sensitive = [];
		$this->installedApps = ['rechnungswerk' => '0.8.0'];
		$this->now = self::NOW;
		$this->client = $this->createMock(WerkPlusClient::class);
		$this->logger = $this->createMock(LoggerInterface::class);
		$this->notifications = $this->createMock(NotificationService::class);
	}

	private function service(): EntitlementService {
		$appConfig = $this->createMock(IAppConfig::class);
		$appConfig->method('getValueString')->willReturnCallback(
			fn (string $app, string $key, string $default = '') => $this->config["$app/$key"] ?? $default
		);
		$appConfig->method('setValueString')->willReturnCallback(
			function (string $app, string $key, string $value, bool $lazy = false, bool $sensitive = false): bool {
				$this->config["$app/$key"] = $value;
				$this->sensitive["$app/$key"] = $sensitive;
				return true;
			}
		);
		$appConfig->method('deleteKey')->willReturnCallback(function (string $app, string $key): void {
			unset($this->config["$app/$key"]);
		});
		$appConfig->expects($this->never())->method('getValueInt');

		$config = $this->createMock(IConfig::class);
		$config->method('getSystemValueString')->willReturnCallback(
			fn (string $key, string $default = '') => $key === 'instanceid' ? self::INSTANCE_ID : $default
		);
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturnCallback(fn () => $this->now);
		$appManager = $this->createMock(IAppManager::class);
		$appManager->method('getAppVersion')->willReturnCallback(fn (string $app) => $this->installedApps[$app] ?? '0');
		$appManager->method('isEnabledForAnyone')->willReturnCallback(fn (string $app) => isset($this->installedApps[$app]));

		$store = new WerkwolkeStore($appConfig);
		return new EntitlementService(
			$appConfig,
			$config,
			$store,
			$time,
			$this->client,
			$this->verifier(),
			$appManager,
			$this->logger,
			new TrialNoticeService($store, $this->notifications, $time),
		);
	}

	private function shared(string $key): ?string {
		return $this->config["werkwolke/$key"] ?? null;
	}

	private function own(string $key): ?string {
		return $this->config["rechnungswerk/$key"] ?? null;
	}

	private function storeToken(array $overrides = []): void {
		$this->config['werkwolke/store_version'] = '1';
		$this->config['werkwolke/key'] = self::KEY;
		$this->config['werkwolke/token'] = $this->token($this->claims($overrides));
	}

	/**
	 * @return array{token: string, expiresAt: string, graceUntil: string}
	 */
	private function response(array $overrides = []): array {
		return ['token' => $this->token($this->claims($overrides)), 'expiresAt' => 'x', 'graceUntil' => 'y'];
	}

	/**
	 * @return array<string, array{string, string}>
	 */
	public static function contractVectors(): array {
		return [
			'Vektor 1' => ['ocx7k2m9qz4t', '8cb3c100-9e4c-5375-9e63-1f4d122ea315'],
			'Vektor 2' => ['oc1a2b3c4d5e', '62536685-aff2-57b3-b406-0cdac03ffb2b'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('contractVectors')]
	public function testInstanceUuidMatchesTheContractVectors(string $instanceId, string $uuid): void {
		$this->assertSame($uuid, EntitlementService::deriveInstanceUuid($instanceId));
	}

	public function testInstanceUuidIsDerivedFromTheInstanceIdAndNeverStored(): void {
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID)
			->willReturn($this->response());
		$service = $this->service();
		$service->activate(self::KEY);

		$this->assertSame(self::UUID, $service->getInstanceUuid());
		$this->assertSame(self::UUID, $service->getStatus()['instanceUuid']);
		$this->assertEmpty(array_filter(array_keys($this->config), fn ($k) => str_contains($k, 'uuid')));
	}

	public function testWithoutTokenEverythingIsFree(): void {
		$this->client->expects($this->never())->method('validate');
		$service = $this->service();

		$this->assertSame(EntitlementService::STATE_NONE, $service->state());
		$this->assertSame('free', $service->tier());
		$this->assertFalse($service->hasFeature('tenants'));
	}

	public function testValidTokenUnlocksFeaturesWithoutAnyNetworkCall(): void {
		$this->storeToken();
		$this->client->expects($this->never())->method('validate');
		$service = $this->service();

		$this->assertSame('werkplus', $service->tier());
		$this->assertTrue($service->hasFeature('tenants'));
		$this->assertTrue($service->hasFeature('inbound'));
		$this->assertFalse($service->hasFeature('sepa_export'));
		$service->getStatus();
	}

	public function testKeyEnteredInAnotherWerkAppShowsAnActiveLicense(): void {
		$this->storeToken();
		$this->client->expects($this->never())->method('validate');
		$status = $this->service()->getStatus();

		$this->assertTrue($status['keySet']);
		$this->assertSame('valid', $status['state']);
		$this->assertSame(gmdate('Y-m-d\TH:i:s\Z', self::NOW), $status['lastCheckAt']);
	}

	public function testGraceKeepsFeaturesAndAfterGraceFallsBackToFree(): void {
		$this->storeToken();
		$this->now = self::NOW + 31 * 86400;
		$service = $this->service();
		$this->assertSame('grace', $service->state());
		$this->assertTrue($service->hasFeature('tenants'));

		$this->now = self::NOW + 45 * 86400;
		$service = $this->service();
		$this->assertSame('expired', $service->state());
		$this->assertSame('free', $service->tier());
		$this->assertFalse($service->hasFeature('tenants'));
	}

	public function testStateIsRecomputedOnEveryCallInALongRunningProcess(): void {
		$this->storeToken();
		$service = $this->service();
		$this->assertSame('valid', $service->state());

		$this->now = self::NOW + 31 * 86400;
		$this->assertSame('grace', $service->state());

		$this->now = self::NOW + 45 * 86400;
		$this->assertSame('expired', $service->state());
		$this->assertFalse($service->hasFeature('tenants'));
	}

	public function testALongRunningProcessSeesATokenStoredByAnotherWerkApp(): void {
		$service = $this->service();
		$this->assertSame(EntitlementService::STATE_NONE, $service->state());

		$this->storeToken();
		$this->assertSame('valid', $service->state());
		$this->assertTrue($service->hasFeature('tenants'));
	}

	public function testTokenOfAnotherInstallationGrantsNothing(): void {
		$this->storeToken(['sub' => '00000000-0000-4000-8000-000000000000']);
		$service = $this->service();

		$this->assertSame(EntitlementService::STATE_INVALID, $service->state());
		$this->assertFalse($service->hasFeature('tenants'));
	}

	public function testUnknownFlagIsAProgrammingError(): void {
		$this->expectException(\InvalidArgumentException::class);
		$this->service()->hasFeature('pw_multi_board');
	}

	public function testActivateStoresKeyAndTokenInTheSharedStore(): void {
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID, ['rechnungswerk' => '0.8.0'])
			->willReturn($this->response());
		$service = $this->service();
		$service->activate('  ' . self::KEY . ' ');

		$this->assertSame('1', $this->shared('store_version'));
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertTrue($this->sensitive['werkwolke/key']);
		$this->assertNotNull($this->shared('token'));
		$this->assertTrue($this->sensitive['werkwolke/token']);
		$this->assertNull($this->own('werkplus_key'));
		$this->assertNull($this->own('werkplus_token'));
		$this->assertTrue($service->hasFeature('tenants'));
		$this->assertNull($service->lastError());
	}

	public function testAppVersionsListEveryEnabledWerkAppByItsAppId(): void {
		$this->installedApps += ['projektwerk' => '0.4.26', 'worktime' => '0.24.4', 'deck' => '1.15.0'];
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID, ['rechnungswerk' => '0.8.0', 'projektwerk' => '0.4.26', 'worktime' => '0.24.4'])
			->willReturn($this->response());
		$this->service()->activate(self::KEY);
	}

	public function testFailedActivationStoresNoKey(): void {
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_UNKNOWN', 'Schlüssel unbekannt'));
		$service = $this->service();
		try {
			$service->activate(self::KEY);
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			$this->assertSame('KEY_UNKNOWN', $e->getErrorCode());
		}

		$this->assertNull($this->shared('key'));
		$this->assertNull($service->lastError());
	}

	public function testKeyIsNormalizedLikeTheServerDoes(): void {
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY)
			->willReturn($this->response());
		$this->service()->activate(' WP_b7k2-m9qx-4tn6 rj8v-c3hd-5pkw-2fsy-7gza 3efa69b6 ');

		$this->assertSame(self::KEY, $this->shared('key'));
	}

	public function testRevokedStoredKeyInDisplayFormStillFallsBackToFree(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_REVOKED'));
		$service = $this->service();
		try {
			$service->activate('wp_b7k2-m9qx-4tn6-rj8v-c3hd-5pkw-2fsy-7gza-3efa-69b6');
		} catch (WerkPlusApiException) {
		}

		$this->assertSame('free', $service->tier());
	}

	public function testFailedNewKeyDoesNotDelayRenewalOfTheStoredOne(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_UNKNOWN'));
		$service = $this->service();
		try {
			$service->activate('wp_VERTIPPT');
		} catch (WerkPlusApiException) {
		}

		$this->assertNull($this->own('werkplus_last_attempt_at'));
		$this->assertNull($this->own('werkplus_last_error'));
		$this->assertTrue($service->isRefreshDue());
	}

	public function testNeitherKeyNorTokenAppearInATraceOrTheLog(): void {
		$jwt = $this->token($this->claims(), [], self::foreignKey()['private']);
		$this->client->method('validate')->willReturn(['token' => $jwt, 'expiresAt' => 'x', 'graceUntil' => 'y']);
		$logged = [];
		$this->logger->method('warning')->willReturnCallback(function (string $msg, array $context = []) use (&$logged): void {
			$logged[] = $context;
		});
		try {
			$this->service()->activate(self::KEY);
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			self::assertNotInTrace(self::KEY, $e);
			self::assertNotInTrace(explode('.', $jwt)[2], $e);
		}
		$this->assertSame([['reason' => 'Signatur ungueltig']], $logged);
	}

	public function testFailedRenewalIsLoggedWithoutTheException(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->client->method('validate')->willThrowException(new WerkPlusApiException(WerkPlusClient::UNREACHABLE));
		$this->logger->expects($this->once())->method('info')
			->with($this->anything(), ['reason' => WerkPlusApiException::class . ': WerkPlus: UNREACHABLE']);

		$this->service()->refreshIfDue();
	}

	public function testRevokedNewKeyDoesNotCostTheStoredToken(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_REVOKED'));
		$service = $this->service();
		try {
			$service->activate(self::OTHER_KEY);
		} catch (WerkPlusApiException) {
		}

		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertTrue($service->hasFeature('tenants'));
	}

	public function testNewKeyReplacesKeyAndTokenTogether(): void {
		$this->storeToken(['iat' => self::NOW + 100]);
		$this->client->method('validate')->willReturn($this->response(['features' => ['sepa_export']]));
		$service = $this->service();
		$service->activate(self::OTHER_KEY);

		$this->assertSame(self::OTHER_KEY, $this->shared('key'));
		$this->assertTrue($service->hasFeature('sepa_export'));
		$this->assertFalse($service->hasFeature('tenants'));
	}

	public function testRevokedStoredKeyFallsBackToFree(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_REVOKED'));
		$service = $this->service();
		try {
			$service->refresh();
		} catch (WerkPlusApiException) {
		}

		$this->assertSame('free', $service->tier());
		$this->assertNull($this->shared('token'));
		$this->assertSame(self::KEY, $this->shared('key'));
	}

	/**
	 * @return array<string, array{string}>
	 */
	public static function transientErrors(): array {
		return [
			'RATE_LIMITED' => ['RATE_LIMITED'],
			'SERVER_ERROR' => ['SERVER_ERROR'],
			'UNREACHABLE' => [WerkPlusClient::UNREACHABLE],
			'INVALID_RESPONSE' => [WerkPlusClient::INVALID_RESPONSE],
			'INSTANCE_LIMIT_REACHED' => ['INSTANCE_LIMIT_REACHED'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('transientErrors')]
	public function testFailedRenewalKeepsTheOldToken(string $code): void {
		$this->storeToken();
		$before = $this->shared('token');
		$this->client->method('validate')->willThrowException(new WerkPlusApiException($code));
		$service = $this->service();
		try {
			$service->refresh();
		} catch (WerkPlusApiException) {
		}

		$this->assertSame($before, $this->shared('token'));
		$this->assertTrue($service->hasFeature('tenants'));
	}

	public function testAnOlderTokenNeverReplacesANewerOne(): void {
		$this->storeToken(['iat' => self::NOW + 600]);
		$newer = $this->shared('token');
		$this->now = self::NOW + 600;
		$this->client->method('validate')->willReturn($this->response(['iat' => self::NOW]));
		$this->service()->refresh();

		$this->assertSame($newer, $this->shared('token'));
	}

	public function testANewerTokenReplacesTheStoredOne(): void {
		$this->storeToken();
		$this->now = self::NOW + 600;
		$fresh = $this->response(['iat' => self::NOW + 600]);
		$this->client->method('validate')->willReturn($fresh);
		$this->service()->refresh();

		$this->assertSame($fresh['token'], $this->shared('token'));
	}

	public function testTokenThatFailsLocalVerificationIsNotStored(): void {
		$this->client->method('validate')->willReturn([
			'token' => $this->token($this->claims(), [], self::foreignKey()['private']),
			'expiresAt' => 'x',
			'graceUntil' => 'y',
		]);
		$service = $this->service();
		try {
			$service->activate(self::KEY);
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			$this->assertSame(EntitlementService::TOKEN_REJECTED, $e->getErrorCode());
		}

		$this->assertNull($this->shared('token'));
		$this->assertNull($this->shared('key'));
	}

	public function testInvalidInputIsRejectedBeforeAnyCall(): void {
		$this->client->expects($this->never())->method('validate');
		$service = $this->service();
		foreach (['', 'wp_<script>', 'wp_' . str_repeat('A', 130)] as $key) {
			try {
				$service->activate($key);
				$this->fail('Ausnahme erwartet fuer ' . $key);
			} catch (\InvalidArgumentException) {
			}
		}
	}

	public function testEmptyKeyReusesTheStoredOne(): void {
		$this->storeToken();
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID, $this->anything())
			->willReturn($this->response());
		$this->service()->activate('');
	}

	public function testFreshTokenIsNotRenewed(): void {
		$this->storeToken();
		$this->now = self::NOW + 6 * 86400;
		$this->assertFalse($this->service()->isRefreshDue());
	}

	public function testTokenOlderThanSevenDaysIsRenewed(): void {
		$this->storeToken();
		$this->now = self::NOW + 7 * 86400;
		$this->assertTrue($this->service()->isRefreshDue());
	}

	public function testTokenCloseToExpiryIsRenewed(): void {
		$this->storeToken(['exp' => self::NOW + 10 * 86400, 'graceUntil' => self::NOW + 10 * 86400]);
		$this->now = self::NOW + 4 * 86400;
		$this->assertTrue($this->service()->isRefreshDue());
	}

	public function testNoRenewalWithoutKeyOrRightAfterAnAttempt(): void {
		$this->assertFalse($this->service()->isRefreshDue());

		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->config['rechnungswerk/werkplus_last_attempt_at'] = (string)($this->now - 3600);
		$this->assertFalse($this->service()->isRefreshDue());
	}

	public function testRetryWaitIsShorterThanTheJobInterval(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;

		$this->config['rechnungswerk/werkplus_last_attempt_at'] = (string)($this->now - 6 * 3600 + 60);
		$this->assertTrue($this->service()->isRefreshDue(), 'Ein Lauf kurz vor dem vollen Jobtakt muss erneuern');

		$this->config['rechnungswerk/werkplus_last_attempt_at'] = (string)($this->now - 5 * 3600 + 60);
		$this->assertFalse($this->service()->isRefreshDue());
	}

	public function testPermanentErrorsAreRetriedOnlyOnceADay(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'KEY_REVOKED', 'serverMessage' => '', 'at' => $this->now - 7 * 3600]);
		$this->assertFalse($this->service()->isRefreshDue());

		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'KEY_REVOKED', 'serverMessage' => '', 'at' => $this->now - 25 * 3600]);
		$this->assertTrue($this->service()->isRefreshDue());

		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'SERVER_ERROR', 'serverMessage' => '', 'at' => $this->now - 7 * 3600]);
		$this->assertTrue($this->service()->isRefreshDue());
	}

	public function testTrialStoresKeyAndTokenAndReturnsTheKey(): void {
		$this->installedApps['projektwerk'] = '0.4.26';
		$this->client->expects($this->never())->method('validate');
		$this->client->expects($this->once())->method('trial')
			->with(self::UUID, ['rechnungswerk' => '0.8.0', 'projektwerk' => '0.4.26'])
			->willReturn(['key' => strtolower(self::KEY)] + $this->response());
		$service = $this->service();

		$this->assertSame(self::KEY, $service->startTrial());
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertTrue($this->sensitive['werkwolke/key']);
		$this->assertNotNull($this->shared('token'));
		$this->assertTrue($this->sensitive['werkwolke/token']);
		$this->assertTrue($service->hasFeature('tenants'));
		$this->assertNull($service->lastError());
	}

	public function testNoTrialWhenAKeyIsStored(): void {
		$this->storeToken();
		$this->client->expects($this->never())->method('trial');
		$this->expectException(\InvalidArgumentException::class);
		$this->expectExceptionMessage('keySet');
		$this->service()->startTrial();
	}

	public function testRefusedTrialStoresNothing(): void {
		$this->client->method('trial')->willThrowException(new WerkPlusApiException('TRIAL_ALREADY_USED', 'schon genutzt'));
		$service = $this->service();
		try {
			$service->startTrial();
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			$this->assertSame('TRIAL_ALREADY_USED', $e->getErrorCode());
		}

		$this->assertNull($this->shared('key'));
		$this->assertNull($this->shared('token'));
		$this->assertNull($service->getStatus()['lastError']);
	}

	public function testTrialKeyIsKeptWhenItsTokenFailsVerification(): void {
		$this->client->method('trial')->willReturn([
			'key' => self::KEY,
			'token' => $this->token($this->claims(), [], self::foreignKey()['private']),
			'expiresAt' => 'x',
			'graceUntil' => 'y',
		]);
		$service = $this->service();

		$this->assertSame(self::KEY, $service->startTrial());
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertNull($this->shared('token'));
		$this->assertSame(EntitlementService::TOKEN_REJECTED, $service->getStatus()['lastError']['code']);
		$this->assertSame('free', $service->tier());
		$this->assertTrue($service->isRefreshDue());
	}

	public function testTrialKeyIsKeptWhenTheTokenIsMissing(): void {
		$this->client->method('trial')->willReturn(['key' => self::KEY, 'token' => '', 'expiresAt' => '', 'graceUntil' => '']);
		$service = $this->service();

		$this->assertSame(self::KEY, $service->startTrial());
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertSame(EntitlementService::TOKEN_REJECTED, $service->lastError()['code']);
	}

	public function testRefreshIfDueSwallowsFailures(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->client->expects($this->once())->method('validate')->willThrowException(new WerkPlusApiException(WerkPlusClient::UNREACHABLE));
		$service = $this->service();
		$service->refreshIfDue();

		$this->assertSame(WerkPlusClient::UNREACHABLE, $service->lastError()['code']);
		$this->assertTrue($service->hasFeature('tenants'));
	}

	public function testRefreshIfDueDoesNothingWhenNotDue(): void {
		$this->storeToken();
		$this->client->expects($this->never())->method('validate');
		$this->service()->refreshIfDue();
	}

	public function testRemoveKeyClearsTheSharedLicenseAndOwnRenewalData(): void {
		$this->storeToken();
		$this->config['rechnungswerk/werkplus_last_attempt_at'] = (string)self::NOW;
		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'SERVER_ERROR', 'serverMessage' => '', 'at' => self::NOW]);
		$service = $this->service();
		$service->removeKey();

		$this->assertSame(['werkwolke/store_version' => '1'], $this->config);
		$this->assertSame('free', $service->tier());
	}

	public function testLegacyKeyIsTakenOverOnceIntoTheEmptySharedStore(): void {
		$this->config['rechnungswerk/werkplus_key'] = self::KEY;
		$this->config['rechnungswerk/werkplus_token'] = $this->token($this->claims(['sub' => '3f2a1b64-9c8d-4e7f-a1b2-c3d4e5f60718']));
		$this->config['rechnungswerk/werkplus_instance_uuid'] = '3f2a1b64-9c8d-4e7f-a1b2-c3d4e5f60718';
		$this->config['rechnungswerk/werkplus_last_check_at'] = (string)self::NOW;
		$this->config['rechnungswerk/werkplus_employee_bucket'] = '6-20';
		$this->config['rechnungswerk/werkplus_last_attempt_at'] = (string)(self::NOW - 60);
		$service = $this->service();

		$this->assertTrue($service->getStatus()['keySet']);
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertTrue($this->sensitive['werkwolke/key']);
		$this->assertNull($this->shared('token'));
		$this->assertSame([], array_filter($this->config, fn ($k) => str_starts_with($k, 'rechnungswerk/'), ARRAY_FILTER_USE_KEY));
		$this->assertTrue($service->isRefreshDue());
	}

	public function testLegacyKeyNeverOverwritesASharedKey(): void {
		$this->storeToken();
		$this->config['rechnungswerk/werkplus_key'] = self::OTHER_KEY;
		$this->logger->expects($this->once())->method('warning')
			->with($this->logicalAnd($this->stringContains('…SSEL'), $this->stringContains('…69B6')));

		$this->assertSame('…69B6', $this->service()->getStatus()['keyHint']);
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertNull($this->own('werkplus_key'));
	}

	public function testStoreOfANewerFormatIsReadButNeverWritten(): void {
		$this->storeToken();
		$this->config['werkwolke/store_version'] = '2';
		$this->config['rechnungswerk/werkplus_key'] = self::OTHER_KEY;
		$this->now = self::NOW + 31 * 86400;
		$before = $this->config;
		$this->client->expects($this->never())->method('validate');
		$this->client->expects($this->never())->method('trial');
		$service = $this->service();

		$status = $service->getStatus();
		$this->assertTrue($status['storeTooNew']);
		$this->assertTrue($status['keySet']);
		$this->assertSame('…69B6', $status['keyHint']);
		$this->assertSame('grace', $status['state']);
		$this->assertSame('werkplus', $service->tier());
		$this->assertFalse($service->isRefreshDue());
		$service->refreshIfDue();
		foreach ([fn () => $service->activate(self::KEY), fn () => $service->startTrial(), fn () => $service->removeKey(), fn () => $service->refresh()] as $action) {
			try {
				$action();
				$this->fail('Ausnahme erwartet');
			} catch (\InvalidArgumentException $e) {
				$this->assertSame('storeTooNew', $e->getMessage());
			}
		}
		$this->assertSame($before, $this->config);
	}

	public function testStatusHidesAnOldErrorWhenNoKeyIsStored(): void {
		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'UNREACHABLE', 'serverMessage' => '', 'at' => self::NOW]);
		$this->assertNull($this->service()->getStatus()['lastError']);

		$this->storeToken();
		$this->assertSame('UNREACHABLE', $this->service()->getStatus()['lastError']['code']);
	}

	public function testStatusMasksTheKey(): void {
		$this->storeToken();
		$status = $this->service()->getStatus();

		$this->assertSame('…69B6', $status['keyHint']);
		$this->assertStringNotContainsString(self::KEY, (string)json_encode($status));
		$this->assertSame('valid', $status['state']);
		$this->assertSame(['tenants', 'inbound', 'pw_multi_board'], $status['features']);
		$this->assertFalse($status['storeTooNew']);
	}

	public function testStatusShowsTheLicensedEmployeesFromTheToken(): void {
		$this->storeToken(['licensedEmployees' => 12]);

		$this->assertSame(12, $this->service()->getStatus()['licensedEmployees']);
	}

	public function testStatusHasNoLicensedEmployeesWithoutTheClaim(): void {
		$this->storeToken();
		$status = $this->service()->getStatus();

		$this->assertNull($status['licensedEmployees']);
		$this->assertArrayNotHasKey('employeeBucket', $status);
	}

	public function testTakingOverALegacyKeyKeepsATokenAlreadyInTheSharedStore(): void {
		$this->config['werkwolke/token'] = 'vorhanden';
		$this->config['rechnungswerk/werkplus_key'] = self::KEY;
		$this->service()->getStatus();

		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertSame('vorhanden', $this->shared('token'));
	}

	public function testATokenWithoutKeyGrantsNothing(): void {
		$this->storeToken();
		unset($this->config['werkwolke/key']);

		$this->assertSame(EntitlementService::STATE_NONE, $this->service()->state());
		$this->assertFalse($this->service()->hasFeature('tenants'));
	}

	public function testRenewalFinishingAfterTheKeyWasRemovedStoresNothing(): void {
		$this->storeToken();
		$this->now = self::NOW + 600;
		$this->client->method('validate')->willReturnCallback(function (): array {
			unset($this->config['werkwolke/key'], $this->config['werkwolke/token']);
			return $this->response(['iat' => self::NOW + 600]);
		});
		$this->service()->refresh();

		$this->assertNull($this->shared('token'));
	}

	public function testRevocationOfAnOldKeyDoesNotDropTheTokenOfANewOne(): void {
		$this->storeToken();
		$this->client->method('validate')->willReturnCallback(function (): array {
			$this->config['werkwolke/key'] = self::OTHER_KEY;
			$this->config['werkwolke/token'] = 'token-des-neuen-schluessels';
			throw new WerkPlusApiException('KEY_REVOKED');
		});
		try {
			$this->service()->refresh();
		} catch (WerkPlusApiException) {
		}

		$this->assertSame('token-des-neuen-schluessels', $this->shared('token'));
	}

	public function testAnErrorOfAnEarlierKeyIsNoLongerShown(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('SERVER_ERROR'));
		try {
			$this->service()->refresh();
		} catch (WerkPlusApiException) {
		}
		$this->assertSame('SERVER_ERROR', $this->service()->getStatus()['lastError']['code']);

		$this->config['werkwolke/key'] = self::OTHER_KEY;
		$this->assertNull($this->service()->getStatus()['lastError']);
	}

	public function testAnErrorIsOverriddenByALaterRenewalOfAnotherWerkApp(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'KEY_EXPIRED', 'serverMessage' => '', 'at' => self::NOW + 8 * 86400 - 3600]);
		$this->assertSame('KEY_EXPIRED', $this->service()->getStatus()['lastError']['code']);

		$this->config['werkwolke/token'] = $this->token($this->claims(['iat' => self::NOW + 8 * 86400 - 60, 'exp' => self::NOW + 38 * 86400]));
		$this->assertNull($this->service()->getStatus()['lastError']);
	}

	public function testALegacyErrorDoesNotDelayTheFirstRenewalAfterTheTakeover(): void {
		$this->config['rechnungswerk/werkplus_key'] = self::KEY;
		$this->config['rechnungswerk/werkplus_last_error'] = json_encode(['code' => 'INSTANCE_LIMIT_REACHED', 'serverMessage' => '', 'at' => self::NOW - 60]);

		$this->assertTrue($this->service()->isRefreshDue());
	}

	// --- Testzeitraum und Laufzeit aus dem Token ---

	private const TRIAL_END = self::NOW + 30 * 86400;

	private function storeTrialToken(array $overrides = []): void {
		$this->storeToken(['trial' => true, 'licenseValidUntil' => self::TRIAL_END] + $overrides);
	}

	public function testTrialTokenShowsTrialAndItsEnd(): void {
		$this->storeTrialToken();
		$status = $this->service()->getStatus();

		$this->assertTrue($status['trial']);
		$this->assertSame(gmdate('Y-m-d\TH:i:s\Z', self::TRIAL_END), $status['licenseValidUntil']);
		$this->assertFalse($status['trialEnded']);
	}

	public function testBoughtTokenShowsTheLicenseEndNotTheTokenEnd(): void {
		$yearEnd = self::NOW + 365 * 86400;
		$this->storeToken(['trial' => false, 'licenseValidUntil' => $yearEnd]);
		$status = $this->service()->getStatus();

		$this->assertFalse($status['trial']);
		$this->assertSame(gmdate('Y-m-d\TH:i:s\Z', $yearEnd), $status['licenseValidUntil']);
	}

	public function testWithoutTheClaimsThereIsNoLicenseEndAndNoTrial(): void {
		$this->storeToken(['trial' => null, 'licenseValidUntil' => null]);
		$status = $this->service()->getStatus();

		$this->assertFalse($status['trial']);
		$this->assertNull($status['licenseValidUntil'], 'exp darf nie als Laufzeit erscheinen');
	}

	public function testATokenWithoutTrialClaimIsRenewedRightAway(): void {
		$this->storeToken(['trial' => null]);
		$this->assertTrue($this->service()->isRefreshDue());

		$this->storeToken(['trial' => false]);
		$this->assertFalse($this->service()->isRefreshDue());
	}

	public function testTheImmediateRenewalHappensOnceADayAtMostWhenTheServerStillOmitsTrial(): void {
		$this->storeToken(['trial' => null]);
		// Ein alter Server liefert wieder ein Token ohne `trial`.
		$this->client->expects($this->once())->method('validate')
			->willReturn($this->response(['trial' => null, 'iat' => self::NOW + 60]));
		$this->now = self::NOW + 120;
		$this->service()->refreshIfDue();

		$this->now = self::NOW + 6 * 3600;
		$this->assertFalse($this->service()->isRefreshDue(), 'Keine Schleife im Sechs-Stunden-Takt');
		$this->now = self::NOW + 86400 + 120;
		$this->assertTrue($this->service()->isRefreshDue(), 'Nach einem Tag ein zweiter Versuch');
	}

	/**
	 * @return array<string, array{string, bool}>
	 */
	public static function keyExpiredAnswers(): array {
		return [
			'Testzeitraum' => ['{"trial":true}', true],
			'gekauft' => ['{"trial":false}', false],
			'aelterer Server' => ['{}', false],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('keyExpiredAnswers')]
	public function testKeyExpiredRemembersWhetherItWasATrial(string $error, bool $trialEnded): void {
		$this->storeToken();
		$isTrial = json_decode($error, true)['trial'] ?? false;
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_EXPIRED', '', null, $isTrial));
		try {
			$this->service()->refresh();
		} catch (WerkPlusApiException) {
		}

		$status = $this->service()->getStatus();
		$this->assertNull($this->shared('token'));
		$this->assertSame(self::KEY, $this->shared('key'));
		$this->assertSame($trialEnded, $status['trialEnded']);
		$this->assertArrayNotHasKey('werkwolke/trial_notice_end', $this->sensitive, 'Der Zustand steht in der eigenen Konfiguration');
	}

	public function testTheEndNoticeGoesOutBeforeTheTrialTokenIsDropped(): void {
		$this->storeTrialToken();
		$this->now = self::TRIAL_END + 3600;
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_EXPIRED', '', null, true));
		$this->notifications->expects($this->once())->method('notifyAdminsAboutTrial')
			->with(TrialNoticeService::STAGE_END, self::TRIAL_END)
			->willReturnCallback(fn () => $this->assertNotNull($this->shared('token'), 'Token muss beim Versand noch da sein'));
		try {
			$this->service()->refresh();
		} catch (WerkPlusApiException) {
		}

		$this->assertSame((string)self::TRIAL_END, $this->shared('trial_notice_end'));
		$this->assertNull($this->shared('token'));
	}

	public function testNoEndNoticeWhenABoughtKeyExpires(): void {
		$this->storeToken(['trial' => false, 'licenseValidUntil' => self::NOW + 86400]);
		$this->now = self::NOW + 2 * 86400;
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_EXPIRED'));
		$this->notifications->expects($this->never())->method('notifyAdminsAboutTrial');
		try {
			$this->service()->refresh();
		} catch (WerkPlusApiException) {
		}
	}

	/**
	 * @return array<string, array{int, ?string}>
	 */
	public static function trialStages(): array {
		return [
			'10 Tage vorher' => [10 * 86400, null],
			'7 Tage vorher' => [7 * 86400, TrialNoticeService::STAGE_7D],
			'3 Tage vorher' => [3 * 86400, TrialNoticeService::STAGE_7D],
			'1 Tag vorher' => [86400, TrialNoticeService::STAGE_1D],
			'2 Stunden vorher' => [7200, TrialNoticeService::STAGE_1D],
			'danach' => [-3600, TrialNoticeService::STAGE_END],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('trialStages')]
	public function testTheDueStageIsSentOnce(int $left, ?string $stage): void {
		$this->storeTrialToken();
		$this->now = self::TRIAL_END - $left;
		if ($stage === null) {
			$this->notifications->expects($this->never())->method('notifyAdminsAboutTrial');
		} else {
			$this->notifications->expects($this->once())->method('notifyAdminsAboutTrial')->with($stage, self::TRIAL_END)
				->willReturnCallback(fn () => $this->assertSame((string)self::TRIAL_END, $this->shared('trial_notice_' . $stage), 'Erst der Vermerk, dann der Versand'));
		}

		$this->service()->sendTrialNotices();
		$this->service()->sendTrialNotices();

		if ($stage !== null) {
			$this->assertSame((string)self::TRIAL_END, $this->shared('trial_notice_' . $stage));
			$this->assertFalse($this->sensitive['werkwolke/trial_notice_' . $stage]);
		}
	}

	public function testANoticeAnotherWerkAppSentIsNotRepeated(): void {
		$this->storeTrialToken();
		$this->now = self::TRIAL_END - 3 * 86400;
		$this->config['werkwolke/trial_notice_7d'] = (string)self::TRIAL_END;
		$this->notifications->expects($this->never())->method('notifyAdminsAboutTrial');

		$this->service()->sendTrialNotices();
	}

	public function testBoughtKeysGetNoTrialNotices(): void {
		$this->storeToken(['trial' => false, 'licenseValidUntil' => self::NOW + 86400]);
		$this->notifications->expects($this->never())->method('notifyAdminsAboutTrial');

		$this->service()->sendTrialNotices();
	}

	public function testNoNoticeWhenTheStoreIsTooNew(): void {
		$this->storeTrialToken();
		$this->config['werkwolke/store_version'] = '2';
		$this->now = self::TRIAL_END - 3 * 86400;
		$this->notifications->expects($this->never())->method('notifyAdminsAboutTrial');

		$this->service()->sendTrialNotices();
		$this->assertNull($this->shared('trial_notice_7d'));
	}

	public function testNoEndNoticeWhenAnotherWerkAppSwappedTheKeyMeanwhile(): void {
		$this->storeTrialToken();
		$this->now = self::TRIAL_END + 3600;
		$this->client->method('validate')->willReturnCallback(function (): never {
			$this->config['werkwolke/key'] = self::OTHER_KEY;
			throw new WerkPlusApiException('KEY_EXPIRED', '', null, true);
		});
		$this->notifications->expects($this->never())->method('notifyAdminsAboutTrial');
		try {
			$this->service()->refresh();
		} catch (WerkPlusApiException) {
		}
	}
}
