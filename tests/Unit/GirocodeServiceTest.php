<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\GirocodeService;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Payload checks against EPC069-12 v3.1 (European Payments Council): field
 * order, version 002, UTF-8 charset flag, amount format, LF separator, no
 * trailing separator, 331-byte cap.
 */
class GirocodeServiceTest extends TestCase {

	private GirocodeService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->service = new GirocodeService($this->createMock(LoggerInterface::class));
	}

	private function settings(): Settings {
		$s = new Settings();
		$s->setGirocodeEnabled(1);
		$s->setCompanyName('Muster GmbH');
		$s->setIban('DE02 1203 0000 0000 2020 51');
		$s->setBic('BYLADEM1001');
		return $s;
	}

	private function invoice(int $totalCents = 53550): Invoice {
		$i = new Invoice();
		$i->setId(9);
		$i->setInvoiceType(Invoice::TYPE_INVOICE);
		$i->setNumber('RE-2026-0009');
		$i->setTotalCents($totalCents);
		return $i;
	}

	public function testPayloadMatchesEpcSpec(): void {
		$payload = $this->service->buildPayload($this->invoice(), $this->settings());

		$this->assertSame(
			"BCD\n002\n1\nSCT\nBYLADEM1001\nMuster GmbH\nDE02120300000000202051\nEUR535.50\n\n\nRechnung RE-2026-0009",
			$payload,
		);
	}

	public function testBicMayBeEmptyInVersion2(): void {
		$settings = $this->settings();
		$settings->setBic(null);
		$payload = $this->service->buildPayload($this->invoice(), $settings);

		$this->assertNotNull($payload);
		$lines = explode("\n", $payload);
		$this->assertSame('002', $lines[1]);
		$this->assertSame('', $lines[4], 'BIC line stays as empty placeholder');
		$this->assertSame('DE02120300000000202051', $lines[6]);
	}

	public function testTrailingEmptyFieldsAreTrimmed(): void {
		// Without an invoice number the unstructured remittance line is empty
		// and must be dropped together with the two empty lines before it.
		$invoice = $this->invoice();
		$invoice->setNumber(null);
		$payload = $this->service->buildPayload($invoice, $this->settings());

		$this->assertNotNull($payload);
		$this->assertStringEndsWith('EUR535.50', $payload);
		$this->assertStringNotContainsString("EUR535.50\n", $payload);
	}

	public function testAmountUsesDecimalPointFromIntegerCents(): void {
		$payload = $this->service->buildPayload($this->invoice(100), $this->settings());
		$this->assertStringContainsString("\nEUR1.00", (string)$payload);

		$payload = $this->service->buildPayload($this->invoice(1), $this->settings());
		$this->assertStringContainsString("\nEUR0.01", (string)$payload);
	}

	public function testDisabledToggleYieldsNoPayload(): void {
		$settings = $this->settings();
		$settings->setGirocodeEnabled(0);
		$this->assertNull($this->service->buildPayload($this->invoice(), $settings));
	}

	public function testMissingIbanYieldsNoPayload(): void {
		$settings = $this->settings();
		$settings->setIban(null);
		$this->assertNull($this->service->buildPayload($this->invoice(), $settings));
	}

	public function testStornoNegativeAmountYieldsNoPayload(): void {
		// A payment QR on a credit note would invite wrong transfers.
		$this->assertNull($this->service->buildPayload($this->invoice(-53550), $this->settings()));
	}

	public function testZeroAmountYieldsNoPayload(): void {
		$this->assertNull($this->service->buildPayload($this->invoice(0), $this->settings()));
	}

	public function testAmountAboveSpecMaximumYieldsNoPayload(): void {
		// EPC069-12: amount cannot be larger than 999999999.99.
		$this->assertNull($this->service->buildPayload($this->invoice(100000000000), $this->settings()));
	}

	public function testLongCompanyNameIsTruncatedTo70(): void {
		$settings = $this->settings();
		$settings->setCompanyName(str_repeat('N', 90));
		$payload = $this->service->buildPayload($this->invoice(), $settings);

		$this->assertNotNull($payload);
		$this->assertSame(70, mb_strlen(explode("\n", $payload)[5]));
	}

	public function testRenderDataUriProducesPng(): void {
		if (!extension_loaded('gd')) {
			$this->markTestSkipped('ext-gd nicht verfügbar (auf Nextcloud immer vorhanden, GD ist Pflichtmodul).');
		}
		$payload = $this->service->buildPayload($this->invoice(), $this->settings());
		$uri = $this->service->renderDataUri((string)$payload);

		$this->assertNotNull($uri);
		$this->assertStringStartsWith('data:image/png;base64,', $uri);
		$png = base64_decode(substr($uri, strlen('data:image/png;base64,')));
		$this->assertSame("\x89PNG", substr($png, 0, 4));
	}
}
