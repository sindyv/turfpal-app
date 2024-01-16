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
} from "./Cover.styles"

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

function Cover() {
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

    const handleToggle = (controlledItem, state) => {
        if (controlledItem === "Cover") {
            commandMutation.mutate({
                commands: {
                    cover: state,
                },
            })
        }
    }

    return (
        <Wrapper>
            <ButtonsArea>
                <Btn selected={query.data.statuses.mode_cover === "auto"}>
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={query.data.statuses.mode_cover === "manual"}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggle}
                    enabled={query.data.statuses.cover}
                    icon={CloudOutlinedIcon}
                    title={"Cover"}
                    data={{
                        value: query.data.values["cover"],
                        valueUnit: "",
                        additionalData: [
                            query.data.values["cover"] ? "Open" : "Closed",
                            "",
                        ],
                        additionalDataUnits: ["", ""],
                    }}
                />
            </TileArea>
            <LinkWrappers>
                <LinkItem
                    to={"/log"}
                    state={{ log: "Cover", headerText: "Log > Cover" }}
                >
                    <Card>
                        <CardDescription>
                            <InfoOutlinedIcon />
                            Log
                        </CardDescription>
                    </Card>
                </LinkItem>

                <LinkItem to={"settings"}>
                    {/* <Card>
                        <CardDescription>
                            <SettingsOutlinedIcon />
                            Settings
                        </CardDescription>
                    </Card> */}
                </LinkItem>
            </LinkWrappers>
        </Wrapper>
    )
}

export default Cover
