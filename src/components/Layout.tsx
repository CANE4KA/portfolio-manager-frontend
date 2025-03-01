import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

import { Header } from './Header'
import { Sidebar } from './sidebar/Sidebar'

export const Layout = () => {
	const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
		const storedValue = localStorage.getItem('isSidebarCollapsed')
		return storedValue ? JSON.parse(storedValue) : false
	})

	const toggleSidebar = () => {
		setIsSidebarCollapsed(!isSidebarCollapsed)
	}

	useEffect(() => {
		localStorage.setItem(
			'isSidebarCollapsed',
			JSON.stringify(isSidebarCollapsed)
		)
	}, [isSidebarCollapsed])

	return (
		<div className='grow flex flex-col'>
			<Header />

			<div className='flex grow'>
				<Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

				<div className='w-full relative mt-2'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
