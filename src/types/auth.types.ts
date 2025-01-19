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
