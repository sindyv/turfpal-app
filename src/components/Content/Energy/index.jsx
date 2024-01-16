import React from "react"
import { useQuery } from "@tanstack/react-query"

import { Wrapper, Header, TileArea } from "./Energy.styles"

import API from "../../../API"

import EnergyCard from "./EnergyCard"

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"

function Energy() {
    const query = useQuery({
        queryKey: ["energy"],
        queryFn: API.fetchValues,
        refetchInterval: 5000,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <TileArea>
                {query.data.energyMeters.map((meter, index) => {
                    return (
                        <EnergyCard
                            key={index}
                            icon={LightbulbOutlinedIcon}
                            data={meter}
                            title={"Lighting"}
                        />
                    )
                })}
            </TileArea>
        </Wrapper>
    )
}

export default Energy
