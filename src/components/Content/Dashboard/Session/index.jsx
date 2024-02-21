import React, { useContext } from "react"
import useConvertModeName from "../../../../hooks/useConvertModeName"

// Styles
import { Container, BoldHeader, SmallHeader, Content } from "./Session.styles"

// Components
import { Switch } from "@mui/material"
import SetpointsButtons from "../../../UI/SetpointsButtons"
import ValuesField from "./ValuesField"
import Btn from "../../../UI/Btn"
import Electricity from "./Electricity"
import ProgressBar from "./ProgressBar"

// Icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"

// Context
import { AllValuesContext } from "../../../../store/context/allValues-context"

// Static data
const setpointsArray = ["default", "user_defined1", "user_defined2"]

function Session({
    onToggleSchedule,
    onStartStop,
    onSelectSetpoints,
    tempStates,
}) {
    const { data: allValues } = useContext(AllValuesContext)

    const handleStartStop = () => {
        onStartStop()
    }

    let activeSetpoints =
        allValues.statuses.mode === "manual" ? "Manual" : "Scheduler"

    if (!allValues.statuses.calendar) {
        activeSetpoints = useConvertModeName(allValues.statuses.setpoints_set)
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
                                setpointsArray={setpointsArray}
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
