<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Exception;

/** Der Code haengt an der Wurfstelle; fehlt er, setzt der Controller die Vorgabe der Klasse ein. */
abstract class CodedException extends \RuntimeException {
	/** @var ?string einer der Werte aus ErrorCode */
	private ?string $errorCode = null;

	public function withErrorCode(string $errorCode): static {
		$this->errorCode = $errorCode;
		return $this;
	}

	public function getErrorCode(): ?string {
		return $this->errorCode;
	}
}
