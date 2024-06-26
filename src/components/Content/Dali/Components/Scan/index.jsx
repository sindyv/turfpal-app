import React, { useContext, useEffect, useState } from 'react'
import { Container } from './Scan.styles'
import useDali from '../../../../../hooks/useDali'
import { DaliConfiguratorContext } from '../../../../../store/context/daliConfigurator-context'
import { useTranslation } from 'react-i18next'
function Scan() {
	const daliCtx = useContext(DaliConfiguratorContext)

	const { startScan, stopScan, scanStatus } = useDali()
	const [status, setStatus] = useState({
		status: 'Not started',
		progress: 0,
		found: 0,
	})

	useEffect(() => {
		// Start scanning when component mounts
		startScan()

		// Stop scanning when component dismounts
		return () => {
			stopScan()
		}
	}, [])

	useEffect(() => {
		// Ask for progress every 1000ms
		const response = async () => {
			const status = await scanStatus()
			if (status.progress === 100) {
				const timer = setTimeout(() => {
					daliCtx.controlScanning('cancel')
					clearInterval(interval)
				}, 5000)
				daliCtx.getDevices()
			}
			setStatus(status)
		}

		const interval = setInterval(() => {
			response()
		}, 1000)

		// Clear interval Timer on dismount
		return () => {
			clearInterval(interval)
		}
	}, [])
	const { t } = useTranslation()
	return (
		<Container>
			<span>
				<div>{t('information.daliSettings.status')}:</div>
				<div>{status.status}</div>
			</span>

			<span>
				<div>{t('information.daliSettings.found')}:</div>
				<div>{status.found}</div>
			</span>

			<span>
				<div>{t('information.daliSettings.progress')}:</div>
				<div>{Math.round(status.progress)}%</div>
			</span>
		</Container>
	)
}

export default Scan
