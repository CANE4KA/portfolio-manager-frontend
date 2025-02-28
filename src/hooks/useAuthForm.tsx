import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

import { pageConfig } from '@/config/page.config'

import { authService } from '@/services/auth/auth.service'

import { IUserForm } from '@/types/auth.types'

export const useAuthForm = (isAuth: boolean) => {
	const navigate = useNavigate()

	const { register, handleSubmit, reset } = useForm<IUserForm>()

	const { mutate: mutate, isPending: isLoading } = useMutation({
		mutationKey: [isAuth ? 'login' : 'register'],
		mutationFn: (data: IUserForm) =>
			authService.main(isAuth ? 'login' : 'register', data),
		onSuccess() {
			reset()
			navigate(pageConfig.account)
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const onSubmit = (data: IUserForm) => {
		mutate(data)
	}

	return { onSubmit, handleSubmit, isLoading, register }
}
