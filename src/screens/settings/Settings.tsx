import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import { useProfile } from '@/hooks/useProfile'
import { useSettingsForm } from '@/hooks/useSettingsForm'

export const Settings = () => {
	const [isEdit, setIsEdit] = useState<boolean>(false)

	const { user } = useProfile()

	const { handleSubmit, onSubmit, register, setValue } =
		useSettingsForm(setIsEdit)

	useEffect(() => {
		if (user) {
			setValue('bio', user.profile.bio)
			setValue('location', user.profile.location)
			setValue('website', user.profile.website)
			setValue('github', user.profile.github)
			setValue('telegram', user.profile.telegram)
		}
	}, [user])

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center gap-2 mt-2'
		>
			<Input
				name='bio'
				register={register}
				disabled={!isEdit}
				placeholder='Bio'
			/>
			<Input
				name='location'
				register={register}
				disabled={!isEdit}
				placeholder='Location'
			/>
			<Input
				name='github'
				register={register}
				disabled={!isEdit}
				placeholder='Github'
			/>
			<Input
				name='telegram'
				register={register}
				disabled={!isEdit}
				placeholder='Telegram'
			/>
			<Input
				name='website'
				register={register}
				disabled={!isEdit}
				placeholder='Website'
			/>

			<div className='flex gap-2'>
				<Button
					type='button'
					onClick={() => setIsEdit(prev => !prev)}
					title='Edit data'
				>
					{isEdit ? 'Close' : 'Edit'}
				</Button>

				<Button disabled={!isEdit} title='Save data'>
					Save
				</Button>
			</div>
		</form>
	)
}
