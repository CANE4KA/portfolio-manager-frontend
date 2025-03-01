import { Link } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { IMenuItem } from '@/types/menu.types'

interface Props {
	item: IMenuItem
	isActive: boolean
	isCollapsed: boolean
}

export const MenuItem = ({ item, isActive, isCollapsed }: Props) => {
	return (
		<Link
			to={item.link}
			className={twMerge(
				'flex items-center gap-2.5 border-t border-[#4b4c4e] p-2 transition-colors overflow-hidden',
				isActive ? 'bg-white/5' : 'hover:text-white/50',
				isCollapsed && 'justify-center'
			)}
			title={item.name}
		>
			<item.icon />
			{!isCollapsed && <span>{item.name}</span>}
		</Link>
	)
}
