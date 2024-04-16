import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AllValuesContextProvider from './store/context/allValues-context'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './i18n'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AllValuesContextProvider>
				<App />
			</AllValuesContextProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
