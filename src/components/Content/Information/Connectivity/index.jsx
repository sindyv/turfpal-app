import React, { useContext } from 'react'
// Styles
import {
	Wrapper,
	Content,
	CardContent,
	CardDescription,
	LinkItem,
} from './Connectivity.styles'

// Components
import Card from '../../../UI/Card'

// Icons
import InformationDataField from '../../../UI/DataField'
import RouterOutlinedIcon from '@mui/icons-material/RouterOutlined'
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined'
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
// Context
import { AllValuesContext } from '../../../../store/context/allValues-context'
import dayjs from 'dayjs'

function Connectivity() {
	const { data: allValues } = useContext(AllValuesContext)
	const routerDate = dayjs(
		allValues.rig_data.router.gps.utc_timestamp * 1000
	).format('YYYY-MM-DD HH:mm')

	const routerMacArray = allValues.rig_data.router.router_mac.match(/.{1,2}/g)
	const routerMac = `${routerMacArray[0]}:${routerMacArray[1]}:${routerMacArray[2]}:${routerMacArray[3]}:${routerMacArray[4]}:${routerMacArray[5]}`

	return (
		<Wrapper>
			<Content>
				<Card>
					<CardDescription>
						<span>
							<RouterOutlinedIcon /> Router
						</span>
					</CardDescription>
					<CardContent>
						<InformationDataField header={'Name'} data={'RUTX11'} />
						<InformationDataField
							header={'Serial No.'}
							data={allValues.rig_data.router.router_serial}
						/>
						<InformationDataField
							header={'WAN IP'}
							data={allValues.rig_data.router.wanIpAddr}
						/>
						<InformationDataField
							header={'Date and time'}
							data={routerDate}
						/>
						<InformationDataField
							header={'Firmware'}
							data={allValues.rig_data.router.router_fw}
						/>
						<InformationDataField
							header={'MAC Address'}
							data={routerMac}
						/>
						<InformationDataField
							header={'IMEI'}
							data={allValues.rig_data.router.gsm_imei}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardDescription>
						<span>
							<CellTowerOutlinedIcon /> Mobile
						</span>
						<LinkItem
							to={'/router'}
							state={{ headerText: 'Connectivity > Router' }}
						>
							<SettingsOutlinedIcon />
						</LinkItem>
					</CardDescription>
					<CardContent>
						<InformationDataField
							header={'Operator'}
							data={allValues.rig_data.router.gsm_operator}
						/>
						<InformationDataField
							header={'Network type'}
							data={allValues.rig_data.router.gsm_connection_type}
						/>
						<InformationDataField
							header={'Network registration type'}
							data={allValues.rig_data.router.gsm_netstate}
						/>
						<InformationDataField
							header={'Sginal strength'}
							data={allValues.rig_data.router.gsm_rssi + 'dB'}
						/>
						<InformationDataField
							header={'IMSI'}
							data={allValues.rig_data.router.gsm_imsi}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardDescription>
						<span>
							<WifiOutlinedIcon /> Wireless
						</span>
						<LinkItem
							to={'/wireless'}
							state={{ headerText: 'Connectivity > Wireless' }}
						>
							<SettingsOutlinedIcon />
						</LinkItem>
					</CardDescription>
					<CardContent>
						<InformationDataField
							header={'SSID (2.4Ghz)'}
							data={allValues.rig_data.router.wifi_2_4_ghz_ssid}
						/>
						<InformationDataField
							header={'SSID (5Ghz)'}
							data={allValues.rig_data.router.wifi_5_ghz_ssid}
						/>
						<InformationDataField
							header={'LAN IP'}
							data={allValues.rig_data.router.lanIpAddr}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardDescription>
						<span>
							<LocationOnOutlinedIcon /> GPS
						</span>
						{/* <SettingsOutlinedIcon /> */}
					</CardDescription>
					<CardContent>
						<InformationDataField header={'Satelites'} data={'9'} />
						<InformationDataField
							header={'Latitude'}
							data={allValues.rig_data.router.gps.latitude}
						/>
						<InformationDataField
							header={'Longitude'}
							data={allValues.rig_data.router.gps.longitude}
						/>
						<InformationDataField
							header={'Accuracy'}
							data={allValues.rig_data.router.gps.accuracy}
						/>
						<InformationDataField
							header={'Altitude'}
							data={allValues.rig_data.router.gps.altitude + 'm'}
						/>
					</CardContent>
				</Card>
			</Content>
		</Wrapper>
	)
}

export default Connectivity
