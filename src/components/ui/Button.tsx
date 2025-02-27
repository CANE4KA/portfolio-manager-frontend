import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
}

export const Button = ({ className, children, ...rest }: Button) => {
	return (
		<button
			className={twMerge(
				className,
				'rounded border border-transparent px-4 py-2 bg-[#1a1a1a] cursor-pointer transition-colors hover:border-[#646cff]'
			)}
			{...rest}
		>
			{children}
		</button>
	)
}
