import React, { useState } from "react"
// Styles
import { Wrapper, ButtonsArea } from "./Dashboard.styles"

//Components
import Btn from "../../UI/Btn"
import ControlTiles from "./ControlTiles"

// Images
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"

// API
import Session from "./Session"
import { useContext } from "react"
import { AllValuesContext } from "../../../store/context/allValues-context"
function Dashboard({}) {
    const { data: allValues, onCommand } = useContext(AllValuesContext)
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
            onCommand(
                {
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
                },
                100
            )
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

        onCommand(
            {
                commands: { ...command },
            },
            100
        )
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
            <ControlTiles />
        </Wrapper>
    )
}

export default Dashboard
