import React from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import Btn from "../../../../UI/Btn"

import {
    Wrapper,
    Header,
    Content,
    LinkItem,
    ButtonArea,
    CenteredDiv,
} from "./HeatingSettings.styles"

import API from "../../../../../API"

import TempRangeSlider from "./TempRangeSlider"
import TempDelaySlider from "./TempDelaySlider"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined"
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined"

function HeatingSettings() {
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

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"/heating"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                {"Heating > Settings"}
            </Header>
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
                            query.data.setpoints.default_hps_temp_50_on,
                            query.data.setpoints.default_hps_temp_50_off,
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
                        initialValue={query.data.setpoints.temp_delay}
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
