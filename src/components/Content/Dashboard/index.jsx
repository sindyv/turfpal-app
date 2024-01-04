import React from "react"

// Styles
import {
    Wrapper,
    Header,
    ButtonsArea,
    TileArea,
    HeatTile,
} from "./Dashboard.styles"

//Components
import Button from "../../UI/Button"
import ControlTile from "../../UI/ControlTile"

// Images
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"
import Icon from "@mdi/react"
import { mdiAwningOutline } from "@mdi/js"

function Dashboard() {
    return (
        <Wrapper>
            <Header>Dashboard</Header>
            <ButtonsArea>
                <Button>
                    <AutorenewOutlinedIcon /> Auto
                </Button>
                <Button svgSize={12}>
                    <BackHandOutlinedIcon /> Manual
                </Button>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    enabled={true}
                    icon={LightbulbOutlinedIcon}
                    title={"Lighting"}
                    data={{
                        value: 100,
                        valueUnit: "%",
                        additionalData: [7.2, 120],
                        additionalDataUnits: ["kW", "h"],
                    }}
                />
                <ControlTile
                    enabled={false}
                    icon={HeatTile}
                    title={"Heating"}
                    data={{
                        value: 16,
                        valueUnit: "°C",
                        additionalData: [7.4, 45],
                        additionalDataUnits: ["kW", "h"],
                    }}
                />
                <ControlTile
                    enabled={false}
                    icon={WaterDropOutlinedIcon}
                    title={"Irrigation"}
                    data={{
                        value: 20,
                        valueUnit: "%",
                        additionalData: [12, 400],
                        additionalDataUnits: ["°C", "h"],
                    }}
                />
                <ControlTile
                    enabled={false}
                    icon={CloudOutlinedIcon}
                    title={"CO2"}
                    data={{
                        value: 380,
                        valueUnit: "ppm",
                        additionalData: [80, 6],
                        additionalDataUnits: ["kg", "h"],
                    }}
                />
                <ControlTile
                    enabled={false}
                    icon={CloudOutlinedIcon}
                    title={"Cover"}
                    data={{
                        value: 100,
                        valueUnit: "%",
                        additionalData: ["Retracted", ""],
                        additionalDataUnits: ["", ""],
                    }}
                />
                <ControlTile
                    enabled={false}
                    icon={LightbulbOutlinedIcon}
                    title={"Camera"}
                    data={{ value: "No camera", valueUnit: "" }}
                />
            </TileArea>
        </Wrapper>
    )
}

export default Dashboard
