import React from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import Btn from "../../../../UI/Btn"

import {
    Wrapper,
    Content,
    ButtonArea,
    CenteredDiv,
} from "./HeatingSettings.styles"

import API from "../../../../../API"

import TempRangeSlider from "./TempRangeSlider"
import TempDelaySlider from "./TempDelaySlider"

import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

function HeatingSettings({ allValues }) {
    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    const onCommitedChange = (newValue, target) => {
        if (target === "range") {
            commandMutation.mutate({
                setpoints: {
                    default_hps_temp_50_on: newValue[0],
                    default_hps_temp_50_off: newValue[1],
                },
            })
        } else if (target === "delay") {
            commandMutation.mutate({
                setpoints: {
                    temp_delay: newValue,
                },
            })
        }

        console.log(target)
    }

    const handleResetOperatingHours = () => {
        commandMutation.mutate({
            command: {
                heat_reserh: true,
            },
        })
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
                <h3>Tempeature range</h3>
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
                </CenteredDiv>
                <h3>Time delay</h3>
                <p>
                    The time delay the temperature can exceed the temperature
                    thresholds before the heating is turned on or off
                </p>
                <CenteredDiv>
                    <TempDelaySlider
                        onCommitedChange={onCommitedChange}
                        initialValue={allValues.setpoints.temp_delay}
                    />
                </CenteredDiv>
                {/* <Btn svgSize={28}>
                    <SaveOutlinedIcon />
                    Save
                </Btn> */}
                <ButtonArea>
                    <Btn svgSize={28} onClick={handleResetOperatingHours}>
                        <AccessTimeIcon />
                        Reset operating hours
                    </Btn>
                    <Btn svgSize={28} onClick={handleResetEnergyMeter}>
                        <AssessmentOutlinedIcon />
                        Reset energy consumption
                    </Btn>
                </ButtonArea>
            </Content>
        </Wrapper>
    )
}

export default HeatingSettings
