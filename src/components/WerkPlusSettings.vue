<!--
	SPDX-FileCopyrightText: 2026 cpcMomentum
	SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="rw-werkplus">
		<p class="rw-hint">
			{{ t('rechnungswerk', 'Mit einem WerkPlus-Schlüssel schaltet RechnungsWerk zusätzliche Funktionen frei. Ohne Schlüssel bleibt alles, wie es ist.') }}
		</p>

		<NcNoteCard v-if="loadError" type="error" :text="loadError" />

		<template v-if="status">
			<NcNoteCard v-if="stateNote" :type="stateNote.type" :text="stateNote.text" />
			<NcNoteCard v-if="actionError" type="error" :text="actionError" />
			<NcNoteCard v-else-if="status.lastError" type="warning" :text="status.lastError.message" />

			<dl v-if="status.keySet" class="rw-werkplus__facts">
				<dt>{{ t('rechnungswerk', 'Tarif') }}</dt>
				<dd>{{ tierLabel }}</dd>
				<template v-if="status.expiresAt">
					<dt>{{ t('rechnungswerk', 'Gültig bis') }}</dt>
					<dd>{{ formatDate(status.expiresAt) }}</dd>
				</template>
				<dt>{{ t('rechnungswerk', 'Letzte erfolgreiche Prüfung') }}</dt>
				<dd>{{ status.lastCheckAt ? formatDateTime(status.lastCheckAt) : t('rechnungswerk', 'noch keine') }}</dd>
				<dt>{{ t('rechnungswerk', 'Schlüssel') }}</dt>
				<dd>{{ status.keyHint }}</dd>
			</dl>

			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'WerkPlus-Schlüssel') }}</span>
					<input v-model="keyInput"
						class="rw-input"
						type="text"
						autocomplete="off"
						spellcheck="false"
						:placeholder="status.keySet ? t('rechnungswerk', 'gespeichert, leer lassen') : 'wp_…'" /></label>
				<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Mitarbeitende') }}</span>
					<select v-model="bucket" class="rw-input">
						<option v-for="b in EMPLOYEE_BUCKETS" :key="b" :value="b">{{ b }}</option>
					</select></label>
			</div>
			<p class="rw-hint">{{ t('rechnungswerk', 'Übertragen wird nur die Größenklasse, keine Mitarbeiterzahl.') }}</p>

			<div class="rw-werkplus__actions">
				<NcButton variant="primary" :disabled="busy || (!keyInput.trim() && !status.keySet)" @click="onActivate">
					{{ status.keySet ? t('rechnungswerk', 'Speichern und prüfen') : t('rechnungswerk', 'Schlüssel prüfen und speichern') }}
				</NcButton>
				<NcButton v-if="status.keySet" :disabled="busy" @click="onRefresh">
					{{ t('rechnungswerk', 'Jetzt prüfen') }}
				</NcButton>
				<NcButton v-if="status.keySet" variant="tertiary" :disabled="busy" @click="confirmRemove = true">
					{{ t('rechnungswerk', 'Schlüssel entfernen') }}
				</NcButton>
			</div>

			<div class="rw-werkplus__privacy">
				<span class="rw-werkplus__label">{{ t('rechnungswerk', 'Was an WerkPlus übertragen wird') }}</span>
				<p class="rw-hint">{{ t('rechnungswerk', 'Der Schlüssel, die Kennung dieser Installation, die Version von RechnungsWerk und die Größenklasse. Niemals: Rechnungen, Kunden oder andere Belegdaten, Personendaten, Nextcloud-Benutzer oder Dateien.') }}</p>
				<p class="rw-hint">{{ t('rechnungswerk', 'Die Lizenz wird auf diesem Server geprüft. Ist WerkPlus nicht erreichbar, arbeitet RechnungsWerk normal weiter.') }}</p>
				<p class="rw-hint">{{ t('rechnungswerk', 'Kennung dieser Installation:') }} <code>{{ status.instanceUuid }}</code></p>
			</div>
		</template>

		<ConfirmDialog
			:open="confirmRemove"
			:name="t('rechnungswerk', 'WerkPlus-Schlüssel entfernen')"
			:message="t('rechnungswerk', 'RechnungsWerk arbeitet danach im freien Umfang. Den Schlüssel kannst du jederzeit wieder eintragen. Fortfahren?')"
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
	EMPLOYEE_BUCKETS,
	activateLicense,
	getLicense,
	refreshLicense,
	removeLicense,
	type LicenseStatus,
} from '@/api/license'

const status = ref<LicenseStatus | null>(null)
const keyInput = ref('')
const bucket = ref<string>(EMPLOYEE_BUCKETS[0])
const busy = ref(false)
const loadError = ref('')
const actionError = ref('')
const confirmRemove = ref(false)

const tierLabel = computed(() => (status.value?.tier === 'werkplus' ? 'WerkPlus' : t('rechnungswerk', 'Frei')))

const stateNote = computed<{ type: 'success' | 'warning' | 'error', text: string } | null>(() => {
	const s = status.value
	if (!s) {
		return null
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

function formatDateTime(iso: string): string {
	return new Date(iso).toLocaleString()
}

function apply(next: LicenseStatus, keepBucket = false): void {
	status.value = next
	if (!keepBucket) {
		bucket.value = next.employeeBucket
	}
}

async function load(keepBucket = false): Promise<void> {
	try {
		apply(await getLicense(), keepBucket)
		loadError.value = ''
	} catch (e) {
		loadError.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Lizenzstatus konnte nicht geladen werden.')
	}
}

// Nach einem Fehler den Status neu laden, die Eingaben aber stehen lassen.
async function run(action: () => Promise<LicenseStatus>): Promise<void> {
	busy.value = true
	actionError.value = ''
	try {
		apply(await action())
		keyInput.value = ''
	} catch (e) {
		actionError.value = (e as { message?: string }).message ?? t('rechnungswerk', 'WerkPlus hat einen Fehler gemeldet. Bitte versuche es später erneut.')
		await load(true)
	} finally {
		busy.value = false
	}
}

function onActivate(): Promise<void> {
	return run(() => activateLicense(keyInput.value.trim(), bucket.value))
}

function onRefresh(): Promise<void> {
	return run(refreshLicense)
}

function onRemove(): Promise<void> {
	confirmRemove.value = false
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

.rw-werkplus__label {
	font-weight: 600;
}

.rw-werkplus__privacy code {
	user-select: all;
}
</style>
