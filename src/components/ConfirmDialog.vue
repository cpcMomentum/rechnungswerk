<template>
	<NcDialog :open="open" :name="name" @update:open="onUpdateOpen">
		<div class="confirm-dialog">
			<p class="confirm-dialog__message">{{ message }}</p>
		</div>

		<template #actions>
			<NcButton variant="secondary" @click="$emit('close')">{{ cancelLabel || t('rechnungswerk', 'Abbrechen') }}</NcButton>
			<NcButton
				:variant="destructive ? 'error' : 'primary'"
				@click="$emit('confirm')"
			>
				{{ confirmLabel || t('rechnungswerk', 'Bestätigen') }}
			</NcButton>
		</template>
	</NcDialog>
</template>

<script setup lang="ts">
import { translate as t } from '@nextcloud/l10n'
import NcDialog from '@nextcloud/vue/components/NcDialog'
import NcButton from '@nextcloud/vue/components/NcButton'

defineProps<{
	open: boolean
	name: string
	message: string
	confirmLabel?: string
	cancelLabel?: string
	destructive?: boolean
}>()

const emit = defineEmits<{
	close: []
	confirm: []
}>()

function onUpdateOpen(value: boolean) {
	if (!value) emit('close')
}
</script>

<style scoped>
:deep(.dialog__content) {
	padding-top: 1.25rem;
	padding-bottom: 1.25rem;
}
.confirm-dialog__message {
	margin: 0;
	font-size: 0.95rem;
	line-height: 1.5;
	white-space: pre-wrap;
	word-break: break-word;
}
</style>
