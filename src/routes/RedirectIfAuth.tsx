import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router'

import { Header } from '@/components/Header'

import { pageConfig } from '@/config/page.config'

import { EnumTokens } from '@/services/auth/auth.helper'

import { useProfile } from '@/hooks/useProfile'

export const RedirectIfAuth = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	const { user } = useProfile()

	if (accessToken && user) return <Navigate to={pageConfig.account} />

	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
