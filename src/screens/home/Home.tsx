import { ProjectCard } from '@/components/ProjectCard'

import { useProject } from '@/hooks/useProject'

export const Home = () => {
	const { projects } = useProject()

	return (
		<div>
			<div className='mb-5'>
				<h2>Добро пожаловать!</h2>
				<p>Создайте и управляйте своим портфолио.</p>
			</div>

			<div className='flex justify-center gap-x-4 gap-y-6 flex-wrap'>
				{projects?.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}
