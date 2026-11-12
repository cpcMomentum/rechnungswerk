<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\ApiKey;
use OCA\Rechnungswerk\Db\ApiKeyMapper;
use OCA\Rechnungswerk\Db\AuditEntry;
use OCA\Rechnungswerk\Db\AuditEntryMapper;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Service\AuditService;
use OCA\Rechnungswerk\Service\AuthContext;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IUserManager;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class AuditServiceTest extends TestCase {

	private AuditEntryMapper&MockObject $mapper;
	private ApiKeyMapper&MockObject $apiKeyMapper;
	private AuthContext&MockObject $authContext;
	private IUserManager&MockObject $userManager;
	private IEventDispatcher&MockObject $eventDispatcher;
	private AuditService $service;

	protected function setUp(): void {
		$this->mapper = $this->createMock(AuditEntryMapper::class);
		$this->apiKeyMapper = $this->createMock(ApiKeyMapper::class);
		$this->authContext = $this->createMock(AuthContext::class);
		$this->userManager = $this->createMock(IUserManager::class);
		$this->eventDispatcher = $this->createMock(IEventDispatcher::class);
		$timeFactory = $this->createMock(ITimeFactory::class);
		$timeFactory->method('getTime')->willReturn(1_800_000_000);

		$this->service = new AuditService(
			$this->mapper,
			$this->apiKeyMapper,
			$this->authContext,
			$this->userManager,
			$this->eventDispatcher,
			$timeFactory,
			$this->createMock(LoggerInterface::class),
		);
	}

	private function draft(): Invoice {
		$invoice = new Invoice();
		$invoice->setId(15);
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		return $invoice;
	}

	public function testSessionUserIsRecordedWithoutKey(): void {
		$this->authContext->method('getUserId')->willReturn('alice');
		$this->authContext->method('getApiKeyId')->willReturn(null);

		$this->mapper->expects($this->once())->method('insert')
			->with($this->callback(function (AuditEntry $e): bool {
				return $e->getUserId() === 'alice'
					&& $e->getApiKeyId() === null
					&& $e->getAction() === AuditEntry::DELETE
					&& $e->getDocumentId() === 15
					&& $e->getDocumentType() === Invoice::TYPE_INVOICE
					&& $e->getDocumentNumber() === null
					&& $e->getCreatedAt() === 1_800_000_000;
			}))
			->willReturnArgument(0);

		$this->service->record(AuditEntry::DELETE, $this->draft());
	}

	public function testApiKeyIsRecordedForMachineAccess(): void {
		$this->authContext->method('getUserId')->willReturn('wilma');
		$this->authContext->method('getApiKeyId')->willReturn(3);

		$this->mapper->expects($this->once())->method('insert')
			->with($this->callback(fn (AuditEntry $e): bool => $e->getUserId() === 'wilma' && $e->getApiKeyId() === 3))
			->willReturnArgument(0);

		$this->service->record(AuditEntry::CREATE, $this->draft());
	}

	public function testAuditEventCarriesNoNullParameters(): void {
		$this->authContext->method('getUserId')->willReturn(null);
		$this->authContext->method('getApiKeyId')->willReturn(null);
		$this->mapper->method('insert')->willReturnArgument(0);

		$this->eventDispatcher->expects($this->once())->method('dispatchTyped')
			->with($this->callback(function (CriticalActionPerformedEvent $event): bool {
				$params = $event->getParameters();
				foreach ($params as $value) {
					if (!is_string($value)) {
						return false;
					}
				}
				return substr_count($event->getLogMessage(), '%s') === count($params)
					&& $params['action'] === AuditEntry::DELETE
					&& $params['id'] === '15';
			}));

		$this->service->record(AuditEntry::DELETE, $this->draft());
		$this->service->flush();
	}

	public function testEventWaitsForFlush(): void {
		$this->mapper->method('insert')->willReturnArgument(0);
		$this->eventDispatcher->expects($this->never())->method('dispatchTyped');

		$this->service->record(AuditEntry::DELETE, $this->draft());
		$this->service->discard();
		$this->service->flush();
	}

	public function testFailingListenerDoesNotEscapeFlush(): void {
		$this->mapper->method('insert')->willReturnArgument(0);
		$this->eventDispatcher->method('dispatchTyped')->willThrowException(new \RuntimeException('listener'));

		$this->service->record(AuditEntry::COMMIT, $this->draft());
		$this->service->flush();
		$this->addToAssertionCount(1);
	}

	public function testRecordNowDispatchesRightAway(): void {
		$this->mapper->method('insert')->willReturnArgument(0);
		$this->eventDispatcher->expects($this->once())->method('dispatchTyped');

		$this->service->recordNow(AuditEntry::DATEV_CONFIRM, $this->draft());
	}

	public function testRecordNowOnlyLogsAFailingEntry(): void {
		$this->mapper->method('insert')->willThrowException(new \RuntimeException('db down'));
		$this->eventDispatcher->expects($this->never())->method('dispatchTyped');

		$this->service->recordNow(AuditEntry::DATEV_SEND, $this->draft());
		$this->service->flush();
	}

	public function testPresentResolvesNamesAndMarksDeletedDocuments(): void {
		$byUser = $this->entry(1, 15, 'alice', null);
		$byKey = $this->entry(2, 16, 'gone', 3);
		$this->mapper->method('findPage')->willReturn([$byUser, $byKey]);
		$this->mapper->method('existingDocumentIds')->with([15, 16])->willReturn([16 => true]);
		$this->userManager->method('getDisplayName')->willReturnMap([
			['alice', 'Alice Admin'],
			['gone', null],
		]);
		$key = new ApiKey();
		$key->setName('WerkPlus');
		$this->apiKeyMapper->method('find')->with(3)->willReturn($key);

		$rows = $this->service->list(null, 50, 0);

		$this->assertSame('Alice Admin', $rows[0]['userDisplayName']);
		$this->assertNull($rows[0]['apiKeyName']);
		$this->assertFalse($rows[0]['documentExists']);
		$this->assertSame('gone', $rows[1]['userDisplayName']);
		$this->assertSame('WerkPlus', $rows[1]['apiKeyName']);
		$this->assertTrue($rows[1]['documentExists']);
	}

	public function testListClampsPageSize(): void {
		$this->mapper->expects($this->once())->method('findPage')
			->with('RE', AuditService::PAGE_SIZE_MAX, 0)
			->willReturn([]);

		$this->service->list('RE', 100000, -5);
	}

	private function entry(int $id, int $documentId, string $userId, ?int $keyId): AuditEntry {
		$entry = new AuditEntry();
		$entry->setId($id);
		$entry->setCreatedAt(1_800_000_000);
		$entry->setUserId($userId);
		$entry->setApiKeyId($keyId);
		$entry->setAction(AuditEntry::CREATE);
		$entry->setDocumentId($documentId);
		$entry->setDocumentType(Invoice::TYPE_INVOICE);
		return $entry;
	}
}
