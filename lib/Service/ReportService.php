<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\IL10N;

/**
 * Umsatzbericht ueber einen frei waehlbaren Zeitraum (Jahr, Quartal, Monat,
 * Woche oder von/bis).
 *
 * Zwei Sichten, weil das Finanzamt je nach Besteuerungsform nach beidem fragt:
 *
 * - BASIS_ISSUE (Rechnungsdatum): was im Zeitraum in Rechnung gestellt wurde.
 *   Das ist die Sicht der Soll-Versteuerung. Stornos zaehlen mit ihrem eigenen
 *   Datum und negativem Betrag, die stornierte Rechnung bleibt mit ihrem
 *   urspruenglichen Datum stehen — beide zusammen ergeben null.
 * - BASIS_PAYMENT (Zahlungseingang): was im Zeitraum bezahlt wurde. Das ist die
 *   Sicht der Ist-Versteuerung und der Einnahmenueberschussrechnung.
 *
 * Gerechnet wird nichts neu: Netto, Steuer und Brutto stammen aus den beim
 * Festschreiben gespeicherten Summen des Belegs, der Bericht addiert nur. So
 * kann er nie von den Belegen abweichen.
 */
class ReportService {

	public const BASIS_ISSUE = 'issue';
	public const BASIS_PAYMENT = 'payment';

	public const BASES = [self::BASIS_ISSUE, self::BASIS_PAYMENT];

	/** Regelbesteuerung; die uebrigen Steuerfaelle sind steuerfrei (0 % USt). */
	public const TAX_STANDARD = 'standard';
	public const TAX_SMALL_BUSINESS = 'small_business';

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly SettingsService $settingsService,
		private readonly ZugferdService $zugferdService,
		private readonly IL10N $l10n,
	) {
	}

	/**
	 * @param string $from erster Tag (Y-m-d)
	 * @param string $to letzter Tag (Y-m-d), einschliesslich
	 * @param string $basis one of self::BASES
	 * @return array{
	 *     from: string,
	 *     to: string,
	 *     basis: string,
	 *     rows: list<array<string, mixed>>,
	 *     totals: array{count: int, netCents: int, taxCents: int, grossCents: int},
	 *     taxGroups: list<array{category: string, rateBp: ?int, label: string, netCents: int, taxCents: int}>,
	 *     months: list<array{month: string, count: int, netCents: int, taxCents: int, grossCents: int}>
	 * }
	 * @throws ValidationException
	 */
	public function build(string $from, string $to, string $basis = self::BASIS_ISSUE): array {
		if (!in_array($basis, self::BASES, true)) {
			throw new ValidationException($this->l10n->t('Unbekannte Berichtsart.'));
		}
		$fromDate = $this->parseDay($from);
		$toDate = $this->parseDay($to);
		if ($fromDate === null || $toDate === null) {
			throw new ValidationException($this->l10n->t('Bitte einen gültigen Zeitraum angeben.'));
		}
		if ($fromDate > $toDate) {
			throw new ValidationException($this->l10n->t('Der Beginn des Zeitraums liegt nach seinem Ende.'));
		}
		$toExclusive = (clone $toDate)->modify('+1 day');

		$invoices = $basis === self::BASIS_PAYMENT
			? $this->invoiceMapper->findPaidBetween($fromDate, $toExclusive)
			: $this->invoiceMapper->findIssuedBetween($fromDate, $toExclusive);

		$rows = [];
		$totals = ['count' => 0, 'netCents' => 0, 'taxCents' => 0, 'grossCents' => 0];
		/** @var array<string, array{category: string, rateBp: ?int, label: string, netCents: int, taxCents: int}> $groups */
		$groups = [];
		/** @var array<string, array{month: string, count: int, netCents: int, taxCents: int, grossCents: int}> $months */
		$months = [];

		foreach ($invoices as $invoice) {
			$date = $basis === self::BASIS_PAYMENT ? $invoice->getPaidAt() : $invoice->getIssueDate();
			if ($date === null) {
				continue;
			}
			$net = (int)$invoice->getSubtotalCents();
			$gross = (int)$invoice->getTotalCents();
			$tax = $gross - $net;
			$category = $this->taxCategory($invoice);
			$breakdown = $category === self::TAX_STANDARD ? $this->breakdownOf($invoice) : [];

			$rows[] = [
				'id' => (int)$invoice->getId(),
				'number' => $invoice->getNumber(),
				'invoiceType' => $invoice->getInvoiceType(),
				'status' => $invoice->getStatus(),
				'recipientName' => $invoice->getRecipientName(),
				'date' => $date->format('Y-m-d'),
				'issueDate' => $invoice->getIssueDate()?->format('Y-m-d'),
				'paidAt' => $invoice->getPaidAt()?->format('Y-m-d'),
				'taxCategory' => $category,
				'taxLabel' => $category === self::TAX_STANDARD ? '' : $this->categoryLabel($category),
				'taxBreakdown' => $breakdown,
				'netCents' => $net,
				'taxCents' => $tax,
				'grossCents' => $gross,
			];

			$totals['count']++;
			$totals['netCents'] += $net;
			$totals['taxCents'] += $tax;
			$totals['grossCents'] += $gross;

			$month = $date->format('Y-m');
			$months[$month] ??= ['month' => $month, 'count' => 0, 'netCents' => 0, 'taxCents' => 0, 'grossCents' => 0];
			$months[$month]['count']++;
			$months[$month]['netCents'] += $net;
			$months[$month]['taxCents'] += $tax;
			$months[$month]['grossCents'] += $gross;

			// Steuerfreie Faelle laufen als eine Zeile je Fall, unabhaengig vom
			// Satz der Positionen: ausgewiesen wurde dort keine Steuer. Fehlt bei
			// einem Altbeleg die Aufschluesselung, landet er ohne Satz in der
			// Regelbesteuerung, damit die Summe trotzdem aufgeht.
			$parts = $breakdown !== []
				? $breakdown
				: [['rateBp' => null, 'netCents' => $net, 'taxCents' => $tax]];
			foreach ($parts as $part) {
				$rateBp = $part['rateBp'];
				$key = $category . ':' . ($rateBp ?? '-');
				$groups[$key] ??= [
					'category' => $category,
					'rateBp' => $rateBp,
					'label' => $this->groupLabel($category, $rateBp),
					'netCents' => 0,
					'taxCents' => 0,
				];
				$groups[$key]['netCents'] += $part['netCents'];
				$groups[$key]['taxCents'] += $part['taxCents'];
			}
		}

		// Regelbesteuerung zuerst, darin der hoechste Satz oben; dann die
		// steuerfreien Faelle in fester Reihenfolge.
		$order = array_flip([
			self::TAX_STANDARD,
			self::TAX_SMALL_BUSINESS,
			Invoice::SPECIAL_TAX_REVERSE_CHARGE,
			Invoice::SPECIAL_TAX_INTRA_COMMUNITY,
			Invoice::SPECIAL_TAX_EXPORT,
		]);
		$groups = array_values($groups);
		usort($groups, static fn (array $a, array $b): int
			=> [$order[$a['category']] ?? 99, -($a['rateBp'] ?? -1)] <=> [$order[$b['category']] ?? 99, -($b['rateBp'] ?? -1)]);
		ksort($months);

		return [
			'from' => $fromDate->format('Y-m-d'),
			'to' => $toDate->format('Y-m-d'),
			'basis' => $basis,
			'rows' => $rows,
			'totals' => $totals,
			'taxGroups' => $groups,
			'months' => array_values($months),
		];
	}

	/**
	 * Der Bericht als CSV fuer Excel/LibreOffice und den Steuerberater:
	 * Semikolon als Trenner, Komma als Dezimalzeichen, UTF-8 mit BOM — so
	 * oeffnet ihn ein deutsches Excel ohne Importdialog richtig. Eine Zeile je
	 * Beleg, keine Summenzeile, damit sich die Datei weiterverarbeiten laesst.
	 *
	 * @param array<string, mixed> $report Ergebnis von build()
	 */
	public function toCsv(array $report): string {
		// Je Steuersatz, der im Zeitraum vorkommt, ein Spaltenpaar Netto/USt.
		$rates = [];
		foreach ($report['taxGroups'] as $group) {
			if ($group['category'] === self::TAX_STANDARD && $group['rateBp'] !== null) {
				$rates[] = (int)$group['rateBp'];
			}
		}

		$header = [
			$report['basis'] === self::BASIS_PAYMENT ? $this->l10n->t('Zahldatum') : $this->l10n->t('Rechnungsdatum'),
			$this->l10n->t('Nummer'),
			$this->l10n->t('Art'),
			$this->l10n->t('Empfänger'),
			$report['basis'] === self::BASIS_PAYMENT ? $this->l10n->t('Rechnungsdatum') : $this->l10n->t('Zahldatum'),
			$this->l10n->t('Steuerfall'),
			$this->l10n->t('Netto'),
			$this->l10n->t('USt'),
			$this->l10n->t('Brutto'),
		];
		foreach ($rates as $rateBp) {
			$header[] = $this->l10n->t('Netto %s', [$this->formatRate($rateBp)]);
			$header[] = $this->l10n->t('USt %s', [$this->formatRate($rateBp)]);
		}

		$lines = [$this->csvLine($header)];
		foreach ($report['rows'] as $row) {
			$other = $report['basis'] === self::BASIS_PAYMENT ? $row['issueDate'] : $row['paidAt'];
			$line = [
				$this->formatDay($row['date']),
				(string)$row['number'],
				$this->typeLabel((string)$row['invoiceType']),
				(string)$row['recipientName'],
				$other !== null ? $this->formatDay($other) : '',
				(string)$row['taxLabel'],
				$this->formatAmount($row['netCents']),
				$this->formatAmount($row['taxCents']),
				$this->formatAmount($row['grossCents']),
			];
			$byRate = [];
			foreach ($row['taxBreakdown'] as $part) {
				$byRate[(int)$part['rateBp']] = $part;
			}
			foreach ($rates as $rateBp) {
				$line[] = isset($byRate[$rateBp]) ? $this->formatAmount($byRate[$rateBp]['netCents']) : '';
				$line[] = isset($byRate[$rateBp]) ? $this->formatAmount($byRate[$rateBp]['taxCents']) : '';
			}
			$lines[] = $this->csvLine($line);
		}
		return "\u{FEFF}" . implode("\r\n", $lines) . "\r\n";
	}

	/**
	 * Der Bericht als PDF zum Ablegen: Summen, Aufteilung nach Steuersatz,
	 * Monatsuebersicht und die Belegliste.
	 *
	 * @param array<string, mixed> $report Ergebnis von build()
	 */
	public function toPdf(array $report): string {
		return $this->zugferdService->renderHtmlToPdf($this->toHtml($report));
	}

	/**
	 * @param array<string, mixed> $report Ergebnis von build()
	 */
	public function toHtml(array $report): string {
		$e = static fn (?string $s): string => htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
		$money = static fn (int $cents): string => number_format($cents / 100, 2, ',', '.') . ' €';
		$company = (string)$this->settingsService->getCompany()->getCompanyName();
		$payment = $report['basis'] === self::BASIS_PAYMENT;

		$groupRows = '';
		foreach ($report['taxGroups'] as $group) {
			$groupRows .= '<tr><td>' . $e($group['label']) . '</td><td class="num">' . $money($group['netCents'])
				. '</td><td class="num">' . $money($group['taxCents']) . '</td><td class="num">'
				. $money($group['netCents'] + $group['taxCents']) . '</td></tr>';
		}
		$totals = $report['totals'];
		$sumRow = '<tr class="sum"><td>' . $e($this->l10n->t('Summe')) . '</td><td class="num">' . $money($totals['netCents'])
			. '</td><td class="num">' . $money($totals['taxCents']) . '</td><td class="num">' . $money($totals['grossCents']) . '</td></tr>';
		$amountHead = '<th class="num">' . $e($this->l10n->t('Netto')) . '</th><th class="num">' . $e($this->l10n->t('USt'))
			. '</th><th class="num">' . $e($this->l10n->t('Brutto')) . '</th>';

		$monthTable = '';
		if (count($report['months']) > 1) {
			$monthRows = '';
			foreach ($report['months'] as $month) {
				$monthRows .= '<tr><td>' . $e(substr($month['month'], 5, 2) . '/' . substr($month['month'], 0, 4))
					. '</td><td class="num">' . $month['count'] . '</td><td class="num">' . $money($month['netCents'])
					. '</td><td class="num">' . $money($month['taxCents']) . '</td><td class="num">' . $money($month['grossCents']) . '</td></tr>';
			}
			$monthTable = '<h2>' . $e($this->l10n->t('Nach Monat')) . '</h2><table><thead><tr><th>' . $e($this->l10n->t('Monat'))
				. '</th><th class="num">' . $e($this->l10n->t('Belege')) . '</th>' . $amountHead . '</tr></thead><tbody>' . $monthRows . '</tbody></table>';
		}

		$docRows = '';
		foreach ($report['rows'] as $row) {
			$type = $row['invoiceType'] === Invoice::TYPE_CANCELLATION
				? ' (' . $this->typeLabel(Invoice::TYPE_CANCELLATION) . ')'
				: ($row['status'] === Invoice::STATUS_CANCELLED ? ' (' . $this->l10n->t('storniert') . ')' : '');
			$note = $row['taxLabel'] !== '' ? '<br><span class="muted">' . $e($row['taxLabel']) . '</span>' : '';
			$docRows .= '<tr><td>' . $e($this->formatDay($row['date'])) . '</td><td>' . $e($row['number'] . $type) . '</td><td>'
				. $e($row['recipientName']) . $note . '</td><td class="num">' . $money($row['netCents']) . '</td><td class="num">'
				. $money($row['taxCents']) . '</td><td class="num">' . $money($row['grossCents']) . '</td></tr>';
		}
		if ($docRows === '') {
			$docRows = '<tr><td colspan="6" class="muted">' . $e($this->l10n->t('Keine Belege im Zeitraum.')) . '</td></tr>';
		}

		$basisLabel = $payment ? $this->l10n->t('nach Zahlungseingang') : $this->l10n->t('nach Rechnungsdatum');
		$period = $this->formatDay($report['from']) . ' – ' . $this->formatDay($report['to']);
		$dateHead = $payment ? $this->l10n->t('Zahldatum') : $this->l10n->t('Rechnungsdatum');

		return '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>'
			. '@page { margin: 18mm 15mm; }'
			. 'body { font-family: "DejaVu Sans", sans-serif; font-size: 9pt; color: #222; }'
			. 'h1 { font-size: 16pt; margin: 0 0 2mm; }'
			. 'h2 { font-size: 10pt; margin: 7mm 0 2mm; }'
			. '.meta { color: #555; margin: 0 0 1mm; }'
			. 'table { width: 100%; border-collapse: collapse; }'
			. 'th { text-align: left; font-size: 8pt; color: #555; border-bottom: 1px solid #555; padding: 1.5mm 2mm; }'
			. 'td { border-bottom: 0.5px solid #ccc; padding: 1.5mm 2mm; vertical-align: top; }'
			. '.num { text-align: right; white-space: nowrap; }'
			. '.sum td { font-weight: bold; border-top: 1px solid #555; border-bottom: none; }'
			. '.muted { color: #666; font-size: 8pt; }'
			. '</style></head><body>'
			. '<h1>' . $e($this->l10n->t('Umsatzbericht')) . '</h1>'
			. ($company !== '' ? '<p class="meta">' . $e($company) . '</p>' : '')
			. '<p class="meta">' . $e($period . ' · ' . $basisLabel) . '</p>'
			. '<p class="meta">' . $e($this->l10n->t('Erstellt am %s', [(new DateTime())->format('d.m.Y')])) . '</p>'
			. '<h2>' . $e($this->l10n->t('Nach Steuersatz')) . '</h2>'
			. '<table><thead><tr><th>' . $e($this->l10n->t('Steuerfall')) . '</th>' . $amountHead . '</tr></thead><tbody>'
			. $groupRows . $sumRow . '</tbody></table>'
			. $monthTable
			. '<h2>' . $e($this->l10n->t('Belege') . ' (' . $totals['count'] . ')') . '</h2>'
			. '<table><thead><tr><th>' . $e($dateHead) . '</th><th>' . $e($this->l10n->t('Nummer')) . '</th><th>'
			. $e($this->l10n->t('Empfänger')) . '</th>' . $amountHead . '</tr></thead><tbody>' . $docRows . '</tbody></table>'
			. '</body></html>';
	}

	/**
	 * Dateiname ohne Endung, z. B. "Umsatzbericht_2026-01-01_2026-12-31".
	 *
	 * @param array<string, mixed> $report Ergebnis von build()
	 */
	public function fileBaseName(array $report): string {
		return InvoiceCalculator::sanitizeFileName(
			$this->l10n->t('Umsatzbericht') . '_' . $report['from'] . '_' . $report['to']
			. ($report['basis'] === self::BASIS_PAYMENT ? '_' . $this->l10n->t('Zahlungseingang') : ''),
		);
	}

	private function taxCategory(Invoice $invoice): string {
		if ((int)$invoice->getSmallBusiness() === 1) {
			return self::TAX_SMALL_BUSINESS;
		}
		return $invoice->isTaxExemptCase() ? (string)$invoice->getSpecialTaxCase() : self::TAX_STANDARD;
	}

	/** @return list<array{rateBp: int, netCents: int, taxCents: int}> */
	private function breakdownOf(Invoice $invoice): array {
		$parts = [];
		foreach ($invoice->getTaxBreakdownArray() as $part) {
			if (is_array($part) && isset($part['rateBp'], $part['netCents'], $part['taxCents'])) {
				$parts[] = [
					'rateBp' => (int)$part['rateBp'],
					'netCents' => (int)$part['netCents'],
					'taxCents' => (int)$part['taxCents'],
				];
			}
		}
		return $parts;
	}

	private function groupLabel(string $category, ?int $rateBp): string {
		if ($category !== self::TAX_STANDARD) {
			return $this->categoryLabel($category);
		}
		return $rateBp === null
			? $this->l10n->t('Ohne Steuersatz')
			: $this->l10n->t('Umsätze zu %s', [$this->formatRate($rateBp)]);
	}

	private function categoryLabel(string $category): string {
		return match ($category) {
			self::TAX_SMALL_BUSINESS => $this->l10n->t('Kleinunternehmer (§ 19 UStG)'),
			Invoice::SPECIAL_TAX_REVERSE_CHARGE => $this->l10n->t('Reverse Charge (§ 13b UStG)'),
			Invoice::SPECIAL_TAX_INTRA_COMMUNITY => $this->l10n->t('Innergemeinschaftliche Lieferung'),
			Invoice::SPECIAL_TAX_EXPORT => $this->l10n->t('Ausfuhrlieferung'),
			default => $category,
		};
	}

	private function typeLabel(string $type): string {
		return $type === Invoice::TYPE_CANCELLATION ? $this->l10n->t('Storno') : $this->l10n->t('Rechnung');
	}

	/** Basispunkte -> "19 %" bzw. "7,5 %". */
	private function formatRate(int $rateBp): string {
		return rtrim(rtrim(number_format($rateBp / 100, 2, ',', ''), '0'), ',') . ' %';
	}

	/** Cent -> "1234,56" (ohne Tausenderpunkt, damit Tabellenprogramme rechnen koennen). */
	private function formatAmount(int $cents): string {
		return number_format($cents / 100, 2, ',', '');
	}

	/** "2026-03-09" -> "09.03.2026". */
	private function formatDay(string $day): string {
		return substr($day, 8, 2) . '.' . substr($day, 5, 2) . '.' . substr($day, 0, 4);
	}

	/**
	 * Eine CSV-Zeile. Felder, die ein Tabellenprogramm als Formel lesen wuerde
	 * (Empfaengername "=…", "+…", "@…"), bekommen ein Hochkomma davor — der
	 * Name stammt aus Benutzereingaben und die Datei geht an Dritte. Betraege
	 * sind davon ausgenommen: "-119,00" ist eine Zahl, keine Formel.
	 *
	 * @param list<string> $fields
	 */
	private function csvLine(array $fields): string {
		return implode(';', array_map(static function (string $field): string {
			if ($field !== '' && strpbrk($field[0], "=+-@\t\r") !== false && preg_match('/^-?\d+(,\d+)?$/', $field) !== 1) {
				$field = "'" . $field;
			}
			return preg_match('/[";\r\n]/', $field) === 1 ? '"' . str_replace('"', '""', $field) . '"' : $field;
		}, $fields));
	}

	private function parseDay(string $value): ?DateTime {
		if (preg_match('/^\d{4}-\d{2}-\d{2}$/', $value) !== 1) {
			return null;
		}
		$date = DateTime::createFromFormat('!Y-m-d', $value);
		// createFromFormat rollt "2026-02-31" stillschweigend auf den 3. Maerz.
		if ($date === false || $date->format('Y-m-d') !== $value) {
			return null;
		}
		return $date;
	}
}
