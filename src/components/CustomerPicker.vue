<template>
	<div class="customer-picker">
		<input
			:value="query"
			class="input"
			type="text"
			autocomplete="off"
			:placeholder="t('rechnungswerk', 'Kunde suchen oder anlegen …')"
			@input="onInput(($event.target as HTMLInputElement).value)"
			@focus="open = matches.length > 0"
			@blur="onBlur" />
		<ul v-if="open && matches.length > 0" class="customer-picker__list">
			<li
				v-for="c in matches"
				:key="c.id"
				class="customer-picker__item"
				@mousedown.prevent="choose(c)">
				<strong>{{ c.name }}</strong>
				<span class="muted">{{ [c.customerNumber, [c.postalCode, c.city].filter(Boolean).join(' '), c.vatId].filter(Boolean).join(' · ') }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import { useCustomerStore } from '@/stores/customerStore'
import type { Customer } from '@/types/api'

const emit = defineEmits<{
	select: [customer: Customer]
}>()

const store = useCustomerStore()
const query = ref('')
const matches = ref<Customer[]>([])
const open = ref(false)

onMounted(() => {
	if (store.customers.length === 0) {
		store.fetchAll().catch(e => console.error('[rechnungswerk] customer picker:', e))
	}
})

function onInput(value: string) {
	query.value = value
	const q = value.trim().toLowerCase()
	if (q === '') {
		matches.value = []
		open.value = false
		return
	}
	matches.value = store.customers.filter(c =>
		`${c.name} ${c.customerNumber} ${c.city ?? ''} ${c.vatId ?? ''}`.toLowerCase().includes(q),
	).slice(0, 20)
	open.value = matches.value.length > 0
}

function choose(customer: Customer) {
	query.value = ''
	matches.value = []
	open.value = false
	emit('select', customer)
}

function onBlur() {
	setTimeout(() => { open.value = false }, 150)
}
</script>

<style scoped>
.customer-picker {
	position: relative;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.customer-picker__list {
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
.customer-picker__item {
	display: flex;
	flex-direction: column;
	padding: 6px 12px;
	cursor: pointer;
}
.customer-picker__item:hover {
	background: var(--color-background-hover);
}
.muted {
	color: var(--color-text-maxcontrast);
	font-size: 0.9em;
}
</style>
