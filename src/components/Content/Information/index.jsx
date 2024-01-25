import React from "react"

import Card from "../../UI/Card"

import {
    Wrapper,
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
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

function Information({ allValues }) {
    return (
        <Wrapper>
            <Content>
                <LinkItem to={"../device"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <SmartToyOutlinedIcon /> Device
                            </CardDescription>
                            {allValues.deviceid}
                        </CardContent>
                    </Card>
                </LinkItem>
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
                            {import.meta.env.VITE_APP_VERSION}
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <HubOutlinedIcon /> PLC version
                            </CardDescription>
                            {allValues.rig_data.software_version}
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
            </Content>
        </Wrapper>
    )
}

export default Information
