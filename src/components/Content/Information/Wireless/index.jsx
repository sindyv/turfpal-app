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
	const [scanning, wifiScanResult, setScan, wifiScanError] =
		useRouterWifiScan(loginData)
	const [wifiConnected, setFetchInterfaces, wifiChecked, setWifiChecked] =
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

		if (state === 'wifiCheck' && wifiChecked && wifiConnected.length > 0) {
			setState('showConnectedWifi')
		} else if (
			state === 'wifiCheck' &&
			wifiChecked &&
			wifiConnected.length === 0
		) {
			setState('showScanForWifi')
		}
	}, [loginData, wifiConnected, state, wifiChecked])

	function handleSelectWifi(bssid) {
		setSelectedWifi(bssid)
	}

	function handleInputPassword(e) {
		setWifiPassword(e.target.value)
	}

	function handleConnectWifi() {
		setJoin(true)
		setFetchInterfaces(true)
		setState('wifiCheck')
		// setWifiPassword('')
		setWifiChecked(false)
	}

	const updateWifi = () => {
		setFetchInterfaces(true)
		setState('wifiCheck')
		setWifiChecked(false)
		setSelectedWifi(undefined)
	}

	if (loggingIn) {
		return <p>Logging in to router ...</p>
	}

	if (loginError) {
		return <p>There was an error logging in to the router!</p>
	}

	if (state === 'showConnectedWifi') {
		return (
			<ConnectedWifi
				wifi={wifiConnected[0]}
				loginData={loginData}
				updateState={updateWifi}
			/>
		)
	}

	if (joining) {
		return <p>Connecting to WiFi ...</p>
	}

	if (wifiScanError !== '') {
		return <p>{wifiScanError}</p>
	}

	if (loginData.success && wifiChecked && state === 'showScanForWifi') {
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
