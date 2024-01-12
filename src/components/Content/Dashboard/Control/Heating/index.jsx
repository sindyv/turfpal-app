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
    CardDescription,
    LinkWrappers,
} from "./Heating.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"

import Card from "../../../../UI/Card"
// API
import API from "../../../../../API"

function Heating() {
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

    const handleSetModeAuto = () => {
        commandMutation.mutate({
            commands: { heat_auto: true, heat_manual: false },
        })
    }

    const handleSetModeManual = () => {
        commandMutation.mutate({
            commands: { heat_auto: false, heat_manual: true },
        })
    }

    const handleToggleHeat = (controlledItem, state) => {
        commandMutation.mutate({
            commands: {
                heat_zone1: state,
                heat_zone2: state,
                heat_zone3: state,
            },
        })
    }

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"/"}>
                    <ArrowBackIosNewOutlinedIcon />{" "}
                </LinkItem>
                Heating
            </Header>
            <ButtonsArea>
                <Btn
                    selected={query.data.statuses.mode === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={query.data.statuses.mode === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggleHeat}
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
                            query.data.values.energyMeters[1].power,
                            query.data.values.heat_rh,
                        ],
                        additionalDataUnits: ["kW", "h"],
                    }}
                />
                <LinkWrappers>
                    <LinkItem to={"/log"} state={{ log: "Heating" }}>
                        <Card>
                            <CardDescription>
                                <InfoOutlinedIcon />
                                Log
                            </CardDescription>
                        </Card>
                    </LinkItem>

                    <LinkItem to={"settings"}>
                        <Card>
                            <CardDescription>
                                <SettingsOutlinedIcon />
                                Settings
                            </CardDescription>
                        </Card>
                    </LinkItem>
                </LinkWrappers>
            </TileArea>
        </Wrapper>
    )
}

export default Heating
