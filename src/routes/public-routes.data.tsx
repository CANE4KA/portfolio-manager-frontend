import { Home } from 'lucide-react'
import { RouteProps } from 'react-router'

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
