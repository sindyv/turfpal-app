import React from "react"

import { Header, LinkItem } from "./InformationHeader.styles"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
function InformationHeader({ linkTo, title }) {
    return (
        <Header>
            <LinkItem to={linkTo}>
                <ArrowBackIosNewOutlinedIcon />
            </LinkItem>{" "}
            Information{" > " + title}
        </Header>
    )
}

export default InformationHeader
