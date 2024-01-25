import { Container } from "./Timer.styles"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import Switches from "./Switches"
import TimeSelectors from "./TimeSelectors"
import Buttons from "./Buttons"
import Btn from "../../../UI/Btn"
import { useState } from "react"
import API from "../../../../API"

function Timer({ allValues }) {
    const [state, setState] = useState("on")
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(5)
    const [lighting, setLighting] = useState(false)
    const [heating, setHeating] = useState(false)
    const [irrigation, setIrrigation] = useState(false)
    const [co2, setCo2] = useState(false)

    const queryClient = useQueryClient()

    const handleChangeState = (state) => {
        setState(state)
    }

    const handleSetHour = (hour) => {
        setHour(hour)
    }

    const handleSetMinute = (minute) => {
        setMinute(minute)
    }

    const handleSetState = (action, state) => {
        switch (action) {
            case "lighting":
                setLighting(state)
                break

            case "heating":
                setHeating(state)
                break
            case "irrigation":
                setIrrigation(state)
                break

            case "co2":
                setCo2(state)
                break
        }
    }

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => {
            queryClient.invalidateQueries(["allValues"])
        },
    })

    const handleStartStop = (command) => {
        let object = {
            commands: {
                time_toggle_heat: heating,
                time_toggle_light: lighting,
                time_toggle_irrigation: irrigation,
                time_toggle_co2: co2,
            },
            setpoints: {},
        }

        if (command === "Start") {
            if (state === "on") {
                object.commands.time_toggle_keepon = true
                object.setpoints.time_toggle_sph = hour
                object.setpoints.time_toggle_spm = minute
            } else {
                object.commands.time_toggle_keepoff = true
            }
        } else {
            object.commands.time_toggle_keepon = false
            object.commands.time_toggle_keepoff = false
        }

        commandMutation.mutate(object)
    }

    return (
        <Container>
            <Buttons onChangeState={handleChangeState} state={state} />
            <TimeSelectors
                onSetHour={handleSetHour}
                onSetMinute={handleSetMinute}
                hour={hour}
                minute={minute}
            />
            {state === "on" ? (
                <Switches
                    onSetState={handleSetState}
                    states={{ lighting, heating, irrigation, co2 }}
                    allValues={allValues}
                />
            ) : null}

            {allValues.statuses.timer_active ? (
                <Btn onClick={() => handleStartStop("Stop")}>Stop timer</Btn>
            ) : (
                <Btn onClick={() => handleStartStop("Start")}>Start Timer</Btn>
            )}
        </Container>
    )
}

export default Timer
