import React from "react"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"

// Styles
import {
    Wrapper,
    Header,
    ButtonsArea,
    TileArea,
    HeatTile,
    LinkItem,
} from "./Dashboard.styles"

//Components
import Btn from "../../UI/Btn"
import ControlTile from "../../UI/ControlTile"

// Images
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"

// API
import API from "../../../API"
import MenuSpacer from "../../UI/MenuSpacer"

function Dashboard({}) {
    const camera = false
    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    const handleClickedButton = (controlledItem, state) => {
        switch (controlledItem) {
            case "Lighting":
                commandMutation.mutate({
                    commands: { zone1_par: state, zone2_par: state },
                })
                break
            case "Heating":
                commandMutation.mutate({
                    commands: {
                        zone1_temp: state,
                        zone2_temp: state,
                        zone3_temp: state,
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

    const handleSetModeAuto = () => {
        commandMutation.mutate({
            commands: { auto: true, manual: false },
        })
    }

    const handleSetModeManual = () => {
        commandMutation.mutate({
            commands: { auto: false, manual: true },
        })
    }

    return (
        <Wrapper>
            <ButtonsArea>
                <Btn
                    svgSize={24}
                    selected={query.data.statuses.mode === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={24}
                    selected={query.data.statuses.mode === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <LinkItem to={"lighting"} state={{ headerText: "Lighting" }}>
                    <ControlTile
                        changeState={handleClickedButton}
                        enabled={
                            query.data.values.led_zone1_dim > 0 ||
                            query.data.values.led_zone2_dim > 0
                        }
                        icon={LightbulbOutlinedIcon}
                        title={"Lighting"}
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
                </LinkItem>
                <LinkItem to={"heating"} state={{ headerText: "Heating" }}>
                    <ControlTile
                        changeState={handleClickedButton}
                        enabled={
                            query.data.statuses.hps_zone1 ||
                            query.data.statuses.hps_zone2
                        }
                        icon={HeatTile}
                        title={"Heating"}
                        data={{
                            value: query.data.values.temperature,
                            valueUnit: "°C",
                            additionalData: [
                                query.data.values.energyMeters[1]
                                    .total_effective_power,
                                query.data.values.heat_rh,
                            ],
                            additionalDataUnits: ["kW", "h"],
                        }}
                    />
                </LinkItem>
                {query.data?.statuses?.irrigation_solenoid ?? false ? (
                    <LinkItem
                        to={"irrigation"}
                        state={{ headerText: "Irrigation" }}
                    >
                        <ControlTile
                            changeState={handleClickedButton}
                            enabled={query.data.statuses.irrigation_solenoid}
                            icon={WaterDropOutlinedIcon}
                            title={"Irrigation"}
                            data={{
                                value: 20,
                                valueUnit: "%",
                                additionalData: [12, 400],
                                additionalDataUnits: ["°C", "ltr"],
                            }}
                        />
                    </LinkItem>
                ) : null}
                {query.data?.statuses?.co2_solenoid ?? false ? (
                    <LinkItem to={"co2"} state={{ headerText: "CO2" }}>
                        <ControlTile
                            changeState={handleClickedButton}
                            controlledItem={"CO2"}
                            enabled={query.data.statuses.co2_solenoid}
                            icon={CloudOutlinedIcon}
                            title={"CO2"}
                            data={{
                                value: query.data.values.co2,
                                valueUnit: "ppm",
                                additionalData: [
                                    query.data.values.co2_consumption,
                                    query.data.values.co2_rh,
                                ],
                                additionalDataUnits: ["kg", "h"],
                            }}
                        />
                    </LinkItem>
                ) : null}
                {query.data?.statuses?.cover ?? false ? (
                    <LinkItem to={"cover"} state={{ headerText: "Cover" }}>
                        <ControlTile
                            changeState={handleClickedButton}
                            enabled={query.data.statuses.cover}
                            icon={CloudOutlinedIcon}
                            title={"Cover"}
                            data={{
                                value: query.data.statuses.cover
                                    ? "Open"
                                    : "Closed",
                                valueUnit: "",
                                additionalData: ["", ""],
                                additionalDataUnits: ["", ""],
                            }}
                        />
                    </LinkItem>
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
        </Wrapper>
    )
}

export default Dashboard
