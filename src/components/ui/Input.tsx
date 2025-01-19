import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { IUserForm } from '../../types/auth.types'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	register: UseFormRegister<IUserForm>
	name: keyof IUserForm
}

export const Input = ({ className, register, name, ...rest }: Props) => {
	return (
		<input
			className={twMerge(
				'rounded px-4 py-2 outline-none border-2 border-transparent focus:border-blue-700 hover:border-blue-700 text-black',
				className
			)}
			{...register(name, { required: true })}
			{...rest}
		/>
	)
}
