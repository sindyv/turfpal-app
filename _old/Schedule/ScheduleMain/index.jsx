import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"

// API
import API from "../../../API"

import { Wrapper } from "./Schedule.styles"

import ScheduleMonth from "../ScheduleMonth"

const ScheduleMain = () => {
    const query = useQuery({
        queryKey: ["schedule"],
        queryFn: API.fetchSchedulePromise,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data</h1>

    // copy to new array to not modify original array
    const newArray = [...query.data.schedules]
    console.log(query.data.schedules)
    // sort by start-time
    newArray.sort((a, b) => a.schedule_start_time - b.schedule_start_time)

    // declare new array for data structure
    let calendarEntriesSortedByMonth = []

    newArray.forEach((item) => {
        const date = dayjs(item.schedule_start_time)
        const month = date.month()

        if (typeof calendarEntriesSortedByMonth[month] !== "undefined") {
            let tempArray = calendarEntriesSortedByMonth[month].entries || []
            tempArray.push(item)
            calendarEntriesSortedByMonth[month] = { entries: tempArray }
        } else {
            calendarEntriesSortedByMonth[month] = { entries: [item] }
        }
    })

    return (
        <Wrapper>
            {calendarEntriesSortedByMonth.map((month, index) => {
                return <ScheduleMonth month={month} key={index} />
            })}
        </Wrapper>
    )
}

export default ScheduleMain
