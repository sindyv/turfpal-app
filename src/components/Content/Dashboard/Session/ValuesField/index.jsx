import React from "react"

import { Container } from "./ValuesField.styles"

// Icons
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import HeatIcon from "../../../../../assets/icons/heat"
import Humidity from "../../../../../assets/icons/Humidity"
import SoilTemperature from "../../../../../assets/icons/SoilTemperature"

import Value from "./Value"

function ValuesField({ allValues }) {
    return (
        <Container>
            <Value
                value={allValues.values.light}
                unit={"µMol"}
                Icon={WbSunnyOutlinedIcon}
            />
            <Value
                value={allValues.values.ambient_temperature}
                unit={"°C"}
                Icon={DeviceThermostatOutlinedIcon}
            />
            <Value
                value={allValues.values.soil_moisture}
                unit={"%"}
                Icon={Humidity}
            />
            <Value
                value={allValues.values.temperature}
                unit={"°C"}
                Icon={SoilTemperature}
            />
            <Value
                value={allValues.values.led_zone1_dim}
                unit={"%"}
                Icon={LightbulbOutlinedIcon}
            />
            <Value
                value={allValues.statuses.heat_zone1}
                unit={""}
                Icon={HeatIcon}
            />
            <Value
                value={allValues.statuses.irrigation_solenoid}
                unit={""}
                Icon={WaterDropOutlinedIcon}
            />
            <Value
                value={allValues.values.co2}
                unit={"ppm"}
                Icon={CloudOutlinedIcon}
            />
        </Container>
    )
}

export default ValuesField
