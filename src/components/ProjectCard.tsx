import { Link } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { IProjectAll } from '@/services/project.service'

import { Button } from './ui/Button'

export const ProjectCard = ({ project }: { project: IProjectAll }) => {
	return (
		<div className='bg-white/10 p-4 pb-0 rounded flex flex-col gap-3 shadow-lg w-72'>
			<p className='overflow-hidden'>{project.title}</p>

			{project.user && (
				<Link
					to={`${pageConfig.profile}/${project.user.username}`}
					className='hover:text-primary transition-colors'
				>
					Смотреть все работы
				</Link>
			)}

			<Link
				to={`/project/${project.id}`}
				target='_blank'
				className='translate-y-1/3'
			>
				<Button className='shadow-lg'>Подробнее</Button>
			</Link>
		</div>
	)
}
