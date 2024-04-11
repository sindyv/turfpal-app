import React from 'react'

import { CardContainer, Container } from './WifiTable.styles'

import Card from '../../../../../UI/Card'

import SignalWifi0BarOutlinedIcon from '@mui/icons-material/SignalWifi0BarOutlined'
import SignalWifi1BarOutlinedIcon from '@mui/icons-material/SignalWifi1BarOutlined'
import SignalWifi2BarOutlinedIcon from '@mui/icons-material/SignalWifi2BarOutlined'
import SignalWifi3BarOutlinedIcon from '@mui/icons-material/SignalWifi3BarOutlined'
import SignalWifi4BarOutlinedIcon from '@mui/icons-material/SignalWifi4BarOutlined'

function WifiTable({ wifiList, onSelectWifi }) {
	// Sort by signal strength
	const sortedWifiList = wifiList.sort((a, b) => b.signal - a.signal)

	return (
		<Container>
			{sortedWifiList.map((wifi) => {
				if (wifi.ssid) {
					// Mapping of icons based on signal strength.
					// The signal strength [%] is not based on anything concrete,
					// just based on the first google searh result
					const signalStrength =
						((wifi.signal * -1 - 100) / (30 - 100)) * 100
					let SignalIcon = SignalWifi0BarOutlinedIcon

					if (signalStrength > 90) {
						SignalIcon = SignalWifi4BarOutlinedIcon
					} else if (signalStrength > 75) {
						SignalIcon = SignalWifi3BarOutlinedIcon
					} else if (signalStrength > 50) {
						SignalIcon = SignalWifi2BarOutlinedIcon
					} else if (signalStrength > 25) {
						SignalIcon = SignalWifi1BarOutlinedIcon
					}
					return (
						<Card key={wifi.bssid}>
							<CardContainer
								onClick={() => onSelectWifi(wifi.bssid)}
							>
								<span>{wifi.ssid}</span>
								<span>
									{signalStrength.toFixed(0)}%<SignalIcon />
								</span>
							</CardContainer>
						</Card>
					)
				}
			})}
		</Container>
	)
}

export default WifiTable
