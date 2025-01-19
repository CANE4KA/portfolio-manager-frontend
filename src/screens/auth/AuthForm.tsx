import { useState } from 'react'

import { Input } from '../../components/ui/Input'

import { useAuthForm } from '../../hooks/useAuthForm'

export const AuthForm = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	const { handleSubmit, register, onSubmit } = useAuthForm(isAuth)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center gap-2'
		>
			<Input
				register={register}
				name='username'
				placeholder='Enter username:'
				type='text'
			/>
			<Input
				register={register}
				name='email'
				placeholder='Enter email:'
				type='email'
			/>
			<Input
				register={register}
				name='password'
				placeholder='Enter password:'
				type='password'
			/>

			<button>{isAuth ? 'Войти' : 'Зарегистрироваться'}</button>

			<button type='button' onClick={() => setIsAuth(!isAuth)}>
				{isAuth ? 'Хочу зарегистрироваться' : 'Хочу войти'}
			</button>
		</form>
	)
}
