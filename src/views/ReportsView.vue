<template>
	<div class="rw-view">
		<div class="rw-view__head">
			<h2>{{ t('rechnungswerk', 'Berichte') }}</h2>
			<div class="rw-report-export">
				<NcButton variant="primary" :disabled="!canExport" @click="exportAs('csv')">
					<template #icon><FileDelimitedIcon :size="20" /></template>
					{{ t('rechnungswerk', 'CSV-Export') }}
				</NcButton>
				<NcButton variant="primary" :disabled="!canExport" @click="exportAs('pdf')">
					<template #icon><FilePdfBoxIcon :size="20" /></template>
					{{ t('rechnungswerk', 'PDF-Export') }}
				</NcButton>
			</div>
		</div>

		<div class="rw-filterbar">
			<button v-for="k in KINDS" :key="k.key"
				:class="['rw-chip', { 'rw-chip--active': kind === k.key }]"
				@click="setKind(k.key)">
				{{ t('rechnungswerk', k.label) }}
			</button>
		</div>

		<div v-if="kind === 'custom'" class="rw-report-period">
			<input v-model="customFrom" type="date" class="rw-input rw-report-date"
				:aria-label="t('rechnungswerk', 'Von')">
			<span>–</span>
			<input v-model="customTo" type="date" class="rw-input rw-report-date"
				:aria-label="t('rechnungswerk', 'Bis')">
		</div>
		<div v-else class="rw-report-period">
			<NcButton variant="tertiary" :aria-label="t('rechnungswerk', 'Vorheriger Zeitraum')"
				:title="t('rechnungswerk', 'Vorheriger Zeitraum')" @click="shift(-1)">
				<template #icon><ChevronLeftIcon :size="20" /></template>
			</NcButton>
			<div class="rw-report-period__label">
				<strong>{{ periodLabel }}</strong>
				<span class="rw-muted">{{ rangeLabel }}</span>
			</div>
			<NcButton variant="tertiary" :aria-label="t('rechnungswerk', 'Nächster Zeitraum')"
				:title="t('rechnungswerk', 'Nächster Zeitraum')" @click="shift(1)">
				<template #icon><ChevronRightIcon :size="20" /></template>
			</NcButton>
			<NcButton v-if="!isCurrentPeriod" variant="tertiary" @click="setKind(kind)">
				{{ t('rechnungswerk', 'Heute') }}
			</NcButton>
		</div>

		<div class="rw-filterbar">
			<button v-for="b in BASES" :key="b.key"
				:class="['rw-chip', { 'rw-chip--active': basis === b.key }]"
				@click="basis = b.key">
				{{ t('rechnungswerk', b.label) }}
			</button>
			<span class="rw-chip rw-chip--sum">{{ basisHint }}</span>
		</div>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<NcLoadingIcon v-if="loading && !report" :size="44" class="rw-report-loading" />

		<template v-if="report">
			<div :class="['rw-report-cards', { 'rw-report--stale': loading }]">
				<div class="rw-report-card">
					<span class="rw-report-card__label">{{ t('rechnungswerk', 'Netto') }}</span>
					<span class="rw-report-card__value">{{ formatCents(report.totals.netCents) }}</span>
				</div>
				<div class="rw-report-card">
					<span class="rw-report-card__label">{{ t('rechnungswerk', 'USt') }}</span>
					<span class="rw-report-card__value">{{ formatCents(report.totals.taxCents) }}</span>
				</div>
				<div class="rw-report-card">
					<span class="rw-report-card__label">{{ t('rechnungswerk', 'Brutto') }}</span>
					<span class="rw-report-card__value">{{ formatCents(report.totals.grossCents) }}</span>
				</div>
				<div class="rw-report-card">
					<span class="rw-report-card__label">{{ t('rechnungswerk', 'Belege') }}</span>
					<span class="rw-report-card__value">{{ report.totals.count }}</span>
				</div>
			</div>

			<NcEmptyContent v-if="report.rows.length === 0"
				:name="t('rechnungswerk', 'Keine Belege im Zeitraum.')"
				:description="emptyHint">
				<template #icon><ChartBarIcon :size="20" /></template>
			</NcEmptyContent>

			<div v-else :class="{ 'rw-report--stale': loading }">
				<h3 class="rw-report-h">{{ t('rechnungswerk', 'Nach Steuersatz') }}</h3>
				<div class="rw-table-wrap">
					<table class="rw-table">
						<thead>
							<tr>
								<th>{{ t('rechnungswerk', 'Steuerfall') }}</th>
								<th class="num">{{ t('rechnungswerk', 'Netto') }}</th>
								<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
								<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="g in report.taxGroups" :key="`${g.category}:${g.rateBp}`">
								<td>{{ g.label }}</td>
								<td class="num">{{ formatCents(g.netCents) }}</td>
								<td class="num">{{ formatCents(g.taxCents) }}</td>
								<td class="num">{{ formatCents(g.netCents + g.taxCents) }}</td>
							</tr>
							<tr class="rw-report-sum">
								<td>{{ t('rechnungswerk', 'Summe') }}</td>
								<td class="num">{{ formatCents(report.totals.netCents) }}</td>
								<td class="num">{{ formatCents(report.totals.taxCents) }}</td>
								<td class="num">{{ formatCents(report.totals.grossCents) }}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<template v-if="report.months.length > 1">
					<h3 class="rw-report-h">{{ t('rechnungswerk', 'Nach Monat') }}</h3>
					<div class="rw-table-wrap">
						<table class="rw-table">
							<thead>
								<tr>
									<th>{{ t('rechnungswerk', 'Monat') }}</th>
									<th class="num">{{ t('rechnungswerk', 'Belege') }}</th>
									<th class="num">{{ t('rechnungswerk', 'Netto') }}</th>
									<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
									<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="m in report.months" :key="m.month">
									<td>{{ monthLabel(m.month) }}</td>
									<td class="num">{{ m.count }}</td>
									<td class="num">{{ formatCents(m.netCents) }}</td>
									<td class="num">{{ formatCents(m.taxCents) }}</td>
									<td class="num">{{ formatCents(m.grossCents) }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</template>

				<h3 class="rw-report-h">{{ t('rechnungswerk', 'Belege') }}</h3>
				<div class="rw-table-wrap">
					<table class="rw-table">
						<thead>
							<tr>
								<th>{{ basis === 'payment' ? t('rechnungswerk', 'Zahldatum') : t('rechnungswerk', 'Rechnungsdatum') }}</th>
								<th>{{ t('rechnungswerk', 'Nummer') }}</th>
								<th>{{ t('rechnungswerk', 'Empfänger') }}</th>
								<th class="num">{{ t('rechnungswerk', 'Netto') }}</th>
								<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
								<th class="num">{{ t('rechnungswerk', 'Brutto') }}</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="row in report.rows" :key="row.id" class="rw-row-clickable" @click="openInvoice(row.id)">
								<td>{{ dayLabel(row.date) }}</td>
								<td>
									{{ row.number }}
									<span v-if="row.invoiceType === 'cancellation'" class="rw-pill">{{ t('rechnungswerk', 'Storno') }}</span>
									<span v-else-if="row.status === 'cancelled'" class="rw-pill">{{ t('rechnungswerk', 'Storniert') }}</span>
								</td>
								<td>
									{{ row.recipientName ?? '—' }}
									<div v-if="row.taxLabel" class="rw-subline">{{ row.taxLabel }}</div>
								</td>
								<td class="num">{{ formatCents(row.netCents) }}</td>
								<td class="num">{{ formatCents(row.taxCents) }}</td>
								<td class="num">{{ formatCents(row.grossCents) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import ChartBarIcon from 'vue-material-design-icons/ChartBar.vue'
import ChevronLeftIcon from 'vue-material-design-icons/ChevronLeft.vue'
import ChevronRightIcon from 'vue-material-design-icons/ChevronRight.vue'
import FileDelimitedIcon from 'vue-material-design-icons/FileDelimited.vue'
import FilePdfBoxIcon from 'vue-material-design-icons/FilePdfBox.vue'
import { downloadReport, getReport, type ReportQuery } from '@/api/reports'
import type { Report, ReportBasis } from '@/types/api'
import { formatCents } from '@/utils/money'
import { isoWeek, parseIsoDay, periodContaining, quarterOf, shiftPeriod, type DateRange, type PeriodKind } from '@/utils/reportPeriod'

type Kind = PeriodKind | 'custom'

const KINDS: { key: Kind, label: string }[] = [
	{ key: 'year', label: 'Jahr' },
	{ key: 'quarter', label: 'Quartal' },
	{ key: 'month', label: 'Monat' },
	{ key: 'week', label: 'Woche' },
	{ key: 'custom', label: 'Zeitraum' },
]
const BASES: { key: ReportBasis, label: string }[] = [
	{ key: 'issue', label: 'Nach Rechnungsdatum' },
	{ key: 'payment', label: 'Nach Zahlungseingang' },
]

const router = useRouter()
const kind = ref<Kind>('year')
const basis = ref<ReportBasis>('issue')
const range = ref<DateRange>(periodContaining('year', new Date()))
const customFrom = ref(range.value.from)
const customTo = ref(range.value.to)
const report = ref<Report | null>(null)
const loading = ref(false)
const error = ref('')

/** Der Zeitraum, der gerade gilt — oder null, solange die freie Eingabe unvollständig ist. */
const query = computed<ReportQuery | null>(() => {
	if (kind.value !== 'custom') {
		return { ...range.value, basis: basis.value }
	}
	if (!customFrom.value || !customTo.value || customFrom.value > customTo.value) {
		return null
	}
	return { from: customFrom.value, to: customTo.value, basis: basis.value }
})

const canExport = computed(() => query.value !== null && !!report.value && report.value.rows.length > 0)

function setKind(next: Kind) {
	if (next === 'custom') {
		// Mit dem zuletzt gezeigten Zeitraum beginnen statt mit leeren Feldern.
		if (kind.value !== 'custom') {
			customFrom.value = range.value.from
			customTo.value = range.value.to
		}
	} else {
		range.value = periodContaining(next, new Date())
	}
	kind.value = next
}

function shift(delta: number) {
	if (kind.value !== 'custom') {
		range.value = shiftPeriod(kind.value, range.value, delta)
	}
}

const isCurrentPeriod = computed(() =>
	kind.value === 'custom' || range.value.from === periodContaining(kind.value, new Date()).from)

const dayLabel = (iso: string): string => parseIsoDay(iso).toLocaleDateString()

function monthLabel(month: string): string {
	return parseIsoDay(`${month}-01`).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
}

const periodLabel = computed(() => {
	const start = parseIsoDay(range.value.from)
	switch (kind.value) {
	case 'year':
		return String(start.getFullYear())
	case 'quarter':
		return t('rechnungswerk', '{quarter}. Quartal {year}', { quarter: String(quarterOf(start)), year: String(start.getFullYear()) })
	case 'month':
		return monthLabel(range.value.from.slice(0, 7))
	case 'week': {
		const { week, year } = isoWeek(start)
		return t('rechnungswerk', 'KW {week}/{year}', { week: String(week), year: String(year) })
	}
	default:
		return ''
	}
})

const rangeLabel = computed(() => `${dayLabel(range.value.from)} – ${dayLabel(range.value.to)}`)

const basisHint = computed(() => basis.value === 'payment'
	? t('rechnungswerk', 'Was im Zeitraum bezahlt wurde (Ist-Versteuerung, EÜR).')
	: t('rechnungswerk', 'Was im Zeitraum in Rechnung gestellt wurde, Stornos abgezogen.'))

const emptyHint = computed(() => basis.value === 'payment'
	? t('rechnungswerk', 'In diesem Zeitraum ist keine Rechnung als bezahlt markiert.')
	: t('rechnungswerk', 'In diesem Zeitraum wurde keine Rechnung festgeschrieben.'))

// Beim schnellen Blättern kann eine ältere Antwort nach der neueren eintreffen;
// nur die jeweils letzte Anfrage darf die Anzeige setzen.
let requestId = 0

async function load() {
	const q = query.value
	if (q === null) {
		return
	}
	const id = ++requestId
	loading.value = true
	error.value = ''
	try {
		const result = await getReport(q)
		if (id === requestId) {
			report.value = result
		}
	} catch (e) {
		if (id === requestId) {
			report.value = null
			error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Laden fehlgeschlagen')
		}
	} finally {
		if (id === requestId) {
			loading.value = false
		}
	}
}

watch(query, load)
onMounted(load)

function exportAs(format: 'csv' | 'pdf') {
	if (query.value !== null) {
		downloadReport(format, query.value)
	}
}

function openInvoice(id: number) {
	router.push({ name: 'invoice-detail', params: { id: String(id) } })
}
</script>
