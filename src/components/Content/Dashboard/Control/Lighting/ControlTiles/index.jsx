import React from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"

import { TileArea } from "./ControlTiles.styles"
import ControlTile from "../../../../../UI/ControlTile"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
// API
import API from "../../../../../../API"

function ControlTiles({ allValues }) {
    const handleToggle = (controlledItem, state) => {
        const queryClient = useQueryClient()

        const commandMutation = useMutation({
            mutationFn: API.sendCommand,
            onSuccess: () => {
                setTimeout(
                    () => queryClient.invalidateQueries(["allValues"]),
                    1500
                )
            },
        })
        if (controlledItem === "Horti") {
            commandMutation.mutate({
                commands: {
                    led_zone1_on: state,
                    led_zone1_off: !state,
                },
            })
        } else if (controlledItem === "Blue") {
            commandMutation.mutate({
                commands: {
                    led_zone2_on: state,
                    led_zone2_off: !state,
                },
            })
        }
    }

    return (
        <TileArea>
            <ControlTile
                changeState={handleToggle}
                disabled={true}
                enabled={allValues.values.led_zone1_dim > 0}
                icon={LightbulbOutlinedIcon}
                title={"Horti"}
                data={{
                    value: Math.round(allValues.values.led_zone1_dim),
                    valueUnit: "%",
                    additionalData: [
                        allValues.values.light, //allValues.values.energyMeters[0].power,
                        allValues.values.led_zone1_rh,
                    ],
                    additionalDataUnits: ["µMol", "h"],
                }}
            />

            <ControlTile
                changeState={handleToggle}
                enabled={allValues.values.led_zone2_dim > 0}
                disabled={true}
                icon={LightbulbOutlinedIcon}
                title={"Blue"}
                data={{
                    value: Math.round(allValues.values.led_zone2_dim),
                    valueUnit: "%",
                    additionalData: [
                        null, //allValues.values.energyMeters[0].power,
                        allValues.values.led_zone2_rh,
                    ],
                    additionalDataUnits: ["", "h"],
                }}
            />
        </TileArea>
    )
}

export default ControlTiles
