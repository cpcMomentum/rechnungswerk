<template>
	<div class="rechnungswerk-view">
		<h2>{{ t('rechnungswerk', 'Rechnungen') }}</h2>
		<NcEmptyContent :name="t('rechnungswerk', 'Noch keine Rechnungen')"
			:description="t('rechnungswerk', 'Lege deine erste Rechnung an.')">
			<template #icon><FileDocumentIcon :size="20" /></template>
		</NcEmptyContent>
	</div>
</template>

<script>
import { translate as t } from '@nextcloud/l10n'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue'

export default {
	name: 'InvoicesView',
	components: { NcEmptyContent, FileDocumentIcon },
	methods: { t },
}
</script>

<style scoped>
.rechnungswerk-view {
	padding: 20px;
	padding-left: 50px;
}
</style>
