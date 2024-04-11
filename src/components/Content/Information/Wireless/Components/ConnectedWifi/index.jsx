import { Container, Row, Content } from './ConnectedWifi.styles'

import Card from '../../../../../UI/Card'
import Btn from '../../../../../UI/Btn'

import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

import { Switch } from '@mui/material'

import { useContext } from 'react'
import { RouterContext } from '../../../../../../store/context/router-context'

function ConnectedWifi({ wifi, updateSelectedWifi }) {
	const routerCtx = useContext(RouterContext)

	function handleForget() {
		updateSelectedWifi('')
		routerCtx.wifiDelete()
	}

	function handleConnect() {
		routerCtx.wifiConnect(wifi.enabled === '1' ? false : true)
	}

	function handleFailover(e) {
		routerCtx.wifiSetFailover(
			routerCtx.failoverInterface.id,
			e.target.checked
		)
	}

	return (
		<Container>
			<Card>
				<Content>
					<Row>
						<span>
							<div>{wifi.ssid}</div>
							<div>
								{wifi.enabled === '1'
									? 'Connected'
									: 'Disconnected'}
							</div>
						</span>
						<span className='failover'>
							<div>Failover</div>
							<Switch
								checked={
									routerCtx.failoverInterface.enabled === '1'
								}
								size='small'
								onChange={handleFailover}
							/>
						</span>
					</Row>
					<Row>
						<Btn
							onClick={handleConnect}
							backgroundColorDeselected={
								wifi.enabled === '1'
									? 'orange'
									: 'var(--turfpalColor)'
							}
							textColorDeselected={
								wifi.enabled === '1' ? 'black' : 'white'
							}
						>
							{wifi.enabled === '1' ? 'Disconnect' : 'Connect'}
							{wifi.enabled === '1' ? (
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
