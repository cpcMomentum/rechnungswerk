<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Angebote') }}</h2>
			<NcButton variant="primary" @click="newQuote">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Neues Angebot') }}
			</NcButton>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="!store.loading && store.quotes.length === 0"
			:name="t('rechnungswerk', 'Noch keine Angebote')"
			:description="t('rechnungswerk', 'Lege dein erstes Angebot an.')">
			<template #icon><FileDocumentOutlineIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="store.quotes.length > 0">
			<div class="rw-filterbar">
				<button v-for="f in FILTERS" :key="f.key"
					:class="['rw-chip', { 'rw-chip--active': filter === f.key }]"
					@click="filter = f.key">
					{{ t('rechnungswerk', f.label) }} <span class="rw-chip__n">{{ counts[f.key] }}</span>
				</button>
			</div>

			<div class="rw-table-wrap">
			<table class="rw-table">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Status') }}</th>
						<th>{{ t('rechnungswerk', 'Nummer') }}</th>
						<th>{{ t('rechnungswerk', 'Empfänger') }}</th>
						<th>{{ t('rechnungswerk', 'Datum') }}</th>
						<th>{{ t('rechnungswerk', 'Gültig bis') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
						<th class="rw-col-actions"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="q in filteredQuotes" :key="q.id"
						:class="['rw-row-clickable', { 'rw-row--overdue': q.quoteStatus === 'expired' }]"
						@click="openQuote(q.id)">
						<td>
							<span class="rw-status-cell">
								<component :is="quoteStatusIcon(q.quoteStatus)" :size="20"
									:class="['rw-sicon', `rw-qsicon--${q.quoteStatus}`]" :title="quoteStatusLabel(q.quoteStatus)" />
								<span class="rw-qstatus-text">{{ quoteStatusLabel(q.quoteStatus) }}</span>
							</span>
						</td>
						<td>{{ q.number ?? t('rechnungswerk', '(Entwurf)') }}</td>
						<td>{{ q.recipientName ?? '—' }}</td>
						<td>{{ formatDate(q.issueDate ?? q.createdAt) }}</td>
						<td>
							<span :class="{ 'rw-amt-overdue': q.quoteStatus === 'expired' }">{{ formatDate(q.validUntil) }}</span>
						</td>
						<td class="num">{{ formatCents(q.totalCents) }}</td>
						<td class="rw-col-actions">
							<div class="rw-actions">
								<NcButton v-if="canConvert(q)"
									type="tertiary"
									:aria-label="t('rechnungswerk', 'In Rechnung übernehmen')"
									:title="t('rechnungswerk', 'In Rechnung übernehmen')"
									@click.stop="convert(q.id)">
									<template #icon><FileMoveOutlineIcon :size="20" /></template>
								</NcButton>
								<NcButton v-if="q.status !== 'draft'"
									type="tertiary"
									:aria-label="t('rechnungswerk', 'PDF herunterladen')"
									:title="t('rechnungswerk', 'PDF herunterladen')"
									@click.stop="downloadPdf(q.id)">
									<template #icon><DownloadIcon :size="20" /></template>
								</NcButton>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import FileDocumentOutlineIcon from 'vue-material-design-icons/FileDocumentOutline.vue'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import FileMoveOutlineIcon from 'vue-material-design-icons/FileMoveOutline.vue'
import FileEditOutlineIcon from 'vue-material-design-icons/FileEditOutline.vue'
import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'
import AlertCircleOutlineIcon from 'vue-material-design-icons/AlertCircleOutline.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue'
import { useQuoteStore } from '@/stores/quoteStore'
import { downloadQuotePdf } from '@/api/quotes'
import { QUOTE_STATUS_LABELS, type Invoice, type QuoteStatus } from '@/types/api'
import { formatCents } from '@/utils/money'

const router = useRouter()
const store = useQuoteStore()
const error = ref('')

type QuoteFilter = 'all' | 'open' | 'accepted' | 'rejected' | 'converted'
const FILTERS: { key: QuoteFilter, label: string }[] = [
	{ key: 'all', label: 'Alle' },
	{ key: 'open', label: 'Offen' },
	{ key: 'accepted', label: 'Angenommen' },
	{ key: 'rejected', label: 'Abgelehnt' },
	{ key: 'converted', label: 'Übernommen' },
]
const filter = ref<QuoteFilter>('all')

// "Offen" bundles still-actionable quotes: open plus expired (an expired offer
// is still open, only past its validity — the seller may still act on it).
const isOpen = (q: Invoice): boolean => q.quoteStatus === 'open' || q.quoteStatus === 'expired'

const counts = computed<Record<QuoteFilter, number>>(() => {
	const c: Record<QuoteFilter, number> = { all: store.quotes.length, open: 0, accepted: 0, rejected: 0, converted: 0 }
	for (const q of store.quotes) {
		if (isOpen(q)) { c.open++ }
		if (q.quoteStatus === 'accepted') { c.accepted++ }
		if (q.quoteStatus === 'rejected') { c.rejected++ }
		if (q.quoteStatus === 'converted') { c.converted++ }
	}
	return c
})

const filteredQuotes = computed(() => {
	switch (filter.value) {
	case 'open': return store.quotes.filter(isOpen)
	case 'accepted': return store.quotes.filter(q => q.quoteStatus === 'accepted')
	case 'rejected': return store.quotes.filter(q => q.quoteStatus === 'rejected')
	case 'converted': return store.quotes.filter(q => q.quoteStatus === 'converted')
	default: return store.quotes
	}
})

// A quote can be turned into an invoice while it is still live (open, expired or
// accepted); rejected and already-converted quotes cannot (mirrors the backend
// assertQuoteConvertible guard).
const canConvert = (q: Invoice): boolean =>
	q.status === 'committed' && (q.quoteStatus === 'open' || q.quoteStatus === 'expired' || q.quoteStatus === 'accepted')

const QUOTE_STATUS_ICON: Record<string, unknown> = {
	draft: PencilOutlineIcon,
	open: ClockOutlineIcon,
	expired: AlertCircleOutlineIcon,
	accepted: CheckCircleIcon,
	rejected: CloseCircleIcon,
	converted: FileMoveOutlineIcon,
	superseded: FileEditOutlineIcon,
}
const quoteStatusIcon = (s: QuoteStatus | null): unknown => (s ? QUOTE_STATUS_ICON[s] ?? PencilOutlineIcon : PencilOutlineIcon)
const quoteStatusLabel = (s: QuoteStatus | null): string => (s ? t('rechnungswerk', QUOTE_STATUS_LABELS[s] ?? s) : '')

function formatDate(iso: string | null): string {
	if (!iso) {
		return '—'
	}
	return (iso.length === 10 ? new Date(`${iso}T12:00:00`) : new Date(iso)).toLocaleDateString()
}

onMounted(() => {
	store.fetchAll().catch((e: { message?: string }) => {
		error.value = e.message ?? t('rechnungswerk', 'Laden fehlgeschlagen')
	})
})

function newQuote() {
	router.push({ name: 'quote-new' })
}

function openQuote(id: number) {
	router.push({ name: 'quote-detail', params: { id: String(id) } })
}

function downloadPdf(id: number) {
	downloadQuotePdf(id)
}

async function convert(id: number) {
	error.value = ''
	try {
		const invoice = await store.convert(id)
		// Land on the freshly created invoice draft so the user can finalise it.
		router.push({ name: 'invoice-detail', params: { id: String(invoice.id) } })
	} catch (e) {
		error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Übernahme fehlgeschlagen')
	}
}
</script>

<style scoped>
/* Colour the quote status icons; layout/table/chips come from the shared app.css. */
.rw-qsicon--draft { color: var(--color-text-maxcontrast); }
.rw-qsicon--open { color: var(--color-primary-element); }
.rw-qsicon--expired { color: var(--color-warning, #c8870d); }
.rw-qsicon--accepted { color: var(--color-success, #2d7d46); }
.rw-qsicon--rejected { color: var(--color-error, #c9326c); }
.rw-qsicon--converted { color: var(--color-text-maxcontrast); }
.rw-qsicon--superseded { color: var(--color-text-maxcontrast); }
.rw-status-cell { display: inline-flex; align-items: center; gap: 6px; }
.rw-qstatus-text { font-size: 0.9em; }
</style>
