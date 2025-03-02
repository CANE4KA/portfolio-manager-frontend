import { Link } from 'react-router'

import { IProject } from '@/services/project.service'

import { Button } from './ui/Button'

interface Props {
	project: IProject
	onDelete: (id: string) => void
	onEdit: (data: IProject) => void
}

export const ProjectCardAccount = ({ project, onDelete, onEdit }: Props) => {
	return (
		<div className='bg-white/10 p-4 rounded w-72 flex flex-col justify-between gap-4'>
			<div className='text-left break-words flex flex-col gap-2'>
				<b className='text-center'>{project.title}</b>

				<p className='overflow-hidden'>
					{project.description ?? 'описания нет'}
				</p>

				<p className='overflow-hidden'>
					Ссылка на проект:{' '}
					<Link to={project.url} target='_blank'>
						{project.url}
					</Link>
				</p>
			</div>

			<div className='flex justify-between'>
				<Button onClick={() => onEdit(project)} title='Edit project'>
					Edit
				</Button>

				<Button onClick={() => onDelete(project.id)} title='Delete project'>
					Delete
				</Button>
			</div>
		</div>
	)
}
