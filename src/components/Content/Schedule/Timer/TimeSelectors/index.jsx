import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { TimeGroup, Select } from './TimeSelectors.styles'
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined'

function TimeSelectors({ onSetMinute, onSetHour, hour, minute }) {
	let hourArray = []
	let minuteArray = []
	const { t } = useTranslation()
	for (let i = 0; i < 24; i++) {
		hourArray.push(
			<option key={i} value={i}>
				{`${i} ${t('generic.hours')}`}
			</option>
		)
	}
	for (let i = 5; i < 60; i++) {
		if (i % 5 === 0) {
			minuteArray.push(
				<option key={i} value={i}>
					{`${i} ${t('generic.minutes')}`}
				</option>
			)
		}
	}
	return (
		<TimeGroup>
			<div className='main-div'>
				<div className='sub-div'>
					<div>
						<QueryBuilderOutlinedIcon className='icon' />
						<Select
							id='hourSelect'
							value={hour}
							onChange={(e) => onSetHour(e.target.value)}
						>
							{hourArray.map((item) => item)}
						</Select>
					</div>
				</div>

				<div className='sub-div'>
					<div>
						<QueryBuilderOutlinedIcon className='icon' />
						<Select
							id='hourSelect'
							value={minute}
							onChange={(e) => onSetMinute(e.target.value)}
						>
							{minuteArray.map((item) => item)}
						</Select>
					</div>
				</div>
			</div>
		</TimeGroup>
	)
}

export default TimeSelectors
