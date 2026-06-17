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

	public function __construct(
		private readonly IRootFolder $rootFolder,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Map an invoice to an EN16931 Cross-Industry-Invoice XML string.
	 *
	 * @param InvoiceItem[] $items
	 */
	public function buildXml(Invoice $invoice, array $items, Settings $settings): string {
		return $this->buildDocument($invoice, $items, $settings)->getContent();
	}

	/**
	 * Render the branded invoice PDF with the embedded CII-XML (PDF/A-3).
	 *
	 * @param InvoiceItem[] $items
	 */
	public function generatePdf(Invoice $invoice, array $items, Settings $settings): string {
		// Nextcloud's bootstrap installs a libxml external-entity loader that
		// returns null for every resolution (base.php), which makes the
		// simplexml_load_file() call inside horstoeko's PDF metadata builder —
		// loading the library's own bundled XMP schema — fail. Restore the
		// default loader for the duration of the (fully trusted: our own XML and
		// the library's shipped assets) PDF assembly, then re-apply the
		// hardening immediately afterwards.
		return $this->withDefaultEntityLoader(function () use ($invoice, $items, $settings): string {
			$document = $this->buildDocument($invoice, $items, $settings);
			$visiblePdf = $this->renderVisiblePdf($invoice, $items, $settings);

			$pdfBuilder = ZugferdDocumentPdfBuilder::fromPdfString($document, $visiblePdf);
			$pdfBuilder->setAdditionalCreatorTool('Rechnungswerk');
			// In Germany only the 'Alternative' relationship is permitted for the
			// embedded e-invoice XML.
			$pdfBuilder->setAttachmentRelationshipTypeToAlternative();
			$pdfBuilder->generateDocument();

			return $pdfBuilder->downloadString();
		});
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
	private function buildDocument(Invoice $invoice, array $items, Settings $settings): ZugferdDocumentBuilder {
		$smallBusiness = $settings->getSmallBusiness() === 1;
		$builder = ZugferdDocumentBuilder::createNew(ZugferdProfiles::PROFILE_EN16931);

		// Document type: 380 invoice, 381 for cancellation/credit-note documents.
		// The embedded XML deliberately mirrors the stored document 1:1 — including
		// the sign of the amounts — so the machine-readable part always matches the
		// visible PDF (a storno is stored, and shown, with negative amounts). Strict
		// KoSIT/EN16931 conformance of the storno (381) path is a later milestone;
		// normal invoices (380) are the validated happy path for this iteration.
		$typeCode = $invoice->getInvoiceType() === Invoice::TYPE_INVOICE
			? ZugferdInvoiceType::INVOICE
			: ZugferdInvoiceType::CREDITNOTE;
		$issueDate = $invoice->getIssueDate() ?? $invoice->getCommittedAt() ?? new DateTime();

		$builder->setDocumentInformation(
			$invoice->getNumber() ?? '',
			$typeCode,
			$issueDate,
			ZugferdCurrencyCodes::EURO,
		);

		$this->applySeller($builder, $settings);
		$this->applyBuyer($builder, $invoice);
		$this->applyPayment($builder, $invoice, $settings);
		$this->applyPositions($builder, $items, $smallBusiness);
		$this->applyTaxBreakdown($builder, $invoice, $smallBusiness);
		$this->applySummation($builder, $invoice);

		return $builder;
	}

	private function applySeller(ZugferdDocumentBuilder $builder, Settings $settings): void {
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
	 */
	private function applyPositions(ZugferdDocumentBuilder $builder, array $items, bool $smallBusiness): void {
		$line = 0;
		foreach ($items as $item) {
			$line++;
			$builder->addNewPosition((string)$line);
			$builder->setDocumentPositionProductDetails(
				$item->getName() ?? '',
				$item->getDescription() !== null && $item->getDescription() !== '' ? $item->getDescription() : null,
			);
			$builder->setDocumentPositionNetPrice($this->toEuro($item->getUnitPriceCents()));
			$builder->setDocumentPositionQuantity(
				$this->quantityToFloat($item->getQuantity()),
				$item->getUnitCode() ?? InvoiceItem::UNIT_PIECE,
			);
			[$category, $rate] = $this->vatCategory((int)$item->getTaxRateBp(), $smallBusiness);
			$builder->addDocumentPositionTax($category, ZugferdVatTypeCodes::VALUE_ADDED_TAX, $rate);
			$builder->setDocumentPositionLineSummation($this->toEuro($item->getLineTotalCents()));
		}
	}

	private function applyTaxBreakdown(ZugferdDocumentBuilder $builder, Invoice $invoice, bool $smallBusiness): void {
		foreach ($invoice->getTaxBreakdownArray() as $group) {
			$rateBp = (int)$group['rateBp'];
			[$category, $rate] = $this->vatCategory($rateBp, $smallBusiness);
			$reason = ($category === ZugferdVatCategoryCodes::EXEM_FROM_TAX) ? self::SMALL_BUSINESS_REASON : null;
			$builder->addDocumentTax(
				$category,
				ZugferdVatTypeCodes::VALUE_ADDED_TAX,
				$this->toEuro((int)$group['netCents']),
				$this->toEuro((int)$group['taxCents']),
				$rate,
				$reason,
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
	 * Pick the EN16931 VAT category code and percentage for a tax group.
	 *
	 * @return array{0: string, 1: float} [categoryCode, ratePercent]
	 */
	private function vatCategory(int $rateBp, bool $smallBusiness): array {
		if ($smallBusiness) {
			// §19 small business: tax-exempt regardless of the stored rate.
			return [ZugferdVatCategoryCodes::EXEM_FROM_TAX, 0.0];
		}
		if ($rateBp === 0) {
			return [ZugferdVatCategoryCodes::ZERO_RATE_GOOD, 0.0];
		}
		return [ZugferdVatCategoryCodes::STAN_RATE, $rateBp / 100.0];
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

	// --- PDF rendering ---------------------------------------------------

	/**
	 * @param InvoiceItem[] $items
	 */
	private function renderVisiblePdf(Invoice $invoice, array $items, Settings $settings): string {
		$html = $this->renderHtml($invoice, $items, $settings);
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
	private function renderHtml(Invoice $invoice, array $items, Settings $settings): string {
		$accent = $this->sanitizeColor($settings->getAccentColor()) ?? '#2c3e50';
		$logo = $this->loadLogoDataUri($settings);
		$e = static fn (?string $s): string => htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');

		$company = $e($settings->getCompanyName());
		$companyAddr = nl2br($e($settings->getCompanyAddress()));
		$logoHtml = $logo !== null ? '<img src="' . $logo . '" class="logo" alt="">' : '';

		$recipientLines = array_filter([
			$invoice->getRecipientName(),
			$invoice->getRecipientAddress(),
			trim((string)$invoice->getRecipientPostalCode() . ' ' . (string)$invoice->getRecipientCity()),
		], static fn ($l) => trim((string)$l) !== '');
		$recipient = implode('<br>', array_map($e, $recipientLines));

		$title = $invoice->getInvoiceType() === Invoice::TYPE_INVOICE ? 'Rechnung' : 'Storno / Gutschrift';
		$issueDate = $invoice->getIssueDate() ?? $invoice->getCommittedAt();
		$meta = [];
		$meta[] = ['Rechnungsnummer', $e($invoice->getNumber())];
		if ($issueDate !== null) {
			$meta[] = ['Rechnungsdatum', $issueDate->format('d.m.Y')];
		}
		if ($invoice->getDueDate() !== null) {
			$meta[] = ['Fällig am', $invoice->getDueDate()->format('d.m.Y')];
		}
		if (($invoice->getBuyerReference() ?? '') !== '') {
			$meta[] = ['Leitweg-ID', $e($invoice->getBuyerReference())];
		}
		$metaHtml = '';
		foreach ($meta as [$label, $value]) {
			$metaHtml .= '<tr><td class="meta-label">' . $label . '</td><td>' . $value . '</td></tr>';
		}

		$rows = '';
		$smallBusiness = $settings->getSmallBusiness() === 1;
		foreach ($items as $item) {
			$desc = ($item->getDescription() ?? '') !== ''
				? '<div class="item-desc">' . nl2br($e($item->getDescription())) . '</div>' : '';
			$ratePercent = $smallBusiness ? 0 : (int)$item->getTaxRateBp() / 100;
			$rows .= '<tr>'
				. '<td>' . $e($item->getName()) . $desc . '</td>'
				. '<td class="num">' . $e($this->formatQuantity($item->getQuantity())) . ' ' . $e($this->unitLabel($item->getUnitCode())) . '</td>'
				. '<td class="num">' . $this->formatMoney($item->getUnitPriceCents()) . '</td>'
				. '<td class="num">' . rtrim(rtrim(number_format($ratePercent, 1, ',', '.'), '0'), ',') . ' %</td>'
				. '<td class="num">' . $this->formatMoney($item->getLineTotalCents()) . '</td>'
				. '</tr>';
		}

		$taxRows = '';
		foreach ($invoice->getTaxBreakdownArray() as $group) {
			$ratePercent = (int)$group['rateBp'] / 100;
			$label = $smallBusiness
				? 'Steuerfrei (§ 19 UStG)'
				: 'USt ' . rtrim(rtrim(number_format($ratePercent, 1, ',', '.'), '0'), ',') . ' % auf ' . $this->formatMoney((int)$group['netCents']);
			$taxRows .= '<tr><td>' . $label . '</td><td class="num">' . $this->formatMoney((int)$group['taxCents']) . '</td></tr>';
		}

		$paymentInfo = '';
		if (($settings->getIban() ?? '') !== '') {
			$bank = array_filter([
				$settings->getBankName() ? 'Bank: ' . $e($settings->getBankName()) : null,
				'IBAN: ' . $e($settings->getIban()),
				($settings->getBic() ?? '') !== '' ? 'BIC: ' . $e($settings->getBic()) : null,
			]);
			$paymentInfo = '<p class="bank">' . implode(' &middot; ', $bank) . '</p>';
		}
		$termDesc = $this->paymentTermDescription($invoice);
		$termHtml = $termDesc !== null ? '<p>' . $e($termDesc) . '</p>' : '';

		$greeting = ($invoice->getGreeting() ?? '') !== '' ? '<p>' . nl2br($e($invoice->getGreeting())) . '</p>' : '';
		$closing = ($settings->getClosingDefault() ?? '') !== '' ? '<p>' . nl2br($e($settings->getClosingDefault())) . '</p>' : '';
		$extra = ($invoice->getExtraText() ?? '') !== '' ? '<p>' . nl2br($e($invoice->getExtraText())) . '</p>' : '';

		$taxIds = array_filter([
			($settings->getVatId() ?? '') !== '' ? 'USt-IdNr.: ' . $e($settings->getVatId()) : null,
			($settings->getTaxNumber() ?? '') !== '' ? 'Steuernummer: ' . $e($settings->getTaxNumber()) : null,
		]);
		$footer = $taxIds !== [] ? '<div class="footer">' . implode(' &middot; ', $taxIds) . '</div>' : '';

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
table.items { width: 100%; border-collapse: collapse; margin-bottom: 4px; }
table.items th { background: {$accent}; color: #fff; text-align: left; padding: 6px 8px; font-size: 9pt; }
table.items td { padding: 6px 8px; border-bottom: 1px solid #e0e0e0; vertical-align: top; }
table.items td.num, table.items th.num { text-align: right; }
.item-desc { color: #666; font-size: 8.5pt; margin-top: 2px; }
.totals { width: 45%; float: right; margin-top: 8px; }
.totals table { width: 100%; border-collapse: collapse; }
.totals td { padding: 3px 8px; }
.totals td.num { text-align: right; }
.totals .grand td { border-top: 2px solid {$accent}; font-weight: bold; font-size: 11pt; color: {$accent}; }
.payment { clear: both; padding-top: 24px; font-size: 9.5pt; }
.bank { background: #f5f5f5; padding: 6px 8px; }
.footer { margin-top: 28px; padding-top: 6px; border-top: 1px solid #ccc; font-size: 8pt; color: #777; text-align: center; }
</style></head><body>
<div class="header">
  {$logoHtml}
  <div class="company"><span class="name">{$company}</span><br>{$companyAddr}</div>
</div>
<div class="sender-line">{$company}</div>
<div class="recipient">{$recipient}</div>
<h1>{$title}</h1>
<table class="meta">{$metaHtml}</table>
<table class="items">
  <thead><tr><th>Beschreibung</th><th class="num">Menge</th><th class="num">Einzelpreis</th><th class="num">USt</th><th class="num">Betrag</th></tr></thead>
  <tbody>{$rows}</tbody>
</table>
<div class="totals"><table>
  <tr><td>Zwischensumme</td><td class="num">{$this->formatMoney($invoice->getSubtotalCents())}</td></tr>
  {$taxRows}
  <tr class="grand"><td>Gesamtbetrag</td><td class="num">{$this->formatMoney($invoice->getTotalCents())}</td></tr>
</table></div>
<div class="payment">
  {$greeting}
  {$termHtml}
  {$paymentInfo}
  {$extra}
  {$closing}
</div>
{$footer}
</body></html>
HTML;
	}

	private function loadLogoDataUri(Settings $settings): ?string {
		$fileId = $settings->getLogoFileId();
		if ($fileId === null || $settings->getOwnerUserId() === null) {
			return null;
		}
		try {
			$userFolder = $this->rootFolder->getUserFolder($settings->getOwnerUserId());
			$nodes = $userFolder->getById($fileId);
			$node = $nodes[0] ?? null;
			if (!$node instanceof File) {
				return null;
			}
			$mime = $node->getMimeType();
			if (!str_starts_with($mime, 'image/')) {
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
			InvoiceItem::UNIT_KILOGRAM => 'kg',
			InvoiceItem::UNIT_LUMP_SUM => 'Pausch.',
			default => 'Stk.',
		};
	}
}
