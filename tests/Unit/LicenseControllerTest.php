<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\LicenseController;
use OCA\Rechnungswerk\Exception\WerkPlusApiException;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\WerkPlusClient;
use OCP\AppFramework\Http;
use OCP\IL10N;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class LicenseControllerTest extends TestCase {

	private EntitlementService&MockObject $entitlement;

	protected function setUp(): void {
		parent::setUp();
		$this->entitlement = $this->createMock(EntitlementService::class);
		$this->entitlement->method('getStatus')->willReturn(['keySet' => true, 'lastError' => null]);
	}

	private function controller(?string $userId = 'admin', bool $nextcloudAdmin = true): LicenseController {
		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('isAdmin')->willReturn(true);
		$permissions->method('isNextcloudAdmin')->willReturn($nextcloudAdmin);
		$l10n = $this->createMock(IL10N::class);
		$l10n->method('t')->willReturnCallback(fn (string $text) => $text);
		return new LicenseController($this->createMock(IRequest::class), $userId, $permissions, $this->entitlement, $l10n);
	}

	public function testWithoutLoginEveryActionIsRefused(): void {
		$controller = $this->controller(null);
		foreach ([$controller->show(), $controller->refresh(), $controller->activate('wp_X'), $controller->trial(), $controller->destroy()] as $response) {
			$this->assertSame(Http::STATUS_UNAUTHORIZED, $response->getStatus());
		}
	}

	public function testStatusCarriesTheLastErrorWithItsOwnText(): void {
		$this->entitlement = $this->createMock(EntitlementService::class);
		$this->entitlement->method('getStatus')->willReturn([
			'keySet' => true,
			'lastError' => ['code' => 'KEY_REVOKED', 'serverMessage' => 'Servertext', 'at' => 1_792_332_723],
		]);
		$error = $this->controller()->show()->getData()['lastError'];

		$this->assertSame('KEY_REVOKED', $error['code']);
		$this->assertStringContainsString('gesperrt', $error['message']);
		$this->assertSame('2026-10-18T14:12:03Z', $error['at']);
	}

	public function testActivateReturnsTheStatus(): void {
		$this->entitlement->expects($this->once())->method('activate')->with('wp_X');
		$response = $this->controller()->activate('wp_X');

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertTrue($response->getData()['canManage']);
	}

	public function testInvalidKeyGetsAnInputError(): void {
		$this->entitlement->method('activate')->willThrowException(new \InvalidArgumentException('key'));
		$response = $this->controller()->activate('wp_<');

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame('INPUT_INVALID', $response->getData()['code']);
	}

	public function testRefreshWithoutKeyGetsAnInputError(): void {
		$this->entitlement->method('refresh')->willThrowException(new \InvalidArgumentException('key'));

		$this->assertSame('INPUT_INVALID', $this->controller()->refresh()->getData()['code']);
	}

	public function testDestroyRemovesTheKey(): void {
		$this->entitlement->expects($this->once())->method('removeKey');

		$this->assertSame(Http::STATUS_OK, $this->controller()->destroy()->getStatus());
	}

	/**
	 * @return array<string, array{string, string}>
	 */
	public static function errorTexts(): array {
		return [
			'REQUEST_INVALID' => ['REQUEST_INVALID', 'fehlerhaft'],
			'KEY_UNKNOWN' => ['KEY_UNKNOWN', 'nicht bekannt'],
			'KEY_REVOKED' => ['KEY_REVOKED', 'gesperrt'],
			'KEY_EXPIRED' => ['KEY_EXPIRED', 'abgelaufen'],
			'INSTANCE_LIMIT_REACHED' => ['INSTANCE_LIMIT_REACHED', 'einer anderen Nextcloud zugeordnet'],
			'RATE_LIMITED' => ['RATE_LIMITED', 'Zu viele Versuche'],
			'UNREACHABLE' => [WerkPlusClient::UNREACHABLE, 'nicht erreichbar'],
			'TOKEN_REJECTED' => [EntitlementService::TOKEN_REJECTED, 'ließ sich nicht prüfen'],
			'SERVER_ERROR' => ['SERVER_ERROR', 'Fehler gemeldet'],
			'unbekannt mit Servertext' => ['NEW_CODE', 'Servertext'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('errorTexts')]
	public function testServerErrorsAreTranslatedByCodeNotByMessage(string $code, string $text): void {
		$this->entitlement->method('refresh')->willThrowException(new WerkPlusApiException($code, 'Servertext'));
		$response = $this->controller()->refresh();

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame($code, $response->getData()['code']);
		$this->assertStringContainsString($text, $response->getData()['error']);
	}

	public function testUnknownCodeWithoutServerTextFallsBackToAGeneralText(): void {
		$this->entitlement->method('refresh')->willThrowException(new WerkPlusApiException('NEW_CODE', ''));

		$this->assertStringContainsString('Fehler gemeldet', $this->controller()->refresh()->getData()['error']);
	}

	public function testDestroyWithANewerStoreFormatIsAnInputError(): void {
		$this->entitlement->method('removeKey')->willThrowException(new \InvalidArgumentException('storeTooNew'));
		$response = $this->controller()->destroy();

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertStringContainsString('neueren Format', $response->getData()['error']);
	}
}
