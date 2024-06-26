import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
// Styles
import { Wrapper } from './TimeZone.styles'

// Components
import Zone from './Zone'
import MenuSpacer from '../../../UI/MenuSpacer'

// Data
import timeZones from '../../../../assets/data/TIMEZONES.json'

// Context
import { AllValuesContext } from '../../../../store/context/allValues-context'

function TimeZone() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()

	const handleSetTimeZone = (value) => {
		onCommand(
			{
				setpoints: {
					timeZone: value,
				},
			},
			0
		)
	}

	return (
		<Wrapper>
			<h3>{t('information.information.timeZone.select')}</h3>
			{timeZones.map((zone) => (
				<Zone
					onSetTimeZone={handleSetTimeZone}
					key={zone.value}
					zone={zone}
					allValues={allValues}
				/>
			))}
			<MenuSpacer />
		</Wrapper>
	)
}

export default TimeZone
