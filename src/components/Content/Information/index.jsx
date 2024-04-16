import React from 'react'
import { useTranslation } from 'react-i18next'

import Card from '../../UI/Card'

import {
	Wrapper,
	Content,
	CardContent,
	CardDescription,
	LinkItem,
} from './Information.styles'

import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined'
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'
import timeZone from '../../../assets/data/TIMEZONES.json'

import { useContext } from 'react'
import { AllValuesContext } from '../../../store/context/allValues-context'
function Information() {
	const { data: allValues } = useContext(AllValuesContext)
	const { t } = useTranslation()

	const selectedTimeZone = timeZone.filter(
		(zone) => zone.value === allValues.setpoints.timeZone
	)

	return (
		<Wrapper>
			<Content>
				<LinkItem
					to={'/device'}
					state={{
						headerText: `${t(
							'information.information.device.device'
						)}`,
					}}
				>
					<Card>
						<CardContent>
							<CardDescription>
								<SmartToyOutlinedIcon />{' '}
								{t('information.information.device.device')}
							</CardDescription>
							{allValues.deviceid}
						</CardContent>
					</Card>
				</LinkItem>
				<LinkItem
					to={'/connectivity'}
					state={{
						headerText: `${t(
							'information.information.connectivity.connectivity'
						)}`,
					}}
				>
					<Card>
						<CardContent>
							<CardDescription>
								<WifiOutlinedIcon />{' '}
								{t(
									'information.information.connectivity.connectivity'
								)}
							</CardDescription>
						</CardContent>
					</Card>
				</LinkItem>
				<Card>
					<CardContent>
						<CardDescription>
							<PhoneAndroidOutlinedIcon />{' '}
							{t('information.information.appVersion')}
						</CardDescription>
						{import.meta.env.VITE_APP_VERSION}
					</CardContent>
				</Card>
				{/* <Card>
                    <CardContent>
                        <CardDescription>
                            <HubOutlinedIcon /> PLC version
                        </CardDescription>
                        {allValues.rig_data.software_version}
                    </CardContent>
                </Card> */}
				<LinkItem
					to={'/timezone'}
					state={{
						headerText: `${t(
							'information.information.timeZone.timeZone'
						)}`,
					}}
				>
					<Card>
						<CardContent>
							<CardDescription>
								<AccessTimeOutlinedIcon />{' '}
								{t('information.information.timeZone.timeZone')}
							</CardDescription>
							{selectedTimeZone[0]?.name}
						</CardContent>
					</Card>
				</LinkItem>
				{/* <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <TranslateOutlinedIcon /> Language
                            </CardDescription>
                            English
                        </CardContent>
                    </Card>
                </LinkItem> */}
			</Content>
		</Wrapper>
	)
}

export default Information
