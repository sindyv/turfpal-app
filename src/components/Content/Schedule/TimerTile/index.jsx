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

import API from "../../../../API"

const defaultValueObject = {
    value: "",
    valueUnit: "",
    additionalData: ["", ""],
    additionalDataUnits: ["", ""],
}

function TimerTile({
    enabled,
    icon = HelpOutlineOutlinedIcon,
    title,
    linkTo,
    onClick,
    disabled,
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

    const handleClick = (event) => {
        onClick(event.target.checked)
    }

    return (
        <Wrapper $enabled={enabled}>
            <Header>
                <HeaderTextArea>{title}</HeaderTextArea>
                <ThemeProvider theme={theme}>
                    <Switch
                        disabled={disabled}
                        checked={enabled}
                        size='small'
                        color='custom'
                        onChange={handleClick}
                    />
                </ThemeProvider>
            </Header>
            <LinkItem to={linkTo} $enabled={enabled}>
                <ValueArea>
                    <Icon />
                </ValueArea>
            </LinkItem>
        </Wrapper>
    )
}

export default TimerTile
