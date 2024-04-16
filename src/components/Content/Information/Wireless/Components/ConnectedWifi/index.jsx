import { Container, Row, Content } from './ConnectedWifi.styles'
import { useTranslation } from 'react-i18next'

import Card from '../../../../../UI/Card'
import Btn from '../../../../../UI/Btn'

import LinkOffOutlinedIcon from '@mui/icons-material/LinkOffOutlined'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

import { Switch } from '@mui/material'

import { useContext } from 'react'
import { RouterContext } from '../../../../../../store/context/router-context'

function ConnectedWifi({ wifi, updateSelectedWifi }) {
	const { t } = useTranslation()
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
									? t(
											'information.information.connectivity.wireless.settings.connected'
									  )
									: t(
											'information.information.connectivity.wireless.settings.disconnected'
									  )}
							</div>
						</span>
						<span className='failover'>
							<div>
								{t(
									'information.information.connectivity.wireless.settings.failover'
								)}
							</div>
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
							{wifi.enabled === '1'
								? t(
										'information.information.connectivity.wireless.settings.connected'
								  )
								: t(
										'information.information.connectivity.wireless.settings.disconnected'
								  )}
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
							{t(
								'information.information.connectivity.wireless.settings.forget'
							)}{' '}
							<DeleteForeverOutlinedIcon />
						</Btn>
					</Row>
				</Content>
			</Card>
		</Container>
	)
}

export default ConnectedWifi
