import { RouteProps } from 'react-router'

import { Account } from '@/screens/account/Account'

import { pageConfig } from '@/config/page.config'

export const PROTECT_ROUTES: RouteProps[] = [
	{
		path: pageConfig.account,
		element: <Account />
	}
]
