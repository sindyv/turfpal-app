import React from "react"
import { useState } from "react"

import Slider from "@mui/material/Slider"

import CONSTANTS from "../../../../../../CONSTANTS.json"

function MaxTempSlider({ onCommitedChange, initialValue = 30 }) {
    const [delay, setDelay] = useState(initialValue)

    const handleChangeDelay = (event, newValue) => {
        setDelay(newValue)
    }

    const handleChangeCommited = (event, newValue, activeThumb) => {
        onCommitedChange(newValue, "max")
    }
    return (
        <Slider
            marks={CONSTANTS.constants.sliders.tempRangeSliderMarks}
            min={5}
            max={25}
            step={1}
            valueLabelDisplay='auto'
            onChange={handleChangeDelay}
            onChangeCommitted={handleChangeCommited}
            value={delay}
            sx={{
                width: "80%",
                color: "red",
            }}
        />
    )
}

export default MaxTempSlider
