import { useLocation } from 'react-router'

import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export const Menu = ({ isCollapsed }: { isCollapsed: boolean }) => {
	const { pathname } = useLocation()

	return (
		<div>
			{MENU.map(item => (
				<MenuItem
					item={item}
					key={item.link}
					isActive={pathname === item.link}
					isCollapsed={isCollapsed}
				/>
			))}
		</div>
	)
}
