<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Invoice;
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
	 * Line total in cents from a decimal quantity string and a unit price in
	 * ten-thousandths of a euro (1/10000 €, 4 decimals, #147). Quantity may use
	 * "." or "," as decimal separator and carries up to 3 decimals. The result is
	 * rounded to whole cents exactly once here — the finer price precision only
	 * affects this single multiplication, never the summed amounts.
	 */
	public static function lineTotalCents(string $quantity, int $unitPriceE4): int {
		$normalized = str_replace(',', '.', trim($quantity));
		if ($normalized === '' || !is_numeric($normalized)) {
			return 0;
		}
		// Quantity in milli-units (3 decimals), rounded to avoid float drift.
		$milli = (int)round(((float)$normalized) * 1000);
		// milli-units (1/1000) × price (1/10000 €) → cents (1/100 €): / 100000.
		return (int)round(($milli * $unitPriceE4) / 100000);
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
	 * Supported placeholders: {YYYY}, {YY}, {MM} (month), {DD} (day) — all taken
	 * from the document's issue date — and {#…#} (zero-padded counter, width =
	 * number of '#'). {MM}/{DD} are cosmetic: they do NOT count as a "year"
	 * component for the yearly-reset collision guard (see formatHasYear).
	 * Example: "RE-{YYYY}-{####}" with counter 7, 2026-05-… -> "RE-2026-0007".
	 */
	public static function formatNumber(string $format, int $counter, \DateTimeInterface $date): string {
		$result = str_replace(
			['{YYYY}', '{YY}', '{MM}', '{DD}'],
			[$date->format('Y'), $date->format('y'), $date->format('m'), $date->format('d')],
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

	/**
	 * Next quote revision number for a family (#111 Modell B): given the root/base
	 * number and the numbers already in use, return "{base}-{n}" with the next free
	 * n. The base itself counts as revision 0, so the first revision is "{base}-1".
	 *
	 * The base is taken from the family's root quote (via related_quote_id), never
	 * derived by string-stripping — a quote number like "AN-2026-0007" contains its
	 * own hyphens, so only an exact "{base}-<digits>" suffix is treated as a revision.
	 *
	 * @param string[] $existing all numbers currently in the family (base + revisions)
	 */
	public static function nextRevisionNumber(string $base, array $existing): string {
		$max = 0;
		$pattern = '/^' . preg_quote($base, '/') . '-(\d+)$/';
		foreach ($existing as $num) {
			if (preg_match($pattern, (string)$num, $m) === 1) {
				$max = max($max, (int)$m[1]);
			}
		}
		return $base . '-' . ($max + 1);
	}

	/** Placeholders accepted in the PDF file-name scheme (#37). */
	public const FILE_NAME_PLACEHOLDERS = ['{nummer}', '{YYYY}', '{MM}', '{DD}', '{kunde}', '{typ}'];

	/**
	 * Build the PDF file name (including '.pdf') for a committed invoice from
	 * the configured scheme. One source of truth for download, customer mail
	 * and DATEV mail.
	 *
	 * Placeholders: {nummer}, {YYYY}/{MM}/{DD} (issue date, falling back to the
	 * commit date), {kunde} (recipient name, transliterated), {typ}
	 * (Rechnung/Storno). The rendered name is sanitized for file systems; an
	 * empty result falls back to the historical 'rechnung-{id}'.
	 */
	public static function buildPdfFileName(Invoice $invoice, Settings $settings): string {
		$format = trim((string)$settings->getFileNameFormat());
		if ($format === '') {
			$format = Settings::DEFAULT_FILE_NAME_FORMAT;
		}

		$number = trim((string)$invoice->getNumber());
		if ($number === '') {
			$number = 'rechnung-' . $invoice->getId();
		}
		$date = $invoice->getIssueDate() ?? $invoice->getCommittedAt();

		// strtr() substitutes all keys in a single left-to-right pass over the
		// original string, so a replacement value that happens to contain a
		// literal '{typ}' etc. (e.g. in a customer name) can never be picked
		// up by a later substitution — unlike str_replace() with parallel
		// arrays, which re-scans already-substituted text for each subsequent
		// search term.
		$name = strtr($format, [
			'{nummer}' => $number,
			'{YYYY}' => $date !== null ? $date->format('Y') : '',
			'{MM}' => $date !== null ? $date->format('m') : '',
			'{DD}' => $date !== null ? $date->format('d') : '',
			'{kunde}' => self::transliterate((string)$invoice->getRecipientName()),
			'{typ}' => $invoice->getInvoiceType() === Invoice::TYPE_CANCELLATION ? 'Storno' : 'Rechnung',
		]);

		$name = self::sanitizeFileName($name);
		if ($name === '') {
			$name = 'rechnung-' . $invoice->getId();
		}
		return $name . '.pdf';
	}

	/** German-aware ASCII transliteration for the {kunde} placeholder. */
	private static function transliterate(string $value): string {
		return strtr($value, [
			'ä' => 'ae', 'ö' => 'oe', 'ü' => 'ue', 'ß' => 'ss',
			'Ä' => 'Ae', 'Ö' => 'Oe', 'Ü' => 'Ue',
		]);
	}

	/**
	 * Make a rendered name safe for file systems and mail attachments: strip
	 * path separators and reserved characters, collapse whitespace, trim
	 * leading/trailing dots and spaces, cap the length. Public so the archive
	 * path segments (#38) go through the same rules as file names.
	 */
	public static function sanitizeFileName(string $name): string {
		// Reserved on Windows/SMB, path separators, and control characters.
		$name = (string)preg_replace('/[\/\\\\:*?"<>|]|[\x00-\x1f]/u', '-', $name);
		$name = (string)preg_replace('/\s+/u', ' ', $name);
		$name = trim($name, " .\t");
		if (mb_strlen($name) > 120) {
			$name = rtrim(mb_substr($name, 0, 120), ' .');
		}
		return $name;
	}
}
