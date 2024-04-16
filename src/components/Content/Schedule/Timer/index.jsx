import { useContext, useState } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

// Styles
import { Container, CardContainer, CardContent } from './Timer.styles'

// Components
import Switches from './Switches'
import TimeSelectors from './TimeSelectors'
import Buttons from './Buttons'
import Btn from '../../../UI/Btn'
import Card from '../../../UI/Card'

// Icons
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined'

// Context
import { AllValuesContext } from '../../../../store/context/allValues-context'

function Timer() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)

	const [state, setState] = useState('on')
	const [hour, setHour] = useState(0)
	const [minute, setMinute] = useState(5)
	const [lighting, setLighting] = useState(false)
	const [heating, setHeating] = useState(false)
	const [irrigation, setIrrigation] = useState(false)
	const [co2, setCo2] = useState(false)
	const { t } = useTranslation()

	const handleChangeState = (state) => {
		setState(state)
	}

	const handleSetHour = (hour) => {
		setHour(hour)
	}

	const handleSetMinute = (minute) => {
		setMinute(minute)
	}

	const handleSetState = (action, state) => {
		switch (action) {
			case 'lighting':
				setLighting(state)
				break

			case 'heating':
				setHeating(state)
				break
			case 'irrigation':
				setIrrigation(state)
				break

			case 'co2':
				setCo2(state)
				break
		}
	}

	const handleStartStop = (command) => {
		let object = {
			commands: {
				time_toggle_heat: heating,
				time_toggle_light: lighting,
				time_toggle_irrigation: irrigation,
				time_toggle_co2: co2,
			},
			setpoints: {},
		}

		if (command === 'Start') {
			if (state === 'on') {
				object.commands.time_toggle_keepon = true
				object.setpoints.time_toggle_sph = hour
				object.setpoints.time_toggle_spm = minute
			} else {
				object.commands.time_toggle_keepoff = true
			}
		} else {
			object.commands.time_toggle_keepon = false
			object.commands.time_toggle_keepoff = false
		}

		onCommand(object)
	}

	return (
		<Container>
			{!allValues.statuses.timer_active ? (
				<>
					<Buttons onChangeState={handleChangeState} state={state} />
					<TimeSelectors
						onSetHour={handleSetHour}
						onSetMinute={handleSetMinute}
						hour={hour}
						minute={minute}
					/>
				</>
			) : (
				<Card>
					<CardContainer>
						<div>
							<QueryBuilderOutlinedIcon />
							{t('generic.timerActive')}
						</div>
						<div>
							<CardContent>
								{`${t('generic.timerEnding')}
                                ${dayjs(allValues?.values?.togtime_end).format(
									'HH:mm'
								)}`}
							</CardContent>
						</div>
					</CardContainer>
				</Card>
			)}
			{state === 'on' && !allValues.statuses.timer_active ? (
				<Switches
					onSetState={handleSetState}
					states={{ lighting, heating, irrigation, co2 }}
					allValues={allValues}
				/>
			) : null}

			{allValues.statuses.timer_active ? (
				<Btn onClick={() => handleStartStop('Stop')}>
					{t('generic.stopTimer')}
				</Btn>
			) : (
				<Btn onClick={() => handleStartStop('Start')}>
					{t('generic.startTimer')}
				</Btn>
			)}
		</Container>
	)
}

export default Timer
