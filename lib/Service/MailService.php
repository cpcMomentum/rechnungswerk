<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\Mail\IMailer;
use PHPMailer\PHPMailer\PHPMailer;

/**
 * Sends invoice PDFs by email.
 *
 * If a dedicated SMTP account is configured (It. 6 / #29) the mail goes through
 * that account via PHPMailer — this lets invoices be sent from an address the
 * account actually owns (correct SPF/DMARC). Otherwise it falls back to
 * Nextcloud's system mailer (IMailer). The sender address comes from the
 * settings (smtp_from_*).
 */
class MailService {

	public function __construct(
		private readonly IMailer $mailer,
	) {
	}

	/**
	 * Send a single invoice PDF as a mail attachment.
	 *
	 * @param array{host: string, port: int, security: string, user: string, password: string}|null $smtpConfig
	 * @throws ValidationException if the recipient address is invalid
	 * @throws \RuntimeException if delivery fails
	 */
	public function sendInvoicePdf(
		string $to,
		string $subject,
		string $body,
		string $pdfContent,
		string $pdfFilename,
		Settings $settings,
		?array $smtpConfig = null,
	): ?string {
		if (!$this->mailer->validateMailAddress($to)) {
			throw new ValidationException('Die Empfängeradresse ist ungültig.');
		}

		if ($smtpConfig !== null) {
			return $this->sendViaPhpMailer($to, $subject, $body, $pdfContent, $pdfFilename, $settings, $smtpConfig);
		}

		return $this->sendViaNextcloud($to, $subject, $body, $pdfContent, $pdfFilename, $settings);
	}

	/**
	 * Verify an SMTP account (host/port/encryption/credentials) without sending,
	 * for the settings "test connection" button.
	 *
	 * @param array{host: string, port: int, security: string, user: string, password: string} $smtpConfig
	 * @throws \RuntimeException on connection/auth failure
	 */
	public function testSmtpConnection(array $smtpConfig): void {
		$mail = $this->buildPhpMailer($smtpConfig);
		try {
			if (!$mail->smtpConnect()) {
				throw new \RuntimeException('Verbindung zum SMTP-Server fehlgeschlagen.');
			}
			$mail->smtpClose();
		} catch (\PHPMailer\PHPMailer\Exception $e) {
			throw new \RuntimeException('SMTP-Test fehlgeschlagen: ' . $e->getMessage(), 0, $e);
		}
	}

	// --- Nextcloud system mailer (fallback) -----------------------------

	private function sendViaNextcloud(
		string $to,
		string $subject,
		string $body,
		string $pdfContent,
		string $pdfFilename,
		Settings $settings,
	): ?string {
		$message = $this->mailer->createMessage();
		$message->setTo([$to]);
		$from = $this->resolveNextcloudFrom($settings);
		if ($from !== null) {
			$message->setFrom($from);
			$message->setReplyTo($from);
		}
		$message->setSubject($subject);
		$message->setPlainBody($body);
		$message->attach($this->mailer->createAttachment($pdfContent, $pdfFilename, 'application/pdf'));

		$failed = $this->mailer->send($message);
		if (count($failed) > 0) {
			throw new \RuntimeException('Die E-Mail konnte nicht an alle Empfänger zugestellt werden: ' . implode(', ', $failed));
		}
		// The NC system mailer does not expose the generated Message-ID; the DATEV
		// confirmation channel therefore relies on the dedicated SMTP path below.
		return null;
	}

	/**
	 * @return array<string, string>|array<int, string>|null
	 */
	private function resolveNextcloudFrom(Settings $settings): ?array {
		$email = $settings->getSmtpFromEmail();
		if ($email === null || $email === '' || !$this->mailer->validateMailAddress($email)) {
			return null;
		}
		$name = $settings->getSmtpFromName();
		return ($name !== null && $name !== '') ? [$email => $name] : [$email];
	}

	// --- dedicated SMTP account (PHPMailer) -----------------------------

	/**
	 * @param array{host: string, port: int, security: string, user: string, password: string} $cfg
	 */
	private function sendViaPhpMailer(
		string $to,
		string $subject,
		string $body,
		string $pdfContent,
		string $pdfFilename,
		Settings $settings,
		array $cfg,
	): ?string {
		$fromEmail = trim((string)$settings->getSmtpFromEmail());
		if ($fromEmail === '') {
			$fromEmail = $cfg['user'];
		}
		if ($fromEmail === '' || !$this->mailer->validateMailAddress($fromEmail)) {
			throw new \RuntimeException('Kein gültiger Absender für den SMTP-Versand konfiguriert.');
		}
		$fromName = (string)$settings->getSmtpFromName();

		$mail = $this->buildPhpMailer($cfg);
		try {
			$mail->setFrom($fromEmail, $fromName);
			$mail->addReplyTo($fromEmail, $fromName);
			$mail->addAddress($to);
			$mail->Subject = $subject;
			$mail->isHTML(false);
			$mail->Body = $body;
			$mail->addStringAttachment($pdfContent, $pdfFilename, PHPMailer::ENCODING_BASE64, 'application/pdf');
			$mail->send();
			// Message-ID of the sent mail (e.g. "<id@host>"); the DATEV confirmation
			// references it via In-Reply-To, so we persist it for matching.
			return $mail->getLastMessageID();
		} catch (\PHPMailer\PHPMailer\Exception $e) {
			throw new \RuntimeException('Der SMTP-Versand ist fehlgeschlagen: ' . $e->getMessage(), 0, $e);
		}
	}

	/**
	 * @param array{host: string, port: int, security: string, user: string, password: string} $cfg
	 */
	private function buildPhpMailer(array $cfg): PHPMailer {
		$mail = new PHPMailer(true);
		$mail->isSMTP();
		$mail->Host = $cfg['host'];
		$mail->Port = $cfg['port'];
		$mail->CharSet = PHPMailer::CHARSET_UTF8;
		$mail->Timeout = 15;
		if ($cfg['user'] !== '') {
			$mail->SMTPAuth = true;
			$mail->Username = $cfg['user'];
			$mail->Password = $cfg['password'];
		}
		$mail->SMTPSecure = match ($cfg['security']) {
			'ssl' => PHPMailer::ENCRYPTION_SMTPS,
			'none' => '',
			default => PHPMailer::ENCRYPTION_STARTTLS,
		};
		if ($cfg['security'] === 'none') {
			$mail->SMTPAutoTLS = false;
		}
		return $mail;
	}
}
