import Cookies from 'js-cookie'
import { LogIn, LogOut, PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import * as m from 'motion/react-m'
import { useNavigate } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { EnumTokens, removeFromStorage } from '@/services/auth/auth.helper'

import { Menu } from './Menu'

interface Props {
	isCollapsed: boolean
	onToggle: () => void
}

export const Sidebar = ({ isCollapsed, onToggle }: Props) => {
	const navigate = useNavigate()

	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	const onClick = () => {
		accessToken && removeFromStorage()
		navigate(accessToken ? pageConfig.home : pageConfig.auth)
	}

	return (
		<m.aside
			className={`border border-border rounded flex flex-col justify-between items-center pb-5 m-2 mt-0 relative shadow-lg`}
			animate={{ width: isCollapsed ? 60 : 192 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}
		>
			<div className='w-full'>
				<button
					onClick={onToggle}
					className='w-full flex justify-center py-2'
					title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
				>
					{isCollapsed ? <PanelLeftOpen /> : <PanelRightOpen />}
				</button>

				<Menu isCollapsed={isCollapsed} />
			</div>

			<button onClick={onClick} title={accessToken ? 'Log Out' : 'Log In'}>
				{accessToken ? <LogOut /> : <LogIn />}
			</button>
		</m.aside>
	)
}
