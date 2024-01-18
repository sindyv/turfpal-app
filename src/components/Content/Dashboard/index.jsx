import React from "react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
// Styles
import { Wrapper, ButtonsArea } from "./Dashboard.styles"

//Components
import Btn from "../../UI/Btn"
import ControlTiles from "./ControlTiles"

// Images
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"

// API
import API from "../../../API"
import Session from "./Session"

function Dashboard({ allValues }) {
    // Query handeling
    const queryClient = useQueryClient()

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => {
            setTimeout(() => queryClient.invalidateQueries(["allValues"]), 1500)
        },
    })

    // Button handeling
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
                    selected={allValues.statuses.mode === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={24}
                    selected={allValues.statuses.mode === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <Session />
            <ControlTiles
                commandMutation={commandMutation}
                allValues={allValues}
            />
        </Wrapper>
    )
}

export default Dashboard
