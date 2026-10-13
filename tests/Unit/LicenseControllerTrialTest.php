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
use OCP\AppFramework\Http;
use OCP\IL10N;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class LicenseControllerTrialTest extends TestCase {

	private EntitlementService&MockObject $entitlement;

	protected function setUp(): void {
		parent::setUp();
		$this->entitlement = $this->createMock(EntitlementService::class);
		$this->entitlement->method('getStatus')->willReturn(['keySet' => true, 'lastError' => null]);
	}

	private function controller(bool $admin = true): LicenseController {
		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('isAdmin')->willReturn($admin);
		$l10n = $this->createMock(IL10N::class);
		$l10n->method('t')->willReturnCallback(fn (string $text) => $text);
		return new LicenseController($this->createMock(IRequest::class), 'admin', $permissions, $this->entitlement, $l10n);
	}

	public function testReturnsTheKeyOnceTogetherWithTheStatus(): void {
		$this->entitlement->expects($this->once())->method('startTrial')->with('6-20')->willReturn('wp_NEU');
		$response = $this->controller()->trial('6-20');

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame('wp_NEU', $response->getData()['key']);
		$this->assertTrue($response->getData()['status']['keySet']);
	}

	public function testOnlyAdmins(): void {
		$this->entitlement->expects($this->never())->method('startTrial');
		$this->assertSame(Http::STATUS_FORBIDDEN, $this->controller(false)->trial()->getStatus());
	}

	public function testStoredKeyBlocksTheTrial(): void {
		$this->entitlement->method('startTrial')->willThrowException(new \InvalidArgumentException('keySet'));
		$response = $this->controller()->trial();

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertStringContainsString('bereits ein WerkPlus-Schlüssel', $response->getData()['error']);
	}

	/**
	 * @return array<string, array{string, string}>
	 */
	public static function trialErrors(): array {
		return [
			'schon genutzt' => ['TRIAL_ALREADY_USED', 'bereits genutzt'],
			'abgeschaltet' => ['TRIAL_UNAVAILABLE', 'werkwolke.de/testen'],
			'gebremst' => ['RATE_LIMITED', 'später erneut'],
		];
	}

	#[\PHPUnit\Framework\Attributes\DataProvider('trialErrors')]
	public function testTrialErrorsKeepTheirCodeAndGetTheirOwnText(string $code, string $text): void {
		$this->entitlement->method('startTrial')->willThrowException(new WerkPlusApiException($code, 'Servertext'));
		$response = $this->controller()->trial();

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame($code, $response->getData()['code']);
		$this->assertStringContainsString($text, $response->getData()['error']);
	}
}
