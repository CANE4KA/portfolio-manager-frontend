import { InputHTMLAttributes } from 'react'
import {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Input<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	register: UseFormRegister<T>
	name: Path<T>
	rules?: RegisterOptions<T, Path<T>>
}

export const Input = <T extends FieldValues>({
	className,
	register,
	name,
	rules,
	...rest
}: Input<T>) => {
	return (
		<input
			className={twMerge(
				'rounded px-4 py-2 outline-none border focus:border-primary text-gray-50 placeholder:text-gray-50/50 bg-transparent border-border transition-colors',
				className
			)}
			{...register(name, rules)}
			{...rest}
		/>
	)
}
