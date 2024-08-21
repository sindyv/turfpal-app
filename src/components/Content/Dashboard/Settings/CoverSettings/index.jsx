import React, { useContext } from "react"
import Btn from "../../../../UI/Btn"

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from "./CoverSettings.styles"

// Components
import CustomSlider from "../../../../UI/CustomSlider"
import CONSTANTS from "../../../../../CONSTANTS.json"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import { SetpointsContext } from "../../../../../store/context/setpoints-context"
import { useTranslation } from "react-i18next"

function CoverSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { updateSetpoints } = useContext(SetpointsContext)
	const { t } = useTranslation()

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
		if (target === "windspeedDelay") {
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
				<h3>{t("cover.maxWindSpeed")}</h3>

				<CenteredDiv>
					<CustomSlider
						min={0}
						max={20}
						step={1}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.close_cover_at_windspeed}
						width={"80%"}
						color={"gray"}
						controlledItem={"windspeed"}
						marks={CONSTANTS.constants.sliders.windAlarm}
					/>
				</CenteredDiv>
				<h3>{t("cover.delay")}</h3>

				<CenteredDiv>
					<CustomSlider
						min={1}
						max={5}
						step={0.5}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.close_cover_at_windspeed_delay}
						width={"80%"}
						color={"gray"}
						controlledItem={"windspeedDelay"}
						marks={CONSTANTS.constants.sliders.windAlarmDelay}
					/>
				</CenteredDiv>
				<ButtonArea>
					<Btn
						onClick={() => {
							updateSetpoints(true, "resetWindSetpoints")
						}}
					>
						{t("generic.resetSetpoints")}
					</Btn>
				</ButtonArea>
			</Content>
		</Wrapper>
	)
}

export default CoverSettings
