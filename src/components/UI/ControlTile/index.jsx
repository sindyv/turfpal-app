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
    disabled,
}) {
    const Icon = icon

    data = { ...defaultValueObject, ...data }

    const handleClick = (state) => {
        changeState(title, state)
    }
    return (
        <Wrapper $enabled={enabled}>
            <Header>
                <HeaderTextArea $enabled={enabled}>
                    <Icon />
                    {title}
                </HeaderTextArea>
                {disabled ? null : (
                    <Switch
                        disabled={disabled}
                        size='small'
                        color='custom'
                        checked={enabled}
                        onChange={(event) => handleClick(event.target.checked)}
                    />
                )}
            </Header>
            {linkParams?.to ?? false ? (
                <LinkItem
                    to={linkParams.to}
                    state={linkParams.state}
                    $enabled={enabled}
                >
                    <ValueArea>
                        <span>{data.value}</span>
                        <span>{data.valueUnit}</span>
                    </ValueArea>
                </LinkItem>
            ) : (
                <ValueArea>
                    <span>{data.value}</span>
                    <span>{data.valueUnit}</span>
                </ValueArea>
            )}
            <DataArea>
                <span>
                    {data.additionalData[0] !== null
                        ? Math.round(data.additionalData[0] * 10) / 10
                        : null}
                    <Units>{data.additionalDataUnits[0]}</Units>
                </span>
                <span>
                    {data.additionalData[1] !== null
                        ? Math.round(data.additionalData[1] * 10) / 10
                        : null}
                    <Units>{data.additionalDataUnits[1]}</Units>
                </span>
            </DataArea>
        </Wrapper>
    )
}

export default ControlTile
