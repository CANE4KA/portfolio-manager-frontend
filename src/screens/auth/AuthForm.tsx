import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Loader } from '@/components/ui/Loader'

import { useAuthForm } from '@/hooks/useAuthForm'

import { AuthToggle } from './AuthToggle'

export const AuthForm = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false)

	const { handleSubmit, register, onSubmit, isLoading } = useAuthForm(isAuth)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col items-center gap-2 justify-center'
		>
			<Input
				rules={{ required: true }}
				register={register}
				name='username'
				placeholder='Username'
				type='text'
			/>
			<Input
				rules={{ required: true }}
				register={register}
				name='email'
				placeholder='Email'
				type='email'
			/>
			<Input
				rules={{
					required: true
				}}
				register={register}
				name='password'
				placeholder='Password'
				type='password'
			/>

			<Button>{isLoading ? <Loader /> : isAuth ? 'Sign in' : 'Sign up'}</Button>

			<AuthToggle isAuth={isAuth} setIsAuth={setIsAuth} />
		</form>
	)
}
