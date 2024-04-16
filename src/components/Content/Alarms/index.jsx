import React from 'react'

import { Wrapper } from './Alarms.styles'

import StatusCard from '../../UI/StatusCard'
import MenuSpacer from '../../UI/MenuSpacer'

import { useContext } from 'react'
import { AllValuesContext } from '../../../store/context/allValues-context'
import { useTranslation } from 'react-i18next'
function Alarms({}) {
	const { data: allValues } = useContext(AllValuesContext)
	const { t } = useTranslation()
	return (
		<Wrapper>
			{(typeof allValues?.alarms?.surge_protection !== 'undefined' ||
				typeof allValues?.alarms?.surge_protection2 !==
					'undefined') && (
				<StatusCard
					state={'warning'}
					title={t('alarm.surge.title')}
					activeText={t('alarm.surge.activeText')}
					inactiveText={t('alarm.surge.inactiveText')}
					active={
						allValues.alarms.surge_protection ||
						allValues?.alarms?.surge_protection2
					}
				/>
			)}
			{typeof allValues.alarms.fuse !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.fuses.title')}
					activeText={t('alarm.fuses.activeText')}
					inactiveText={t('alarm.fuses.inactiveText')}
					active={allValues.alarms.fuse || allValues.alarms.fuse2}
				/>
			)}
			{typeof allValues.alarms.sensor_par !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.par.title')}
					activeText={t('alarm.par.activeText')}
					inactiveText={t('alarm.par.inactiveText')}
					active={allValues.alarms.sensor_par}
					activePrimaryColor='#ffedb5'
					activeSecondaryColor='#665e48'
				/>
			)}
			{typeof allValues.alarms.sensor_temp !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.temperature.title')}
					activeText={t('alarm.temperature.activeText')}
					inactiveText={t('alarm.temperature.inactiveText')}
					active={allValues.alarms.sensor_temp}
					activePrimaryColor='#ffedb5'
					activeSecondaryColor='#665e48'
				/>
			)}
			{typeof allValues.alarms.sensor_soil !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.soil.title')}
					activeText={t('alarm.soil.activeText')}
					inactiveText={t('alarm.soil.inactiveText')}
					active={allValues.alarms.sensor_soil}
					activePrimaryColor='#ffedb5'
					activeSecondaryColor='#665e48'
				/>
			)}
			{typeof allValues.alarms.sensor_co2 !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.co2.title')}
					activeText={t('alarm.co2.activeText')}
					inactiveText={t('alarm.co2.inactiveText')}
					active={allValues.alarms.sensor_co2}
					activePrimaryColor='#ffedb5'
					activeSecondaryColor='#665e48'
				/>
			)}
			{typeof allValues.alarms.sensor_wind !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.wind.title')}
					activeText={t('alarm.wind.activeText')}
					inactiveText={t('alarm.wind.inactiveText')}
					active={allValues.alarms.sensor_wind}
					activePrimaryColor='#ffedb5'
					activeSecondaryColor='#665e48'
				/>
			)}
			{typeof allValues.alarms.high_soil_temp !== 'undefined' && (
				<StatusCard
					state={'warning'}
					title={t('alarm.soilTemperature.title')}
					activeText={t('alarm.soilTemperature.activeText')}
					inactiveText={t('alarm.soilTemperature.inactiveText')}
					active={allValues.alarms.high_soil_temp}
					activePrimaryColor='#ffedb5'
					activeSecondaryColor='#665e48'
				/>
			)}
			<MenuSpacer />
		</Wrapper>
	)
}

export default Alarms
