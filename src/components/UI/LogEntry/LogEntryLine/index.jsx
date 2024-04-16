import React from 'react'

import { Line, Dot } from './LogEntryLine.styles'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

function LogEntryLine({ entry }) {
	const dayjsObject = dayjs(entry.timestamp)
	const { t } = useTranslation()

	return (
		<Line>
			<Dot
				$color={
					entry.value ? 'var(--turfpalColor)' : 'var(--borderColor)'
				}
			/>
			<span>{entry.value ? t('log.turnedOn') : t('log.turnedOff')}</span>
			<span>{dayjsObject.format('HH:mm:ss')}</span>
			<span>{t(`log.${entry.state}`)}</span>
			<span>
				{entry.source
					? entry.source === 'Turfpal mobile'
						? t(`log.turfpalMobile`)
						: t(`log.turfpalWeb`)
					: null}
			</span>
		</Line>
	)
}

export default LogEntryLine
