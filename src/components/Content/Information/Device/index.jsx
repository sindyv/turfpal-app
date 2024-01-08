import React from "react"

import {
    Wrapper,
    Header,
    Content,
    CardContent,
    CardDescription,
    LinkItem,
} from "./Device.styles"

import Card from "../../../UI/Card"
import InformationHeader from "../UI/InformationHeader"
import InformationDataField from "../../../UI/DataField"
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"
function Device() {
    return (
        <Wrapper>
            <InformationHeader title={"Device"} linkTo={"../information"} />
            <Content>
                <Card>
                    <CardDescription>
                        <span>
                            <SmartToyOutlinedIcon /> Device
                        </span>
                        {/* <SettingsOutlinedIcon /> */}
                    </CardDescription>
                    <CardContent>
                        <InformationDataField
                            header={"Model"}
                            data={"TLS LED 70"}
                        />
                        <InformationDataField
                            header={"Serial No."}
                            data={"1003"}
                        />
                        <InformationDataField
                            header={"Firmware"}
                            data={"3.0.0"}
                        />
                        <InformationDataField
                            header={"Manufactorer"}
                            data={"Turf Lighting Solutions"}
                        />
                        <InformationDataField
                            header={"Manufacture date"}
                            data={"2024-01-04"}
                        />
                    </CardContent>
                </Card>
            </Content>
        </Wrapper>
    )
}

export default Device
