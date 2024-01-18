import React from "react"
import { useQuery } from "@tanstack/react-query"

import { Wrapper, Header, TileArea } from "./Energy.styles"

import API from "../../../API"

import EnergyCard from "./EnergyCard"

import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"

function Energy({ allValues }) {
    if (Array.isArray(allValues.values.energyMeters)) {
        return (
            <Wrapper>
                <TileArea>
                    {allValues.values.energyMeters.map((meter, index) => {
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
    } else {
        return (
            <Wrapper>
                Ooops! There were some errors getting the energy data
            </Wrapper>
        )
    }
}

export default Energy
