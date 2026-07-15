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
						<th>
							<span class="rw-th-info">
								{{ t('rechnungswerk', 'Status') }}
								<InfoIcon>
									<div class="rw-info-popup">
										<p class="rw-info-popup__hint">{{ t('rechnungswerk', 'Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.') }}</p>
										<div class="rw-info-popup__group">
											<span class="rw-legend__label">{{ t('rechnungswerk', 'Rechnung') }}</span>
											<span class="rw-legend__item"><LockIcon :size="16" class="rw-sicon rw-sicon--committed" /> {{ t('rechnungswerk', 'Festgeschrieben') }}</span>
											<span class="rw-legend__item"><PencilOutlineIcon :size="16" class="rw-sicon rw-sicon--draft" /> {{ t('rechnungswerk', 'Entwurf') }}</span>
											<span class="rw-legend__item"><CloseCircleIcon :size="16" class="rw-sicon rw-sicon--cancelled" /> {{ t('rechnungswerk', 'Storniert') }}</span>
										</div>
										<div class="rw-info-popup__group">
											<span class="rw-legend__label">{{ t('rechnungswerk', 'DATEV-Übergabe') }}</span>
											<span class="rw-legend__item"><CheckCircleIcon :size="16" class="rw-sicon rw-sicon--datev-confirmed" /> {{ t('rechnungswerk', 'bestätigt') }}</span>
											<span class="rw-legend__item"><ClockOutlineIcon :size="16" class="rw-sicon rw-sicon--datev-pending" /> {{ t('rechnungswerk', 'gesendet') }}</span>
											<span class="rw-legend__item"><HelpCircleOutlineIcon :size="16" class="rw-sicon rw-sicon--datev-unknown" /> {{ t('rechnungswerk', 'Antwort prüfen') }}</span>
										</div>
									</div>
								</InfoIcon>
							</span>
						</th>
						<th>{{ t('rechnungswerk', 'Nummer') }}</th>
						<th>{{ t('rechnungswerk', 'Empfänger') }}</th>
						<th>{{ t('rechnungswerk', 'Datum') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
						<th class="rw-col-actions"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="inv in store.invoices" :key="inv.id" class="rw-row-clickable" @click="openInvoice(inv.id)">
						<td>
							<span class="rw-status-cell">
								<component :is="statusIcon(inv.status)" :size="20" :class="['rw-sicon', `rw-sicon--${inv.status}`]" :title="statusLabel(inv.status)" />
								<component :is="datevIcon(inv.datevStatus)" v-if="inv.datevStatus && datevIcon(inv.datevStatus)" :size="18" :class="['rw-sicon', `rw-sicon--datev-${inv.datevStatus}`]" :title="datevTitle(inv.datevStatus)" />
							</span>
						</td>
						<td>
							{{ inv.number ?? t('rechnungswerk', '(Entwurf)') }}
							<span v-if="inv.invoiceType !== 'invoice'" v-tooltip="typeTooltip(inv)" class="rw-pill">{{ typeLabel(inv.invoiceType) }}</span>
						</td>
						<td>{{ inv.recipientName ?? '—' }}</td>
						<td>{{ formatDate(inv.issueDate ?? inv.createdAt) }}</td>
						<td class="num">{{ formatCents(inv.totalCents) }}</td>
						<td class="rw-col-actions">
							<div class="rw-actions">
								<NcButton type="tertiary"
									:aria-label="t('rechnungswerk', 'Duplizieren')"
									:title="t('rechnungswerk', 'Als Vorlage für neue Rechnung duplizieren')"
									@click.stop="duplicate(inv.id)">
									<template #icon><ContentCopyIcon :size="20" /></template>
								</NcButton>
								<NcButton v-if="inv.status !== 'draft'"
									type="tertiary"
									:aria-label="t('rechnungswerk', 'PDF herunterladen')"
									:title="t('rechnungswerk', 'PDF herunterladen')"
									@click.stop="downloadPdf(inv.id)">
									<template #icon><DownloadIcon :size="20" /></template>
								</NcButton>
							</div>
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
import InfoIcon from '@/components/InfoIcon.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import ContentCopyIcon from 'vue-material-design-icons/ContentCopy.vue'
import LockIcon from 'vue-material-design-icons/Lock.vue'
import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'
import CloseCircleIcon from 'vue-material-design-icons/CloseCircle.vue'
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'
import HelpCircleOutlineIcon from 'vue-material-design-icons/HelpCircleOutline.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { downloadInvoicePdf } from '@/api/invoices'
import { INVOICE_STATUS_LABELS, INVOICE_TYPE_LABELS, type Invoice, type InvoiceStatus, type InvoiceType } from '@/types/api'
import { formatCents } from '@/utils/money'

const router = useRouter()
const store = useInvoiceStore()
const error = ref('')

const STATUS_ICON: Record<string, unknown> = { draft: PencilOutlineIcon, committed: LockIcon, cancelled: CloseCircleIcon }
const DATEV_ICON: Record<string, unknown> = { pending: ClockOutlineIcon, confirmed: CheckCircleIcon, unknown: HelpCircleOutlineIcon, failed: CloseCircleIcon }
const statusIcon = (s: string): unknown => STATUS_ICON[s] ?? FileDocumentIcon
const datevIcon = (s: string | null): unknown => (s ? DATEV_ICON[s] ?? null : null)
const DATEV_TITLE: Record<string, string> = {
	pending: t('rechnungswerk', 'An DATEV gesendet – Bestätigung ausstehend'),
	confirmed: t('rechnungswerk', 'Von DATEV bestätigt (Beleg angenommen)'),
	unknown: t('rechnungswerk', 'DATEV-Antwort prüfen'),
	failed: t('rechnungswerk', 'Von DATEV abgelehnt'),
}
const datevTitle = (s: string): string => DATEV_TITLE[s] ?? ''

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

async function duplicate(id: number) {
	error.value = ''
	try {
		const draft = await store.duplicate(id)
		router.push({ name: 'invoice-detail', params: { id: String(draft.id) } })
	} catch (e) {
		error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Duplizieren fehlgeschlagen')
	}
}
</script>
