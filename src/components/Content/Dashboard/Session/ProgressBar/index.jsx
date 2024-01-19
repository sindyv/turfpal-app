import React from "react"

import { Bar, Container } from "./ProgressBar.styles"

function ProgressBar({ allValues }) {
    // check if there is an active schedule session
    const checkForActiveEntries = () => {
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

    const calculateProgress = (entry) => {
        if (Object.keys(activeEntry).length > 0) {
            const totalTime =
                activeEntry.schedule_end_time - activeEntry.schedule_start_time
            const eplapsedTime = Date.now() - activeEntry.schedule_start_time
            const progress = (eplapsedTime / totalTime) * 100

            return progress
        }
    }

    const activeEntry = checkForActiveEntries()
    const progress = calculateProgress(activeEntry)

    return (
        <Container>
            {Object.keys(activeEntry).length > 0 ? (
                <Bar $progress={progress}>{Math.round(progress)}%</Bar>
            ) : null}
        </Container>
    )
}

export default ProgressBar
