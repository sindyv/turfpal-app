import React, { useContext } from "react"

// Styles
import { Wrapper, TileArea } from "./Energy.styles"

// Components
import EnergyCard from "./EnergyCard"
// Icons
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"

// Context
import { AllValuesContext } from "../../../store/context/allValues-context"

function Energy() {
    const { data: allValues } = useContext(AllValuesContext)

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
                                title={
                                    "Energy Consumption meter #" + (index + 1)
                                }
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
