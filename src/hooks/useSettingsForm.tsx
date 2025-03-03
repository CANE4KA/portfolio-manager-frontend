import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IProfile, profileService } from '@/services/profile.service'

export const useSettingsForm = (
	setIsEdit: Dispatch<SetStateAction<boolean>>
) => {
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		formState: { touchedFields }
	} = useForm<IProfile>({ mode: 'onChange' })

	const { mutate, isPending: isLoading } = useMutation({
		mutationKey: ['settings update'],
		mutationFn: (data: IProfile) => profileService.update(data),
		onSuccess: () => {
			setIsEdit(false)
			toast.success('Settings update')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const onSubmit = () => {
		const allValues = getValues()
		const changedData: IProfile = {}

		Object.entries(allValues).forEach(([key, value]) => {
			if (touchedFields[key as keyof IProfile]) {
				changedData[key as keyof IProfile] = value
			}
		})

		mutate(changedData)
	}

	return { onSubmit, handleSubmit, isLoading, register, setValue }
}
