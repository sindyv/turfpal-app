import React from "react"
import { useState } from "react"

import Slider from "@mui/material/Slider"

import CONSTANTS from "../../../../../../CONSTANTS.json"

function RepeatSlider({ onCommitedChange, initialValue = 30 }) {
	const [repeat, setRepeat] = useState(initialValue)

	const handleChangeTarget = (event, newValue) => {
		setRepeat(newValue)
	}

	const handleChangeCommited = (event, newValue, activeThumb) => {
		onCommitedChange(newValue, "interval")
	}
	return (
		<Slider
			marks={CONSTANTS.constants.sliders.waterRepetitionSlider}
			min={1}
			max={20}
			step={1}
			valueLabelDisplay="auto"
			onChange={handleChangeTarget}
			onChangeCommitted={handleChangeCommited}
			value={repeat}
			sx={{
				width: "80%",
				color: "dodgerblue",
			}}
		/>
	)
}

export default RepeatSlider
