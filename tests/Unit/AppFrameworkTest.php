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

	protected function setUp(): void {
		parent::setUp();
		// Diese Integrationstests instanziieren das echte App-Framework
		// (OCP\AppFramework\App -> OC-Bootstrap). Container-frei gegen die
		// ocp-Stubs fehlt die private OC-Klasse — dann ueberspringen.
		if (!class_exists('OC')) {
			$this->markTestSkipped('Benoetigt eine laufende Nextcloud-Instanz (OC-Bootstrap).');
		}
	}

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
