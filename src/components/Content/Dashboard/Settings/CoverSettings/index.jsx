import React, { useContext } from "react"

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from "./CoverSettings.styles"

// Components
import DurationSlider from "./DurationSlider"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"

function CoverSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)

	const onCommitedChange = (newValue, target) => {
		if (target === "windspeed") {
			onCommand(
				{
					setpoints: {
						close_cover_at_windspeed: newValue,
					},
				},
				100
			)
		}
	}

	return (
		<Wrapper>
			<Content>
				<h3>Duration</h3>

				<CenteredDiv>
					<DurationSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.close_cover_at_windspeed}
					/>
				</CenteredDiv>
			</Content>
		</Wrapper>
	)
}

export default CoverSettings
