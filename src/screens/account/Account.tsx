import { CirclePlus, CircleX } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ProjectCardAccount } from '@/components/ProjectCardAccount'
import { ProjectForm } from '@/components/ProjectForm'

import { IProject } from '@/services/project.service'

import { useDeleteProject } from '@/hooks/useDeleteProject'
import { useProfile } from '@/hooks/useProfile'

export const Account = () => {
	const [isUpdate, setIsUpdate] = useState<boolean>(false)
	const [isOpenForm, setIsOpenForm] = useState<boolean>(false)

	const { mutate } = useDeleteProject()
	const { projects } = useProfile()

	const { register, handleSubmit, reset, setValue } = useForm<IProject>({
		mode: 'onChange'
	})

	const onDeleteProject = (id: string) => {
		mutate(id)
	}

	const onEditProject = (data: IProject) => {
		setIsUpdate(true)
		setIsOpenForm(true)

		setValue('id', data.id)
		setValue('title', data.title)
		setValue('description', data.description)
		setValue('url', data.url)
	}

	return (
		<>
			<button
				className='absolute top-0 right-1'
				title={isOpenForm ? 'Close project form' : 'Open project form'}
				onClick={() => {
					setIsOpenForm(prev => !prev)
					setIsUpdate(false)
					reset()
				}}
			>
				{isOpenForm ? <CircleX /> : <CirclePlus />}
			</button>

			{isOpenForm && (
				<ProjectForm
					handleSubmit={handleSubmit}
					register={register}
					reset={reset}
					isUpdate={isUpdate}
					setIsOpenForm={setIsOpenForm}
				/>
			)}

			<div className='flex justify-center flex-wrap gap-2'>
				{projects?.length
					? projects.map(project => (
							<ProjectCardAccount
								key={project.id}
								project={project}
								onDelete={onDeleteProject}
								onEdit={onEditProject}
							/>
						))
					: 'Нету проектов'}
			</div>
		</>
	)
}
