<!--
	SPDX-FileCopyrightText: 2026 cpcMomentum
	SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="rw-werkplus">
		<p class="rw-hint">
			{{ t('rechnungswerk', 'Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.') }}
			{{ t('rechnungswerk', 'Der Schlüssel gilt für alle Werk-Apps dieser Nextcloud und muss nur in einer davon eingetragen werden.') }}
			<a v-if="links.features"
				class="rw-werkplus__link"
				:href="links.features"
				target="_blank"
				rel="noopener noreferrer">{{ t('rechnungswerk', 'Welche Funktionen WerkPlus bietet') }}</a>
		</p>

		<NcNoteCard v-if="loadError" type="error" :text="loadError" />

		<template v-if="status">
			<NcNoteCard v-if="status.storeTooNew" type="warning" :text="t('rechnungswerk', 'Eine andere Werk-App hat die Lizenz in einem neueren Format gespeichert. Bitte aktualisiere RechnungsWerk.')" />
			<NcNoteCard v-if="stateNote" :type="stateNote.type" :text="stateNote.text" />
			<NcNoteCard v-if="trialKey" type="success" class="rw-werkplus__trial-key">
				<p v-if="licenseActive">{{ t('rechnungswerk', 'Der Testzeitraum läuft. Das ist dein WerkPlus-Schlüssel:') }}</p>
				<p v-else>{{ t('rechnungswerk', 'Der Testzeitraum ist gestartet, die Lizenz konnte aber noch nicht geprüft werden. Mit „Jetzt prüfen“ versuchst du es erneut. Das ist dein WerkPlus-Schlüssel:') }}</p>
				<p><code>{{ trialKey }}</code></p>
				<p>{{ t('rechnungswerk', 'Bitte bewahre ihn sicher auf. Er ist hinterlegt, wird aber nur jetzt vollständig angezeigt.') }}</p>
			</NcNoteCard>
			<NcNoteCard v-if="actionInfo" type="info" :text="actionInfo" />
			<NcNoteCard v-if="actionError" type="error">
				<p>{{ actionError }}</p>
				<a v-if="actionErrorCode === 'TRIAL_UNAVAILABLE' && links.trial"
					class="rw-werkplus__link"
					:href="links.trial"
					target="_blank"
					rel="noopener noreferrer">{{ t('rechnungswerk', 'Testzeitraum auf werkwolke.de') }}</a>
			</NcNoteCard>
			<NcNoteCard v-else-if="status.lastError && !trialOver" type="warning" :text="status.lastError.message" />

			<dl v-if="status.keySet" class="rw-werkplus__facts">
				<dt>{{ t('rechnungswerk', 'Tarif') }}</dt>
				<dd>{{ tierLabel }}</dd>
				<template v-if="trialRunning && status.licenseValidUntil">
					<dt>{{ t('rechnungswerk', 'Testzeitraum läuft bis') }}</dt>
					<dd>{{ formatDate(status.licenseValidUntil) }} ({{ daysLeftLabel }})</dd>
				</template>
				<template v-else-if="!status.trial && status.licenseValidUntil && licenseActive">
					<template v-if="isPast(status.licenseValidUntil)">
						<dt>{{ t('rechnungswerk', 'Laufzeit') }}</dt>
						<dd>{{ t('rechnungswerk', 'abgelaufen, Karenz bis {date}', { date: status.graceUntil ? formatDate(status.graceUntil) : '' }) }}</dd>
					</template>
					<template v-else>
						<dt>{{ t('rechnungswerk', 'Laufzeit bis') }}</dt>
						<dd>{{ formatDate(status.licenseValidUntil) }}</dd>
					</template>
				</template>
				<template v-if="status.licensedEmployees">
					<dt>{{ t('rechnungswerk', 'Lizenzierte Mitarbeitende') }}</dt>
					<dd>{{ status.licensedEmployees }}</dd>
				</template>
				<dt>{{ t('rechnungswerk', 'Letzte erfolgreiche Prüfung') }}</dt>
				<dd>{{ status.lastCheckAt ? formatDateTime(status.lastCheckAt) : t('rechnungswerk', 'noch keine') }}</dd>
				<dt>{{ t('rechnungswerk', 'Schlüssel') }}</dt>
				<dd>{{ status.keyHint }}</dd>
			</dl>

			<p v-if="!status.canManage && !status.storeTooNew" class="rw-hint">
				{{ t('rechnungswerk', 'Den Schlüssel können nur Nextcloud-Admins eintragen oder entfernen, weil er für alle Werk-Apps dieser Nextcloud gilt.') }}
			</p>

			<label v-if="canEdit" class="rw-field"><span>{{ t('rechnungswerk', 'WerkPlus-Schlüssel') }}</span>
				<input v-model="keyInput"
					class="rw-input"
					type="text"
					autocomplete="off"
					spellcheck="false"
					:placeholder="status.keySet ? t('rechnungswerk', 'gespeichert, leer lassen') : 'wp_…'" /></label>

			<p v-if="showBuyHint" class="rw-hint">
				{{ t('rechnungswerk', 'Mit dem Kauf bekommst du einen eigenen Schlüssel. Trage ihn hier ein, er ersetzt den Testschlüssel.') }}
			</p>

			<div class="rw-werkplus__actions">
				<NcButton v-if="canEdit" variant="primary" :disabled="busy || (!keyInput.trim() && !status.keySet)" @click="onActivate">
					{{ status.keySet ? t('rechnungswerk', 'Speichern und prüfen') : t('rechnungswerk', 'Schlüssel prüfen und speichern') }}
				</NcButton>
				<NcButton v-if="canEdit && !status.keySet" :disabled="busy" @click="confirmTrial = true">
					{{ t('rechnungswerk', '30 Tage testen') }}
				</NcButton>
				<NcButton v-if="buyLabel && links.buy"
					:href="links.buy"
					target="_blank">
					{{ buyLabel }}
				</NcButton>
				<NcButton v-if="status.keySet && !status.storeTooNew" :disabled="busy" @click="onRefresh">
					{{ t('rechnungswerk', 'Jetzt prüfen') }}
				</NcButton>
				<NcButton v-if="canEdit && status.keySet" variant="tertiary" :disabled="busy" @click="confirmRemove = true">
					{{ t('rechnungswerk', 'Schlüssel entfernen') }}
				</NcButton>
			</div>

			<div class="rw-werkplus__privacy">
				<span class="rw-werkplus__label">{{ t('rechnungswerk', 'Was an WerkPlus übertragen wird') }}</span>
				<p class="rw-hint">{{ t('rechnungswerk', 'Eine aus dieser Nextcloud abgeleitete Kennung, die Versionen der aktivierten Werk-Apps und, sobald vorhanden, der Schlüssel. Nicht übertragen werden Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer- oder Datei-IDs.') }}</p>
				<p class="rw-hint">{{ t('rechnungswerk', 'Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.') }}</p>
				<p class="rw-hint">{{ t('rechnungswerk', 'Kennung dieser Nextcloud:') }} <code>{{ status.instanceUuid }}</code></p>
			</div>
		</template>

		<ConfirmDialog
			:open="confirmTrial"
			:name="t('rechnungswerk', 'WerkPlus 30 Tage testen')"
			:message="t('rechnungswerk', 'Der Testzeitraum läuft 30 Tage, braucht keine Zahlungsdaten, gilt für alle Werk-Apps dieser Nextcloud und ist je Nextcloud nur einmal möglich. Jetzt starten?')"
			:confirmLabel="t('rechnungswerk', 'Testzeitraum starten')"
			@close="confirmTrial = false"
			@confirm="onTrial" />

		<ConfirmDialog
			:open="confirmRemove"
			:name="t('rechnungswerk', 'WerkPlus-Schlüssel entfernen')"
			:message="t('rechnungswerk', 'Der Schlüssel wird für alle Werk-Apps dieser Nextcloud entfernt, sie arbeiten danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?')"
			:confirmLabel="t('rechnungswerk', 'Entfernen')"
			@close="confirmRemove = false"
			@confirm="onRemove" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import {
	activateLicense,
	getLicense,
	refreshLicense,
	removeLicense,
	startTrial,
	type LicenseStatus,
} from '@/api/license'
import { werkplusLinks } from '@/werkplusLinks'

const links = werkplusLinks()

const status = ref<LicenseStatus | null>(null)
const keyInput = ref('')
const busy = ref(false)
const loadError = ref('')
const actionError = ref('')
const actionErrorCode = ref('')
const actionInfo = ref('')
const trialKey = ref('')
const confirmRemove = ref(false)
const confirmTrial = ref(false)

// Kein Fehler im eigentlichen Sinn, der Vertrag verlangt eine ruhige Anzeige.
const CALM_CODES = ['TRIAL_ALREADY_USED']

const canEdit = computed(() => status.value?.canManage === true && !status.value.storeTooNew)

const licenseActive = computed(() => status.value?.state === 'valid' || status.value?.state === 'grace')

const trialRunning = computed(() => status.value?.trial === true && licenseActive.value)

// Auch ohne Netz: Ein abgelaufenes Testtoken zaehlt, bevor die Pruefung KEY_EXPIRED meldet.
const trialOver = computed(() => status.value?.trialEnded === true || (status.value?.trial === true && status.value.state === 'expired'))

const tierLabel = computed(() => {
	if (status.value?.tier !== 'werkplus') {
		return t('rechnungswerk', 'Frei')
	}
	return status.value.trial ? t('rechnungswerk', 'WerkPlus – Testzeitraum') : 'WerkPlus'
})

// Kauf-Link ohne Schluessel und im oder nach dem Testzeitraum, nie bei gekauftem Schluessel.
const buyLabel = computed(() => {
	const s = status.value
	if (!s || s.storeTooNew) {
		return ''
	}
	if (!s.keySet) {
		return t('rechnungswerk', 'WerkPlus kaufen')
	}
	return trialRunning.value || trialOver.value ? t('rechnungswerk', 'Jetzt kaufen') : ''
})

const showBuyHint = computed(() => trialRunning.value || trialOver.value)

const daysLeftLabel = computed(() => {
	const until = status.value?.licenseValidUntil
	const days = until ? Math.max(0, Math.ceil((new Date(until).getTime() - Date.now()) / 86400000)) : 0
	return days === 1 ? t('rechnungswerk', 'noch 1 Tag') : t('rechnungswerk', 'noch {days} Tage', { days })
})

const stateNote = computed<{ type: 'success' | 'warning' | 'error', text: string } | null>(() => {
	const s = status.value
	if (!s) {
		return null
	}
	if (trialOver.value) {
		return { type: 'warning', text: t('rechnungswerk', 'Der Testzeitraum ist beendet. RechnungsWerk arbeitet im freien Umfang weiter, deine Daten bleiben erhalten.') }
	}
	switch (s.state) {
	case 'valid':
		return { type: 'success', text: t('rechnungswerk', 'WerkPlus ist aktiv.') }
	case 'grace':
		return {
			type: 'warning',
			text: t('rechnungswerk', 'Die Lizenz ist abgelaufen und konnte noch nicht erneuert werden. Die Funktionen bleiben bis {date} erhalten.', { date: s.graceUntil ? formatDate(s.graceUntil) : '' }),
		}
	case 'expired':
		return { type: 'error', text: t('rechnungswerk', 'Die Lizenz ist abgelaufen. RechnungsWerk arbeitet im freien Umfang weiter.') }
	case 'invalid':
		return { type: 'error', text: t('rechnungswerk', 'Der gespeicherte Lizenznachweis ist ungültig. Bitte prüfe die Lizenz erneut.') }
	default:
		return null
	}
})

function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString()
}

function isPast(iso: string): boolean {
	return new Date(iso).getTime() <= Date.now()
}

function formatDateTime(iso: string): string {
	return new Date(iso).toLocaleString()
}

async function load(): Promise<void> {
	try {
		status.value = await getLicense()
		loadError.value = ''
	} catch (e) {
		loadError.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Lizenzstatus konnte nicht geladen werden.')
	}
}

// Nach einem Fehler den Status neu laden, die Eingaben aber stehen lassen.
async function run(action: () => Promise<LicenseStatus>): Promise<void> {
	busy.value = true
	actionError.value = ''
	actionErrorCode.value = ''
	actionInfo.value = ''
	try {
		status.value = await action()
		keyInput.value = ''
	} catch (e) {
		const { message, code } = e as { message?: string, code?: string }
		const text = message ?? t('rechnungswerk', 'WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.')
		if (code && CALM_CODES.includes(code)) {
			actionInfo.value = text
		} else {
			actionError.value = text
			actionErrorCode.value = code ?? ''
		}
		await load()
	} finally {
		busy.value = false
	}
}

function onActivate(): Promise<void> {
	trialKey.value = ''
	return run(() => activateLicense(keyInput.value.trim()))
}

function onTrial(): Promise<void> {
	confirmTrial.value = false
	trialKey.value = ''
	return run(async () => {
		const result = await startTrial()
		trialKey.value = result.key
		return result.status
	})
}

function onRefresh(): Promise<void> {
	return run(refreshLicense)
}

function onRemove(): Promise<void> {
	confirmRemove.value = false
	trialKey.value = ''
	return run(removeLicense)
}

onMounted(load)
</script>

<style scoped>
.rw-werkplus__facts {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 4px 16px;
	margin: 12px 0 16px;
}

/* Nextcloud gibt dt/dd global eine feste Breite, Rechtsbuendigkeit und Innenabstand mit. */
.rw-werkplus__facts dt,
.rw-werkplus__facts dd {
	width: auto;
	margin: 0;
	padding: 0;
	text-align: start;
}

.rw-werkplus__facts dt {
	color: var(--color-text-maxcontrast);
}

.rw-werkplus__actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin: 12px 0 20px;
}

.rw-werkplus__link {
	display: inline-block;
	font-weight: 600;
}

.rw-werkplus__label {
	font-weight: 600;
}

.rw-werkplus__privacy code,
.rw-werkplus__trial-key code {
	user-select: all;
}
</style>
