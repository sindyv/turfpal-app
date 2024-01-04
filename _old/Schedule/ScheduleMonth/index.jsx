import React, { useState } from "react"
import dayjs from "dayjs"

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

import ScheduleEntry from "../ScheduleEntry"

import { MonthDiv } from "./ScheduleMonth.styles"

const ScheduleMonth = ({ month }) => {
    const [view, setView] = useState(false)

    const handleClick = () => {
        setView((prev) => !prev)
    }

    return (
        <>
            <MonthDiv onClick={() => handleClick()}>
                {dayjs(month.entries[0].schedule_start_time).format("MMMM")}
                <KeyboardArrowDownIcon fontSize='large' />
            </MonthDiv>
            {view
                ? month.entries.map((entry) => {
                      return (
                          <ScheduleEntry
                              entry={entry}
                              key={entry.schedule_index}
                          />
                      )
                  })
                : null}
        </>
    )
}

export default ScheduleMonth
