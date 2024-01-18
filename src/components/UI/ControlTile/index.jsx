import React from "react"

import {
    Wrapper,
    Header,
    HeaderTextArea,
    ValueArea,
    DataArea,
    Units,
    LinkItem,
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
    linkParams,
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
            {linkParams?.to ?? false ? (
                <LinkItem
                    to={linkParams.to}
                    state={linkParams.state}
                    $enabled={enabled}
                >
                    <ValueArea>
                        {data.value}
                        {data.valueUnit}
                    </ValueArea>
                </LinkItem>
            ) : (
                <ValueArea>
                    {data.value}
                    {data.valueUnit}
                </ValueArea>
            )}
            <DataArea>
                <span>
                    {Math.round(data.additionalData[0] * 10) / 10}
                    <Units>{data.additionalDataUnits[0]}</Units>
                </span>
                <span>
                    {Math.round(data.additionalData[1] * 10) / 10}
                    <Units>{data.additionalDataUnits[1]}</Units>
                </span>
            </DataArea>
        </Wrapper>
    )
}

export default ControlTile
