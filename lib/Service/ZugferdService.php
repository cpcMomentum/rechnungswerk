<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use Dompdf\Dompdf;
use Dompdf\Options;
use horstoeko\zugferd\codelists\ZugferdCountryCodes;
use horstoeko\zugferd\codelists\ZugferdCurrencyCodes;
use horstoeko\zugferd\codelists\ZugferdDocumentType;
use horstoeko\zugferd\codelists\ZugferdInvoiceType;
use horstoeko\zugferd\codelists\ZugferdVatCategoryCodes;
use horstoeko\zugferd\codelists\ZugferdVatTypeCodes;
use horstoeko\zugferd\ZugferdDocumentBuilder;
use horstoeko\zugferd\ZugferdDocumentPdfBuilder;
use horstoeko\zugferd\ZugferdProfiles;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\Settings;
use OCP\Files\File;
use OCP\Files\IRootFolder;
use Psr\Log\LoggerInterface;

/**
 * Builds EN16931-compliant ZUGFeRD documents from an invoice.
 *
 * The CII-XML mapping (buildXml) is pure and dependency-free so it can be unit
 * tested directly. generatePdf renders a branded HTML layout via dompdf and
 * embeds the XML to produce a PDF/A-3 (factur-x) e-invoice.
 *
 * Money is stored in integer cents and tax rates in basis points; horstoeko
 * expects decimal euro/percent values, so amounts are converted here exactly
 * once (cents/100, basis-points/100).
 */
class ZugferdService {

	/** §19 UStG exemption reason placed on the VAT breakdown (category E). */
	private const SMALL_BUSINESS_REASON = 'Steuerbefreit gemäß § 19 UStG (Kleinunternehmer)';

	/** Default §19 UStG hint printed on the invoice; configurable per company (#141). */
	public const SMALL_BUSINESS_NOTE_DEFAULT = 'Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.';

	public function __construct(
		private readonly IRootFolder $rootFolder,
		private readonly GirocodeService $girocodeService,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Map an invoice to an EN16931 Cross-Industry-Invoice XML string.
	 *
	 * @param InvoiceItem[] $items
	 */
	public function buildXml(Invoice $invoice, array $items, Settings $settings, ?string $relatedNumber = null, ?\DateTimeInterface $relatedIssueDate = null): string {
		return $this->buildDocument($invoice, $items, $settings, $relatedNumber, $relatedIssueDate)->getContent();
	}

	/**
	 * Render the branded invoice PDF with the embedded CII-XML (PDF/A-3).
	 *
	 * @param InvoiceItem[] $items
	 */
	public function generatePdf(Invoice $invoice, array $items, Settings $settings, ?string $relatedNumber = null, ?\DateTimeInterface $relatedIssueDate = null): string {
		// Nextcloud's bootstrap installs a libxml external-entity loader that
		// returns null for every resolution (base.php), which makes the
		// simplexml_load_file() call inside horstoeko's PDF metadata builder —
		// loading the library's own bundled XMP schema — fail. Restore the
		// default loader for the duration of the (fully trusted: our own XML and
		// the library's shipped assets) PDF assembly, then re-apply the
		// hardening immediately afterwards.
		return $this->withDefaultEntityLoader(function () use ($invoice, $items, $settings, $relatedNumber, $relatedIssueDate): string {
			$document = $this->buildDocument($invoice, $items, $settings, $relatedNumber, $relatedIssueDate);
			$visiblePdf = $this->renderVisiblePdf($invoice, $items, $settings, $relatedNumber, $relatedIssueDate);

			$pdfBuilder = ZugferdDocumentPdfBuilder::fromPdfString($document, $visiblePdf);
			$pdfBuilder->setAdditionalCreatorTool('RechnungsWerk');
			// In Germany only the 'Alternative' relationship is permitted for the
			// embedded e-invoice XML.
			$pdfBuilder->setAttachmentRelationshipTypeToAlternative();
			$pdfBuilder->generateDocument();

			return $pdfBuilder->downloadString();
		});
	}

	/**
	 * Render a DRAFT invoice as a plain preview PDF: the visible layout only,
	 * clearly watermarked as ENTWURF and WITHOUT the embedded EN16931 XML — a
	 * draft has no final number, so an e-invoice XML would be invalid and the
	 * file must not be mistakable for a real invoice.
	 *
	 * @param InvoiceItem[] $items
	 */
	public function generateDraftPreviewPdf(Invoice $invoice, array $items, Settings $settings): string {
		return $this->renderVisiblePdf($invoice, $items, $settings, preview: true);
	}

	/**
	 * Render a committed quote (#111) as a plain PDF: the visible layout only, no
	 * embedded EN16931 XML — a quote is not an e-invoice. The quote-specific
	 * wording (title "Angebot", "Gültig bis", Freibleibend note) comes from the
	 * document type inside renderHtml.
	 *
	 * @param InvoiceItem[] $items
	 */
	public function generateQuotePdf(Invoice $quote, array $items, Settings $settings): string {
		return $this->renderVisiblePdf($quote, $items, $settings);
	}

	/**
	 * Render a DRAFT quote (#111) as a watermarked preview PDF (visible layout
	 * only), the quote analogue of generateDraftPreviewPdf.
	 *
	 * @param InvoiceItem[] $items
	 */
	public function generateQuotePreviewPdf(Invoice $quote, array $items, Settings $settings): string {
		return $this->renderVisiblePdf($quote, $items, $settings, preview: true);
	}

	/**
	 * Run $fn with libxml's default external-entity loader, restoring
	 * Nextcloud's blocking loader afterwards (see base.php).
	 *
	 * @template T
	 * @param callable(): T $fn
	 * @return T
	 */
	private function withDefaultEntityLoader(callable $fn): mixed {
		libxml_set_external_entity_loader(null);
		try {
			return $fn();
		} finally {
			libxml_set_external_entity_loader(static fn () => null);
		}
	}

	// --- XML mapping -----------------------------------------------------

	/**
	 * Assemble the full EN16931 document from the invoice. Shared by buildXml
	 * (serialises to a string) and generatePdf (embeds the document).
	 *
	 * @param InvoiceItem[] $items
	 */
	private function buildDocument(Invoice $invoice, array $items, Settings $settings, ?string $relatedNumber = null, ?\DateTimeInterface $relatedIssueDate = null): ZugferdDocumentBuilder {
		$smallBusiness = $settings->getSmallBusiness() === 1;
		$builder = ZugferdDocumentBuilder::createNew(ZugferdProfiles::PROFILE_EN16931);

		// Document type: 380 for invoices, 384 (EN16931 corrected invoice) for
		// storno documents. A storno reverses the original with NEGATIVE amounts,
		// expressed by a negative quantity per line (the net price stays positive,
		// BR-27). The mandatory BT-25 reference to the original invoice makes the
		// document identifiable as the correction of that specific invoice.
		$typeCode = $invoice->getInvoiceType() === Invoice::TYPE_INVOICE
			? ZugferdInvoiceType::INVOICE
			: ZugferdInvoiceType::CORRECTION;
		$issueDate = $invoice->getIssueDate() ?? $invoice->getCommittedAt() ?? new DateTime();

		$builder->setDocumentInformation(
			$invoice->getNumber() ?? '',
			$typeCode,
			$issueDate,
			ZugferdCurrencyCodes::EURO,
		);

		// BG-3 / BT-25 (+ BT-26 issue date): reference to the preceding invoice
		// this storno corrects. Mandatory for a corrected invoice (384).
		if ($relatedNumber !== null && $relatedNumber !== '') {
			$builder->setDocumentInvoiceReferencedDocument($relatedNumber, null, $relatedIssueDate);
		}

		// §19 small business and the special tax cases (reverse charge /
		// intra-community / export) are all VAT-exempt: one tax category, 0 %.
		$taxExempt = $smallBusiness || $invoice->isTaxExemptCase();
		[$exemptCategory, $exemptReason] = $taxExempt
			? $this->exemptCategoryAndReason($invoice, $smallBusiness)
			: [null, null];

		$this->applySeller($builder, $settings, $invoice);
		$this->applyBuyer($builder, $invoice);
		$this->applyReferences($builder, $invoice);
		$this->applyNotes($builder, $invoice, $settings);
		$this->applyPayment($builder, $invoice, $settings);
		$this->applyPositions($builder, $items, $exemptCategory);
		$this->applyTaxBreakdown($builder, $invoice, $exemptCategory, $exemptReason);
		$this->applySummation($builder, $invoice);

		return $builder;
	}

	/**
	 * Document-level references and dates: performance date (BT-72), billing
	 * period (BG-14), buyer order ref (BT-13) and seller/our reference (BT-14).
	 */
	private function applyReferences(ZugferdDocumentBuilder $builder, Invoice $invoice): void {
		$start = $invoice->getPerformancePeriodStart();
		$end = $invoice->getPerformancePeriodEnd();
		if ($start !== null && $end !== null) {
			$builder->setDocumentBillingPeriod($start, $end, null);
		} elseif ($invoice->getPerformanceDate() !== null) {
			// BT-72: actual delivery / performance date.
			$builder->setDocumentSupplyChainEvent($invoice->getPerformanceDate());
		}
		if (($invoice->getOrderNumber() ?? '') !== '') {
			// BT-13: purchase order reference (from the buyer).
			$builder->setDocumentBuyerOrderReferencedDocument($invoice->getOrderNumber());
		}
		if (($invoice->getReferenceNumber() ?? '') !== '') {
			// BT-14: sales order reference (our own reference).
			$builder->setDocumentSellerOrderReferencedDocument($invoice->getReferenceNumber());
		}
		if (($invoice->getContractNumber() ?? '') !== '') {
			// BT-12: contract reference.
			$builder->setDocumentContractReferencedDocument($invoice->getContractNumber());
		}
		if (($invoice->getProjectReference() ?? '') !== '') {
			// BT-18: invoiced object identifier, expressed as an additional
			// referenced document with type code 130. The optional scheme
			// identifier (BT-18-1) is deliberately not set.
			$builder->addDocumentAdditionalReferencedDocument(
				$invoice->getProjectReference(),
				ZugferdDocumentType::INVOICING_DATA_SHEET,
			);
		}
	}

	/**
	 * BT-22 document notes: the explicit per-invoice notes plus the free text
	 * that previously only lived in the PDF (greeting/intro and closing text),
	 * so no human-readable text is lost in the machine-readable XML (#41).
	 */
	private function applyNotes(ZugferdDocumentBuilder $builder, Invoice $invoice, Settings $settings): void {
		foreach ($invoice->getNotesArray() as $note) {
			$builder->addDocumentNote($note);
		}
		if (($invoice->getGreeting() ?? '') !== '') {
			$builder->addDocumentNote($invoice->getGreeting());
		}
		$closing = $this->effectiveClosingText($invoice, $settings);
		if ($closing !== '') {
			$builder->addDocumentNote($closing);
		}
	}

	/**
	 * Closing text shown at the bottom of the invoice: per-invoice extraText,
	 * falling back to the configured default. Shared by the XML notes (BT-22)
	 * and the PDF rendering so both sides can never diverge.
	 */
	private function effectiveClosingText(Invoice $invoice, Settings $settings): string {
		return ($invoice->getExtraText() ?? '') !== ''
			? (string)$invoice->getExtraText()
			: ($settings->getClosingDefault() ?? '');
	}

	private function applySeller(ZugferdDocumentBuilder $builder, Settings $settings, Invoice $invoice): void {
		$builder->setDocumentSeller($settings->getCompanyName() ?? '');
		if (($settings->getVatId() ?? '') !== '') {
			$builder->addDocumentSellerVATRegistrationNumber($settings->getVatId());
		}
		if (($settings->getTaxNumber() ?? '') !== '') {
			$builder->addDocumentSellerTaxNumber($settings->getTaxNumber());
		}
		$addr = $this->parseGermanAddress($settings->getCompanyAddress());
		$builder->setDocumentSellerAddress(
			$addr['street'],
			null,
			null,
			$addr['postCode'],
			$addr['city'],
			ZugferdCountryCodes::GERMANY,
		);
		// BG-6: seller contact (name BT-41, phone BT-42, email BT-43).
		// Cascade: per-invoice override → issuing user's NC account → company.
		[$person, $phone, $email] = $this->effectiveSellerContact($invoice, $settings);
		if ($person !== null || $phone !== null || $email !== null) {
			$builder->setDocumentSellerContact($person, null, $phone, null, $email);
		}
	}

	/**
	 * Effective seller contact for an invoice: per-invoice override wins, else
	 * the central company contact. (The per-user NC-account default is baked in
	 * at editor time, so it arrives as the invoice override.)
	 *
	 * @return array{0: ?string, 1: ?string, 2: ?string} [person, phone, email]
	 */
	private function effectiveSellerContact(Invoice $invoice, Settings $settings): array {
		$pick = static fn (?string $override, ?string $fallback): ?string
			=> ($override ?? '') !== '' ? $override : (($fallback ?? '') !== '' ? $fallback : null);
		return [
			$pick($invoice->getSellerContactPerson(), $settings->getContactPerson()),
			$pick($invoice->getSellerContactPhone(), $settings->getContactPhone()),
			$pick($invoice->getSellerContactEmail(), $settings->getContactEmail()),
		];
	}

	private function applyBuyer(ZugferdDocumentBuilder $builder, Invoice $invoice): void {
		$builder->setDocumentBuyer($invoice->getRecipientName() ?? '');
		if (($invoice->getRecipientVatId() ?? '') !== '') {
			$builder->addDocumentBuyerVATRegistrationNumber($invoice->getRecipientVatId());
		}
		$builder->setDocumentBuyerAddress(
			$invoice->getRecipientAddress() ?? '',
			null,
			null,
			$invoice->getRecipientPostalCode() ?? '',
			$invoice->getRecipientCity() ?? '',
			$invoice->getRecipientCountry() ?: ZugferdCountryCodes::GERMANY,
		);
		// BT-10: Leitweg-ID / buyer reference (B2G).
		if (($invoice->getBuyerReference() ?? '') !== '') {
			$builder->setDocumentBuyerReference($invoice->getBuyerReference());
		}
		// BG-9: buyer contact (name BT-56, phone BT-57, email BT-58).
		$person = $invoice->getRecipientContactPerson();
		$phone = $invoice->getRecipientPhone();
		$email = $invoice->getRecipientEmail();
		if (($person ?? '') !== '' || ($phone ?? '') !== '' || ($email ?? '') !== '') {
			$builder->setDocumentBuyerContact(
				($person ?? '') !== '' ? $person : null,
				null,
				($phone ?? '') !== '' ? $phone : null,
				null,
				($email ?? '') !== '' ? $email : null,
			);
		}
	}

	private function applyPayment(ZugferdDocumentBuilder $builder, Invoice $invoice, Settings $settings): void {
		if (($settings->getIban() ?? '') !== '') {
			$builder->addDocumentPaymentMeanToCreditTransfer(
				$settings->getIban(),
				$settings->getCompanyName(),
				null,
				($settings->getBic() ?? '') !== '' ? $settings->getBic() : null,
			);
		}
		$dueDate = $invoice->getDueDate();
		$description = $this->paymentTermDescription($invoice);
		if ($dueDate !== null || $description !== null) {
			$builder->addDocumentPaymentTerm($description, $dueDate);
		}
	}

	/**
	 * @param InvoiceItem[] $items
	 * @param ?string $exemptCategory non-null = VAT-exempt case; this category at 0 % is used for every line
	 */
	private function applyPositions(ZugferdDocumentBuilder $builder, array $items, ?string $exemptCategory): void {
		$line = 0;
		foreach ($items as $item) {
			$line++;
			$builder->addNewPosition((string)$line);
			$builder->setDocumentPositionProductDetails(
				$item->getName() ?? '',
				$item->getDescription() !== null && $item->getDescription() !== '' ? $item->getDescription() : null,
			);
			$unitCode = $item->getUnitCode() ?? InvoiceItem::UNIT_PIECE;
			$this->applyNetPrice($builder, (int)$item->getUnitPriceE4(), $unitCode);
			$builder->setDocumentPositionQuantity(
				$this->quantityToFloat($item->getQuantity()),
				$unitCode,
			);
			if ($exemptCategory !== null) {
				$builder->addDocumentPositionTax($exemptCategory, ZugferdVatTypeCodes::VALUE_ADDED_TAX, 0.0);
			} else {
				[$category, $rate] = $this->vatCategory((int)$item->getTaxRateBp());
				$builder->addDocumentPositionTax($category, ZugferdVatTypeCodes::VALUE_ADDED_TAX, $rate);
			}
			$builder->setDocumentPositionLineSummation($this->toEuro($item->getLineTotalCents()));
		}
	}

	private function applyTaxBreakdown(ZugferdDocumentBuilder $builder, Invoice $invoice, ?string $exemptCategory, ?string $exemptReason): void {
		if ($exemptCategory !== null) {
			// VAT-exempt: a single tax group over the whole net amount at 0 %,
			// with the EN16931 exemption reason text.
			$builder->addDocumentTax(
				$exemptCategory,
				ZugferdVatTypeCodes::VALUE_ADDED_TAX,
				$this->toEuro((int)$invoice->getSubtotalCents()),
				0.0,
				0.0,
				$exemptReason,
			);
			return;
		}
		foreach ($invoice->getTaxBreakdownArray() as $group) {
			[$category, $rate] = $this->vatCategory((int)$group['rateBp']);
			$builder->addDocumentTax(
				$category,
				ZugferdVatTypeCodes::VALUE_ADDED_TAX,
				$this->toEuro((int)$group['netCents']),
				$this->toEuro((int)$group['taxCents']),
				$rate,
				null,
			);
		}
	}

	private function applySummation(ZugferdDocumentBuilder $builder, Invoice $invoice): void {
		$net = (int)$invoice->getSubtotalCents();
		$gross = (int)$invoice->getTotalCents();
		$builder->setDocumentSummation(
			$this->toEuro($gross),        // grandTotal
			$this->toEuro($gross),        // duePayable
			$this->toEuro($net),          // lineTotal
			0.0,                          // charges
			0.0,                          // allowances
			$this->toEuro($net),          // taxBasisTotal
			$this->toEuro($gross - $net), // taxTotal
		);
	}

	/**
	 * Pick the EN16931 VAT category code and percentage for a normally-taxed
	 * group. VAT-exempt cases are handled separately via exemptCategoryAndReason.
	 *
	 * @return array{0: string, 1: float} [categoryCode, ratePercent]
	 */
	private function vatCategory(int $rateBp): array {
		if ($rateBp === 0) {
			return [ZugferdVatCategoryCodes::ZERO_RATE_GOOD, 0.0];
		}
		return [ZugferdVatCategoryCodes::STAN_RATE, $rateBp / 100.0];
	}

	/**
	 * EN16931 VAT category code + exemption reason for a VAT-exempt invoice:
	 * §19 small business, reverse charge, intra-community supply or export.
	 *
	 * @return array{0: string, 1: ?string} [categoryCode, exemptionReason]
	 */
	private function exemptCategoryAndReason(Invoice $invoice, bool $smallBusiness): array {
		if ($smallBusiness) {
			return [ZugferdVatCategoryCodes::EXEM_FROM_TAX, self::SMALL_BUSINESS_REASON];
		}
		return match ($invoice->getSpecialTaxCase()) {
			Invoice::SPECIAL_TAX_REVERSE_CHARGE => [ZugferdVatCategoryCodes::VAT_REVE_CHAR, 'Steuerschuldnerschaft des Leistungsempfängers (Reverse Charge)'],
			Invoice::SPECIAL_TAX_INTRA_COMMUNITY => [ZugferdVatCategoryCodes::VAT_EXEM_FOR_EEA_INTR_SUPP_OF_GOOD_AND_SERV, 'Steuerfreie innergemeinschaftliche Lieferung'],
			Invoice::SPECIAL_TAX_EXPORT => [ZugferdVatCategoryCodes::FREE_EXPO_ITEM_TAX_NOT_CHAR, 'Steuerfreie Ausfuhrlieferung'],
			default => [ZugferdVatCategoryCodes::EXEM_FROM_TAX, null],
		};
	}

	/** Short label for the special tax case used in the totals tax row, or null. */
	private function specialTaxCaseShort(Invoice $invoice): ?string {
		return match ($invoice->getSpecialTaxCase()) {
			Invoice::SPECIAL_TAX_REVERSE_CHARGE => 'Reverse Charge (0 %)',
			Invoice::SPECIAL_TAX_INTRA_COMMUNITY => 'Innergem. Lieferung (steuerfrei)',
			Invoice::SPECIAL_TAX_EXPORT => 'Ausfuhr (steuerfrei)',
			default => null,
		};
	}

	/** Human-readable label for the special tax case (PDF), or null if none/regular. */
	private function specialTaxCaseLabel(Invoice $invoice): ?string {
		return match ($invoice->getSpecialTaxCase()) {
			Invoice::SPECIAL_TAX_REVERSE_CHARGE => 'Steuerschuldnerschaft des Leistungsempfängers (Reverse Charge).',
			Invoice::SPECIAL_TAX_INTRA_COMMUNITY => 'Steuerfreie innergemeinschaftliche Lieferung.',
			Invoice::SPECIAL_TAX_EXPORT => 'Steuerfreie Ausfuhrlieferung.',
			default => null,
		};
	}

	private function paymentTermDescription(Invoice $invoice): ?string {
		$parts = [];
		if ($invoice->getDueDate() !== null) {
			$parts[] = 'Zahlbar bis ' . $invoice->getDueDate()->format('d.m.Y');
		} elseif ($invoice->getPaymentTermDays() !== null) {
			$parts[] = 'Zahlbar innerhalb von ' . (int)$invoice->getPaymentTermDays() . ' Tagen';
		}
		if (($invoice->getDiscountTerms() ?? '') !== '') {
			$parts[] = (string)$invoice->getDiscountTerms();
		}
		return $parts === [] ? null : implode('. ', $parts);
	}

	/**
	 * Parse a free-text German address into street / postcode / city.
	 * The seller address is a single text field; a German address typically
	 * ends with a "PLZ City" line. Best effort — full validation is deferred.
	 *
	 * @return array{street: string, postCode: string, city: string}
	 */
	private function parseGermanAddress(?string $address): array {
		$result = ['street' => '', 'postCode' => '', 'city' => ''];
		if ($address === null || trim($address) === '') {
			return $result;
		}
		$lines = preg_split('/\r\n|\r|\n/', trim($address)) ?: [];
		$lines = array_values(array_filter(array_map('trim', $lines), static fn ($l) => $l !== ''));
		$streetLines = [];
		foreach ($lines as $lineText) {
			if ($result['postCode'] === '' && preg_match('/^(\d{4,5})\s+(.+)$/', $lineText, $m)) {
				$result['postCode'] = $m[1];
				$result['city'] = $m[2];
				continue;
			}
			$streetLines[] = $lineText;
		}
		$result['street'] = implode(', ', $streetLines);
		if ($result['street'] === '' && $result['city'] === '') {
			$result['street'] = trim($address);
		}
		return $result;
	}

	private function quantityToFloat(?string $quantity): float {
		if ($quantity === null) {
			return 0.0;
		}
		$normalized = str_replace(',', '.', trim($quantity));
		return is_numeric($normalized) ? (float)$normalized : 0.0;
	}

	private function toEuro(int $cents): float {
		return round($cents / 100, 2);
	}

	/**
	 * Write the item net price (BT-146) preserving the four-decimal precision of
	 * the stored e4 value (#147). horstoeko serialises amounts with two decimals,
	 * so a finer price (e4 not a whole cent) is expressed via a price base
	 * quantity of 100 (BT-149/150): e4/100 is an exact two-decimal amount and the
	 * per-unit price = (e4/100) / 100 keeps all four decimals. Whole-cent prices
	 * use the ordinary per-unit form.
	 */
	private function applyNetPrice(ZugferdDocumentBuilder $builder, int $e4, string $unitCode): void {
		if ($e4 % 100 === 0) {
			$builder->setDocumentPositionNetPrice(round($e4 / 10000, 2));
		} else {
			$builder->setDocumentPositionNetPrice(round($e4 / 100, 2), 100.0, $unitCode);
		}
	}

	// --- PDF rendering ---------------------------------------------------

	/**
	 * @param InvoiceItem[] $items
	 */
	private function renderVisiblePdf(Invoice $invoice, array $items, Settings $settings, ?string $relatedNumber = null, ?\DateTimeInterface $relatedIssueDate = null, bool $preview = false): string {
		$html = $this->renderHtml($invoice, $items, $settings, $relatedNumber, $relatedIssueDate, $preview);
		$options = new Options();
		$options->set('defaultFont', 'DejaVu Sans');
		$options->set('isRemoteEnabled', false);
		$dompdf = new Dompdf($options);
		$dompdf->loadHtml($html, 'UTF-8');
		$dompdf->setPaper('A4');
		$dompdf->render();
		return (string)$dompdf->output();
	}

	/**
	 * @param InvoiceItem[] $items
	 */
	private function renderHtml(Invoice $invoice, array $items, Settings $settings, ?string $relatedNumber = null, ?\DateTimeInterface $relatedIssueDate = null, bool $preview = false): string {
		$accent = $this->sanitizeColor($settings->getAccentColor()) ?? '#2c3e50';
		$logo = $this->loadLogoDataUri($settings);
		$e = static fn (?string $s): string => htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');

		$company = $e($settings->getCompanyName());
		$companyAddr = nl2br($e($settings->getCompanyAddress()));
		$logoHtml = $logo !== null ? '<img src="' . $logo . '" class="logo" alt="">' : '';

		// BG-6 seller contact line in the company block (invoice override → company).
		[$scPerson, $scPhone, $scEmail] = $this->effectiveSellerContact($invoice, $settings);
		$sellerContact = array_filter([
			$scPerson !== null ? 'Ansprechpartner: ' . $e($scPerson) : null,
			$scPhone !== null ? 'Tel.: ' . $e($scPhone) : null,
			$scEmail !== null ? 'E-Mail: ' . $e($scEmail) : null,
		]);
		$sellerContactHtml = $sellerContact !== []
			? '<div class="company-contact">' . implode(' &middot; ', $sellerContact) . '</div>' : '';

		$country = (string)$invoice->getRecipientCountry();
		$recipientLines = array_filter([
			$invoice->getRecipientName(),
			($invoice->getRecipientContactPerson() ?? '') !== '' ? 'z. Hd. ' . $invoice->getRecipientContactPerson() : null,
			$invoice->getRecipientAddress(),
			trim((string)$invoice->getRecipientPostalCode() . ' ' . (string)$invoice->getRecipientCity()),
			($country !== '' && $country !== 'DE') ? $country : null,
		], static fn ($l) => trim((string)$l) !== '');
		$recipient = implode('<br>', array_map($e, $recipientLines));

		$isQuote = $invoice->getInvoiceType() === Invoice::TYPE_QUOTE;
		$title = match ($invoice->getInvoiceType()) {
			Invoice::TYPE_INVOICE => 'Rechnung',
			Invoice::TYPE_QUOTE => 'Angebot',
			default => 'Stornorechnung',
		};
		$issueDate = $invoice->getIssueDate() ?? $invoice->getCommittedAt();
		$meta = [];
		$number = $preview && ($invoice->getNumber() ?? '') === ''
			? 'wird beim Festschreiben vergeben'
			: $e($invoice->getNumber());
		$meta[] = [$isQuote ? 'Angebotsnummer' : 'Rechnungsnummer', $number];
		if ($issueDate !== null) {
			$meta[] = [$isQuote ? 'Angebotsdatum' : 'Rechnungsdatum', $issueDate->format('d.m.Y')];
		}
		// BT-72 / BG-14: performance date or period.
		$ps = $invoice->getPerformancePeriodStart();
		$pe = $invoice->getPerformancePeriodEnd();
		if ($ps !== null && $pe !== null) {
			$meta[] = ['Leistungszeitraum', $ps->format('d.m.Y') . ' – ' . $pe->format('d.m.Y')];
		} elseif ($invoice->getPerformanceDate() !== null) {
			$meta[] = ['Leistungsdatum', $invoice->getPerformanceDate()->format('d.m.Y')];
		}
		if ($isQuote) {
			if ($invoice->getValidUntil() !== null) {
				$meta[] = ['Gültig bis', $invoice->getValidUntil()->format('d.m.Y')];
			}
		} elseif ($invoice->getDueDate() !== null) {
			$meta[] = ['Fällig am', $invoice->getDueDate()->format('d.m.Y')];
		}
		if (($invoice->getOrderNumber() ?? '') !== '') {
			$meta[] = ['Bestellnummer', $e($invoice->getOrderNumber())];
		}
		if (($invoice->getReferenceNumber() ?? '') !== '') {
			$meta[] = ['Referenznummer', $e($invoice->getReferenceNumber())];
		}
		if (($invoice->getBuyerReference() ?? '') !== '') {
			$meta[] = ['Leitweg-ID', $e($invoice->getBuyerReference())];
		}
		if (($invoice->getContractNumber() ?? '') !== '') {
			$meta[] = ['Vertragsnummer', $e($invoice->getContractNumber())];
		}
		if (($invoice->getProjectReference() ?? '') !== '') {
			$meta[] = ['Objekt-/Projektkennung', $e($invoice->getProjectReference())];
		}
		if (($invoice->getRecipientVatId() ?? '') !== '') {
			$meta[] = ['USt-IdNr. (Kunde)', $e($invoice->getRecipientVatId())];
		}
		if ($relatedNumber !== null && $relatedNumber !== '') {
			$reference = $relatedIssueDate !== null
				? $e($relatedNumber) . ' vom ' . $relatedIssueDate->format('d.m.Y')
				: $e($relatedNumber);
			$meta[] = ['Storno zu Rechnung', $reference];
		}
		$metaHtml = '';
		foreach ($meta as [$label, $value]) {
			$metaHtml .= '<tr><td class="meta-label">' . $label . '</td><td>' . $value . '</td></tr>';
		}

		$smallBusiness = $settings->getSmallBusiness() === 1;
		$exempt = $smallBusiness || $invoice->isTaxExemptCase();

		$rows = '';
		foreach ($items as $item) {
			$desc = ($item->getDescription() ?? '') !== ''
				? '<div class="item-desc">' . nl2br($e($item->getDescription())) . '</div>' : '';
			$ratePercent = $exempt ? 0 : (int)$item->getTaxRateBp() / 100;
			$rows .= '<tr>'
				. '<td>' . $e($item->getName()) . $desc . '</td>'
				. '<td class="num">' . $e($this->formatQuantity($item->getQuantity())) . ' ' . $e($this->unitLabel($item->getUnitCode())) . '</td>'
				. '<td class="num">' . $this->formatUnitPrice((int)$item->getUnitPriceE4()) . '</td>'
				. '<td class="num">' . rtrim(rtrim(number_format($ratePercent, 1, ',', '.'), '0'), ',') . ' %</td>'
				. '<td class="num">' . $this->formatMoney((int)$item->getLineTotalCents()) . '</td>'
				. '</tr>';
		}

		$taxRows = '';
		if ($exempt) {
			$label = $smallBusiness ? 'Steuerfrei (§ 19 UStG)' : ($this->specialTaxCaseShort($invoice) ?? 'Steuerfrei');
			$taxRows = '<tr><td>' . $e($label) . '</td><td class="num">' . $this->formatMoney(0) . '</td></tr>';
		} else {
			foreach ($invoice->getTaxBreakdownArray() as $group) {
				$ratePercent = (int)$group['rateBp'] / 100;
				$label = 'USt ' . rtrim(rtrim(number_format($ratePercent, 1, ',', '.'), '0'), ',') . ' % auf ' . $this->formatMoney((int)$group['netCents']);
				$taxRows .= '<tr><td>' . $label . '</td><td class="num">' . $this->formatMoney((int)$group['taxCents']) . '</td></tr>';
			}
		}

		$paymentInfo = '';
		if (($settings->getIban() ?? '') !== '' && !$isQuote) {
			$bank = array_filter([
				$settings->getBankName() ? 'Bank: ' . $e($settings->getBankName()) : null,
				'IBAN: ' . $e($settings->getIban()),
				($settings->getBic() ?? '') !== '' ? 'BIC: ' . $e($settings->getBic()) : null,
			]);
			$paymentInfo = '<p class="bank">' . implode(' &middot; ', $bank) . '</p>';
		}

		// Girocode (#79): payment QR next to the bank details — only on final
		// documents. The draft preview deliberately gets NO scannable payment
		// code (someone could pay an uncommitted draft), and the builder itself
		// excludes storno documents via the amount guard.
		$girocodeHtml = '';
		if (!$preview && !$isQuote) {
			$payload = $this->girocodeService->buildPayload($invoice, $settings);
			$qrUri = $payload !== null ? $this->girocodeService->renderDataUri($payload) : null;
			if ($qrUri !== null) {
				$girocodeHtml = '<table class="girocode"><tr>'
					. '<td class="girocode-img"><img src="' . $qrUri . '" alt=""></td>'
					. '<td class="girocode-label"><strong>Zahlen mit Girocode</strong><br>'
					. 'QR-Code mit der Banking-App scannen &ndash; Empf&auml;nger, Betrag und Verwendungszweck werden automatisch &uuml;bernommen.</td>'
					. '</tr></table>';
			}
		}
		$termDesc = $this->paymentTermDescription($invoice);
		$termHtml = ($termDesc !== null && !$isQuote) ? '<p>' . $e($termDesc) . '</p>' : '';

		// Quote-only notes (#111): validity date ("gültig bis") and, if flagged, the
		// freibleibend/unverbindlich hint (§145 BGB). A quote carries no payment
		// terms or bank details, so this replaces the invoice payment block.
		$quoteNoteHtml = '';
		if ($isQuote) {
			$quoteParts = [];
			if ($invoice->getValidUntil() !== null) {
				$quoteParts[] = 'Dieses Angebot ist gültig bis ' . $invoice->getValidUntil()->format('d.m.Y') . '.';
			}
			if ($invoice->getOfferFreeform() === 1) {
				$quoteParts[] = 'Freibleibendes Angebot – alle Angaben sind freibleibend und unverbindlich (§ 145 BGB).';
			}
			if ($quoteParts !== []) {
				$quoteNoteHtml = '<p class="quote-note">' . $e(implode(' ', $quoteParts)) . '</p>';
			}
		}

		// VAT-exemption note (only for the special tax cases; §19 is already on the tax row).
		$exemptNote = (!$smallBusiness && $invoice->isTaxExemptCase()) ? $this->specialTaxCaseLabel($invoice) : null;
		$exemptNoteHtml = $exemptNote !== null ? '<p class="exempt-note">' . $e($exemptNote) . '</p>' : '';

		// §19 UStG small-business hint (#141): a configurable sentence printed on the
		// invoice below the totals; falls back to the default wording when unset.
		$smallBusinessNoteHtml = '';
		if ($smallBusiness && !$isQuote) {
			$note = trim((string)($settings->getSmallBusinessNote() ?? ''));
			if ($note === '') {
				$note = self::SMALL_BUSINESS_NOTE_DEFAULT;
			}
			$smallBusinessNoteHtml = '<p class="exempt-note">' . $e($note) . '</p>';
		}

		// Salutation + intro text belong ABOVE the line items.
		$greeting = ($invoice->getGreeting() ?? '') !== '' ? '<p>' . nl2br($e($invoice->getGreeting())) . '</p>' : '';
		$introHtml = $greeting !== '' ? '<div class="intro">' . $greeting . '</div>' : '';
		// Closing text belongs at the BOTTOM.
		$closingText = $this->effectiveClosingText($invoice, $settings);
		$closing = $closingText !== '' ? '<p>' . nl2br($e($closingText)) . '</p>' : '';

		// Plain-text invoice notes (BT-22): rendered as a visible block so the
		// PDF matches what goes into the XML as IncludedNote (#41).
		$notes = $invoice->getNotesArray();
		$notesHtml = '';
		if ($notes !== []) {
			$noteParas = implode('', array_map(static fn (string $n): string => '<p>' . nl2br($e($n)) . '</p>', $notes));
			$notesHtml = '<div class="notes"><strong>Hinweise</strong>' . $noteParas . '</div>';
		}

		$taxIds = array_filter([
			($settings->getVatId() ?? '') !== '' ? 'USt-IdNr.: ' . $e($settings->getVatId()) : null,
			($settings->getTaxNumber() ?? '') !== '' ? 'Steuernummer: ' . $e($settings->getTaxNumber()) : null,
		]);
		$footer = $taxIds !== [] ? '<div class="footer">' . implode(' &middot; ', $taxIds) . '</div>' : '';

		// Preview marking: diagonal ENTWURF watermark on every page (position:
		// fixed repeats per page in dompdf) plus an explicit banner — the
		// preview must never be mistakable for a real, committed invoice.
		$draftBannerText = $isQuote
			? 'Entwurf &ndash; Vorschau, kein g&uuml;ltiges Angebot'
			: 'Entwurf &ndash; Vorschau, keine g&uuml;ltige Rechnung';
		$watermarkHtml = $preview
			? '<div class="draft-watermark">ENTWURF</div>'
			. '<div class="draft-banner">' . $draftBannerText . '</div>'
			: '';

		return <<<HTML
<!DOCTYPE html>
<html lang="de"><head><meta charset="UTF-8"><style>
* { font-family: "DejaVu Sans", sans-serif; }
body { font-size: 10pt; color: #1a1a1a; margin: 0; }
.header { overflow: hidden; margin-bottom: 24px; }
.header .logo { max-height: 70px; max-width: 220px; float: right; }
.header .company { font-size: 9pt; color: #555; }
.header .company .name { font-size: 12pt; font-weight: bold; color: {$accent}; }
.sender-line { font-size: 7pt; color: #777; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 6px; }
.recipient { margin: 8px 0 24px; }
h1 { font-size: 18pt; color: {$accent}; margin: 0 0 4px; }
table.meta { font-size: 9pt; margin-bottom: 16px; }
table.meta td { padding: 1px 8px 1px 0; }
table.meta .meta-label { color: #666; }
table.items { width: 100%; border-collapse: collapse; margin-bottom: 4px; table-layout: fixed; }
table.items th { background: {$accent}; color: #fff; text-align: left; padding: 6px 8px; font-size: 9pt; }
table.items td { padding: 6px 8px; border-bottom: 1px solid #e0e0e0; vertical-align: top; word-wrap: break-word; }
table.items td.num, table.items th.num { text-align: right; white-space: nowrap; }
.item-desc { color: #666; font-size: 8.5pt; margin-top: 2px; }
.company-contact { font-size: 8.5pt; color: #555; margin-top: 2px; }
.intro { margin: 0 0 14px; font-size: 9.5pt; }
.intro p { margin: 4px 0; }
.exempt-note { background: #f5f5f5; padding: 6px 8px; font-weight: bold; }
.quote-note { background: #f5f5f5; padding: 6px 8px; font-size: 9.5pt; }
.totals { width: 45%; float: right; margin-top: 8px; }
.totals table { width: 100%; border-collapse: collapse; }
.totals td { padding: 3px 8px; }
.totals td.num { text-align: right; }
.totals .grand td { border-top: 2px solid {$accent}; font-weight: bold; font-size: 11pt; color: {$accent}; }
.payment { clear: both; padding-top: 24px; font-size: 9.5pt; }
.bank { background: #f5f5f5; padding: 6px 8px; }
.notes { margin-top: 12px; }
.notes p { margin: 2px 0; }
.footer { margin-top: 28px; padding-top: 6px; border-top: 1px solid #ccc; font-size: 8pt; color: #777; text-align: center; }
.draft-watermark { position: fixed; top: 38%; left: -10%; width: 120%; text-align: center; font-size: 84pt; font-weight: bold; letter-spacing: 14pt; color: #f0d5d5; transform: rotate(-30deg); }
.draft-banner { background: #fdecec; color: #b93a3a; border: 1px solid #e8b4b4; padding: 6px 10px; margin-bottom: 14px; font-weight: bold; font-size: 10pt; text-align: center; }
table.girocode { margin-top: 10px; border-collapse: collapse; }
table.girocode td { vertical-align: middle; }
td.girocode-img img { width: 96px; height: 96px; }
td.girocode-label { padding-left: 10px; font-size: 8.5pt; color: #555; max-width: 260px; }
</style></head><body>
{$watermarkHtml}
<div class="header">
  {$logoHtml}
  <div class="company"><span class="name">{$company}</span><br>{$companyAddr}{$sellerContactHtml}</div>
</div>
<div class="sender-line">{$company}</div>
<div class="recipient">{$recipient}</div>
<h1>{$title}</h1>
<table class="meta">{$metaHtml}</table>
{$introHtml}
<table class="items">
  <colgroup><col style="width: 46%;"><col style="width: 14%;"><col style="width: 14%;"><col style="width: 10%;"><col style="width: 16%;"></colgroup>
  <thead><tr><th>Beschreibung</th><th class="num">Menge</th><th class="num">Einzelpreis</th><th class="num">USt</th><th class="num">Betrag</th></tr></thead>
  <tbody>{$rows}</tbody>
</table>
<div class="totals"><table>
  <tr><td>Zwischensumme</td><td class="num">{$this->formatMoney((int)$invoice->getSubtotalCents())}</td></tr>
  {$taxRows}
  <tr class="grand"><td>Gesamtbetrag</td><td class="num">{$this->formatMoney((int)$invoice->getTotalCents())}</td></tr>
</table></div>
<div class="payment">
  {$exemptNoteHtml}
  {$smallBusinessNoteHtml}
  {$quoteNoteHtml}
  {$termHtml}
  {$paymentInfo}
  {$girocodeHtml}
  {$notesHtml}
  {$closing}
</div>
{$footer}
</body></html>
HTML;
	}

	private function loadLogoDataUri(Settings $settings): ?string {
		$fileId = $settings->getLogoFileId();
		if ($fileId === null) {
			return null;
		}
		try {
			// Resolve globally, not via getUserFolder(): the central company
			// settings are owned by the COMPANY_KEY sentinel (not a real user),
			// and the logo is picked from the admin's files. getById() on the
			// root folder finds the node regardless of owner.
			$nodes = $this->rootFolder->getById($fileId);
			$node = $nodes[0] ?? null;
			if (!$node instanceof File) {
				return null;
			}
			$mime = $node->getMimeType();
			// Match the formats the picker allows and dompdf can embed reliably.
			if (!in_array($mime, ['image/png', 'image/jpeg', 'image/gif'], true)) {
				return null;
			}
			$content = $node->getContent();
			return 'data:' . $mime . ';base64,' . base64_encode($content);
		} catch (\Throwable $e) {
			$this->logger->warning('Rechnungswerk: could not load invoice logo', ['exception' => $e]);
			return null;
		}
	}

	private function sanitizeColor(?string $color): ?string {
		if ($color !== null && preg_match('/^#[0-9a-fA-F]{6}([0-9a-fA-F]{2})?$/', $color)) {
			// dompdf does not understand 8-digit hex; drop the alpha channel.
			return substr($color, 0, 7);
		}
		return null;
	}

	private function formatMoney(int $cents): string {
		return number_format($cents / 100, 2, ',', '.') . ' €';
	}

	/**
	 * Unit price (1/10000 €, #147) formatted with 2–4 decimals: always at least
	 * two, up to four, trailing zeros beyond the second decimal trimmed. So 2,00 €
	 * stays "2,00 €", 0,3456 € shows "0,3456 €", 0,3500 € shows "0,35 €".
	 */
	private function formatUnitPrice(int $e4): string {
		$s = number_format($e4 / 10000, 4, ',', '.');
		// Trim trailing zeros beyond the second decimal, keeping at least two.
		$s = preg_replace('/(,\d\d)(\d*?)0+$/', '$1$2', $s) ?? $s;
		return $s . ' €';
	}

	private function formatQuantity(?string $quantity): string {
		$value = $this->quantityToFloat($quantity);
		$formatted = number_format($value, 3, ',', '.');
		// Trim trailing zero decimals for a cleaner look (2,500 -> 2,5; 3,000 -> 3).
		return rtrim(rtrim($formatted, '0'), ',');
	}

	private function unitLabel(?string $unitCode): string {
		return match ($unitCode) {
			InvoiceItem::UNIT_HOUR => 'Std.',
			InvoiceItem::UNIT_DAY => 'Tag(e)',
			InvoiceItem::UNIT_MONTH => 'Monat(e)',
			InvoiceItem::UNIT_KILOGRAM => 'kg',
			InvoiceItem::UNIT_LUMP_SUM => 'Pausch.',
			default => 'Stk.',
		};
	}
}
