import React from "react"
import { Link } from "react-router-dom"

import { Wrapper, Header, TileArea, LinkItem } from "./Schedule.styles"

import TimerTile from "./TimerTile"

import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

function Schedule() {
    return (
        <Wrapper>
            <TileArea>
                <TimerTile
                    enabled={true}
                    title={"Calendar"}
                    icon={EditCalendarOutlinedIcon}
                    linkTo={"entries"}
                />
                <TimerTile
                    title={"Timer"}
                    icon={AccessTimeOutlinedIcon}
                    linkTo={"timer"}
                />
            </TileArea>
        </Wrapper>
    )
}

export default Schedule
