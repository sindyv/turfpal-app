import React from "react"

import { Container, BoldHeader, Content } from "./Session.styles"
import { Switch } from "@mui/material"

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"

import SetpointsButtons from "./SetpointsButtons"
import ValuesField from "./ValuesField"
import Btn from "../../../UI/Btn"
import Electricity from "./Electricity"
import ProgressBar from "./ProgressBar"

function Session({ handleToggleSchedule, allValues }) {
    return (
        <Container>
            <BoldHeader>
                <SettingsOutlinedIcon />
                Session
            </BoldHeader>
            <Content>
                <div>
                    <AutorenewOutlinedIcon /> Mode
                </div>
                <div>
                    <ValuesField allValues={allValues} />
                </div>
                <div>
                    <Electricity allValues={allValues} />
                </div>
                <div>
                    <ProgressBar allValues={allValues} />
                </div>
                <div>
                    <SetpointsButtons />
                </div>

                <div>
                    <CalendarMonthOutlinedIcon />
                    Scheduler
                    <Switch
                        color='custom'
                        checked={allValues?.statuses?.calendar ?? false}
                        onChange={(event) => {
                            handleToggleSchedule(event.target.checked)
                        }}
                    />
                </div>
                <Btn
                    backgroundColorDeselected={"var(--turfpalActiveBtn)"}
                    backgroundColorSelected={"var(--turfpalActiveBtn)"}
                    textColorSelected={"black"}
                    textColorDeselected={"black"}
                    customFont={"var(--turfpalFontBold)"}
                >
                    Start / Stop
                </Btn>
            </Content>
        </Container>
    )
}

export default Session
