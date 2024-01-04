import React from "react"

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined"
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined"
import { Wrapper, Icons } from "./Menu.styles"
const Menu = () => {
    return (
        <Wrapper>
            <Icons>
                <DashboardOutlinedIcon />
                <CalendarMonthOutlinedIcon />
                <ReportProblemOutlinedIcon />
                <ElectricBoltOutlinedIcon />
            </Icons>
        </Wrapper>
    )
}

export default Menu
