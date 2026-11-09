<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\ApiKey;
use OCA\Rechnungswerk\Db\ApiKeyMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ApiKeyService;
use OCA\Rechnungswerk\Service\EntitlementService;
use OCA\Rechnungswerk\Service\PermissionService;
use OCP\AppFramework\Utility\ITimeFactory;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class ApiKeyServiceTest extends TestCase {

	use TranslatorStub;

	private const NOW = 1760000000;

	private int $now = self::NOW;

	protected function setUp(): void {
		parent::setUp();
		$this->now = self::NOW;
	}

	private function service(ApiKeyMapper $mapper, bool $hasFeature = true, bool $ownerHasAccess = true): ApiKeyService {
		$entitlements = $this->createMock(EntitlementService::class);
		$entitlements->method('hasFeature')->willReturn($hasFeature);

		$permissions = $this->createMock(PermissionService::class);
		$permissions->method('hasAccess')->willReturn($ownerHasAccess);

		return new ApiKeyService($mapper, $entitlements, $permissions, $this->time(), $this->l10nStub());
	}

	private function time(): ITimeFactory {
		$time = $this->createMock(ITimeFactory::class);
		$time->method('getTime')->willReturnCallback(fn () => $this->now);
		return $time;
	}

	private function mapper(): ApiKeyMapper&MockObject {
		return $this->createMock(ApiKeyMapper::class);
	}

	public function testCreateReturnsPlaintextOnceAndStoresOnlyTheHash(): void {
		$stored = null;
		$mapper = $this->mapper();
		$mapper->method('insert')->willReturnCallback(function (ApiKey $k) use (&$stored) {
			$stored = $k;
			$k->setId(1);
			return $k;
		});

		$result = $this->service($mapper)->create('alice', ' WerkPlus ', ['invoices:create', 'invoices:pdf']);

		$this->assertSame('WerkPlus', $stored->getName());
		$this->assertMatchesRegularExpression('/^rwrk_[A-Za-z0-9_-]{43}$/', $result['plaintext']);
		$this->assertSame(hash('sha256', $result['plaintext']), $stored->getKeyHash());
		$this->assertSame(substr($result['plaintext'], 0, 12), $stored->getKeyPrefix());
		$this->assertSame('alice', $stored->getOwnerId());
		$this->assertSame(['invoices:create', 'invoices:pdf'], $stored->scopeList());
		$this->assertSame(0, $stored->getRlHits());
	}

	public function testCreateRejectsEmptyName(): void {
		$this->expectException(ValidationException::class);
		$this->service($this->mapper())->create('alice', '  ', ['invoices:read']);
	}

	public function testCreateDropsUnknownScopes(): void {
		$stored = null;
		$mapper = $this->mapper();
		$mapper->method('insert')->willReturnCallback(function (ApiKey $k) use (&$stored) {
			$stored = $k;
			$k->setId(1);
			return $k;
		});

		$this->service($mapper)->create('alice', 'WerkPlus', ['invoices:read', 'sepa:write']);

		$this->assertSame(['invoices:read'], $stored->scopeList());
	}

	public function testCreateRejectsEmptyScopes(): void {
		$this->expectException(ValidationException::class);
		$this->service($this->mapper())->create('alice', 'WerkPlus', []);
	}

	public function testCreateRejectsRateLimitAboveMaximum(): void {
		$this->expectException(ValidationException::class);
		$this->service($this->mapper())->create('alice', 'WerkPlus', ['invoices:read'], rateLimit: ApiKeyService::RATE_LIMIT_MAX + 1);
	}

	public function testCreateStoresCustomRateLimit(): void {
		$stored = null;
		$mapper = $this->mapper();
		$mapper->method('insert')->willReturnCallback(function (ApiKey $k) use (&$stored) {
			$stored = $k;
			$k->setId(1);
			return $k;
		});

		$this->service($mapper)->create('alice', 'WerkPlus', ['invoices:read'], rateLimit: 500);
		$this->assertSame(500, $stored->getRateLimit());

		$this->service($mapper)->create('alice', 'WerkPlus', ['invoices:read']);
		$this->assertSame(ApiKeyService::RATE_LIMIT_DEFAULT, $stored->getRateLimit());
	}

	public function testAuthenticateRejectsMalformedToken(): void {
		$result = $this->service($this->mapper())->authenticate('not-a-token');
		$this->assertSame(ApiKeyService::ERR_API_KEY_INVALID, $result['error']);
	}

	public function testAuthenticateRejectsRevokedKey(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);
		$key = $this->keyFor($plaintext);
		$key->setRevokedAt(self::NOW - 1);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$key]);

		$result = $this->service($mapper)->authenticate($plaintext);
		$this->assertSame(ApiKeyService::ERR_API_KEY_INVALID, $result['error']);
	}

	public function testAuthenticateRejectsMissingLicense(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$this->keyFor($plaintext)]);

		$result = $this->service($mapper, hasFeature: false)->authenticate($plaintext);
		$this->assertSame(ApiKeyService::ERR_KEY_GATE_CLOSED, $result['error']);
	}

	public function testAuthenticateRejectsOwnerWithoutAccess(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$this->keyFor($plaintext)]);

		$result = $this->service($mapper, ownerHasAccess: false)->authenticate($plaintext);
		$this->assertSame(ApiKeyService::ERR_API_KEY_FORBIDDEN, $result['error']);
	}

	public function testAuthenticateBooksTheRateLimitHit(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);
		$key = $this->keyFor($plaintext);
		$key->setRlHits(41);
		$key->setRlWindowStart(self::NOW - 10);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$key]);
		$updated = null;
		$mapper->method('update')->willReturnCallback(function (ApiKey $k) use (&$updated) {
			$updated = $k;
			return $k;
		});

		$result = $this->service($mapper)->authenticate($plaintext);

		$this->assertNull($result['error']);
		$this->assertSame($key, $result['key']);
		$this->assertSame(42, $updated->getRlHits());
		$this->assertSame(self::NOW, $updated->getLastUsedAt());
		$this->assertSame(self::NOW - 10, $updated->getRlWindowStart());
	}

	public function testAuthenticateRejectsBeyondTheRateLimit(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);
		$key = $this->keyFor($plaintext);
		$key->setRlHits(ApiKeyService::RATE_LIMIT_DEFAULT);
		$key->setRlWindowStart(self::NOW - 10);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$key]);

		$result = $this->service($mapper)->authenticate($plaintext);

		$this->assertSame(ApiKeyService::ERR_RATE_LIMITED, $result['error']);
		$this->assertSame(50, $result['retryAfter']);
	}

	public function testAuthenticateAppliesThePerKeyRateLimit(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);
		$key = $this->keyFor($plaintext);
		$key->setRateLimit(1);
		$key->setRlHits(1);
		$key->setRlWindowStart(self::NOW - 10);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$key]);

		$result = $this->service($mapper)->authenticate($plaintext);

		$this->assertSame(ApiKeyService::ERR_RATE_LIMITED, $result['error']);
	}

	public function testAuthenticateOpensANewWindowAfterExpiry(): void {
		$plaintext = 'rwrk_' . str_repeat('a', 43);
		$key = $this->keyFor($plaintext);
		$key->setRlHits(ApiKeyService::RATE_LIMIT_DEFAULT);
		$key->setRlWindowStart(self::NOW - ApiKeyService::RATE_WINDOW - 1);

		$mapper = $this->mapper();
		$mapper->method('findByPrefix')->willReturn([$key]);

		$this->now = self::NOW + ApiKeyService::RATE_WINDOW + 1;
		$result = $this->service($mapper)->authenticate($plaintext);

		$this->assertNull($result['error']);
		$this->assertSame(1, $key->getRlHits());
		$this->assertSame($this->now, $key->getRlWindowStart());
	}

	public function testRevokeIsAdminOnlyForOtherOwners(): void {
		$mapper = $this->mapper();
		$key = $this->keyFor('rwrk_' . str_repeat('a', 43));
		$key->setId(7);
		$key->setOwnerId('bob');
		$mapper->method('find')->willReturn($key);

		$service = $this->service($mapper);

		$this->assertFalse($service->revoke(7, 'alice', false));
		$this->assertTrue($service->revoke(7, 'alice', true));
		$this->assertNotNull($key->getRevokedAt());
	}

	public function testRevokeAllowsTheOwner(): void {
		$mapper = $this->mapper();
		$key = $this->keyFor('rwrk_' . str_repeat('a', 43));
		$key->setId(7);
		$key->setOwnerId('alice');
		$mapper->method('find')->willReturn($key);

		$this->assertTrue($this->service($mapper)->revoke(7, 'alice', false));
		$this->assertNotNull($key->getRevokedAt());
	}

	public function testRevokeIsIdempotentForUnknownKeys(): void {
		$mapper = $this->mapper();
		$mapper->method('find')->willReturn(null);

		$this->assertFalse($this->service($mapper)->revoke(99, 'alice', true));
	}

	private function keyFor(string $plaintext): ApiKey {
		$key = new ApiKey();
		$key->setId(1);
		$key->setOwnerId('alice');
		$key->setName('WerkPlus');
		$key->setKeyPrefix(substr($plaintext, 0, 12));
		$key->setKeyHash(hash('sha256', $plaintext));
		$key->setScopes(json_encode(['invoices:read']));
		$key->setCreatedAt(self::NOW);
		$key->setRlHits(0);
		return $key;
	}
}
