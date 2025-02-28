import { Link } from 'react-router'
import { twMerge } from 'tailwind-merge'

import { IMenuItem } from '@/types/menu.types'

interface Props {
	item: IMenuItem
	isActive: boolean
}

export const MenuItem = ({ item, isActive }: Props) => {
	return (
		<Link
			to={item.link}
			className={twMerge(
				'flex items-center gap-2.5 border-b last:border-b-0 border-[#4b4c4e] p-2 pr-5 transition-colors',
				isActive ? 'bg-white/5' : 'hover:text-white/50'
			)}
			title={item.name}
		>
			<item.icon size={20} />
			<span className='mt-0.5'>{item.name}</span>
		</Link>
	)
}
