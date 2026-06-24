<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use Psr\Log\LoggerInterface;
use Webklex\PHPIMAP\ClientManager;

/**
 * Reads DATEV "Unternehmen online" upload-mail confirmations from the IMAP
 * mailbox and flips each pending invoice to confirmed / unknown (#36).
 *
 * The mailbox is shared (e.g. an n8n incoming-invoice flow reads it too), so
 * this poller is strictly NON-DESTRUCTIVE: it never deletes, moves or marks
 * messages (leaveUnread), and only touches invoices it can match to our own
 * upload (by stored Message-ID via In-Reply-To, fallback invoice number).
 */
class DatevConfirmationService {

	private const DATEV_SENDER = 'uploadmail.datev.de';
	private const SUCCESS_MARKER = 'erfolgreich hochgeladen';

	public function __construct(
		private readonly SettingsService $settingsService,
		private readonly InvoiceMapper $invoiceMapper,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Poll the mailbox and reconcile pending DATEV hand-offs.
	 *
	 * @return array{skipped?: string, pending?: int, messages?: int, matched?: int}
	 */
	public function poll(): array {
		$cfg = $this->settingsService->getImapConfig();
		if ($cfg === null) {
			return ['skipped' => 'no imap config'];
		}

		$pending = $this->invoiceMapper->findPendingDatev();
		if ($pending === []) {
			return ['pending' => 0];
		}

		// Index the pending invoices for matching.
		$byMsgId = [];
		$byNumber = [];
		foreach ($pending as $invoice) {
			$mid = $this->normalizeId($invoice->getDatevMessageId());
			if ($mid !== '') {
				$byMsgId[$mid] = $invoice;
			}
			$number = (string)$invoice->getNumber();
			if ($number !== '') {
				$byNumber[$number] = $invoice;
			}
		}

		$cm = new ClientManager();
		$client = $cm->make([
			'host' => $cfg['host'],
			'port' => $cfg['port'],
			'encryption' => $cfg['security'],
			'validate_cert' => true,
			'username' => $cfg['user'],
			'password' => $cfg['password'],
			'protocol' => 'imap',
		]);
		$client->connect();

		// Confirmations may not stay in INBOX (mail rules / external automations
		// archive them), so search across folders — but skip the obvious noise.
		// The sender + 30-day filters run server-side and keep this bounded.
		$since = (new DateTime())->modify('-30 days');
		$skipFolders = ['Trash', 'Junk', 'Drafts', 'Sent'];
		$messages = [];
		foreach ($client->getFolders(false) as $folder) {
			if (in_array($folder->path, $skipFolders, true)) {
				continue;
			}
			try {
				foreach ($folder->query()->whereFrom(self::DATEV_SENDER)->whereSince($since)->leaveUnread()->get() as $message) {
					$messages[] = $message;
				}
			} catch (\Throwable $e) {
				$this->logger->debug('Rechnungswerk: IMAP-Ordner übersprungen: ' . $folder->path, ['exception' => $e]);
			}
		}

		$matched = 0;
		foreach ($messages as $message) {
			$invoice = $this->matchInvoice($message, $byMsgId, $byNumber);
			if ($invoice === null) {
				continue;
			}
			$body = $message->getTextBody();
			$success = self::isSuccess($body);
			$invoice->setDatevStatus($success ? Invoice::DATEV_CONFIRMED : Invoice::DATEV_UNKNOWN);
			$invoice->setDatevStatusAt(new DateTime());
			if (!$success) {
				// Error/rejection format is not yet known — keep the raw text for
				// later analysis instead of guessing a 'failed' parse.
				$invoice->setDatevResponseRaw(mb_substr($body, 0, 2000));
			}
			$this->invoiceMapper->update($invoice);

			// Drop from the indices so a later message cannot re-match it.
			unset($byMsgId[$this->normalizeId($invoice->getDatevMessageId())], $byNumber[(string)$invoice->getNumber()]);
			$matched++;
		}

		$client->disconnect();
		return ['pending' => count($pending), 'messages' => count($messages), 'matched' => $matched];
	}

	/**
	 * @param array<string, Invoice> $byMsgId
	 * @param array<string, Invoice> $byNumber
	 */
	private function matchInvoice(object $message, array $byMsgId, array $byNumber): ?Invoice {
		return self::resolve(
			(string)$message->get('in_reply_to'),
			(string)$message->get('subject'),
			$message->getTextBody(),
			$byMsgId,
			$byNumber,
		);
	}

	/**
	 * Pure matching: In-Reply-To = our stored Message-ID (primary), else the
	 * invoice number found in subject/body (fallback). Static + side-effect free
	 * so it is unit-testable without an IMAP connection.
	 *
	 * @param array<string, Invoice> $byMsgId  normalized message-id → invoice
	 * @param array<string, Invoice> $byNumber invoice number → invoice
	 */
	public static function resolve(string $inReplyTo, string $subject, string $body, array $byMsgId, array $byNumber): ?Invoice {
		$norm = self::normalizeId($inReplyTo);
		if ($norm !== '' && isset($byMsgId[$norm])) {
			return $byMsgId[$norm];
		}
		$haystack = $subject . "\n" . $body;
		foreach ($byNumber as $number => $invoice) {
			if ((string)$number !== '' && str_contains($haystack, (string)$number)) {
				return $invoice;
			}
		}
		return null;
	}

	/** Whether a confirmation body reports a successful upload. */
	public static function isSuccess(string $body): bool {
		return mb_stripos($body, self::SUCCESS_MARKER) !== false;
	}

	public static function normalizeId(?string $id): string {
		return trim(str_replace(['<', '>'], '', (string)$id));
	}
}
