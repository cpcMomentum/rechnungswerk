<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Service\DatevConfirmationService;
use PHPUnit\Framework\TestCase;

/**
 * Pure matching/parsing of DATEV upload-mail confirmations, using values taken
 * from real confirmation mails (RE-2026-0010 / RE-2026-0011).
 */
class DatevConfirmationServiceTest extends TestCase {

	public function testNormalizeIdStripsAngleBrackets(): void {
		$this->assertSame('N75jtxg04@localhost', DatevConfirmationService::normalizeId('<N75jtxg04@localhost>'));
		$this->assertSame('', DatevConfirmationService::normalizeId(null));
	}

	public function testResolvePrimaryByInReplyTo(): void {
		$invoice = new Invoice();
		$invoice->setNumber('RE-2026-0010');
		$invoice->setDatevMessageId('<N75jtxg04@localhost>');
		// Index key is the normalized (bracket-free) id.
		$byMsgId = ['N75jtxg04@localhost' => $invoice];

		// DATEV's In-Reply-To carries the same id (webklex already strips brackets,
		// but resolve() normalizes defensively).
		$match = DatevConfirmationService::resolve(
			'N75jtxg04@localhost',
			'AW: ZUGFeRD-Rechnung RE-2026-0010',
			'Alle Belege erfolgreich hochgeladen (1)',
			$byMsgId,
			['RE-2026-0010' => $invoice],
		);
		$this->assertSame($invoice, $match);
	}

	public function testResolveFallbackByNumberInSubject(): void {
		$invoice = new Invoice();
		$invoice->setNumber('RE-2026-0011');
		// No stored message-id (pre-feature invoice) → must match via subject.
		$match = DatevConfirmationService::resolve(
			'',
			'AW: ZUGFeRD-Rechnung RE-2026-0011',
			'Erfolgreich hochgeladen (1):\n- RE-2026-0011.pdf',
			[],
			['RE-2026-0011' => $invoice],
		);
		$this->assertSame($invoice, $match);
	}

	public function testResolveNoMatchReturnsNull(): void {
		$invoice = new Invoice();
		$invoice->setNumber('RE-2026-0099');
		$match = DatevConfirmationService::resolve('<x@y>', 'Unrelated subject', 'no number here', [], ['RE-2026-0099' => $invoice]);
		$this->assertNull($match);
	}

	public function testIsSuccessDetectsUploadMarker(): void {
		$this->assertTrue(DatevConfirmationService::isSuccess("Alle Belege erfolgreich hochgeladen (1)\n- RE-2026-0010.pdf"));
		$this->assertFalse(DatevConfirmationService::isSuccess('Der Beleg konnte nicht verarbeitet werden.'));
	}
}
