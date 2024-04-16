import React, { useContext } from 'react'

import { BtnContainer } from './ControlAll.styles'
import Btn from '../../../../UI/Btn'

import DaliAPI from '../../../../../DaliAPI'

import { DaliConfiguratorContext } from '../../../../../store/context/daliConfigurator-context'
import { useTranslation } from 'react-i18next'

function ControlAll() {
	const daliCtx = useContext(DaliConfiguratorContext)

	function handleControlAll(value) {
		daliCtx.controlAll(value)
	}
	const { t } = useTranslation()
	return (
		<BtnContainer>
			<Btn onClick={() => handleControlAll(true)} selected={false}>
				{t('information.daliSettings.allOn')}
			</Btn>
			<Btn onClick={() => handleControlAll(false)}>
				{t('information.daliSettings.allOff')}
			</Btn>
		</BtnContainer>
	)
}

export default ControlAll
