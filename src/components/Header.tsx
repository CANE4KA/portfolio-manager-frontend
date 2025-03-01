import { Link } from 'react-router'

import { pageConfig } from '@/config/page.config'

export const Header = () => {
	return (
		<header className='border rounded border-border m-2 py-1.5'>
			<Link to={pageConfig.home} className='text-3xl'>
				<b>
					<span className='uppercase text-primary'>Portfolio</span> Manager
				</b>
			</Link>
		</header>
	)
}
