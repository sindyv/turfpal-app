import { useContext } from 'react'
import { LoginContext } from '../store/context/login-context'
function useLoginContext() {
	const context = useContext(LoginContext)

	if (!context) {
		throw Error('Please only use hook within context provider')
	}

	return context
}

export default useLoginContext
