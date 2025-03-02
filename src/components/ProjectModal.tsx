import { Loader } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import {
	UseFormHandleSubmit,
	UseFormRegister,
	UseFormReset
} from 'react-hook-form'

import { IProject } from '@/services/project.service'

import { useCreateProject } from '@/hooks/useCreateProject'

import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Textarea } from './ui/Textarea'

interface Props {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>
	handleSubmit: UseFormHandleSubmit<IProject, undefined>
	register: UseFormRegister<IProject>
	reset: UseFormReset<IProject>
	isUpdate: boolean
}

export const ProjectModal = ({
	setIsModalOpen,
	handleSubmit,
	isUpdate,
	register,
	reset
}: Props) => {
	const { mutate, isLoading } = useCreateProject(isUpdate)

	const onSubmit = (data: IProject) => {
		mutate(data)
		!isUpdate && reset()
		setIsModalOpen(false)
	}

	return (
		<div
			className='fixed top-0 left-0 flex items-center justify-center z-50 bg-black/50 w-screen h-screen'
			onClick={() => setIsModalOpen(false)}
		>
			<div
				className='flex flex-col gap-4 bg-[#353535] rounded overflow-hidden shadow-lg max-w-sm p-4'
				onClick={e => e.stopPropagation()}
			>
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
						placeholder='Title'
					/>
					<Textarea
						name='description'
						register={register}
						autoComplete='off'
						placeholder='Description'
					/>
					<Input
						name='url'
						register={register}
						rules={{ required: true }}
						autoComplete='off'
						placeholder='Url'
					/>

					<Button>{isLoading ? <Loader /> : isUpdate ? 'Save' : 'Add'}</Button>
				</form>
			</div>
		</div>
	)
}
