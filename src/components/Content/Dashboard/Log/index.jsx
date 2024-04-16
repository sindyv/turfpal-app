import React from 'react'
import { useLocation } from 'react-router-dom'

// Styles
import { Wrapper, Content } from './Log.styles'

//Components
import LogEntry from '../../../UI/LogEntry'
import { useTranslation } from 'react-i18next'

function Log({}) {
	// extract information from link
	let location = useLocation()

	const log = location?.state?.log ?? ''
	const logData = location?.state?.logData
	const { t } = useTranslation()
	return (
		<Wrapper>
			<Content>
				{log === '' ? (
					<p>{t('log.noData')}</p>
				) : (
					<>
						<p>{t('log.title')}</p>
						<LogEntry data={logData} />
					</>
				)}
			</Content>
		</Wrapper>
	)
}

export default Log
