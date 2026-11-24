<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Exception;

/** Geschlossene Menge: Klienten verzweigen ueber den Code, der Text darf sich aendern. */
final class ErrorCode {
	public const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
	public const FORBIDDEN = 'FORBIDDEN';
	public const SCOPE_MISSING = 'SCOPE_MISSING';

	public const INVOICE_NOT_FOUND = 'INVOICE_NOT_FOUND';
	public const INVOICE_NOT_COMMITTED = 'INVOICE_NOT_COMMITTED';
	public const INVOICE_ALREADY_COMMITTED = 'INVOICE_ALREADY_COMMITTED';
	public const INVOICE_CANCELLED = 'INVOICE_CANCELLED';
	/** Der Vorgang passt nicht zum Beleg, ohne dass einer der drei Codes darueber zutrifft. */
	public const INVOICE_STATE_INVALID = 'INVOICE_STATE_INVALID';

	public const VALIDATION_FAILED = 'VALIDATION_FAILED';
	public const NUMBER_FORMAT_INVALID = 'NUMBER_FORMAT_INVALID';

	public const PDF_GENERATION_FAILED = 'PDF_GENERATION_FAILED';
	public const MAIL_SEND_FAILED = 'MAIL_SEND_FAILED';

	private function __construct() {
	}
}
