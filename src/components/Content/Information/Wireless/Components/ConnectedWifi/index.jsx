import { Container, Row, Content } from './ConnectedWifi.styles'

import Card from '../../../../../UI/Card'
import Btn from '../../../../../UI/Btn'
import { Switch } from '@mui/material'
import { useEffect, useState } from 'react'
import { useRouterWifiFailover } from '../../../../../../hooks/useRouterWifiFailover'
import RouterAPI from '../../../../../../RouterAPI'

function ConnectedWifi({ wifi, loginData }) {
	const enabled = wifi.enabled === '1'
	const [failoverInterface, setFailoverInterface] = useState({})
	const [failoverCommand, setFailoverCommand] = useState(false)
	const [failoverResult, setFailover] = useRouterWifiFailover(
		loginData,
		failoverInterface,
		failoverCommand
	)

	useEffect(() => {
		async function fetchInterfaces() {
			try {
				const result = await RouterAPI.wifiFetchFailoverInterfaces(
					loginData.data.token
				)

				const interfjes = result.data.filter(
					(item) => item.name === wifi.network
				)

				if (interfjes.length > 0) {
					setFailoverInterface(interfjes[0])
				}

				console.log(failoverInterface)
			} catch (error) {
				console.log(error)
			}
		}

		fetchInterfaces()
	}, [])

	function handleSwitchFailover(e) {
		setFailoverCommand(e.target.checked)
		setFailover(true)
	}

	return (
		<Container>
			<Card>
				<Content>
					<Row>
						<span>
							<div>{wifi.ssid}</div>
							<div>{enabled ? 'Connected' : 'Disconnected'}</div>
						</span>
						<span className='failover'>
							<div>Failover</div>
							<Switch
								checked={failoverResult}
								size='small'
								onChange={handleSwitchFailover}
							/>
						</span>
					</Row>
					<Row>
						<Btn
							backgroundColorDeselected={
								enabled ? 'orange' : 'var(--turfpalColor)'
							}
							textColorDeselected={enabled ? 'black' : 'white'}
						>
							{enabled ? 'Disconnect' : 'Connect'}
						</Btn>
						<Btn
							backgroundColorDeselected={'#fcd3d2'}
							backgroundColorSelected={
								'var(--colorDangerPrimary)'
							}
							textColorSelected={'black'}
							textColorDeselected={'black'}
						>
							Forget
						</Btn>
					</Row>
				</Content>
			</Card>
		</Container>
	)
}

export default ConnectedWifi
