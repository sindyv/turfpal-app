import React, { useContext } from "react"

// Styles
import { Wrapper, Content, CardContent, CardDescription } from "./Device.styles"

// Components
import Card from "../../../UI/Card"
import InformationDataField from "../../../UI/DataField"
import { AllValuesContext } from "../../../../store/context/allValues-context"

//Icons
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined"

function Device() {
    const { data: allValues } = useContext(AllValuesContext)

    return (
        <Wrapper>
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
                            data={allValues.rig_data.type}
                        />
                        <InformationDataField
                            header={"Serial No."}
                            data={allValues.rig_data.deviceid}
                        />
                        <InformationDataField
                            header={"Firmware"}
                            data={allValues.rig_data.software_version}
                        />
                        {/* <InformationDataField
                            header={"Manufactorer"}
                            data={allValues.rig_data.manufactorer}
                        />
                        <InformationDataField
                            header={"Manufacture date"}
                            data={allValues.rig_data.manufactor_date}
                        /> */}
                    </CardContent>
                </Card>
            </Content>
        </Wrapper>
    )
}

export default Device
