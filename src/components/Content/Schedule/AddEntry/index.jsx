import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import dayjs from "dayjs"

import StartStop from "./StartStop"
import Repeat from "./Repeat"

import { Wrapper, Content, LinkItem } from "./ScheduleAddEntry.styles"

import API from "../../../../API"

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined"
import Mode from "./Mode"
import Btn from "../../../UI/Btn"

const startTime = dayjs().valueOf()
const stopTime = dayjs().add(1, "day").valueOf()

const defaultData = {
    cmd_schedule_start_time: startTime,
    cmd_schedule_end_time: stopTime,
    cmd_schedule_recurrence: 0,
    cmd_schedule_value: 0,
    cmd_schedule_index: 0,
}

function ScheduleAddEntry() {
    let location = useLocation()
    let object = {}
    let command = "add"
    let addBtnText = "Add new entry"

    const queryClient = useQueryClient()

    if (
        location?.state?.schedule_index === 0 ||
        (location?.state?.schedule_index ?? false)
    ) {
        object = {
            cmd_schedule_start_time: location.state.schedule_start_time,
            cmd_schedule_end_time: location.state.schedule_end_time,
            cmd_schedule_recurrence: location.state.schedule_recurrence,
            cmd_schedule_value: location.state.schedule_value,
            cmd_schedule_index: location.state.schedule_index,
        }
        location.state
        command = "update"
        addBtnText = "Update entry"
    } else {
        object = defaultData
    }
    const [scheduleObject, setScheduleObject] = useState(object)
    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: (data) => {
            queryClient.invalidateQueries(["allValues"])
        },
    })

    const onSelect = (value) => {
        setScheduleObject((prev) => {
            return { ...prev, ...value }
        })
    }

    const handleAddBtn = () => {
        commandMutation.mutate({
            commands: {
                schedule: { cmd_schedule_function: command, ...scheduleObject },
            },
        })
    }
    return (
        <Wrapper>
            <Content>
                <StartStop
                    scheduleObject={scheduleObject}
                    onSelect={onSelect}
                />
                {/* <Repeat onSelect={onSelect} scheduleObject={scheduleObject} /> */}
                <Mode onSelect={onSelect} scheduleObject={scheduleObject} />
                <LinkItem to={".."} relative={"path"}>
                    <Btn onClick={handleAddBtn}>
                        <SaveOutlinedIcon /> {addBtnText}
                    </Btn>
                </LinkItem>
            </Content>
        </Wrapper>
    )
}

export default ScheduleAddEntry
