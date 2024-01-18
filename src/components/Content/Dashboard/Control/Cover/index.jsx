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
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"

import Card from "../../../../UI/Card"
// API
import API from "../../../../../API"

function Cover({ allValues }) {
    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

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
                <Btn selected={allValues.statuses.mode_cover === "auto"}>
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={allValues.statuses.mode_cover === "manual"}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggle}
                    enabled={allValues.statuses.cover}
                    icon={CloudOutlinedIcon}
                    title={"Cover"}
                    data={{
                        value: allValues.values["cover"],
                        valueUnit: "",
                        additionalData: [
                            allValues.values["cover"] ? "Open" : "Closed",
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
