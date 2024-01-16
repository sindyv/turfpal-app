import React from "react"

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined"
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined"
import {
    Wrapper,
    Icons,
    LinkItem,
    IconWrapper,
    NumberCircle,
} from "./Menu.styles"
const Menu = () => {
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
                        <NumberCircle>2</NumberCircle>
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
