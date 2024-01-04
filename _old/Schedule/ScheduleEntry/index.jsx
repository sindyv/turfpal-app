import React from "react"
import dayjs from "dayjs"

import { Wrapper } from "./ScheduleEntry.styles"

import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const ScheduleEntry = ({ entry }) => {
    const findSetpointText = (setpoint) => {
        switch (setpoint) {
            case 0:
                return "Default"
                break
            case 1:
                return "User setpoints 1"

            case 2:
                return "User setpoints 2"

            case 3:
                return "User setpoints 3"
        }
    }

    return (
        <Wrapper>
            <div className='monthSubDiv__dropdown'>
                <div className='monthSubDiv_wrapper'>
                    <div>
                        <h3>From</h3>
                        {dayjs(entry.schedule_start_time).format("MMM D HH:MM")}
                    </div>
                    <div>
                        <h3>To</h3>
                        {dayjs(entry.schedule_end_time).format("MMM D HH:MM")}
                    </div>
                    <div>
                        <DeleteForeverIcon />
                    </div>
                </div>
                <div className='monthSubDiv__setpoints'>
                    Selected setpoints:{" "}
                    <b>{findSetpointText(entry.schedule_value)}</b>
                </div>
            </div>
        </Wrapper>
    )
}

export default ScheduleEntry
