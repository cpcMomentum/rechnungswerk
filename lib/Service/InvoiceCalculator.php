<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Settings;

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
	 * When $taxExempt is true (§19 small business or a special tax case such as
	 * reverse charge / intra-community supply / export) no VAT is charged: every
	 * group's tax is 0 and the gross total equals the net subtotal. The per-rate
	 * net grouping is preserved for display.
	 *
	 * @param list<array{taxRateBp: int, lineTotalCents: int}> $lines
	 * @return array{
	 *     subtotalCents: int,
	 *     taxBreakdown: list<array{rateBp: int, netCents: int, taxCents: int}>,
	 *     totalCents: int
	 * }
	 */
	public static function computeTotals(array $lines, bool $taxExempt = false): array {
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
			$taxCents = $taxExempt ? 0 : (int)round(($netCents * $rateBp) / 10000);
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
	 * Negate a decimal quantity string for a storno line, preserving the original
	 * formatting: "2.000" -> "-2.000", "2,5" -> "-2,5". A leading "+" is dropped,
	 * an already-negative value is made positive, non-numeric input is returned
	 * unchanged.
	 */
	public static function negateQuantity(string $quantity): string {
		$q = trim($quantity);
		if ($q === '' || !is_numeric(str_replace(',', '.', $q))) {
			return $quantity;
		}
		return str_starts_with($q, '-') ? ltrim(substr($q, 1)) : '-' . ltrim($q, '+');
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

	/**
	 * Decide the next sequential counter value from the current state.
	 *
	 * - 'continuous': always $counter + 1 — the counter never resets, so a
	 *   year-less format stays collision-free across calendar years.
	 * - 'yearly': $counter + 1 while still in the same calendar year, otherwise
	 *   restart at 1. A year component in the format keeps numbers unique.
	 *
	 * Pure and side-effect-free so the numbering decision can be unit-tested
	 * without a database (persistence and row locking live in SettingsService).
	 *
	 * @param string $mode one of Settings::RESET_MODES
	 */
	public static function nextCounter(string $mode, int $counter, ?int $counterYear, int $year): int {
		if ($mode === Settings::RESET_MODE_CONTINUOUS) {
			return $counter + 1;
		}
		return ($counterYear === $year) ? $counter + 1 : 1;
	}

	/**
	 * Whether a number format carries a year component ({YYYY} or {YY}).
	 *
	 * A yearly-resetting counter is only collision-free if the rendered number
	 * changes with the year; without one, the counter would repeat every Jan 1.
	 * Used both to validate the mode<->format combination on the write path and
	 * to defend the invariant when handing out a number.
	 */
	public static function formatHasYear(string $format): bool {
		return preg_match('/\{YYYY\}|\{YY\}/', $format) === 1;
	}
}
