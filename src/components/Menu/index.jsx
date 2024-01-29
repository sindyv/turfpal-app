import React, { useContext } from "react"

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined"
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined"

// Styled components
import {
    Wrapper,
    Icons,
    LinkItem,
    IconWrapper,
    NumberCircle,
} from "./Menu.styles"

// Context
import { AllValuesContext } from "../../store/context/allValues-context"
const Menu = () => {
    const { data: allValues } = useContext(AllValuesContext)

    // sum active alarms
    // create array containing alll keys inn alarms-object
    let alarms = Object.keys(allValues.alarms)
    let sumAlarms = 0

    // iterate through object checking if any values are true. If so, add 1 to sumAlarms
    alarms.forEach((alarm) => {
        if (allValues.alarms[alarm]) {
            sumAlarms += 1
        }
    })

    return (
        <Wrapper>
            <Icons>
                <LinkItem to={"/"} state={{ headerText: "Dashboard" }}>
                    <DashboardOutlinedIcon />
                </LinkItem>
                <LinkItem to={"schedule"} state={{ headerText: "Scheduler" }}>
                    <CalendarMonthOutlinedIcon />
                </LinkItem>
                <LinkItem to={"alarms"} state={{ headerText: "Alarms" }}>
                    <IconWrapper>
                        <ReportProblemOutlinedIcon />
                        {sumAlarms ? (
                            <NumberCircle>{sumAlarms}</NumberCircle>
                        ) : null}
                    </IconWrapper>
                </LinkItem>
                <LinkItem to={"energy"} state={{ headerText: "Energy" }}>
                    <ElectricBoltOutlinedIcon />
                </LinkItem>
            </Icons>
        </Wrapper>
    )
}

export default Menu
