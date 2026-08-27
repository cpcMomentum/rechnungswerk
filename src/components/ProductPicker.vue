<template>
	<div class="product-picker">
		<input
			:value="query"
			class="input"
			type="text"
			autocomplete="off"
			:placeholder="t('rechnungswerk', 'Produkt suchen und einfügen …')"
			@input="onInput(($event.target as HTMLInputElement).value)"
			@focus="open = matches.length > 0"
			@blur="onBlur" />
		<ul v-if="open && matches.length > 0" class="product-picker__list">
			<li
				v-for="p in matches"
				:key="p.id"
				class="product-picker__item"
				@mousedown.prevent="choose(p)">
				<strong>{{ p.name }}</strong>
				<span class="muted">{{ subtitle(p) }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import { UNIT_CODE_LABELS, type Product } from '@/types/api'
import { e4ToEuroInput } from '@/utils/money'

// The already-loaded product list from the editor (productStore.fetchAll on
// mount). Kept as a prop instead of reading the store so the picker stays a
// dumb, reusable component, mirroring CustomerPicker.
const props = defineProps<{
	products: Product[]
}>()

const emit = defineEmits<{
	select: [product: Product]
}>()

const query = ref('')
const matches = ref<Product[]>([])
const open = ref(false)

/** Muted second line: net price and unit, so identically named products differ. */
function subtitle(p: Product): string {
	const price = `${e4ToEuroInput(p.defaultPriceE4)} €`
	const unit = p.defaultUnitLabel || t('rechnungswerk', UNIT_CODE_LABELS[p.defaultUnitCode])
	return [price, unit].filter(Boolean).join(' · ')
}

function onInput(value: string) {
	query.value = value
	const q = value.trim().toLowerCase()
	if (q === '') {
		matches.value = []
		open.value = false
		return
	}
	matches.value = props.products.filter(p =>
		`${p.name} ${p.description ?? ''}`.toLowerCase().includes(q),
	).slice(0, 20)
	open.value = matches.value.length > 0
}

function choose(product: Product) {
	// Clear so the field is ready for the next product; the row is added by the
	// parent via addFromProduct.
	query.value = ''
	matches.value = []
	open.value = false
	emit('select', product)
}

function onBlur() {
	// Delay so a click on a list item (mousedown) still registers before close.
	setTimeout(() => { open.value = false }, 150)
}
</script>

<style scoped>
.product-picker {
	position: relative;
	min-width: 260px;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.product-picker__list {
	position: absolute;
	z-index: 10;
	left: 0;
	right: 0;
	margin: 2px 0 0;
	padding: 4px 0;
	list-style: none;
	background: var(--color-main-background);
	border: 1px solid var(--color-border);
	border-radius: var(--border-radius);
	box-shadow: 0 2px 8px var(--color-box-shadow);
	max-height: 240px;
	overflow-y: auto;
}
.product-picker__item {
	display: flex;
	flex-direction: column;
	padding: 6px 12px;
	cursor: pointer;
}
.product-picker__item:hover {
	background: var(--color-background-hover);
}
.muted {
	color: var(--color-text-maxcontrast);
	font-size: 0.9em;
}
</style>
