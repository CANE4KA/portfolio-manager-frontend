import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router'

import { pageConfig } from '../config/page.config'

import { EnumTokens } from '../services/auth/auth.helper'

export const RedirectIfAuth = () => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	if (accessToken) return <Navigate to={pageConfig.account} />

	return <Outlet />
}
