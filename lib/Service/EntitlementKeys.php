<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

// Fest im Code statt per Abruf, damit die Tokenpruefung nie ins Netz geht.
final class EntitlementKeys {

	// Rotation: neuen Schluessel ergaenzen und ausliefern, den alten erst in einem spaeteren Release entfernen.
	/** @var array<string, string> kid => PEM */
	public const PUBLIC_KEYS = [
	];
}
