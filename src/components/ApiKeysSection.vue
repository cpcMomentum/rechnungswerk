<!--
SPDX-FileCopyrightText: 2026 cpcMomentum
SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="rw-api-keys">
		<p class="rw-hint">
			{{ t('rechnungswerk', 'Ein API-Schlüssel erlaubt anderen Programmen Zugriff auf diese RechnungsWerk-Instanz, ohne eine Anmeldung. Der Schlüssel wird nur einmalig angezeigt.') }}
		</p>

		<NcNoteCard v-if="loadError" type="error" :text="loadError" />

		<NcNoteCard v-if="createdKey" type="success">
			<p>{{ t('rechnungswerk', 'Das ist dein neuer API-Schlüssel:') }}</p>
			<p><code class="rw-api-keys__plaintext">{{ createdKey }}</code></p>
			<p>{{ t('rechnungswerk', 'Bitte bewahre ihn sicher auf. Er wird nie wieder angezeigt.') }}</p>
			<NcButton @click="copyCreated">{{ copied ? t('rechnungswerk', 'Kopiert') : t('rechnungswerk', 'Kopieren') }}</NcButton>
		</NcNoteCard>

		<table v-if="keys.length > 0" class="rw-api-keys__table">
			<thead>
				<tr>
					<th>{{ t('rechnungswerk', 'Name') }}</th>
					<th>{{ t('rechnungswerk', 'Schlüssel') }}</th>
					<th>{{ t('rechnungswerk', 'Rechte') }}</th>
					<th>{{ t('rechnungswerk', 'Anfragen pro Minute') }}</th>
					<th>{{ t('rechnungswerk', 'Zuletzt verwendet') }}</th>
					<th><span class="rw-api-keys__actions-head">{{ t('rechnungswerk', 'Aktionen') }}</span></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="key in keys" :key="key.id" :class="{ 'rw-api-keys__row--revoked': key.revokedAt !== null }">
					<td>{{ key.name }}</td>
					<td><code>{{ key.keyPrefix }}…</code></td>
					<td>
						<span class="rw-api-keys__scopes">{{ scopeLabels(key.scopes).join(', ') }}</span>
					</td>
					<td>{{ key.rateLimit ?? t('rechnungswerk', 'Standard (60)') }}</td>
					<td>
						<template v-if="key.revokedAt !== null">{{ t('rechnungswerk', 'Widerrufen') }}</template>
						<template v-else-if="key.lastUsedAt">{{ formatDate(key.lastUsedAt) }}</template>
						<template v-else>{{ t('rechnungswerk', 'nie') }}</template>
					</td>
					<td>
						<NcButton v-if="key.revokedAt === null" variant="tertiary" :disabled="busy" @click="revokeId = key.id">
							{{ t('rechnungswerk', 'Widerrufen') }}
						</NcButton>
					</td>
				</tr>
			</tbody>
		</table>

		<p v-else class="rw-hint">{{ t('rechnungswerk', 'Noch kein API-Schlüssel angelegt.') }}</p>

		<NcButton variant="primary" :disabled="busy" @click="openCreate = true">
			{{ t('rechnungswerk', 'API-Schlüssel anlegen') }}
		</NcButton>

		<NcModal v-if="openCreate" :name="t('rechnungswerk', 'API-Schlüssel anlegen')" @close="openCreate = false">
			<div class="rw-api-keys__modal">
				<h3>{{ t('rechnungswerk', 'API-Schlüssel anlegen') }}</h3>

				<label class="field">
					<span>{{ t('rechnungswerk', 'Name') }}</span>
					<input ref="nameInput" v-model="newName" class="input" type="text"
						maxlength="64" :placeholder="t('rechnungswerk', 'z. B. WerkPlus')" />
				</label>

				<div class="field">
					<span>{{ t('rechnungswerk', 'Rechte') }}</span>
					<label v-for="scope in SCOPES" :key="scope" class="rw-api-keys__scope">
						<input v-model="newScopes" type="checkbox" :value="scope" />
						{{ scopeLabel(scope) }}
					</label>
				</div>

				<label class="field">
					<span>{{ t('rechnungswerk', 'Anfragen pro Minute') }}</span>
					<input v-model="newRateLimit" class="input" type="number" min="1" :max="RATE_LIMIT_MAX"
						:placeholder="t('rechnungswerk', 'Standard: 60')" />
				</label>

				<NcNoteCard v-if="actionError" type="error" :text="actionError" />

				<div class="rw-api-keys__actions">
					<NcButton @click="openCreate = false">{{ t('rechnungswerk', 'Abbrechen') }}</NcButton>
					<NcButton variant="primary" :disabled="busy || !isValid" @click="onCreate">
						{{ t('rechnungswerk', 'Anlegen') }}
					</NcButton>
				</div>
			</div>
		</NcModal>

		<ConfirmDialog
			:open="revokeId !== null"
			:name="t('rechnungswerk', 'API-Schlüssel widerrufen')"
			:message="t('rechnungswerk', 'Programme mit diesem Schlüssel verlieren sofort den Zugang. Widerrufen lässt sich ein Schlüssel nicht rückgängig machen. Fortfahren?')"
			:confirmLabel="t('rechnungswerk', 'Widerrufen')"
			@close="revokeId = null"
			@confirm="onRevoke" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import { createApiKey, getApiKeys, revokeApiKey, type ApiKey } from '@/api/apiKeys'

const SCOPES = ['invoices:create', 'invoices:commit', 'invoices:send', 'invoices:pay', 'invoices:cancel', 'invoices:read', 'invoices:pdf'] as const
const RATE_LIMIT_MAX = 10000

const SCOPE_LABELS: Record<string, string> = {
	'invoices:create': t('rechnungswerk', 'Rechnungen anlegen'),
	'invoices:commit': t('rechnungswerk', 'Festschreiben'),
	'invoices:send': t('rechnungswerk', 'Versenden'),
	'invoices:pay': t('rechnungswerk', 'Als bezahlt markieren'),
	'invoices:cancel': t('rechnungswerk', 'Stornieren'),
	'invoices:read': t('rechnungswerk', 'Rechnungen lesen'),
	'invoices:pdf': t('rechnungswerk', 'PDF abrufen'),
}

const keys = ref<ApiKey[]>([])
const openCreate = ref(false)
const newName = ref('')
const newScopes = ref<string[]>([])
const newRateLimit = ref('')
const busy = ref(false)
const loadError = ref('')
const actionError = ref('')
const createdKey = ref('')
const copied = ref(false)
const revokeId = ref<number | null>(null)
const nameInput = ref<HTMLInputElement | null>(null)

const isValid = computed(() => newName.value.trim() !== '' && newScopes.value.length > 0)

function scopeLabel(scope: string): string {
	return SCOPE_LABELS[scope] ?? scope
}

function scopeLabels(scopes: string[]): string[] {
	return scopes.map(scopeLabel)
}

function formatDate(unix: number): string {
	return new Date(unix * 1000).toLocaleDateString()
}

async function load(): Promise<void> {
	try {
		keys.value = await getApiKeys()
		loadError.value = ''
	} catch (e) {
		loadError.value = (e as { message?: string }).message ?? t('rechnungswerk', 'API-Schlüssel konnten nicht geladen werden.')
	}
}

async function onCreate(): Promise<void> {
	busy.value = true
	actionError.value = ''
	try {
		const rateLimit = newRateLimit.value === '' ? null : Number(newRateLimit.value)
		const created = await createApiKey(newName.value.trim(), [...newScopes.value], rateLimit)
		createdKey.value = created.plaintext
		copied.value = false
		openCreate.value = false
		newName.value = ''
		newScopes.value = []
		newRateLimit.value = ''
		await load()
	} catch (e) {
		actionError.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Anlegen fehlgeschlagen.')
	} finally {
		busy.value = false
	}
}

async function onRevoke(): Promise<void> {
	const id = revokeId.value
	revokeId.value = null
	if (id === null) {
		return
	}
	busy.value = true
	try {
		await revokeApiKey(id)
		await load()
	} catch (e) {
		loadError.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Widerrufen fehlgeschlagen.')
	} finally {
		busy.value = false
	}
}

async function copyCreated(): Promise<void> {
	try {
		await navigator.clipboard.writeText(createdKey.value)
	} catch {
		// Zwischenablage darf scheitern, der Klartext steht ja sichtbar da.
	}
	copied.value = true
}

onMounted(load)
</script>

<style scoped>
.rw-api-keys__table {
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 12px;
}

.rw-api-keys__table th,
.rw-api-keys__table td {
	text-align: start;
	padding: 6px 8px;
	border-bottom: 1px solid var(--color-border);
}

.rw-api-keys__row--revoked td {
	color: var(--color-text-maxcontrast);
	text-decoration: line-through;
}

.rw-api-keys__actions-head {
	visibility: hidden;
}

.rw-api-keys__scopes {
	display: inline-block;
	max-width: 320px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.rw-api-keys__plaintext {
	user-select: all;
	word-break: break-all;
}

.rw-api-keys__modal {
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-width: 0;
}

.rw-api-keys__modal h3 {
	margin: 0;
}

.field {
	display: flex;
	flex-direction: column;
	gap: 4px;
}

.field > span {
	font-weight: 600;
	font-size: 0.9em;
}

.input {
	width: 100%;
	box-sizing: border-box;
}

.rw-api-keys__scope {
	display: block;
	font-weight: normal;
}

.rw-api-keys__actions {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	margin-top: 12px;
}
</style>
