import React from "react"

import { Bar, BarContainer, Container } from "./ProgressBar.styles"
import dayjs from "dayjs"

function ProgressBar({ allValues }) {
    function calculateProgress(entry) {
        if (Object.keys(entry).length > 0) {
            const totalTime =
                entry.schedule_end_time - entry.schedule_start_time
            const eplapsedTime = Date.now() - entry.schedule_start_time
            const progress = (eplapsedTime / totalTime) * 100

            return progress
        }
    }

    // check if there is an active schedule session
    function checkForActiveEntries() {
        let entryActive = {}
        if (Array.isArray(allValues.schedules)) {
            const timestamp = Date.now()

            allValues.schedules.forEach((entry) => {
                if (
                    timestamp > entry.schedule_start_time &&
                    timestamp < entry.schedule_end_time
                ) {
                    entryActive = entry
                }
            })
        }
        return entryActive
    }

    const activeEntry = checkForActiveEntries()

    const progress = calculateProgress(activeEntry)

    return (
        <Container>
            {Object.keys(activeEntry).length > 0 ? (
                <>
                    <BarContainer>
                        <Bar $progress={progress}>{Math.round(progress)}%</Bar>
                    </BarContainer>
                    {dayjs(activeEntry.schedule_end_time).format("HH:mm")}
                </>
            ) : null}
        </Container>
    )
}

export default ProgressBar
