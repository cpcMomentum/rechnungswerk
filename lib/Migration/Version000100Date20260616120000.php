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

class Version000100Date20260616120000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.1.0 (Rechnungswerk MVP)';
	}

	public function description(): string {
		return 'Create initial schema: invoice, invoice_item, product, settings.';
	}

	#[\Override]
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$this->createInvoiceTable($schema);
		$this->createInvoiceItemTable($schema);
		$this->createProductTable($schema);
		$this->createSettingsTable($schema);

		return $schema;
	}

	private function createInvoiceTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_invoice')) {
			return;
		}
		$table = $schema->createTable('rechnungswerk_invoice');
		$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20]);
		$table->addColumn('owner_user_id', Types::STRING, ['notnull' => true, 'length' => 64]);
		$table->addColumn('number', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('status', Types::STRING, ['notnull' => true, 'length' => 20, 'default' => 'draft']);
		$table->addColumn('invoice_type', Types::STRING, ['notnull' => true, 'length' => 20, 'default' => 'invoice']);
		$table->addColumn('recipient_name', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('recipient_contact_id', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('recipient_address', Types::TEXT, ['notnull' => false]);
		$table->addColumn('recipient_postal_code', Types::STRING, ['notnull' => false, 'length' => 16]);
		$table->addColumn('recipient_city', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('recipient_country', Types::STRING, ['notnull' => false, 'length' => 2, 'default' => 'DE']);
		$table->addColumn('recipient_email', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('recipient_vat_id', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('issue_date', Types::DATE, ['notnull' => false]);
		$table->addColumn('performance_date', Types::DATE, ['notnull' => false]);
		$table->addColumn('performance_period_start', Types::DATE, ['notnull' => false]);
		$table->addColumn('performance_period_end', Types::DATE, ['notnull' => false]);
		$table->addColumn('reference_number', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('order_number', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('buyer_reference', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('related_invoice_id', Types::BIGINT, ['notnull' => false, 'length' => 20]);
		$table->addColumn('subtotal_cents', Types::BIGINT, ['notnull' => true, 'default' => 0]);
		$table->addColumn('total_cents', Types::BIGINT, ['notnull' => true, 'default' => 0]);
		$table->addColumn('tax_breakdown', Types::TEXT, ['notnull' => false]);
		$table->addColumn('special_tax_case', Types::STRING, ['notnull' => false, 'length' => 40]);
		$table->addColumn('greeting', Types::TEXT, ['notnull' => false]);
		$table->addColumn('extra_text', Types::TEXT, ['notnull' => false]);
		$table->addColumn('custom_fields', Types::TEXT, ['notnull' => false]);
		$table->addColumn('committed_at', Types::DATETIME, ['notnull' => false]);
		$table->addColumn('created_at', Types::DATETIME, ['notnull' => true]);
		$table->addColumn('updated_at', Types::DATETIME, ['notnull' => true]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['owner_user_id'], 'rw_invoice_owner');
		$table->addIndex(['owner_user_id', 'status'], 'rw_invoice_owner_status');
		$table->addIndex(['related_invoice_id'], 'rw_invoice_related');
		// DB-level guard: duplicate committed numbers are a GoBD violation;
		// NULL (drafts) is ignored by UNIQUE indexes in all supported engines.
		$table->addUniqueIndex(['number'], 'rw_invoice_number_unique');
	}

	private function createInvoiceItemTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_invoice_item')) {
			return;
		}
		$table = $schema->createTable('rechnungswerk_invoice_item');
		$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20]);
		$table->addColumn('invoice_id', Types::BIGINT, ['notnull' => true, 'length' => 20]);
		$table->addColumn('product_id', Types::BIGINT, ['notnull' => false, 'length' => 20]);
		$table->addColumn('name', Types::STRING, ['notnull' => true, 'length' => 255]);
		$table->addColumn('description', Types::TEXT, ['notnull' => false]);
		$table->addColumn('quantity', Types::DECIMAL, ['notnull' => true, 'precision' => 12, 'scale' => 3, 'default' => 0]);
		$table->addColumn('unit_code', Types::STRING, ['notnull' => true, 'length' => 8, 'default' => 'C62']);
		$table->addColumn('unit_price_cents', Types::BIGINT, ['notnull' => true, 'default' => 0]);
		$table->addColumn('tax_rate_bp', Types::INTEGER, ['notnull' => true, 'default' => 0]);
		$table->addColumn('line_total_cents', Types::BIGINT, ['notnull' => true, 'default' => 0]);
		$table->addColumn('sort_order', Types::INTEGER, ['notnull' => true, 'default' => 0]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['invoice_id'], 'rw_item_invoice');
		$table->addIndex(['invoice_id', 'sort_order'], 'rw_item_order');
	}

	private function createProductTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_product')) {
			return;
		}
		$table = $schema->createTable('rechnungswerk_product');
		$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20]);
		$table->addColumn('owner_user_id', Types::STRING, ['notnull' => true, 'length' => 64]);
		$table->addColumn('name', Types::STRING, ['notnull' => true, 'length' => 255]);
		$table->addColumn('description', Types::TEXT, ['notnull' => false]);
		$table->addColumn('default_unit_code', Types::STRING, ['notnull' => true, 'length' => 8, 'default' => 'C62']);
		$table->addColumn('default_price_cents', Types::BIGINT, ['notnull' => true, 'default' => 0]);
		$table->addColumn('default_tax_rate_bp', Types::INTEGER, ['notnull' => true, 'default' => 1900]);
		$table->addColumn('created_at', Types::DATETIME, ['notnull' => true]);
		$table->addColumn('updated_at', Types::DATETIME, ['notnull' => true]);
		$table->setPrimaryKey(['id']);
		$table->addIndex(['owner_user_id'], 'rw_product_owner');
	}

	private function createSettingsTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_settings')) {
			return;
		}
		$table = $schema->createTable('rechnungswerk_settings');
		$table->addColumn('id', Types::BIGINT, ['autoincrement' => true, 'notnull' => true, 'length' => 20]);
		$table->addColumn('owner_user_id', Types::STRING, ['notnull' => true, 'length' => 64]);
		$table->addColumn('company_name', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('company_address', Types::TEXT, ['notnull' => false]);
		$table->addColumn('vat_id', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('tax_number', Types::STRING, ['notnull' => false, 'length' => 64]);
		$table->addColumn('iban', Types::STRING, ['notnull' => false, 'length' => 34]);
		$table->addColumn('bic', Types::STRING, ['notnull' => false, 'length' => 16]);
		$table->addColumn('bank_name', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('logo_file_id', Types::BIGINT, ['notnull' => false, 'length' => 20]);
		$table->addColumn('accent_color', Types::STRING, ['notnull' => false, 'length' => 9]);
		$table->addColumn('number_format', Types::STRING, ['notnull' => true, 'length' => 64, 'default' => 'RE-{YYYY}-{####}']);
		$table->addColumn('number_counter', Types::INTEGER, ['notnull' => true, 'default' => 0]);
		$table->addColumn('number_counter_year', Types::INTEGER, ['notnull' => false]);
		$table->addColumn('small_business', Types::SMALLINT, ['notnull' => true, 'default' => 0]);
		$table->addColumn('default_tax_rate_bp', Types::INTEGER, ['notnull' => true, 'default' => 1900]);
		$table->addColumn('datev_upload_mail', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('smtp_from_name', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('smtp_from_email', Types::STRING, ['notnull' => false, 'length' => 255]);
		$table->addColumn('greeting_default', Types::TEXT, ['notnull' => false]);
		$table->addColumn('intro_default', Types::TEXT, ['notnull' => false]);
		$table->addColumn('closing_default', Types::TEXT, ['notnull' => false]);
		$table->addColumn('created_at', Types::DATETIME, ['notnull' => true]);
		$table->addColumn('updated_at', Types::DATETIME, ['notnull' => true]);
		$table->setPrimaryKey(['id']);
		$table->addUniqueIndex(['owner_user_id'], 'rw_settings_owner');
	}
}
