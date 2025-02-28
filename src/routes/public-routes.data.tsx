import { RouteProps } from 'react-router'

import { Home } from '@/screens/home/Home'
import { Profile } from '@/screens/profile/Profile'

import { pageConfig } from '@/config/page.config'

export const PUBLIC_ROUTES: RouteProps[] = [
	{
		index: true,
		element: <Home />
	},
	{
		path: `${pageConfig.profile}/:username`,
		element: <Profile />
	}
]
