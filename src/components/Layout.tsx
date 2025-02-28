import { Outlet } from 'react-router'

import { Header } from './Header'
import { Sidebar } from './sidebar/Sidebar'

export const Layout = () => {
	return (
		<div className='grow flex flex-col'>
			<Header />

			<div className='flex grow'>
				<Sidebar />

				<div className='w-full relative mt-2'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
