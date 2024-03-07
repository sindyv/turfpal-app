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
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
import timeZone from "../../../assets/data/TIMEZONES.json"

import { useContext } from "react"
import { AllValuesContext } from "../../../store/context/allValues-context"
function Information() {
    const { data: allValues } = useContext(AllValuesContext)

    const selectedTimeZone = timeZone.filter(
        (zone) => zone.value === allValues.setpoints.timeZone
    )

    return (
        <Wrapper>
            <Content>
                <LinkItem to={"/device"} state={{ headerText: "Device" }}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <SmartToyOutlinedIcon /> Device
                            </CardDescription>
                            {allValues.deviceid}
                        </CardContent>
                    </Card>
                </LinkItem>
                <LinkItem
                    to={"/connectivity"}
                    state={{ headerText: "Connectivity" }}
                >
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <WifiOutlinedIcon /> Connectivity
                            </CardDescription>
                        </CardContent>
                    </Card>
                </LinkItem>
                <Card>
                    <CardContent>
                        <CardDescription>
                            <PhoneAndroidOutlinedIcon /> App version
                        </CardDescription>
                        {import.meta.env.VITE_APP_VERSION}
                    </CardContent>
                </Card>
                {/* <Card>
                    <CardContent>
                        <CardDescription>
                            <HubOutlinedIcon /> PLC version
                        </CardDescription>
                        {allValues.rig_data.software_version}
                    </CardContent>
                </Card> */}
                <LinkItem to={"/timezone"} state={{ headerText: "Time Zone" }}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <AccessTimeOutlinedIcon /> Time Zone
                            </CardDescription>
                            {selectedTimeZone[0]?.name}
                        </CardContent>
                    </Card>
                </LinkItem>
                {/* <LinkItem to={"connectivity"}>
                    <Card>
                        <CardContent>
                            <CardDescription>
                                <TranslateOutlinedIcon /> Language
                            </CardDescription>
                            English
                        </CardContent>
                    </Card>
                </LinkItem> */}
            </Content>
        </Wrapper>
    )
}

export default Information
