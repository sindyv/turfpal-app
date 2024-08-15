import React, { useContext } from "react"

// Styles
import { Wrapper, Content, ButtonArea, CenteredDiv } from "./CO2Settings.styles"

// Components

import TargetSlider from "./TargetSlider"
import DurationSlider from "./DurationSlider"
import RepeatSlider from "./RepeatSlider"

import Btn from "../../../../UI/Btn"
import CONSTANTS from "../../../../../CONSTANTS.json"
import CustomSlider from "../../../../UI/CustomSlider"
// Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import { useTranslation } from "react-i18next"

function CO2Settings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)

	const { t } = useTranslation()
	const onCommitedChange = (newValue, target) => {
		if (target === "target") {
			onCommand(
				{
					setpoints: {
						co2_target: newValue,
					},
				},
				100
			)
		} else if (target === "duration") {
			onCommand(
				{
					setpoints: {
						co2_duration: newValue,
					},
				},
				100
			)
		} else if (target === "interval") {
			onCommand(
				{
					setpoints: {
						co2_interval: newValue,
					},
				},
				100
			)
		}
	}

	const handleBtnPress = (action) => {
		if (action === "resetOperatingHours") {
			onCommand(
				{
					command: {
						co2_resetrh: true,
					},
				},
				100
			)
		} else if (action === "resetConsumption") {
			onCommand(
				{
					command: {
						co2_reset_consumption: true,
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
						initialValue={allValues.setpoints.co2_target}
					/>
				</CenteredDiv> */}
				<h3>{t("irrigation.duration")} </h3>
				<CenteredDiv>
					<DurationSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.co2_duration}
					/>
				</CenteredDiv>
				<h3>{t("irrigation.repeat")}</h3>
				<CenteredDiv>
					<RepeatSlider
						onCommitedChange={onCommitedChange}
						initialValue={allValues.setpoints.co2_interval}
					/>
				</CenteredDiv>

				{/* <ButtonArea>
					<Btn
						svgSize={28}
						onClick={() => handleBtnPress("resetOperatingHours")}
					>
						<AccessTimeIcon />
						Reset operating hours
					</Btn>
					<Btn svgSize={28} onClick={() => handleBtnPress("resetConsumption")}>
						<AssessmentOutlinedIcon />
						Reset energy consumption
					</Btn>
				</ButtonArea> */}
			</Content>
		</Wrapper>
	)
}

export default CO2Settings
