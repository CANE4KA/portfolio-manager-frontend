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
				'rounded px-4 py-2 outline-none border-2 border-transparent focus:border-blue-700 hover:border-blue-700 text-black',
				className
			)}
			{...register(name, rules)}
			{...rest}
		/>
	)
}
