import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { Wrapper, TileArea } from './Schedule.styles'

// Components
import TimerTile from './TimerTile'

// Icons
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'

// Context
import { AllValuesContext } from '../../../store/context/allValues-context'

function Schedule() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()

	const handleToggleCalendar = (value) => {
		let command = { commands: {} }
		if (value) {
			command.commands.calendaron = true
		} else {
			command.commands.calendaroff = true
		}

		onCommand(command)
	}

	return (
		<Wrapper>
			<TileArea>
				<TimerTile
					disabled={allValues.statuses.session}
					enabled={allValues.statuses.calendar}
					title={t('generic.calendar')}
					icon={EditCalendarOutlinedIcon}
					linkTo={'entries'}
					linkHeaderText={`${t('generic.schedule')} > ${t(
						'calendar.entries'
					)}`}
					onClick={handleToggleCalendar}
				/>
				<TimerTile
					disabled={allValues.statuses.session}
					allValues={allValues}
					title={t('generic.timer')}
					icon={AccessTimeOutlinedIcon}
					linkHeaderText={`${t('generic.schedule')} > ${t(
						'generic.timer'
					)}`}
					linkTo={'timer'}
				/>
			</TileArea>
		</Wrapper>
	)
}

export default Schedule
