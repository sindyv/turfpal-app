import React, { useContext } from 'react'

// Styles
import {
	Wrapper,
	ButtonsArea,
	TileArea,
	HeatTile,
	LinkItem,
	CardDescription,
	LinkWrappers,
} from './Heating.styles'

//Components
import Btn from '../../../../UI/Btn'
import ControlTile from '../../../../UI/ControlTile'
import Card from '../../../../UI/Card'

// Icons
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined'
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import HeatIcon from '../../../../../assets/icons/heat'

// Context
import { AllValuesContext } from '../../../../../store/context/allValues-context'

function Heating({}) {
	const { data: allValues, onCommand } = useContext(AllValuesContext)

	const handleSetModeAuto = () => {
		onCommand(
			{
				commands: { heat_auto: true, heat_manual: false },
			},
			100
		)
	}

	const handleSetModeManual = () => {
		onCommand(
			{
				commands: { heat_auto: false, heat_manual: true },
			},
			100
		)
	}

	const handleToggleHeat = (state) => {
		onCommand(
			{
				commands: {
					heat_zone1: state,
				},
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
						selected={allValues.statuses.mode_heating === 'auto'}
						onClick={handleSetModeAuto}
					>
						<AutorenewOutlinedIcon /> Auto
					</Btn>
					<Btn
						svgSize={12}
						selected={allValues.statuses.mode_heating === 'manual'}
						onClick={handleSetModeManual}
					>
						<BackHandOutlinedIcon /> Manual
					</Btn>
				</ButtonsArea>
			)}
			{allValues.statuses.mode_heating === 'manual' && (
				<ButtonsArea $control={true}>
					<Btn
						selected={allValues.statuses.heat_zone1}
						onClick={() => handleToggleHeat(true)}
						backgroundColorDeselected={'var(--lightGrey)'}
						backgroundColorSelected={'var(--turfpalActiveBtn)'}
						textColorSelected={'black'}
						textColorDeselected={'black'}
					>
						<AutorenewOutlinedIcon /> On
					</Btn>
					<Btn
						svgSize={12}
						selected={!allValues.statuses.heat_zone1}
						backgroundColorDeselected={'var(--lightGrey)'}
						backgroundColorSelected={'var(--turfpalActiveBtn)'}
						textColorSelected={'black'}
						textColorDeselected={'black'}
						onClick={() => handleToggleHeat(false)}
					>
						<BackHandOutlinedIcon /> Off
					</Btn>
				</ButtonsArea>
			)}
			<TileArea>
				<ControlTile
					disabled={true}
					enabled={allValues.statuses.heat_zone1}
					icon={HeatIcon}
					title={'Heating'}
					data={{
						value: parseFloat(
							allValues.values?.temperature
						).toFixed(1),
						valueUnit: '°C',
						additionalData: [
							// allValues.values.energyMeters.length > 1
							// 	? allValues.values?.energyMeters[1].power
							// 	: allValues.values?.energyMeters[0].power,
							null,
							allValues.values.heat_rh,
						],
						additionalDataUnits: [null, 'h'],
					}}
				/>
				<LinkWrappers>
					<LinkItem
						to={'/log'}
						state={{
							log: 'Heating',
							headerText: 'Heating > Log',
							logData: allValues?.logData?.heating ?? null,
						}}
					>
						<Card>
							<CardDescription>
								<InfoOutlinedIcon />
								Log
							</CardDescription>
						</Card>
					</LinkItem>

					<LinkItem
						to={'settings'}
						state={{ headerText: 'Heating > Settings' }}
					>
						<Card>
							<CardDescription>
								<SettingsOutlinedIcon />
								Settings
							</CardDescription>
						</Card>
					</LinkItem>
				</LinkWrappers>
			</TileArea>
		</Wrapper>
	)
}

export default Heating
