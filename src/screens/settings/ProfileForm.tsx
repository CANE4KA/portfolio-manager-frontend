import { Dispatch, SetStateAction } from 'react'
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import { IUserForm } from '@/types/auth.types'

interface Props {
	handleSubmit: UseFormHandleSubmit<IUserForm, undefined>
	onSubmit: (data: IUserForm) => void
	register: UseFormRegister<IUserForm>
	isEdit: boolean
	setIsEdit: Dispatch<SetStateAction<boolean>>
}

export const ProfileForm = ({
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
				name='username'
				register={register}
				disabled={!isEdit}
				placeholder='Username'
			/>
			<Input
				name='email'
				register={register}
				disabled={!isEdit}
				placeholder='Email'
				type='email'
			/>
			<Input
				name='password'
				register={register}
				disabled={!isEdit}
				placeholder='Password'
				type='password'
				rules={{ minLength: { value: 6, message: 'Password must be 6' } }}
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
