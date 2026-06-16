<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

/**
 * Pure, side-effect-free money/tax/number arithmetic.
 *
 * Money is in integer cents, tax rates in basis points (19 % = 1900) — no
 * floats are stored, so there are no rounding artifacts. VAT is computed per
 * rate group on the summed net (EN16931 BG-23), not per line.
 */
final class InvoiceCalculator {

	/**
	 * Line total in cents from a decimal quantity string and a unit price in cents.
	 * Quantity may use "." or "," as decimal separator and carries up to 3 decimals.
	 */
	public static function lineTotalCents(string $quantity, int $unitPriceCents): int {
		$normalized = str_replace(',', '.', trim($quantity));
		if ($normalized === '' || !is_numeric($normalized)) {
			return 0;
		}
		// Quantity in milli-units (3 decimals), rounded to avoid float drift.
		$milli = (int)round(((float)$normalized) * 1000);
		return (int)round(($milli * $unitPriceCents) / 1000);
	}

	/**
	 * Aggregate line totals into subtotal, per-rate tax breakdown and gross total.
	 *
	 * @param list<array{taxRateBp: int, lineTotalCents: int}> $lines
	 * @return array{
	 *     subtotalCents: int,
	 *     taxBreakdown: list<array{rateBp: int, netCents: int, taxCents: int}>,
	 *     totalCents: int
	 * }
	 */
	public static function computeTotals(array $lines): array {
		/** @var array<int, int> $netByRate */
		$netByRate = [];
		$subtotal = 0;
		foreach ($lines as $line) {
			$rate = (int)$line['taxRateBp'];
			$net = (int)$line['lineTotalCents'];
			$subtotal += $net;
			$netByRate[$rate] = ($netByRate[$rate] ?? 0) + $net;
		}

		ksort($netByRate);
		$breakdown = [];
		$totalTax = 0;
		foreach ($netByRate as $rateBp => $netCents) {
			$taxCents = (int)round(($netCents * $rateBp) / 10000);
			$totalTax += $taxCents;
			$breakdown[] = [
				'rateBp' => $rateBp,
				'netCents' => $netCents,
				'taxCents' => $taxCents,
			];
		}

		return [
			'subtotalCents' => $subtotal,
			'taxBreakdown' => $breakdown,
			'totalCents' => $subtotal + $totalTax,
		];
	}

	/**
	 * Render an invoice number from a format template.
	 * Supported placeholders: {YYYY}, {YY} and {#…#} (zero-padded counter, width = number of '#').
	 * Example: "RE-{YYYY}-{####}" with counter 7, year 2026 -> "RE-2026-0007".
	 */
	public static function formatNumber(string $format, int $counter, int $year): string {
		$result = str_replace(
			['{YYYY}', '{YY}'],
			[sprintf('%04d', $year), sprintf('%02d', $year % 100)],
			$format,
		);
		return (string)preg_replace_callback(
			'/\{(#+)\}/',
			static fn (array $m): string => str_pad((string)$counter, strlen($m[1]), '0', STR_PAD_LEFT),
			$result,
		);
	}
}
