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
import ConnectivityDataField from "./ConnectivityDataField"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import RouterOutlinedIcon from "@mui/icons-material/RouterOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined"
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
function Connectivity() {
    return (
        <Wrapper>
            <Header>
                <LinkItem to={"../information"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>{" "}
                Information{">"} Connectivity
            </Header>
            <Content>
                <Card>
                    <CardDescription>
                        <span>
                            <RouterOutlinedIcon /> Router
                        </span>
                        <SettingsOutlinedIcon />
                    </CardDescription>
                    <CardContent>
                        <ConnectivityDataField
                            header={"Name"}
                            data={"RUTX11"}
                        />
                        <ConnectivityDataField
                            header={"Serial No."}
                            data={"6000560318"}
                        />
                        <ConnectivityDataField
                            header={"WAN IP"}
                            data={"10.72.52.1536"}
                        />
                        <ConnectivityDataField
                            header={"Date and time"}
                            data={"2024-01-03T13:35:20+0100"}
                        />
                        <ConnectivityDataField
                            header={"Firmware"}
                            data={"RUTX_R_00.07.05.3"}
                        />
                        <ConnectivityDataField
                            header={"MAC Address"}
                            data={"RUTX_R_00.07.05.3"}
                        />
                        <ConnectivityDataField
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
                        <ConnectivityDataField
                            header={"Operator"}
                            data={"Telia N"}
                        />
                        <ConnectivityDataField
                            header={"Network type"}
                            data={"LTE"}
                        />
                        <ConnectivityDataField
                            header={"Network registration type"}
                            data={"Roaming"}
                        />
                        <ConnectivityDataField
                            header={"Sginal strength"}
                            data={"-58dBm"}
                        />
                        <ConnectivityDataField
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
                        <ConnectivityDataField
                            header={"SSID"}
                            data={"Turfnet"}
                        />
                        <ConnectivityDataField
                            header={"LAN IP"}
                            data={"192.168.1.123"}
                        />
                        <ConnectivityDataField
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
                        <ConnectivityDataField
                            header={"Satelites"}
                            data={"9"}
                        />
                        <ConnectivityDataField
                            header={"Latitude"}
                            data={"58.8976173400878"}
                        />
                        <ConnectivityDataField
                            header={"Longitude"}
                            data={"5.69833707809448"}
                        />
                        <ConnectivityDataField
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
