import React, { useContext } from "react"

// Styles
import {
    Wrapper,
    ButtonsArea,
    LinkItem,
    CardDescription,
    LinkWrappers,
} from "./Lighting.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlButtons from "./ControlButtons"
import Card from "../../../../UI/Card"

// Icons
import ControlTiles from "./ControlTiles"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"

function Lighting({}) {
    const { data: allValues, onCommand } = useContext(AllValuesContext)

    const handleSetModeAuto = () => {
        onCommand(
            {
                commands: { light_auto: true, light_manual: false },
            },
            100
        )
    }

    const handleSetModeManual = () => {
        onCommand(
            {
                commands: { light_auto: false, light_manual: true },
            },
            100
        )
    }

    const handleControlLighting = (value) => {
        let command = {
            commands: { led_zone1_off: true, led_zone2_off: true, dim: false },
            setpoints: {
                led_zone1_dim_man: 0,
                led_zone2_dim_man: 0,
            },
        }

        if (value > 0) {
            command = {
                commands: { led_zone1_on: true, led_zone2_on: true, dim: true },
                setpoints: {
                    led_zone1_dim_man: value,
                    led_zone2_dim_man: 100,
                },
            }
        }

        onCommand({
            ...command,
        })
    }

    return (
        <Wrapper>
            {allValues.statuses.session &&
            allValues.statuses.mode === "auto" ? null : (
                <ButtonsArea>
                    <Btn
                        selected={allValues.statuses.mode_lighting === "auto"}
                        onClick={handleSetModeAuto}
                        svgSize={20}
                    >
                        <AutorenewOutlinedIcon /> Auto
                    </Btn>
                    <Btn
                        selected={allValues.statuses.mode_lighting === "manual"}
                        onClick={handleSetModeManual}
                        svgSize={20}
                    >
                        <BackHandOutlinedIcon /> Manual
                    </Btn>
                </ButtonsArea>
            )}
            {allValues.statuses.mode_lighting === "manual" ? (
                <ControlButtons
                    handleControlLighting={handleControlLighting}
                    allValues={allValues}
                />
            ) : null}
            <ControlTiles allValues={allValues} />
            <LinkWrappers>
                <LinkItem
                    to={"/log"}
                    state={{
                        log: "Lighting",
                        headerText: "Lighting > Log",
                        logData: allValues?.logData?.lighting ?? null,
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
