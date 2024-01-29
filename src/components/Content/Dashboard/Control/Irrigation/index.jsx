import React, { useContext } from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"

// Styles
import {
    Wrapper,
    ButtonsArea,
    TileArea,
    LinkItem,
    CardDescription,
    LinkWrappers,
} from "./Irrigation.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"

import Card from "../../../../UI/Card"
// API
import API from "../../../../../API"
import { AllValuesContext } from "../../../../../store/context/allValues-context"

function Irrigation({}) {
    const { data: allValues } = useContext(AllValuesContext)

    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    const handleSetModeAuto = () => {
        commandMutation.mutate({
            commands: { irrigation_auto: true, irrigation_manual: false },
        })
    }

    const handleSetModeManual = () => {
        commandMutation.mutate({
            commands: { irrigation_auto: false, irrigation_manual: true },
        })
    }

    const handleToggle = (controlledItem, state) => {
        if (controlledItem === "Irrigation") {
            commandMutation.mutate({
                commands: {
                    irrigation_solenoid: state,
                },
            })
        }
    }

    return (
        <Wrapper>
            <ButtonsArea>
                <Btn
                    selected={allValues.statuses.mode_irrigation === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={allValues.statuses.mode_irrigation === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggle}
                    enabled={allValues.statuses.irrigation_solenoid}
                    icon={WaterDropOutlinedIcon}
                    title={"Irrigation"}
                    data={{
                        value: allValues.values["soil-moisture"],
                        valueUnit: "%",
                        additionalData: [
                            allValues.values["soil-temperature"],
                            allValues.values.water_consumption,
                        ],
                        additionalDataUnits: ["°C", "ltr"],
                    }}
                />
            </TileArea>
            <LinkWrappers>
                <LinkItem
                    to={"/log"}
                    state={{
                        log: "Irrigation",
                        headerText: "Irrigation > Settings",
                    }}
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
                    state={{ headerText: "Irrigation > Settings" }}
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

export default Irrigation
