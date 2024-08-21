import React, { useContext } from "react"

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from "./LightingSettings.styles"

// Components
import Btn from "../../../../UI/Btn"
import CONSTANTS from "../../../../../CONSTANTS.json"
import CustomSlider from "../../../../UI/CustomSlider"

// Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import { useTranslation } from "react-i18next"
import { SetpointsContext } from "../../../../../store/context/setpoints-context"

function LightingSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()
	const { updateSetpoints } = useContext(SetpointsContext)

	const onCommitedChange = (newValue, target) => {
		if (target === "horti") {
			onCommand(
				{
					setpoints: {
						led_zone1_dim: newValue,
					},
				},
				100
			)
		} else if (target === "blue") {
			onCommand(
				{
					setpoints: {
						led_zone2_dim: newValue,
					},
				},
				100
			)
		} else if (target === "par") {
			onCommand(
				{
					setpoints: {
						default_led_light_50_on: newValue[0],
						default_led_dim_50_range2: newValue[1],
						default_led_dim_50_range3: newValue[2],
						default_led_light_50_off: newValue[3],
					},
				},
				100
			)
		} else if (target === "timeDelay") {
			onCommand(
				{
					setpoints: {
						light_delay: newValue,
					},
				},
				100
			)
		}
	}

	const handleBtnPress = (action) => {
		if (action === "resetRhZ1") {
			onCommand(
				{
					commands: {
						led_zone1_resetrh: true,
					},
				},
				100
			)
		} else if (action === "resetRhZ2") {
			onCommand(
				{
					commands: {
						led_zone2_resetrh: true,
					},
				},
				100
			)
		} else if (action === "resetEnergy") {
			onCommand(
				{
					commands: {
						led_resetEnergy: true,
					},
				},
				100
			)
		}
	}
	return (
		<Wrapper>
			<Content>
				<h3>{t("light.settings.timeDelay")}</h3>
				<p>{t("light.settings.timeDelayText")}</p>
				<CenteredDiv>
					<CustomSlider
						min={0}
						max={30}
						step={0.5}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.light_delay}
						width={"80%"}
						color={"gold"}
						controlledItem={"timeDelay"}
						marks={CONSTANTS.constants.sliders.tempDelaySliderMarks}
					/>
				</CenteredDiv>
				<h3>{t("light.settings.horti")}</h3>

				<p>{t("light.settings.hortiText")}</p>
				<CenteredDiv>
					<CustomSlider
						min={0}
						max={100}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.led_zone1_dim}
						width={"80%"}
						color={"gold"}
						controlledItem={"horti"}
						marks={CONSTANTS.constants.sliders.hortiSlider}
					/>
				</CenteredDiv>
				{/* <h3>Blue</h3>

                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={
                            allValues.setpoints.default_led_light_50_on
                        }
                        width={"80%"}
                        color={"dodgerblue"}
                        controlledItem={"blue"}
                        marks={CONSTANTS.constants.sliders.hortiSlider}
                    />
                </CenteredDiv>
                <h3>PAR range</h3>

                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={[
                            allValues.setpoints.default_led_light_50_on,
                            allValues.setpoints.default_led_dim_50_range2,
                            allValues.setpoints.default_led_dim_50_range3,
                            allValues.setpoints.default_led_light_50_off,
                        ]}
                        width={"80%"}
                        color={"dodgerblue"}
                        controlledItem={"par"}
                        marks={CONSTANTS.constants.sliders.parSlider}
                        max={2500}
                        step={50}
                    />
                </CenteredDiv> */}
				<ButtonArea>
					<Btn
						onClick={() => {
							updateSetpoints(true, "resetLightSetpoints")
						}}
					>
						{t("generic.resetSetpoints")}
					</Btn>
					<Btn svgSize={28} onClick={() => handleBtnPress("resetRhZ1")}>
						<AccessTimeIcon />
						{t("generic.resetOperatingHours")} {t("light.settings.horti")}
					</Btn>
					<Btn svgSize={28} onClick={() => handleBtnPress("resetRhZ2")}>
						<AccessTimeIcon />
						{t("generic.resetOperatingHours")} {t("light.settings.blue")}
					</Btn>
					{/* <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetEnergy")}
                    >
                        <AssessmentOutlinedIcon />
                        Reset energy consumption
                    </Btn> */}
				</ButtonArea>
			</Content>
		</Wrapper>
	)
}

export default LightingSettings
