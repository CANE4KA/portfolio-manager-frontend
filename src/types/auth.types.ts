import { IProject } from '@/services/project.service'

export interface IUserForm {
	username?: string
	email?: string
	password?: string
}

export interface IUser extends IUserForm {
	id?: string
	createdAt?: string
	updatedAt?: string
}

export interface IAuthResponse {
	user: IUser
	accessToken: string
}

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
