import React from "react"

import {
    Wrapper,
    Header,
    HeaderTextArea,
    ValueArea,
    DataArea,
    Units,
} from "./ControlTile.styles"

import { Switch } from "@mui/material"

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const defaultValueObject = {
    value: "",
    valueUnit: "",
    additionalData: ["", ""],
    additionalDataUnits: ["", ""],
}

function ControlTile({
    enabled,
    icon = HelpOutlineOutlinedIcon,
    data,
    title,
    changeState,
}) {
    const Icon = icon
    const theme = createTheme({
        palette: {
            custom: {
                main: "#fff",
                contrastText: "#242105",
            },
        },
    })
    data = { ...defaultValueObject, ...data }

    const handleClick = (state) => {
        changeState(title, state)
    }

    return (
        <Wrapper $enabled={enabled}>
            <Header>
                <HeaderTextArea>
                    <Icon />
                    {title}
                </HeaderTextArea>
                <ThemeProvider theme={theme}>
                    <Switch
                        size='small'
                        color='custom'
                        checked={enabled}
                        onChange={(event) => handleClick(event.target.checked)}
                    />
                </ThemeProvider>
            </Header>
            <ValueArea>
                {data.value}
                {data.valueUnit}
            </ValueArea>
            <DataArea>
                <span>
                    {data.additionalData[0]}
                    <Units>{data.additionalDataUnits[0]}</Units>
                </span>
                <span>
                    {data.additionalData[1]}
                    <Units>{data.additionalDataUnits[1]}</Units>
                </span>
            </DataArea>
        </Wrapper>
    )
}

export default ControlTile
