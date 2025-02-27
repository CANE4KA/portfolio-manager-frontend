import { useMutation, useQueryClient } from '@tanstack/react-query'

import { IProject, projectService } from '@/services/project.service'

export const useCreateProject = (isUpdate: boolean) => {
	const queryClient = useQueryClient()

	const { mutate: mutateCreate, isPending: isLoadingCreate } = useMutation({
		mutationKey: ['project create'],
		mutationFn: (data: IProject) => projectService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		}
	})

	const { mutate: mutateUpdate, isPending: isLoadingUpdate } = useMutation({
		mutationKey: ['project update'],
		mutationFn: (data: IProject) => projectService.update(data.id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		}
	})

	const mutate = isUpdate ? mutateUpdate : mutateCreate
	const isLoading = isUpdate ? isLoadingUpdate : isLoadingCreate

	return { mutate, isLoading }
}
