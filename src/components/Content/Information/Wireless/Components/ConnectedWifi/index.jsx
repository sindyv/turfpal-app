import { Container, Row, Content } from './ConnectedWifi.styles'

import Card from '../../../../../UI/Card'
import Btn from '../../../../../UI/Btn'

import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

import { Switch } from '@mui/material'
import { useEffect, useState } from 'react'
import { useRouterWifiFailover } from '../../../../../../hooks/useRouterWifiFailover'
import RouterAPI from '../../../../../../RouterAPI'

function ConnectedWifi({ wifi, loginData, updateState }) {
	const enabled = wifi.enabled === '1'
	const [failoverInterface, setFailoverInterface] = useState({})
	const [failoverCommand, setFailoverCommand] = useState(false)
	const [setFailover] = useRouterWifiFailover(
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
					setFailoverInterface(interfjes[0].id)
					setFailoverCommand(
						interfjes[0].enabled === '1' ? true : false
					)
				}
			} catch (error) {
				console.log(error)
			}
		}

		fetchInterfaces()
	}, [])

	function handleSwitchFailover(e) {
		setFailoverCommand(e.target.checked)
		console.log(failoverCommand)
		setFailover(true)
	}

	function handleDisconnect() {
		const data = {
			data: {
				enabled: enabled ? '0' : '1',
			},
		}
		RouterAPI.wifiGeneralRequest(
			loginData.data.token,
			`/wireless/interfaces/config/${wifi.id}`,
			'PUT',
			data
		)

		updateState(true)
	}

	async function handleForget() {
		const data = {
			data: {},
		}

		const result = await RouterAPI.wifiGeneralRequest(
			loginData.data.token,
			`/wireless/interfaces/config/${wifi.id}`,
			'DELETE',
			data
		)

		updateState(true)
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
								checked={failoverCommand}
								size='small'
								onChange={handleSwitchFailover}
							/>
						</span>
					</Row>
					<Row>
						<Btn
							onClick={handleDisconnect}
							backgroundColorDeselected={
								enabled ? 'orange' : 'var(--turfpalColor)'
							}
							textColorDeselected={enabled ? 'black' : 'white'}
						>
							{enabled ? 'Disconnect' : 'Connect'}
							{enabled ? (
								<LinkOffOutlinedIcon />
							) : (
								<LinkOutlinedIcon />
							)}
						</Btn>
						<Btn
							onClick={handleForget}
							backgroundColorDeselected={'#fcd3d2'}
							backgroundColorSelected={
								'var(--colorDangerPrimary)'
							}
							textColorSelected={'black'}
							textColorDeselected={'black'}
						>
							Forget <DeleteForeverOutlinedIcon />
						</Btn>
					</Row>
				</Content>
			</Card>
		</Container>
	)
}

export default ConnectedWifi
