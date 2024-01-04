import React from "react"

import { GaugeDiv } from "./Gauge.styles"

const Gauge = ({ value, max, min, low, high, id }) => {
    // scaling y = mx + b
    // y = units, in this case percent
    // m = scaling factor
    // x = input (value)
    // b = offset
    const m = 100 / (max - min)
    const b = m * min * -1
    const valuePercent = m * value + b

    // range
    let color = "rgb(209, 223, 25)"
    if (value > low && value < high) {
        color = "#1b4d41"
    } else if (value > high) {
        color = "red"
    }

    return (
        <GaugeDiv $value={valuePercent} $color={color}>
            <div className='gauge__body'>
                <div className='gauge__fill'></div>
                <div className='gauge__cover'></div>
            </div>
        </GaugeDiv>
    )
}

export default Gauge
