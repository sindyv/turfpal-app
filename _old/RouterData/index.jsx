import React from "react"
import { useQuery } from "@tanstack/react-query"
// Components
import Card from "../ui/Card"

// Styling
import { Line, Title } from "./RouterData.styles"

// API
import API from "../../API"

const RouterData = () => {
    const query = useQuery({
        queryKey: ["rigData"],
        queryFn: API.fetchRigdataPromise,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data</h1>

    return (
        <Card>
            <Title>Router Data</Title>
            <Line>
                <span>Name</span>
                <span>{query.data.router_type}</span>
            </Line>
            <Line>
                <span>Serial</span>
                <span>{query.data.router_serial}</span>
            </Line>
            <Line $endline={true}>
                <span>WAN IP</span>
                <span>{query.data.wan_ip}</span>
            </Line>
            <Title>Router Cellular</Title>
            <Line>
                <span>Operator</span>
                <span>{query.data.gsm_operator}</span>
            </Line>
            <Line>
                <span>Network type</span>
                <span>{query.data.network_type}</span>
            </Line>
            <Line>
                <span>Network reg. info</span>
                <span>{query.data.networkRegistrationInfo}</span>
            </Line>
            <Line>
                <span>Signal strength</span>
                <span>{query.data.rssi}</span>
            </Line>
            <Line $endline={true}>
                <span>IMSI</span>
                <span>{query.data.imsi}</span>
            </Line>
            <Title>Router GPS</Title>
            <Line>
                <span>Latitude</span>
                <span>{Math.round(query.data.latitude * 1000) / 1000}</span>
            </Line>
            <Line $endline={true}>
                <span>Longitude</span>
                <span>{Math.round(query.data.longitude * 1000) / 1000}</span>
            </Line>
        </Card>
    )
}

export default RouterData
