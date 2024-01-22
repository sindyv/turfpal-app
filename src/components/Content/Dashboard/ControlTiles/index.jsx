import React from "react"

import { TileArea, HeatTile } from "./ControlTiles.styles"

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"

import ControlTile from "../../../UI/ControlTile"

function ControlTiles({ commandMutation, allValues }) {
    const camera = false
    const handleClickedButton = (controlledItem, state) => {
        switch (controlledItem) {
            case "Lighting":
                commandMutation.mutate({
                    commands: {
                        led_zone1_on: state,
                        led_zone1_off: !state,
                        led_zone2_on: state,
                        led_zone2_off: !state,
                    },
                })
                break
            case "Heating":
                commandMutation.mutate({
                    commands: {
                        heat_zone1: state,
                        heat_zone2: state,
                        heat_zone3: state,
                    },
                })

                break
            case "Irrigation":
                commandMutation.mutate({
                    commands: { irrigation_solenoid: state },
                })
                break
            case "CO2":
                commandMutation.mutate({
                    commands: { co2_solenoid: state },
                })
                break
            case "Cover":
                commandMutation.mutate({
                    commands: { cover: state },
                })
                break

            default:
                console.log("Invalid")
                break
        }
    }
    return (
        <TileArea>
            <ControlTile
                disabled={allValues?.statuses?.mode === "auto"}
                linkParams={{
                    to: "lighting",
                    state: { headerText: "Lighting" },
                }}
                changeState={handleClickedButton}
                enabled={
                    allValues.values.led_zone1_dim > 0 ||
                    allValues.values.led_zone2_dim > 0
                }
                icon={LightbulbOutlinedIcon}
                title={"Lighting"}
                data={{
                    value: allValues.values.led_zone1_dim,
                    valueUnit: "%",
                    additionalData: [
                        allValues.values.energyMeters[0].power,
                        allValues.values.led_zone1_rh,
                    ],
                    additionalDataUnits: ["kW", "h"],
                }}
            />
            <ControlTile
                disabled={allValues?.statuses?.mode === "auto"}
                linkParams={{
                    to: "heating",
                    state: { headerText: "Heating" },
                }}
                changeState={handleClickedButton}
                enabled={
                    allValues.statuses.heat_zone1 ||
                    allValues.statuses.heat_zone2 ||
                    allValues.statuses.heat_zone3
                }
                icon={HeatTile}
                title={"Heating"}
                data={{
                    value: allValues.values.temperature,
                    valueUnit: "°C",
                    additionalData: [
                        allValues.values.energyMeters[1].total_effective_power,
                        allValues.values.heat_rh,
                    ],
                    additionalDataUnits: ["kW", "h"],
                }}
            />
            {allValues?.statuses?.irrigation_solenoid ?? false ? (
                <ControlTile
                    linkParams={{
                        to: "irrigation",
                        state: { headerText: "Irrigation" },
                    }}
                    changeState={handleClickedButton}
                    enabled={allValues.statuses.irrigation_solenoid}
                    icon={WaterDropOutlinedIcon}
                    title={"Irrigation"}
                    data={{
                        value: 20,
                        valueUnit: "%",
                        additionalData: [12, 400],
                        additionalDataUnits: ["°C", "ltr"],
                    }}
                />
            ) : null}
            {allValues?.statuses?.co2_solenoid ?? false ? (
                <ControlTile
                    linkParams={{ to: "co2", state: { headerText: "CO2" } }}
                    changeState={handleClickedButton}
                    controlledItem={"CO2"}
                    enabled={allValues.statuses.co2_solenoid}
                    icon={CloudOutlinedIcon}
                    title={"CO2"}
                    data={{
                        value: allValues.values.co2,
                        valueUnit: "ppm",
                        additionalData: [
                            allValues.values.co2_consumption,
                            allValues.values.co2_rh,
                        ],
                        additionalDataUnits: ["kg", "h"],
                    }}
                />
            ) : null}
            {allValues?.statuses?.cover ?? false ? (
                <ControlTile
                    linkParams={{
                        to: "cover",
                        state: { headerText: "Cover" },
                    }}
                    changeState={handleClickedButton}
                    enabled={allValues.statuses.cover}
                    icon={CloudOutlinedIcon}
                    title={"Cover"}
                    data={{
                        value: allValues.statuses.cover ? "Open" : "Closed",
                        valueUnit: "",
                        additionalData: ["", ""],
                        additionalDataUnits: ["", ""],
                    }}
                />
            ) : null}
            {camera ? (
                <ControlTile
                    enabled={false}
                    icon={LightbulbOutlinedIcon}
                    title={"Camera"}
                    data={{ value: "No camera", valueUnit: "" }}
                />
            ) : null}
        </TileArea>
    )
}

export default ControlTiles
