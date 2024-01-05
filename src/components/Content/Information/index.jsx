import React from "react"

import Card from "../../UI/Card"

import {
    Wrapper,
    Header,
    Content,
    CardContent,
    CardDescription,
    LinkItem,
} from "./Information.styles"

import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined"
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined"
import HubOutlinedIcon from "@mui/icons-material/HubOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

function Information() {
    return (
        <Wrapper>
            <Header>
                <LinkItem to={"../"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                Information
            </Header>
            <Content>
                <LinkItem to={"../connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <WifiOutlinedIcon /> Connectivity
                            </CardDescription>
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <PhoneAndroidOutlinedIcon /> App version
                            </CardDescription>
                            1.0.0
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <HubOutlinedIcon /> PLC version
                            </CardDescription>
                            3.0.1
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <AccessTimeOutlinedIcon /> Time Zone
                            </CardDescription>
                            Europe/Oslo
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <TranslateOutlinedIcon /> Language
                            </CardDescription>
                            English
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <InfoOutlinedIcon /> Log
                            </CardDescription>
                        </CardContent>
                    </Card>
                </LinkItem>
            </Content>
        </Wrapper>
    )
}

export default Information
