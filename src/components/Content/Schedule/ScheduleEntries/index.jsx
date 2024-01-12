import React from "react"

import { Wrapper, Header, Content, LinkItem } from "./ScheduleEntries.styles"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import ScheduleEntry from "../SchedueEntry"

function ScheduleEntries() {
    return (
        <Wrapper>
            <Header>
                <LinkItem to={"/"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>

                {"Schedule > Entries"}
            </Header>
            <Content>
                <ScheduleEntry />
            </Content>
        </Wrapper>
    )
}

export default ScheduleEntries
