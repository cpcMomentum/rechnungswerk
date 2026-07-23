<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\InvoiceCalculator;
use PHPUnit\Framework\TestCase;

class InvoiceCalculatorTest extends TestCase {

	// Unit prices are passed in ten-thousandths of a euro (1/10000 €, #147):
	// 12,50 € = 125000, 80,00 € = 800000, 2,00 € = 20000, 3,00 € = 30000.
	public function testLineTotalWholeQuantity(): void {
		// 3 × 12,50 € = 37,50 €
		$this->assertSame(3750, InvoiceCalculator::lineTotalCents('3', 125000));
	}

	public function testLineTotalDecimalQuantity(): void {
		// 2,5 h × 80,00 € = 200,00 €
		$this->assertSame(20000, InvoiceCalculator::lineTotalCents('2.5', 800000));
	}

	public function testLineTotalCommaSeparatorIsAccepted(): void {
		$this->assertSame(500, InvoiceCalculator::lineTotalCents('2,5', 20000));
	}

	public function testLineTotalRoundsToNearestCent(): void {
		// 0,333 × 3,00 € = 0,999 € -> 1,00 €
		$this->assertSame(100, InvoiceCalculator::lineTotalCents('0.333', 30000));
	}

	public function testLineTotalFourDecimalUnitPrice(): void {
		// 1234 kWh × 0,3456 €/kWh = 426,4704 € -> 426,47 € (rounded once at the line, #147)
		$this->assertSame(42647, InvoiceCalculator::lineTotalCents('1234', 3456));
	}

	public function testLineTotalEmptyQuantityIsZero(): void {
		$this->assertSame(0, InvoiceCalculator::lineTotalCents('', 125000));
	}

	public function testComputeTotalsSingleRate(): void {
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 1900, 'lineTotalCents' => 10000],
		]);
		$this->assertSame(10000, $result['subtotalCents']);
		$this->assertSame(11900, $result['totalCents']);
		$this->assertSame(
			[['rateBp' => 1900, 'netCents' => 10000, 'taxCents' => 1900]],
			$result['taxBreakdown'],
		);
	}

	public function testComputeTotalsMultipleRatesAreGroupedAndSorted(): void {
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 1900, 'lineTotalCents' => 10000],
			['taxRateBp' => 700, 'lineTotalCents' => 5000],
			['taxRateBp' => 1900, 'lineTotalCents' => 2000],
		]);
		$this->assertSame(17000, $result['subtotalCents']);
		// 7%: 5000 -> 350 ; 19%: 12000 -> 2280 ; total tax 2630
		$this->assertSame(19630, $result['totalCents']);
		$this->assertSame([
			['rateBp' => 700, 'netCents' => 5000, 'taxCents' => 350],
			['rateBp' => 1900, 'netCents' => 12000, 'taxCents' => 2280],
		], $result['taxBreakdown']);
	}

	public function testComputeTotalsTaxIsRoundedPerRateGroupNotPerLine(): void {
		// Two 19% lines of 9,99 € -> group net 19,98 € -> tax round(379.62) = 3,80 €
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 1900, 'lineTotalCents' => 999],
			['taxRateBp' => 1900, 'lineTotalCents' => 999],
		]);
		$this->assertSame(1998, $result['subtotalCents']);
		$this->assertSame([['rateBp' => 1900, 'netCents' => 1998, 'taxCents' => 380]], $result['taxBreakdown']);
		$this->assertSame(2378, $result['totalCents']);
	}

	public function testComputeTotalsSmallBusinessZeroRate(): void {
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 0, 'lineTotalCents' => 10000],
		]);
		$this->assertSame(10000, $result['subtotalCents']);
		$this->assertSame(10000, $result['totalCents']);
		$this->assertSame([['rateBp' => 0, 'netCents' => 10000, 'taxCents' => 0]], $result['taxBreakdown']);
	}

	public function testComputeTotalsTaxExemptDropsTaxToZero(): void {
		// Special tax case (e.g. reverse charge): net stays, no VAT charged,
		// gross == net, but the per-rate net grouping is preserved.
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 1900, 'lineTotalCents' => 100000],
			['taxRateBp' => 700, 'lineTotalCents' => 9900],
		], true);
		$this->assertSame(109900, $result['subtotalCents']);
		$this->assertSame(109900, $result['totalCents']);
		$this->assertSame([
			['rateBp' => 700, 'netCents' => 9900, 'taxCents' => 0],
			['rateBp' => 1900, 'netCents' => 100000, 'taxCents' => 0],
		], $result['taxBreakdown']);
	}

	public function testComputeTotalsExemptFlagDefaultsToTaxed(): void {
		// Regression guard: without the flag the 19% tax must still be charged.
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 1900, 'lineTotalCents' => 100000],
		]);
		$this->assertSame(119000, $result['totalCents']);
	}

	public function testComputeTotalsEmptyInvoice(): void {
		$result = InvoiceCalculator::computeTotals([]);
		$this->assertSame(0, $result['subtotalCents']);
		$this->assertSame(0, $result['totalCents']);
		$this->assertSame([], $result['taxBreakdown']);
	}

	public function testFormatNumberPadsCounter(): void {
		$this->assertSame('RE-2026-0007', InvoiceCalculator::formatNumber('RE-{YYYY}-{####}', 7, new \DateTime('2026-05-15')));
	}

	public function testFormatNumberTwoDigitYearAndCounter(): void {
		$this->assertSame('26-05', InvoiceCalculator::formatNumber('{YY}-{##}', 5, new \DateTime('2026-05-15')));
	}

	public function testFormatNumberCounterExceedingWidthIsNotTruncated(): void {
		$this->assertSame('RE-2026-12345', InvoiceCalculator::formatNumber('RE-{YYYY}-{####}', 12345, new \DateTime('2026-05-15')));
	}

	public function testFormatNumberExpandsMonthAndDay(): void {
		// {MM}/{DD} come from the issue date, zero-padded (#143).
		$this->assertSame('RE-2026-03-07-0042', InvoiceCalculator::formatNumber('RE-{YYYY}-{MM}-{DD}-{####}', 42, new \DateTime('2026-03-07')));
	}

	public function testNegateQuantityPrependsMinusPreservingFormat(): void {
		$this->assertSame('-2.000', InvoiceCalculator::negateQuantity('2.000'));
		$this->assertSame('-10', InvoiceCalculator::negateQuantity('10'));
		$this->assertSame('-35', InvoiceCalculator::negateQuantity('35'));
	}

	public function testNegateQuantityHandlesCommaDecimalAndPlusSign(): void {
		$this->assertSame('-2,5', InvoiceCalculator::negateQuantity('2,5'));
		$this->assertSame('-3', InvoiceCalculator::negateQuantity('+3'));
	}

	public function testNegateQuantityAlreadyNegativeBecomesPositive(): void {
		$this->assertSame('2.000', InvoiceCalculator::negateQuantity('-2.000'));
	}

	public function testNegateQuantityNonNumericReturnedUnchanged(): void {
		$this->assertSame('', InvoiceCalculator::negateQuantity(''));
		$this->assertSame('abc', InvoiceCalculator::negateQuantity('abc'));
	}

	public function testComputeTotalsWithNegativeLinesYieldsNegativeSubtotalTaxAndTotal(): void {
		// Storno aggregation: negative line totals must produce negative subtotal,
		// negative VAT and negative gross total (no abs/clamping).
		$result = InvoiceCalculator::computeTotals([
			['taxRateBp' => 1900, 'lineTotalCents' => -20000],
		]);
		$this->assertSame(-20000, $result['subtotalCents']);
		$this->assertSame(-3800, $result['taxBreakdown'][0]['taxCents']);
		$this->assertSame(-23800, $result['totalCents']);
	}

	public function testNextCounterYearlyIncrementsWithinSameYear(): void {
		$this->assertSame(8, InvoiceCalculator::nextCounter('yearly', 7, 2026, 2026));
	}

	public function testNextCounterYearlyResetsOnNewYear(): void {
		// Dec 2026 counter 41 -> first invoice of 2027 restarts at 1.
		$this->assertSame(1, InvoiceCalculator::nextCounter('yearly', 41, 2026, 2027));
	}

	public function testNextCounterYearlyFirstEverInvoice(): void {
		// Fresh company: counter 0, no anchored year yet.
		$this->assertSame(1, InvoiceCalculator::nextCounter('yearly', 0, null, 2026));
	}

	public function testNextCounterContinuousIgnoresYearBoundary(): void {
		// Continuous must NOT reset across the year boundary — that is the whole
		// point of #39 and keeps a year-less format collision-free.
		$this->assertSame(1235, InvoiceCalculator::nextCounter('continuous', 1234, 2026, 2027));
	}

	public function testNextCounterContinuousIncrementsWithinYear(): void {
		$this->assertSame(1235, InvoiceCalculator::nextCounter('continuous', 1234, 2026, 2026));
	}

	public function testNextCounterContinuousFirstEverInvoice(): void {
		$this->assertSame(1, InvoiceCalculator::nextCounter('continuous', 0, null, 2026));
	}

	public function testFormatHasYearDetectsFourAndTwoDigitYear(): void {
		$this->assertTrue(InvoiceCalculator::formatHasYear('RE-{YYYY}-{####}'));
		$this->assertTrue(InvoiceCalculator::formatHasYear('{YY}-{##}'));
	}

	public function testFormatHasYearFalseForYearlessFormat(): void {
		$this->assertFalse(InvoiceCalculator::formatHasYear('RE-{####}'));
		$this->assertFalse(InvoiceCalculator::formatHasYear('{######}'));
	}
	// --- buildPdfFileName (#37) -------------------------------------------

	private function fileNameFixtures(string $format): array {
		$invoice = new Invoice();
		$invoice->setId(42);
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setNumber('RE-2026-0007');
		$invoice->setIssueDate(new \DateTime('2026-07-09'));
		$invoice->setRecipientName('Müller & Söhne GmbH');
		$settings = new Settings();
		$settings->setFileNameFormat($format);
		return [$invoice, $settings];
	}

	public function testBuildPdfFileNameDefaultIsNumber(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{nummer}');
		$this->assertSame('RE-2026-0007.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	public function testBuildPdfFileNameEmptyFormatFallsBackToDefault(): void {
		[$invoice, $settings] = $this->fileNameFixtures('');
		$this->assertSame('RE-2026-0007.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	public function testBuildPdfFileNameRendersAllPlaceholders(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{YYYY}-{MM}-{DD}_{typ}_{nummer}_{kunde}');
		$this->assertSame(
			'2026-07-09_Rechnung_RE-2026-0007_Mueller & Soehne GmbH.pdf',
			InvoiceCalculator::buildPdfFileName($invoice, $settings),
		);
	}

	public function testBuildPdfFileNameStornoType(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{typ}-{nummer}');
		$invoice->setInvoiceType(Invoice::TYPE_CANCELLATION);
		$this->assertSame('Storno-RE-2026-0007.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	public function testBuildPdfFileNameSanitizesReservedCharacters(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{nummer}_{kunde}');
		$invoice->setRecipientName('A/B\\C:D*E?F"G<H>I|J');
		$this->assertSame('RE-2026-0007_A-B-C-D-E-F-G-H-I-J.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	public function testBuildPdfFileNameMissingNumberFallsBackToId(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{nummer}');
		$invoice->setNumber(null);
		$this->assertSame('rechnung-42.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	public function testBuildPdfFileNameDateFallsBackToCommittedAt(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{YYYY}{MM}{DD}_{nummer}');
		$invoice->setIssueDate(null);
		$invoice->setCommittedAt(new \DateTime('2026-01-31'));
		$this->assertSame('20260131_RE-2026-0007.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	public function testBuildPdfFileNameCapsLength(): void {
		[$invoice, $settings] = $this->fileNameFixtures('{nummer}_{kunde}');
		$invoice->setRecipientName(str_repeat('x', 300));
		$name = InvoiceCalculator::buildPdfFileName($invoice, $settings);
		$this->assertLessThanOrEqual(124, mb_strlen($name)); // 120 + '.pdf'
		$this->assertStringEndsWith('.pdf', $name);
	}

	public function testBuildPdfFileNameDoesNotReinterpretPlaceholderLikeTextInReplacements(): void {
		// A customer name that happens to contain a literal placeholder token
		// (e.g. '{typ}') must not be re-substituted just because {kunde} is
		// rendered before {typ} in scheme order.
		[$invoice, $settings] = $this->fileNameFixtures('{nummer}_{kunde}_{typ}');
		$invoice->setRecipientName('Firma {typ} GmbH');
		$this->assertSame('RE-2026-0007_Firma {typ} GmbH_Rechnung.pdf', InvoiceCalculator::buildPdfFileName($invoice, $settings));
	}

	// --- Quote revision numbering (#111 Modell B) ------------------------

	public function testFirstRevisionAppendsDashOne(): void {
		// Only the base exists yet → first revision is "-1".
		$this->assertSame('AN-2026-0007-1',
			InvoiceCalculator::nextRevisionNumber('AN-2026-0007', ['AN-2026-0007']));
	}

	public function testNextRevisionIncrementsHighestSuffix(): void {
		$this->assertSame('AN-2026-0007-3',
			InvoiceCalculator::nextRevisionNumber('AN-2026-0007', ['AN-2026-0007', 'AN-2026-0007-1', 'AN-2026-0007-2']));
	}

	public function testRevisionIgnoresBaseOwnHyphenatedDigits(): void {
		// The base itself ("…-0007") must NOT be read as revision 7; only an exact
		// "{base}-<n>" suffix counts. With just the base present, next is "-1".
		$this->assertSame('AN-2026-0007-1',
			InvoiceCalculator::nextRevisionNumber('AN-2026-0007', ['AN-2026-0007']));
	}

	public function testRevisionUsesMaxNotCount(): void {
		// Gaps are fine: highest suffix + 1, not a count.
		$this->assertSame('AN-2026-0007-6',
			InvoiceCalculator::nextRevisionNumber('AN-2026-0007', ['AN-2026-0007', 'AN-2026-0007-5']));
	}

	public function testRevisionOfDifferentBaseIsIsolated(): void {
		// Numbers from another family must not influence this one.
		$this->assertSame('AN-2026-0008-1',
			InvoiceCalculator::nextRevisionNumber('AN-2026-0008', ['AN-2026-0007', 'AN-2026-0007-1', 'AN-2026-0008']));
	}
}
