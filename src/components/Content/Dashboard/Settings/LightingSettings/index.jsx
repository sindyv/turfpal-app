import React from "react"
import { useMutation } from "@tanstack/react-query"

import Btn from "../../../../UI/Btn"
import CONSTANTS from "../../../../../CONSTANTS.json"
import {
    Wrapper,
    Content,
    ButtonArea,
    CenteredDiv,
} from "./LightingSettings.styles"

import API from "../../../../../API"

import CustomSlider from "../../../../UI/CustomSlider"

import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

function LightingSettings({ allValues }) {
    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    const onCommitedChange = (newValue, target) => {
        if (target === "horti") {
            commandMutation.mutate({
                setpoints: {
                    led_zone1_dim: newValue,
                },
            })
        } else if (target === "blue") {
            commandMutation.mutate({
                setpoints: {
                    led_zone2_dim: newValue,
                },
            })
        } else if (target === "par") {
            commandMutation.mutate({
                setpoints: {
                    default_led_light_50_on: newValue[0],
                    default_led_dim_50_range2: newValue[1],
                    default_led_dim_50_range3: newValue[2],
                    default_led_light_50_off: newValue[3],
                },
            })
        }
    }

    const handleBtnPress = (action) => {
        if (action === "resetRhZ1") {
            commandMutation.mutate({
                command: {
                    led_zone1_resetrh: true,
                },
            })
        } else if (action === "resetRhZ2") {
            commandMutation.mutate({
                command: {
                    led_zone2_resetrh: true,
                },
            })
        } else if (action === "resetEnergy") {
            commandMutation.mutate({
                command: {
                    led_resetEnergy: true,
                },
            })
        }
    }

    const handleResetEnergyMeter = () => {
        commandMutation.mutate({
            command: {
                heat_resetEnergy: true,
            },
        })
    }

    return (
        <Wrapper>
            <Content>
                <h3>Horti</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={
                            allValues.setpoints.default_led_light_50_on
                        }
                        width={"80%"}
                        color={"gold"}
                        controlledItem={"horti"}
                        marks={CONSTANTS.constants.sliders.hortiSlider}
                    />
                </CenteredDiv>
                <h3>Blue</h3>

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
                </CenteredDiv>

                <ButtonArea>
                    <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetRhZ1")}
                    >
                        <AccessTimeIcon />
                        Reset operating hours Horti
                    </Btn>
                    <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetRhZ2")}
                    >
                        <AccessTimeIcon />
                        Reset operating hours Blue
                    </Btn>
                    <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetEnergy")}
                    >
                        <AssessmentOutlinedIcon />
                        Reset energy consumption
                    </Btn>
                </ButtonArea>
            </Content>
        </Wrapper>
    )
}

export default LightingSettings
