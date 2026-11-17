<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\WhatsNewController;
use OCA\Rechnungswerk\Service\PermissionService;
use OCA\Rechnungswerk\Service\WhatsNewService;
use OCP\AppFramework\Http;
use OCP\IRequest;
use PHPUnit\Framework\TestCase;

class WhatsNewControllerTest extends TestCase {

	private function controller(?string $userId, bool $hasAccess, ?WhatsNewService $service = null): WhatsNewController {
		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('hasAccess')->willReturn($hasAccess);
		return new WhatsNewController(
			$this->createMock(IRequest::class),
			$userId,
			$permissions,
			$service ?? $this->createMock(WhatsNewService::class),
		);
	}

	public function testArchivLiefertAlleVersionen(): void {
		$service = $this->createMock(WhatsNewService::class);
		$service->method('getAll')->willReturn(['versions' => [['version' => '0.9.1', 'entries' => []]]]);

		$response = $this->controller('lea', true, $service)->all();

		self::assertSame(Http::STATUS_OK, $response->getStatus());
		self::assertSame('0.9.1', $response->getData()['versions'][0]['version']);
	}

	public function testArchivNurMitZugriff(): void {
		$service = $this->createMock(WhatsNewService::class);
		$service->expects(self::never())->method('getAll');

		self::assertSame(Http::STATUS_FORBIDDEN, $this->controller('lea', false, $service)->all()->getStatus());
		self::assertSame(Http::STATUS_UNAUTHORIZED, $this->controller(null, true, $service)->all()->getStatus());
	}
}
