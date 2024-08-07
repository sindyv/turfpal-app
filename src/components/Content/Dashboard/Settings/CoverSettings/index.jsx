import React, { useContext } from 'react'

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from './CoverSettings.styles'

// Components
import DurationSlider from './DurationSlider'

// Context
import { AllValuesContext } from '../../../../../store/context/allValues-context'
import DelaySlider from './DelaySlider'

function CoverSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)

	const onCommitedChange = (newValue, target) => {
		if (target === 'windspeed') {
			onCommand(
				{
					setpoints: {
						close_cover_at_windspeed: newValue,
					},
				},
				100
			)
		}
		if (target === 'windspeedDelay') {
			onCommand(
				{
					setpoints: {
						close_cover_at_windspeed_delay: newValue,
					},
				},
				100
			)
		}
	}

	return (
		<Wrapper>
			<Content>
				<h3>Maximum Wind speed</h3>

				<CenteredDiv>
					<DurationSlider
						onCommitedChange={onCommitedChange}
						initialValue={
							allValues.setpoints.close_cover_at_windspeed
						}
					/>
				</CenteredDiv>
				<h3>Delay</h3>

				<CenteredDiv>
					<DelaySlider
						onCommitedChange={onCommitedChange}
						initialValue={
							allValues.setpoints.close_cover_at_windspeed
						}
					/>
				</CenteredDiv>
			</Content>
		</Wrapper>
	)
}

export default CoverSettings
