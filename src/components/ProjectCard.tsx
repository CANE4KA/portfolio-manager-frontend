import { Link } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { IProjectAll } from '@/services/project.service'

export const ProjectCard = ({ project }: { project: IProjectAll }) => {
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
				<p>
					Работу делал:{' '}
					<a href={`${pageConfig.profile}/${project.user.username}`}>
						{project.user.username}
					</a>
				</p>
			</div>
		</div>
	)
}
