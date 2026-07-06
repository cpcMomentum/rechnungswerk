<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit\Imap;

use OCA\Rechnungswerk\Imap\MimeMessage;
use PHPUnit\Framework\TestCase;

/**
 * Raw-message parsing for the IMAP poller (#51). Fixtures mirror the shape of
 * real DATEV upload-mail confirmations (plain, multipart, QP, base64).
 */
class MimeMessageTest extends TestCase {

	/** Helper: assemble a raw message from CRLF-joined lines. */
	private static function raw(string ...$lines): string {
		return implode("\r\n", $lines);
	}

	public function testPlainTextMessage(): void {
		$raw = self::raw(
			'From: DATEV Upload <noreply@uploadmail.datev.de>',
			'Subject: AW: ZUGFeRD-Rechnung RE-2026-0010',
			'In-Reply-To: <N75jtxg04@localhost>',
			'Content-Type: text/plain; charset=UTF-8',
			'',
			'Alle Belege erfolgreich hochgeladen (1)',
			'- RE-2026-0010.pdf',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertSame('<N75jtxg04@localhost>', $msg['inReplyTo']);
		$this->assertSame('AW: ZUGFeRD-Rechnung RE-2026-0010', $msg['subject']);
		$this->assertStringContainsString('erfolgreich hochgeladen', $msg['text']);
		$this->assertStringContainsString('RE-2026-0010', $msg['text']);
	}

	public function testFoldedHeaderIsUnfolded(): void {
		$raw = self::raw(
			'Subject: AW: ZUGFeRD-Rechnung',
			"\tRE-2026-0011",
			'Content-Type: text/plain',
			'',
			'Body',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertSame('AW: ZUGFeRD-Rechnung RE-2026-0011', $msg['subject']);
	}

	public function testEncodedWordSubjectIsDecoded(): void {
		// =?UTF-8?Q?...?= encoded "Beleg übermittelt RE-2026-0012"
		$raw = self::raw(
			'Subject: =?UTF-8?Q?Beleg_=C3=BCbermittelt_RE-2026-0012?=',
			'Content-Type: text/plain; charset=UTF-8',
			'',
			'erfolgreich hochgeladen',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertSame('Beleg übermittelt RE-2026-0012', $msg['subject']);
	}

	public function testQuotedPrintableBodyIsDecoded(): void {
		$raw = self::raw(
			'Subject: Test',
			'Content-Type: text/plain; charset=UTF-8',
			'Content-Transfer-Encoding: quoted-printable',
			'',
			'Beleg f=C3=BCr RE-2026-0013 erfolgreich hochgeladen=',
			'(1)',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertStringContainsString('Beleg für RE-2026-0013 erfolgreich hochgeladen(1)', $msg['text']);
	}

	public function testBase64BodyIsDecoded(): void {
		$payload = base64_encode("Alle Belege erfolgreich hochgeladen\n- RE-2026-0014.pdf");
		$raw = self::raw(
			'Subject: Test',
			'Content-Type: text/plain; charset=UTF-8',
			'Content-Transfer-Encoding: base64',
			'',
			chunk_split($payload, 60, "\r\n"),
		);
		$msg = MimeMessage::parse($raw);
		$this->assertStringContainsString('erfolgreich hochgeladen', $msg['text']);
		$this->assertStringContainsString('RE-2026-0014', $msg['text']);
	}

	public function testMultipartPrefersTextPlain(): void {
		$raw = self::raw(
			'Subject: Test',
			'Content-Type: multipart/alternative; boundary="BOUND123"',
			'',
			'Preamble to ignore',
			'--BOUND123',
			'Content-Type: text/html; charset=UTF-8',
			'',
			'<p>RE-2026-0015 <b>erfolgreich hochgeladen</b></p>',
			'--BOUND123',
			'Content-Type: text/plain; charset=UTF-8',
			'',
			'RE-2026-0015 erfolgreich hochgeladen (plain)',
			'--BOUND123--',
			'',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertStringContainsString('(plain)', $msg['text']);
		$this->assertStringNotContainsString('<p>', $msg['text']);
	}

	public function testNestedMultipartIsWalked(): void {
		$raw = self::raw(
			'Subject: Test',
			'Content-Type: multipart/mixed; boundary="OUTER"',
			'',
			'--OUTER',
			'Content-Type: multipart/alternative; boundary="INNER"',
			'',
			'--INNER',
			'Content-Type: text/plain; charset=UTF-8',
			'',
			'nested RE-2026-0016 erfolgreich hochgeladen',
			'--INNER--',
			'--OUTER--',
			'',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertStringContainsString('nested RE-2026-0016', $msg['text']);
	}

	public function testLatin1BodyConvertedToUtf8(): void {
		$body = mb_convert_encoding('Gebühr für RE-2026-0017', 'ISO-8859-1', 'UTF-8');
		$raw = "Subject: Test\r\nContent-Type: text/plain; charset=ISO-8859-1\r\n\r\n" . $body;
		$msg = MimeMessage::parse($raw);
		$this->assertStringContainsString('Gebühr für RE-2026-0017', $msg['text']);
	}

	public function testMissingOptionalHeadersDegradeGracefully(): void {
		// No In-Reply-To / Subject, but a proper header/body separator as every
		// real FETCH response carries.
		$raw = self::raw(
			'From: noreply@uploadmail.datev.de',
			'',
			'Body with RE-2026-0018',
		);
		$msg = MimeMessage::parse($raw);
		$this->assertSame('', $msg['inReplyTo']);
		$this->assertSame('', $msg['subject']);
		$this->assertStringContainsString('RE-2026-0018', $msg['text']);
	}
}
