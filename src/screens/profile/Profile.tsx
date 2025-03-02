import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { ProjectCard } from '@/components/ProjectCard'

import { userService } from '@/services/user.service'

export const Profile = () => {
	const { username } = useParams()

	if (!username) return 'Ошибка'

	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getPublic(username),
		retry: 1
	})

	return (
		<div className='flex flex-col gap-4 items-center'>
			<div className='text-left p-4 rounded bg-white/10'>
				<p>Username: {data?.user.username || 'N/A'}</p>
				<p>Bio: {data?.user?.profile?.bio || 'N/A'}</p>
				<p>Location: {data?.user?.profile?.location || 'N/A'}</p>
				<p>Github: {data?.user?.profile?.github || 'N/A'}</p>
				<p>Telegram: {data?.user?.profile?.telegram || 'N/A'}</p>
				<p>Website: {data?.user?.profile?.website || 'N/A'}</p>
			</div>

			<div className='flex justify-center gap-x-4 gap-y-6 flex-wrap'>
				{data?.user.projects?.map(project => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}
