import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'motion/react'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

export const Providers = ({ children }: { children: ReactNode }) => {
	const client = new QueryClient()

	return (
		<QueryClientProvider client={client}>
			<LazyMotion features={domAnimation}>
				<main className='flex flex-col min-h-screen'>{children}</main>
				<Toaster
					position='bottom-right'
					reverseOrder={false}
					toastOptions={{
						style: {
							borderRadius: '5px',
							background: '#333',
							color: '#fff'
						}
					}}
				/>
			</LazyMotion>
		</QueryClientProvider>
	)
}
