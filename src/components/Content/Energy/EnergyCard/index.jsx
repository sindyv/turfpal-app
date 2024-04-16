import React from 'react'
import { useTranslation } from 'react-i18next'

import {
	Wrapper,
	Header,
	CardDescription,
	MainValue,
	CardContent,
} from './EnergyCard.styles'

import Card from '../../../UI/Card'
import DataField from '../../../UI/DataField'
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined'

// for test purpose
const defaultData = {
	voltage_L1L2: 402.3,
	voltage_L1L3: 401.6,
	voltage_L2L3: 399.8,
	voltage_L1N: 241.1,
	voltage_L2N: 240.6,
	voltage_L3N: 239.9,
	current_L1: 24.9,
	current_L2: 25.2,
	current_L3: 25.3,
	power: 7.2,
	energy: 705,
	frequency: 50.1,
}

function EnergyCard({ icon, title, data = defaultData }) {
	const { t } = useTranslation()
	const Icon = icon

	if (data?.energy) {
		return (
			<>
				<Card>
					<CardDescription>
						<span>
							<Icon />
							{title}
						</span>
						{/* <EqualizerOutlinedIcon /> */}
					</CardDescription>
					<MainValue>
						<span>
							{data.energy > 99999
								? parseFloat(data.energy / 1000).toFixed(2)
								: data.energy}
						</span>
						<span>{data.energy > 99999 ? 'MWh' : 'kWh'}</span>
					</MainValue>
					<CardContent>
						{data?.power ?? null ? (
							<DataField
								header={t('energy.power')}
								data={data.power}
								unit={'kW'}
							/>
						) : null}
						{data?.frequency ?? null ? (
							<DataField
								header={t('energy.frequency')}
								data={data.frequency}
								unit={'Hz'}
							/>
						) : null}
						{data?.voltage_l1 ?? null ? (
							<DataField
								header={`${t('energy.voltage')} L1-N`}
								data={data.voltage_l1}
								unit={'V'}
							/>
						) : null}
						{data?.voltage_l2 ?? null ? (
							<DataField
								header={`${t('energy.voltage')} L2-N`}
								data={data.voltage_l2}
								unit={'V'}
							/>
						) : null}
						{data?.voltage_l3 ?? null ? (
							<DataField
								header={`${t('energy.voltage')} L3-N`}
								data={data.voltage_l3}
								unit={'V'}
							/>
						) : null}
						{data?.voltage_l1_l2 ?? null ? (
							<DataField
								header={`${t('energy.voltage')} L1-L2`}
								data={data.voltage_l1_l2}
								unit={'V'}
							/>
						) : null}
						{data?.voltage_l1_l2 ?? null ? (
							<DataField
								header={`${t('energy.voltage')} L1-L3`}
								data={data.voltage_l1_l2}
								unit={'V'}
							/>
						) : null}
						{data?.voltage_l2_l3 ?? null ? (
							<DataField
								header={`${t('energy.voltage')} L2-L3`}
								data={data.voltage_l2_l3}
								unit={'V'}
							/>
						) : null}
						{data?.current_L1 ?? null ? (
							<DataField
								header={`${t('energy.current')} L1`}
								data={data.current_L1}
								unit={'A'}
							/>
						) : null}
						{data?.current_L2 ?? null ? (
							<DataField
								header={`${t('energy.current')} L2`}
								data={data.current_L2}
								unit={'A'}
							/>
						) : null}
						{data?.current_L3 ?? null ? (
							<DataField
								header={`${t('energy.current')} L3`}
								data={data.current_L3}
								unit={'A'}
							/>
						) : null}
					</CardContent>
				</Card>
			</>
		)
	} else {
		return null
	}
}

export default EnergyCard
