import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext({
	loggedin: false,
	login: ({ username, password }) => {},
	logout: () => {},
	user: '',
})
function LoginContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false)
	const [user, setUser] = useState(null)

	const handleLogin = ({ username, password }) => {
		if (
			(username === 'admin' && password === '1234') ||
			(username === 'user' && password === 'turfpal')
		) {
			localStorage.setItem(
				'loginInformation',
				JSON.stringify({
					loggedIn: true,
					user: username,
					timestamp: Date.now(),
				})
			)
			setLoggedIn(true)
		}
	}

	const handleLogout = () => {
		localStorage.removeItem('loginInformation')
		setLoggedIn(false)
	}

	const checkLogin = () => {
		const loginData =
			JSON.parse(localStorage.getItem('loginInformation')) ?? false
		if (loginData != null) {
			if (Date.now() - loginData.timestamp < 7 * 24 * 60 * 60 * 1000) {
				setUser(loginData.user)
				return loginData.loggedIn
			}
		} else {
			return false
		}
	}

	useEffect(() => {
		setLoggedIn(checkLogin())
	}, [])

	const value = {
		loggedIn: loggedIn,
		login: handleLogin,
		logout: handleLogout,
		user: user,
	}

	return (
		<LoginContext.Provider value={value}>{children}</LoginContext.Provider>
	)
}

export default LoginContextProvider
