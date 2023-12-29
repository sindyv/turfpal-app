import React from "react"
import { useQuery } from "@tanstack/react-query"
// Components
import Card from "../ui/Card"

// Styling
import { Line, Title } from "./EnergyData.styles"

// API
import API from "../../API"

const EnergyData = () => {
    const valuesQuery = useQuery({
        queryKey: ["values"],
        queryFn: API.fetchValuesPromise,
    })

    if (valuesQuery.isLoading) return <h1>Loading...</h1>
    if (valuesQuery.isError) return <h1>Error fetching data!</h1>

    return (
        <Card>
            <Title>Energy Data</Title>
            <Line>
                <span>Frequency</span>
                <span>{valuesQuery.data.frequency} Hz</span>
            </Line>
            <Line>
                <span>L1-N</span>
                <span>{valuesQuery.data.voltage1_L1N} V</span>
            </Line>
            <Line>
                <span>L2-N</span>
                <span>{valuesQuery.data.voltage1_L2N} V</span>
            </Line>
            <Line>
                <span>L3-N</span>
                <span>{valuesQuery.data.voltage1_L3N} V</span>
            </Line>
            <Line>
                <span>L1-L2</span>
                <span>{valuesQuery.data.voltage1_L1L2} V</span>
            </Line>
            <Line>
                <span>L1-L3</span>
                <span>{valuesQuery.data.voltage1_L1L3} V</span>
            </Line>
            <Line>
                <span>L2-L3</span>
                <span>{valuesQuery.data.voltage1_L2L3} V</span>
            </Line>
            <Line>
                <span>L1</span>
                <span>{valuesQuery.data.current1_L1} A</span>
            </Line>
            <Line>
                <span>L2</span>
                <span>{valuesQuery.data.current1_L2} A</span>
            </Line>
            <Line>
                <span>L3</span>
                <span>{valuesQuery.data.current1_L3} A</span>
            </Line>
            <Line>
                <span>Power</span>
                <span>{valuesQuery.data.power1} kW</span>
            </Line>
            <Line>
                <span>Energy</span>
                <span>{valuesQuery.data.energy1} kWh</span>
            </Line>
        </Card>
    )
}

export default EnergyData
