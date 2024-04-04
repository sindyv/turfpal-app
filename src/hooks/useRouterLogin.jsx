import { useEffect, useState } from 'react'

// API
import RouterAPI from '../RouterAPI'

export function useRouterLogin() {
	const [loggingIn, setLoggingIn] = useState(false)
	const [loginData, setLoginData] = useState({})
	const [loginError, setLoginError] = useState('')

	useEffect(() => {
		async function routerLogin() {
			setLoggingIn(true)
			try {
				const result = await RouterAPI.login()
				setLoginData(result)
			} catch (error) {
				setError(error || 'Error logging in!')
			}

			setLoggingIn(false)
		}

		routerLogin()

		console.log('Logging in to router.')
	}, [])

	return [loggingIn, loginError, loginData]
}
