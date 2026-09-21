<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

/**
 * Zugangsdaten eines Mailkontos (SMTP oder IMAP).
 *
 * Warum ein Objekt und kein Array: Wirft eine Funktion eine Ausnahme, traegt
 * PHPs Stacktrace zu jedem Aufruf dessen Argumente. Nextclouds
 * `ExceptionSerializer::encodeArg()` schreibt ein Array vollstaendig ins Log,
 * bei einem Objekt nimmt es `get_object_vars()` — und das liefert von aussen
 * nur OEFFENTLICHE Eigenschaften. Die Felder hier sind deshalb privat: im Log
 * steht dann nur noch der Klassenname.
 *
 * Vorfall vom 21.09.2026: Ein Tippfehler in der Absenderadresse liess den
 * SMTP-Versand scheitern. Die Ausnahme wanderte samt Argumenten ins
 * `nextcloud.log` der Produktivinstanz — mit dem SMTP-Passwort im Klartext.
 *
 * Die Felder sind bewusst nicht ueber `__get`, `jsonSerialize` oder
 * `__toString` erreichbar: Was nicht herauskommt, kann nicht verrutschen.
 */
final class MailAccount {

	public function __construct(
		private readonly string $host,
		private readonly int $port,
		private readonly string $security,
		private readonly string $user,
		private readonly string $password,
	) {
	}

	public function host(): string {
		return $this->host;
	}

	public function port(): int {
		return $this->port;
	}

	/** 'starttls', 'ssl' oder 'none'. */
	public function security(): string {
		return $this->security;
	}

	public function user(): string {
		return $this->user;
	}

	public function password(): string {
		return $this->password;
	}

	/**
	 * Sicherheitsnetz fuer `var_dump()` und alles, was darauf aufbaut: auch dort
	 * soll das Passwort nicht auftauchen.
	 */
	public function __debugInfo(): array {
		return ['host' => $this->host, 'port' => $this->port, 'user' => $this->user];
	}
}
