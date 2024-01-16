import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import dayjs from "dayjs"

import StartStop from "./StartStop"
import Repeat from "./Repeat"

import { Wrapper, Header, Content, LinkItem } from "./ScheduleAddEntry.styles"

import API from "../../../../API"

import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
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

    const queryClient = useQueryClient()

    let object = {}
    let command = "add"
    let addBtnText = "Add new entry"

    if (location?.state?.schedule_index ?? null) {
        object = location.state
        command = "update"
        addBtnText = "Update entry"
    } else {
        object = defaultData
    }

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: (data) => {
            queryClient.setQueryData(["schedule"], data)
        },
    })

    const [scheduleObject, setScheduleObject] = useState(object)

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
            <Header>
                <LinkItem to={".."} relative={"path"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                {addBtnText}
            </Header>
            <Content>
                <StartStop
                    scheduleObject={scheduleObject}
                    onSelect={onSelect}
                />
                <Repeat onSelect={onSelect} scheduleObject={scheduleObject} />
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
