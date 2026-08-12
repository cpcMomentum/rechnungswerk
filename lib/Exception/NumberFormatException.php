<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Exception;

/**
 * Eine Zahleneingabe war nicht lesbar — ohne Prosa (#235).
 *
 * NumberInput ist absichtlich statisch: die Klasse ist der Zwilling von
 * src/utils/numberInput.ts, beide tragen dieselbe Regel und lesen seit #229
 * dieselbe Falltabelle. In eine statische Klasse laesst sich kein IL10N
 * hineingeben, und sie zu einem Dienst zu machen haette die Symmetrie gebrochen.
 *
 * Deshalb traegt diese Ausnahme nur den Sachverhalt: welcher Wert, welche Art von
 * Feld, was daran nicht ging. Den Satz formuliert der aufrufende Service, der
 * einen Uebersetzer hat. Nebenwirkung, die uns gefaellt: die Tests von
 * NumberInput pruefen jetzt den beanstandeten Wert statt eines deutschen Satzes.
 */
class NumberFormatException extends \RuntimeException {

	/** Art des Feldes — bestimmt, welchen Satz der Service formuliert. */
	public const KIND_QUANTITY = 'quantity';
	public const KIND_PRICE = 'price';

	/** Woran es lag. */
	public const REASON_UNREADABLE = 'unreadable';
	public const REASON_NEGATIVE = 'negative';

	public function __construct(
		private readonly string $value,
		private readonly string $kind,
		private readonly string $reason = self::REASON_UNREADABLE,
	) {
		// Die Meldung ist bewusst englisch und knapp: sie landet im Log, nicht in
		// der Oberflaeche. Was der Nutzer sieht, formuliert der Service.
		parent::__construct(sprintf('Unreadable %s: "%s" (%s)', $kind, $value, $reason));
	}

	/** Der beanstandete Wert, wie der Nutzer ihn eingegeben hat. */
	public function getValue(): string {
		return $this->value;
	}

	/** self::KIND_* */
	public function getKind(): string {
		return $this->kind;
	}

	/** self::REASON_* */
	public function getReason(): string {
		return $this->reason;
	}
}
