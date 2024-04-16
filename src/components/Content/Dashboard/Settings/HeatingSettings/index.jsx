import React, { useContext } from 'react'

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from './HeatingSettings.styles'

// Components
import Btn from '../../../../UI/Btn'
import TempRangeSlider from './TempRangeSlider'
import TempDelaySlider from './TempDelaySlider'
import MaxTempSlider from './MaxTempSlider'

// Icons
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined'

// Context
import { AllValuesContext } from '../../../../../store/context/allValues-context'
import { useTranslation } from 'react-i18next'

function HeatingSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()
	const onCommitedChange = (newValue, target) => {
		if (target === 'range') {
			onCommand(
				{
					setpoints: {
						default_hps_temp_50_on: newValue[0],
						default_hps_temp_50_off: newValue[1],
					},
				},
				100
			)
		} else if (target === 'delay') {
			onCommand(
				{
					setpoints: {
						temp_delay: newValue,
					},
				},
				100
			)
		} else if (target === 'max') {
			onCommand(
				{
					setpoints: {
						soil_temp_max: newValue,
					},
				},
				100
			)
		}
	}

	const handleResetOperatingHours = () => {
		onCommand(
			{
				commands: {
					heat_resetrh: true,
				},
			},
			100
		)
	}

	const handleResetEnergyMeter = () => {
		onCommand(
			{
				commands: {
					heat_resetEnergy: true,
				},
			},
			100
		)
	}
	return (
		<Wrapper>
			<Content>
				{/* <h3>Tempeature range</h3>
                <p>
                    If the temperature goes below the lower threhold the heating
                    will turn on. It will remain on until it exceeds the higher
                    threshold.
                </p>
                <CenteredDiv>
                    <TempRangeSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={[
                            allValues.setpoints.default_hps_temp_50_on,
                            allValues.setpoints.default_hps_temp_50_off,
                        ]}
                    />
                </CenteredDiv> */}
				<h3>{t('heat.settings.timeDelay')}</h3>
				<p>{t('heat.settings.timeDelayText')}</p>
				<CenteredDiv>
					<TempDelaySlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.temp_delay}
					/>
				</CenteredDiv>
				<h3>{t('heat.settings.maxTemp')}</h3>
				<p>{t('heat.settings.maxTempText')}</p>
				<CenteredDiv>
					<MaxTempSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.soil_temp_max}
					/>
				</CenteredDiv>
				{/* <Btn svgSize={28}>
                    <SaveOutlinedIcon />
                    Save
                </Btn> */}
				<ButtonArea>
					<Btn svgSize={28} onClick={handleResetOperatingHours}>
						<AccessTimeIcon />
						{t('generic.resetOperatingHours')}
					</Btn>
					{/* <Btn svgSize={28} onClick={handleResetEnergyMeter}>
                        <AssessmentOutlinedIcon />
                        Reset energy consumption
                    </Btn> */}
				</ButtonArea>
			</Content>
		</Wrapper>
	)
}

export default HeatingSettings
