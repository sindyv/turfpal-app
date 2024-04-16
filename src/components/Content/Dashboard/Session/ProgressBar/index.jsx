import React from 'react'

import { Bar, BarContainer, Container, StartStop } from './ProgressBar.styles'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

function ProgressBar({ allValues }) {
	function calculateProgress(entry) {
		if (Object.keys(entry).length > 0) {
			const totalTime =
				entry.schedule_end_time - entry.schedule_start_time
			const eplapsedTime = Date.now() - entry.schedule_start_time
			const progress = (eplapsedTime / totalTime) * 100

			return progress
		}
	}

	// check if there is an active schedule session
	function checkForActiveEntries() {
		let futureEntries = {}
		let activeEntry = {}
		if (Array.isArray(allValues.schedules)) {
			const timestamp = Date.now()

			// Check for active entry
			allValues.schedules.forEach((entry) => {
				if (
					timestamp > entry.schedule_start_time &&
					timestamp < entry.schedule_end_time
				) {
					let object = { ...entry }
					object.schedule_start_time = object.schedule_start_time
					object.schedule_end_time = object.schedule_end_time
					activeEntry = object
				}
			})

			// Check for future entries
			futureEntries = allValues.schedules.filter(
				(entry) => entry.schedule_start_time > timestamp
			)
			// Sort array, index 0 is the closest
			futureEntries.sort((a, b) => a.timestamp - b.timestamp)
		}
		return { activeEntry, futureEntries }
	}

	const { activeEntry, futureEntries } = checkForActiveEntries()
	// if there is no active entry, check if there is one in the future. Present the most imminent.
	// filter array on timestamp > Date.now()
	// if length is > 1, sort by starting time.
	// Present array[0].

	const progress = calculateProgress(activeEntry)
	const { t } = useTranslation()
	if (Object.keys(activeEntry).length > 0) {
		return (
			<Container>
				<BarContainer>
					<Bar $progress={progress}>{Math.round(progress)}%</Bar>
				</BarContainer>
				<StartStop>
					<div>{` ${dayjs(activeEntry.schedule_start_time).format(
						'HH:mm'
					)}`}</div>
					<div>
						{dayjs(activeEntry.schedule_end_time).format('HH:mm')}
					</div>
				</StartStop>
			</Container>

			// <Container>
			//     <BarContainer>
			//         <Bar $progress={progress}>{Math.round(progress)}%</Bar>
			//     </BarContainer>
			//     {dayjs(activeEntry.schedule_end_time).format("HH:mm")}
			// </Container>
		)
	} else if (futureEntries.length > 0) {
		return (
			<Container>
				<BarContainer></BarContainer>
				<StartStop>
					<div>{`${t('generic.starting')} ${dayjs(
						futureEntries[0].schedule_start_time
					).format('HH:mm')}`}</div>
					<div>
						{t('generic.ending')}{' '}
						{dayjs(futureEntries[0].schedule_end_time).format(
							'HH:mm'
						)}
					</div>
				</StartStop>
			</Container>
		)
	}
}

export default ProgressBar
