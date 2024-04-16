import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { Wrapper } from './SessionLog.styles'

// Components
import SessionLogEntry from './SessionLogEntry'
import MenuSpacer from '../../UI/MenuSpacer'

// Icons

// Context
import { AllValuesContext } from '../../../store/context/allValues-context'
function SessionLog() {
	const { data: allValues } = useContext(AllValuesContext)
	const { t } = useTranslation()
	if (Array.isArray(allValues.logData.session)) {
		const logData = [...allValues.logData.session]
		logData.reverse()
		return (
			<Wrapper>
				{logData.map((entry) => {
					return (
						<SessionLogEntry entry={entry} key={entry.startTime} />
					)
				})}
				<MenuSpacer />
			</Wrapper>
		)
	} else {
		return <h3>{t('log.noData')}</h3>
	}
}

export default SessionLog
