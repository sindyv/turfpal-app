import React, { useEffect, useState } from 'react'

// Styles
import { Container, Row } from './Wireless.styles'

// Components
import Card from '../../../UI/Card'
import Btn from '../../../UI/Btn'
import WifiTable from './Components/WifiTable'
import SelectedWifi from './Components/SelectedWifi'
import ConnectedWifi from './Components/ConnectedWifi'

// Icons

// Static

// API
import RouterAPI from '../../../../RouterAPI'

// Hooks
import { useRouterLogin } from '../../../../hooks/useRouterLogin'
import { useRouterWifiScan } from '../../../../hooks/useRouterWifiScan'
import { useRouterWifiJoin } from '../../../../hooks/useRouterWifiJoin'
import { useFetchConnectedWifi } from '../../../../hooks/useRouterGetInterfaces'

function Wireless() {
	const [state, setState] = useState('login')
	const [loggingIn, loginError, loginData] = useRouterLogin()
	const [scanning, wifiScanResult, setScan] = useRouterWifiScan(loginData)
	const [wifiConnected, setFetchInterfaces, wifiChecked] =
		useFetchConnectedWifi(loginData)
	const [selectedWifi, setSelectedWifi] = useState(undefined)
	const [wifiPassword, setWifiPassword] = useState('')
	const [joining, joinResult, setJoin] = useRouterWifiJoin(
		loginData,
		selectedWifi,
		wifiPassword
	)

	useEffect(() => {
		if (loginData?.success && state === 'login') {
			setState('wifiCheck')
			setFetchInterfaces(true)
		}
	}, [loginData, wifiConnected, state])

	function handleSelectWifi(bssid) {
		setSelectedWifi(bssid)
	}

	function handleInputPassword(e) {
		setWifiPassword(e.target.value)
	}

	function handleConnectWifi() {
		setJoin(true)
	}

	if (loggingIn) {
		return <p>Logging in to router ...</p>
	}

	if (loginError) {
		return <p>There was an error logging in to the router!</p>
	}

	if (wifiConnected.length > 0) {
		return <ConnectedWifi wifi={wifiConnected[0]} loginData={loginData} />
	}

	if (loginData.success && wifiChecked) {
		return (
			<Container>
				<Row>
					<Btn onClick={() => setScan(true)}>Scan WiFi</Btn>
				</Row>
				{selectedWifi ? (
					<SelectedWifi
						bssid={selectedWifi}
						wifiList={wifiScanResult}
						onChangePassword={handleInputPassword}
						onConnectWifi={handleConnectWifi}
						wifiPassword={wifiPassword}
					/>
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
}

export default Wireless
