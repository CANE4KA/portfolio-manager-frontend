import { IUser } from '../types/auth.types'

import { axiosClassic, axiosWithAuth } from '../api/axios'

import { IProject } from './project.service'

export interface IUserResponse {
	user: {
		username: string
		email: string
		profile: {
			createdAt: Date
			updatedAt: Date
			userId: string
			bio: string
			location: string
			website: string
			github: string
			telegram: string
		}
		projects: IProject[]
		skills: {
			userId: string
			skillId: string
		}[]
	}
}

class UserService {
	private BASE_URL = '/user'

	async get() {
		const response = await axiosWithAuth.get<IUserResponse>(this.BASE_URL)
		return response.data
	}

	async getPublic(username: string) {
		const response = await axiosClassic.get<IUserResponse>(
			`${this.BASE_URL}/${username}`
		)
		return response.data
	}

	async update(data: IUser) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}
}

export const userService = new UserService()
