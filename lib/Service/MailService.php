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

/**
 * Sends invoice PDFs by email through the Nextcloud mailer.
 *
 * The sender profile comes from the owner's settings (smtp_from_*); if it is
 * not set or invalid, Nextcloud's configured system sender is used instead.
 */
class MailService {

	public function __construct(
		private readonly IMailer $mailer,
	) {
	}

	/**
	 * Send a single invoice PDF as a mail attachment.
	 *
	 * @throws ValidationException if the recipient address is invalid
	 * @throws \RuntimeException if the mailer reports failed recipients
	 */
	public function sendInvoicePdf(
		string $to,
		string $subject,
		string $body,
		string $pdfContent,
		string $pdfFilename,
		Settings $settings,
	): void {
		if (!$this->mailer->validateMailAddress($to)) {
			throw new ValidationException('Die Empfängeradresse ist ungültig.');
		}

		$message = $this->mailer->createMessage();
		$message->setTo([$to]);
		$from = $this->resolveFrom($settings);
		if ($from !== null) {
			$message->setFrom($from);
			$message->setReplyTo($from);
		}
		$message->setSubject($subject);
		$message->setPlainBody($body);

		$attachment = $this->mailer->createAttachment($pdfContent, $pdfFilename, 'application/pdf');
		$message->attach($attachment);

		$failed = $this->mailer->send($message);
		if (count($failed) > 0) {
			throw new \RuntimeException('Die E-Mail konnte nicht an alle Empfänger zugestellt werden: ' . implode(', ', $failed));
		}
	}

	/**
	 * Build the configured sender profile, or null to fall back to the
	 * Nextcloud system sender.
	 *
	 * @return array<string, string>|array<int, string>|null
	 */
	private function resolveFrom(Settings $settings): ?array {
		$email = $settings->getSmtpFromEmail();
		if ($email === null || $email === '' || !$this->mailer->validateMailAddress($email)) {
			return null;
		}
		$name = $settings->getSmtpFromName();
		return ($name !== null && $name !== '') ? [$email => $name] : [$email];
	}
}
