<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\InvoiceMapper;
use Psr\Log\LoggerInterface;

/**
 * Bestand nachziehen (#181, Schritt 3).
 *
 * Schritt 2 friert jeden Beleg beim Festschreiben ein. Alles, was vorher
 * festgeschrieben wurde, hat keinen — dort entsteht das PDF weiter bei jedem
 * Zugriff neu und ist damit genau das, was die Aenderung abstellen soll. Dieser
 * Dienst holt das nach, in Haeppchen aus einem Hintergrundauftrag.
 *
 * Bewusst nicht im `occ upgrade`: bei tausend Rechnungen waeren das Minuten
 * Wartungsmodus, und ein Abbruch mitten im Rendern liesse die Instanz in einem
 * Zustand zurueck, den niemand vorhergesagt hat. Ein Hintergrundauftrag darf
 * beliebig oft abbrechen, er nimmt beim naechsten Lauf einfach das naechste
 * Haeppchen.
 *
 * Die Grenze bleibt bestehen: fuer Bestandsrechnungen ist das Original-Aussehen
 * verloren. Festgehalten wird der heutige, nach Schritt 1 korrigierte Stand —
 * deshalb wird jeder nachgezogene Beleg als solcher gekennzeichnet.
 */
class DocumentBackfillService {

	/**
	 * Rechnungen je Lauf. Ein Beleg braucht rund 32 bis 57 KB und einen
	 * Rendervorgang; 50 halten den Lauf im Sekundenbereich und bringen den
	 * Bestand trotzdem zuegig durch (1.000 Rechnungen in etwa zwei Stunden bei
	 * fuenfminuetigem Cron).
	 */
	public const BATCH_SIZE = 50;

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly InvoiceService $invoiceService,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Ein Haeppchen abarbeiten.
	 *
	 * @param int $limit Anzahl der Rechnungen in diesem Lauf
	 * @return array{pending: int, frozen: int, failed: int} pending ist die Groesse
	 *   des aufgegriffenen Haeppchens, nicht der gesamte Restbestand
	 */
	public function run(int $limit = self::BATCH_SIZE): array {
		$pending = $this->invoiceMapper->findWithoutFrozenDocument($limit);
		if ($pending === []) {
			return ['pending' => 0, 'frozen' => 0, 'failed' => 0];
		}

		$frozen = 0;
		$failed = 0;
		foreach ($pending as $invoice) {
			// Ein Fehlschlag beendet den Lauf nicht: eine einzelne kaputte Rechnung
			// (fehlende Firmendaten, unlesbares Logo) darf den restlichen Bestand
			// nicht blockieren. Sie wird beim naechsten Lauf wieder aufgegriffen und
			// zieht durch, sobald die Ursache behoben ist.
			if ($this->invoiceService->freezeDocument($invoice, true)) {
				$frozen++;
			} else {
				$failed++;
			}
		}

		// Der Restbestand steht mit im Protokoll: bei einem Lauf, der Haeppchen
		// fuer Haeppchen arbeitet, ist "wie viel noch" die einzige Zahl, an der
		// man erkennt, ob es vorangeht oder feststeckt.
		$this->logger->info('Rechnungswerk: Belege nachgezogen', [
			'frozen' => $frozen,
			'failed' => $failed,
			'batch' => count($pending),
			'remaining' => $this->invoiceMapper->countWithoutFrozenDocument(),
		]);

		return ['pending' => count($pending), 'frozen' => $frozen, 'failed' => $failed];
	}
}
