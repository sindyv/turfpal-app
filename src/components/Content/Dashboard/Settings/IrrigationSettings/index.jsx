import React, { useContext } from "react"

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from "./IrrigationSettings.styles"

// Components
import TargetSlider from "./TargetSlider"
import DurationSlider from "./DurationSlider"
import RepeatSlider from "./RepeatSlider"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import { useTranslation } from "react-i18next"

function IrrigationSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)

	const { t } = useTranslation()

	const onCommitedChange = (newValue, target) => {
		if (target === "target") {
			onCommand(
				{
					setpoints: {
						irrigation_target: newValue,
					},
				},
				100
			)
		} else if (target === "duration") {
			onCommand(
				{
					setpoints: {
						irrigation_duration: newValue,
					},
				},
				100
			)
		} else if (target === "interval") {
			onCommand(
				{
					setpoints: {
						irrigation_interval: newValue,
					},
				},
				100
			)
		} else if (target === "delay") {
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
				{/* <h3>Target</h3>
				<CenteredDiv>
					<TargetSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.irrigation_target}
					/>
				</CenteredDiv> */}
				<h3>{t("irrigation.duration")} </h3>

				<CenteredDiv>
					<DurationSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.irrigation_duration}
					/>
				</CenteredDiv>
				<h3>{t("irrigation.repeat")}</h3>
				<CenteredDiv>
					<RepeatSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.irrigation_interval}
					/>
				</CenteredDiv>
				{/* <h3>Delay</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={
                            allValues.setpoints.default_led_light_50_on
                        }
                        width={"80%"}
                        max={20}
                        color={"dodgerblue"}
                        controlledItem={"delay"}
                        marks={CONSTANTS.constants.sliders.waterDelaySlider}
                    />
                </CenteredDiv> */}

				{/* <ButtonArea>
					<Btn
						svgSize={28}
						onClick={() => handleBtnPress("resetWaterConsumption")}
					>
						<AssessmentOutlinedIcon />
						Reset water consumption
					</Btn>
				</ButtonArea> */}
			</Content>
		</Wrapper>
	)
}

export default IrrigationSettings
