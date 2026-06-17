<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\MailService;
use OCP\Mail\IAttachment;
use OCP\Mail\IMailer;
use OCP\Mail\IMessage;
use PHPUnit\Framework\TestCase;

class MailServiceTest extends TestCase {

	private function settings(?string $fromEmail, ?string $fromName = null): Settings {
		$s = new Settings();
		$s->setSmtpFromEmail($fromEmail);
		$s->setSmtpFromName($fromName);
		return $s;
	}

	public function testSendUsesConfiguredSenderProfileAndAttachesPdf(): void {
		$message = $this->createMock(IMessage::class);
		$attachment = $this->createMock(IAttachment::class);
		$mailer = $this->createMock(IMailer::class);

		$mailer->method('validateMailAddress')->willReturn(true);
		$mailer->method('createMessage')->willReturn($message);
		$mailer->expects($this->once())->method('createAttachment')
			->with('PDFBYTES', 'RE-1.pdf', 'application/pdf')
			->willReturn($attachment);
		$mailer->expects($this->once())->method('send')->with($message)->willReturn([]);

		$message->expects($this->once())->method('setTo')->with(['kunde@example.com']);
		$message->expects($this->once())->method('setFrom')->with(['rechnung@firma.de' => 'Firma GmbH']);
		$message->expects($this->once())->method('setReplyTo')->with(['rechnung@firma.de' => 'Firma GmbH']);
		$message->expects($this->once())->method('setSubject')->with('Rechnung RE-1');
		$message->expects($this->once())->method('setPlainBody')->with('Text');
		$message->expects($this->once())->method('attach')->with($attachment);

		$service = new MailService($mailer);
		$service->sendInvoicePdf('kunde@example.com', 'Rechnung RE-1', 'Text', 'PDFBYTES', 'RE-1.pdf', $this->settings('rechnung@firma.de', 'Firma GmbH'));
	}

	public function testSendWithoutSenderProfileFallsBackToSystemSender(): void {
		$message = $this->createMock(IMessage::class);
		$mailer = $this->createMock(IMailer::class);
		$mailer->method('validateMailAddress')->willReturnCallback(static fn (string $a): bool => $a === 'kunde@example.com');
		$mailer->method('createMessage')->willReturn($message);
		$mailer->method('createAttachment')->willReturn($this->createMock(IAttachment::class));
		$mailer->method('send')->willReturn([]);

		// No configured from address -> the mailer's system sender is used.
		$message->expects($this->never())->method('setFrom');

		$service = new MailService($mailer);
		$service->sendInvoicePdf('kunde@example.com', 'Betreff', 'Text', 'PDF', 'a.pdf', $this->settings(null));
	}

	public function testInvalidRecipientThrowsValidation(): void {
		$mailer = $this->createMock(IMailer::class);
		$mailer->method('validateMailAddress')->willReturn(false);

		$service = new MailService($mailer);
		$this->expectException(ValidationException::class);
		$service->sendInvoicePdf('not-an-email', 'B', 'T', 'PDF', 'a.pdf', $this->settings(null));
	}

	public function testFailedRecipientsThrowRuntime(): void {
		$message = $this->createMock(IMessage::class);
		$mailer = $this->createMock(IMailer::class);
		$mailer->method('validateMailAddress')->willReturn(true);
		$mailer->method('createMessage')->willReturn($message);
		$mailer->method('createAttachment')->willReturn($this->createMock(IAttachment::class));
		$mailer->method('send')->willReturn(['kunde@example.com' => 'rejected']);

		$service = new MailService($mailer);
		$this->expectException(\RuntimeException::class);
		$service->sendInvoicePdf('kunde@example.com', 'B', 'T', 'PDF', 'a.pdf', $this->settings('rechnung@firma.de'));
	}
}
