import React, { useContext } from 'react'

import { BtnContainer, Container } from './Addressing.styles'

import Btn from '../../../../UI/Btn'
import Scan from '../Scan'

import { DaliConfiguratorContext } from '../../../../../store/context/daliConfigurator-context'
import { useTranslation } from 'react-i18next'

function Addressing({ scanning }) {
	const daliCtx = useContext(DaliConfiguratorContext)

	const handleStopScan = () => {
		daliCtx.controlScanning('cancel')
	}

	const handleStartScan = () => {
		daliCtx.controlScanning('start')
	}

	const handleResetAdresseing = () => {
		daliCtx.controlScanning('delete')
	}
	const { t } = useTranslation()
	return (
		<Container>
			<BtnContainer>
				<Btn onClick={handleStartScan}>
					{t('information.daliSettings.scanForNew')}
				</Btn>
				<Btn
					backgroundColorDeselected='#ffa600'
					textColorDeselected='#4f3402'
					onClick={handleResetAdresseing}
				>
					{t('information.daliSettings.resetAddr')}
				</Btn>
			</BtnContainer>
			{daliCtx.scanning ? (
				<>
					<Btn
						onClick={handleStopScan}
						backgroundColorDeselected={'#ff0000'}
					>
						{t('information.daliSettings.stopScan')}
					</Btn>
					<Scan scanning={scanning} onFinish={handleStopScan} />
				</>
			) : null}
		</Container>
	)
}

export default Addressing
