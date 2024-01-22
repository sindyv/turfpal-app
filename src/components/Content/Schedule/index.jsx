import React from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Wrapper, TileArea } from "./Schedule.styles"

import API from "../../../API"

import TimerTile from "./TimerTile"

import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

function Schedule({ allValues }) {
    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: (data) => {
            queryClient.setQueryData(["allValues"], data)
        },
    })

    const handleToggleCalendar = (value) => {
        let command = { commands: {} }
        if (value) {
            command.commands.calendaron = true
        } else {
            command.commands.calendaroff = true
        }

        commandMutation.mutate(command)
    }

    return (
        <Wrapper>
            <TileArea>
                <TimerTile
                    disabled={allValues.statuses.session}
                    enabled={allValues.statuses.calendar}
                    title={"Calendar"}
                    icon={EditCalendarOutlinedIcon}
                    linkTo={"entries"}
                    onClick={handleToggleCalendar}
                />
                <TimerTile
                    disabled={allValues.statuses.session}
                    allValues={allValues}
                    title={"Timer"}
                    icon={AccessTimeOutlinedIcon}
                    linkTo={"timer"}
                />
            </TileArea>
        </Wrapper>
    )
}

export default Schedule
