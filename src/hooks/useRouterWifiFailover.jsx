import { useEffect, useState } from 'react'

// API
import RouterAPI from '../RouterAPI'

export function useRouterWifiFailover(loginData, selectedWifi, command) {
	const [failover, setFailover] = useState(false)
	const [failoverError, setFailoverError] = useState('')
	const [failoverResult, setFailoverResult] = useState(false)

	useEffect(() => {
		async function putFailover() {
			try {
				const result = await RouterAPI.wifiFailoverEnabled(
					loginData.data.token,
					selectedWifi,
					command
				)
				console.log(result)
			} catch (error) {
				setFailoverError(error || 'Error setting failover')
			}
		}

		if (failover) {
			putFailover()
			setFailover(false)
		}
	}, [failover])

	return [failoverResult, setFailover, failoverError]
}
