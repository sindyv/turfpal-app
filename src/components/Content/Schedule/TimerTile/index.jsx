import React from "react"

import {
    Wrapper,
    Header,
    HeaderTextArea,
    ValueArea,
    LinkItem,
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

function TimerTile({
    enabled,
    icon = HelpOutlineOutlinedIcon,
    data,
    title,
    linkTo,
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

    return (
        <LinkItem to={linkTo}>
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
        </LinkItem>
    )
}

export default TimerTile
