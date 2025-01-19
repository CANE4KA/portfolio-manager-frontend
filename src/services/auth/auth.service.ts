import { axiosClassic } from '../../api/axios'

import { IAuthResponse, IUserForm } from '../../types/auth.types'

import { saveTokenStorage } from './auth.helper'

export const authService = {
	async main(type: 'login' | 'register', data: IUserForm) {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/${type}`,
			data
		)

		if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

		return response
	}
}
