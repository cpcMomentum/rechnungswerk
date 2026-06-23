<template>
	<div class="rw-view">
		<div class="rw-editor-head">
			<NcBreadcrumbs>
				<NcBreadcrumb :name="t('rechnungswerk', 'Rechnungen')" :to="{ name: 'invoices' }" />
				<NcBreadcrumb :name="headerTitle" />
			</NcBreadcrumbs>
			<span v-if="invoice" class="rw-status-group">
				<span :class="['rw-chip', `rw-chip--${invoice.status}`]">{{ statusLabel }}</span>
				<span v-if="invoice.invoiceType !== 'invoice'" v-tooltip="typeTooltip" class="rw-pill">{{ typeLabel }}</span>
			</span>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />
		<NcNoteCard v-if="notice" type="success" :text="notice" />
		<NcNoteCard v-if="readonly" type="info"
			:text="t('rechnungswerk', 'Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.')" />

		<!-- Rechnungsdaten -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Rechnungsdaten') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Rechnungsnummer') }}</span>
					<input class="rw-input" type="text" readonly :value="invoice?.number ?? t('rechnungswerk', '(wird beim Festschreiben vergeben)')" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Leistungsdatum') }}</span>
					<input v-model="form.performanceDate" class="rw-input" type="date" :readonly="readonly" /></label>
			</div>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Leistungszeitraum von') }}</span>
					<input v-model="form.performancePeriodStart" class="rw-input" type="date" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Leistungszeitraum bis') }}</span>
					<input v-model="form.performancePeriodEnd" class="rw-input" type="date" :readonly="readonly" /></label>
			</div>
			<p class="rw-hint">{{ t('rechnungswerk', 'Pflichtangabe nach § 14 UStG: Leistungsdatum ODER Leistungszeitraum. Ein gesetzter Zeitraum (von + bis) hat Vorrang vor dem Einzeldatum.') }}</p>
			<details class="more">
				<summary>{{ t('rechnungswerk', 'Weitere Felder (Referenz, Bestellnummer, Leitweg-ID)') }}</summary>
				<div class="rw-form-row">
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Referenznummer') }}</span>
						<input v-model="form.referenceNumber" class="rw-input" type="text" :readonly="readonly" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Bestellnummer') }}</span>
						<input v-model="form.orderNumber" class="rw-input" type="text" :readonly="readonly" /></label>
					<label class="rw-field"><span>{{ t('rechnungswerk', 'Käuferreferenz / Leitweg-ID (BT-10)') }}</span>
						<input v-model="form.buyerReference" class="rw-input" type="text" :readonly="readonly"
							:placeholder="t('rechnungswerk', 'nur für öffentliche Auftraggeber')" /></label>
				</div>
			</details>
		</section>

		<!-- Empfänger -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Empfänger') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Name') }}</span>
					<ContactPicker v-if="!readonly" v-model="form.recipientName" @select="onContactSelect" />
					<input v-else class="rw-input" type="text" readonly :value="form.recipientName" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'E-Mail') }}</span>
					<input v-model="form.recipientEmail" class="rw-input" type="email" :readonly="readonly" /></label>
			</div>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Straße') }}</span>
					<input v-model="form.recipientAddress" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'PLZ') }}</span>
					<input v-model="form.recipientPostalCode" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Ort') }}</span>
					<input v-model="form.recipientCity" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field rw-field--narrow"><span>{{ t('rechnungswerk', 'Land') }}</span>
					<input v-model="form.recipientCountry" class="rw-input" type="text" :readonly="readonly" /></label>
			</div>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'USt-IdNr. (optional)') }}</span>
					<input v-model="form.recipientVatId" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Ansprechpartner (optional)') }}</span>
					<input v-model="form.recipientContactPerson" class="rw-input" type="text" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Telefon (optional)') }}</span>
					<input v-model="form.recipientPhone" class="rw-input" type="text" :readonly="readonly" /></label>
			</div>
		</section>

		<!-- Einleitung (vor den Positionen) -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Einleitung') }}</h3>
			<label class="rw-field"><span>{{ t('rechnungswerk', 'Einleitungstext') }}</span>
				<textarea v-model="form.greeting" class="rw-input" rows="2" :readonly="readonly"
					:placeholder="t('rechnungswerk', 'Anrede und Einleitung – Vorgabe aus den Einstellungen')" /></label>
		</section>

		<!-- Positionen -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Positionen') }}</h3>
			<InvoiceItemsTable
				v-model:items="items"
				:products="productStore.products"
				:readonly="readonly"
				:small-business="settingsStore.settings?.smallBusiness ?? false"
				:default-tax-rate-bp="settingsStore.settings?.defaultTaxRateBp ?? 1900" />
		</section>

		<!-- Steuer & Summen -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Steuer & Summen') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Steuerfall') }}</span>
					<select v-model="form.specialTaxCase" class="rw-input" :disabled="readonly">
						<option value="">{{ t('rechnungswerk', 'Regelbesteuerung') }}</option>
						<option value="reverse_charge">{{ t('rechnungswerk', 'Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)') }}</option>
						<option value="intra_community">{{ t('rechnungswerk', 'Innergemeinschaftliche Lieferung (steuerfrei)') }}</option>
						<option value="export">{{ t('rechnungswerk', 'Ausfuhrlieferung Drittland (steuerfrei)') }}</option>
					</select></label>
				<span class="rw-field" aria-hidden="true" />
			</div>
			<NcNoteCard v-if="form.specialTaxCase !== ''" type="info"
				:text="t('rechnungswerk', 'Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.')" />
			<div class="rw-totals">
				<div class="rw-kpi-card">
					<div class="rw-kpi-row">
						<span>{{ t('rechnungswerk', 'Zwischensumme (netto)') }}</span>
						<strong>{{ formatCents(totals.subtotalCents) }}</strong>
					</div>
					<div v-for="row in totals.taxBreakdown" :key="row.rateBp" class="rw-kpi-row rw-kpi-row--muted">
						<span>{{ t('rechnungswerk', 'USt {rate}', { rate: formatTaxRate(row.rateBp) }) }} ({{ formatCents(row.netCents) }})</span>
						<span>{{ formatCents(row.taxCents) }}</span>
					</div>
					<div class="rw-kpi-row rw-kpi-row--grand">
						<span>{{ t('rechnungswerk', 'Gesamt (brutto)') }}</span>
						<strong>{{ formatCents(totals.totalCents) }}</strong>
					</div>
				</div>
			</div>
		</section>

		<!-- Zahlungsbedingungen -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Zahlungsbedingungen') }}</h3>
			<div class="rw-form-row">
				<label class="rw-field payterm-days"><span>{{ t('rechnungswerk', 'Zahlungsziel (Tage)') }}</span>
					<input v-model="form.paymentTermDays" class="rw-input" type="number" min="0" step="1" :readonly="readonly" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Fällig am') }}</span>
					<input class="rw-input" type="text" readonly :value="dueDatePreview || '—'" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Skonto') }}</span>
					<input v-model="form.discountTerms" class="rw-input" type="text" :readonly="readonly"
						:placeholder="t('rechnungswerk', 'z. B. 2 % bei Zahlung bis …')" /></label>
			</div>
		</section>

		<!-- Schlusstext -->
		<section class="rw-section">
			<h3>{{ t('rechnungswerk', 'Schlusstext') }}</h3>
			<label class="rw-field"><span>{{ t('rechnungswerk', 'Schlusstext / Anmerkungen') }}</span>
				<textarea v-model="form.extraText" class="rw-input" rows="2" :readonly="readonly" /></label>
		</section>

		<!-- Sticky actions -->
		<div class="rw-action-bar">
			<template v-if="!readonly">
				<NcButton :disabled="saving" @click="save()">{{ t('rechnungswerk', 'Speichern') }}</NcButton>
				<NcButton variant="primary" :disabled="saving" @click="askFinalize">
					<template #icon><LockIcon :size="20" /></template>
					{{ t('rechnungswerk', 'Festschreiben') }}
				</NcButton>
				<NcButton v-if="invoice" variant="error" :disabled="saving" @click="askDelete">
					{{ t('rechnungswerk', 'Löschen') }}
				</NcButton>
			</template>
			<template v-else-if="invoice">
				<NcButton @click="downloadPdf">
					<template #icon><DownloadIcon :size="20" /></template>
					{{ t('rechnungswerk', 'PDF herunterladen') }}
				</NcButton>
				<NcButton variant="primary" :disabled="sending" @click="sendDialogOpen = true">
					<template #icon><SendIcon :size="20" /></template>
					{{ t('rechnungswerk', 'An Kunde senden') }}
				</NcButton>
				<NcButton v-if="invoice.status === 'committed'" variant="error" :disabled="saving" @click="askCancel">
					{{ t('rechnungswerk', 'Stornieren') }}
				</NcButton>
			</template>
		</div>

		<ConfirmDialog :open="dialog === 'finalize'"
			:name="t('rechnungswerk', 'Rechnung festschreiben')"
			:message="finalizeMessage"
			:confirm-label="t('rechnungswerk', 'Festschreiben')"
			@close="dialog = null" @confirm="doFinalize" />
		<ConfirmDialog :open="dialog === 'delete'"
			:name="t('rechnungswerk', 'Entwurf löschen')"
			:message="t('rechnungswerk', 'Diesen Entwurf wirklich löschen?')"
			:confirm-label="t('rechnungswerk', 'Löschen')" destructive
			@close="dialog = null" @confirm="doDelete" />
		<ConfirmDialog :open="dialog === 'cancel'"
			:name="t('rechnungswerk', 'Rechnung stornieren')"
			:message="t('rechnungswerk', 'Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?')"
			:confirm-label="t('rechnungswerk', 'Stornieren')" destructive
			@close="dialog = null" @confirm="doCancel" />

		<SendInvoiceDialog
			:open="sendDialogOpen"
			:invoice="invoice"
			:default-body="defaultMailBody"
			:saving="sending"
			@close="sendDialogOpen = false"
			@send="doSend" />
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcBreadcrumbs from '@nextcloud/vue/components/NcBreadcrumbs'
import NcBreadcrumb from '@nextcloud/vue/components/NcBreadcrumb'
import LockIcon from 'vue-material-design-icons/Lock.vue'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import SendIcon from 'vue-material-design-icons/Send.vue'
import ContactPicker from '@/components/ContactPicker.vue'
import InvoiceItemsTable from '@/components/InvoiceItemsTable.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import SendInvoiceDialog from '@/components/SendInvoiceDialog.vue'
import { useInvoiceStore } from '@/stores/invoiceStore'
import { useProductStore } from '@/stores/productStore'
import { useSettingsStore } from '@/stores/settingsStore'
import { INVOICE_STATUS_LABELS, INVOICE_TYPE_LABELS, type ContactMatch, type InvoiceDetail } from '@/types/api'
import { emptyItem, itemFromInvoiceItem, type EditorItem } from '@/types/editor'
import { formatCents, formatTaxRate, euroInputToCents } from '@/utils/money'
import { computeTotals, lineTotalCents } from '@/utils/invoiceCalc'
import { downloadInvoicePdf, sendInvoice, type InvoiceInput } from '@/api/invoices'

const props = defineProps<{ id?: string }>()
const router = useRouter()
const invoiceStore = useInvoiceStore()
const productStore = useProductStore()
const settingsStore = useSettingsStore()

const invoice = ref<InvoiceDetail | null>(null)
const items = ref<EditorItem[]>([emptyItem()])
const error = ref('')
const notice = ref('')
const saving = ref(false)
const sending = ref(false)
const sendDialogOpen = ref(false)
const dialog = ref<'finalize' | 'delete' | 'cancel' | null>(null)

const form = reactive({
	recipientName: '', recipientEmail: '', recipientAddress: '', recipientPostalCode: '',
	recipientCity: '', recipientCountry: 'DE', recipientVatId: '', recipientContactId: '',
	recipientContactPerson: '', recipientPhone: '',
	performanceDate: '', performancePeriodStart: '', performancePeriodEnd: '',
	referenceNumber: '', orderNumber: '', buyerReference: '', specialTaxCase: '',
	greeting: '', extraText: '',
	paymentTermDays: '' as string | number, discountTerms: '',
})

const TAX_EXEMPT_CASES = ['reverse_charge', 'intra_community', 'export']
const taxExempt = computed(() =>
	(settingsStore.settings?.smallBusiness ?? false) || TAX_EXEMPT_CASES.includes(form.specialTaxCase))

const dueDatePreview = computed(() => {
	const days = Number.parseInt(String(form.paymentTermDays), 10)
	if (Number.isNaN(days)) {
		return ''
	}
	// Parse "Y-m-d" at local noon so the preview never shifts a day in
	// timezones west of UTC (the real due date is computed server-side anyway).
	const atLocalNoon = (ymd: string): Date => new Date(`${ymd}T12:00:00`)
	if (invoice.value?.dueDate) {
		return atLocalNoon(invoice.value.dueDate).toLocaleDateString()
	}
	const base = invoice.value?.issueDate ? atLocalNoon(invoice.value.issueDate) : new Date()
	base.setDate(base.getDate() + days)
	return base.toLocaleDateString()
})

const readonly = computed(() => invoice.value !== null && invoice.value.status !== 'draft')
const statusLabel = computed(() => invoice.value ? t('rechnungswerk', INVOICE_STATUS_LABELS[invoice.value.status]) : '')
const typeLabel = computed(() => invoice.value ? t('rechnungswerk', INVOICE_TYPE_LABELS[invoice.value.invoiceType]) : '')
const typeTooltip = computed(() => {
	if (!invoice.value) {
		return ''
	}
	return invoice.value.relatedNumber
		? t('rechnungswerk', '{type} zu Rechnung {number}', { type: typeLabel.value, number: invoice.value.relatedNumber })
		: typeLabel.value
})

const finalizeMessage = computed(() => {
	let msg = t('rechnungswerk', 'Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?')
	const s = settingsStore.settings
	if (s?.datevAutoSend && s.datevUploadMail) {
		msg += '\n\n' + t('rechnungswerk', 'Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.', { mail: s.datevUploadMail })
	}
	return msg
})

const defaultMailBody = computed(() => {
	const s = settingsStore.settings
	const greeting = (invoice.value?.greeting ?? s?.greetingDefault ?? '').trim()
	const intro = (s?.introDefault ?? '').trim()
	const closing = (s?.closingDefault ?? '').trim()
	const parts = [
		greeting,
		intro !== '' ? intro : t('rechnungswerk', 'anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).'),
		closing,
	].filter(p => p !== '')
	return parts.join('\n\n')
})
const headerTitle = computed(() => invoice.value
	? (invoice.value.number ?? t('rechnungswerk', 'Entwurf'))
	: t('rechnungswerk', 'Neue Rechnung'))

const totals = computed(() => computeTotals(items.value.map(i => ({
	taxRateBp: i.taxRateBp,
	lineTotalCents: lineTotalCents(i.quantity, euroInputToCents(i.priceInput)),
})), taxExempt.value))

onMounted(async () => {
	try {
		await Promise.all([productStore.fetchAll(), settingsStore.fetch()])
		if (props.id) {
			await load(Number(props.id))
		} else {
			form.greeting = settingsStore.settings?.greetingDefault ?? ''
			form.extraText = settingsStore.settings?.closingDefault ?? ''
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Laden fehlgeschlagen'))
	}
})

async function load(id: number) {
	const detail = await invoiceStore.get(id)
	invoice.value = detail
	form.recipientName = detail.recipientName ?? ''
	form.recipientEmail = detail.recipientEmail ?? ''
	form.recipientAddress = detail.recipientAddress ?? ''
	form.recipientPostalCode = detail.recipientPostalCode ?? ''
	form.recipientCity = detail.recipientCity ?? ''
	form.recipientCountry = detail.recipientCountry ?? 'DE'
	form.recipientVatId = detail.recipientVatId ?? ''
	form.recipientContactId = detail.recipientContactId ?? ''
	form.recipientContactPerson = detail.recipientContactPerson ?? ''
	form.recipientPhone = detail.recipientPhone ?? ''
	form.performanceDate = detail.performanceDate ?? ''
	form.performancePeriodStart = detail.performancePeriodStart ?? ''
	form.performancePeriodEnd = detail.performancePeriodEnd ?? ''
	form.referenceNumber = detail.referenceNumber ?? ''
	form.orderNumber = detail.orderNumber ?? ''
	form.buyerReference = detail.buyerReference ?? ''
	form.specialTaxCase = detail.specialTaxCase ?? ''
	form.greeting = detail.greeting ?? ''
	form.extraText = detail.extraText ?? ''
	form.paymentTermDays = detail.paymentTermDays ?? ''
	form.discountTerms = detail.discountTerms ?? ''
	items.value = detail.items.length > 0 ? detail.items.map(itemFromInvoiceItem) : [emptyItem()]
}

function onContactSelect(c: ContactMatch) {
	form.recipientName = c.name
	form.recipientEmail = c.email
	if (c.phone) {
		form.recipientPhone = c.phone
	}
	form.recipientAddress = c.address
	form.recipientPostalCode = c.postalCode
	form.recipientCity = c.city
	if (c.country) {
		form.recipientCountry = c.country
	}
}

function buildInput(): InvoiceInput {
	return {
		...form,
		paymentTermDays: form.paymentTermDays === '' ? null : Number(form.paymentTermDays),
		items: items.value
			.filter(i => i.name.trim() !== '')
			.map(i => ({
				productId: i.productId,
				name: i.name.trim(),
				description: i.description.trim() === '' ? null : i.description.trim(),
				quantity: String(i.quantity).replace(',', '.'),
				unitCode: i.unitCode,
				unitPriceCents: euroInputToCents(i.priceInput),
				taxRateBp: i.taxRateBp,
			})),
	}
}

async function save(): Promise<InvoiceDetail | null> {
	error.value = ''
	saving.value = true
	try {
		let detail: InvoiceDetail
		if (invoice.value) {
			detail = await invoiceStore.update(invoice.value.id, buildInput())
		} else {
			detail = await invoiceStore.create(buildInput())
			router.replace({ name: 'invoice-detail', params: { id: String(detail.id) } })
		}
		invoice.value = detail
		return detail
	} catch (e) {
		fail(e, t('rechnungswerk', 'Speichern fehlgeschlagen'))
		return null
	} finally {
		saving.value = false
	}
}

function askFinalize() {
	dialog.value = 'finalize'
}
function askDelete() {
	dialog.value = 'delete'
}
function askCancel() {
	dialog.value = 'cancel'
}

function downloadPdf() {
	if (!invoice.value) {
		return
	}
	downloadInvoicePdf(invoice.value.id)
}

async function doFinalize() {
	dialog.value = null
	const saved = await save()
	if (!saved) {
		return
	}
	saving.value = true
	try {
		const committed = await invoiceStore.commit(saved.id)
		invoice.value = committed
		notice.value = ''
		// The commit response carries a transient DATEV hand-off result that is
		// not part of the persisted invoice — surface it as feedback.
		const datevMailSent = (committed as InvoiceDetail & { datevMailSent?: boolean | null }).datevMailSent
		if (datevMailSent === true) {
			notice.value = t('rechnungswerk', 'Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.')
		} else if (datevMailSent === null) {
			error.value = t('rechnungswerk', 'Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden.')
		}
	} catch (e) {
		fail(e, t('rechnungswerk', 'Festschreiben fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doSend(data: { to: string, subject: string, body: string }) {
	if (!invoice.value) {
		return
	}
	sending.value = true
	error.value = ''
	try {
		await sendInvoice(invoice.value.id, data)
		sendDialogOpen.value = false
		notice.value = t('rechnungswerk', 'Rechnung an {to} gesendet.', { to: data.to })
	} catch (e) {
		fail(e, t('rechnungswerk', 'Versand fehlgeschlagen'))
	} finally {
		sending.value = false
	}
}

async function doDelete() {
	dialog.value = null
	if (!invoice.value) {
		backToList()
		return
	}
	saving.value = true
	try {
		await invoiceStore.remove(invoice.value.id)
		backToList()
	} catch (e) {
		fail(e, t('rechnungswerk', 'Löschen fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

async function doCancel() {
	dialog.value = null
	if (!invoice.value) {
		return
	}
	saving.value = true
	try {
		const storno = await invoiceStore.cancel(invoice.value.id)
		await load(storno.id)
	} catch (e) {
		fail(e, t('rechnungswerk', 'Stornieren fehlgeschlagen'))
	} finally {
		saving.value = false
	}
}

function backToList() {
	router.push({ name: 'invoices' })
}

function fail(e: unknown, fallback: string) {
	error.value = (e as { message?: string }).message ?? fallback
	console.error('[rechnungswerk] editor:', e)
}
</script>

<style scoped>
/* Layout/cards/inputs/chips live in the shared src/css/app.css. Only the
   editor-specific header and the optional-fields disclosure stay local. */
.rw-editor-head {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
	margin-bottom: 16px;
}
.rw-editor-head :deep(.breadcrumb) {
	flex: 1 1 auto;
	min-width: 0;
}
.more {
	margin-top: 8px;
}
.more summary {
	cursor: pointer;
	color: var(--color-text-maxcontrast);
}
/* Keep the "Zahlungsziel (Tage)" label on one line so the field stays aligned
   with the neighbouring boxes. */
.payterm-days {
	flex: 0 0 170px;
}
.payterm-days > span {
	white-space: nowrap;
}
</style>
