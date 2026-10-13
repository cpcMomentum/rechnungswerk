<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\InvoiceController;
use OCA\Rechnungswerk\Service\ApiKeyService;
use OCA\Rechnungswerk\Service\AuthContext;
use OCA\Rechnungswerk\Service\InvoiceService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Http;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/** Maschinenzugang auf den Rechnungs-Endpunkten: Bearer ersetzt die Session, nur innerhalb seiner Scopes. */
class InvoiceControllerMachineAccessTest extends TestCase {

	public function testRejectsAnInvalidBearerWith401(): void {
		$controller = $this->controller(
			context: $this->context(null, machine: true, rejection: ['status' => 401, 'error' => ApiKeyService::ERR_API_KEY_INVALID, 'message' => 'Invalid API key', 'retryAfter' => 0]),
			permissions: $this->permissions(true)
		);

		$response = $controller->index();

		$this->assertSame(Http::STATUS_UNAUTHORIZED, $response->getStatus());
		$this->assertSame(ApiKeyService::ERR_API_KEY_INVALID, $response->getData()['code']);
	}

	public function testRejectsAMachineWithoutTheRequestedScope(): void {
		$controller = $this->controller(
			context: $this->context('alice', machine: true, scopes: ['invoices:read']),
			permissions: $this->permissions(true)
		);

		$response = $controller->commit(7);

		$this->assertSame(Http::STATUS_FORBIDDEN, $response->getStatus());
		$this->assertSame('SCOPE_MISSING', $response->getData()['code']);
	}

	public function testRejectsMachineAccessToEndpointsWithoutAScope(): void {
		$controller = $this->controller(
			context: $this->context('alice', machine: true, scopes: ['invoices:read']),
			permissions: $this->permissions(true)
		);

		$response = $controller->update(7, []);

		$this->assertSame(Http::STATUS_FORBIDDEN, $response->getStatus());
	}

	public function testAllowsAMachineWithTheRequestedScope(): void {
		$service = $this->createMock(InvoiceService::class);
		$service->method('commit')->willReturn(['id' => 7]);

		$controller = $this->controller(
			context: $this->context('alice', machine: true, scopes: ['invoices:commit']),
			permissions: $this->permissions(true),
			service: $service
		);

		$response = $controller->commit(7);

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
		$this->assertSame(['id' => 7], $response->getData());
	}

	public function testSessionUserKeepsWorkingUnchanged(): void {
		$controller = $this->controller(
			context: $this->context('alice', machine: false),
			permissions: $this->permissions(true)
		);

		$response = $controller->index();

		$this->assertSame(Http::STATUS_OK, $response->getStatus());
	}

	private function permissions(bool $hasAccess): PermissionService&MockObject {
		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('hasAccess')->willReturn($hasAccess);
		$permissions->method('canEdit')->willReturn($hasAccess);
		return $permissions;
	}

	/**
	 * @param array{status: int, error: string, message: string, retryAfter: int}|null $rejection
	 */
	private function context(?string $userId, bool $machine, array $rejection = [], array $scopes = []): AuthContext&MockObject {
		$context = $this->createMock(AuthContext::class);
		$context->method('getUserId')->willReturn($userId);
		$context->method('isMachine')->willReturn($machine);
		$context->method('rejection')->willReturn($rejection === [] ? null : $rejection);
		$context->method('hasScope')->willReturnCallback(fn (string $s) => in_array($s, $scopes, true));
		return $context;
	}

	private function controller(AuthContext $context, PermissionService $permissions, ?InvoiceService $service = null): InvoiceController {
		return new InvoiceController(
			$this->createMock(IRequest::class),
			$context,
			$service ?? $this->createMock(InvoiceService::class),
			$permissions,
			$this->createMock(LoggerInterface::class),
		);
	}
}
