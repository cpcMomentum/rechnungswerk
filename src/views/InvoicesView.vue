<template>
	<div class="rechnungswerk-view">
		<div class="view-header">
			<h2>{{ t('rechnungswerk', 'Rechnungen') }}</h2>
			<NcButton variant="primary" @click="newInvoice">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Neue Rechnung') }}
			</NcButton>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcEmptyContent v-if="!store.loading && store.invoices.length === 0"
			:name="t('rechnungswerk', 'Noch keine Rechnungen')"
			:description="t('rechnungswerk', 'Lege deine erste Rechnung an.')">
			<template #icon><FileDocumentIcon :size="20" /></template>
		</NcEmptyContent>

		<div v-else-if="store.invoices.length > 0" class="rw-card">
			<table class="rw-tbl">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Status') }}</th>
						<th>{{ t('rechnungswerk', 'Nummer') }}</th>
						<th>{{ t('rechnungswerk', 'Empfänger') }}</th>
						<th>{{ t('rechnungswerk', 'Datum') }}</th>
						<th class="r">{{ t('rechnungswerk', 'Brutto') }}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="inv in store.invoices" :key="inv.id" class="clickable" @click="openInvoice(inv.id)">
						<td><span :class="['chip', `chip--${inv.status}`]">{{ statusLabel(inv.status) }}</span></td>
						<td>{{ inv.number ?? t('rechnungswerk', '(Entwurf)') }}</td>
						<td>{{ inv.recipientName ?? '—' }}</td>
						<td>{{ formatDate(inv.issueDate ?? inv.createdAt) }}</td>
						<td class="r">{{ formatCents(inv.totalCents) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { INVOICE_STATUS_LABELS, type InvoiceStatus } from '@/types/api'
import { formatCents } from '@/utils/money'

const router = useRouter()
const store = useInvoiceStore()
const error = ref('')

const statusLabel = (s: InvoiceStatus): string => t('rechnungswerk', INVOICE_STATUS_LABELS[s] ?? s)

function formatDate(iso: string | null): string {
	if (!iso) {
		return '—'
	}
	return new Date(iso).toLocaleDateString()
}

onMounted(() => {
	store.fetchAll().catch((e: { message?: string }) => {
		error.value = e.message ?? t('rechnungswerk', 'Laden fehlgeschlagen')
	})
})

function newInvoice() {
	router.push({ name: 'invoice-new' })
}

function openInvoice(id: number) {
	router.push({ name: 'invoice-detail', params: { id: String(id) } })
}
</script>

<style scoped>
.rechnungswerk-view {
	padding: 20px;
	padding-left: 50px;
}
.view-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 20px;
}
.view-header h2 {
	margin: 0;
}
.rw-card {
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-large);
	overflow: hidden;
}
.rw-tbl {
	width: 100%;
	border-collapse: collapse;
}
.rw-tbl th,
.rw-tbl td {
	padding: 10px 14px;
	text-align: left;
	border-bottom: 1px solid var(--color-border);
}
.rw-tbl tbody tr:last-child td {
	border-bottom: none;
}
.rw-tbl th {
	font-weight: 600;
	color: var(--color-text-maxcontrast);
	background: var(--color-background-hover);
}
.rw-tbl .r {
	text-align: right;
}
.clickable {
	cursor: pointer;
}
.clickable:hover {
	background: var(--color-background-hover);
}
.chip {
	display: inline-block;
	padding: 2px 10px;
	border-radius: 12px;
	font-size: 0.85em;
	font-weight: 600;
	color: #fff;
}
.chip--draft {
	background: #6c757d;
}
.chip--committed {
	background: #2d7d46;
}
.chip--cancelled {
	background: #c62828;
}
</style>
