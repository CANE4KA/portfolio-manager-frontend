import * as m from 'motion/react-m'
import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const Button = ({ className, children, ...rest }: Button) => {
	return (
		<m.div
			whileHover={{
				x: -2,
				y: -2,
				rotate: 1,
				transition: {
					type: 'spring',
					stiffness: 3000,
					damping: 200
				}
			}}
		>
			<button
				className={twMerge(
					className,
					'rounded px-4 py-2 bg-primary cursor-pointer text-gray-50'
				)}
				{...rest}
			>
				{children}
			</button>
		</m.div>
	)
}
