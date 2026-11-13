<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Tests\Unit;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\Settings;
use OCA\Rechnungswerk\Service\GirocodeService;
use OCA\Rechnungswerk\Service\ZugferdService;
use OCP\Files\IRootFolder;
use OCP\ITempManager;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

/** One real ZUGFeRD PDF per variant; CI validates the files in RW_EINVOICE_SAMPLES_DIR with Mustang. */
class EInvoiceSamplesTest extends TestCase {

	use CompanyClockStub;

	private ZugferdService $service;

	protected function setUp(): void {
		parent::setUp();
		$tempManager = $this->createMock(ITempManager::class);
		$tempManager->method('getTempBaseDir')->willReturn(sys_get_temp_dir());
		$this->service = new ZugferdService(
			$this->createMock(IRootFolder::class),
			new GirocodeService($this->createMock(LoggerInterface::class)),
			$this->createMock(LoggerInterface::class),
			$tempManager,
			$this->companyClock(),
		);
	}

	/** @return array<string, array{0: callable(): array{0: Invoice, 1: InvoiceItem[], 2: Settings, 3: ?string, 4: ?DateTime}}> */
	public static function samples(): array {
		return [
			'standard' => [static function (): array {
				$inv = self::invoice();
				self::totals($inv, [[1900, 20000]]);
				$inv->setPaymentTermDays(14);
				$inv->setDueDate(new DateTime('2026-06-30'));
				return [$inv, [self::item(1000000, 1900, 20000)], self::settings(), null, null];
			}],
			'mixed-tax-rates' => [static function (): array {
				$inv = self::invoice();
				self::totals($inv, [[700, 10000], [1900, 20000]]);
				return [$inv, [self::item(1000000, 1900, 20000), self::item(1000000, 700, 10000, '1')], self::settings(), null, null];
			}],
			'small-business' => [static function (): array {
				$inv = self::invoice();
				$inv->setSmallBusiness(1);
				self::totals($inv, [[0, 20000]], exempt: true);
				return [$inv, [self::item(1000000, 0, 20000)], self::settings(1), null, null];
			}],
			'register-number-without-vat-id' => [static function (): array {
				$settings = self::settings();
				$settings->setVatId(null);
				$settings->setTaxNumber('12/345/67890');
				$settings->setRegisterNumber('HRB 12345, Amtsgericht Stuttgart');
				$inv = self::invoice();
				self::totals($inv, [[1900, 20000]]);
				return [$inv, [self::item(1000000, 1900, 20000)], $settings, null, null];
			}],
			'reverse-charge' => [static function (): array {
				$inv = self::invoice();
				$inv->setSpecialTaxCase(Invoice::SPECIAL_TAX_REVERSE_CHARGE);
				$inv->setRecipientVatId('DE987654321');
				self::totals($inv, [[1900, 20000]], exempt: true);
				return [$inv, [self::item(1000000, 1900, 20000)], self::settings(), null, null];
			}],
			'intra-community' => [static function (): array {
				$inv = self::invoice();
				$inv->setSpecialTaxCase(Invoice::SPECIAL_TAX_INTRA_COMMUNITY);
				$inv->setRecipientCountry('AT');
				$inv->setRecipientCity('Wien');
				$inv->setRecipientPostalCode('1010');
				$inv->setRecipientVatId('ATU12345678');
				$inv->setPerformanceDate(new DateTime('2026-06-10'));
				self::totals($inv, [[1900, 20000]], exempt: true);
				return [$inv, [self::item(1000000, 1900, 20000)], self::settings(), null, null];
			}],
			'intra-community-cancellation' => [static function (): array {
				$inv = self::invoice(Invoice::TYPE_CANCELLATION);
				$inv->setNumber('RE-2026-0003');
				$inv->setSpecialTaxCase(Invoice::SPECIAL_TAX_INTRA_COMMUNITY);
				$inv->setRecipientCountry('AT');
				$inv->setRecipientCity('Wien');
				$inv->setRecipientPostalCode('1010');
				$inv->setRecipientVatId('ATU12345678');
				$inv->setPerformancePeriodStart(new DateTime('2026-06-01'));
				$inv->setPerformancePeriodEnd(new DateTime('2026-06-30'));
				self::totals($inv, [[1900, -20000]], exempt: true);
				return [$inv, [self::item(1000000, 1900, -20000, '-2')], self::settings(), 'RE-2026-0001', new DateTime('2026-05-16')];
			}],
			'export' => [static function (): array {
				$inv = self::invoice();
				$inv->setSpecialTaxCase(Invoice::SPECIAL_TAX_EXPORT);
				$inv->setRecipientCountry('CH');
				$inv->setRecipientCity('Zürich');
				$inv->setRecipientPostalCode('8001');
				self::totals($inv, [[1900, 20000]], exempt: true);
				return [$inv, [self::item(1000000, 1900, 20000)], self::settings(), null, null];
			}],
			'cancellation' => [static function (): array {
				$inv = self::invoice(Invoice::TYPE_CANCELLATION);
				$inv->setNumber('RE-2026-0002');
				self::totals($inv, [[1900, -20000]]);
				return [$inv, [self::item(1000000, 1900, -20000, '-2')], self::settings(), 'RE-2026-0001', new DateTime('2026-05-16')];
			}],
			'free-text-unit' => [static function (): array {
				$inv = self::invoice();
				self::totals($inv, [[1900, 20000]]);
				return [$inv, [self::item(1000000, 1900, 20000, '2', InvoiceItem::UNIT_HOUR, 'Personen')], self::settings(), null, null];
			}],
			'four-decimal-price' => [static function (): array {
				$inv = self::invoice();
				self::totals($inv, [[1900, 42647]]);
				return [$inv, [self::item(3456, 1900, 42647, '1234')], self::settings(), null, null];
			}],
			'references-and-period' => [static function (): array {
				$inv = self::invoice();
				$inv->setPerformancePeriodStart(new DateTime('2026-06-01'));
				$inv->setPerformancePeriodEnd(new DateTime('2026-06-30'));
				$inv->setOrderNumber('BEST-77');
				$inv->setReferenceNumber('REF-55');
				$inv->setBuyerReference('LEITWEG-04011000-12345-67');
				$inv->setContractNumber('V-2026-9');
				$inv->setProjectReference('P-42');
				$inv->setDiscountTerms('2 % Skonto bei Zahlung innerhalb von 7 Tagen');
				self::totals($inv, [[1900, 20000]]);
				return [$inv, [self::item(1000000, 1900, 20000)], self::settings(), null, null];
			}],
			'contacts-and-address-addition' => [static function (): array {
				$settings = self::settings();
				$settings->setContactPerson('Erika Muster');
				$settings->setContactPhone('+49 30 111');
				$settings->setContactEmail('kontakt@muster.de');
				$inv = self::invoice();
				$inv->setRecipientAddressAddition('z. Hd. Frau Meyer');
				$inv->setRecipientContactPerson('Frau Meyer');
				$inv->setRecipientPhone('+49 89 222');
				$inv->setRecipientEmail('einkauf@kunde.de');
				$inv->setPerformanceDate(new DateTime('2026-06-10'));
				self::totals($inv, [[1900, 20000]]);
				return [$inv, [self::item(1000000, 1900, 20000)], $settings, null, null];
			}],
		];
	}

	/** @param callable(): array{0: Invoice, 1: InvoiceItem[], 2: Settings, 3: ?string, 4: ?DateTime} $build */
	#[DataProvider('samples')]
	public function testSampleIsAZugferdPdf(callable $build): void {
		[$invoice, $items, $settings, $relatedNumber, $relatedDate] = $build();

		$pdf = $this->service->generatePdf($invoice, $items, $settings, $relatedNumber, $relatedDate);

		$this->assertStringStartsWith('%PDF-', $pdf);
		$this->assertStringContainsString('factur-x.xml', $pdf, 'Die PDF traegt das EN16931-XML als Anhang.');

		$dir = getenv('RW_EINVOICE_SAMPLES_DIR');
		if (is_string($dir) && $dir !== '') {
			if (!is_dir($dir)) {
				mkdir($dir, 0777, true);
			}
			file_put_contents($dir . '/' . $this->dataName() . '.pdf', $pdf);
		}
	}

	private static function settings(int $smallBusiness = 0): Settings {
		$s = new Settings();
		$s->setOwnerUserId('alice');
		$s->setCompanyName('Muster GmbH');
		$s->setCompanyAddress("Hauptstraße 1\n10115 Berlin");
		$s->setVatId('DE123456789');
		$s->setIban('DE02120300000000202051');
		$s->setBic('BYLADEM1001');
		$s->setSmallBusiness($smallBusiness);
		$s->setNumberFormat(Settings::DEFAULT_NUMBER_FORMAT);
		$s->setNumberCounter(1);
		$s->setDefaultTaxRateBp(1900);
		return $s;
	}

	private static function invoice(string $type = Invoice::TYPE_INVOICE): Invoice {
		$inv = new Invoice();
		$inv->setStatus(Invoice::STATUS_COMMITTED);
		$inv->setInvoiceType($type);
		$inv->setSmallBusiness(0);
		$inv->setNumber('RE-2026-0001');
		$inv->setIssueDate(new DateTime('2026-06-16'));
		$inv->setRecipientName('Kunde AG');
		$inv->setRecipientAddress('Kundenweg 5');
		$inv->setRecipientPostalCode('80331');
		$inv->setRecipientCity('München');
		$inv->setRecipientCountry('DE');
		return $inv;
	}

	/** @param array<int, array{0: int, 1: int}> $groups [rateBp, netCents] */
	private static function totals(Invoice $inv, array $groups, bool $exempt = false): void {
		$breakdown = [];
		$net = 0;
		$tax = 0;
		foreach ($groups as [$rateBp, $netCents]) {
			$taxCents = $exempt ? 0 : intdiv($netCents * $rateBp, 10000);
			$breakdown[] = ['rateBp' => $rateBp, 'netCents' => $netCents, 'taxCents' => $taxCents];
			$net += $netCents;
			$tax += $taxCents;
		}
		$inv->setSubtotalCents($net);
		$inv->setTotalCents($net + $tax);
		$inv->setTaxBreakdown(json_encode($breakdown));
	}

	private static function item(int $unitPriceE4, int $taxRateBp, int $lineTotalCents, string $qty = '2', string $unitCode = InvoiceItem::UNIT_PIECE, ?string $unitLabel = null): InvoiceItem {
		$i = new InvoiceItem();
		$i->setName('Beratung');
		$i->setQuantity($qty);
		$i->setUnitCode($unitCode);
		$i->setUnitLabel($unitLabel);
		$i->setUnitPriceE4($unitPriceE4);
		$i->setTaxRateBp($taxRateBp);
		$i->setLineTotalCents($lineTotalCents);
		$i->setSortOrder(0);
		return $i;
	}
}
