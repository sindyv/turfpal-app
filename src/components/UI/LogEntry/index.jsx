import React from "react"
import dayjs from "dayjs"
import { Dot, Wrapper, Line, DayHeader } from "./LogEntry.styles"

const defaultData = [
    {
        timestamp: 1704718026000,
        value: false,
        command: "Manual off",
        source: "Mobile app",
    },
    {
        timestamp: 1704541626000,
        value: false,
        command: "Manual off",
        source: "Mobile app",
    },
    {
        timestamp: 1704628026000,
        value: true,
        command: "Manual on",
        source: "Mobile app",
    },
    {
        timestamp: 1704717525000,
        value: true,
        command: "Manual on",
        source: "Mobile app",
    },
]

function LogEntry({ data = defaultData }) {
    // copy array to not modify original array
    const newData = [...data]

    // sort array
    newData.sort((a, b) => a.timestamp - b.timestamp)

    // find the day of most recent entry
    let currentDay = dayjs(newData[0].timestamp).day()
    let currentDayIndex = 0

    const organizedData = []

    newData.forEach((entry, index) => {
        if (index === 0) {
            organizedData.push([entry])
        } else if (currentDay !== dayjs(entry.timestamp).day()) {
            currentDay = dayjs(entry.timestamp).day()
            currentDayIndex += 1
            organizedData.push([entry])
        } else {
            organizedData[currentDayIndex].push(entry)
        }
    })

    console.log(organizedData)

    return (
        <Wrapper>
            <DayHeader>
                <span>03.01.2024</span>
                <span>Wednesday</span>
            </DayHeader>
            <Line>
                <Dot />
                <span>Turned on</span>
                <span>09:00:00</span>
                <span>Manual on</span>
                <span>Mobile app</span>
            </Line>
            <Line>
                <Dot />
                <span>Turned on</span>
                <span>09:00:00</span>
                <span>Manual on</span>
                <span>Mobile app</span>
            </Line>
        </Wrapper>
    )
}

export default LogEntry
