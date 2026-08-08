<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCP\Files\IAppData;
use OCP\Files\NotFoundException as FilesNotFoundException;
use OCP\Files\SimpleFS\ISimpleFolder;
use Psr\Log\LoggerInterface;

/**
 * Ablage der eingefrorenen Belege (#181, Schritt 2).
 *
 * Bis hierher entstand jedes PDF bei jedem Zugriff neu, aus den zu diesem
 * Zeitpunkt gueltigen Einstellungen. Damit war ein festgeschriebener Beleg
 * nicht unveraenderlich, sondern nur momentan gleich — ein Schnappschuss der
 * Werte reicht dagegen nicht, weil sich auch der Renderer aendert: die
 * Spaltenbreiten aus #157 haben das Aussehen jeder aelteren Rechnung
 * veraendert, ohne dass ein einziger Wert anders war.
 *
 * Deshalb wird das erzeugte PDF beim Festschreiben abgelegt und ab dann
 * ausgeliefert. Das eingebettete XML steckt darin und ist mit eingefroren.
 *
 * Ablage im app-eigenen Speicher (IAppData), nicht im Dateibaum des Nutzers:
 * dort ist der Beleg nicht versehentlich zu loeschen oder zu aendern, liegt
 * aber im Datenverzeichnis und damit in jeder Instanz-Sicherung. Die optionale
 * Ablage in Nextcloud Files bleibt davon unberuehrt, sie ist die sichtbare
 * Kopie fuer den Nutzer.
 */
class DocumentStore {

	public function __construct(
		private readonly IAppData $appData,
		private readonly LoggerInterface $logger,
	) {
	}

	/**
	 * Beleg ablegen. NUR EINMAL: existiert bereits einer, ist das ein Fehler und
	 * kein stilles Ueberschreiben — sonst koennte ein Programmierfehler genau
	 * das tun, was hier verhindert werden soll.
	 *
	 * @return string SHA-256 des abgelegten Belegs, gehoert an die Rechnung
	 * @throws IllegalStateException
	 */
	public function freeze(Invoice $invoice, string $pdf): string {
		$name = $this->fileName($invoice);
		$folder = $this->folder($invoice);

		if ($folder->fileExists($name)) {
			throw new IllegalStateException(
				'Für Rechnung ' . (string)$invoice->getNumber() . ' existiert bereits ein Beleg. '
				. 'Ein festgeschriebener Beleg wird nie überschrieben.'
			);
		}
		$folder->newFile($name, $pdf);

		return hash('sha256', $pdf);
	}

	/**
	 * Eingefrorenen Beleg lesen, oder null wenn keiner abgelegt ist (Rechnungen
	 * aus der Zeit vor dieser Aenderung, oder ein fehlgeschlagenes Einfrieren).
	 *
	 * Stimmt die Pruefsumme nicht, wird das protokolliert und der abgelegte
	 * Inhalt trotzdem geliefert: er ist das, was existiert. Stillschweigend auf
	 * Neuerzeugung auszuweichen waere schlechter, weil dann niemand merkt, dass
	 * die Ablage angetastet wurde.
	 */
	public function read(Invoice $invoice): ?string {
		try {
			$folder = $this->folder($invoice);
			if (!$folder->fileExists($this->fileName($invoice))) {
				return null;
			}
			$content = $folder->getFile($this->fileName($invoice))->getContent();
		} catch (FilesNotFoundException|\Throwable $e) {
			$this->logger->warning('Rechnungswerk: eingefrorener Beleg nicht lesbar', [
				'invoice' => $invoice->getId(),
				'exception' => $e,
			]);
			return null;
		}

		$expected = (string)$invoice->getDocumentSha256();
		if ($expected !== '' && hash('sha256', $content) !== $expected) {
			$this->logger->error('Rechnungswerk: Prüfsumme des eingefrorenen Belegs stimmt nicht', [
				'invoice' => $invoice->getId(),
				'number' => $invoice->getNumber(),
			]);
		}

		return $content;
	}

	public function has(Invoice $invoice): bool {
		try {
			return $this->folder($invoice)->fileExists($this->fileName($invoice));
		} catch (\Throwable) {
			return false;
		}
	}

	/**
	 * Ein Ordner je Jahr, damit die Ablage bei langer Nutzung nicht in einem
	 * einzigen Verzeichnis mit zehntausenden Dateien endet.
	 */
	private function folder(Invoice $invoice): ISimpleFolder {
		$year = ($invoice->getCommittedAt() ?? $invoice->getCreatedAt())?->format('Y') ?? 'ohne-jahr';
		$path = 'documents/' . $year;
		try {
			return $this->appData->getFolder($path);
		} catch (FilesNotFoundException) {
			return $this->appData->newFolder($path);
		}
	}

	/** Die Rechnungs-ID, nicht die Nummer: sie ist stabil und kollisionsfrei. */
	private function fileName(Invoice $invoice): string {
		return (string)$invoice->getId() . '.pdf';
	}
}
