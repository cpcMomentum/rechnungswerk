<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\BackgroundJob;

use OCA\Rechnungswerk\Service\DocumentBackfillService;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\BackgroundJob\IJob;
use OCP\BackgroundJob\TimedJob;
use Psr\Log\LoggerInterface;

/**
 * Zieht den Bestand an eingefrorenen Belegen nach (#181, Schritt 3).
 *
 * Laeuft alle fuenf Minuten ein Haeppchen. Kein Nachbefuellen im `occ upgrade`:
 * tausend PDFs zu rendern waeren Minuten Wartungsmodus mit Abbruchrisiko. Ist
 * der Bestand durch, kostet der Lauf eine indizierte Abfrage ohne Treffer.
 *
 * Nicht zeitkritisch — bis eine Rechnung dran war, greift der Rueckfall auf
 * Neuerzeugung, es fehlt also nichts. Und keine Parallellaeufe: zwei Laeufe
 * wuerden dasselbe Haeppchen aufgreifen und dieselben Belege doppelt rendern.
 */
class DocumentBackfillJob extends TimedJob {

	public function __construct(
		ITimeFactory $time,
		private readonly DocumentBackfillService $service,
		private readonly LoggerInterface $logger,
	) {
		parent::__construct($time);
		$this->setInterval(5 * 60);
		$this->setTimeSensitivity(IJob::TIME_INSENSITIVE);
		$this->setAllowParallelRuns(false);
	}

	protected function run($argument): void {
		try {
			$this->service->run();
		} catch (\Throwable $e) {
			// Der Dienst faengt Fehler je Rechnung selbst ab; hier landet nur, was
			// den ganzen Lauf betrifft (etwa eine nicht erreichbare Datenbank). Das
			// darf den Cron nicht mitreissen, der naechste Lauf macht weiter.
			$this->logger->warning('Rechnungswerk: Nachziehen der Belege fehlgeschlagen', ['exception' => $e]);
		}
	}
}
