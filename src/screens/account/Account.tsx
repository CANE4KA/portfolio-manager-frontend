import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ProjectCardAccount } from '@/components/ProjectCardAccount'
import { ProjectModal } from '@/components/ProjectModal'
import { Button } from '@/components/ui/Button'

import { IProject } from '@/services/project.service'

import { useDeleteProject } from '@/hooks/useDeleteProject'
import { useProfile } from '@/hooks/useProfile'

export const Account = () => {
	const [isUpdate, setIsUpdate] = useState<boolean>(false)
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

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
		setIsModalOpen(true)

		setValue('id', data.id)
		setValue('title', data.title)
		setValue('description', data.description)
		setValue('url', data.url)
	}

	return (
		<>
			<Button
				title='Add new project'
				onClick={() => {
					setIsModalOpen(true)
					setIsUpdate(false)
					reset()
				}}
			>
				New project
			</Button>

			{isModalOpen && (
				<ProjectModal
					handleSubmit={handleSubmit}
					register={register}
					reset={reset}
					isUpdate={isUpdate}
					setIsModalOpen={setIsModalOpen}
				/>
			)}

			<div className='flex justify-center flex-wrap gap-2 mt-2'>
				{projects?.length
					? projects.map(project => (
							<ProjectCardAccount
								key={project.id}
								project={project}
								onDelete={onDeleteProject}
								onEdit={onEditProject}
							/>
						))
					: 'Пора добавить свой первый проект :)'}
			</div>
		</>
	)
}
