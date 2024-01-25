import React, { useState } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
// Styles
import { Wrapper, ButtonsArea } from "./Dashboard.styles"

//Components
import Btn from "../../UI/Btn"
import ControlTiles from "./ControlTiles"

// Images
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"

// API
import API from "../../../API"
import Session from "./Session"

function Dashboard({ allValues }) {
    const [states, setStates] = useState({
        newCommand: false,
        setpoints: "default",
        calendar: allValues.statuses.calendar,
    })

    const handleAuto = () => {
        setStates((prev) => {
            return { ...prev, auto: true, manual: false, newCommand: true }
        })
    }

    const handleManual = () => {
        setStates((prev) => {
            return { ...prev, auto: false, manual: true, newCommand: false }
        })
    }

    const handleStartStop = () => {
        // if session is already active, set mode to 'Manual' to stop session.
        if (allValues?.statuses?.session) {
            commandMutation.mutate({
                commands: {
                    auto: false,
                    manual: true,
                    led_zone1_on: false,
                    led_zone2_on: false,
                    heat_zone1: false,
                    heat_zone2: false,
                    heat_zone3: false,
                    dim: false,
                },
                setpoints: {
                    led_zone1_dim_man: 0,
                    led_zone2_dim_man: 0,
                },
            })
            return
        }

        let command = {
            auto: states.auto,
            manual: states.manual,
            default: states.setpoints === "default",
            user_defined1: states.setpoints === "user_defined1",
            user_defined2: states.setpoints === "user_defined2",
            user_defined3: states.setpoints === "user_defined3",
            calendaron: states.calendar,
            calendaroff: !states.calendar,
        }

        commandMutation.mutate({
            commands: { ...command },
        })
    }

    const onToggleSchedule = (state) => {
        setStates((prev) => {
            return { ...prev, calendar: state }
        })
    }

    const onSelectSetpoints = (setpoints) => {
        setStates((prev) => {
            return { ...prev, setpoints }
        })
    }

    // Query handeling
    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => {
            setTimeout(() => queryClient.invalidateQueries(["allValues"]), 1500)
        },
    })

    let state = allValues.statuses.session

    if (states.newCommand) {
        state = states.auto
    }

    return (
        <Wrapper>
            <ButtonsArea>
                <Btn svgSize={24} selected={state} onClick={handleAuto}>
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn svgSize={24} selected={!state} onClick={handleManual}>
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            {state ? (
                <Session
                    onStartStop={handleStartStop}
                    onToggleSchedule={onToggleSchedule}
                    onSelectSetpoints={onSelectSetpoints}
                    allValues={allValues}
                    tempStates={states}
                />
            ) : null}
            <ControlTiles
                commandMutation={commandMutation}
                allValues={allValues}
            />
        </Wrapper>
    )
}

export default Dashboard
