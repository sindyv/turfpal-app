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
import useLoginContext from '../../../../../hooks/useLoginContext'
import { useTranslation } from 'react-i18next'

function Heating({}) {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()
	const { user } = useLoginContext()

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
						<AutorenewOutlinedIcon /> {t('generic.auto')}
					</Btn>
					<Btn
						svgSize={12}
						selected={allValues.statuses.mode_heating === 'manual'}
						onClick={handleSetModeManual}
					>
						<BackHandOutlinedIcon /> {t('generic.manual')}
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
						{/* <AutorenewOutlinedIcon />  */}
						{t('generic.on')}
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
						{/* <BackHandOutlinedIcon />  */}
						{t('generic.off')}
					</Btn>
				</ButtonsArea>
			)}
			<TileArea>
				<ControlTile
					disabled={true}
					enabled={allValues.statuses.heat_zone1}
					icon={HeatIcon}
					title={t('heat.heating')}
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
							headerText: `${t('heat.heating')} > ${t(
								'generic.log'
							)}`,
							logData: allValues?.logData?.heating ?? null,
						}}
					>
						<Card>
							<CardDescription>
								<InfoOutlinedIcon />
								{t('generic.log')}
							</CardDescription>
						</Card>
					</LinkItem>
					{user === 'admin' ? (
						<LinkItem
							to={'settings'}
							state={{
								headerText: `${t('heat.heating')} > ${t(
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
				</LinkWrappers>
			</TileArea>
		</Wrapper>
	)
}

export default Heating
