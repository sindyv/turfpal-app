import React from "react"

import { Wrapper } from "./Menu.styles"

// Icons
import SpeedIcon from "@mui/icons-material/Speed"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import ThermostatIcon from "@mui/icons-material/Thermostat"
import BoltIcon from "@mui/icons-material/Bolt"
import WifiIcon from "@mui/icons-material/Wifi"
import ReportProblemIcon from "@mui/icons-material/ReportProblem"
import SettingsIcon from "@mui/icons-material/Settings"
//Components
import MenuItem from "../MenuItem"

const Menu = () => {
    return (
        <Wrapper>
            <MenuItem link={"/"}>
                <SpeedIcon />
            </MenuItem>
            <MenuItem link={"schedule"}>
                <CalendarMonthIcon />
            </MenuItem>
            <MenuItem>
                <LightbulbIcon />
            </MenuItem>
            <MenuItem link={"heating"}>
                <ThermostatIcon />
            </MenuItem>
            <MenuItem link={"energyData"}>
                <BoltIcon />
            </MenuItem>
            <MenuItem link={"routerData"}>
                <WifiIcon />
            </MenuItem>
            <MenuItem link={"status"}>
                <ReportProblemIcon />
            </MenuItem>
            <MenuItem link={"settings"}>
                <SettingsIcon />
            </MenuItem>
        </Wrapper>
    )
}

export default Menu