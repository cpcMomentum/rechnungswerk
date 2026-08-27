<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;
use OCP\DB\Types;

/**
 * Versandstatus einer Beitragsrechnung per E-Mail.
 *
 * @method int getInvoiceId()
 * @method void setInvoiceId(int $invoiceId)
 *
 * @method string getRecipientEmail()
 * @method void setRecipientEmail(string $recipientEmail)
 *
 * @method string getDocumentSha256()
 * @method void setDocumentSha256(string $documentSha256)
 *
 * @method string getStatus()
 * @method void setStatus(string $status)
 *
 * @method int getAttemptCount()
 * @method void setAttemptCount(int $attemptCount)
 *
 * @method ?string getMessageId()
 * @method void setMessageId(?string $messageId)
 *
 * @method ?\DateTime getStartedAt()
 * @method void setStartedAt(?\DateTime $startedAt)
 *
 * @method ?\DateTime getSentAt()
 * @method void setSentAt(?\DateTime $sentAt)
 *
 * @method ?string getLastError()
 * @method void setLastError(?string $lastError)
 *
 * @method ?\DateTime getCreatedAt()
 * @method void setCreatedAt(?\DateTime $createdAt)
 *
 * @method ?\DateTime getUpdatedAt()
 * @method void setUpdatedAt(?\DateTime $updatedAt)
 */
class MembershipInvoiceMail extends Entity implements JsonSerializable {

	public const STATUS_SENDING = 'sending';
	public const STATUS_SENT = 'sent';
	public const STATUS_FAILED = 'failed';

	protected ?int $invoiceId = null;
	protected ?string $recipientEmail = null;
	protected ?string $documentSha256 = null;
	protected ?string $status = null;
	protected ?int $attemptCount = null;
	protected ?string $messageId = null;
	protected ?\DateTime $startedAt = null;
	protected ?\DateTime $sentAt = null;
	protected ?string $lastError = null;
	protected ?\DateTime $createdAt = null;
	protected ?\DateTime $updatedAt = null;

	public function __construct() {
		$this->addType('invoiceId', Types::BIGINT);
		$this->addType('recipientEmail', Types::STRING);
		$this->addType('documentSha256', Types::STRING);
		$this->addType('status', Types::STRING);
		$this->addType('attemptCount', Types::INTEGER);
		$this->addType('messageId', Types::STRING);
		$this->addType('startedAt', Types::DATETIME);
		$this->addType('sentAt', Types::DATETIME);
		$this->addType('lastError', Types::TEXT);
		$this->addType('createdAt', Types::DATETIME);
		$this->addType('updatedAt', Types::DATETIME);
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->getId(),
			'invoiceId' => $this->getInvoiceId(),
			'recipientEmail' => $this->getRecipientEmail(),
			'documentSha256' => $this->getDocumentSha256(),
			'status' => $this->getStatus(),
			'attemptCount' => $this->getAttemptCount(),
			'messageId' => $this->getMessageId(),
			'startedAt' => $this->getStartedAt()?->format(\DateTimeInterface::ATOM),
			'sentAt' => $this->getSentAt()?->format(\DateTimeInterface::ATOM),
			'lastError' => $this->getLastError(),
			'createdAt' => $this->getCreatedAt()?->format(\DateTimeInterface::ATOM),
			'updatedAt' => $this->getUpdatedAt()?->format(\DateTimeInterface::ATOM),
		];
	}
}