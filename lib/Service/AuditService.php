<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\ApiKeyMapper;
use OCA\Rechnungswerk\Db\AuditEntry;
use OCA\Rechnungswerk\Db\AuditEntryMapper;
use OCA\Rechnungswerk\Db\Invoice;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\EventDispatcher\IEventDispatcher;
use OCP\IUserManager;
use OCP\Log\Audit\CriticalActionPerformedEvent;
use Psr\Log\LoggerInterface;

/** record() runs inside the caller's transaction; flush() after commit, so admin_audit never logs a rolled-back action. */
class AuditService {

	public const PAGE_SIZE_MAX = 200;

	/** @var list<CriticalActionPerformedEvent> */
	private array $pending = [];

	public function __construct(
		private readonly AuditEntryMapper $mapper,
		private readonly ApiKeyMapper $apiKeyMapper,
		private readonly AuthContext $authContext,
		private readonly IUserManager $userManager,
		private readonly IEventDispatcher $eventDispatcher,
		private readonly ITimeFactory $timeFactory,
		private readonly LoggerInterface $logger,
	) {
	}

	public function record(string $action, Invoice $document): void {
		$entry = new AuditEntry();
		$entry->setCreatedAt($this->timeFactory->getTime());
		$entry->setUserId($this->authContext->getUserId());
		$entry->setApiKeyId($this->authContext->getApiKeyId());
		$entry->setAction($action);
		$entry->setDocumentId((int)$document->getId());
		$entry->setDocumentType((string)$document->getInvoiceType());
		$entry->setDocumentNumber($document->getNumber());
		$this->mapper->insert($entry);

		// admin_audit drops the whole line when a parameter is null, hence the string casts.
		$this->pending[] = new CriticalActionPerformedEvent(
			'Rechnungswerk: %s on %s %s (number %s) by %s, API key %s',
			[
				'action' => $action,
				'type' => (string)$document->getInvoiceType(),
				'id' => (string)$document->getId(),
				'number' => (string)($document->getNumber() ?? '-'),
				'user' => (string)($entry->getUserId() ?? '-'),
				'apiKey' => (string)($entry->getApiKeyId() ?? '-'),
			]
		);
	}

	public function flush(): void {
		$events = $this->pending;
		$this->pending = [];
		foreach ($events as $event) {
			try {
				$this->eventDispatcher->dispatchTyped($event);
			} catch (\Throwable $e) {
				// The action is already committed; a failing listener must not turn it into an error.
				$this->logger->error('Rechnungswerk: audit event listener failed', ['exception' => $e]);
			}
		}
	}

	public function discard(): void {
		$this->pending = [];
	}

	/** @return list<array<string, mixed>> */
	public function forDocument(int $documentId): array {
		return $this->present($this->mapper->findByDocument($documentId));
	}

	/** @return list<array<string, mixed>> */
	public function list(?string $number, int $limit, int $offset): array {
		$limit = max(1, min(self::PAGE_SIZE_MAX, $limit));
		return $this->present($this->mapper->findPage($number, $limit, max(0, $offset)));
	}

	/**
	 * @param AuditEntry[] $entries
	 * @return list<array<string, mixed>>
	 */
	private function present(array $entries): array {
		$existing = $this->mapper->existingDocumentIds(array_map(
			static fn (AuditEntry $e): int => (int)$e->getDocumentId(),
			$entries
		));
		$userNames = [];
		$keyNames = [];
		$result = [];
		foreach ($entries as $entry) {
			$userId = $entry->getUserId();
			if ($userId !== null && !array_key_exists($userId, $userNames)) {
				$userNames[$userId] = $this->userManager->getDisplayName($userId) ?? $userId;
			}
			$keyId = $entry->getApiKeyId();
			if ($keyId !== null && !array_key_exists($keyId, $keyNames)) {
				$keyNames[$keyId] = $this->apiKeyMapper->find($keyId)?->getName();
			}
			$result[] = [
				'id' => $entry->getId(),
				'createdAt' => $entry->getCreatedAt(),
				'action' => $entry->getAction(),
				'documentId' => $entry->getDocumentId(),
				'documentType' => $entry->getDocumentType(),
				'documentNumber' => $entry->getDocumentNumber(),
				'documentExists' => isset($existing[(int)$entry->getDocumentId()]),
				'userId' => $userId,
				'userDisplayName' => $userId !== null ? $userNames[$userId] : null,
				'apiKeyId' => $keyId,
				'apiKeyName' => $keyId !== null ? $keyNames[$keyId] : null,
			];
		}
		return $result;
	}
}
