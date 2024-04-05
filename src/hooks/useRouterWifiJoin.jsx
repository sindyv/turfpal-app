import { useEffect, useState } from 'react'

// API
import RouterAPI from '../RouterAPI'

export function useRouterWifiJoin(loginData, selectedWifi, wifiPassword) {
	const [join, setJoin] = useState(false)
	const [joining, setJoining] = useState(false)
	const [joinResult, setJoinResult] = useState([])
	const [joinError, setJoinError] = useState('')

	useEffect(() => {
		async function joinWifi() {
			setJoining(true)
			try {
				const result = await RouterAPI.wifiJoin(
					loginData.data.token,
					selectedWifi,
					wifiPassword
				)
				setJoinResult(result.data)
			} catch (error) {
				setJoinError(error || 'Error scanning WiFis')
			}

			setJoining(false)
		}

		if (join) {
			joinWifi()
			setJoin(false)
		}
	}, [join])

	return [joining, joinResult, setJoin]
}
