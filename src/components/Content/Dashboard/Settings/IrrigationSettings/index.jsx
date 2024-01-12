import React from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import Btn from "../../../../UI/Btn"
import CONSTANTS from "../../../../../CONSTANTS.json"
import {
    Wrapper,
    Header,
    Content,
    LinkItem,
    ButtonArea,
    CenteredDiv,
} from "./IrrigationSettings.styles"

import API from "../../../../../API"

import CustomSlider from "../../../../UI/CustomSlider"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

function IrrigationSettings() {
    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    const onCommitedChange = (newValue, target) => {
        if (target === "target") {
            commandMutation.mutate({
                setpoints: {
                    irrigation_target: newValue,
                },
            })
        } else if (target === "duration") {
            commandMutation.mutate({
                setpoints: {
                    irrigation_duration: newValue,
                },
            })
        } else if (target === "interval") {
            commandMutation.mutate({
                setpoints: {
                    irrigation_interval: newValue,
                },
            })
        } else if (target === "delay") {
            commandMutation.mutate({
                setpoints: {
                    irrigation_delay: newValue,
                },
            })
        }
    }

    const handleBtnPress = () => {
        commandMutation.mutate({
            command: {
                irrigation_reset_consumption: true,
            },
        })
    }

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"/irrigation"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                {"Irrigation > Settings"}
            </Header>
            <Content>
                <h3>Target</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={query.data.setpoints.irrigation_target}
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
                        initialValue={query.data.setpoints.irrigation_interval}
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
                        initialValue={query.data.setpoints.irrigation_delay}
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
                            query.data.setpoints.default_led_light_50_on
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
