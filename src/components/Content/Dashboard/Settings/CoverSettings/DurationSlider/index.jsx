import React from "react"
import { useState } from "react"

import Slider from "@mui/material/Slider"

import CONSTANTS from "../../../../../../CONSTANTS.json"

function DurationSlider({ onCommitedChange, initialValue = 30 }) {
	const [windspeed, setWindspeed] = useState(initialValue)

	const handleChangeTarget = (event, newValue) => {
		setWindspeed(newValue)
	}

	const handleChangeCommited = (event, newValue, activeThumb) => {
		onCommitedChange(newValue, "windspeed")
	}
	return (
		<Slider
			marks={CONSTANTS.constants.sliders.windAlarm}
			min={0}
			max={20}
			step={1}
			valueLabelDisplay="auto"
			onChange={handleChangeTarget}
			onChangeCommitted={handleChangeCommited}
			value={windspeed}
			sx={{
				width: "80%",
				color: "dodgerblue",
			}}
		/>
	)
}

export default DurationSlider
