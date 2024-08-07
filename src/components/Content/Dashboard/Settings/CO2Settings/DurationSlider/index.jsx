import React from "react"
import { useState } from "react"

import Slider from "@mui/material/Slider"

import CONSTANTS from "../../../../../../CONSTANTS.json"

function DurationSlider({ onCommitedChange, initialValue = 30 }) {
	const [duration, setDuration] = useState(initialValue)

	const handleChangeTarget = (event, newValue) => {
		setDuration(newValue)
	}

	const handleChangeCommited = (event, newValue, activeThumb) => {
		onCommitedChange(newValue, "duration")
	}
	return (
		<Slider
			marks={CONSTANTS.constants.sliders.co2Duration}
			min={2}
			max={10}
			step={1}
			valueLabelDisplay="auto"
			onChange={handleChangeTarget}
			onChangeCommitted={handleChangeCommited}
			value={duration}
			sx={{
				width: "80%",
				color: "gray",
			}}
		/>
	)
}

export default DurationSlider
