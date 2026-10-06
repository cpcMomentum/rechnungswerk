<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\Exception\WerkPlusApiException;
use OCP\Http\Client\IClientService;

class WerkPlusClient {

	public const BASE_URL = 'https://api.werkwolke.de';

	/** Fehlercodes aus entitlement-v1. */
	public const CONTRACT_CODES = [
		'REQUEST_INVALID', 'KEY_UNKNOWN', 'KEY_REVOKED', 'KEY_EXPIRED',
		'INSTANCE_LIMIT_REACHED', 'TRIAL_ALREADY_USED', 'TRIAL_UNAVAILABLE',
		'RATE_LIMITED', 'SERVER_ERROR',
	];
	/** Eigene Codes der App, verhalten sich wie SERVER_ERROR. */
	public const UNREACHABLE = 'UNREACHABLE';
	public const INVALID_RESPONSE = 'INVALID_RESPONSE';

	private const TIMEOUT_SECONDS = 15;

	public function __construct(
		private readonly IClientService $clientService,
	) {
	}

	/**
	 * @param array<string, string> $appVersions
	 * @return array{token: string, expiresAt: string, graceUntil: string}
	 * @throws WerkPlusApiException
	 */
	public function validate(#[\SensitiveParameter] string $key, string $instanceUuid, array $appVersions, string $employeeBucket): array {
		$payload = [
			'key' => $key,
			'instanceUuid' => $instanceUuid,
			'appVersions' => $appVersions,
			'employeeBucket' => $employeeBucket,
		];
		try {
			$response = $this->clientService->newClient()->post(self::BASE_URL . '/validate', [
				'json' => $payload,
				'headers' => ['Accept' => 'application/json'],
				'timeout' => self::TIMEOUT_SECONDS,
				'http_errors' => false,
			]);
		} catch (\Throwable $e) {
			throw new WerkPlusApiException(self::UNREACHABLE, '', $e);
		}

		$body = json_decode((string)$response->getBody(), true);
		if ($response->getStatusCode() !== 200) {
			throw $this->errorFrom($body);
		}
		if (!is_array($body)
			|| !is_string($body['token'] ?? null)
			|| !is_string($body['expiresAt'] ?? null)
			|| !is_string($body['graceUntil'] ?? null)) {
			throw new WerkPlusApiException(self::INVALID_RESPONSE);
		}
		return [
			'token' => $body['token'],
			'expiresAt' => $body['expiresAt'],
			'graceUntil' => $body['graceUntil'],
		];
	}

	private function errorFrom(mixed $body): WerkPlusApiException {
		$error = is_array($body) && is_array($body['error'] ?? null) ? $body['error'] : [];
		$code = $error['code'] ?? null;
		$message = is_string($error['message'] ?? null) ? $error['message'] : '';
		if (!in_array($code, self::CONTRACT_CODES, true)) {
			// Unbekannte oder fehlende Codes wie einen Serverfehler behandeln: altes Token bleibt.
			$code = 'SERVER_ERROR';
		}
		return new WerkPlusApiException($code, $message);
	}
}
