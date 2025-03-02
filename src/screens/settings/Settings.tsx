import { useEffect, useState } from 'react'

import { useProfile } from '@/hooks/useProfile'
import { useProfileForm } from '@/hooks/useProfileForm'
import { useSettingsForm } from '@/hooks/useSettingsForm'

import { ProfileForm } from './ProfileForm'
import { SettingsForm } from './SettingsForm'

export const Settings = () => {
	const [isEditSettings, setIsEditSettings] = useState<boolean>(false)
	const [isEditProfile, setIsEditProfile] = useState<boolean>(false)

	const { user } = useProfile()

	const {
		handleSubmit: handleSubmitSettings,
		onSubmit: onSubmitSettings,
		register: registerSettings,
		setValue: setValueSettings
	} = useSettingsForm(setIsEditSettings)

	const {
		handleSubmit: handleSubmitProfile,
		onSubmit: onSubmitProfile,
		register: registerProfile,
		setValue: setValueProfile
	} = useProfileForm(setIsEditProfile)

	useEffect(() => {
		if (user) {
			setValueProfile('username', user.username)
			setValueProfile('email', user.email)

			setValueSettings('bio', user.profile.bio)
			setValueSettings('location', user.profile.location)
			setValueSettings('website', user.profile.website)
			setValueSettings('github', user.profile.github)
			setValueSettings('telegram', user.profile.telegram)
		}
	}, [user])

	return (
		<>
			<ProfileForm
				isEdit={isEditProfile}
				setIsEdit={setIsEditProfile}
				handleSubmit={handleSubmitProfile}
				onSubmit={onSubmitProfile}
				register={registerProfile}
			/>

			<SettingsForm
				isEdit={isEditSettings}
				setIsEdit={setIsEditSettings}
				handleSubmit={handleSubmitSettings}
				onSubmit={onSubmitSettings}
				register={registerSettings}
			/>
		</>
	)
}
