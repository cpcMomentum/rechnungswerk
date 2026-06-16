<template>
	<div>
		<div class="rw-card">
			<table class="items-tbl">
				<colgroup>
					<col class="col-name">
					<col class="col-qty">
					<col class="col-unit">
					<col class="col-price">
					<col class="col-tax">
					<col class="col-sum">
					<col v-if="!readonly" class="col-actions">
				</colgroup>
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Bezeichnung') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Menge') }}</th>
						<th>{{ t('rechnungswerk', 'Einheit') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Einzelpreis (€)') }}</th>
						<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Summe netto') }}</th>
						<th v-if="!readonly" />
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, i) in items" :key="i">
						<td>
							<div class="cell-stack">
								<input v-model="item.name" class="input" type="text"
									:readonly="readonly" :placeholder="t('rechnungswerk', 'Leistung')" />
								<input v-model="item.description" class="input input--sub" type="text"
									:readonly="readonly" :placeholder="t('rechnungswerk', 'Beschreibung (optional)')" />
							</div>
						</td>
						<td class="num">
							<input v-model="item.quantity" class="input input--num" type="text"
								inputmode="decimal" :readonly="readonly" />
						</td>
						<td>
							<select v-model="item.unitCode" class="input" :disabled="readonly">
								<option v-for="code in UNIT_CODES" :key="code" :value="code">
									{{ t('rechnungswerk', UNIT_CODE_LABELS[code]) }}
								</option>
							</select>
						</td>
						<td class="num">
							<input v-model="item.priceInput" class="input input--num" type="number"
								step="0.01" :readonly="readonly" />
						</td>
						<td class="num">
							<select v-model.number="item.taxRateBp" class="input" :disabled="readonly || smallBusiness">
								<option v-for="bp in TAX_RATES_BP" :key="bp" :value="bp">{{ formatTaxRate(bp) }}</option>
							</select>
						</td>
						<td class="num strong">{{ formatCents(lineTotal(item)) }}</td>
						<td v-if="!readonly" class="num">
							<NcButton type="tertiary" :aria-label="t('rechnungswerk', 'Position entfernen')" @click="remove(i)">
								<template #icon><DeleteIcon :size="20" /></template>
							</NcButton>
						</td>
					</tr>
					<tr v-if="items.length === 0">
						<td :colspan="readonly ? 6 : 7" class="empty">{{ t('rechnungswerk', 'Noch keine Positionen.') }}</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div v-if="!readonly" class="toolbar">
			<NcButton @click="add">
				<template #icon><PlusIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Position hinzufügen') }}
			</NcButton>
			<NcActions v-if="products.length > 0" :menu-name="t('rechnungswerk', 'Aus Produkt')">
				<template #icon><PackageVariantIcon :size="20" /></template>
				<NcActionButton v-for="p in products" :key="p.id" @click="addFromProduct(p)">
					{{ p.name }}
				</NcActionButton>
			</NcActions>
		</div>
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcActions from '@nextcloud/vue/components/NcActions'
import NcActionButton from '@nextcloud/vue/components/NcActionButton'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import PackageVariantIcon from 'vue-material-design-icons/PackageVariant.vue'
import { TAX_RATES_BP, UNIT_CODE_LABELS, UNIT_CODES, type Product } from '@/types/api'
import { emptyItem, itemFromProduct, type EditorItem } from '@/types/editor'
import { formatCents, formatTaxRate, euroInputToCents } from '@/utils/money'
import { lineTotalCents } from '@/utils/invoiceCalc'

const items = defineModel<EditorItem[]>('items', { required: true })
const props = defineProps<{
	products: Product[]
	readonly?: boolean
	smallBusiness?: boolean
	defaultTaxRateBp?: number
}>()

const lineTotal = (item: EditorItem): number => lineTotalCents(item.quantity, euroInputToCents(item.priceInput))

// Under §19 small-business there is no VAT: force every line to 0 % so the
// client preview matches what the server stores.
watch(() => props.smallBusiness, (sb) => {
	if (sb) {
		for (const item of items.value) {
			item.taxRateBp = 0
		}
	}
}, { immediate: true })

function add() {
	items.value.push(emptyItem(props.smallBusiness ? 0 : (props.defaultTaxRateBp ?? 1900)))
}

function addFromProduct(product: Product) {
	items.value.push(itemFromProduct(product, props.smallBusiness ?? false))
}

function remove(index: number) {
	items.value.splice(index, 1)
}
</script>

<style scoped>
.rw-card {
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius-large);
	overflow-x: auto;
}
.items-tbl {
	width: 100%;
	min-width: 640px;
	border-collapse: collapse;
	table-layout: fixed;
}
/* Fixed column widths so the inputs never overlap on narrow viewports. */
.col-qty { width: 72px; }
.col-unit { width: 104px; }
.col-price { width: 120px; }
.col-tax { width: 88px; }
.col-sum { width: 104px; }
.col-actions { width: 48px; }
.items-tbl th,
.items-tbl td {
	padding: 8px 10px;
	text-align: left;
	border-bottom: 1px solid var(--color-border);
	vertical-align: top;
	overflow: hidden;
}
.items-tbl tbody tr:last-child td {
	border-bottom: none;
}
.items-tbl th {
	font-weight: 600;
	color: var(--color-text-maxcontrast);
	background: var(--color-background-hover);
}
.items-tbl .num {
	text-align: right;
}
.items-tbl .strong {
	font-weight: 600;
	white-space: nowrap;
}
/* Force inputs to fit their (fixed-width) cell — NC global input styles set an
   intrinsic width that would otherwise overflow into the next column. */
.cell-stack {
	display: flex;
	flex-direction: column;
	gap: 4px;
	min-width: 0;
}
.items-tbl .input {
	width: 100%;
	min-width: 0;
	max-width: 100%;
	box-sizing: border-box;
}
.input--sub {
	font-size: 0.9em;
}
.input--num {
	text-align: right;
}
.empty {
	text-align: center;
	color: var(--color-text-maxcontrast);
	padding: 16px;
}
.toolbar {
	display: flex;
	gap: 8px;
	margin-top: 12px;
}
</style>
