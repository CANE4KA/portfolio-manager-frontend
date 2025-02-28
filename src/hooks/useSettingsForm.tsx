import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IProfile, profileService } from '@/services/profile.service'

export const useSettingsForm = (
	setIsEdit: Dispatch<SetStateAction<boolean>>
) => {
	const { register, handleSubmit, setValue } = useForm<IProfile>()

	const { mutate, isPending: isLoading } = useMutation({
		mutationKey: ['settings update'],
		mutationFn: (data: IProfile) => profileService.update(data),
		onSuccess: () => {
			setIsEdit(false)
			toast.success('Profile update')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.success(error.response?.data?.message)
			}
		}
	})

	const onSubmit = (data: IProfile) => {
		mutate(data)
	}

	return { onSubmit, handleSubmit, isLoading, register, setValue }
}
