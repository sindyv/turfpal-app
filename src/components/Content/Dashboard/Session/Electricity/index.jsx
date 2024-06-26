import React from "react"

import { Container, Unit } from "./Electricity.styles"

function Electricity({ allValues }) {
    const object =
        allValues?.logData?.session[allValues.logData.session.length - 1]
    if (
        isNaN(Math.round(object?.calculatedEnergy)) ||
        isNaN(Math.round(object?.calculatedCostOfEnergy))
    ) {
        return
    }

    return (
        <Container>
            <span>
                {Math.round(object?.calculatedEnergy)}
                <Unit>kWh</Unit>
            </span>
            <span>
                {Math.round(object?.calculatedCostOfEnergy)}
                <Unit>€</Unit>
            </span>
        </Container>
    )
}

export default Electricity
