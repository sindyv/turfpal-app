import React from "react"
import { useState } from "react"
import Slider from "@mui/material/Slider"
import CONSTANTS from "../../../../../../CONSTANTS.json"

function TempRangeSlider({ onCommitedChange, initialValue = [10, 20] }) {
    const minDistance = 2
    const [range, setRange] = useState(initialValue)

    const handleChangeCommited = (event, newValue, activeThumb) => {
        onCommitedChange(newValue, "range")
    }

    const handleChangeRange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return
        }

        if (activeThumb === 0) {
            setRange([Math.min(newValue[0], range[1] - minDistance), range[1]])
        } else {
            setRange([range[0], Math.max(newValue[1], range[0] + minDistance)])
        }
    }
    return (
        <Slider
            disableSwap
            marks={CONSTANTS.constants.sliders.tempRangeSliderMarks}
            min={5}
            max={25}
            step={1}
            valueLabelDisplay='auto'
            value={range}
            onChange={handleChangeRange}
            onChangeCommitted={handleChangeCommited}
            sx={{
                width: "80%",
                color: "red",
            }}
        />
    )
}

export default TempRangeSlider
