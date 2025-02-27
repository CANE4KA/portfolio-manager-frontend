import { CirclePlus, CircleX, LogOut, Undo2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'

import { ProjectCardAccount } from '@/components/ProjectCardAccount'
import { ProjectForm } from '@/components/ProjectForm'

import { pageConfig } from '@/config/page.config'

import { removeFromStorage } from '@/services/auth/auth.helper'
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

	const onExit = () => {
		removeFromStorage()
		navigate(pageConfig.home)
	}

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

	const navigate = useNavigate()

	return (
		<div>
			<div className='flex items-center justify-evenly mb-10 mt-2'>
				<Link to={pageConfig.home}>
					<Undo2 />
				</Link>

				<p>Личный кабинет</p>

				<button onClick={onExit}>
					<LogOut />
				</button>
			</div>

			<button
				className='mb-2'
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
		</div>
	)
}
