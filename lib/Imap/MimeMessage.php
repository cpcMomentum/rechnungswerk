<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Imap;

/**
 * Minimal RFC 822 / MIME parser for the DATEV confirmation poller (#51).
 *
 * Only does what the poller needs: pull the In-Reply-To and Subject headers and
 * a decoded plain-text body out of a raw message. Fully static and side-effect
 * free so it is unit-testable without an IMAP connection.
 */
final class MimeMessage {

	/**
	 * Parse a raw RFC 822 message into the fields the poller matches on.
	 *
	 * @return array{inReplyTo: string, subject: string, text: string}
	 */
	public static function parse(string $raw): array {
		[$headerBlock, $body] = self::splitHeaders($raw);
		$headers = self::parseHeaderBlock($headerBlock);

		return [
			'inReplyTo' => trim($headers['in-reply-to'] ?? ''),
			'subject' => self::decodeHeader($headers['subject'] ?? ''),
			'text' => self::extractText($headers, $body),
		];
	}

	/**
	 * Split an entity into its header block and body at the first blank line.
	 *
	 * @return array{0: string, 1: string}
	 */
	private static function splitHeaders(string $raw): array {
		// Tolerate both CRLF and LF separators.
		$pos = strpos($raw, "\r\n\r\n");
		$sepLen = 4;
		if ($pos === false) {
			$pos = strpos($raw, "\n\n");
			$sepLen = 2;
		}
		if ($pos === false) {
			return [$raw, ''];
		}
		return [substr($raw, 0, $pos), substr($raw, $pos + $sepLen)];
	}

	/**
	 * Unfold and parse a header block into a lowercase-keyed map. On duplicate
	 * header names the first occurrence wins (enough for our needs).
	 *
	 * @return array<string, string>
	 */
	private static function parseHeaderBlock(string $headerBlock): array {
		$lines = preg_split('/\r?\n/', $headerBlock) ?: [];
		$headers = [];
		$current = null;
		foreach ($lines as $line) {
			if ($line === '') {
				continue;
			}
			// Continuation line (folded header) starts with whitespace.
			if ($current !== null && ($line[0] === ' ' || $line[0] === "\t")) {
				$headers[$current] .= ' ' . trim($line);
				continue;
			}
			$colon = strpos($line, ':');
			if ($colon === false) {
				continue;
			}
			$name = strtolower(trim(substr($line, 0, $colon)));
			$value = trim(substr($line, $colon + 1));
			if (!isset($headers[$name])) {
				$headers[$name] = $value;
			}
			$current = $name;
		}
		return $headers;
	}

	/**
	 * Decode an RFC 2047 encoded-word header (e.g. =?utf-8?Q?...?=) to UTF-8.
	 */
	private static function decodeHeader(string $value): string {
		if ($value === '') {
			return '';
		}
		if (!str_contains($value, '=?')) {
			return $value;
		}
		// iconv_mime_decode dekodiert das RFC-2047-"Q"-Encoding korrekt inkl.
		// "_" -> Leerzeichen auf allen PHP-Versionen; mb_decode_mimeheader liess
		// das "_" in PHP < 8.3 stehen (versionsabhaengiger Bug). mb als Fallback.
		$decoded = iconv_mime_decode($value, ICONV_MIME_DECODE_CONTINUE_ON_ERROR, 'UTF-8');
		if ($decoded === false || $decoded === '') {
			$decoded = mb_decode_mimeheader($value);
		}
		return $decoded !== '' ? $decoded : $value;
	}

	/**
	 * Return a decoded plain-text body. For multipart messages the first
	 * text/plain part wins, falling back to the first text/* part, else the
	 * raw decoded body.
	 *
	 * @param array<string, string> $headers
	 */
	private static function extractText(array $headers, string $body): string {
		$contentType = strtolower($headers['content-type'] ?? 'text/plain');

		if (str_starts_with($contentType, 'multipart/')) {
			$boundary = self::boundary($headers['content-type'] ?? '');
			if ($boundary !== '') {
				$text = self::textFromMultipart($body, $boundary);
				if ($text !== null) {
					return $text;
				}
			}
		}

		return self::decodeBody($headers, $body);
	}

	/**
	 * Walk the parts of a multipart body and return the first usable text part.
	 * Recurses into nested multiparts (multipart/alternative inside related…).
	 */
	private static function textFromMultipart(string $body, string $boundary): ?string {
		$parts = self::splitParts($body, $boundary);
		$fallback = null;
		foreach ($parts as $part) {
			[$pHeaderBlock, $pBody] = self::splitHeaders($part);
			$pHeaders = self::parseHeaderBlock($pHeaderBlock);
			$pType = strtolower($pHeaders['content-type'] ?? 'text/plain');

			if (str_starts_with($pType, 'multipart/')) {
				$nested = self::boundary($pHeaders['content-type'] ?? '');
				if ($nested !== '') {
					$inner = self::textFromMultipart($pBody, $nested);
					if ($inner !== null) {
						return $inner;
					}
				}
				continue;
			}

			if (str_starts_with($pType, 'text/plain')) {
				return self::decodeBody($pHeaders, $pBody);
			}
			if ($fallback === null && str_starts_with($pType, 'text/')) {
				$fallback = self::decodeBody($pHeaders, $pBody);
			}
		}
		return $fallback;
	}

	/**
	 * Split a multipart body on its boundary delimiters, dropping the preamble
	 * and the closing terminator.
	 *
	 * @return string[]
	 */
	private static function splitParts(string $body, string $boundary): array {
		$delimiter = '--' . $boundary;
		$segments = explode($delimiter, $body);
		$parts = [];
		foreach ($segments as $i => $segment) {
			// First segment is the preamble; a segment starting with "--" is the
			// closing boundary's trailer.
			if ($i === 0 || str_starts_with(ltrim($segment), '--')) {
				continue;
			}
			// Strip the leading CRLF that follows each boundary line.
			$parts[] = preg_replace('/^\r?\n/', '', $segment) ?? $segment;
		}
		return $parts;
	}

	/** Extract the boundary token from a Content-Type header value. */
	private static function boundary(string $contentType): string {
		if (preg_match('/boundary\s*=\s*"([^"]+)"/i', $contentType, $m)) {
			return $m[1];
		}
		if (preg_match('/boundary\s*=\s*([^;\s]+)/i', $contentType, $m)) {
			return trim($m[1], '"');
		}
		return '';
	}

	/**
	 * Decode a single entity body using its transfer encoding and charset,
	 * normalising to UTF-8.
	 *
	 * @param array<string, string> $headers
	 */
	private static function decodeBody(array $headers, string $body): string {
		$cte = strtolower(trim($headers['content-transfer-encoding'] ?? '7bit'));
		$decoded = match ($cte) {
			'base64' => base64_decode(preg_replace('/\s+/', '', $body) ?? $body, true) ?: '',
			'quoted-printable' => quoted_printable_decode($body),
			default => $body,
		};

		$charset = strtolower(self::charset($headers['content-type'] ?? ''));
		if ($charset !== '' && $charset !== 'utf-8' && $charset !== 'us-ascii' && $charset !== 'ascii') {
			$converted = @mb_convert_encoding($decoded, 'UTF-8', $charset);
			if ($converted !== false) {
				$decoded = $converted;
			}
		}
		return $decoded;
	}

	/** Extract the charset token from a Content-Type header value. */
	private static function charset(string $contentType): string {
		if (preg_match('/charset\s*=\s*"?([^";\s]+)"?/i', $contentType, $m)) {
			return trim($m[1]);
		}
		return '';
	}
}
