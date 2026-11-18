<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

/** Einzige Stelle fuer die werkwolke.de-Adressen; nur `app`, nie Kennung, Schluessel oder Version. */
final class WerkPlusLinks {

	public const BUY = 'https://werkwolke.de/preis?app=rechnungswerk';
	public const FEATURES = 'https://werkwolke.de/funktionen#rechnungswerk';
	public const TRIAL = 'https://werkwolke.de/testen?app=rechnungswerk';

	/** @return array{buy: string, features: string, trial: string} */
	public static function all(): array {
		return ['buy' => self::BUY, 'features' => self::FEATURES, 'trial' => self::TRIAL];
	}
}
