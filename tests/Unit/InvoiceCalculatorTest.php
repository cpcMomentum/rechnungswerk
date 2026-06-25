<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use OCA\Rechnungswerk\Service\InvoiceCalculator;
use PHPUnit\Framework\TestCase;

class InvoiceCalculatorTest extends TestCase {

	public function testLineTotalWholeQuantity(): void {
		// 3 × 12,50 € = 37,50 €
		$this->assertSame(3750, InvoiceCalculator::lineTotalCents('3', 1250));
	}

	public function testLineTotalDecimalQuantity(): void {
		// 2,5 h × 80,00 € = 200,00 €
		$this->assertSame(20000, InvoiceCalculator::lineTotalCents('2.5', 8000));
	}

	public function testLineTotalCommaSeparatorIsAccepted(): void {
		$this->assertSame(500, InvoiceCalculator::lineTotalCents('2,5', 200));
	}

	public function testLineTotalRoundsToNearestCent(): void {
		// 0,333 × 3,00 € = 0,999 € -> 1,00 €
		$this->assertSame(100, InvoiceCalculator::lineTotalCents('0.333', 300));
	}

	public function testLineTotalEmptyQuantityIsZero(): void {
		$this->assertSame(0, InvoiceCalculator::lineTotalCents('', 1250));
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
		$this->assertSame('RE-2026-0007', InvoiceCalculator::formatNumber('RE-{YYYY}-{####}', 7, 2026));
	}

	public function testFormatNumberTwoDigitYearAndCounter(): void {
		$this->assertSame('26-05', InvoiceCalculator::formatNumber('{YY}-{##}', 5, 2026));
	}

	public function testFormatNumberCounterExceedingWidthIsNotTruncated(): void {
		$this->assertSame('RE-2026-12345', InvoiceCalculator::formatNumber('RE-{YYYY}-{####}', 12345, 2026));
	}
}
