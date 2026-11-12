<!--
SPDX-FileCopyrightText: 2026 cpcMomentum
SPDX-License-Identifier: AGPL-3.0-or-later
-->
<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Protokoll') }}</h2>
			<div class="rw-view__actions">
				<input v-model="filter" class="rw-input" type="search"
					:placeholder="t('rechnungswerk', 'Nach Nummer filtern')"
					:aria-label="t('rechnungswerk', 'Nach Nummer filtern')" />
			</div>
		</div>

		<p class="rw-hint">
			{{ t('rechnungswerk', 'Wer was an Rechnungen und Angeboten getan hat, auch über API-Schlüssel. Vorgänge vor Einführung des Protokolls sind nicht erfasst.') }}
		</p>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="loaded && entries.length === 0 && !error"
			:name="t('rechnungswerk', 'Keine Einträge')">
			<template #icon><HistoryIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="entries.length > 0" class="rw-table-wrap">
			<table class="rw-table">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Zeitpunkt') }}</th>
						<th>{{ t('rechnungswerk', 'Beleg') }}</th>
						<th>{{ t('rechnungswerk', 'Vorgang') }}</th>
						<th>{{ t('rechnungswerk', 'Durch') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="entry in entries" :key="entry.id">
						<td class="rw-muted">{{ auditTime(entry.createdAt) }}</td>
						<td>
							<router-link v-if="entry.documentExists" :to="documentRoute(entry)">
								{{ auditDocumentLabel(entry) }}
							</router-link>
							<template v-else>{{ auditDocumentLabel(entry) }}</template>
						</td>
						<td>{{ auditActionLabel(entry.action) }}</td>
						<td>{{ auditActor(entry) }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<NcButton v-if="hasMore" :disabled="loading" @click="loadMore">
			{{ t('rechnungswerk', 'Mehr laden') }}
		</NcButton>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import HistoryIcon from 'vue-material-design-icons/History.vue'
import { getAudit, type AuditEntry } from '@/api/audit'
import { auditActionLabel, auditActor, auditDocumentLabel, auditTime } from '@/utils/auditLabels'

const PAGE_SIZE = 50

const entries = ref<AuditEntry[]>([])
const filter = ref('')
const loading = ref(false)
const loaded = ref(false)
const hasMore = ref(false)
const error = ref('')

function documentRoute(entry: AuditEntry) {
	const name = entry.documentType === 'quote' ? 'quote-detail' : 'invoice-detail'
	return { name, params: { id: String(entry.documentId) } }
}

let latest = 0

async function fetchPage(offset: number): Promise<void> {
	const request = ++latest
	loading.value = true
	error.value = ''
	try {
		const page = await getAudit(filter.value.trim(), PAGE_SIZE, offset)
		if (request !== latest) {
			return
		}
		// Offset paging shifts when new entries arrive between pages; skip what is already shown.
		const seen = new Set(entries.value.map(e => e.id))
		entries.value = offset === 0 ? page : [...entries.value, ...page.filter(e => !seen.has(e.id))]
		hasMore.value = page.length === PAGE_SIZE
	} catch {
		if (request === latest) {
			error.value = t('rechnungswerk', 'Das Protokoll konnte nicht geladen werden.')
		}
	} finally {
		if (request === latest) {
			loading.value = false
			loaded.value = true
		}
	}
}

function loadMore(): void {
	fetchPage(entries.value.length)
}

let debounce: ReturnType<typeof setTimeout> | undefined
watch(filter, () => {
	clearTimeout(debounce)
	debounce = setTimeout(() => fetchPage(0), 300)
})

onMounted(() => fetchPage(0))
</script>
