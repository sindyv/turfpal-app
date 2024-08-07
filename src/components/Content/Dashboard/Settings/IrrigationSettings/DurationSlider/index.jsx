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
			marks={CONSTANTS.constants.sliders.waterDurationSlider}
			min={1}
			max={5}
			step={1}
			valueLabelDisplay="auto"
			onChange={handleChangeTarget}
			onChangeCommitted={handleChangeCommited}
			value={duration}
			sx={{
				width: "80%",
				color: "dodgerblue",
			}}
		/>
	)
}

export default DurationSlider
