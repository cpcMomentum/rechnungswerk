<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use BaconQrCode\Common\ErrorCorrectionLevel;
use BaconQrCode\Renderer\GDLibRenderer;
use BaconQrCode\Writer;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\Settings;
use Psr\Log\LoggerInterface;

/**
 * Girocode (#79): EPC-QR payload and image for the invoice PDF.
 *
 * Payload per EPC069-12 v3.1 (European Payments Council, primary source):
 * LF-separated fields, version 002 (BIC optional inside the EEA), charset 1
 * (UTF-8), error level M, total payload capped at 331 bytes, the last
 * populated element carries no trailing separator.
 */
class GirocodeService {

	/** EPC069-12: total payload is limited to 331 bytes. */
	public const MAX_PAYLOAD_BYTES = 331;

	public function __construct(
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Assemble the EPC payload, or null when no valid Girocode can be built:
	 * toggle off, IBAN/company name missing, or the amount outside the spec
	 * range 0.01–999999999.99 — which also excludes storno documents (negative
	 * total): a payment QR on a credit note would invite wrong transfers.
	 */
	public function buildPayload(Invoice $invoice, Settings $settings): ?string {
		if ($settings->getGirocodeEnabled() !== 1) {
			return null;
		}
		$iban = strtoupper((string)preg_replace('/\s+/', '', (string)$settings->getIban()));
		$name = trim((string)$settings->getCompanyName());
		if ($iban === '' || $name === '') {
			return null;
		}
		$totalCents = (int)$invoice->getTotalCents();
		if ($totalCents < 1 || $totalCents > 99999999999) {
			return null;
		}
		// Integer cents -> 'EUR123.45' (decimal point, no separators; AT-T002).
		$amount = sprintf('EUR%d.%02d', intdiv($totalCents, 100), $totalCents % 100);

		$bic = strtoupper((string)preg_replace('/\s+/', '', (string)$settings->getBic()));
		$number = trim((string)$invoice->getNumber());
		$reference = $number !== '' ? mb_substr('Rechnung ' . $number, 0, 140) : '';

		$lines = [
			'BCD',                    // service tag
			'002',                    // version 2: BIC optional (EEA)
			'1',                      // charset UTF-8
			'SCT',                    // identification
			$bic,                     // AT-C002 (optional in v002)
			mb_substr($name, 0, 70),  // AT-E001 beneficiary name
			$iban,                    // AT-C001
			$amount,                  // AT-T002
			'',                       // AT-T007 purpose (unused)
			'',                       // AT-T009 structured reference (unused; {Or} with next line)
			$reference,               // AT-T009 unstructured remittance info
		];
		// The last populated element is not followed by any separator.
		while ($lines !== [] && end($lines) === '') {
			array_pop($lines);
		}
		$payload = implode("\n", $lines);
		if (strlen($payload) > self::MAX_PAYLOAD_BYTES) {
			$this->logger->warning('Rechnungswerk: Girocode-Payload über 331 Bytes, QR wird weggelassen', [
				'invoice' => $invoice->getId(),
				'bytes' => strlen($payload),
			]);
			return null;
		}
		return $payload;
	}

	/**
	 * Render the payload as a PNG data URI for dompdf (GD is a required PHP
	 * module for Nextcloud, so it is always available). Error level M per
	 * EPC069-12. Returns null on render failure — the invoice must still
	 * render without the QR.
	 */
	public function renderDataUri(string $payload): ?string {
		try {
			$renderer = new GDLibRenderer(300);
			$png = (new Writer($renderer))->writeString($payload, 'UTF-8', ErrorCorrectionLevel::M());
			return 'data:image/png;base64,' . base64_encode($png);
		} catch (\Throwable $e) {
			$this->logger->error('Rechnungswerk: Girocode-Rendering fehlgeschlagen', ['exception' => $e]);
			return null;
		}
	}
}
