/**
 * SPDX-FileCopyrightText: 2026 cpcMomentum
 * SPDX-License-Identifier: AGPL-3.0-or-later
 *
 * Minimal typings for the Nextcloud runtime globals we use. The file picker is
 * provided by the server core (OC.dialogs.filepicker) so we don't need to bundle
 * @nextcloud/dialogs (which would drag in @nextcloud/files + a major l10n bump).
 */

interface OCDialogs {
	FILEPICKER_TYPE_CHOOSE: number
	/**
	 * Open the Nextcloud file picker. The callback receives the selected path
	 * (relative to the current user's files root).
	 */
	filepicker(
		title: string,
		callback: (path: string) => void,
		multiselect?: boolean,
		mimetypeFilter?: string[] | string,
		modal?: boolean,
		type?: number,
	): void
}

declare global {
	const OC: {
		dialogs: OCDialogs
	}
}

export {}
