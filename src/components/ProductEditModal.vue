<template>
	<NcModal v-if="open" :name="title" @close="$emit('close')">
		<div class="product-modal">
			<h2>{{ title }}</h2>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Name') }} *</span>
				<input ref="nameInput" v-model="form.name" class="input" type="text" />
			</label>

			<label class="field">
				<span>{{ t('rechnungswerk', 'Beschreibung') }}</span>
				<textarea v-model="form.description" class="input" rows="2" />
			</label>

			<div class="field-row">
				<label class="field">
					<span>{{ t('rechnungswerk', 'Einheit') }}</span>
					<select v-model="form.defaultUnitCode" class="input">
						<option v-for="code in UNIT_CODES" :key="code" :value="code">
							{{ t('rechnungswerk', UNIT_CODE_LABELS[code]) }}
						</option>
					</select>
				</label>

				<label class="field">
					<span>{{ t('rechnungswerk', 'Standard-Preis (€)') }}</span>
					<input v-model="priceInput" class="input" type="number" step="0.01" min="0" inputmode="decimal" />
				</label>

				<label class="field">
					<span>{{ t('rechnungswerk', 'USt-Satz') }}</span>
					<select v-model.number="form.defaultTaxRateBp" class="input">
						<option v-for="bp in TAX_RATES_BP" :key="bp" :value="bp">{{ formatTaxRate(bp) }}</option>
					</select>
				</label>
			</div>

			<div class="actions">
				<NcButton @click="$emit('close')">{{ t('rechnungswerk', 'Abbrechen') }}</NcButton>
				<NcButton variant="primary" :disabled="saving || !isValid" @click="onSave">
					{{ t('rechnungswerk', 'Speichern') }}
				</NcButton>
			</div>
		</div>
	</NcModal>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref, watch } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcModal from '@nextcloud/vue/components/NcModal'
import NcButton from '@nextcloud/vue/components/NcButton'
import { TAX_RATES_BP, UNIT_CODE_LABELS, UNIT_CODES, type Product, type UnitCode } from '@/types/api'
import type { ProductCreate } from '@/api/products'
import { centsToEuroInput, euroInputToCents, formatTaxRate } from '@/utils/money'

const props = defineProps<{
	open: boolean
	product: Product | null
	saving?: boolean
}>()

const emit = defineEmits<{
	close: []
	save: [data: ProductCreate]
}>()

const nameInput = ref<HTMLInputElement | null>(null)

const form = reactive<{ name: string, description: string, defaultUnitCode: UnitCode, defaultTaxRateBp: number }>({
	name: '',
	description: '',
	defaultUnitCode: 'C62',
	defaultTaxRateBp: 1900,
})
const priceInput = ref('0.00')

const title = computed(() => props.product
	? t('rechnungswerk', 'Produkt bearbeiten')
	: t('rechnungswerk', 'Produkt anlegen'))

const isValid = computed(() => form.name.trim() !== '')

watch(() => props.open, (open) => {
	if (!open) {
		return
	}
	const p = props.product
	form.name = p?.name ?? ''
	form.description = p?.description ?? ''
	form.defaultUnitCode = (p?.defaultUnitCode ?? 'C62') as UnitCode
	form.defaultTaxRateBp = p?.defaultTaxRateBp ?? 1900
	priceInput.value = centsToEuroInput(p?.defaultPriceCents ?? 0)
	nextTick(() => nameInput.value?.focus())
}, { immediate: true })

function onSave() {
	if (!isValid.value) {
		return
	}
	emit('save', {
		name: form.name.trim(),
		description: form.description.trim() === '' ? null : form.description.trim(),
		defaultUnitCode: form.defaultUnitCode,
		defaultPriceCents: euroInputToCents(priceInput.value),
		defaultTaxRateBp: form.defaultTaxRateBp,
	})
}
</script>

<style scoped>
.product-modal {
	padding: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	min-width: 0;
}
.product-modal h2 {
	margin: 0 0 8px;
}
.field {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.field > span {
	font-weight: 600;
	font-size: 0.9em;
}
.field-row {
	display: flex;
	gap: 12px;
	flex-wrap: wrap;
}
.field-row .field {
	flex: 1 1 120px;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.actions {
	display: flex;
	justify-content: flex-end;
	gap: 8px;
	margin-top: 12px;
}
</style>
