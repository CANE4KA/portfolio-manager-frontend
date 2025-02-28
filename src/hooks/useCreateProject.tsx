import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'

import { IProject, projectService } from '@/services/project.service'

export const useCreateProject = (isUpdate: boolean) => {
	const queryClient = useQueryClient()

	const { mutate: mutateCreate, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['project create'],
		mutationFn: (data: IProject) => projectService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
			toast.success('Project add success')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const { mutate: mutateUpdate, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['project update'],
		mutationFn: (data: IProject) => projectService.update(data.id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
			toast.success('Project update success')
		},
		onError(error) {
			if (axios.isAxiosError(error)) {
				toast.error(error.response?.data?.message)
			}
		}
	})

	const mutate = isUpdate ? mutateUpdate : mutateCreate
	const isLoading = isUpdate ? isLoadingUpdate : isLoadingCreate

	return { mutate, isLoading }
}
