import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

// Styles
import { Wrapper, TileArea } from './Energy.styles'

// Components
import EnergyCard from './EnergyCard'
// Icons
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined'

// Context
import { AllValuesContext } from '../../../store/context/allValues-context'

function Energy() {
	const { data: allValues } = useContext(AllValuesContext)
	const { t } = useTranslation()

	if (Array.isArray(allValues.values.energyMeters)) {
		return (
			<Wrapper>
				<TileArea>
					{allValues.values.energyMeters.map((meter, index) => {
						return (
							<EnergyCard
								key={index}
								icon={LightbulbOutlinedIcon}
								data={meter}
								title={
									t('energy.energyMeter') + ' #' + (index + 1)
								}
							/>
						)
					})}
				</TileArea>
			</Wrapper>
		)
	} else {
		return <Wrapper>{t('energy.error')}</Wrapper>
	}
}

export default Energy
