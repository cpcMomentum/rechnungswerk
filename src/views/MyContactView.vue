<template>
	<div class="rw-view rw-view--narrow">
		<h2 class="rw-mysettings-title">{{ t('rechnungswerk', 'Einstellungen') }}</h2>

		<NcNoteCard v-if="error" type="error" :text="error" />

		<div v-if="form" class="rw-settingspage">
			<RwSettingsNav
				:groups="navGroups"
				:modelValue="activeSection"
				:ariaLabel="t('rechnungswerk', 'Einstellungs-Navigation')"
				@update:modelValue="activeSection = $event" />

			<div class="rw-settingspage__content">
				<section v-show="activeSection === 'ansprechpartner'" class="rw-section">
					<h3>{{ t('rechnungswerk', 'Ansprechpartner') }}</h3>
					<p class="rw-hint">{{ t('rechnungswerk', 'Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.') }}</p>
					<NcNoteCard v-if="notice" type="success" :text="notice" />
					<div class="rw-form-row">
						<label class="rw-field"><span>{{ t('rechnungswerk', 'Name') }}</span>
							<input v-model="form.person" class="rw-input" type="text" /></label>
						<label class="rw-field"><span>{{ t('rechnungswerk', 'Telefon') }}</span>
							<input v-model="form.phone" class="rw-input" type="text" /></label>
						<label class="rw-field"><span>{{ t('rechnungswerk', 'E-Mail') }}</span>
							<input v-model="form.email" class="rw-input" type="email" /></label>
					</div>
					<div class="rw-mysettings-actions">
						<NcButton variant="primary" :disabled="saving" @click="onSave">
							<template #icon><ContentSaveIcon :size="20" /></template>
							{{ t('rechnungswerk', 'Speichern') }}
						</NcButton>
						<NcButton variant="tertiary" @click="fromAccount">
							<template #icon><AccountIcon :size="20" /></template>
							{{ t('rechnungswerk', 'Aus meinem Nextcloud-Konto übernehmen') }}
						</NcButton>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { translate as t } from '@nextcloud/l10n'
import NcButton from '@nextcloud/vue/components/NcButton'
import NcNoteCard from '@nextcloud/vue/components/NcNoteCard'
import ContentSaveIcon from 'vue-material-design-icons/ContentSave.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import CardAccountDetailsIcon from 'vue-material-design-icons/CardAccountDetails.vue'
import RwSettingsNav, { type SettingsGroup } from '@/components/RwSettingsNav.vue'
import type { MeContactDefaults } from '@/types/api'
import { getMyContact, saveMyContact } from '@/api/me'
import { getMyContactDefaults } from '@/api/contacts'

const form = ref<MeContactDefaults | null>(null)
const error = ref('')
const notice = ref('')
const saving = ref(false)
const activeSection = ref('ansprechpartner')
const navGroups: SettingsGroup[] = [{
	label: t('rechnungswerk', 'Persönlich'),
	items: [{ key: 'ansprechpartner', label: t('rechnungswerk', 'Ansprechpartner'), icon: CardAccountDetailsIcon }],
}]

onMounted(async () => {
	try {
		form.value = await getMyContact()
	} catch (e) {
		error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Laden fehlgeschlagen')
	}
})

/** One-time import of the Nextcloud account contact into the editable fields. */
async function fromAccount() {
	error.value = ''
	try {
		const acc = await getMyContactDefaults()
		form.value = { person: acc.person, phone: acc.phone, email: acc.email }
	} catch (e) {
		error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Nextcloud-Konto konnte nicht geladen werden.')
	}
}

async function onSave() {
	if (!form.value) {
		return
	}
	error.value = ''
	notice.value = ''
	saving.value = true
	try {
		form.value = await saveMyContact(form.value)
		notice.value = t('rechnungswerk', 'Gespeichert.')
	} catch (e) {
		error.value = (e as { message?: string }).message ?? t('rechnungswerk', 'Speichern fehlgeschlagen')
	} finally {
		saving.value = false
	}
}
</script>

<style scoped>
.rw-mysettings-title {
	margin: 0 0 16px;
}
.rw-mysettings-actions {
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 16px;
}
</style>
