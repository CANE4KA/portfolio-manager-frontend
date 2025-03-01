import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from './routes/Providers'
import { ReactRoutes } from './routes/Routes'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Providers>
			<ReactRoutes />
		</Providers>
	</StrictMode>
)
