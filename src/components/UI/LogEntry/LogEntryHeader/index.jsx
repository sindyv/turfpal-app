import React from 'react'

import { DayHeader } from './LogEntryHeader.styles'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

function LogEntryHeader({ day }) {
	const { t } = useTranslation()
	return (
		<DayHeader>
			<span>{dayjs(day[0].timestamp).format('DD.MM.YYYY')}</span>
			<span>{t(`log.${dayjs(day[0].timestamp).format('dddd')}`)}</span>
		</DayHeader>
	)
}

export default LogEntryHeader
