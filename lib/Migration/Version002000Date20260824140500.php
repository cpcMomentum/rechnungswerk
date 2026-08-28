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
 * Beitragslaeufe und zugehoerige Tarifregeln.
 *
 * Ein Beitragslauf friert die Konfiguration eines Beitragsjahres ein.
 *
 * Beispiele:
 *
 * fee_run:
 *   Jahr 2026
 *   Vereinsgruppe LHReV
 *
 * fee_rule:
 *   group / 20NY / fixed / 2000 Cent
 *   group / 50nY / fixed / 5000 Cent
 *   membership_type / Vollmitglied / percent / 10000 bp
 *   membership_type / Ehrenmitglied / percent / 5000 bp
 */
class Version002000Date20260824140500 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.20.0 (Beitragslaeufe und Beitragsregeln)';
	}

	public function description(): string {
		return 'Create membership fee runs and membership fee rules.';
	}

	#[\Override]
	public function changeSchema(
		IOutput $output,
		Closure $schemaClosure,
		array $options
	): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		$this->createFeeRunTable($schema);
		$this->createFeeRuleTable($schema);

		return $schema;
	}

	private function createFeeRunTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_fee_run')) {
			return;
		}

		$table = $schema->createTable('rechnungswerk_fee_run');

		$table->addColumn('id', Types::BIGINT, [
			'autoincrement' => true,
			'notnull' => true,
			'length' => 20,
		]);

		/*
		 * Benutzer, unter dessen RechnungsWerk-Kontext die
		 * spaeteren Rechnungen erzeugt werden.
		 */
		$table->addColumn('owner_user_id', Types::STRING, [
			'notnull' => true,
			'length' => 64,
		]);

		$table->addColumn('year', Types::INTEGER, [
			'notnull' => true,
		]);

		/*
		 * Grundgesamtheit der Mitglieder.
		 * Bei uns aktuell: LHReV
		 */
		$table->addColumn('member_group', Types::STRING, [
			'notnull' => true,
			'length' => 64,
		]);

		$table->addColumn('currency', Types::STRING, [
			'notnull' => true,
			'length' => 3,
			'default' => 'EUR',
		]);

		$table->addColumn('invoice_text', Types::STRING, [
			'notnull' => true,
			'length' => 255,
		]);

		$table->addColumn('payment_term_days', Types::INTEGER, [
			'notnull' => true,
			'default' => 14,
		]);

		$table->addColumn('issue_date', Types::DATE, [
			'notnull' => false,
			'default' => null,
		]);

		$table->addColumn('due_date', Types::DATE, [
			'notnull' => false,
			'default' => null,
		]);

		/*
		 * Umsatzsteuersatz in Basispunkten.
		 * 0 = 0 %
		 * 700 = 7 %
		 * 1900 = 19 %
		 */
		$table->addColumn('tax_rate_bp', Types::INTEGER, [
			'notnull' => true,
			'default' => 0,
		]);

		/*
		 * draft      = Konfiguration darf geaendert werden
		 * processing = Rechnungslauf laeuft
		 * completed  = abgeschlossen und gesperrt
		 */
		$table->addColumn('status', Types::STRING, [
			'notnull' => true,
			'length' => 20,
			'default' => 'draft',
		]);

		$table->addColumn('created_by_user_id', Types::STRING, [
			'notnull' => true,
			'length' => 64,
		]);

		$table->addColumn('created_at', Types::DATETIME, [
			'notnull' => true,
		]);

		$table->addColumn('updated_at', Types::DATETIME, [
			'notnull' => true,
		]);

		$table->addColumn('completed_at', Types::DATETIME, [
			'notnull' => false,
			'default' => null,
		]);

		$table->setPrimaryKey(['id']);

		/*
		 * Pro Jahr und Vereinsgruppe genau eine Tarifkonfiguration.
		 */
		$table->addUniqueIndex(
			['year', 'member_group'],
			'rw_fee_run_year_group'
		);

		$table->addIndex(
			['status'],
			'rw_fee_run_status'
		);

		$table->addIndex(
			['year'],
			'rw_fee_run_year'
		);
	}

	private function createFeeRuleTable(ISchemaWrapper $schema): void {
		if ($schema->hasTable('rechnungswerk_fee_rule')) {
			return;
		}

		$table = $schema->createTable('rechnungswerk_fee_rule');

		$table->addColumn('id', Types::BIGINT, [
			'autoincrement' => true,
			'notnull' => true,
			'length' => 20,
		]);

		$table->addColumn('run_id', Types::BIGINT, [
			'notnull' => true,
			'length' => 20,
		]);

		/*
		 * group
		 * membership_type
		 */
		$table->addColumn('rule_type', Types::STRING, [
			'notnull' => true,
			'length' => 32,
		]);

		/*
		 * Beispiele:
		 * 20NY
		 * 50nY
		 * Vollmitglied
		 * Ehrenmitglied
		 */
		$table->addColumn('rule_key', Types::STRING, [
			'notnull' => true,
			'length' => 128,
		]);

		/*
		 * fixed
		 * percent
		 */
		$table->addColumn('calculation_type', Types::STRING, [
			'notnull' => true,
			'length' => 16,
		]);

		/*
		 * Festbetrag in Cent.
		 *
		 * Beispiel:
		 * 20,00 EUR = 2000
		 */
		$table->addColumn('amount_cents', Types::BIGINT, [
			'notnull' => false,
			'default' => null,
		]);

		/*
		 * Prozentsatz in Basispunkten.
		 *
		 * 100 % = 10000
		 *  75 % =  7500
		 *  50 % =  5000
		 */
		$table->addColumn('percent_bp', Types::INTEGER, [
			'notnull' => false,
			'default' => null,
		]);

		$table->addColumn('sort_order', Types::INTEGER, [
			'notnull' => true,
			'default' => 0,
		]);

		$table->addColumn('created_at', Types::DATETIME, [
			'notnull' => true,
		]);

		$table->addColumn('updated_at', Types::DATETIME, [
			'notnull' => true,
		]);

		$table->setPrimaryKey(['id']);

		$table->addIndex(
			['run_id'],
			'rw_fee_rule_run'
		);

		$table->addIndex(
			['run_id', 'sort_order'],
			'rw_fee_rule_order'
		);

		/*
		 * Beispiel:
		 * Ein Beitragslauf kann nur eine Regel
		 * "membership_type / Ehrenmitglied" besitzen.
		 */
		$table->addUniqueIndex(
			['run_id', 'rule_type', 'rule_key'],
			'rw_fee_rule_unique'
		);
	}
}