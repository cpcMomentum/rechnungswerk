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
use OCA\Rechnungswerk\Imap\ImapClient;
use OCA\Rechnungswerk\Imap\MimeMessage;
use Psr\Log\LoggerInterface;

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
		// Opt-in: move our own, confirmed confirmations to Trash after processing.
		$cleanup = $this->settingsService->getCompany()->getImapCleanup() === 1;

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

		$client = new ImapClient($cfg['host'], $cfg['port'], $cfg['security'], true);
		$client->connect();
		$client->login($cfg['user'], $cfg['password']);

		// Confirmations may not stay in INBOX (mail rules / external automations
		// archive them), so search across folders — but skip the obvious noise.
		// The sender + 30-day filters run server-side and keep this bounded.
		$since = (new DateTime())->modify('-30 days');
		$criteria = 'FROM "' . self::DATEV_SENDER . '" SINCE ' . $since->format('j-M-Y');
		$skipFolders = ['Trash', 'Junk', 'Drafts', 'Sent'];

		$seen = 0;
		$matched = 0;
		foreach ($client->listFolders() as $folder) {
			if (in_array($folder, $skipFolders, true)) {
				continue;
			}
			try {
				$client->select($folder);
				$uids = $client->uidSearch($criteria);
			} catch (\Throwable $e) {
				$this->logger->debug('Rechnungswerk: IMAP-Ordner übersprungen: ' . $folder, ['exception' => $e]);
				continue;
			}

			foreach ($uids as $uid) {
				try {
					$raw = $client->uidFetchRaw($uid);
				} catch (\Throwable $e) {
					// A single unreadable message must not abort the whole run.
					$this->logger->debug('Rechnungswerk: IMAP-Nachricht übersprungen (UID ' . $uid . ')', ['exception' => $e]);
					continue;
				}
				if ($raw === '') {
					continue;
				}
				$seen++;
				$parsed = MimeMessage::parse($raw);
				$invoice = self::resolve($parsed['inReplyTo'], $parsed['subject'], $parsed['text'], $byMsgId, $byNumber);
				if ($invoice === null) {
					continue;
				}
				$body = $parsed['text'];
				$success = self::isSuccess($body);
				$invoice->setDatevStatus($success ? Invoice::DATEV_CONFIRMED : Invoice::DATEV_UNKNOWN);
				$invoice->setDatevStatusAt(new DateTime());
				if (!$success) {
					// Error/rejection format is not yet known — keep the raw text for
					// later analysis instead of guessing a 'failed' parse.
					$invoice->setDatevResponseRaw(mb_substr($body, 0, 2000));
				}
				$this->invoiceMapper->update($invoice);

				// Opt-in cleanup: only our own (matched) AND confirmed mails go to
				// Trash. Unknown replies are kept for analysis; n8n's incoming
				// confirmations are never matched, so they are never touched.
				if ($success && $cleanup) {
					try {
						$client->uidMove($uid, 'Trash');
					} catch (\Throwable $e) {
						$this->logger->warning('Rechnungswerk: Verschieben der DATEV-Quittung in den Papierkorb fehlgeschlagen', ['exception' => $e]);
					}
				}

				// Drop from the indices so a later message cannot re-match it.
				unset($byMsgId[$this->normalizeId($invoice->getDatevMessageId())], $byNumber[(string)$invoice->getNumber()]);
				$matched++;
			}
		}

		$client->logout();
		return ['pending' => count($pending), 'messages' => $seen, 'matched' => $matched];
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
