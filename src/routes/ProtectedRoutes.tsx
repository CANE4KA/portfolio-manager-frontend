import { Navigate, Outlet } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { useProfile } from '@/hooks/useProfile'

export const ProtectedRoutes = () => {
	const { isLoading, user } = useProfile()

	if (isLoading) return <div>Loading...</div>

	if (!user) {
		return <Navigate to={pageConfig.auth} replace />
	}

	return <Outlet />
}
