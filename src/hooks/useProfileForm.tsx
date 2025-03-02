import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { userService } from '@/services/user.service'

import { IUserForm } from '@/types/auth.types'

export const useProfileForm = (
	setIsEdit: Dispatch<SetStateAction<boolean>>
) => {
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { touchedFields }
	} = useForm<IUserForm>({ mode: 'onChange' })

	const { mutate, isPending: isLoading } = useMutation({
		mutationKey: ['profile update'],
		mutationFn: (data: IUserForm) => userService.update(data),
		onSuccess: () => {
			setIsEdit(false)
			toast.success('Profile update')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const onSubmit = () => {
		const allValues = getValues()
		const changedData: IUserForm = {}

		Object.entries(allValues).forEach(([key, value]) => {
			if (touchedFields[key as keyof IUserForm]) {
				changedData[key as keyof IUserForm] = value
			}
		})

		mutate(changedData)
	}

	return { onSubmit, handleSubmit, isLoading, register, setValue }
}
