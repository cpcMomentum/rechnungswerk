<template>
	<div>
		<div class="rw-table-wrap">
			<table class="rw-table rw-table--positions">
				<colgroup>
					<col>
					<col class="rw-col-qty">
					<col class="rw-col-unit">
					<col class="rw-col-price">
					<col class="rw-col-tax">
					<col class="rw-col-sum">
					<col v-if="!readonly" class="rw-col-actions">
				</colgroup>
				<thead>
					<tr>
						<th>{{ t('rechnungswerk', 'Bezeichnung') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Menge') }}</th>
						<th>{{ t('rechnungswerk', 'Einheit') }}</th>
						<th class="num">{{ t('rechnungswerk', 'Einzelpreis (€)') }}</th>
						<th class="num">{{ t('rechnungswerk', 'USt') }}</th>
						<th class="rw-sum">{{ t('rechnungswerk', 'Summe netto') }}</th>
						<th v-if="!readonly" />
					</tr>
				</thead>
				<tbody>
					<template v-for="(item, i) in items" :key="i">
						<tr class="rw-pos-main">
							<td>
								<input v-model="item.name" class="rw-input" type="text"
									:readonly="readonly" :placeholder="t('rechnungswerk', 'Leistung')" />
							</td>
							<td class="num">
								<input v-model="item.quantity" class="rw-input num" type="text"
									inputmode="decimal" :readonly="readonly" />
							</td>
							<td>
								<select v-model="item.unitCode" class="rw-input" :disabled="readonly">
									<option v-for="code in UNIT_CODES" :key="code" :value="code">
										{{ t('rechnungswerk', UNIT_CODE_LABELS[code]) }}
									</option>
								</select>
							</td>
							<td class="num">
								<input v-model="item.priceInput" class="rw-input num" type="number"
									step="0.01" :readonly="readonly" />
							</td>
							<td class="num">
								<select v-model.number="item.taxRateBp" class="rw-input" :disabled="readonly || smallBusiness">
									<option v-for="bp in TAX_RATES_BP" :key="bp" :value="bp">{{ formatTaxRate(bp) }}</option>
								</select>
							</td>
							<td class="rw-sum">{{ formatCents(lineTotal(item)) }}</td>
							<td v-if="!readonly" class="num">
								<NcButton variant="tertiary" :aria-label="t('rechnungswerk', 'Position entfernen')" @click="remove(i)">
									<template #icon><DeleteIcon :size="20" /></template>
								</NcButton>
							</td>
						</tr>
						<tr v-if="!readonly || item.description" class="rw-pos-desc">
							<td :colspan="readonly ? 6 : 7">
								<input v-model="item.description" class="rw-input rw-input--sub" type="text"
									:readonly="readonly" :placeholder="t('rechnungswerk', 'Beschreibung (optional)')" />
							</td>
						</tr>
					</template>
					<tr v-if="items.length === 0">
						<td :colspan="readonly ? 6 : 7" class="rw-muted empty-row">
							{{ t('rechnungswerk', 'Noch keine Positionen.') }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div v-if="!readonly" class="rw-toolbar">
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
.empty-row {
	text-align: center;
	padding: 16px;
}
</style>
