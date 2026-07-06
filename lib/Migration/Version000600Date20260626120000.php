<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Migration;

use Closure;
use OCP\DB\ISchemaWrapper;
use OCP\DB\Types;
use OCP\Migration\IOutput;
use OCP\Migration\SimpleMigrationStep;

/**
 * Kundenverwaltung (#60): shared company customer table + invoice.customer_id reference.
 */
class Version000600Date20260626120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.6.0 (Kundenverwaltung)';
	}

	public function description(): string {
		return 'Create rechnungswerk_customer table and add invoice.customer_id reference.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$this->createCustomerTable($schema);
		$this->addInvoiceCustomerId($schema);

		return $schema;
	}

	private function createCustomerTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_customer')) {
			return;
		}
		$table = $schema->createTable('rechnungswerk_customer');
		$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20]);
		$table->addColumn('owner_user_id', Types::STRING, ['notnull' => true, 'length' => 64]);
		$table->addColumn('customer_number', Types::STRING, ['notnull' => true, 'length' => 64]);
		$table->addColumn('name', Types::STRING, ['notnull' => true, 'length' => 255]);
		$table->addColumn('vat_id', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('address', Types::TEXT, ['notnull' => false]);
		$table->addColumn('postal_code', Types::STRING, ['notnull' => false, 'length' => 16]);
		$table->addColumn('city', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('country', Types::STRING, ['notnull' => false, 'length' => 2, 'default' => 'DE']);
		$table->addColumn('contact_person', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('phone', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('email', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('bank_account_holder', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('iban', Types::STRING, ['notnull' => false, 'length' => 34]);
		$table->addColumn('bic', Types::STRING, ['notnull' => false, 'length' => 16]);
		$table->addColumn('bank_name', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('default_payment_term_days', Types::INTEGER, ['notnull' => false]);
		$table->addColumn('default_tax_rate_bp', Types::INTEGER, ['notnull' => false]);
		$table->addColumn('note', Types::TEXT, ['notnull' => false]);
		$table->addColumn('created_at', Types::DATETIME, ['notnull' => true]);
		$table->addColumn('updated_at', Types::DATETIME, ['notnull' => true]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['owner_user_id'], 'rw_customer_owner');
		// Company-wide unique customer numbers (manual entry, mirrors DATEV debitor no.).
		$table->addUniqueIndex(['customer_number'], 'rw_customer_number_unique');
	}

	private function addInvoiceCustomerId(ISchemaWrapper $schema): void {
		if (!$schema->hasTable('rechnungswerk_invoice')) {
			return;
		}
		$table = $schema->getTable('rechnungswerk_invoice');
		if (!$table->hasColumn('customer_id')) {
			// Soft reference; the recipient_* snapshot on the invoice stays authoritative (GoBD).
			$table->addColumn('customer_id', Types::BIGINT, ['notnull' => false, 'length' => 20]);
		}
		if (!$table->hasIndex('rw_invoice_customer')) {
			$table->addIndex(['customer_id'], 'rw_invoice_customer');
		}
	}
}
