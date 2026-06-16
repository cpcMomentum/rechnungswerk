<template>
	<NcContent app-name="rechnungswerk">
		<NcAppNavigation>
			<NcAppNavigationItem :name="t('rechnungswerk', 'Rechnungen')" :to="{ name: 'invoices' }">
				<template #icon><FileDocumentIcon :size="20" /></template>
			</NcAppNavigationItem>
			<NcAppNavigationItem :name="t('rechnungswerk', 'Produkte')" :to="{ name: 'products' }">
				<template #icon><PackageVariantIcon :size="20" /></template>
			</NcAppNavigationItem>
			<NcAppNavigationItem :name="t('rechnungswerk', 'Einstellungen')" :to="{ name: 'settings' }">
				<template #icon><CogIcon :size="20" /></template>
			</NcAppNavigationItem>
		</NcAppNavigation>
		<NcAppContent>
			<router-view />
		</NcAppContent>
	</NcContent>
</template>

<script>
import { translate as t } from '@nextcloud/l10n'
import { NcContent, NcAppNavigation, NcAppNavigationItem, NcAppContent } from '@nextcloud/vue'
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue'
import PackageVariantIcon from 'vue-material-design-icons/PackageVariant.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'

export default {
	name: 'App',
	components: {
		NcContent,
		NcAppNavigation,
		NcAppNavigationItem,
		NcAppContent,
		FileDocumentIcon,
		PackageVariantIcon,
		CogIcon,
	},
	methods: { t },
}
</script>
