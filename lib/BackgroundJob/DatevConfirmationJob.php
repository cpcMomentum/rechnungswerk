<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\BackgroundJob;

use OCA\Rechnungswerk\Service\DatevConfirmationService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\TimedJob;
use Psr\Log\LoggerInterface;

/**
 * Periodically polls the IMAP mailbox for DATEV upload-mail confirmations and
 * reconciles pending invoices (#36). Runs every 15 minutes.
 */
class DatevConfirmationJob extends TimedJob {

	public function __construct(
		ITimeFactory $time,
		private readonly DatevConfirmationService $service,
		private readonly LoggerInterface $logger,
	) {
		parent::__construct($time);
		$this->setInterval(15 * 60);
	}

	protected function run($argument): void {
		try {
			$this->service->poll();
		} catch (\Throwable $e) {
			// Never let a mailbox/connection hiccup escalate; just log and retry next run.
			$this->logger->warning('Rechnungswerk: DATEV-Bestätigungsabruf fehlgeschlagen', ['exception' => $e]);
		}
	}
}
