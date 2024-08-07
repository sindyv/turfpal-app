import React from 'react'
import { useState } from 'react'

import Slider from '@mui/material/Slider'

import CONSTANTS from '../../../../../../CONSTANTS.json'

function DelaySlider({ onCommitedChange, initialValue = 30 }) {
	const [windspeedDelay, setWindspeedDelay] = useState(initialValue)

	const handleChangeTarget = (event, newValue) => {
		setWindspeedDelay(newValue)
	}

	const handleChangeCommited = (event, newValue, activeThumb) => {
		onCommitedChange(newValue, 'windspeedDelay')
	}
	return (
		<Slider
			marks={CONSTANTS.constants.sliders.windAlarmDelay}
			min={1}
			max={5}
			step={1}
			valueLabelDisplay='auto'
			onChange={handleChangeTarget}
			onChangeCommitted={handleChangeCommited}
			value={windspeedDelay}
			sx={{
				width: '80%',
				color: 'dodgerblue',
			}}
		/>
	)
}

export default DelaySlider
