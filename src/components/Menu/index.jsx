import React from "react"

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined"
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined"
import { Wrapper, Icons, LinkItem } from "./Menu.styles"
const Menu = () => {
    return (
        <Wrapper>
            <Icons>
                <LinkItem to={"/"}>
                    <DashboardOutlinedIcon />
                </LinkItem>
                <LinkItem to={"schedule"}>
                    <CalendarMonthOutlinedIcon />
                </LinkItem>
                <LinkItem to={"alarms"}>
                    <ReportProblemOutlinedIcon />
                </LinkItem>
                <LinkItem to={"energy"}>
                    <ElectricBoltOutlinedIcon />
                </LinkItem>
            </Icons>
        </Wrapper>
    )
}

export default Menu
