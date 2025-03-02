import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router'

import { Loader } from '@/components/ui/Loader'

import { pageConfig } from '@/config/page.config'

import { EnumTokens } from '@/services/auth/auth.helper'

import { useProfile } from '@/hooks/useProfile'

export const ProtectedRoutes = () => {
	const { isLoading, user } = useProfile()
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	if (isLoading) return <Loader />

	if (!user || !accessToken) {
		return <Navigate to={pageConfig.auth} replace />
	}

	return <Outlet />
}
