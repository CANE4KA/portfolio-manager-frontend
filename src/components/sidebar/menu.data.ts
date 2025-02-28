import { House, Settings, UserCircle2 } from 'lucide-react'

import { pageConfig } from '@/config/page.config'

import { IMenuItem } from '@/types/menu.types'

export const MENU: IMenuItem[] = [
	{
		icon: House,
		name: 'Home',
		link: pageConfig.home
	},
	{
		icon: UserCircle2,
		name: 'Account',
		link: pageConfig.account
	},
	{
		icon: Settings,
		name: 'Settings',
		link: pageConfig.userSettings
	}
]
