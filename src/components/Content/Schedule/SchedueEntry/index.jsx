import React from "react"

import {
    Wrapper,
    Header,
    Content,
    LinkItem,
    ContentLine,
    ContentField,
} from "./ScheduleEntry.styles"
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined"
import AcUnitIcon from "@mui/icons-material/AcUnit"
import StopOutlinedIcon from "@mui/icons-material/StopOutlined"
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined"
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined"
import dayjs from "dayjs"

const defaultData = {
    schedule_index: 0,
    schedule_start_time: 1705294800,
    schedule_end_time: 1705299300,
    schedule_recurrence: 7,
    schedule_value: 2,
}

function ScheduleEntry({ data = defaultData, toggleModal, onDeleteButton }) {
    let setpoints = "Default"
    let Icon = <SettingsBackupRestoreOutlinedIcon />

    switch (data.schedule_value) {
        case 1:
            setpoints = "Summer"
            Icon = <WbSunnyOutlinedIcon />
            break
        case 2:
            setpoints = "Winter"
            Icon = <AcUnitIcon />
            break
        case 3:
            setpoints = "Custom"
            Icon = <BackHandOutlinedIcon />
            break

        default:
            break
    }

    const currentTime = Date.now()
    const entryActive =
        currentTime < data.schedule_end_time &&
        currentTime > data.schedule_start_time

    const handleDeleteButton = () => {
        toggleModal(data.schedule_index)
        onDeleteButton(data.schedule_index)
    }

    return (
        <Wrapper $active={entryActive}>
            <Header>
                <span>
                    {dayjs(data.schedule_start_time).format("dddd")}
                    <LinkItem
                        to={"add"}
                        state={{ ...data, headerText: "Schedule > Edit entry" }}
                        $active={entryActive}
                    >
                        <ModeEditOutlineOutlinedIcon />
                    </LinkItem>
                    <DeleteForeverOutlinedIcon
                        color={"error"}
                        onClick={handleDeleteButton}
                    />
                </span>

                <span>
                    {Icon}
                    {setpoints}
                </span>
            </Header>
            <Content>
                <ContentLine>
                    <ContentField>
                        <span>
                            <PlayArrowOutlinedIcon />
                        </span>
                        <span>Start</span>
                    </ContentField>
                    <ContentField>
                        <span>
                            <CalendarMonthOutlinedIcon />
                        </span>
                        <span>
                            {dayjs(data.schedule_start_time).format(
                                "DD-MM-YYYY"
                            )}
                        </span>
                    </ContentField>
                    <ContentField>
                        <span>
                            <ScheduleOutlinedIcon />
                        </span>
                        <span>
                            {dayjs(data.schedule_start_time).format("HH:mm")}
                        </span>
                    </ContentField>
                </ContentLine>
                <ContentLine>
                    <ContentField>
                        <span>
                            <StopOutlinedIcon />
                        </span>

                        <span>Stop</span>
                    </ContentField>
                    <ContentField>
                        <span>
                            <CalendarMonthOutlinedIcon />
                        </span>
                        <span>
                            {dayjs(data.schedule_end_time).format("DD-MM-YYYY")}
                        </span>
                    </ContentField>
                    <ContentField>
                        <span>
                            <ScheduleOutlinedIcon />
                        </span>

                        <span>
                            {dayjs(data.schedule_end_time).format("HH:mm")}
                        </span>
                    </ContentField>
                </ContentLine>
            </Content>
        </Wrapper>
    )
}

export default ScheduleEntry
