<template>
	<div class="rw-view">
		<div class="rw-view__head">
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

		<div v-else-if="store.invoices.length > 0" class="rw-table-wrap">
			<table class="rw-table">
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Status') }}</th>
						<th>{{ t('rechnungswerk', 'Nummer') }}</th>
						<th>{{ t('rechnungswerk', 'Empfänger') }}</th>
						<th>{{ t('rechnungswerk', 'Datum') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
						<th class="rw-col-actions"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="inv in store.invoices" :key="inv.id" class="rw-row-clickable" @click="openInvoice(inv.id)">
						<td><span :class="['rw-chip', `rw-chip--${inv.status}`]">{{ statusLabel(inv.status) }}</span></td>
						<td>
							{{ inv.number ?? t('rechnungswerk', '(Entwurf)') }}
							<span v-if="inv.invoiceType !== 'invoice'" v-tooltip="typeTooltip(inv)" class="rw-pill">{{ typeLabel(inv.invoiceType) }}</span>
						</td>
						<td>{{ inv.recipientName ?? '—' }}</td>
						<td>{{ formatDate(inv.issueDate ?? inv.createdAt) }}</td>
						<td class="num">{{ formatCents(inv.totalCents) }}</td>
						<td class="rw-col-actions">
							<NcButton v-if="inv.status !== 'draft'"
								type="tertiary"
								:aria-label="t('rechnungswerk', 'PDF herunterladen')"
								:title="t('rechnungswerk', 'PDF herunterladen')"
								@click.stop="downloadPdf(inv.id)">
								<template #icon><DownloadIcon :size="20" /></template>
							</NcButton>
						</td>
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
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { downloadInvoicePdf } from '@/api/invoices'
import { INVOICE_STATUS_LABELS, INVOICE_TYPE_LABELS, type Invoice, type InvoiceStatus, type InvoiceType } from '@/types/api'
import { formatCents } from '@/utils/money'

const router = useRouter()
const store = useInvoiceStore()
const error = ref('')

const statusLabel = (s: InvoiceStatus): string => t('rechnungswerk', INVOICE_STATUS_LABELS[s] ?? s)
const typeLabel = (type: InvoiceType): string => t('rechnungswerk', INVOICE_TYPE_LABELS[type] ?? type)
const typeTooltip = (inv: Invoice): string => inv.relatedNumber
	? t('rechnungswerk', '{type} zu Rechnung {number}', { type: typeLabel(inv.invoiceType), number: inv.relatedNumber })
	: typeLabel(inv.invoiceType)

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

function downloadPdf(id: number) {
	downloadInvoicePdf(id)
}
</script>
