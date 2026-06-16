<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Controller\PageController;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use PHPUnit\Framework\TestCase;

class AppFrameworkTest extends TestCase {

	public function testApplicationRegistersWithoutErrors(): void {
		$app = new Application();

		$context = $this->createMock(IRegistrationContext::class);
		$app->register($context);

		$this->assertSame('rechnungswerk', Application::APP_ID);
	}

	public function testContainerResolvesPageController(): void {
		$app = new Application();
		$container = $app->getContainer();

		$controller = $container->get(PageController::class);

		$this->assertInstanceOf(PageController::class, $controller);
	}
}
