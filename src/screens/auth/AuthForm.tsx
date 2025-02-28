import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

import { useAuthForm } from '@/hooks/useAuthForm'

import { AuthToggle } from './AuthToggle'

export const AuthForm = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	const { handleSubmit, register, onSubmit } = useAuthForm(isAuth)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center gap-2 justify-center'
		>
			<Input
				rules={{ required: true }}
				register={register}
				name='username'
				placeholder='Enter username:'
				type='text'
			/>
			<Input
				rules={{ required: true }}
				register={register}
				name='email'
				placeholder='Enter email:'
				type='email'
			/>
			<Input
				rules={{ required: true }}
				register={register}
				name='password'
				placeholder='Enter password:'
				type='password'
			/>

			<Button>{isAuth ? 'Войти' : 'Зарегистрироваться'}</Button>

			<AuthToggle isAuth={isAuth} setIsAuth={setIsAuth} />
		</form>
	)
}
