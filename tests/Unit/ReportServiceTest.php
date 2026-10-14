<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCA\Rechnungswerk\Service\ReportService;
use OCA\Rechnungswerk\Service\SettingsService;
use OCA\Rechnungswerk\Service\ZugferdService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class ReportServiceTest extends TestCase {

	use TranslatorStub;

	private InvoiceMapper&MockObject $mapper;
	private ReportService $service;

	protected function setUp(): void {
		parent::setUp();
		$this->mapper = $this->createMock(InvoiceMapper::class);
		$settings = new Settings();
		$settings->setCompanyName('Muster & Söhne');
		$settingsService = $this->createMock(SettingsService::class);
		$settingsService->method('getCompany')->willReturn($settings);
		$this->service = new ReportService(
			$this->mapper,
			$settingsService,
			$this->createMock(ZugferdService::class),
			$this->l10nStub(),
		);
	}

	/**
	 * @param list<array{rateBp: int, netCents: int, taxCents: int}> $breakdown
	 */
	private function invoice(
		int $id,
		string $number,
		string $issueDate,
		array $breakdown,
		string $type = Invoice::TYPE_INVOICE,
		string $status = Invoice::STATUS_COMMITTED,
		?string $paidAt = null,
		string $recipient = 'Kunde',
	): Invoice {
		$invoice = new Invoice();
		$invoice->setId($id);
		$invoice->setNumber($number);
		$invoice->setInvoiceType($type);
		$invoice->setStatus($status);
		$invoice->setRecipientName($recipient);
		$invoice->setIssueDate(new DateTime($issueDate));
		$invoice->setPaidAt($paidAt !== null ? new DateTime($paidAt) : null);
		$invoice->setSmallBusiness(0);
		$net = array_sum(array_column($breakdown, 'netCents'));
		$tax = array_sum(array_column($breakdown, 'taxCents'));
		$invoice->setSubtotalCents($net);
		$invoice->setTotalCents($net + $tax);
		$invoice->setTaxBreakdown((string)json_encode($breakdown));
		return $invoice;
	}

	public function testSumsDocumentsAndLetsStornoCancelOut(): void {
		$this->mapper->method('findIssuedBetween')->willReturn([
			$this->invoice(1, 'RE-1', '2026-03-02', [['rateBp' => 1900, 'netCents' => 10000, 'taxCents' => 1900]]),
			$this->invoice(2, 'RE-2', '2026-03-10', [['rateBp' => 1900, 'netCents' => 5000, 'taxCents' => 950]],
				Invoice::TYPE_INVOICE, Invoice::STATUS_CANCELLED),
			$this->invoice(3, 'RE-3', '2026-03-11', [['rateBp' => 1900, 'netCents' => -5000, 'taxCents' => -950]],
				Invoice::TYPE_CANCELLATION),
		]);

		$report = $this->service->build('2026-03-01', '2026-03-31');

		$this->assertSame(['count' => 3, 'netCents' => 10000, 'taxCents' => 1900, 'grossCents' => 11900], $report['totals']);
		$this->assertCount(3, $report['rows']);
		$this->assertSame('2026-03-02', $report['rows'][0]['date']);
		$this->assertSame(-5950, $report['rows'][2]['grossCents']);
	}

	public function testGroupsByTaxRateAndTaxCase(): void {
		$mixed = $this->invoice(1, 'RE-1', '2026-01-15', [
			['rateBp' => 700, 'netCents' => 2000, 'taxCents' => 140],
			['rateBp' => 1900, 'netCents' => 10000, 'taxCents' => 1900],
		]);
		// Steuerfreie Faelle fuehren den Satz der Positionen weiter, weisen aber
		// keine Steuer aus — sie gehoeren in eine eigene Zeile, nicht zu "19 %".
		$reverse = $this->invoice(2, 'RE-2', '2026-02-01', [['rateBp' => 1900, 'netCents' => 30000, 'taxCents' => 0]]);
		$reverse->setSpecialTaxCase(Invoice::SPECIAL_TAX_REVERSE_CHARGE);
		$small = $this->invoice(3, 'RE-3', '2026-02-03', [['rateBp' => 1900, 'netCents' => 4000, 'taxCents' => 0]]);
		$small->setSmallBusiness(1);
		$this->mapper->method('findIssuedBetween')->willReturn([$mixed, $reverse, $small]);

		$report = $this->service->build('2026-01-01', '2026-12-31');

		$this->assertSame([
			['category' => 'standard', 'rateBp' => 1900, 'label' => 'Umsätze zu 19 %', 'netCents' => 10000, 'taxCents' => 1900],
			['category' => 'standard', 'rateBp' => 700, 'label' => 'Umsätze zu 7 %', 'netCents' => 2000, 'taxCents' => 140],
			['category' => 'small_business', 'rateBp' => null, 'label' => 'Kleinunternehmer (§ 19 UStG)', 'netCents' => 4000, 'taxCents' => 0],
			['category' => 'reverse_charge', 'rateBp' => null, 'label' => 'Reverse Charge (§ 13b UStG)', 'netCents' => 30000, 'taxCents' => 0],
		], $report['taxGroups']);
		// Die Gruppen muessen dieselbe Summe ergeben wie die Belege.
		$this->assertSame($report['totals']['netCents'], array_sum(array_column($report['taxGroups'], 'netCents')));
		$this->assertSame($report['totals']['taxCents'], array_sum(array_column($report['taxGroups'], 'taxCents')));
		$this->assertSame([
			['month' => '2026-01', 'count' => 1, 'netCents' => 12000, 'taxCents' => 2040, 'grossCents' => 14040],
			['month' => '2026-02', 'count' => 2, 'netCents' => 34000, 'taxCents' => 0, 'grossCents' => 34000],
		], $report['months']);
	}

	public function testLegacyDocumentWithoutBreakdownStillAddsUp(): void {
		$legacy = $this->invoice(1, 'RE-1', '2026-01-15', []);
		$legacy->setSubtotalCents(10000);
		$legacy->setTotalCents(11900);
		$legacy->setTaxBreakdown(null);
		$this->mapper->method('findIssuedBetween')->willReturn([$legacy]);

		$report = $this->service->build('2026-01-01', '2026-01-31');

		$this->assertSame([
			['category' => 'standard', 'rateBp' => null, 'label' => 'Ohne Steuersatz', 'netCents' => 10000, 'taxCents' => 1900],
		], $report['taxGroups']);
	}

	public function testQueriesTheDayAfterTheLastDayExclusively(): void {
		$this->mapper->expects($this->once())->method('findIssuedBetween')
			->with(
				$this->callback(static fn (DateTime $d): bool => $d->format('Y-m-d H:i:s') === '2026-10-12 00:00:00'),
				$this->callback(static fn (DateTime $d): bool => $d->format('Y-m-d H:i:s') === '2026-10-19 00:00:00'),
			)
			->willReturn([]);
		$this->mapper->expects($this->never())->method('findPaidBetween');

		$report = $this->service->build('2026-10-12', '2026-10-18');

		$this->assertSame('2026-10-18', $report['to']);
		$this->assertSame(0, $report['totals']['count']);
	}

	public function testPaymentBasisUsesThePaymentDate(): void {
		$this->mapper->expects($this->never())->method('findIssuedBetween');
		$this->mapper->expects($this->once())->method('findPaidBetween')->willReturn([
			$this->invoice(1, 'RE-1', '2025-12-20', [['rateBp' => 1900, 'netCents' => 10000, 'taxCents' => 1900]],
				paidAt: '2026-01-07'),
		]);

		$report = $this->service->build('2026-01-01', '2026-12-31', ReportService::BASIS_PAYMENT);

		$this->assertSame('2026-01-07', $report['rows'][0]['date']);
		$this->assertSame('2025-12-20', $report['rows'][0]['issueDate']);
		$this->assertSame('2026-01', $report['months'][0]['month']);
	}

	/**
	 * @dataProvider invalidRanges
	 */
	public function testRejectsInvalidInput(string $from, string $to, string $basis): void {
		$this->mapper->expects($this->never())->method('findIssuedBetween');
		$this->expectException(ValidationException::class);
		$this->service->build($from, $to, $basis);
	}

	/** @return array<string, array{string, string, string}> */
	public static function invalidRanges(): array {
		return [
			'leer' => ['', '', 'issue'],
			'kein Datum' => ['2026-01-01', 'morgen', 'issue'],
			'31. Februar' => ['2026-02-31', '2026-03-31', 'issue'],
			'Ende vor Beginn' => ['2026-03-01', '2026-02-01', 'issue'],
			'unbekannte Basis' => ['2026-01-01', '2026-01-31', 'due'],
		];
	}

	public function testCsvIsReadableByGermanSpreadsheets(): void {
		$this->mapper->method('findIssuedBetween')->willReturn([
			$this->invoice(1, 'RE-1', '2026-03-02', [
				['rateBp' => 700, 'netCents' => 2000, 'taxCents' => 140],
				['rateBp' => 1900, 'netCents' => 123456, 'taxCents' => 23457],
			], paidAt: '2026-03-20', recipient: 'Müller; "Bau" GmbH'),
			$this->invoice(2, 'RE-2', '2026-03-05', [['rateBp' => 1900, 'netCents' => -10000, 'taxCents' => -1900]],
				Invoice::TYPE_CANCELLATION, recipient: '=HYPERLINK("http://x")'),
		]);

		$csv = $this->service->toCsv($this->service->build('2026-03-01', '2026-03-31'));

		$this->assertStringStartsWith("\u{FEFF}", $csv);
		$lines = explode("\r\n", substr($csv, 3));
		$this->assertSame(
			'Rechnungsdatum;Nummer;Art;Empfänger;Zahldatum;Steuerfall;Netto;USt;Brutto;Netto 19 %;USt 19 %;Netto 7 %;USt 7 %',
			$lines[0],
		);
		$this->assertSame(
			'02.03.2026;RE-1;Rechnung;"Müller; ""Bau"" GmbH";20.03.2026;;1254,56;235,97;1490,53;1234,56;234,57;20,00;1,40',
			$lines[1],
		);
		// Negative Betraege bleiben Zahlen, der Formel-Name wird entschaerft.
		$this->assertSame(
			'05.03.2026;RE-2;Storno;"\'=HYPERLINK(""http://x"")";;;-100,00;-19,00;-119,00;-100,00;-19,00;;',
			$lines[2],
		);
		$this->assertSame('', $lines[3]);
	}

	public function testHtmlShowsTotalsAndEscapesNames(): void {
		$this->mapper->method('findIssuedBetween')->willReturn([
			$this->invoice(1, 'RE-1', '2026-03-02', [['rateBp' => 1900, 'netCents' => 10000, 'taxCents' => 1900]],
				recipient: '<b>Kunde</b>'),
		]);

		$html = $this->service->toHtml($this->service->build('2026-03-01', '2026-03-31'));

		$this->assertStringContainsString('Muster &amp; Söhne', $html);
		$this->assertStringContainsString('01.03.2026 – 31.03.2026 · nach Rechnungsdatum', $html);
		$this->assertStringContainsString('&lt;b&gt;Kunde&lt;/b&gt;', $html);
		$this->assertStringContainsString('119,00 €', $html);
		// Ein einzelner Monat braucht keine Monatsuebersicht.
		$this->assertStringNotContainsString('Nach Monat', $html);
	}

	public function testFileNameCarriesPeriodAndBasis(): void {
		$this->mapper->method('findPaidBetween')->willReturn([]);
		$report = $this->service->build('2026-01-01', '2026-12-31', ReportService::BASIS_PAYMENT);
		$this->assertSame('Umsatzbericht_2026-01-01_2026-12-31_Zahlungseingang', $this->service->fileBaseName($report));
	}
}
