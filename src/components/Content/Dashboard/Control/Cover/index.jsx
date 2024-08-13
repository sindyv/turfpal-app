import React, { useContext } from 'react'

// Styles
import {
	Wrapper,
	Header,
	ButtonsArea,
	TileArea,
	LinkItem,
	CardDescription,
	LinkWrappers,
} from './Cover.styles'

//Components
import Btn from '../../../../UI/Btn'
import ControlTile from '../../../../UI/ControlTile'
import Card from '../../../../UI/Card'

// Icons
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import NorthIcon from '@mui/icons-material/North'
import SouthIcon from '@mui/icons-material/South'
// Context
import { AllValuesContext } from '../../../../../store/context/allValues-context'
import useLoginContext from '../../../../../hooks/useLoginContext'
import { useTranslation } from 'react-i18next'

function Cover({}) {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { user } = useLoginContext()
	const { t } = useTranslation()

	const handleOpen = () => {
		onCommand(
			{
				commands: { cover_open: true },
			},
			100
		)
	}

	const handleClose = () => {
		onCommand(
			{
				commands: { cover_close: true },
			},
			100
		)
	}

	const handleResetWindAlarm = () => {
		onCommand(
			{
				commands: { reset_hight_wind_alarm: true },
			},
			100
		)
	}

	return (
		<Wrapper>
			{allValues.statuses.session &&
			allValues.statuses.mode === 'auto' ? null : (
				<ButtonsArea>
					<Btn
						selected={allValues.statuses.cover_opening}
						onClick={handleOpen}
					>
						<NorthIcon /> Open
					</Btn>
					<Btn
						selected={allValues.statuses.cover_closing}
						onClick={handleClose}
					>
						<SouthIcon /> Close
					</Btn>
				</ButtonsArea>
			)}

			<TileArea>
				<ControlTile
					disabled={true}
					icon={CloudOutlinedIcon}
					title={'Cover'}
					data={{
						value: allValues.statuses.cover ? 'Open' : 'Closed',
						valueUnit: null,
						additionalData: [null, null],
						additionalDataUnits: [null, null],
					}}
				/>
			</TileArea>
			<LinkWrappers>
				<LinkItem
					to={'/log'}
					state={{
						log: 'Cover',
						headerText: `${t('cover.cover')} > ${t('generic.log')}`,
						logData: allValues?.logData?.heating ?? null,
					}}
				>
					{/* <Card>
						<CardDescription>
							<InfoOutlinedIcon />
							Log
						</CardDescription>
					</Card> */}
				</LinkItem>
				{user === 'admin' ? (
					<LinkItem
						to={'settings'}
						state={{
							headerText: `${t('cover.cover')} > ${t(
								'generic.settings'
							)}`,
						}}
					>
						<Card>
							<CardDescription>
								<SettingsOutlinedIcon />
								{t('generic.settings')}
							</CardDescription>
						</Card>
					</LinkItem>
				) : null}

				{allValues.alarms?.high_wind_speed_alert && (
					<Btn onClick={handleResetWindAlarm}>Reset wind alarm</Btn>
				)}
			</LinkWrappers>
		</Wrapper>
	)
}

export default Cover
