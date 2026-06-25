<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\Files\IRootFolder;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/**
 * Result-oriented checks on the EN16931 XML mapping: assert the produced XML
 * carries the expected document type, amounts and VAT categories — not the
 * builder call sequence.
 */
class ZugferdServiceTest extends TestCase {

	private ZugferdService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->service = new ZugferdService(
			$this->createMock(IRootFolder::class),
			$this->createMock(LoggerInterface::class),
		);
	}

	private function settings(int $smallBusiness = 0): Settings {
		$s = new Settings();
		$s->setOwnerUserId('alice');
		$s->setCompanyName('Muster GmbH');
		$s->setCompanyAddress("Hauptstraße 1\n10115 Berlin");
		$s->setVatId('DE123456789');
		$s->setIban('DE02120300000000202051');
		$s->setBic('BYLADEM1001');
		$s->setSmallBusiness($smallBusiness);
		$s->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		$s->setNumberCounter(1);
		$s->setDefaultTaxRateBp(1900);
		return $s;
	}

	private function invoice(string $type = Invoice::TYPE_INVOICE): Invoice {
		$inv = new Invoice();
		$inv->setStatus(Invoice::STATUS_COMMITTED);
		$inv->setInvoiceType($type);
		$inv->setNumber('RE-2026-0001');
		$inv->setIssueDate(new DateTime('2026-06-16'));
		$inv->setRecipientName('Kunde AG');
		$inv->setRecipientAddress('Kundenweg 5');
		$inv->setRecipientPostalCode('80331');
		$inv->setRecipientCity('München');
		$inv->setRecipientCountry('DE');
		return $inv;
	}

	private function item(int $unitPriceCents, int $taxRateBp, int $lineTotalCents, string $qty = '2'): InvoiceItem {
		$i = new InvoiceItem();
		$i->setName('Beratung');
		$i->setQuantity($qty);
		$i->setUnitCode(InvoiceItem::UNIT_PIECE);
		$i->setUnitPriceCents($unitPriceCents);
		$i->setTaxRateBp($taxRateBp);
		$i->setLineTotalCents($lineTotalCents);
		$i->setSortOrder(0);
		return $i;
	}

	public function testStandardInvoiceCarriesTypeAmountsAndParties(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		$this->assertStringContainsString('RE-2026-0001', $xml);
		$this->assertStringContainsString('<ram:TypeCode>380</ram:TypeCode>', $xml);
		$this->assertStringContainsString('Muster GmbH', $xml);
		$this->assertStringContainsString('Kunde AG', $xml);
		$this->assertStringContainsString('<ram:GrandTotalAmount>238.00</ram:GrandTotalAmount>', $xml);
		$this->assertStringContainsString('<ram:TaxBasisTotalAmount>200.00</ram:TaxBasisTotalAmount>', $xml);
		$this->assertStringContainsString('<ram:CategoryCode>S</ram:CategoryCode>', $xml);
		$this->assertStringContainsString('<ram:RateApplicablePercent>19.00</ram:RateApplicablePercent>', $xml);
	}

	public function testMixedTaxRatesProduceTwoBreakdownGroups(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(30000); // 200,00 @19% + 100,00 @7%
		$invoice->setTotalCents(34500);    // +38,00 +7,00
		$invoice->setTaxBreakdown(json_encode([
			['rateBp' => 700, 'netCents' => 10000, 'taxCents' => 700],
			['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800],
		]));
		$items = [
			$this->item(10000, 1900, 20000),
			$this->item(10000, 700, 10000, '1'),
		];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		$this->assertStringContainsString('<ram:GrandTotalAmount>345.00</ram:GrandTotalAmount>', $xml);
		$this->assertStringContainsString('<ram:RateApplicablePercent>19.00</ram:RateApplicablePercent>', $xml);
		$this->assertStringContainsString('<ram:RateApplicablePercent>7.00</ram:RateApplicablePercent>', $xml);
		$this->assertStringContainsString('<ram:TaxTotalAmount currencyID="EUR">45.00</ram:TaxTotalAmount>', $xml);
	}

	public function testSmallBusinessIsTaxExemptCategoryE(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(20000); // no VAT
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 0, 'netCents' => 20000, 'taxCents' => 0]]));
		$items = [$this->item(10000, 0, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings(1));

		$this->assertStringContainsString('<ram:CategoryCode>E</ram:CategoryCode>', $xml);
		$this->assertStringContainsString('§ 19 UStG', $xml);
		$this->assertStringContainsString('<ram:GrandTotalAmount>200.00</ram:GrandTotalAmount>', $xml);
		$this->assertStringContainsString('<ram:TaxBasisTotalAmount>200.00</ram:TaxBasisTotalAmount>', $xml);
		$this->assertStringNotContainsString('<ram:CategoryCode>S</ram:CategoryCode>', $xml);
	}

	public function testReverseChargeIsCategoryAEWithZeroTax(): void {
		$invoice = $this->invoice();
		$invoice->setSpecialTaxCase(Invoice::SPECIAL_TAX_REVERSE_CHARGE);
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(20000); // no VAT charged under reverse charge
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 0]]));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		$this->assertStringContainsString('<ram:CategoryCode>AE</ram:CategoryCode>', $xml);
		$this->assertStringContainsString('<ram:GrandTotalAmount>200.00</ram:GrandTotalAmount>', $xml);
		$this->assertStringContainsString('Steuerschuldnerschaft des Leistungsempfängers', $xml);
		$this->assertStringNotContainsString('<ram:CategoryCode>S</ram:CategoryCode>', $xml);
	}

	public function testReferencesAndPerformanceDateInXml(): void {
		$invoice = $this->invoice();
		$invoice->setPerformanceDate(new DateTime('2026-06-10'));
		$invoice->setOrderNumber('BEST-77');
		$invoice->setReferenceNumber('REF-55');
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		$this->assertStringContainsString('BEST-77', $xml); // BT-13 buyer order ref
		$this->assertStringContainsString('REF-55', $xml);  // BT-14 seller order ref
		$this->assertStringContainsString('20260610', $xml); // BT-72 delivery date (CII format 102)
	}

	public function testPerformancePeriodInXml(): void {
		$invoice = $this->invoice();
		$invoice->setPerformancePeriodStart(new DateTime('2026-06-01'));
		$invoice->setPerformancePeriodEnd(new DateTime('2026-06-30'));
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		$this->assertStringContainsString('20260601', $xml); // BG-14 start
		$this->assertStringContainsString('20260630', $xml); // BG-14 end
	}

	public function testSellerAndBuyerContactInXml(): void {
		$settings = $this->settings();
		$settings->setContactPerson('Erika Muster');
		$settings->setContactPhone('+49 30 111');
		$settings->setContactEmail('kontakt@muster.de');
		$invoice = $this->invoice();
		$invoice->setRecipientContactPerson('Max Kunde');
		$invoice->setRecipientPhone('+49 89 222');
		$invoice->setRecipientEmail('einkauf@kunde.de');
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $settings);

		$this->assertStringContainsString('Erika Muster', $xml);    // BG-6 seller contact
		$this->assertStringContainsString('kontakt@muster.de', $xml);
		$this->assertStringContainsString('Max Kunde', $xml);       // BG-9 buyer contact
		$this->assertStringContainsString('einkauf@kunde.de', $xml);
	}

	public function testSellerContactOverrideWinsOverCompany(): void {
		$settings = $this->settings();
		$settings->setContactPerson('Firma Zentral');
		$settings->setContactEmail('zentrale@muster.de');
		$invoice = $this->invoice();
		$invoice->setSellerContactPerson('Axel Override');
		$invoice->setSellerContactEmail('axel@muster.de');
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $settings);

		$this->assertStringContainsString('Axel Override', $xml);
		$this->assertStringContainsString('axel@muster.de', $xml);
		$this->assertStringNotContainsString('Firma Zentral', $xml);
		$this->assertStringNotContainsString('zentrale@muster.de', $xml);
	}

	public function testCancellationIsCreditNoteType381(): void {
		$invoice = $this->invoice(Invoice::TYPE_CANCELLATION);
		$invoice->setSubtotalCents(-20000);
		$invoice->setTotalCents(-23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => -20000, 'taxCents' => -3800]]));
		$items = [$this->item(-10000, 1900, -20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		$this->assertStringContainsString('<ram:TypeCode>381</ram:TypeCode>', $xml);
	}

	public function testCancellationReferencesOriginalInvoice(): void {
		$invoice = $this->invoice(Invoice::TYPE_CANCELLATION);
		$invoice->setSubtotalCents(-20000);
		$invoice->setTotalCents(-23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => -20000, 'taxCents' => -3800]]));
		$items = [$this->item(-10000, 1900, -20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings(), 'RE-2026-0001');

		// BG-3 preceding-invoice reference carries the original invoice number.
		$this->assertStringContainsString('InvoiceReferencedDocument', $xml);
		$this->assertMatchesRegularExpression('/InvoiceReferencedDocument>.*RE-2026-0001/s', $xml);
	}
}
