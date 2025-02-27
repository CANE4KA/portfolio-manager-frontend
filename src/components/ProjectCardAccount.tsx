import { Edit, Trash } from 'lucide-react'

import { IProject } from '@/services/project.service'

interface Props {
	project: IProject
	onDelete: (id: string) => void
	onEdit: (data: IProject) => void
}

export const ProjectCardAccount = ({ project, onDelete, onEdit }: Props) => {
	return (
		<div className='border border-gray-700 p-2'>
			<p>Название: {project.title}</p>
			<div className='text-left'>
				<p>Описание: {project.description ?? 'описания нет'}</p>
				<p>
					Ссылка на проект: <a href={project.url}>{project.url}</a>
				</p>
			</div>

			<div className='flex justify-between'>
				<button onClick={() => onEdit(project)}>
					<Edit />
				</button>
				<button onClick={() => onDelete(project.id)}>
					<Trash />
				</button>
			</div>
		</div>
	)
}
