import React from "react"

import {
    Wrapper,
    Header,
    HeaderTextArea,
    ValueArea,
    DataArea,
    Units,
} from "./TimeTile.styles"

import { Switch } from "@mui/material"

import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const defaultValueObject = {
    value: "",
    valueUnit: "",
    additionalData: ["", ""],
    additionalDataUnits: ["", ""],
}

function TimerTile({ enabled, icon = HelpOutlineOutlinedIcon, data, title }) {
    const Icon = icon
    const theme = createTheme({
        palette: {
            custom: {
                main: "#fff",
                contrastText: "#242105",
            },
        },
    })

    return (
        <Wrapper $enabled={enabled}>
            <Header>
                <HeaderTextArea>{title}</HeaderTextArea>
                <ThemeProvider theme={theme}>
                    <Switch size='small' color='custom' />
                </ThemeProvider>
            </Header>
            <ValueArea>
                <Icon />
            </ValueArea>
        </Wrapper>
    )
}

export default TimerTile
