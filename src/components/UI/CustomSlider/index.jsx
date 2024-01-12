import React from "react"
import { useState } from "react"

import Slider from "@mui/material/Slider"

function CustomSlider({
    onCommitedChange,
    initialValue = 30,
    color,
    width,
    controlledItem,
    marks,
    max = 100,
    min = 0,
    step = 5,
}) {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleCommitedValue = (event, newValue, activeThumb) => {
        onCommitedChange(newValue, controlledItem)
    }
    return (
        <Slider
            marks={marks}
            min={min}
            max={max}
            step={step}
            valueLabelDisplay='auto'
            onChange={handleChange}
            onChangeCommitted={handleCommitedValue}
            value={value}
            sx={{
                width: width,
                color: color,
            }}
        />
    )
}

export default CustomSlider
