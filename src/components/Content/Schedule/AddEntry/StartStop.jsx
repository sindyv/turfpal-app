import React, { useState } from "react"

import { Wrapper, CardContainer, CardContent } from "./StartStop.styles"

import Card from "../../../UI/Card"

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

import dayjs from "dayjs"
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker"

function StartStop({ scheduleObject, onSelect }) {
    const [startTime, setStartTime] = useState(
        dayjs(scheduleObject.cmd_schedule_start_time)
    )
    const [stopTime, setStopTime] = useState(
        dayjs(scheduleObject.cmd_schedule_end_time)
    )

    const handleStartTimeChange = (value) => {
        setStartTime(value)
        onSelect({ cmd_schedule_start_time: dayjs(value).valueOf() })
    }

    const handleStopTimeChange = (value) => {
        setStopTime(value)
        onSelect({ cmd_schedule_end_time: dayjs(value).valueOf() })
    }

    return (
        <Wrapper>
            <CardContainer>
                Start
                <Card>
                    <CardContent>
                        <AccessTimeOutlinedIcon />
                        <MobileDateTimePicker
                            closeOnSelect={false}
                            ampm={false}
                            onChange={handleStartTimeChange}
                            // label={"Start"}
                            value={startTime}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: 0,
                                },
                                "& .MuiInputBase-root": {
                                    border: 0,
                                    height: 28,
                                    fontSize: 12,
                                    fontFamily: "Euclid",
                                    margin: 0,
                                    padding: 0,
                                },
                            }}
                        />
                    </CardContent>
                </Card>
            </CardContainer>
            <CardContainer>
                Stop
                <Card>
                    <CardContent>
                        <AccessTimeOutlinedIcon />
                        <MobileDateTimePicker
                            value={stopTime}
                            ampm={false}
                            onChange={handleStopTimeChange}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: 0,
                                },
                                "& .MuiInputBase-root": {
                                    border: 0,
                                    height: 28,
                                    fontSize: 12,
                                    fontFamily: "Euclid",
                                    margin: 0,
                                    padding: 0,
                                },
                            }}
                        />
                    </CardContent>
                </Card>
            </CardContainer>
        </Wrapper>
    )
}

export default StartStop
