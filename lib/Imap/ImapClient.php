<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Imap;

/**
 * Minimal IMAP4rev1 client for the DATEV confirmation poller (#51).
 *
 * Replaces webklex/php-imap (and its Laravel dependency chain) with ~250 lines
 * of plain PHP sockets. It implements only what the poller needs: connect/login,
 * list folders, select, UID SEARCH, UID FETCH (read-only via BODY.PEEK) and an
 * optional UID MOVE for the opt-in cleanup. No extra dependency, no ext-imap.
 *
 * Strictly non-destructive on the read path: SELECT is read-write but only
 * BODY.PEEK[] is fetched, so messages are never flagged \Seen. Mutations happen
 * only in uidMove(), guarded by an explicit capability check.
 */
class ImapClient {

	/** @var resource|null */
	private $stream = null;
	private int $tagCounter = 0;
	/** @var string[] */
	private array $capabilities = [];

	public function __construct(
		private readonly string $host,
		private readonly int $port,
		private readonly string $security,
		private readonly bool $validateCert = true,
		private readonly int $timeout = 15,
	) {
	}

	/** Open the socket (implicit TLS or STARTTLS) and read the server greeting. */
	public function connect(): void {
		$sec = strtolower($this->security);
		$implicitTls = $sec === 'ssl' || $sec === 'tls';
		$transport = $implicitTls ? 'ssl' : 'tcp';

		$context = stream_context_create(['ssl' => [
			'verify_peer' => $this->validateCert,
			'verify_peer_name' => $this->validateCert,
			'SNI_enabled' => true,
			'peer_name' => $this->host,
		]]);

		$errno = 0;
		$errstr = '';
		$stream = @stream_socket_client(
			$transport . '://' . $this->host . ':' . $this->port,
			$errno,
			$errstr,
			(float)$this->timeout,
			STREAM_CLIENT_CONNECT,
			$context,
		);
		if ($stream === false) {
			throw new ImapException(sprintf('IMAP-Verbindung fehlgeschlagen (%s:%d): %s', $this->host, $this->port, $errstr));
		}
		stream_set_timeout($stream, $this->timeout);
		$this->stream = $stream;

		$greeting = $this->readLine();
		if (!str_starts_with($greeting, '* OK') && !str_starts_with($greeting, '* PREAUTH')) {
			throw new ImapException('IMAP-Greeting unerwartet: ' . trim($greeting));
		}

		if ($sec === 'starttls') {
			$this->command('STARTTLS');
			if (!stream_socket_enable_crypto($this->stream, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
				throw new ImapException('IMAP STARTTLS-Upgrade fehlgeschlagen');
			}
		}
	}

	/** Authenticate and cache the server capability list. */
	public function login(string $user, string $password): void {
		$this->command('LOGIN ' . $this->quote($user) . ' ' . $this->quote($password));
		$resp = $this->command('CAPABILITY');
		if (preg_match('/^\* CAPABILITY (.+)$/mi', $resp['raw'], $m)) {
			$this->capabilities = array_map('strtoupper', preg_split('/\s+/', trim($m[1])) ?: []);
		}
	}

	/**
	 * List all mailbox paths (LIST "" "*").
	 *
	 * @return string[]
	 */
	public function listFolders(): array {
		$resp = $this->command('LIST "" "*"');
		$folders = [];
		foreach (preg_split('/\r\n/', $resp['raw']) ?: [] as $line) {
			// * LIST (\HasNoChildren) "/" "INBOX"
			if (preg_match('/^\* LIST \([^)]*\) (?:"[^"]*"|NIL) (.+?)\s*$/i', $line, $m)) {
				$folders[] = $this->unquote($m[1]);
			}
		}
		return $folders;
	}

	/** Select a mailbox read-write and return its message count (EXISTS). */
	public function select(string $folder): int {
		$resp = $this->command('SELECT ' . $this->quote($folder));
		if (preg_match('/^\* (\d+) EXISTS/mi', $resp['raw'], $m)) {
			return (int)$m[1];
		}
		return 0;
	}

	/**
	 * Run a UID SEARCH and return the matching UIDs.
	 *
	 * @return int[]
	 */
	public function uidSearch(string $criteria): array {
		$resp = $this->command('UID SEARCH ' . $criteria);
		$uids = [];
		if (preg_match('/^\* SEARCH([0-9 ]*)/mi', $resp['raw'], $m)) {
			foreach (preg_split('/\s+/', trim($m[1])) ?: [] as $token) {
				if ($token !== '') {
					$uids[] = (int)$token;
				}
			}
		}
		return $uids;
	}

	/** Fetch the full raw RFC 822 message for a UID without setting \Seen. */
	public function uidFetchRaw(int $uid): string {
		$resp = $this->command('UID FETCH ' . $uid . ' (BODY.PEEK[])');
		return $resp['literals'][0] ?? '';
	}

	/**
	 * Move a message to the target mailbox. Prefers atomic UID MOVE; falls back
	 * to COPY + \Deleted + targeted UID EXPUNGE only when UIDPLUS is available.
	 * Throws (caller logs + skips) rather than risk a broad EXPUNGE that could
	 * hit unrelated mails in a shared mailbox.
	 */
	public function uidMove(int $uid, string $target): void {
		if ($this->hasCapability('MOVE')) {
			$this->command('UID MOVE ' . $uid . ' ' . $this->quote($target));
			return;
		}
		if (!$this->hasCapability('UIDPLUS')) {
			throw new ImapException('IMAP: weder MOVE- noch UIDPLUS-Capability — Cleanup übersprungen');
		}
		$this->command('UID COPY ' . $uid . ' ' . $this->quote($target));
		$this->command('UID STORE ' . $uid . ' +FLAGS (\\Deleted)');
		$this->command('UID EXPUNGE ' . $uid);
	}

	/** Best-effort LOGOUT and socket close. */
	public function logout(): void {
		if ($this->stream === null) {
			return;
		}
		try {
			$this->command('LOGOUT');
		} catch (\Throwable) {
			// Closing anyway.
		}
		fclose($this->stream);
		$this->stream = null;
	}

	public function hasCapability(string $name): bool {
		return in_array(strtoupper($name), $this->capabilities, true);
	}

	// --- protocol plumbing -------------------------------------------------

	/**
	 * Send a tagged command and read its full response.
	 *
	 * @return array{raw: string, literals: string[]}
	 */
	private function command(string $command): array {
		if ($this->stream === null) {
			throw new ImapException('IMAP: nicht verbunden');
		}
		$tag = sprintf('A%03d', ++$this->tagCounter);
		fwrite($this->stream, $tag . ' ' . $command . "\r\n");
		return $this->readResponse($tag);
	}

	/**
	 * Read an IMAP response up to the tagged completion line, collecting any
	 * server literals ({n}\r\n + n bytes) verbatim — the FETCH body arrives this
	 * way and must be read by exact byte count, not line by line.
	 *
	 * @return array{raw: string, literals: string[]}
	 */
	private function readResponse(string $tag): array {
		$raw = '';
		$literals = [];
		while (true) {
			$line = $this->readLine();
			$raw .= $line;

			while (preg_match('/\{(\d+)\}\r\n$/', $line, $m)) {
				$literal = $this->readBytes((int)$m[1]);
				$literals[] = $literal;
				$line = $this->readLine();
				$raw .= $literal . $line;
			}

			if (preg_match('/^' . preg_quote($tag, '/') . ' (OK|NO|BAD)\b/i', $line, $mm)) {
				if (strtoupper($mm[1]) !== 'OK') {
					throw new ImapException('IMAP ' . trim($line));
				}
				return ['raw' => $raw, 'literals' => $literals];
			}
		}
	}

	private function readLine(): string {
		$line = fgets($this->stream);
		if ($line === false) {
			throw new ImapException('IMAP: Verbindung unerwartet geschlossen');
		}
		return $line;
	}

	private function readBytes(int $length): string {
		$data = '';
		while (strlen($data) < $length) {
			$chunk = fread($this->stream, $length - strlen($data));
			if ($chunk === false || $chunk === '') {
				throw new ImapException('IMAP: Verbindung beim Lesen eines Literals abgebrochen');
			}
			$data .= $chunk;
		}
		return $data;
	}

	/** Wrap a value as an IMAP quoted string, escaping \ and ". */
	private function quote(string $value): string {
		return '"' . str_replace(['\\', '"'], ['\\\\', '\\"'], $value) . '"';
	}

	/** Strip IMAP quoting from a LIST mailbox token. */
	private function unquote(string $value): string {
		$value = trim($value);
		if (strlen($value) >= 2 && $value[0] === '"' && substr($value, -1) === '"') {
			$value = substr($value, 1, -1);
			$value = str_replace(['\\"', '\\\\'], ['"', '\\'], $value);
		}
		return $value;
	}
}
