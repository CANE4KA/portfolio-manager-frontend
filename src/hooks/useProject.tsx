import { useQuery } from '@tanstack/react-query'

import { projectService } from '@/services/project.service'

export function useProject() {
	const { data, isLoading } = useQuery({
		queryKey: ['project all'],
		queryFn: () => projectService.getAll(),
		retry: 1
	})

	return {
		isLoading,
		projects: data
	}
}
