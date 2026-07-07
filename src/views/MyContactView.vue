<template>
	<div class="rw-view">
		<h2>{{ t('rechnungswerk', 'Mein Kontakt') }}</h2>

		<NcNoteCard v-if="error" type="error" :text="error" />
		<NcNoteCard v-if="notice" type="success" :text="notice" />

		<section v-if="form" class="rw-section">
			<h3>{{ t('rechnungswerk', 'Mein Verkäufer-Ansprechpartner') }}</h3>
			<p class="rw-hint">{{ t('rechnungswerk', 'Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.') }}</p>
			<div class="rw-form-row">
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Name') }}</span>
					<input v-model="form.person" class="rw-input" type="text" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'Telefon') }}</span>
					<input v-model="form.phone" class="rw-input" type="text" /></label>
				<label class="rw-field"><span>{{ t('rechnungswerk', 'E-Mail') }}</span>
					<input v-model="form.email" class="rw-input" type="email" /></label>
			</div>
			<NcButton variant="tertiary" @click="fromAccount">
				<template #icon><AccountIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Aus meinem Nextcloud-Konto übernehmen') }}
			</NcButton>
		</section>

		<div v-if="form" class="rw-action-bar">
			<NcButton variant="primary" :disabled="saving" @click="onSave">
				<template #icon><ContentSaveIcon :size="20" /></template>
				{{ t('rechnungswerk', 'Speichern') }}
			</NcButton>
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
import type { MeContactDefaults } from '@/types/api'
import { getMyContact, saveMyContact } from '@/api/me'
import { getMyContactDefaults } from '@/api/contacts'

const form = ref<MeContactDefaults | null>(null)
const error = ref('')
const notice = ref('')
const saving = ref(false)

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
