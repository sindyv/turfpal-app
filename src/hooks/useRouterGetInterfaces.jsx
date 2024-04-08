import { useEffect, useState } from 'react'

// API
import RouterAPI from '../RouterAPI'

export function useFetchConnectedWifi(loginData) {
	const [fetchInterfaces, setFetchInterfaces] = useState(false)
	const [wifiConnected, setWifiConnected] = useState([])
	const [wifiChecked, setWifiChecked] = useState(false)

	useEffect(() => {
		async function fetchWifi() {
			try {
				const result = await RouterAPI.wifiFetchInterfaces(
					loginData?.data?.token
				)

				const connectedInterface = result?.data.filter(
					(item) => item['network'] === 'wifi1'
				)

				setWifiConnected(connectedInterface)
				setWifiChecked(true)
			} catch (error) {
				console.log(error)
			}
		}

		if (fetchInterfaces) {
			fetchWifi()
			setFetchInterfaces(false)
		}
	}, [fetchInterfaces, loginData])

	return [wifiConnected, setFetchInterfaces, wifiChecked, setWifiChecked]
}
