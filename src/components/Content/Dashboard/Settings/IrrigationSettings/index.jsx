import React, { useContext } from "react"

// Styles
import {
    Wrapper,
    Content,
    ButtonArea,
    CenteredDiv,
} from "./IrrigationSettings.styles"

// Components
import Btn from "../../../../UI/Btn"
import CONSTANTS from "../../../../../CONSTANTS.json"
import CustomSlider from "../../../../UI/CustomSlider"

// Icons
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"

function IrrigationSettings() {
    const { data: allValues, onCommand } = useContext(AllValuesContext)

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

    const handleBtnPress = () => {
        onCommand(
            {
                command: {
                    irrigation_reset_consumption: true,
                },
            },
            100
        )
    }

    return (
        <Wrapper>
            <Content>
                <h3>Target</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={allValues.setpoints.irrigation_target}
                        width={"80%"}
                        color={"dodgerblue"}
                        controlledItem={"target"}
                        marks={CONSTANTS.constants.sliders.waterTargetSlider}
                    />
                </CenteredDiv>
                <h3>Duration</h3>

                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={allValues.setpoints.irrigation_interval}
                        width={"80%"}
                        max={5}
                        min={1}
                        step={1}
                        color={"dodgerblue"}
                        controlledItem={"duration"}
                        marks={CONSTANTS.constants.sliders.waterDurationSlider}
                    />
                </CenteredDiv>
                <h3>Repeat every</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={allValues.setpoints.irrigation_delay}
                        width={"80%"}
                        max={20}
                        color={"dodgerblue"}
                        controlledItem={"interval"}
                        marks={
                            CONSTANTS.constants.sliders.waterRepetitionSlider
                        }
                    />
                </CenteredDiv>
                <h3>Delay</h3>
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
                </CenteredDiv>

                <ButtonArea>
                    <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetWaterConsumption")}
                    >
                        <AssessmentOutlinedIcon />
                        Reset water consumption
                    </Btn>
                </ButtonArea>
            </Content>
        </Wrapper>
    )
}

export default IrrigationSettings
