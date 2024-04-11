import React, { useState, useContext, useEffect } from 'react'

// Styles
import { Container, Row, ErrorMessage } from './Wireless.styles'

// Components
import Btn from '../../../UI/Btn'
import WifiTable from './Components/WifiTable'
import SelectedWifi from './Components/SelectedWifi'
import ConnectedWifi from './Components/ConnectedWifi'

// Icons

// Static

// API

// Context
import { RouterContext } from '../../../../store/context/router-context'

function Wireless() {
	const [selectedWifi, setSelectedWifi] = useState('')
	const [wifiPassword, setWifiPassword] = useState('')
	const routerCtx = useContext(RouterContext)

	useEffect(() => {
		if (routerCtx.loggedIn) {
			routerCtx.fetchWifiInterfaces()
		}
	}, [routerCtx.loggedIn])

	function handleSelectWifi(bssid) {
		setSelectedWifi(bssid)
	}

	function handleInputPassword(e) {
		setWifiPassword(e.target.value)
	}

	function handleScanWifi() {
		routerCtx.wifiScan()
	}

	function handleConnectWifi() {
		if (wifiPassword !== '') {
			routerCtx.wifiJoin(selectedWifi, wifiPassword)
			routerCtx.setError('')
		} else {
			routerCtx.setError(new Error('Password can not be empty'))
		}
	}

	if (routerCtx.wifiInterface) {
		return (
			<Container>
				{routerCtx.error && (
					<ErrorMessage>{routerCtx.error.message}</ErrorMessage>
				)}
				<Row>
					<ConnectedWifi
						wifi={routerCtx.wifiInterface}
						loginData={routerCtx.authToken}
						updateSelectedWifi={handleSelectWifi}
					/>
				</Row>
				{routerCtx.loading.loading && (
					<Row>{routerCtx.loading.loadText}</Row>
				)}
			</Container>
		)
	}

	return (
		<Container>
			{routerCtx.error && (
				<ErrorMessage>{routerCtx.error.message}</ErrorMessage>
			)}
			{routerCtx.loading.loading ? (
				<Row>{routerCtx.loading.loadText}</Row>
			) : (
				<Row>
					<Btn onClick={handleScanWifi}>Scan WiFi</Btn>
				</Row>
			)}

			{selectedWifi ? (
				<SelectedWifi
					bssid={selectedWifi}
					wifiList={routerCtx.scanResult}
					onChangePassword={handleInputPassword}
					onConnectWifi={handleConnectWifi}
					wifiPassword={wifiPassword}
				/>
			) : null}
			{routerCtx.scanResult.length > 0 ? (
				<WifiTable
					wifiList={routerCtx.scanResult}
					onSelectWifi={handleSelectWifi}
				/>
			) : null}
		</Container>
	)
}

export default Wireless
