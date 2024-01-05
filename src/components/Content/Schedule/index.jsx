import React from "react"

import { Wrapper, Header, TileArea } from "./Schedule.styles"

import TimerTile from "./TimerTile"

import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

function Schedule() {
    return (
        <Wrapper>
            {" "}
            <Header>Scheduler</Header>
            <TileArea>
                <TimerTile
                    enabled={true}
                    title={"Calendar"}
                    icon={EditCalendarOutlinedIcon}
                />
                <TimerTile title={"Timer"} icon={AccessTimeOutlinedIcon} />
            </TileArea>
        </Wrapper>
    )
}

export default Schedule
