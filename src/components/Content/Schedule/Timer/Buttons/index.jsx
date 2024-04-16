import React from 'react'
import { useTranslation } from 'react-i18next'
import { ButtonGroup } from './Buttons.styles'

import Btn from '../../../../UI/Btn'

function Buttons({ onChangeState, state }) {
	const { t } = useTranslation()
	return (
		<ButtonGroup>
			<Btn
				selected={state === 'on'}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
				customFont={'var(--turfpalFontBold)'}
				onClick={() => onChangeState('on')}
			>
				{t('generic.keepOn')}
			</Btn>
			<Btn
				selected={state === 'off'}
				backgroundColorDeselected={'var(--lightGrey)'}
				backgroundColorSelected={'var(--turfpalActiveBtn)'}
				textColorSelected={'black'}
				textColorDeselected={'black'}
				customFont={'var(--turfpalFontBold)'}
				onClick={() => onChangeState('off')}
			>
				{t('generic.keepOff')}
			</Btn>
		</ButtonGroup>
	)
}

export default Buttons
