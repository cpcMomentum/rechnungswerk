<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Rechnungswerk\Service;

use OCA\Rechnungswerk\AppInfo\Application;
use OCA\Rechnungswerk\Exception\InvalidTokenException;
use OCA\Rechnungswerk\Exception\WerkPlusApiException;
use OCP\App\IAppManager;
use OCP\AppFramework\Utility\ITimeFactory;
use OCP\IAppConfig;
use Psr\Log\LoggerInterface;

/**
 * Einzige Stelle fuer Lizenzstand und Feature-Gates (entitlement-v1).
 */
class EntitlementService {

	/** RechnungsWerk-Flags aus der Registry `flags.md` des Backends. */
	public const FLAGS = [
		'tenants', 'inbound', 'datev_service', 'api_keys',
		'girocode', 'sepa_export', 'ai_extract', 'kontingent',
	];
	public const EMPLOYEE_BUCKETS = ['1-5', '6-20', '21-50', '51-200', '200+'];
	public const DEFAULT_BUCKET = '1-5';

	public const STATE_NONE = 'none';
	public const STATE_INVALID = 'invalid';

	/** Eigener Code: Der Server antwortete, aber das Token bestand die lokale Pruefung nicht. */
	public const TOKEN_REJECTED = 'TOKEN_REJECTED';

	private const RENEW_AFTER = 7 * 86400;
	private const RENEW_BEFORE_EXPIRY = 7 * 86400;
	private const RETRY_AFTER = 6 * 3600;
	/** Nach diesen Codes hilft sofortiges Wiederholen nicht; einmal taeglich, damit eine Verlaengerung von selbst greift. */
	private const SLOW_RETRY = ['REQUEST_INVALID', 'KEY_UNKNOWN', 'KEY_REVOKED', 'KEY_EXPIRED', 'INSTANCE_LIMIT_REACHED'];
	private const SLOW_RETRY_AFTER = 86400;
	/** Nach diesen Codes faellt die Instanz auf Free, das Token wird verworfen. */
	private const DROP_TOKEN = ['KEY_REVOKED', 'KEY_EXPIRED'];

	private const K_UUID = 'werkplus_instance_uuid';
	private const K_KEY = 'werkplus_key';
	private const K_TOKEN = 'werkplus_token';
	private const K_BUCKET = 'werkplus_employee_bucket';
	private const K_LAST_CHECK = 'werkplus_last_check_at';
	private const K_LAST_ATTEMPT = 'werkplus_last_attempt_at';
	private const K_LAST_ERROR = 'werkplus_last_error';

	/** @var array{token: ?EntitlementToken, state: string}|null */
	private ?array $current = null;

	public function __construct(
		private readonly IAppConfig $appConfig,
		private readonly ITimeFactory $timeFactory,
		private readonly WerkPlusClient $client,
		private readonly EntitlementTokenVerifier $verifier,
		private readonly IAppManager $appManager,
		private readonly LoggerInterface $logger,
	) {
	}

	public function hasFeature(string $flag): bool {
		if (!in_array($flag, self::FLAGS, true)) {
			throw new \InvalidArgumentException('Unbekanntes Flag: ' . $flag);
		}
		$token = $this->activeToken();
		return $token !== null && in_array($flag, $token->features, true);
	}

	public function tier(): string {
		return $this->activeToken()?->tier ?? 'free';
	}

	public function state(): string {
		return $this->current()['state'];
	}

	public function getInstanceUuid(): string {
		$uuid = $this->get(self::K_UUID);
		if ($uuid === '') {
			$uuid = $this->newUuid();
			$this->appConfig->setValueString(Application::APP_ID, self::K_UUID, $uuid);
		}
		return $uuid;
	}

	/**
	 * Ein leerer Schluessel nimmt den gespeicherten.
	 *
	 * @throws WerkPlusApiException
	 * @throws \InvalidArgumentException
	 */
	public function activate(#[\SensitiveParameter] string $key, string $employeeBucket): void {
		$key = self::normalizeKey($key);
		if ($key === '') {
			$key = $this->get(self::K_KEY);
		}
		if ($key === '' || strlen($key) > 128 || preg_match('/^[A-Za-z0-9_]+$/', $key) !== 1) {
			throw new \InvalidArgumentException('key');
		}
		if (!in_array($employeeBucket, self::EMPLOYEE_BUCKETS, true)) {
			throw new \InvalidArgumentException('employeeBucket');
		}
		$this->fetchToken($key, $employeeBucket);
		$this->appConfig->setValueString(Application::APP_ID, self::K_KEY, $key, sensitive: true);
		$this->appConfig->setValueString(Application::APP_ID, self::K_BUCKET, $employeeBucket);
	}

	/**
	 * @throws WerkPlusApiException
	 * @throws \InvalidArgumentException wenn kein Schluessel hinterlegt ist
	 */
	public function refresh(): void {
		$key = $this->get(self::K_KEY);
		if ($key === '') {
			throw new \InvalidArgumentException('key');
		}
		$this->fetchToken($key, $this->employeeBucket());
	}

	/** Fuer den Hintergrundjob: erneuert nur, wenn faellig, und wirft nie. */
	public function refreshIfDue(): void {
		if (!$this->isRefreshDue()) {
			return;
		}
		try {
			$this->refresh();
		} catch (\Throwable $e) {
			$this->logger->info('RechnungsWerk: WerkPlus-Lizenz nicht erneuert', ['exception' => $e]);
		}
	}

	public function isRefreshDue(): bool {
		if ($this->get(self::K_KEY) === '') {
			return false;
		}
		$now = $this->now();
		if ($now - (int)$this->get(self::K_LAST_ATTEMPT) < self::RETRY_AFTER) {
			return false;
		}
		$lastError = $this->lastError();
		if ($lastError !== null
			&& in_array($lastError['code'], self::SLOW_RETRY, true)
			&& $now - $lastError['at'] < self::SLOW_RETRY_AFTER) {
			return false;
		}
		$token = $this->current()['token'];
		if ($token === null) {
			return true;
		}
		return $now - $token->issuedAt >= self::RENEW_AFTER
			|| $token->expiresAt - $now < self::RENEW_BEFORE_EXPIRY;
	}

	public function removeKey(): void {
		foreach ([self::K_KEY, self::K_TOKEN, self::K_LAST_CHECK, self::K_LAST_ATTEMPT, self::K_LAST_ERROR] as $configKey) {
			$this->appConfig->deleteKey(Application::APP_ID, $configKey);
		}
		$this->current = null;
	}

	/**
	 * @return array<string, mixed>
	 */
	public function getStatus(): array {
		$current = $this->current();
		$token = $current['token'];
		$active = $this->activeToken();
		$key = $this->get(self::K_KEY);
		$lastCheck = (int)$this->get(self::K_LAST_CHECK);
		return [
			'instanceUuid' => $this->getInstanceUuid(),
			'keySet' => $key !== '',
			'keyHint' => $key !== '' ? '…' . substr($key, -4) : null,
			'employeeBucket' => $this->employeeBucket(),
			'state' => $current['state'],
			'tier' => $this->tier(),
			'features' => $active?->features ?? [],
			'expiresAt' => $token !== null ? $this->iso($token->expiresAt) : null,
			'graceUntil' => $token !== null ? $this->iso($token->graceUntil) : null,
			'lastCheckAt' => $lastCheck > 0 ? $this->iso($lastCheck) : null,
			// Ohne hinterlegten Schluessel waere ein alter Fehlversuch nur noch Rauschen.
			'lastError' => $key !== '' ? $this->lastError() : null,
		];
	}

	/**
	 * @return array{code: string, serverMessage: string, at: int}|null
	 */
	public function lastError(): ?array {
		$data = json_decode($this->get(self::K_LAST_ERROR), true);
		if (!is_array($data) || !is_string($data['code'] ?? null)) {
			return null;
		}
		return [
			'code' => $data['code'],
			'serverMessage' => is_string($data['serverMessage'] ?? null) ? $data['serverMessage'] : '',
			'at' => is_int($data['at'] ?? null) ? $data['at'] : 0,
		];
	}

	/**
	 * @throws WerkPlusApiException
	 */
	private function fetchToken(#[\SensitiveParameter] string $key, string $employeeBucket): void {
		$now = $this->now();
		$this->appConfig->setValueString(Application::APP_ID, self::K_LAST_ATTEMPT, (string)$now);
		try {
			$response = $this->client->validate(
				$key,
				strtolower($this->getInstanceUuid()),
				[Application::APP_ID => $this->appManager->getAppVersion(Application::APP_ID)],
				$employeeBucket,
			);
			try {
				$this->verifier->verify($response['token'], $this->getInstanceUuid(), $now);
			} catch (InvalidTokenException $e) {
				$this->logger->warning('RechnungsWerk: WerkPlus-Token abgelehnt', ['exception' => $e]);
				throw new WerkPlusApiException(self::TOKEN_REJECTED, '', $e);
			}
		} catch (WerkPlusApiException $e) {
			$this->recordError($e, $now, $key === $this->get(self::K_KEY));
			throw $e;
		}
		$this->appConfig->setValueString(Application::APP_ID, self::K_TOKEN, $response['token'], sensitive: true);
		$this->appConfig->setValueString(Application::APP_ID, self::K_LAST_CHECK, (string)$now);
		$this->appConfig->deleteKey(Application::APP_ID, self::K_LAST_ERROR);
		$this->current = null;
	}

	private function recordError(WerkPlusApiException $e, int $now, bool $isStoredKey): void {
		// Fehler eines NEUEN Schluessels nur an den Aufrufer, sonst bremst er die Erneuerung des gespeicherten.
		if (!$isStoredKey) {
			return;
		}
		$this->appConfig->setValueString(Application::APP_ID, self::K_LAST_ERROR, json_encode([
			'code' => $e->getErrorCode(),
			'serverMessage' => $e->getServerMessage(),
			'at' => $now,
		], JSON_THROW_ON_ERROR));
		if (in_array($e->getErrorCode(), self::DROP_TOKEN, true)) {
			$this->appConfig->deleteKey(Application::APP_ID, self::K_TOKEN);
		}
		$this->current = null;
	}

	private function activeToken(): ?EntitlementToken {
		$current = $this->current();
		return in_array($current['state'], [EntitlementToken::STATE_VALID, EntitlementToken::STATE_GRACE], true)
			? $current['token']
			: null;
	}

	/**
	 * @return array{token: ?EntitlementToken, state: string}
	 */
	private function current(): array {
		if ($this->current !== null) {
			return $this->current;
		}
		$jwt = $this->get(self::K_TOKEN);
		if ($jwt === '') {
			return $this->current = ['token' => null, 'state' => self::STATE_NONE];
		}
		$now = $this->now();
		try {
			$token = $this->verifier->verify($jwt, $this->get(self::K_UUID), $now);
		} catch (InvalidTokenException $e) {
			$this->logger->debug('RechnungsWerk: gespeichertes WerkPlus-Token ungueltig', ['exception' => $e]);
			return $this->current = ['token' => null, 'state' => self::STATE_INVALID];
		}
		return $this->current = ['token' => $token, 'state' => $token->stateAt($now)];
	}

	// Wie der Server: Leerraum und Bindestriche weg, Koerper und Pruefsumme gross, Praefix klein.
	private static function normalizeKey(#[\SensitiveParameter] string $key): string {
		$key = (string)preg_replace('/[\s-]+/u', '', $key);
		if (strncasecmp($key, 'wp_', 3) === 0) {
			return 'wp_' . strtoupper(substr($key, 3));
		}
		return strtoupper($key);
	}

	private function employeeBucket(): string {
		$bucket = $this->get(self::K_BUCKET);
		return in_array($bucket, self::EMPLOYEE_BUCKETS, true) ? $bucket : self::DEFAULT_BUCKET;
	}

	private function get(string $configKey): string {
		return $this->appConfig->getValueString(Application::APP_ID, $configKey);
	}

	private function now(): int {
		return $this->timeFactory->getTime();
	}

	private function iso(int $timestamp): string {
		return gmdate('Y-m-d\TH:i:s\Z', $timestamp);
	}

	private function newUuid(): string {
		$bytes = random_bytes(16);
		$bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
		$bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
		return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($bytes), 4));
	}
}
