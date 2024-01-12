import React from "react"

import { DayHeader } from "./LogEntryHeader.styles"
import dayjs from "dayjs"

function LogEntryHeader({ day }) {
    return (
        <DayHeader>
            <span>{dayjs(day[0].timestamp).format("DD.MM.YYYY")}</span>
            <span>{dayjs(day[0].timestamp).format("dddd")}</span>
        </DayHeader>
    )
}

export default LogEntryHeader
