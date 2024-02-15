import React from "react"
import dayjs from "dayjs"
// Styles
import {
    CardHeaderContainer,
    CardHeader,
    CardContentContainer,
    CardDataField,
} from "./SessionLogEntry.styles"

// Components
import Card from "../../../UI/Card"

// Icons
import TimelineIcon from "@mui/icons-material/Timeline"
// Context
function SessionLogEntry({ entry }) {
    return (
        <Card>
            <CardHeaderContainer>
                <CardHeader>
                    <TimelineIcon /> {dayjs(entry.startTime).format("dddd")}
                </CardHeader>
                <div>{entry.calculatedCostOfEnergy}€</div>
            </CardHeaderContainer>
            <CardContentContainer>
                <CardDataField>
                    <div>Start</div>
                    <div>
                        {dayjs(entry.startTime).format("YYYY-DD-MM HH:mm ")}
                    </div>
                </CardDataField>
                <CardDataField>
                    <div>Energy</div>
                    <div>{entry.calculatedEnergy}kWh</div>
                </CardDataField>
                <CardDataField>
                    <div>Stop</div>
                    <div>
                        {entry.endTime
                            ? dayjs(entry.endTime).format("YYYY-DD-MM HH:mm ")
                            : "Ongoing"}
                    </div>
                </CardDataField>
            </CardContentContainer>
        </Card>
    )
}

export default SessionLogEntry
