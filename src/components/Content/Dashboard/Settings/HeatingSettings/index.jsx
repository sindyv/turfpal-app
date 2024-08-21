import React, { useContext } from "react"

// Styles
import {
	Wrapper,
	Content,
	ButtonArea,
	CenteredDiv,
} from "./HeatingSettings.styles"

// Components
import Btn from "../../../../UI/Btn"
import CONSTANTS from "../../../../../CONSTANTS.json"
import CustomSlider from "../../../../UI/CustomSlider"

// Icons
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"
import { useTranslation } from "react-i18next"
import { SetpointsContext } from "../../../../../store/context/setpoints-context"

function HeatingSettings() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { updateSetpoints } = useContext(SetpointsContext)

	const { t } = useTranslation()
	const onCommitedChange = (newValue, target) => {
		if (target === "delay") {
			onCommand(
				{
					setpoints: {
						temp_delay: newValue,
					},
				},
				100
			)
		} else if (target === "max") {
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
				<h3>{t("heat.settings.timeDelay")}</h3>
				<p>{t("heat.settings.timeDelayText")}</p>
				<CenteredDiv>
					<CustomSlider
						min={0}
						max={30}
						step={0.5}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.temp_delay}
						width={"80%"}
						color={"red"}
						controlledItem={"delay"}
						marks={CONSTANTS.constants.sliders.tempDelaySliderMarks}
					/>
				</CenteredDiv>
				<h3>{t("heat.settings.maxTemp")}</h3>
				<p>{t("heat.settings.maxTempText")}</p>
				<CenteredDiv>
					<CustomSlider
						min={5}
						max={25}
						step={1}
						onCommitedChange={onCommitedChange}
						externalValue={allValues.setpoints.soil_temp_max}
						width={"80%"}
						color={"red"}
						controlledItem={"max"}
						marks={CONSTANTS.constants.sliders.tempRangeSliderMarks}
					/>
				</CenteredDiv>

				<ButtonArea>
					<Btn
						onClick={() => {
							updateSetpoints(true, "resetHeatingSetpoints")
						}}
					>
						{t("generic.resetSetpoints")}
					</Btn>
					<Btn svgSize={28} onClick={handleResetOperatingHours}>
						<AccessTimeIcon />
						{t("generic.resetOperatingHours")}
					</Btn>
				</ButtonArea>
			</Content>
		</Wrapper>
	)
}

export default HeatingSettings
