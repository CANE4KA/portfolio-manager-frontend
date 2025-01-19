import { useNavigate } from 'react-router'

import { removeFromStorage } from '../../services/auth/auth.helper'

import { useProfile } from '../../hooks/useProfile'

export const Account = () => {
	const navigate = useNavigate()

	const onClick = () => {
		removeFromStorage()
		navigate('/')
	}

	const { user } = useProfile()

	return (
		<div>
			<div className='flex items-center justify-evenly mb-10 mt-2'>
				<button onClick={() => navigate('/')}>Назад</button>
				<p>Личный кабинет</p>
				<button onClick={onClick}>Выйти</button>
			</div>

			<div className='mb-10'>
				<p>Email: {user?.email}</p>
				<p>Username: {user?.username}</p>
			</div>

			<div className='flex justify-center flex-wrap gap-2'>
				{user?.projects.length
					? user?.projects.map(project => (
							<div key={project.id} className='border border-red-500 p-2'>
								<p>{project.title}</p>
								<p>{project.description}</p>
								<p>{project.url}</p>
							</div>
						))
					: 'Нету проектов'}
			</div>
		</div>
	)
}
