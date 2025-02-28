import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { ReactRoutes } from './routes/Routes'

import './index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<main className='flex min-h-screen justify-center'>
				<ReactRoutes />
			</main>
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
		</QueryClientProvider>
	</StrictMode>
)
