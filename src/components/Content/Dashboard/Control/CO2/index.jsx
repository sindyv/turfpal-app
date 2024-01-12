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
} from "./CO2.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"

import Card from "../../../../UI/Card"
// API
import API from "../../../../../API"

function CO2() {
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
            commands: { co2_auto: true, co2_manual: false },
        })
    }

    const handleSetModeManual = () => {
        commandMutation.mutate({
            commands: { co2_auto: false, co2_manual: true },
        })
    }

    const handleToggle = (controlledItem, state) => {
        if (controlledItem === "co2") {
            commandMutation.mutate({
                commands: {
                    co2_solenoid: state,
                },
            })
        }
    }

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"/"}>
                    <ArrowBackIosNewOutlinedIcon />{" "}
                </LinkItem>
                CO2
            </Header>
            <ButtonsArea>
                <Btn
                    selected={query.data.statuses.mode_co2 === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={query.data.statuses.mode_co2 === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggle}
                    enabled={query.data.statuses.co2_solenoid}
                    icon={CloudOutlinedIcon}
                    title={"CO2"}
                    data={{
                        value: query.data.values["co2"],
                        valueUnit: "ppm",
                        additionalData: [
                            query.data.values["co2_consumption"],
                            query.data.values.co2_rh,
                        ],
                        additionalDataUnits: ["kg", "h"],
                    }}
                />
            </TileArea>
            <LinkWrappers>
                <LinkItem to={"/log"} state={{ log: "CO2" }}>
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
        </Wrapper>
    )
}

export default CO2
