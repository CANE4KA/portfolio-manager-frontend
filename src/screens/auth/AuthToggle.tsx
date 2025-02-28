import { Dispatch, SetStateAction } from 'react'

interface Props {
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthToggle = ({ isAuth, setIsAuth }: Props) => {
	return (
		<div className='text-sm'>
			{isAuth ? (
				<p>
					Don't have an account yet?{' '}
					<button
						type='button'
						onClick={() => setIsAuth(false)}
						className='hover:text-border transition-colors'
					>
						Sign up
					</button>
				</p>
			) : (
				<p>
					Already have an account?{' '}
					<button
						type='button'
						onClick={() => setIsAuth(true)}
						className='hover:text-border transition-colors'
					>
						Sign in
					</button>
				</p>
			)}
		</div>
	)
}
