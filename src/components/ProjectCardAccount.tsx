import { Edit, Trash } from 'lucide-react'
import { Link } from 'react-router'

import { IProject } from '@/services/project.service'

interface Props {
	project: IProject
	onDelete: (id: string) => void
	onEdit: (data: IProject) => void
}

export const ProjectCardAccount = ({ project, onDelete, onEdit }: Props) => {
	return (
		<div className='border border-border p-2'>
			<p>Название: {project.title}</p>

			<div className='text-left'>
				<p>Описание: {project.description ?? 'описания нет'}</p>
				<p>
					Ссылка на проект:{' '}
					<Link to={project.url} target='_blank'>
						{project.url}
					</Link>
				</p>
			</div>

			<div className='flex justify-between'>
				<button onClick={() => onEdit(project)} title='Edit project'>
					<Edit />
				</button>

				<button onClick={() => onDelete(project.id)} title='Delete project'>
					<Trash />
				</button>
			</div>
		</div>
	)
}
