import React, { useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import dayjs from "dayjs"

// Styles
import { Wrapper, Content, LinkItem } from "./ScheduleAddEntry.styles"

// Components
import StartStop from "./StartStop"
import Repeat from "./Repeat"
import Mode from "./Mode"
import Btn from "../../../UI/Btn"

// Icons
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined"

// Context
import { AllValuesContext } from "../../../../store/context/allValues-context"

const startTime = dayjs().valueOf()
const stopTime = dayjs().add(1, "day").valueOf()

const defaultData = {
    cmd_schedule_start_time: startTime,
    cmd_schedule_end_time: stopTime,
    cmd_schedule_recurrence: 0,
    cmd_schedule_value: 0,
    cmd_schedule_index: 0,
}

function ScheduleAddEntry() {
    const { onCommand, data: allValues } = useContext(AllValuesContext)

    let location = useLocation()
    let object = {}
    let command = "add"
    let addBtnText = "Add new entry"

    if (
        location?.state?.schedule_index === 0 ||
        (location?.state?.schedule_index ?? false)
    ) {
        object = {
            cmd_schedule_start_time: location.state.schedule_start_time,
            cmd_schedule_end_time: location.state.schedule_end_time,
            cmd_schedule_recurrence: location.state.schedule_recurrence,
            cmd_schedule_value: location.state.schedule_value,
            cmd_schedule_index: location.state.schedule_index,
        }
        location.state
        command = "update"
        addBtnText = "Update entry"
    } else {
        object = defaultData
    }
    const [scheduleObject, setScheduleObject] = useState(object)

    const onSelect = (value) => {
        setScheduleObject((prev) => {
            return { ...prev, ...value }
        })
    }

    const handleAddBtn = () => {
        scheduleObject.cmd_schedule_start_time =
            scheduleObject.cmd_schedule_start_time
        scheduleObject.cmd_schedule_end_time =
            scheduleObject.cmd_schedule_end_time

        onCommand({
            commands: {
                schedule: { cmd_schedule_function: command, ...scheduleObject },
            },
        })
    }
    return (
        <Wrapper>
            <Content>
                <StartStop
                    scheduleObject={scheduleObject}
                    onSelect={onSelect}
                />
                {/* <Repeat onSelect={onSelect} scheduleObject={scheduleObject} /> */}
                <Mode onSelect={onSelect} scheduleObject={scheduleObject} />
                <LinkItem to={".."} relative={"path"}>
                    <Btn onClick={handleAddBtn}>
                        <SaveOutlinedIcon /> {addBtnText}
                    </Btn>
                </LinkItem>
            </Content>
        </Wrapper>
    )
}

export default ScheduleAddEntry
