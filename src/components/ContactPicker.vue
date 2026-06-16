<template>
	<div class="contact-picker">
		<input
			:value="modelValue"
			class="input"
			type="text"
			autocomplete="off"
			:placeholder="t('rechnungswerk', 'Name eingeben oder Kontakt wählen …')"
			@input="onInput(($event.target as HTMLInputElement).value)"
			@focus="open = suggestions.length > 0"
			@blur="onBlur" />
		<ul v-if="open && suggestions.length > 0" class="contact-picker__list">
			<li
				v-for="(c, i) in suggestions"
				:key="i"
				class="contact-picker__item"
				@mousedown.prevent="choose(c)">
				<strong>{{ c.name }}</strong>
				<span v-if="c.email" class="muted">{{ c.email }}</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import { searchContacts } from '@/api/contacts'
import type { ContactMatch } from '@/types/api'

defineProps<{ modelValue: string }>()
const emit = defineEmits<{
	'update:modelValue': [value: string]
	select: [contact: ContactMatch]
}>()

const suggestions = ref<ContactMatch[]>([])
const open = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

function onInput(value: string) {
	emit('update:modelValue', value)
	if (timer) {
		clearTimeout(timer)
	}
	if (value.trim().length < 2) {
		suggestions.value = []
		open.value = false
		return
	}
	timer = setTimeout(async () => {
		try {
			suggestions.value = await searchContacts(value.trim())
			open.value = suggestions.value.length > 0
		} catch {
			suggestions.value = []
			open.value = false
		}
	}, 300)
}

function choose(contact: ContactMatch) {
	emit('update:modelValue', contact.name)
	emit('select', contact)
	open.value = false
	suggestions.value = []
}

function onBlur() {
	// Delay so a mousedown on a suggestion still registers.
	setTimeout(() => { open.value = false }, 150)
}

onBeforeUnmount(() => {
	if (timer) {
		clearTimeout(timer)
	}
})
</script>

<style scoped>
.contact-picker {
	position: relative;
}
.input {
	width: 100%;
	box-sizing: border-box;
}
.contact-picker__list {
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
.contact-picker__item {
	display: flex;
	flex-direction: column;
	padding: 6px 12px;
	cursor: pointer;
}
.contact-picker__item:hover {
	background: var(--color-background-hover);
}
.muted {
	color: var(--color-text-maxcontrast);
	font-size: 0.9em;
}
</style>
