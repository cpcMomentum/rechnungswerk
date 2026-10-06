<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Exception\WerkPlusApiException;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\WerkPlusClient;
use OCP\App\IAppManager;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IAppConfig;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class EntitlementServiceTest extends TestCase {
	use EntitlementTokenFactory;

	private const KEY = 'wp_B7K2M9QX4TN6RJ8VC3HD5PKW2FSY7GZA3EFA69B6';

	/** @var array<string, string> */
	private array $config = [];
	/** @var array<string, bool> */
	private array $sensitive = [];
	private int $now = self::NOW;
	private WerkPlusClient&MockObject $client;

	protected function setUp(): void {
		parent::setUp();
		$this->config = ['werkplus_instance_uuid' => self::UUID];
		$this->sensitive = [];
		$this->now = self::NOW;
		$this->client = $this->createMock(WerkPlusClient::class);
	}

	private function service(): EntitlementService {
		$appConfig = $this->createMock(IAppConfig::class);
		$appConfig->method('getValueString')->willReturnCallback(
			fn (string $app, string $key, string $default = '') => $this->config[$key] ?? $default
		);
		$appConfig->method('setValueString')->willReturnCallback(
			function (string $app, string $key, string $value, bool $lazy = false, bool $sensitive = false): bool {
				$this->config[$key] = $value;
				$this->sensitive[$key] = $sensitive;
				return true;
			}
		);
		$appConfig->method('deleteKey')->willReturnCallback(function (string $app, string $key): void {
			unset($this->config[$key]);
		});
		$appConfig->expects($this->never())->method('getValueInt');

		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturnCallback(fn () => $this->now);
		$appManager = $this->createMock(IAppManager::class);
		$appManager->method('getAppVersion')->willReturn('0.7.0');

		return new EntitlementService(
			$appConfig,
			$time,
			$this->client,
			$this->verifier(),
			$appManager,
			$this->createMock(LoggerInterface::class),
		);
	}

	private function storeToken(array $overrides = []): void {
		$this->config['werkplus_key'] = self::KEY;
		$this->config['werkplus_token'] = $this->token($this->claims($overrides));
	}

	/**
	 * @return array{token: string, expiresAt: string, graceUntil: string}
	 */
	private function response(array $overrides = []): array {
		return ['token' => $this->token($this->claims($overrides)), 'expiresAt' => 'x', 'graceUntil' => 'y'];
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
		$this->assertFalse($service->hasFeature('girocode'));
		$service->getStatus();
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

	public function testActivateStoresKeyAndTokenSensitively(): void {
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID, ['rechnungswerk' => '0.7.0'], '6-20')
			->willReturn($this->response());
		$service = $this->service();
		$service->activate('  ' . self::KEY . ' ', '6-20');

		$this->assertSame(self::KEY, $this->config['werkplus_key']);
		$this->assertTrue($this->sensitive['werkplus_key']);
		$this->assertTrue($this->sensitive['werkplus_token']);
		$this->assertSame('6-20', $this->config['werkplus_employee_bucket']);
		$this->assertSame((string)self::NOW, $this->config['werkplus_last_check_at']);
		$this->assertTrue($service->hasFeature('tenants'));
		$this->assertNull($service->lastError());
	}

	public function testInstanceUuidIsCreatedLowercaseAndSentLowercase(): void {
		unset($this->config['werkplus_instance_uuid']);
		$sent = null;
		$this->client->method('validate')->willReturnCallback(function (string $k, string $uuid) use (&$sent): array {
			$sent = $uuid;
			throw new WerkPlusApiException('SERVER_ERROR');
		});
		try {
			$this->service()->activate(self::KEY, '1-5');
		} catch (WerkPlusApiException) {
		}

		$this->assertMatchesRegularExpression('/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/', $this->config['werkplus_instance_uuid']);
		$this->assertSame($this->config['werkplus_instance_uuid'], $sent);
	}

	public function testUppercaseStoredUuidIsSentLowercaseAndItsTokenAccepted(): void {
		$this->config['werkplus_instance_uuid'] = strtoupper(self::UUID);
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID)
			->willReturn($this->response());
		$service = $this->service();
		$service->activate(self::KEY, '1-5');

		$this->assertTrue($service->hasFeature('tenants'));
	}

	public function testFailedActivationStoresNoKey(): void {
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_UNKNOWN', 'Schlüssel unbekannt'));
		$service = $this->service();
		try {
			$service->activate(self::KEY, '1-5');
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			$this->assertSame('KEY_UNKNOWN', $e->getErrorCode());
		}

		$this->assertArrayNotHasKey('werkplus_key', $this->config);
		$this->assertNull($service->lastError());
	}

	public function testKeyIsNormalizedLikeTheServerDoes(): void {
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY)
			->willReturn($this->response());
		$this->service()->activate(' WP_b7k2-m9qx-4tn6 rj8v-c3hd-5pkw-2fsy-7gza 3efa69b6 ', '1-5');

		$this->assertSame(self::KEY, $this->config['werkplus_key']);
	}

	public function testRevokedStoredKeyInDisplayFormStillFallsBackToFree(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_REVOKED'));
		$service = $this->service();
		try {
			$service->activate('wp_b7k2-m9qx-4tn6-rj8v-c3hd-5pkw-2fsy-7gza-3efa-69b6', '1-5');
		} catch (WerkPlusApiException) {
		}

		$this->assertSame('free', $service->tier());
	}

	public function testFailedNewKeyDoesNotBlockRenewalOfTheStoredOne(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_UNKNOWN'));
		try {
			$this->service()->activate('wp_VERTIPPT', '1-5');
		} catch (WerkPlusApiException) {
		}

		$this->assertArrayNotHasKey('werkplus_last_error', $this->config);
		$this->now = self::NOW + 8 * 86400;
		$this->assertTrue($this->service()->isRefreshDue());
	}

	public function testTheKeyNeverAppearsInAStackTrace(): void {
		$this->client->method('validate')->willReturn([
			'token' => $this->token($this->claims(), [], self::foreignKey()['private']),
			'expiresAt' => 'x',
			'graceUntil' => 'y',
		]);
		try {
			$this->service()->activate(self::KEY, '1-5');
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			$args = [];
			for ($t = $e; $t !== null; $t = $t->getPrevious()) {
				foreach ($t->getTrace() as $frame) {
					$args = array_merge($args, $frame['args'] ?? []);
				}
			}
			$this->assertNotEmpty($args, 'Trace ohne Argumente: zend.exception_ignore_args ist an, der Test prueft nichts');
			$this->assertNotContains(self::KEY, $args);
		}
	}

	public function testRevokedNewKeyDoesNotCostTheStoredToken(): void {
		$this->storeToken();
		$this->client->method('validate')->willThrowException(new WerkPlusApiException('KEY_REVOKED'));
		$service = $this->service();
		try {
			$service->activate('wp_ANDERERSCHLUESSEL', '1-5');
		} catch (WerkPlusApiException) {
		}

		$this->assertSame(self::KEY, $this->config['werkplus_key']);
		$this->assertTrue($service->hasFeature('tenants'));
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
		$this->assertArrayNotHasKey('werkplus_token', $this->config);
		$this->assertSame(self::KEY, $this->config['werkplus_key']);
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
		$before = $this->config['werkplus_token'];
		$this->client->method('validate')->willThrowException(new WerkPlusApiException($code));
		$service = $this->service();
		try {
			$service->refresh();
		} catch (WerkPlusApiException) {
		}

		$this->assertSame($before, $this->config['werkplus_token']);
		$this->assertTrue($service->hasFeature('tenants'));
	}

	public function testTokenThatFailsLocalVerificationIsNotStored(): void {
		$this->client->method('validate')->willReturn([
			'token' => $this->token($this->claims(), [], self::foreignKey()['private']),
			'expiresAt' => 'x',
			'graceUntil' => 'y',
		]);
		$service = $this->service();
		try {
			$service->activate(self::KEY, '1-5');
			$this->fail('Ausnahme erwartet');
		} catch (WerkPlusApiException $e) {
			$this->assertSame(EntitlementService::TOKEN_REJECTED, $e->getErrorCode());
		}

		$this->assertArrayNotHasKey('werkplus_token', $this->config);
		$this->assertArrayNotHasKey('werkplus_key', $this->config);
	}

	public function testInvalidInputIsRejectedBeforeAnyCall(): void {
		$this->client->expects($this->never())->method('validate');
		$service = $this->service();
		foreach ([['', '1-5'], ['wp_ok', '7'], ['wp_<script>', '1-5']] as [$key, $bucket]) {
			try {
				$service->activate($key, $bucket);
				$this->fail('Ausnahme erwartet fuer ' . $key . '/' . $bucket);
			} catch (\InvalidArgumentException) {
			}
		}
	}

	public function testEmptyKeyReusesTheStoredOne(): void {
		$this->storeToken();
		$this->client->expects($this->once())->method('validate')
			->with(self::KEY, self::UUID, $this->anything(), '21-50')
			->willReturn($this->response());
		$this->service()->activate('', '21-50');

		$this->assertSame('21-50', $this->config['werkplus_employee_bucket']);
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
		$this->config['werkplus_last_attempt_at'] = (string)($this->now - 3600);
		$this->assertFalse($this->service()->isRefreshDue());

		$this->config['werkplus_last_attempt_at'] = (string)($this->now - 7 * 3600);
		$this->assertTrue($this->service()->isRefreshDue());
	}

	public function testPermanentErrorsAreRetriedOnlyOnceADay(): void {
		$this->storeToken();
		$this->now = self::NOW + 8 * 86400;
		$this->config['werkplus_last_error'] = json_encode(['code' => 'KEY_REVOKED', 'serverMessage' => '', 'at' => $this->now - 7 * 3600]);
		$this->assertFalse($this->service()->isRefreshDue());

		$this->config['werkplus_last_error'] = json_encode(['code' => 'KEY_REVOKED', 'serverMessage' => '', 'at' => $this->now - 25 * 3600]);
		$this->assertTrue($this->service()->isRefreshDue());

		$this->config['werkplus_last_error'] = json_encode(['code' => 'SERVER_ERROR', 'serverMessage' => '', 'at' => $this->now - 7 * 3600]);
		$this->assertTrue($this->service()->isRefreshDue());
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

	public function testRemoveKeyClearsLicenseButKeepsTheInstanceUuid(): void {
		$this->storeToken();
		$service = $this->service();
		$service->removeKey();

		$this->assertSame(['werkplus_instance_uuid' => self::UUID], $this->config);
		$this->assertSame('free', $service->tier());
	}

	public function testStatusHidesAnOldErrorWhenNoKeyIsStored(): void {
		$this->config['werkplus_last_error'] = json_encode(['code' => 'UNREACHABLE', 'serverMessage' => '', 'at' => self::NOW]);
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
	}
}
