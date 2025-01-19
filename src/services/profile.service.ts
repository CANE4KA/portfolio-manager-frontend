import { axiosWithAuth } from '../api/axios'

export interface IProfile {
	bio: string
	location: string
	website: string
	github: string
	telegram: string
}

class ProfileService {
	private BASE_URL = '/user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfile>(this.BASE_URL)
		return response.data
	}

	async create(data: IProfile) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response.data
	}

	async update(data: IProfile) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}

	async delete() {
		const response = await axiosWithAuth.delete(this.BASE_URL)
		return response.data
	}
}

export const profileService = new ProfileService()
