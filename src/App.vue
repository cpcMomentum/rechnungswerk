<template>
	<NcContent app-name="rechnungswerk">
		<template v-if="!store.loaded">
			<NcAppContent>
				<NcLoadingIcon class="rw-app-loading" :size="44" />
			</NcAppContent>
		</template>

		<template v-else-if="!hasAccess">
			<NcAppContent>
				<NcEmptyContent :name="t('rechnungswerk', 'Kein Zugriff')"
					:description="t('rechnungswerk', 'Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.')">
					<template #icon><LockIcon :size="20" /></template>
				</NcEmptyContent>
			</NcAppContent>
		</template>

		<template v-else>
			<NcAppNavigation>
				<NcAppNavigationItem :name="t('rechnungswerk', 'Rechnungen')" :to="{ name: 'invoices' }">
					<template #icon><FileDocumentIcon :size="20" /></template>
				</NcAppNavigationItem>
				<NcAppNavigationItem :name="t('rechnungswerk', 'Produkte')" :to="{ name: 'products' }">
					<template #icon><PackageVariantIcon :size="20" /></template>
				</NcAppNavigationItem>
				<template v-if="isAdmin" #footer>
					<NcAppNavigationItem :name="t('rechnungswerk', 'Einstellungen')" :to="{ name: 'settings' }">
						<template #icon><CogIcon :size="20" /></template>
					</NcAppNavigationItem>
				</template>
			</NcAppNavigation>
			<NcAppContent>
				<router-view />
			</NcAppContent>
		</template>
	</NcContent>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcContent from '@nextcloud/vue/components/NcContent'
import NcAppNavigation from '@nextcloud/vue/components/NcAppNavigation'
import NcAppNavigationItem from '@nextcloud/vue/components/NcAppNavigationItem'
import NcAppContent from '@nextcloud/vue/components/NcAppContent'
import NcEmptyContent from '@nextcloud/vue/components/NcEmptyContent'
import NcLoadingIcon from '@nextcloud/vue/components/NcLoadingIcon'
import FileDocumentIcon from 'vue-material-design-icons/FileDocument.vue'
import PackageVariantIcon from 'vue-material-design-icons/PackageVariant.vue'
import CogIcon from 'vue-material-design-icons/Cog.vue'
import LockIcon from 'vue-material-design-icons/Lock.vue'
import { usePermissionStore } from '@/stores/permissionStore'

const store = usePermissionStore()
const hasAccess = computed(() => store.info?.hasAccess ?? false)
const isAdmin = computed(() => store.info?.isAdmin ?? false)

onMounted(() => {
	store.fetch()
})
</script>

<style scoped>
.rw-app-loading {
	margin: 25vh auto 0;
}
</style>
