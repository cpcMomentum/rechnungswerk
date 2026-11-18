<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\BackgroundJob\EntitlementRefreshJob;
use OCA\Rechnungswerk\Controller\ApiKeyController;
use OCA\Rechnungswerk\Controller\PageController;
use OCA\Rechnungswerk\Notification\Notifier;
use OCA\Rechnungswerk\Service\ApiKeyService;
use OCA\Rechnungswerk\Service\AuthContext;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\WerkPlusLinks;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\AppFramework\Http;
use OCP\AppFramework\Services\IInitialState;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IL10N;
use OCP\IRequest;
use PHPUnit\Framework\TestCase;

class WerkPlusWiringTest extends TestCase {

	public function testThePageHandsTheLinksToTheFrontend(): void {
		$initialState = $this->createMock(IInitialState::class);
		$initialState->expects($this->once())->method('provideInitialState')->with('werkplusLinks', WerkPlusLinks::all());

		(new PageController($this->createMock(IRequest::class), $initialState))->index();
	}

	public function testTheNotifierIsRegistered(): void {
		$context = $this->createMock(IRegistrationContext::class);
		$context->expects($this->once())->method('registerNotifierService')->with(Notifier::class);

		// Ohne Konstruktor: der Elternteil App braucht einen laufenden Nextcloud-Server.
		(new \ReflectionClass(Application::class))->newInstanceWithoutConstructor()->register($context);
	}

	public function testTheBackgroundJobAlsoSendsTrialNotices(): void {
		$entitlement = $this->createMock(EntitlementService::class);
		$entitlement->expects($this->once())->method('refreshIfDue');
		$entitlement->expects($this->once())->method('sendTrialNotices');
		$job = new EntitlementRefreshJob($this->createMock(ITimeFactory::class), $entitlement);

		(fn () => $this->run(null))->call($job);
	}

	public function testTheApiKeyLimitIsMarkedForTheUnlockLink(): void {
		$auth = $this->createMock(AuthContext::class);
		$auth->method('rejection')->willReturn(null);
		$auth->method('getUserId')->willReturn('alice');
		$auth->method('isMachine')->willReturn(false);
		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('hasAccess')->willReturn(true);
		$entitlement = $this->createMock(EntitlementService::class);
		$entitlement->method('hasFeature')->with('api_keys')->willReturn(false);
		$apiKeys = $this->createMock(ApiKeyService::class);
		$apiKeys->expects($this->never())->method('create');
		$l10n = $this->createMock(IL10N::class);
		$l10n->method('t')->willReturnArgument(0);

		$response = (new ApiKeyController($this->createMock(IRequest::class), $auth, $apiKeys, $entitlement, $permissions, $l10n))
			->create(['name' => 'x', 'scopes' => ['invoices:read']]);

		$this->assertSame(Http::STATUS_FORBIDDEN, $response->getStatus());
		$this->assertTrue($response->getData()['werkplusLimit']);
	}
}
