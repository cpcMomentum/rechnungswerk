<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Exception;

/**
 * Thrown when an operation is not allowed in the invoice's current lifecycle
 * state (e.g. editing a committed invoice).
 */
class IllegalStateException extends \RuntimeException {
}
