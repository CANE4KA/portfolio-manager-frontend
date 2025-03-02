import { axiosClassic, axiosWithAuth } from '@/api/axios'

export interface IProject {
	id: string
	title: string
	description: string
	url: string
}

export interface IProjectAll extends IProject {
	user?: {
		username: string
	}
}

class ProjectService {
	private BASE_URL = '/user/project'

	async get() {
		const response = await axiosWithAuth.get<IProject[]>(
			`${this.BASE_URL}/user`
		)
		return response.data
	}

	async getAll() {
		const response = await axiosClassic.get<IProjectAll[]>(
			`${this.BASE_URL}/all`
		)
		return response.data
	}

	async create(data: IProject) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response.data
	}

	async update(id: string, data: IProject) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response.data
	}
}

export const projectService = new ProjectService()
