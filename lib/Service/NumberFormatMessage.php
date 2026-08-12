<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Exception\NumberFormatException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\IL10N;

/**
 * Formuliert die Meldung zu einer unlesbaren Zahleneingabe (#235).
 *
 * NumberInput wirft ohne Prosa, damit die Klasse statisch bleiben kann (siehe
 * NumberFormatException). Den Satz braucht es trotzdem, und zwar uebersetzt.
 *
 * Diese Klasse existiert, damit er genau EINMAL existiert: sowohl InvoiceService
 * als auch ProductService rechnen Preise um, und zwei Kopien derselben Meldung
 * laufen erfahrungsgemaess auseinander — dieselbe Ueberlegung wie bei der
 * geteilten Falltabelle aus #229.
 */
class NumberFormatMessage {

	public function __construct(
		private readonly IL10N $l10n,
	) {
	}

	/**
	 * Aus dem Sachverhalt einen Satz machen, den der Nutzer versteht, und ihn als
	 * ValidationException weitergeben — die Ausnahme, die die Controller in einen
	 * HTTP 400 mit Meldung uebersetzen.
	 */
	public function asValidationException(NumberFormatException $e): ValidationException {
		return new ValidationException($this->describe($e), 0, $e);
	}

	private function describe(NumberFormatException $e): string {
		if ($e->getReason() === NumberFormatException::REASON_NEGATIVE) {
			return $this->l10n->t('Der Preis darf nicht negativ sein.');
		}

		// Die Meldung nennt die Regel, nicht nur die Ablehnung: seit #223 wird
		// englische Schreibweise nicht mehr gedeutet, und wer "12.5" tippt, muss
		// erfahren warum das nicht geht.
		if ($e->getKind() === NumberFormatException::KIND_QUANTITY) {
			return $this->l10n->t(
				'"%1$s" ist keine gültige Menge. Das Komma trennt die Nachkommastellen, der Punkt die Tausender: 12,5 oder 1.000 (eintausend). Erlaubt sind bis zu %2$s Nachkommastellen.',
				[$e->getValue(), (string)NumberInput::QUANTITY_DECIMALS],
			);
		}

		return $this->l10n->t(
			'"%1$s" ist kein gültiger Preis. Das Komma trennt die Nachkommastellen, der Punkt die Tausender: 1.234,56 oder 0,3456. Erlaubt sind bis zu %2$s Nachkommastellen.',
			[$e->getValue(), (string)NumberInput::PRICE_DECIMALS],
		);
	}
}
