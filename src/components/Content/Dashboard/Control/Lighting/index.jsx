import React from "react"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"

// Styles
import {
    Wrapper,
    Header,
    ButtonsArea,
    TileArea,
    LinkItem,
    CardDescription,
    LinkWrappers,
} from "./Lighting.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"

import Card from "../../../../UI/Card"
// API
import API from "../../../../../API"

function Lighting() {
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => {
            // console.log("Received response, getting new data in 1500ms")
            setTimeout(() => queryClient.invalidateQueries(["allValues"]), 1500)
        },
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    const handleSetModeAuto = () => {
        commandMutation.mutate({
            commands: { light_auto: true, light_manual: false },
        })
    }

    const handleSetModeManual = () => {
        commandMutation.mutate({
            commands: { light_auto: false, light_manual: true },
        })
    }

    const handleToggle = (controlledItem, state) => {
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
    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <ButtonsArea>
                <Btn
                    selected={query.data.statuses.mode_lighting === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={query.data.statuses.mode_lighting === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggle}
                    enabled={query.data.values.led_zone1_dim > 0}
                    icon={LightbulbOutlinedIcon}
                    title={"Horti"}
                    data={{
                        value: query.data.values.led_zone1_dim,
                        valueUnit: "%",
                        additionalData: [
                            query.data.values.energyMeters[0].power,
                            query.data.values.led_zone1_rh,
                        ],
                        additionalDataUnits: ["kW", "h"],
                    }}
                />

                <ControlTile
                    changeState={handleToggle}
                    enabled={query.data.values.led_zone2_dim > 0}
                    icon={LightbulbOutlinedIcon}
                    title={"Blue"}
                    data={{
                        value: query.data.values.led_zone2_dim,
                        valueUnit: "%",
                        additionalData: [
                            query.data.values.energyMeters[0].power,
                            query.data.values.led_zone2_rh,
                        ],
                        additionalDataUnits: ["kW", "h"],
                    }}
                />
            </TileArea>
            <LinkWrappers>
                <LinkItem
                    to={"/log"}
                    state={{ log: "Lighting", headerText: "Lighting > Log" }}
                >
                    <Card>
                        <CardDescription>
                            <InfoOutlinedIcon />
                            Log
                        </CardDescription>
                    </Card>
                </LinkItem>

                <LinkItem
                    to={"settings"}
                    state={{ headerText: "Lighting > Settings" }}
                >
                    <Card>
                        <CardDescription>
                            <SettingsOutlinedIcon />
                            Settings
                        </CardDescription>
                    </Card>
                </LinkItem>
            </LinkWrappers>
        </Wrapper>
    )
}

export default Lighting
