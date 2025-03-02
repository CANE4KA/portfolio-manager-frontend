import { LucideProps } from 'lucide-react'
import { memo } from 'react'

export const Loader = memo(({ ...props }: LucideProps) => {
	return (
		<svg
			width={50}
			height={50}
			viewBox='0 0 50 50'
			className='loader'
			{...props}
		>
			<circle
				className='circle'
				cx='25'
				cy='25'
				r={20}
				fill='none'
				strokeWidth={5}
			/>
		</svg>
	)
})
