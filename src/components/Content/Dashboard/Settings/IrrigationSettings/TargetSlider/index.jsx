import React from "react"
import { useState } from "react"

import Slider from "@mui/material/Slider"

import CONSTANTS from "../../../../../../CONSTANTS.json"

function TargetSlider({ onCommitedChange, initialValue = 30 }) {
	const [target, setTarget] = useState(initialValue)

	const handleChangeTarget = (event, newValue) => {
		setTarget(newValue)
	}

	const handleChangeCommited = (event, newValue, activeThumb) => {
		onCommitedChange(newValue, "target")
	}
	return (
		<Slider
			marks={CONSTANTS.constants.sliders.waterTargetSlider}
			min={1}
			max={100}
			step={1}
			valueLabelDisplay="auto"
			onChange={handleChangeTarget}
			onChangeCommitted={handleChangeCommited}
			value={target}
			sx={{
				width: "80%",
				color: "dodgerblue",
			}}
		/>
	)
}

export default TargetSlider
