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

		<div v-else-if="store.invoices.length > 0">
			<div class="rw-filterbar">
				<button v-for="f in FILTERS" :key="f.key"
					:class="['rw-chip', { 'rw-chip--active': filter === f.key, 'rw-chip--overdue': f.key === 'overdue' }]"
					@click="filter = f.key">
					{{ t('rechnungswerk', f.label) }} <span class="rw-chip__n">{{ counts[f.key] }}</span>
				</button>
				<span v-if="openTotalCents > 0" class="rw-chip rw-chip--sum">
					{{ t('rechnungswerk', 'Offen gesamt:') }} <strong>{{ formatCents(openTotalCents) }}</strong>
				</span>
			</div>

			<div class="rw-table-wrap">
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
										<div v-if="datevFeatureActive" class="rw-info-popup__group">
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
						<th class="rw-col-paid">{{ t('rechnungswerk', 'Bezahlt') }}</th>
						<th class="rw-col-actions"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="inv in filteredInvoices" :key="inv.id"
						:class="['rw-row-clickable', { 'rw-row--overdue': inv.paymentStatus === 'overdue' }]"
						@click="openInvoice(inv.id)">
						<td>
							<span class="rw-status-cell">
								<component :is="statusIcon(inv.status)" :size="20" :class="['rw-sicon', `rw-sicon--${inv.status}`]" :title="statusLabel(inv.status)" />
								<component :is="datevIcon(inv.datevStatus)" v-if="datevFeatureActive && inv.datevStatus && datevIcon(inv.datevStatus)" :size="18" :class="['rw-sicon', `rw-sicon--datev-${inv.datevStatus}`]" :title="datevTitle(inv.datevStatus)" />
							</span>
						</td>
						<td>
							{{ inv.number ?? t('rechnungswerk', '(Entwurf)') }}
							<span v-if="inv.invoiceType !== 'invoice'" v-tooltip="typeTooltip(inv)" class="rw-pill">{{ typeLabel(inv.invoiceType) }}</span>
						</td>
						<td>{{ inv.recipientName ?? '—' }}</td>
						<td>{{ formatDate(inv.issueDate ?? inv.createdAt) }}</td>
						<td class="num">
							<span :class="amountClass(inv)">{{ formatCents(inv.totalCents) }}</span>
							<div v-if="paymentSubline(inv)" :class="['rw-subline', { 'rw-subline--overdue': inv.paymentStatus === 'overdue' }]">{{ paymentSubline(inv) }}</div>
						</td>
						<td class="rw-col-paid">
							<button v-if="inv.paymentStatus"
								:class="['rw-paybox', inv.paymentStatus === 'paid' ? 'rw-paybox--paid' : 'rw-paybox--open']"
								:aria-label="paidToggleLabel(inv)"
								:title="paidToggleTitle(inv)"
								@click.stop="togglePaid(inv)">
								<component :is="inv.paymentStatus === 'paid' ? CheckboxMarkedIcon : CheckboxBlankOutlineIcon" :size="22" />
							</button>
						</td>
						<td class="rw-col-actions">
							<div class="rw-actions">
								<NcButton v-if="inv.invoiceType !== 'cancellation'"
									type="tertiary"
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
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
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
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import CheckboxMarkedIcon from 'vue-material-design-icons/CheckboxMarked.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { downloadInvoicePdf } from '@/api/invoices'
import { INVOICE_STATUS_LABELS, INVOICE_TYPE_LABELS, type Invoice, type InvoiceStatus, type InvoiceType } from '@/types/api'
import { formatCents } from '@/utils/money'

const router = useRouter()
const store = useInvoiceStore()
const settingsStore = useSettingsStore()
const error = ref('')

// The DATEV confirmation poller (DatevConfirmationService::poll) only runs when
// an IMAP host is configured; without it a "pending" status would hang forever.
// So the DATEV column/legend only make sense when the feature is actually set up.
const datevFeatureActive = computed(() => !!settingsStore.settings?.imapHost)

// --- Payment tracking / filtering (#117) --------------------------------
type PaymentFilter = 'all' | 'open' | 'overdue' | 'paid'
const FILTERS: { key: PaymentFilter, label: string }[] = [
	{ key: 'all', label: 'Alle' },
	{ key: 'open', label: 'Offen' },
	{ key: 'overdue', label: 'Überfällig' },
	{ key: 'paid', label: 'Bezahlt' },
]
const filter = ref<PaymentFilter>('all')

const isOpen = (inv: Invoice): boolean => inv.paymentStatus === 'unpaid' || inv.paymentStatus === 'overdue'

const counts = computed<Record<PaymentFilter, number>>(() => {
	const c: Record<PaymentFilter, number> = { all: store.invoices.length, open: 0, overdue: 0, paid: 0 }
	for (const inv of store.invoices) {
		if (isOpen(inv)) { c.open++ }
		if (inv.paymentStatus === 'overdue') { c.overdue++ }
		if (inv.paymentStatus === 'paid') { c.paid++ }
	}
	return c
})

const openTotalCents = computed(() =>
	store.invoices.reduce((sum, inv) => sum + (isOpen(inv) ? inv.totalCents : 0), 0))

const filteredInvoices = computed(() => {
	switch (filter.value) {
	case 'open': return store.invoices.filter(isOpen)
	case 'overdue': return store.invoices.filter(inv => inv.paymentStatus === 'overdue')
	case 'paid': return store.invoices.filter(inv => inv.paymentStatus === 'paid')
	default: return store.invoices
	}
})

const MS_PER_DAY = 86_400_000

/**
 * Parse a "Y-m-d" date-only string at local noon so it never shifts a day in
 * timezones west of UTC (see the same fix in InvoiceEditorView.vue); full ISO
 * timestamps (e.g. paidAt) already carry an offset and parse as-is.
 */
function parseLocalDate(iso: string): Date {
	return iso.length === 10 ? new Date(`${iso}T12:00:00`) : new Date(iso)
}

/** Whole-day difference (date-only) between an ISO date and today; positive = future. */
function daysFromToday(iso: string): number {
	const d = parseLocalDate(iso)
	d.setHours(0, 0, 0, 0)
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	return Math.round((d.getTime() - today.getTime()) / MS_PER_DAY)
}

function shortDate(iso: string | null): string {
	if (!iso) {
		return ''
	}
	return parseLocalDate(iso).toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' })
}

const amountClass = (inv: Invoice): string =>
	inv.paymentStatus === 'overdue' ? 'rw-amt-overdue' : (inv.paymentStatus === 'paid' ? 'rw-amt-paid' : '')

/** Secondary line under the amount: due/overdue info, or the payment date. */
function paymentSubline(inv: Invoice): string {
	if (inv.paymentStatus === 'paid') {
		return inv.paidAt
			? t('rechnungswerk', 'bezahlt am {date}', { date: shortDate(inv.paidAt) })
			: t('rechnungswerk', 'bezahlt')
	}
	if (!inv.dueDate) {
		return ''
	}
	const days = daysFromToday(inv.dueDate)
	if (inv.paymentStatus === 'overdue') {
		const overdue = -days
		return overdue === 1
			? t('rechnungswerk', '1 Tag überfällig')
			: t('rechnungswerk', '{days} Tage überfällig', { days: String(overdue) })
	}
	if (inv.paymentStatus === 'unpaid') {
		if (days <= 0) {
			return t('rechnungswerk', 'fällig heute')
		}
		return days === 1
			? t('rechnungswerk', 'fällig morgen ({date})', { date: shortDate(inv.dueDate) })
			: t('rechnungswerk', 'fällig in {days} Tagen ({date})', { days: String(days), date: shortDate(inv.dueDate) })
	}
	return ''
}

const paidToggleLabel = (inv: Invoice): string =>
	inv.paymentStatus === 'paid' ? t('rechnungswerk', 'Als unbezahlt markieren') : t('rechnungswerk', 'Als bezahlt markieren')

function paidToggleTitle(inv: Invoice): string {
	if (inv.paymentStatus === 'paid') {
		return inv.paidAt
			? t('rechnungswerk', 'Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen', { date: shortDate(inv.paidAt) })
			: t('rechnungswerk', 'Bezahlt – klicken, um die Zahlung zurückzunehmen')
	}
	return t('rechnungswerk', 'Als bezahlt markieren')
}

async function togglePaid(inv: Invoice) {
	error.value = ''
	try {
		if (inv.paymentStatus === 'paid') {
			await store.markUnpaid(inv.id)
		} else {
			await store.markPaid(inv.id)
		}
	} catch (e) {
		error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Zahlungsstatus konnte nicht geändert werden')
	}
}

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
	// Best-effort: decides whether the DATEV status column is shown. A failure
	// here must not block the invoice list, so it is silently ignored.
	settingsStore.fetch().catch(() => { /* DATEV column stays hidden */ })
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
