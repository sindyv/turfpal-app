import React, { useContext } from "react"

// Styles
import { Wrapper, TileArea } from "./Schedule.styles"

// Components
import TimerTile from "./TimerTile"

// Icons
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

// Context
import { AllValuesContext } from "../../../store/context/allValues-context"

function Schedule() {
    const { data: allValues, onCommand } = useContext(AllValuesContext)

    const handleToggleCalendar = (value) => {
        let command = { commands: {} }
        if (value) {
            command.commands.calendaron = true
        } else {
            command.commands.calendaroff = true
        }

        onCommand(command)
    }

    return (
        <Wrapper>
            <TileArea>
                <TimerTile
                    disabled={allValues.statuses.session}
                    // enabled={allValues.statuses.calendar}
                    title={"Calendar"}
                    icon={EditCalendarOutlinedIcon}
                    linkTo={"entries"}
                    linkHeaderText={"Schedule > Entries"}
                    onClick={handleToggleCalendar}
                />
                <TimerTile
                    disabled={allValues.statuses.session}
                    allValues={allValues}
                    title={"Timer"}
                    icon={AccessTimeOutlinedIcon}
                    linkHeaderText={"Schedule > Timer"}
                    linkTo={"timer"}
                />
            </TileArea>
        </Wrapper>
    )
}

export default Schedule
