<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Imap;

/**
 * Raised on any IMAP transport or protocol error (connect, TLS, login, BAD/NO
 * server responses). The DATEV poller catches every Throwable and only logs, so
 * a failure here never escalates beyond a skipped poll run.
 */
class ImapException extends \RuntimeException {
}
