import React from 'react'

//Styles
import {
	CenteredDiv,
	RangeView,
	SliderContainer,
	SliderHeader,
} from './Slider.styles'

// Components
import CustomSlider from '../../../UI/CustomSlider'
import { Switch } from '@mui/material'

function Slider({
	marks,
	headerTitle,
	sliderValue,
	sliderUnit,
	switchValue,
	sliderValueText,
	sliderMin = 0,
	sliderMax,
	sliderStep,
	sliderColor,
	controlledItem,
	onChange,
}) {
	const handleChange = (value, target) => {
		onChange(value, target)
	}

	return (
		<CenteredDiv>
			<SliderHeader>
				<div>
					<h4>{headerTitle}</h4>
				</div>
				<div>
					{switchValue !== undefined ? (
						<Switch
							disabled={false}
							size='small'
							color='whiteBackground'
							checked={switchValue}
							onChange={(event) =>
								handleChange(
									event.target.checked,
									`${controlledItem}_switch`
								)
							}
						/>
					) : null}
				</div>
			</SliderHeader>
			<SliderContainer>
				<CustomSlider
					onCommitedChange={handleChange}
					initialValue={sliderValue}
					externalValue={sliderValue}
					width={'90%'}
					color={sliderColor}
					controlledItem={controlledItem}
					// marks={marks}
					min={sliderMin}
					max={sliderMax}
					step={sliderStep}
				/>

				<RangeView>
					{sliderValueText}
					<span>{sliderUnit}</span>
				</RangeView>
			</SliderContainer>
		</CenteredDiv>
	)
}

export default Slider
