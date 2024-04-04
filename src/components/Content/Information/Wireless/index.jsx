import React, { useState } from 'react'

// Styles
import { Container, Row } from './Wireless.styles'

// Components

import Btn from '../../../UI/Btn'
import WifiTable from './Components/WifiTable'
import SelectedWifi from './Components/SelectedWifi'

// Icons

// Static

// API
import RouterAPI from '../../../../RouterAPI'

// Hooks
import { useRouterLogin } from '../../../../hooks/useRouterLogin'
import { useRouterWifiScan } from '../../../../hooks/useRouterWifiScan'

function Wireless() {
	const [loggingIn, loginError, loginData] = useRouterLogin()
	const [scanning, wifiScanResult, setScan] = useRouterWifiScan(loginData)

	const [selectedWifi, setSelectedWifi] = useState(undefined)

	function handleSelectWifi(bssid) {
		setSelectedWifi(bssid)
	}

	if (loggingIn) {
		return <p>Logging in to router ...</p>
	}

	if (loginError) {
		return <p>There was an error logging in to the router!</p>
	}

	return (
		<Container>
			<Row>
				<Btn onClick={() => setScan(true)}>Scan WiFi</Btn>
			</Row>
			{selectedWifi ? (
				<SelectedWifi bssid={selectedWifi} wifiList={wifiScanResult} />
			) : null}
			{scanning ? (
				<Row>
					{' '}
					<p>Scanning for WiFi...</p>
				</Row>
			) : null}
			{wifiScanResult.length > 0 ? (
				<WifiTable
					wifiList={wifiScanResult}
					onSelectWifi={handleSelectWifi}
				/>
			) : null}
		</Container>
	)
}

export default Wireless
