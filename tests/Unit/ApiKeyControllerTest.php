<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Controller\ApiKeyController;
use OCA\Rechnungswerk\Db\ApiKey;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ApiKeyService;
use OCA\Rechnungswerk\Service\AuthContext;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Http;
use OCP\IL10N;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class ApiKeyControllerTest extends TestCase {

	private AuthContext&MockObject $auth;
	private ApiKeyService&MockObject $apiKeys;
	private EntitlementService&MockObject $entitlement;
	private PermissionService&MockObject $permissions;

	protected function setUp(): void {
		parent::setUp();
		$this->auth = $this->createMock(AuthContext::class);
		$this->auth->method('rejection')->willReturn(null);
		$this->auth->method('getUserId')->willReturn('alice');
		$this->auth->method('isMachine')->willReturn(false);
		$this->apiKeys = $this->createMock(ApiKeyService::class);
		$this->entitlement = $this->createMock(EntitlementService::class);
		$this->entitlement->method('hasFeature')->willReturn(true);
		$this->permissions = $this->createMock(PermissionService::class);
		$this->permissions->method('hasAccess')->willReturn(true);
	}

	private function controller(?AuthContext $auth = null): ApiKeyController {
		$l10n = $this->createMock(IL10N::class);
		$l10n->method('t')->willReturnArgument(0);
		return new ApiKeyController($this->createMock(IRequest::class), $auth ?? $this->auth, $this->apiKeys, $this->entitlement, $this->permissions, $l10n);
	}

	private function key(): ApiKey&MockObject {
		$key = $this->createMock(ApiKey::class);
		$key->method('jsonSerialize')->willReturn(['id' => 7, 'name' => 'CI']);
		return $key;
	}

	public function testWithoutLoginNothingIsListed(): void {
		$auth = $this->createMock(AuthContext::class);
		$auth->method('rejection')->willReturn(null);
		$auth->method('getUserId')->willReturn(null);
		$this->apiKeys->expects($this->never())->method('list');

		$this->assertSame(Http::STATUS_UNAUTHORIZED, $this->controller($auth)->index()->getStatus());
	}

	public function testMachineAccessIsRefused(): void {
		$auth = $this->createMock(AuthContext::class);
		$auth->method('rejection')->willReturn(null);
		$auth->method('getUserId')->willReturn('alice');
		$auth->method('isMachine')->willReturn(true);

		$this->assertSame(Http::STATUS_FORBIDDEN, $this->controller($auth)->index()->getStatus());
	}

	public function testListShowsTheKeysOfTheUser(): void {
		$this->apiKeys->expects($this->once())->method('list')->with('alice', false)->willReturn([$this->key()]);

		$response = $this->controller()->index();

		$this->assertSame([['id' => 7, 'name' => 'CI']], $response->getData());
	}

	public function testCreateReturnsThePlaintextOnce(): void {
		$this->apiKeys->expects($this->once())->method('create')->with('alice', 'CI', ['invoices:read'], 120)
			->willReturn(['key' => $this->key(), 'plaintext' => 'rwrk_secret']);

		$response = $this->controller()->create(['name' => 'CI', 'scopes' => ['invoices:read'], 'rateLimit' => 120]);

		$this->assertSame(Http::STATUS_CREATED, $response->getStatus());
		$this->assertSame('rwrk_secret', $response->getData()['plaintext']);
	}

	public function testInvalidInputIsABadRequest(): void {
		$this->apiKeys->method('create')->willThrowException(new ValidationException('Name fehlt.'));

		$response = $this->controller()->create(['scopes' => 'kein Array']);

		$this->assertSame(Http::STATUS_BAD_REQUEST, $response->getStatus());
		$this->assertSame('Name fehlt.', $response->getData()['error']);
	}

	public function testRevokeUnknownKeyIsNotFound(): void {
		$this->apiKeys->method('revoke')->willReturn(false);

		$this->assertSame(Http::STATUS_NOT_FOUND, $this->controller()->destroy(9)->getStatus());
	}

	public function testRevokeKnownKey(): void {
		$this->apiKeys->expects($this->once())->method('revoke')->with(7, 'alice', false)->willReturn(true);

		$this->assertSame(Http::STATUS_NO_CONTENT, $this->controller()->destroy(7)->getStatus());
	}
}
