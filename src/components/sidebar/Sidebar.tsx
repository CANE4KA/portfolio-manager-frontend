import Cookies from 'js-cookie'
import { LogIn, LogOut } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { EnumTokens, removeFromStorage } from '@/services/auth/auth.helper'

import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export const Sidebar = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	const onClick = () => {
		accessToken && removeFromStorage()
		navigate(accessToken ? pageConfig.home : pageConfig.auth)
	}

	return (
		<aside className='border-r border-solid border-border flex flex-col justify-between items-center pb-5'>
			<div>
				{MENU.map(item => (
					<MenuItem
						item={item}
						key={item.link}
						isActive={pathname === item.link}
					/>
				))}
			</div>

			<button onClick={onClick} title={accessToken ? 'Log Out' : 'Log In'}>
				{accessToken ? <LogOut /> : <LogIn />}
			</button>
		</aside>
	)
}
