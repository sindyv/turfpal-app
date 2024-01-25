import React from "react"

import { Container, BoldHeader, SmallHeader, Content } from "./Session.styles"
import { Switch } from "@mui/material"

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"

import SetpointsButtons from "./SetpointsButtons"
import ValuesField from "./ValuesField"
import Btn from "../../../UI/Btn"
import Electricity from "./Electricity"
import ProgressBar from "./ProgressBar"

function Session({
    onToggleSchedule,
    allValues,
    onStartStop,
    onSelectSetpoints,
    tempStates,
}) {
    const handleStartStop = () => {
        onStartStop()
    }

    let activeSetpoints =
        allValues.statuses.mode === "manual" ? "Manual" : "Scheduler"

    if (!allValues.statuses.calendar) {
        switch (allValues.statuses.setpoints_set) {
            case "default":
                activeSetpoints = "Default"
                break

            case "user_defined1":
                activeSetpoints = "Summer"
                break

            case "user_defined2":
                activeSetpoints = "Winter"
                break

            case "user_defined3":
                activeSetpoints = "Custom"
                break
        }
    }

    return (
        <Container>
            <BoldHeader>
                <SettingsOutlinedIcon />
                Session
            </BoldHeader>
            <Content>
                <div>
                    <ValuesField allValues={allValues} />
                </div>
                {allValues.statuses.session ? (
                    <>Mode: {activeSetpoints} </>
                ) : null}

                {allValues.statuses.session ? (
                    <div>
                        <Electricity allValues={allValues} />
                    </div>
                ) : null}

                {allValues.statuses.session && allValues.statuses.calendar ? (
                    <div>
                        <ProgressBar allValues={allValues} />
                    </div>
                ) : null}

                {!allValues.statuses.session ? (
                    <SmallHeader>
                        <CalendarMonthOutlinedIcon />
                        Scheduler
                        <Switch
                            color='custom'
                            checked={tempStates.calendar ?? false}
                            onChange={(event) => {
                                onToggleSchedule(event.target.checked)
                            }}
                        />
                    </SmallHeader>
                ) : null}

                {!allValues.statuses.session && !tempStates.calendar ? (
                    <>
                        <SmallHeader>
                            <AutorenewOutlinedIcon /> Mode
                        </SmallHeader>
                        <div>
                            <SetpointsButtons
                                onSelectSetpoints={onSelectSetpoints}
                                activeSetpoints={tempStates.setpoints}
                            />
                        </div>
                    </>
                ) : null}

                <Btn
                    backgroundColorDeselected={"var(--turfpalActiveBtn)"}
                    backgroundColorSelected={"var(--turfpalActiveBtn)"}
                    textColorSelected={"black"}
                    textColorDeselected={"black"}
                    customFont={"var(--turfpalFontBold)"}
                    onClick={handleStartStop}
                >
                    {allValues.statuses.session ? "Stop" : "Start"}
                </Btn>
            </Content>
        </Container>
    )
}

export default Session
