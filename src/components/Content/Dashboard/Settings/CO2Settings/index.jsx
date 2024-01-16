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
} from "./CO2Settings.styles"

import API from "../../../../../API"

import CustomSlider from "../../../../UI/CustomSlider"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"

function CO2Settings() {
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
                command: {
                    co2_target: newValue,
                },
            })
        } else if (target === "duration") {
            commandMutation.mutate({
                command: {
                    co2_duration: newValue,
                },
            })
        } else if (target === "interval") {
            commandMutation.mutate({
                command: {
                    co2_interval: newValue,
                },
            })
        }
    }

    const handleBtnPress = (action) => {
        if (action === "resetOperatingHours") {
            commandMutation.mutate({
                command: {
                    co2_resetrh: true,
                },
            })
        } else if (action === "resetConsumption") {
            commandMutation.mutate({
                command: {
                    co2_reset_consumption: true,
                },
            })
        }
    }

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Content>
                <h3>Target</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={query.data.setpoints.co2_target}
                        width={"80%"}
                        color={"grey"}
                        min={400}
                        max={1200}
                        step={50}
                        controlledItem={"target"}
                        marks={CONSTANTS.constants.sliders.co2Target}
                    />
                </CenteredDiv>
                <h3>Duration</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={query.data.setpoints.co2_duration}
                        width={"80%"}
                        min={1}
                        max={5}
                        step={1}
                        color={"grey"}
                        controlledItem={"duration"}
                        marks={CONSTANTS.constants.sliders.co2Duration}
                    />
                </CenteredDiv>
                <h3>Repeat every</h3>
                <CenteredDiv>
                    <CustomSlider
                        onCommitedChange={onCommitedChange}
                        initialValue={query.data.setpoints.co2_interval}
                        width={"80%"}
                        color={"grey"}
                        min={2}
                        step={1}
                        max={10}
                        controlledItem={"interval"}
                        marks={CONSTANTS.constants.sliders.co2Interval}
                    />
                </CenteredDiv>

                <ButtonArea>
                    <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetOperatingHours")}
                    >
                        <AccessTimeIcon />
                        Reset operating hours
                    </Btn>
                    <Btn
                        svgSize={28}
                        onClick={() => handleBtnPress("resetConsumption")}
                    >
                        <AssessmentOutlinedIcon />
                        Reset energy consumption
                    </Btn>
                </ButtonArea>
            </Content>
        </Wrapper>
    )
}

export default CO2Settings
