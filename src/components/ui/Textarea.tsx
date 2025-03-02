import { TextareaHTMLAttributes } from 'react'
import {
	FieldValues,
	Path,
	RegisterOptions,
	UseFormRegister
} from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface TextareaProps<T extends FieldValues>
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	register: UseFormRegister<T>
	name: Path<T>
	rules?: RegisterOptions<T, Path<T>>
}

export const Textarea = <T extends FieldValues>({
	className,
	register,
	name,
	rules,
	...rest
}: TextareaProps<T>) => {
	return (
		<textarea
			style={{ height: 150 }}
			className={twMerge(
				'rounded px-4 py-2 outline-none border focus:border-primary text-gray-50 placeholder:text-gray-50/50 bg-transparent border-border transition-colors',
				className
			)}
			{...register(name, rules)}
			{...rest}
		/>
	)
}
