<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\ApiKey;
use OCA\Rechnungswerk\Service\ApiKeyService;
use OCA\Rechnungswerk\Service\AuthContext;
use OCP\IRequest;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class AuthContextTest extends TestCase {

	private const PLAINTEXT = 'rwrk_' . str_repeat('a', 43);

	public function testSessionUserIsNotAMachine(): void {
		$context = $this->context('alice', '', $this->apiKeyService());

		$this->assertFalse($context->isMachine());
		$this->assertSame('alice', $context->getUserId());
		$this->assertNull($context->rejection());
		$this->assertFalse($context->hasScope('invoices:read'));
	}

	public function testBearerResolvesToTheKeyOwner(): void {
		$key = $this->key();
		$service = $this->apiKeyService();
		$service->method('authenticate')->willReturn(
			['key' => $key, 'error' => null, 'retryAfter' => 0]
		);

		$context = $this->context(null, 'Bearer ' . self::PLAINTEXT, $service);

		$this->assertTrue($context->isMachine());
		$this->assertSame('alice', $context->getUserId());
		$this->assertNull($context->rejection());
		$this->assertTrue($context->hasScope('invoices:read'));
		$this->assertFalse($context->hasScope('invoices:create'));
	}

	public function testInvalidBearerCarriesTheRejection(): void {
		$service = $this->apiKeyService();
		$service->method('authenticate')->willReturn(
			['key' => null, 'error' => ApiKeyService::ERR_API_KEY_INVALID, 'retryAfter' => 0]
		);

		$context = $this->context(null, 'Bearer invalid', $service);

		$this->assertNull($context->getUserId());
		$rejection = $context->rejection();
		$this->assertNotNull($rejection);
		$this->assertSame(401, $rejection['status']);
		$this->assertSame(ApiKeyService::ERR_API_KEY_INVALID, $rejection['error']);
		$this->assertSame(0, $rejection['retryAfter']);
	}

	public function testRateLimitCarriesRetryAfter(): void {
		$service = $this->apiKeyService();
		$service->method('authenticate')->willReturn(
			['key' => null, 'error' => ApiKeyService::ERR_RATE_LIMITED, 'retryAfter' => 37]
		);

		$context = $this->context(null, 'Bearer whatever', $service);

		$rejection = $context->rejection();
		$this->assertNotNull($rejection);
		$this->assertSame(429, $rejection['status']);
		$this->assertSame(37, $rejection['retryAfter']);
	}

	public function testAnonymousHasNeitherUserNorRejection(): void {
		$context = $this->context(null, '', $this->apiKeyService());

		$this->assertNull($context->getUserId());
		$this->assertNull($context->rejection());
	}

	public function testSessionWinsOverBearer(): void {
		$service = $this->apiKeyService();
		$service->expects($this->never())->method('authenticate');

		$context = $this->context('alice', 'Bearer ' . self::PLAINTEXT, $service);

		$this->assertFalse($context->isMachine());
		$this->assertSame('alice', $context->getUserId());
	}

	private function apiKeyService(): ApiKeyService&MockObject {
		return $this->createMock(ApiKeyService::class);
	}

	private function context(?string $sessionUserId, string $authorizationHeader, ApiKeyService $service): AuthContext {
		$request = $this->createMock(IRequest::class);
		$request->method('getHeader')->willReturn($authorizationHeader);
		return new AuthContext($sessionUserId, $request, $service);
	}

	private function key(): ApiKey {
		$key = new ApiKey();
		$key->setId(1);
		$key->setOwnerId('alice');
		$key->setKeyPrefix(substr(self::PLAINTEXT, 0, 12));
		$key->setScopes(json_encode(['invoices:read']));
		return $key;
	}
}
