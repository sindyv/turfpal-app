import React from "react"

import { Container, BoldHeader, Content } from "./Session.styles"

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"

import SetpointsButtons from "./SetpointsButtons"
import Btn from "../../../UI/Btn"

function Session() {
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
                <SetpointsButtons />
                <div>
                    <CalendarMonthOutlinedIcon />
                    Scheduler
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
