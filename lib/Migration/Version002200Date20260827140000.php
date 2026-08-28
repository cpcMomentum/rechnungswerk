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
 * Persistenter Versandstatus fuer Beitragsrechnungen.
 *
 * Die Tabelle ist bewusst von rechnungswerk_invoice getrennt:
 * Der normale Rechnungsversand bleibt unveraendert und die Vereinsfunktion
 * kann unabhaengig weiterentwickelt oder entfernt werden.
 */
class Version002200Date20260827140000 extends SimpleMigrationStep {

	public function name(): string {
		return 'Schema v0.22.0 (Versandstatus Beitragsrechnungen)';
	}

	public function description(): string {
		return 'Create persistent mail delivery state for membership contribution invoices.';
	}

	#[\Override]
	public function changeSchema(
		IOutput $output,
		Closure $schemaClosure,
		array $options
	): ?ISchemaWrapper {
		/** @var ISchemaWrapper $schema */
		$schema = $schemaClosure();

		if ($schema->hasTable('rechnungswerk_fee_mail')) {
			return null;
		}

		$table = $schema->createTable('rechnungswerk_fee_mail');

		$table->addColumn('id', Types::BIGINT, [
			'autoincrement' => true,
			'notnull' => true,
			'length' => 20,
		]);

		/*
		 * Genau eine Versandhistorie pro Beitragsrechnung.
		 */
		$table->addColumn('invoice_id', Types::BIGINT, [
			'notnull' => true,
			'length' => 20,
		]);

		/*
		 * Tatsaechlich beim Versand verwendete Adresse.
		 *
		 * Sie stammt spaeter aus der festgeschriebenen Rechnung und nicht
		 * erneut aus dem aktuellen Mitgliedsprofil.
		 */
		$table->addColumn('recipient_email', Types::STRING, [
			'notnull' => true,
			'length' => 255,
		]);

		/*
		 * SHA-256 des eingefrorenen PDF-Belegs.
		 *
		 * Damit ist nachvollziehbar, welcher unveraenderliche Beleg
		 * tatsaechlich versendet wurde.
		 */
		$table->addColumn('document_sha256', Types::STRING, [
			'notnull' => true,
			'length' => 64,
		]);

		/*
		 * sending = Versand wurde begonnen; Ausgang kann bei Prozessabbruch
		 *           unklar sein und darf deshalb nicht automatisch wiederholt
		 *           werden.
		 * sent    = Versand erfolgreich abgeschlossen.
		 * failed  = Versand ist eindeutig fehlgeschlagen.
		 */
		$table->addColumn('status', Types::STRING, [
			'notnull' => true,
			'length' => 16,
		]);

		$table->addColumn('attempt_count', Types::INTEGER, [
			'notnull' => true,
			'default' => 0,
		]);

		/*
		 * Beim eigenen SMTP liefert PHPMailer eine Message-ID.
		 * Beim Nextcloud-Systemmailer kann sie null bleiben.
		 */
		$table->addColumn('message_id', Types::STRING, [
			'notnull' => false,
			'length' => 255,
			'default' => null,
		]);

		$table->addColumn('started_at', Types::DATETIME, [
			'notnull' => false,
			'default' => null,
		]);

		$table->addColumn('sent_at', Types::DATETIME, [
			'notnull' => false,
			'default' => null,
		]);

		/*
		 * Nur der letzte eindeutig bekannte Fehler.
		 * Keine SMTP-Zugangsdaten oder andere Secrets speichern.
		 */
		$table->addColumn('last_error', Types::TEXT, [
			'notnull' => false,
			'default' => null,
		]);

		$table->addColumn('created_at', Types::DATETIME, [
			'notnull' => true,
		]);

		$table->addColumn('updated_at', Types::DATETIME, [
			'notnull' => true,
		]);

		$table->setPrimaryKey(['id']);

		/*
		 * Der wichtigste Schutz gegen Doppelversand:
		 * Eine Rechnung kann nur einen Versandstatus besitzen.
		 */
		$table->addUniqueIndex(
			['invoice_id'],
			'rw_fee_mail_invoice'
		);

		$table->addIndex(
			['status'],
			'rw_fee_mail_status'
		);

		return $schema;
	}
}