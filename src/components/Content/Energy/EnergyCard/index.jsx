import React from "react"

import {
    Wrapper,
    Header,
    CardDescription,
    MainValue,
    CardContent,
} from "./EnergyCard.styles"

import Card from "../../../UI/Card"
import DataField from "../../../UI/DataField"
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined"

// for test purpose
const defaultData = {
    voltage_L1L2: 402.3,
    voltage_L1L3: 401.6,
    voltage_L2L3: 399.8,
    voltage_L1N: 241.1,
    voltage_L2N: 240.6,
    voltage_L3N: 239.9,
    current_L1: 24.9,
    current_L2: 25.2,
    current_L3: 25.3,
    power: 7.2,
    energy: 705,
    frequency: 50.1,
}

function EnergyCard({ icon, title, data = defaultData }) {
    const Icon = icon

    return (
        <Card>
            <CardDescription>
                <span>
                    <Icon />
                    {title}
                </span>
                <EqualizerOutlinedIcon />
            </CardDescription>
            <MainValue>
                <span>
                    {data.energy > 99999
                        ? parseFloat(data.energy / 1000).toFixed(2)
                        : data.energy}
                </span>
                <span>{data.energy > 99999 ? "MWh" : "kWh"}</span>
            </MainValue>
            <CardContent>
                <DataField header={"Power"} data={data.power} unit={"kW"} />
                <DataField
                    header={"Frequency"}
                    data={data.frequency}
                    unit={"Hz"}
                />
                <DataField
                    header={"Voltage L1-N"}
                    data={data.voltage_L1N}
                    unit={"V"}
                />
                <DataField
                    header={"Voltage L2-N"}
                    data={data.voltage_L2N}
                    unit={"V"}
                />
                <DataField
                    header={"Voltage L3-N"}
                    data={data.voltage_L3N}
                    unit={"V"}
                />
                <DataField
                    header={"Voltage L1-L2"}
                    data={data.voltage_L1L2}
                    unit={"V"}
                />
                <DataField
                    header={"Voltage L1-L3"}
                    data={data.voltage_L1L3}
                    unit={"V"}
                />
                <DataField
                    header={"Voltage L2-L3"}
                    data={data.voltage_L2L3}
                    unit={"V"}
                />
                <DataField
                    header={"Current L1"}
                    data={data.current_L1}
                    unit={"A"}
                />
                <DataField
                    header={"Current L2"}
                    data={data.current_L2}
                    unit={"A"}
                />
                <DataField
                    header={"Current L3"}
                    data={data.current_L3}
                    unit={"A"}
                />
            </CardContent>
        </Card>
    )
}

export default EnergyCard
