import { useEffect, useState } from 'react'

// API
import RouterAPI from '../RouterAPI'

export function useRouterWifiScan(loginData) {
	const [scan, setScan] = useState(false)
	const [scanning, setScanning] = useState(false)
	const [wifiScanResult, setWifiScanResult] = useState([])
	const [wifiScanError, setWifiScanError] = useState('')
	useEffect(() => {
		async function scanWifi(authToken) {
			setScanning(true)
			try {
				const result = await RouterAPI.wifiScan(authToken)
				setWifiScanResult(result.data)
			} catch (error) {
				setWifiScanError(error || 'Error scanning WiFis')
			}

			setScanning(false)
		}

		if (scan) {
			scanWifi(loginData.data.token)
			setScan(false)
		}
	}, [scan])

	return [scanning, wifiScanResult, setScan, wifiScanError]
}
