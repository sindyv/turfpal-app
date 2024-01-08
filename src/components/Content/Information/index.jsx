import React from "react"
import { useQuery } from "@tanstack/react-query"

import Card from "../../UI/Card"

import {
    Wrapper,
    Header,
    Content,
    CardContent,
    CardDescription,
    LinkItem,
} from "./Information.styles"

import API from "../../../API"

import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined"
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined"
import HubOutlinedIcon from "@mui/icons-material/HubOutlined"
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

function Information() {
    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"../"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                Information
            </Header>
            <Content>
                <LinkItem to={"../device"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <SmartToyOutlinedIcon /> Device
                            </CardDescription>
                            3.0.0 ???
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
                            {query.data.rig_data.software_version}
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
