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
    linkHeaderText,
    onClick,
    disabled,
}) {
    const Icon = icon

    const handleClick = (event) => {
        onClick(event.target.checked)
    }

    return (
        <Wrapper $enabled={enabled}>
            <Header>
                <HeaderTextArea>{title}</HeaderTextArea>
                {/* <Switch
                    disabled={disabled}
                    checked={enabled}
                    size='small'
                    color='custom'
                    onChange={handleClick}
                /> */}
            </Header>
            <LinkItem
                to={linkTo}
                $enabled={enabled}
                state={{ headerText: linkHeaderText }}
            >
                <ValueArea>
                    <Icon />
                </ValueArea>
            </LinkItem>
        </Wrapper>
    )
}

export default TimerTile
