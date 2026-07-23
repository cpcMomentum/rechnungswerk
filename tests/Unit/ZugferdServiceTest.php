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
use OCA\Rechnungswerk\Service\GirocodeService;
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
			new GirocodeService($this->createMock(LoggerInterface::class)),
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

	public function testCancellationIsCorrectedInvoice384WithNegativeAmounts(): void {
		$invoice = $this->invoice(Invoice::TYPE_CANCELLATION);
		$invoice->setSubtotalCents(-20000);
		$invoice->setTotalCents(-23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => -20000, 'taxCents' => -3800]]));
		// Storno line: negative quantity, positive net price, negative line total.
		$items = [$this->item(10000, 1900, -20000, '-2')];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		// A storno is an EN16931 corrected invoice (384). The reversal is carried
		// by NEGATIVE amounts (subtotal + VAT), expressed via a negative quantity,
		// while the net price stays positive (BR-27).
		$this->assertStringContainsString('<ram:TypeCode>384</ram:TypeCode>', $xml);
		$this->assertStringContainsString('-200.00', $xml);   // negative line / subtotal
		$this->assertStringContainsString('-238.00', $xml);   // negative grand total
		$this->assertMatchesRegularExpression('/BilledQuantity[^>]*>-2/', $xml); // negative quantity
		$this->assertStringNotContainsString('-100.00', $xml); // net price stays positive
	}

	public function testCancellationReferencesOriginalInvoiceWithDate(): void {
		$invoice = $this->invoice(Invoice::TYPE_CANCELLATION);
		$invoice->setSubtotalCents(-20000);
		$invoice->setTotalCents(-23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => -20000, 'taxCents' => -3800]]));
		$items = [$this->item(10000, 1900, -20000, '-2')];

		$xml = $this->service->buildXml($invoice, $items, $this->settings(), 'RE-2026-0001', new DateTime('2026-05-16'));

		// BG-3 preceding-invoice reference carries the original number (BT-25) and
		// issue date (BT-26).
		$this->assertStringContainsString('InvoiceReferencedDocument', $xml);
		$this->assertMatchesRegularExpression('/InvoiceReferencedDocument>.*RE-2026-0001/s', $xml);
		$this->assertStringContainsString('20260516', $xml);
	}

	private function renderHtml(Invoice $invoice, array $items, Settings $settings, bool $preview): string {
		$m = new \ReflectionMethod(ZugferdService::class, 'renderHtml');
		return (string)$m->invoke($this->service, $invoice, $items, $settings, null, null, $preview);
	}

	public function testPreviewHtmlCarriesDraftMarkingAndNumberPlaceholder(): void {
		$invoice = $this->invoice();
		$invoice->setStatus(Invoice::STATUS_DRAFT);
		$invoice->setNumber(null); // drafts have no final number yet
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($invoice, $items, $this->settings(), true);

		$this->assertStringContainsString('ENTWURF', $html);
		$this->assertStringContainsString('keine g&uuml;ltige Rechnung', $html);
		$this->assertStringContainsString('wird beim Festschreiben vergeben', $html);
	}

	public function testGirocodeAppearsOnCommittedRenderButNotOnPreview(): void {
		if (!extension_loaded('gd')) {
			$this->markTestSkipped('ext-gd nicht verfügbar (auf Nextcloud immer vorhanden, GD ist Pflichtmodul).');
		}
		$settings = $this->settings();
		$settings->setGirocodeEnabled(1);
		$invoice = $this->invoice();
		$invoice->setTotalCents(23800);
		$invoice->setSubtotalCents(20000);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$committedHtml = $this->renderHtml($invoice, $items, $settings, false);
		$this->assertStringContainsString('Zahlen mit Girocode', $committedHtml);
		$this->assertStringContainsString('data:image/png;base64,', $committedHtml);

		// The draft preview must never carry a scannable payment code.
		$previewHtml = $this->renderHtml($invoice, $items, $settings, true);
		$this->assertStringNotContainsString('Zahlen mit Girocode', $previewHtml);
	}

	public function testRegularRenderHasNoDraftMarking(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($invoice, $items, $this->settings(), false);

		$this->assertStringNotContainsString('ENTWURF', $html);
		$this->assertStringNotContainsString('wird beim Festschreiben vergeben', $html);
		$this->assertStringContainsString('RE-2026-0001', $html);
	}

	public function testSmallBusinessRenderHidesVatColumnAndSubtotal(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(20000); // no VAT
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 0, 'netCents' => 20000, 'taxCents' => 0]]));
		$items = [$this->item(10000, 0, 20000)];

		$html = $this->renderHtml($invoice, $items, $this->settings(1), false);

		$this->assertStringNotContainsString('<th class="num">USt</th>', $html);
		$this->assertStringNotContainsString('Zwischensumme', $html);
		$this->assertStringNotContainsString('Steuerfrei', $html);
		$this->assertStringContainsString('§ 19 UStG', $html);
		$this->assertStringContainsString('Gesamtbetrag', $html);
	}

	public function testRegularRenderShowsVatColumnAndSubtotal(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($invoice, $items, $this->settings(), false);

		$this->assertStringContainsString('<th class="num">USt</th>', $html);
		$this->assertStringContainsString('Zwischensumme', $html);
	}

	public function testReferencesAndNotesAreExportedToXml(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		$invoice->setContractNumber('V-2026-004');
		$invoice->setProjectReference('OBJ-88');
		$invoice->setGreeting("Sehr geehrte Damen und Herren,\nvielen Dank für Ihren Auftrag.");
		$invoice->setExtraText('Bitte geben Sie bei Zahlung die Rechnungsnummer an.');
		$invoice->setCustomFields(json_encode(['Lieferung frei Haus', 'Es gelten unsere AGB.'], JSON_UNESCAPED_UNICODE));
		$items = [$this->item(10000, 1900, 20000)];

		$xml = $this->service->buildXml($invoice, $items, $this->settings());

		// BT-12 contract reference and BT-18 invoiced object (type code 130).
		$this->assertStringContainsString('ContractReferencedDocument', $xml);
		$this->assertStringContainsString('V-2026-004', $xml);
		$this->assertStringContainsString('AdditionalReferencedDocument', $xml);
		$this->assertStringContainsString('OBJ-88', $xml);
		$this->assertStringContainsString('<ram:TypeCode>130</ram:TypeCode>', $xml);
		// BT-22 notes: explicit invoice notes plus greeting and closing text.
		$this->assertStringContainsString('IncludedNote', $xml);
		$this->assertStringContainsString('Lieferung frei Haus', $xml);
		$this->assertStringContainsString('Es gelten unsere AGB.', $xml);
		$this->assertStringContainsString('vielen Dank für Ihren Auftrag.', $xml);
		$this->assertStringContainsString('Bitte geben Sie bei Zahlung die Rechnungsnummer an.', $xml);
	}

	public function testLegacyLabelValueCustomFieldsReadAsNotes(): void {
		$invoice = $this->invoice();
		$invoice->setSubtotalCents(20000);
		$invoice->setTotalCents(23800);
		$invoice->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		// Pre-#41 shape: abandoned key-value custom fields survive as "label: value" notes.
		$invoice->setCustomFields(json_encode([['label' => 'Kostenstelle', 'value' => 'KST-4711']]));
		$items = [$this->item(10000, 1900, 20000)];

		$this->assertSame(['Kostenstelle: KST-4711'], $invoice->getNotesArray());

		$xml = $this->service->buildXml($invoice, $items, $this->settings());
		$this->assertStringContainsString('Kostenstelle: KST-4711', $xml);

		$html = $this->renderHtml($invoice, $items, $this->settings(), false);
		$this->assertStringContainsString('Hinweise', $html);
		$this->assertStringContainsString('Kostenstelle: KST-4711', $html);
	}

	// --- Quotes (#111) ---------------------------------------------------

	private function quote(): Invoice {
		$q = $this->invoice(Invoice::TYPE_QUOTE);
		$q->setNumber('AN-2026-0001');
		$q->setValidUntil(new DateTime('2026-08-15'));
		$q->setSubtotalCents(20000);
		$q->setTotalCents(23800);
		$q->setTaxBreakdown(json_encode([['rateBp' => 1900, 'netCents' => 20000, 'taxCents' => 3800]]));
		return $q;
	}

	public function testQuoteRenderShowsAngebotTitleValidityAndFreeformNote(): void {
		$quote = $this->quote();
		$quote->setOfferFreeform(1);
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($quote, $items, $this->settings(), false);

		$this->assertStringContainsString('<h1>Angebot</h1>', $html);
		$this->assertStringContainsString('Angebotsnummer', $html);
		$this->assertStringContainsString('AN-2026-0001', $html);
		$this->assertStringContainsString('Gültig bis', $html);
		$this->assertStringContainsString('15.08.2026', $html);
		// Freibleibend note (§145 BGB) only when the flag is set.
		$this->assertStringContainsString('§ 145 BGB', $html);
		// A quote is not an invoice: no invoice title, no due date.
		$this->assertStringNotContainsString('<h1>Rechnung</h1>', $html);
		$this->assertStringNotContainsString('Rechnungsnummer', $html);
		$this->assertStringNotContainsString('Fällig am', $html);
	}

	public function testQuoteWithoutFreeformFlagOmitsTheFreeformNote(): void {
		$quote = $this->quote();
		$quote->setOfferFreeform(0);
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($quote, $items, $this->settings(), false);

		$this->assertStringContainsString('gültig bis 15.08.2026', $html);
		$this->assertStringNotContainsString('§ 145 BGB', $html);
	}

	public function testQuoteRenderHasNoBankDetailsOrGirocode(): void {
		$settings = $this->settings();
		$settings->setGirocodeEnabled(1); // even enabled, a quote must not show it
		$quote = $this->quote();
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($quote, $items, $settings, false);

		// No payment circle on a quote: no IBAN block, no scannable payment code.
		$this->assertStringNotContainsString('Zahlen mit Girocode', $html);
		$this->assertStringNotContainsString('IBAN:', $html);
	}

	public function testQuotePreviewCarriesQuoteWording(): void {
		$quote = $this->quote();
		$quote->setStatus(Invoice::STATUS_DRAFT);
		$quote->setNumber(null);
		$items = [$this->item(10000, 1900, 20000)];

		$html = $this->renderHtml($quote, $items, $this->settings(), true);

		$this->assertStringContainsString('ENTWURF', $html);
		$this->assertStringContainsString('kein g&uuml;ltiges Angebot', $html);
		$this->assertStringContainsString('wird beim Festschreiben vergeben', $html);
	}
}
