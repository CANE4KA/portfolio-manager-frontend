import { useMutation, useQueryClient } from '@tanstack/react-query'

import { projectService } from '@/services/project.service'

export const useDeleteProject = () => {
	const queryClient = useQueryClient()

	const { mutate, isPending: isLoading } = useMutation({
		mutationKey: ['project delete'],
		mutationFn: (id: string) => projectService.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		}
	})

	return { mutate, isLoading }
}
