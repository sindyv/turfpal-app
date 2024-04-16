import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
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
	const { t } = useTranslation()
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
							<RouterOutlinedIcon />{' '}
							{t(
								'information.information.connectivity.router.router'
							)}
						</span>
					</CardDescription>
					<CardContent>
						<InformationDataField header={'Name'} data={'RUTX11'} />
						<InformationDataField
							header={t(
								'information.information.connectivity.router.serial'
							)}
							data={allValues.rig_data.router.router_serial}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.router.wan'
							)}
							data={allValues.rig_data.router.wanIpAddr}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.router.dateTime'
							)}
							data={routerDate}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.router.firmware'
							)}
							data={allValues.rig_data.router.router_fw}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.router.mac'
							)}
							data={routerMac}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.router.imei'
							)}
							data={allValues.rig_data.router.gsm_imei}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardDescription>
						<span>
							<CellTowerOutlinedIcon />{' '}
							{t(
								'information.information.connectivity.mobile.mobile'
							)}
						</span>
						<LinkItem
							to={'/router'}
							state={{
								headerText: `${t(
									'information.information.connectivity.connectivity'
								)} > ${t(
									'information.information.connectivity.router.router'
								)}`,
							}}
						>
							<SettingsOutlinedIcon />
						</LinkItem>
					</CardDescription>
					<CardContent>
						<InformationDataField
							header={t(
								'information.information.connectivity.mobile.operator'
							)}
							data={allValues.rig_data.router.gsm_operator}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.mobile.networkType'
							)}
							data={allValues.rig_data.router.gsm_connection_type}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.mobile.networkReg'
							)}
							data={allValues.rig_data.router.gsm_netstate}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.mobile.signalStrength'
							)}
							data={allValues.rig_data.router.gsm_rssi + 'dB'}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.mobile.imsi'
							)}
							data={allValues.rig_data.router.gsm_imsi}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardDescription>
						<span>
							<WifiOutlinedIcon />{' '}
							{t(
								'information.information.connectivity.wireless.wireless'
							)}
						</span>
						<LinkItem
							to={'/wireless'}
							state={{
								headerText: `${t(
									'information.information.connectivity.connectivity'
								)} > ${t(
									'information.information.connectivity.wireless.wireless'
								)}`,
							}}
						>
							<SettingsOutlinedIcon />
						</LinkItem>
					</CardDescription>
					<CardContent>
						<InformationDataField
							header={
								t(
									'information.information.connectivity.wireless.ssid'
								) + ' (2.4Ghz)'
							}
							data={allValues.rig_data.router.wifi_2_4_ghz_ssid}
						/>
						<InformationDataField
							header={
								t(
									'information.information.connectivity.wireless.ssid'
								) + ' (5Ghz)'
							}
							data={allValues.rig_data.router.wifi_5_ghz_ssid}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.wireless.lanIp'
							)}
							data={allValues.rig_data.router.lanIpAddr}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardDescription>
						<span>
							<LocationOnOutlinedIcon />{' '}
							{t('information.information.connectivity.gps.gps')}
						</span>
						{/* <SettingsOutlinedIcon /> */}
					</CardDescription>
					<CardContent>
						<InformationDataField
							header={t(
								'information.information.connectivity.gps.satelites'
							)}
							data={'9'}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.gps.latitude'
							)}
							data={allValues.rig_data.router.gps.latitude}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.gps.longitude'
							)}
							data={allValues.rig_data.router.gps.longitude}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.gps.accuracy'
							)}
							data={allValues.rig_data.router.gps.accuracy}
						/>
						<InformationDataField
							header={t(
								'information.information.connectivity.gps.altitude'
							)}
							data={allValues.rig_data.router.gps.altitude + 'm'}
						/>
					</CardContent>
				</Card>
			</Content>
		</Wrapper>
	)
}

export default Connectivity
