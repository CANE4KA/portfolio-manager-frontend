import { CircleUser, Home } from 'lucide-react'
import { Link, Outlet } from 'react-router'

import { pageConfig } from '@/config/page.config'

export const Navbar = () => {
	return (
		<>
			<nav className='mb-4'>
				<h1>Portfolio Manager</h1>
				<ul className='flex gap-3 justify-center'>
					<li>
						<Link to={pageConfig.home}>
							<Home />
						</Link>
					</li>
					<li>
						<Link to={pageConfig.account}>
							<CircleUser />
						</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}
