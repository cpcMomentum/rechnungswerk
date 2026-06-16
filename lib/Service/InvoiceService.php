<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use DateTime;
use OCA\Rechnungswerk\Db\Invoice;
use OCA\Rechnungswerk\Db\InvoiceItem;
use OCA\Rechnungswerk\Db\InvoiceItemMapper;
use OCA\Rechnungswerk\Db\InvoiceMapper;
use OCA\Rechnungswerk\Exception\IllegalStateException;
use OCA\Rechnungswerk\Exception\NotFoundException;
use OCA\Rechnungswerk\Exception\ValidationException;
use OCP\AppFramework\Db\DoesNotExistException;
use OCP\IDBConnection;

class InvoiceService {

	public function __construct(
		private readonly InvoiceMapper $invoiceMapper,
		private readonly InvoiceItemMapper $itemMapper,
		private readonly SettingsService $settingsService,
		private readonly IDBConnection $db,
	) {
	}

	/** @return Invoice[] */
	public function list(string $userId): array {
		return $this->invoiceMapper->findByOwner($userId);
	}

	/**
	 * @return array<string, mixed> invoice fields plus an "items" list
	 * @throws NotFoundException
	 */
	public function get(int $id, string $userId): array {
		$invoice = $this->findOwned($id, $userId);
		return $this->present($invoice);
	}

	/**
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws ValidationException
	 */
	public function create(string $userId, array $data): array {
		$now = new DateTime();
		$invoice = new Invoice();
		$invoice->setOwnerUserId($userId);
		$invoice->setStatus(Invoice::STATUS_DRAFT);
		$invoice->setInvoiceType(Invoice::TYPE_INVOICE);
		$invoice->setCreatedAt($now);
		$invoice->setUpdatedAt($now);
		$this->applyHeader($invoice, $data, $userId);

		$this->db->beginTransaction();
		try {
			$invoice = $this->invoiceMapper->insert($invoice);
			$this->replaceItems($invoice, $this->extractItems($data, $userId));
			$this->recomputeTotals($invoice);
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($invoice);
	}

	/**
	 * @param array<string, mixed> $data
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function update(int $id, string $userId, array $data): array {
		$invoice = $this->findOwned($id, $userId);
		$this->assertDraft($invoice);
		$this->applyHeader($invoice, $data, $userId);

		$this->db->beginTransaction();
		try {
			if (array_key_exists('items', $data)) {
				$this->replaceItems($invoice, $this->extractItems($data, $userId));
			}
			$this->recomputeTotals($invoice);
			$invoice->setUpdatedAt(new DateTime());
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($invoice);
	}

	/**
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function delete(int $id, string $userId): void {
		$invoice = $this->findOwned($id, $userId);
		$this->assertDraft($invoice);

		$this->db->beginTransaction();
		try {
			$this->itemMapper->deleteByInvoice((int)$invoice->getId());
			$this->invoiceMapper->delete($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}
	}

	/**
	 * Festschreibung: assign the final sequential number and lock the invoice.
	 *
	 * @return array<string, mixed>
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 * @throws ValidationException
	 */
	public function commit(int $id, string $userId): array {
		$invoice = $this->findOwned($id, $userId);
		$this->assertDraft($invoice);

		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		if (count($items) === 0) {
			throw new ValidationException('Eine Rechnung ohne Positionen kann nicht festgeschrieben werden.');
		}
		if (($invoice->getRecipientName() ?? '') === '') {
			throw new ValidationException('Ein Empfänger ist zum Festschreiben erforderlich.');
		}

		// Create the settings row outside the transaction: a failed INSERT would
		// otherwise abort the commit transaction on PostgreSQL.
		$this->settingsService->getOrCreate($userId);

		$now = new DateTime();
		$year = (int)$now->format('Y');

		$this->db->beginTransaction();
		try {
			// Re-read under a row lock and re-check the status inside the
			// transaction. Two concurrent commits on the same draft would
			// otherwise both pass the pre-check and each reserve a number,
			// leaving a gap in the sequence (GoBD violation).
			$invoice = $this->findOwnedForUpdate($id, $userId);
			$this->assertDraft($invoice);

			$number = $this->settingsService->reserveNextNumber($userId, $year);
			$invoice->setNumber($number);
			$invoice->setStatus(Invoice::STATUS_COMMITTED);
			$invoice->setIssueDate($now);
			$invoice->setCommittedAt($now);
			$invoice->setUpdatedAt($now);
			$this->recomputeTotals($invoice);
			$this->invoiceMapper->update($invoice);
			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($invoice);
	}

	/**
	 * Storno: cancel a committed invoice by creating a negated cancellation
	 * document (own number) and marking the original as cancelled.
	 *
	 * @return array<string, mixed> the cancellation document
	 * @throws NotFoundException
	 * @throws IllegalStateException
	 */
	public function cancel(int $id, string $userId): array {
		$original = $this->findOwned($id, $userId);
		if ($original->getStatus() !== Invoice::STATUS_COMMITTED) {
			throw new IllegalStateException('Nur festgeschriebene Rechnungen können storniert werden.');
		}

		$this->settingsService->getOrCreate($userId);

		$now = new DateTime();
		$year = (int)$now->format('Y');

		$this->db->beginTransaction();
		try {
			// Lock the original and re-check inside the transaction so a double
			// cancel cannot create two storno documents for the same invoice.
			$original = $this->findOwnedForUpdate($id, $userId);
			if ($original->getStatus() !== Invoice::STATUS_COMMITTED) {
				throw new IllegalStateException('Nur festgeschriebene Rechnungen können storniert werden.');
			}
			$originalItems = $this->itemMapper->findByInvoice((int)$original->getId());

			$storno = new Invoice();
			$storno->setOwnerUserId($userId);
			$storno->setStatus(Invoice::STATUS_COMMITTED);
			$storno->setInvoiceType(Invoice::TYPE_CANCELLATION);
			$storno->setRelatedInvoiceId((int)$original->getId());
			$this->copyRecipient($original, $storno);
			$storno->setSpecialTaxCase($original->getSpecialTaxCase());
			$storno->setGreeting($original->getGreeting());
			$storno->setCustomFields($original->getCustomFields());
			$storno->setIssueDate($now);
			$storno->setCommittedAt($now);
			$storno->setCreatedAt($now);
			$storno->setUpdatedAt($now);
			$storno->setNumber($this->settingsService->reserveNextNumber($userId, $year));
			$storno = $this->invoiceMapper->insert($storno);

			foreach ($originalItems as $item) {
				$copy = new InvoiceItem();
				$copy->setInvoiceId((int)$storno->getId());
				$copy->setProductId($item->getProductId());
				$copy->setName($item->getName());
				$copy->setDescription($item->getDescription());
				$copy->setQuantity($item->getQuantity());
				$copy->setUnitCode($item->getUnitCode());
				$copy->setUnitPriceCents(-$item->getUnitPriceCents());
				$copy->setTaxRateBp($item->getTaxRateBp());
				$copy->setLineTotalCents(-$item->getLineTotalCents());
				$copy->setSortOrder($item->getSortOrder());
				$this->itemMapper->insert($copy);
			}
			$this->recomputeTotals($storno);
			$this->invoiceMapper->update($storno);

			$original->setStatus(Invoice::STATUS_CANCELLED);
			$original->setUpdatedAt($now);
			$this->invoiceMapper->update($original);

			$this->db->commit();
		} catch (\Throwable $e) {
			$this->db->rollBack();
			throw $e;
		}

		return $this->present($storno);
	}

	// --- internals -------------------------------------------------------

	/**
	 * @throws NotFoundException
	 */
	private function findOwned(int $id, string $userId): Invoice {
		try {
			return $this->invoiceMapper->findOneByOwner($id, $userId);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Rechnung nicht gefunden.');
		}
	}

	/**
	 * @throws NotFoundException
	 */
	private function findOwnedForUpdate(int $id, string $userId): Invoice {
		try {
			return $this->invoiceMapper->findOneByOwnerForUpdate($id, $userId);
		} catch (DoesNotExistException) {
			throw new NotFoundException('Rechnung nicht gefunden.');
		}
	}

	/**
	 * @throws IllegalStateException
	 */
	private function assertDraft(Invoice $invoice): void {
		if ($invoice->getStatus() !== Invoice::STATUS_DRAFT) {
			throw new IllegalStateException('Festgeschriebene oder stornierte Rechnungen können nicht mehr geändert werden.');
		}
	}

	/**
	 * @param array<string, mixed> $data
	 */
	private function applyHeader(Invoice $invoice, array $data, string $userId): void {
		$strings = [
			'recipientName', 'recipientContactId', 'recipientAddress', 'recipientPostalCode',
			'recipientCity', 'recipientEmail', 'recipientVatId', 'referenceNumber',
			'orderNumber', 'buyerReference', 'specialTaxCase', 'greeting', 'extraText',
		];
		foreach ($strings as $field) {
			if (array_key_exists($field, $data)) {
				$value = $data[$field];
				$invoice->{'set' . ucfirst($field)}($value !== null && $value !== '' ? (string)$value : null);
			}
		}
		if (array_key_exists('recipientCountry', $data)) {
			$country = $data['recipientCountry'];
			$invoice->setRecipientCountry($country !== null && $country !== '' ? (string)$country : 'DE');
		} elseif ($invoice->getRecipientCountry() === null) {
			$invoice->setRecipientCountry('DE');
		}
		foreach (['performanceDate', 'performancePeriodStart', 'performancePeriodEnd'] as $dateField) {
			if (array_key_exists($dateField, $data)) {
				$invoice->{'set' . ucfirst($dateField)}($this->parseDate($data[$dateField]));
			}
		}
		if (array_key_exists('customFields', $data)) {
			$invoice->setCustomFields($this->encodeCustomFields($data['customFields']));
		}
	}

	private function copyRecipient(Invoice $from, Invoice $to): void {
		$to->setRecipientName($from->getRecipientName());
		$to->setRecipientContactId($from->getRecipientContactId());
		$to->setRecipientAddress($from->getRecipientAddress());
		$to->setRecipientPostalCode($from->getRecipientPostalCode());
		$to->setRecipientCity($from->getRecipientCity());
		$to->setRecipientCountry($from->getRecipientCountry());
		$to->setRecipientEmail($from->getRecipientEmail());
		$to->setRecipientVatId($from->getRecipientVatId());
	}

	/**
	 * Build (but do not persist) InvoiceItem entities from request data.
	 * For small-business owners (§19) the effective tax rate is forced to 0.
	 *
	 * @param array<string, mixed> $data
	 * @return InvoiceItem[]
	 */
	private function extractItems(array $data, string $userId): array {
		$raw = $data['items'] ?? [];
		if (!is_array($raw)) {
			return [];
		}
		$smallBusiness = $this->settingsService->getOrCreate($userId)->getSmallBusiness() === 1;

		$items = [];
		$sort = 0;
		foreach ($raw as $row) {
			if (!is_array($row)) {
				continue;
			}
			$quantity = isset($row['quantity']) ? (string)$row['quantity'] : '1';
			$unitPriceCents = (int)($row['unitPriceCents'] ?? 0);
			$taxRateBp = $smallBusiness ? 0 : (int)($row['taxRateBp'] ?? 0);

			$name = (string)($row['name'] ?? '');
			if (mb_strlen($name) > 255) {
				throw new ValidationException('Positionsname darf maximal 255 Zeichen lang sein.');
			}

			$item = new InvoiceItem();
			$item->setProductId(isset($row['productId']) && $row['productId'] !== null ? (int)$row['productId'] : null);
			$item->setName($name);
			$item->setDescription(isset($row['description']) && $row['description'] !== '' ? (string)$row['description'] : null);
			$item->setQuantity($quantity);
			$item->setUnitCode((string)($row['unitCode'] ?? InvoiceItem::UNIT_PIECE));
			$item->setUnitPriceCents($unitPriceCents);
			$item->setTaxRateBp($taxRateBp);
			$item->setLineTotalCents(InvoiceCalculator::lineTotalCents($quantity, $unitPriceCents));
			$item->setSortOrder($sort++);
			$items[] = $item;
		}
		return $items;
	}

	/**
	 * @param InvoiceItem[] $items
	 */
	private function replaceItems(Invoice $invoice, array $items): void {
		$invoiceId = (int)$invoice->getId();
		$this->itemMapper->deleteByInvoice($invoiceId);
		foreach ($items as $item) {
			$item->setInvoiceId($invoiceId);
			$this->itemMapper->insert($item);
		}
	}

	private function recomputeTotals(Invoice $invoice): void {
		$items = $this->itemMapper->findByInvoice((int)$invoice->getId());
		$lines = array_map(
			static fn (InvoiceItem $i): array => [
				'taxRateBp' => (int)$i->getTaxRateBp(),
				'lineTotalCents' => (int)$i->getLineTotalCents(),
			],
			$items,
		);
		$totals = InvoiceCalculator::computeTotals($lines);
		$invoice->setSubtotalCents($totals['subtotalCents']);
		$invoice->setTotalCents($totals['totalCents']);
		$invoice->setTaxBreakdown(json_encode($totals['taxBreakdown']) ?: '[]');
	}

	/**
	 * @return array<string, mixed>
	 */
	private function present(Invoice $invoice): array {
		$data = $invoice->jsonSerialize();
		$data['items'] = $this->itemMapper->findByInvoice((int)$invoice->getId());
		return $data;
	}

	private function parseDate(mixed $value): ?DateTime {
		if (!is_string($value) || trim($value) === '') {
			return null;
		}
		$date = DateTime::createFromFormat('Y-m-d', substr($value, 0, 10));
		if ($date === false) {
			return null;
		}
		$date->setTime(0, 0, 0);
		return $date;
	}

	private function encodeCustomFields(mixed $value): ?string {
		if (!is_array($value)) {
			return null;
		}
		$clean = [];
		foreach ($value as $entry) {
			if (is_array($entry) && isset($entry['label'])) {
				$clean[] = [
					'label' => (string)$entry['label'],
					'value' => (string)($entry['value'] ?? ''),
				];
			}
		}
		return $clean === [] ? null : json_encode($clean);
	}
}
