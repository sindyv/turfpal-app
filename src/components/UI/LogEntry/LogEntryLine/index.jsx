import React from "react"

import { Line, Dot } from "./LogEntryLine.styles"
import dayjs from "dayjs"

function LogEntryLine({ entry }) {
    const dayjsObject = dayjs(entry.timestamp)
    return (
        <Line key={crypto.randomUUID()}>
            <Dot
                $color={
                    entry.value ? "var(--turfpalColor)" : "var(--borderColor)"
                }
            />
            <span>{entry.value ? "Turned on" : "Turned off"}</span>
            <span>{dayjsObject.format("HH:mm:ss")}</span>
            <span>{entry.command}</span>
            <span>{entry.source}</span>
        </Line>
    )
}

export default LogEntryLine