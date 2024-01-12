import React from "react"

import {
    Wrapper,
    Header,
    Content,
    LinkItem,
    ContentLine,
    ContentField,
} from "./ScheduleEntry.styles"

import AcUnitIcon from "@mui/icons-material/AcUnit"
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined"
import StopOutlinedIcon from "@mui/icons-material/StopOutlined"
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined"
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined"
function ScheduleEntry() {
    return (
        <Wrapper>
            <Header>
                <span>Monday</span>
                <span>
                    <AcUnitIcon />
                    Winter
                </span>
            </Header>
            <Content>
                <ContentLine>
                    <ContentField>
                        <PlayArrowOutlinedIcon />
                        <span>Start</span>
                    </ContentField>
                    <ContentField>
                        <CalendarMonthOutlinedIcon />
                        <span>08.01.2024</span>
                    </ContentField>
                    <ContentField>
                        <ScheduleOutlinedIcon />
                        <span>09:00</span>
                    </ContentField>
                </ContentLine>
                <ContentLine>
                    <ContentField>
                        <StopOutlinedIcon />

                        <span>Stop</span>
                    </ContentField>
                    <ContentField>
                        <CalendarMonthOutlinedIcon />

                        <span>08.01.2024</span>
                    </ContentField>
                    <ContentField>
                        <ScheduleOutlinedIcon />

                        <span>23:00</span>
                    </ContentField>
                </ContentLine>
            </Content>
        </Wrapper>
    )
}

export default ScheduleEntry
