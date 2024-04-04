import React from 'react'

import { ValueContainer, TinyTim } from './Value.styles'

function Value({ value, unit, Icon }) {
	// check if values exists
	if (value != null) {
		// check if value is bool, and convert to string
		if (typeof value === 'boolean') {
			if (value) {
				value = 'On'
			} else {
				value = 'Off'
			}
		}

		return (
			<ValueContainer>
				<Icon />
				<span>
					{value}
					<TinyTim>{unit}</TinyTim>
				</span>
			</ValueContainer>
		)
	} else {
		return null
	}
}

export default Value
