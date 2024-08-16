import React, { useContext } from 'react'
import Btn from '../../../../UI/Btn'

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from './IrrigationSettings.styles'

// Components
import CustomSlider from '../../../../UI/CustomSlider'
import CONSTANTS from '../../../../../CONSTANTS.json'

// Context
import { AllValuesContext } from '../../../../../store/context/allValues-context'
import { useTranslation } from 'react-i18next'
import { SetpointsContext } from '../../../../../store/context/setpoints-context'

function IrrigationSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { updateSetpoints } = useContext(SetpointsContext)

	const { t } = useTranslation()

	const onCommitedChange = (newValue, target) => {
		if (target === 'target') {
			onCommand(
				{
					setpoints: {
						irrigation_target: newValue,
					},
				},
				100
			)
		} else if (target === 'duration') {
			onCommand(
				{
					setpoints: {
						irrigation_duration: newValue,
					},
				},
				100
			)
		} else if (target === 'interval') {
			onCommand(
				{
					setpoints: {
						irrigation_interval: newValue,
					},
				},
				100
			)
		} else if (target === 'delay') {
			onCommand(
				{
					setpoints: {
						irrigation_delay: newValue,
					},
				},
				100
			)
		}
	}

	return (
		<Wrapper>
			<Content>
				<h3>{t('irrigation.duration')} </h3>

				<CenteredDiv>
					<CustomSlider
						min={1}
						max={10}
						step={1}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.irrigation_duration}
						width={'80%'}
						color={'dodgerblue'}
						controlledItem={'duration'}
						marks={CONSTANTS.constants.sliders.waterDurationSlider}
					/>
				</CenteredDiv>
				<h3>{t('irrigation.repeat')}</h3>
				<CenteredDiv>
					<CustomSlider
						min={1}
						max={20}
						step={1}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.irrigation_interval}
						width={'80%'}
						color={'dodgerblue'}
						controlledItem={'interval'}
						marks={
							CONSTANTS.constants.sliders.waterRepetitionSlider
						}
					/>
				</CenteredDiv>

				<ButtonArea>
					<Btn
						onClick={() => {
							updateSetpoints(true, 'resetIrrigationSetpoints')
						}}
					>
						{t('generic.resetSetpoints')}
					</Btn>
					{/*
					<Btn
						svgSize={28}
						onClick={() => handleBtnPress("resetWaterConsumption")}
					>
						<AssessmentOutlinedIcon />
						Reset water consumption
					</Btn>*/}
				</ButtonArea>
			</Content>
		</Wrapper>
	)
}

export default IrrigationSettings
