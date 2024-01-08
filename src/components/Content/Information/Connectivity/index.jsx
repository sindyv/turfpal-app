import React from "react"

import {
    Wrapper,
    Header,
    Content,
    CardContent,
    CardDescription,
    LinkItem,
} from "./Connectivity.styles"

import Card from "../../../UI/Card"
import InformationHeader from "../UI/InformationHeader"

import InformationDataField from "../../../UI/DataField"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import RouterOutlinedIcon from "@mui/icons-material/RouterOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined"
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
function Connectivity() {
    return (
        <Wrapper>
            <InformationHeader
                title={"Connectivity"}
                linkTo={"../information"}
            />

            <Content>
                <Card>
                    <CardDescription>
                        <span>
                            <RouterOutlinedIcon /> Router
                        </span>
                        <SettingsOutlinedIcon />
                    </CardDescription>
                    <CardContent>
                        <InformationDataField header={"Name"} data={"RUTX11"} />
                        <InformationDataField
                            header={"Serial No."}
                            data={"6000560318"}
                        />
                        <InformationDataField
                            header={"WAN IP"}
                            data={"10.72.52.1536"}
                        />
                        <InformationDataField
                            header={"Date and time"}
                            data={"2024-01-03T13:35:20+0100"}
                        />
                        <InformationDataField
                            header={"Firmware"}
                            data={"RUTX_R_00.07.05.3"}
                        />
                        <InformationDataField
                            header={"MAC Address"}
                            data={"RUTX_R_00.07.05.3"}
                        />
                        <InformationDataField
                            header={"IMEI"}
                            data={"861330054714398"}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardDescription>
                        <span>
                            <CellTowerOutlinedIcon /> Mobile
                        </span>
                        <SettingsOutlinedIcon />
                    </CardDescription>
                    <CardContent>
                        <InformationDataField
                            header={"Operator"}
                            data={"Telia N"}
                        />
                        <InformationDataField
                            header={"Network type"}
                            data={"LTE"}
                        />
                        <InformationDataField
                            header={"Network registration type"}
                            data={"Roaming"}
                        />
                        <InformationDataField
                            header={"Sginal strength"}
                            data={"-58dBm"}
                        />
                        <InformationDataField
                            header={"IMSI"}
                            data={"238208702911043"}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardDescription>
                        <span>
                            <WifiOutlinedIcon /> Wireless
                        </span>
                        <SettingsOutlinedIcon />
                    </CardDescription>
                    <CardContent>
                        <InformationDataField
                            header={"SSID"}
                            data={"Turfnet"}
                        />
                        <InformationDataField
                            header={"LAN IP"}
                            data={"192.168.1.123"}
                        />
                        <InformationDataField
                            header={"Signal Strength"}
                            data={"Excellent"}
                        />
                    </CardContent>
                </Card>
                <Card>
                    <CardDescription>
                        <span>
                            <LocationOnOutlinedIcon /> GPS
                        </span>
                        <SettingsOutlinedIcon />
                    </CardDescription>
                    <CardContent>
                        <InformationDataField header={"Satelites"} data={"9"} />
                        <InformationDataField
                            header={"Latitude"}
                            data={"58.8976173400878"}
                        />
                        <InformationDataField
                            header={"Longitude"}
                            data={"5.69833707809448"}
                        />
                        <InformationDataField
                            header={"Accuracy"}
                            data={"0.1 HDOP"}
                        />
                    </CardContent>
                </Card>
            </Content>
        </Wrapper>
    )
}

export default Connectivity
