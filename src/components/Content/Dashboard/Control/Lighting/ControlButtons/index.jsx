import React from 'react'

import Btn from '../../../../../UI/Btn'

import { ControlButtonsArea } from './ControlButtons.styles'
import { useTranslation } from 'react-i18next'

function ControlButtons({ handleControlLighting, allValues }) {
	const { t } = useTranslation()

	return (
		<ControlButtonsArea>
			<Btn
				selected={allValues.setpoints.led_zone1_dim_man === 0}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
				customFont={'var(--turfpalFontBold)'}
				onClick={() => handleControlLighting(0)}
			>
				{t('generic.off')}
			</Btn>
			<Btn
				selected={allValues.setpoints.led_zone1_dim_man === 33}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
				customFont={'var(--turfpalFontBold)'}
				onClick={() => handleControlLighting(33)}
			>
				33%
			</Btn>
			<Btn
				selected={allValues.setpoints.led_zone1_dim_man === 66}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
				customFont={'var(--turfpalFontBold)'}
				onClick={() => handleControlLighting(66)}
			>
				66%
			</Btn>
			<Btn
				selected={allValues.setpoints.led_zone1_dim_man === 100}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
				customFont={'var(--turfpalFontBold)'}
				onClick={() => handleControlLighting(100)}
			>
				100%
			</Btn>
		</ControlButtonsArea>
	)
}

export default ControlButtons
