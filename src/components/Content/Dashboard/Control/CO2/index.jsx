import React, { useContext } from "react"

// Styles
import {
    Wrapper,
    ButtonsArea,
    TileArea,
    LinkItem,
    CardDescription,
    LinkWrappers,
} from "./CO2.styles"

//Components
import Btn from "../../../../UI/Btn"
import ControlTile from "../../../../UI/ControlTile"
import Card from "../../../../UI/Card"

// Icons
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"

// Context
import { AllValuesContext } from "../../../../../store/context/allValues-context"

function CO2() {
    const { data: allValues, onCommand } = useContext(AllValuesContext)

    const handleSetModeAuto = () => {
        onCommand({
            commands: { co2_auto: true, co2_manual: false },
        })
    }

    const handleSetModeManual = () => {
        onCommand({
            commands: { co2_auto: false, co2_manual: true },
        })
    }

    const handleToggle = (controlledItem, state) => {
        if (controlledItem === "CO2") {
            onCommand({
                commands: {
                    co2_solenoid: state,
                },
            })
        }
    }

    return (
        <Wrapper>
            <ButtonsArea>
                <Btn
                    selected={allValues.statuses.mode_co2 === "auto"}
                    onClick={handleSetModeAuto}
                >
                    <AutorenewOutlinedIcon /> Auto
                </Btn>
                <Btn
                    svgSize={12}
                    selected={allValues.statuses.mode_co2 === "manual"}
                    onClick={handleSetModeManual}
                >
                    <BackHandOutlinedIcon /> Manual
                </Btn>
            </ButtonsArea>
            <TileArea>
                <ControlTile
                    changeState={handleToggle}
                    enabled={allValues.statuses.co2_solenoid}
                    icon={CloudOutlinedIcon}
                    title={"CO2"}
                    data={{
                        value: allValues.values["co2"],
                        valueUnit: "ppm",
                        additionalData: [
                            allValues.values["co2_consumption"],
                            allValues.values.co2_rh,
                        ],
                        additionalDataUnits: ["kg", "h"],
                    }}
                />
            </TileArea>
            <LinkWrappers>
                <LinkItem
                    to={"/log"}
                    state={{ log: "CO2", headerText: "CO2 > Log" }}
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
                    state={{ headerText: "CO2 > Settings" }}
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

export default CO2
