import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router'

import { userService } from '@/services/user.service'

export const Profile = () => {
	const { username } = useParams()

	if (!username) return 'Ошибка'

	const { data } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getPublic(username),
		retry: 1
	})
	console.log(data)

	return <div>Profile</div>
}
