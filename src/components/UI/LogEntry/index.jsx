import React from 'react'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import { Wrapper } from './LogEntry.styles'
import { v4 as uuidv4 } from 'uuid'

import LogEntryLine from './LogEntryLine'
import LogEntryHeader from './LogEntryHeader'

function LogEntry({ data = [] }) {
	const { t } = useTranslation()
	// copy array to not modify original array
	if (Array.isArray(data)) {
		const newData = [...data]

		// sort array
		newData.sort((a, b) => b.timestamp - a.timestamp)

		// find the day of most recent entry
		let currentDay = dayjs(newData[0].timestamp).day()
		let currentDayIndex = 0

		const organizedData = []

		// Create a two dimensional array where first index is day, second index is
		// entry.
		newData.forEach((entry, index) => {
			if (index === 0) {
				organizedData.push([entry])
			} else if (currentDay !== dayjs(entry.timestamp).day()) {
				currentDay = dayjs(entry.timestamp).day()
				currentDayIndex += 1
				organizedData.push([entry])
			} else {
				organizedData[currentDayIndex].push(entry)
			}
		})

		return (
			<Wrapper>
				{organizedData.map((day) => {
					return (
						<div key={uuidv4()}>
							<LogEntryHeader day={day} />
							{day.map((entry) => {
								return (
									<LogEntryLine
										key={uuidv4()}
										entry={entry}
									/>
								)
							})}
						</div>
					)
				})}
			</Wrapper>
		)
	} else {
		return <h3>{t('log.noData')} </h3>
	}
}

export default LogEntry
