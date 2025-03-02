import { Dispatch, SetStateAction } from 'react'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import { IProfile } from '@/services/profile.service'

interface Props {
	handleSubmit: UseFormHandleSubmit<IProfile, undefined>
	onSubmit: (data: IProfile) => void
	register: UseFormRegister<IProfile>
	isEdit: boolean
	setIsEdit: Dispatch<SetStateAction<boolean>>
}

export const SettingsForm = ({
	handleSubmit,
	isEdit,
	onSubmit,
	register,
	setIsEdit
}: Props) => {
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
