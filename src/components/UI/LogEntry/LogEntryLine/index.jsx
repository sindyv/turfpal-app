import React from 'react'

import { Line, Dot } from './LogEntryLine.styles'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

function LogEntryLine({ entry }) {
	const dayjsObject = dayjs(entry.timestamp)
	const { t } = useTranslation()
	let source = ''

	if (entry.source === 'Turfpal mobile') {
		source = t(`log.turfpalMobile`)
	} else if (entry.source === 'alarm') {
		source = 'Alarm'
	} else {
		source = t(`log.turfpalWeb`)
	}

	return (
		<Line>
			<Dot
				$color={
					entry.value ? 'var(--turfpalColor)' : 'var(--borderColor)'
				}
			/>
			<span>{entry.value ? t('log.turnedOn') : t('log.turnedOff')}</span>
			<span>{dayjsObject.format('HH:mm:ss')}</span>
			<span>{entry.state ? t(`log.${entry.state}`) : null}</span>
			<span>{source}</span>
		</Line>
	)
}

export default LogEntryLine
