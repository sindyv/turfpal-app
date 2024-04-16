import React from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
// Styles
import {
	CardHeaderContainer,
	CardHeader,
	CardContentContainer,
	CardDataField,
} from './SessionLogEntry.styles'

// Components
import Card from '../../../UI/Card'

// Icons
import TimelineIcon from '@mui/icons-material/Timeline'
// Context
function SessionLogEntry({ entry }) {
	const { t } = useTranslation()
	return (
		<Card>
			<CardHeaderContainer>
				<CardHeader>
					<TimelineIcon />{' '}
					{t(`log.${dayjs(entry.startTime).format('dddd')}`)}
				</CardHeader>
				<div>{+entry.calculatedCostOfEnergy.toFixed(2)}€</div>
			</CardHeaderContainer>
			<CardContentContainer>
				<CardDataField>
					<div>{t('generic.start')}</div>
					<div>
						{dayjs(entry.startTime).format('YYYY-DD-MM HH:mm ')}
					</div>
				</CardDataField>
				<CardDataField>
					<div>{t('generic.stop')}</div>
					<div>
						{entry.endTime
							? dayjs(entry.endTime).format('YYYY-DD-MM HH:mm ')
							: 'Ongoing'}
					</div>
				</CardDataField>
				<CardDataField>
					<div>{t('energy.energy')}</div>
					<div>{+entry.calculatedEnergy.toFixed(2)}kWh</div>
				</CardDataField>
			</CardContentContainer>
		</Card>
	)
}

export default SessionLogEntry
