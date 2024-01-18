import React from "react"

import {
    Wrapper,
    Content,
    CardContent,
    CardDescription,
} from "./Connectivity.styles"

import Card from "../../../UI/Card"
import InformationHeader from "../UI/InformationHeader"

import InformationDataField from "../../../UI/DataField"
import RouterOutlinedIcon from "@mui/icons-material/RouterOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import CellTowerOutlinedIcon from "@mui/icons-material/CellTowerOutlined"
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
function Connectivity({ allValues }) {
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
                            data={allValues.rig_data.router_serial}
                        />
                        <InformationDataField
                            header={"WAN IP"}
                            data={allValues.rig_data.wan_ip}
                        />
                        <InformationDataField
                            header={"Date and time"}
                            data={"Not Available"}
                        />
                        <InformationDataField
                            header={"Firmware"}
                            data={"Not Available"}
                        />
                        <InformationDataField
                            header={"MAC Address"}
                            data={"Not Available"}
                        />
                        <InformationDataField
                            header={"IMEI"}
                            data={"Not Available"}
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
