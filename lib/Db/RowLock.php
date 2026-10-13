<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Db;

use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Row lock for the number-issuing paths (invoice number, quote number, the
 * invoice row itself during commit/cancel).
 *
 * Why this is not just `->forUpdate()` at the call site: SQLite has no
 * `SELECT ... FOR UPDATE`, and Doctrine throws hard on it rather than ignoring
 * it. Every commit on a SQLite instance ended in a 500 (#319), although
 * info.xml lists sqlite as supported.
 *
 * Leaving the lock out on SQLite is safe, not a workaround: SQLite allows a
 * single writer at a time, so two concurrent commits cannot both increment the
 * counter — the second one fails with SQLITE_BUSY. A failed commit is
 * acceptable, a duplicate invoice number would not be (§ 14 UStG / GoBD).
 *
 * `IQueryBuilder::forUpdate()` needs Nextcloud >= 32; on 31 neither the
 * interface nor the implementation behind it has the method (info.xml declares
 * 32 as the minimum since #319).
 */
final class RowLock {
	/**
	 * Locks the selected rows for the rest of the caller's transaction, where
	 * the database supports it. Call before executing the SELECT.
	 */
	public static function apply(IQueryBuilder $qb, IDBConnection $db): IQueryBuilder {
		if ($db->getDatabaseProvider() === IDBConnection::PLATFORM_SQLITE) {
			return $qb;
		}

		return $qb->forUpdate();
	}
}
