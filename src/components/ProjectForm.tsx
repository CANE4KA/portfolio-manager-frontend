import {
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormReset
} from 'react-hook-form'

import { IProject } from '@/services/project.service'

import { useCreateProject } from '@/hooks/useCreateProject'

import { Button } from './ui/Button'
import { Input } from './ui/Input'

interface Props {
	handleSubmit: UseFormHandleSubmit<IProject, undefined>
	register: UseFormRegister<IProject>
	reset: UseFormReset<IProject>
	isUpdate: boolean
}

export const ProjectForm = ({
	handleSubmit,
	register,
	reset,
	isUpdate
}: Props) => {
	const { mutate } = useCreateProject(isUpdate)

	const onSubmit = (data: IProject) => {
		mutate(data)
		!isUpdate && reset()
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center gap-2 mb-2'
		>
			{isUpdate && <Input name='id' register={register} hidden />}

			<Input
				name='title'
				register={register}
				rules={{ required: true }}
				autoComplete='off'
			/>
			<Input
				name='description'
				register={register}
				rules={{ required: true }}
				autoComplete='off'
			/>
			<Input
				name='url'
				register={register}
				rules={{ required: true }}
				autoComplete='off'
			/>

			<Button>{isUpdate ? 'Update' : 'Add'}</Button>
		</form>
	)
}
