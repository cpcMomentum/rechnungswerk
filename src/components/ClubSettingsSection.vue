<template>
	<section class="rw-section">
		<h3>{{ t('rechnungswerk', 'Verein') }}</h3>

		<NcCheckboxRadioSwitch
			type="switch"
			:modelValue="clubMode"
			:disabled="loading || saving"
			@update:modelValue="onToggleClubMode">
			{{ t('rechnungswerk', 'Vereinsmodus aktivieren') }}
		</NcCheckboxRadioSwitch>

		<label v-if="clubMode" class="rw-field rw-club-group">
			<span>{{ t('rechnungswerk', 'Mitgliedergruppe') }}</span>

			<NcSelect
				v-model="selectedGroup"
				:options="groupOptions"
				:loading="groupsLoading"
				:disabled="loading || saving"
				label="displayName"
				:clearable="true" />
		</label>

		<NcNoteCard
			v-if="error"
			type="error"
			:text="error" />

		<div class="rw-club-actions">
			<NcButton
				variant="primary"
				:disabled="loading || saving || !canSave"
				@click="save">
				{{ t('rechnungswerk', 'Speichern') }}
			</NcButton>
		</div>
	</section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcCheckboxRadioSwitch from '@nextcloud/vue/components/NcCheckboxRadioSwitch'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import NcSelect from '@nextcloud/vue/components/NcSelect'
import {
	getClubSettings,
	saveClubSettings,
} from '@/api/clubSettings'
import { getGroups, type GroupOption } from '@/api/groups'
import { useClubStatusStore } from '@/stores/clubStatusStore'

const clubStatusStore = useClubStatusStore()

const clubMode = ref(false)
const memberGroup = ref<string | null>(null)

const groupOptions = ref<GroupOption[]>([])

const loading = ref(false)
const groupsLoading = ref(false)
const saving = ref(false)
const error = ref('')

const selectedGroup = computed<GroupOption | null>({
	get() {
		if (!memberGroup.value) {
			return null
		}

		return groupOptions.value.find(
			(group) => group.id === memberGroup.value,
		) ?? {
			id: memberGroup.value,
			displayName: memberGroup.value,
		}
	},

	set(group) {
		memberGroup.value = group?.id ?? null
	},
})

const canSave = computed(() => {
	if (!clubMode.value) {
		return true
	}

	return memberGroup.value !== null
})

function onToggleClubMode(value: boolean): void {
	clubMode.value = value
}

async function load(): Promise<void> {
	loading.value = true
	error.value = ''

	try {
		const settings = await getClubSettings()

		clubMode.value = settings.clubMode
		memberGroup.value = settings.memberGroup

		// Zentralen Status synchronisieren, damit Navigation und spätere
		// Router-Prüfungen denselben Vereinsmodus verwenden.
		clubStatusStore.setClubMode(settings.clubMode)
	} catch (e) {
		error.value = (e as { message?: string }).message
			?? t('rechnungswerk', 'Laden fehlgeschlagen')
	} finally {
		loading.value = false
	}
}

async function loadGroups(): Promise<void> {
	groupsLoading.value = true

	try {
		groupOptions.value = await getGroups()
	} catch (e) {
		groupOptions.value = []
		console.error('[rechnungswerk] loading groups:', e)
	} finally {
		groupsLoading.value = false
	}
}

async function save(): Promise<void> {
	saving.value = true
	error.value = ''

	try {
		const settings = await saveClubSettings({
			clubMode: clubMode.value,
			memberGroup: memberGroup.value,
		})

		clubMode.value = settings.clubMode
		memberGroup.value = settings.memberGroup

		// Erst nach erfolgreichem Speichern den globalen Status ändern.
		// Dadurch verschwindet/erscheint die Beitragsabrechnung sofort.
		clubStatusStore.setClubMode(settings.clubMode)
	} catch (e) {
		error.value = (e as { message?: string }).message
			?? t('rechnungswerk', 'Speichern fehlgeschlagen')
	} finally {
		saving.value = false
	}
}

onMounted(async () => {
	await Promise.all([
		load(),
		loadGroups(),
	])
})
</script>

<style scoped>
.rw-club-group {
	margin-top: 12px;
}

.rw-club-actions {
	margin-top: 12px;
}
</style>
