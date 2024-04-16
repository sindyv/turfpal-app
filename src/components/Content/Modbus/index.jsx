import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from './Modbus.styles'
import Btn from '../../UI/Btn'

import ModbusAPI from '../../../ModbusAPI'

function Modbus() {
	const [selectedSensor, setSelectedSensor] = useState('1')
	const [oldAddress, setOldAddress] = useState(1)
	const [sensorValue, setSensorValue] = useState('0')
	const [response, setResponse] = useState('')
	const { t } = useTranslation()

	const oldAdressInputField = useRef(null)

	useEffect(() => {
		oldAdressInputField.current.disabled = selectedSensor === '1'
	}, [selectedSensor])

	const handleSelectSensor = (event) => {
		setSelectedSensor(event.target.value)
	}

	const handleChangeAddress = async () => {
		setResponse('')
		const response = await ModbusAPI.updateAddress(
			oldAddress,
			selectedSensor
		)
		setResponse(response.data)
	}

	const handleReadSensor = async () => {
		setSensorValue('Reading...')
		setResponse('')
		const response = await ModbusAPI.fetchValue(selectedSensor)
		setSensorValue(response?.data ?? 'Error')
	}

	return (
		<Container>
			<label>{t('information.modbusSettings.selectSensor')}</label>
			<select defaultValue={'1'} autoFocus onChange={handleSelectSensor}>
				<option value='1'>{t('information.modbusSettings.par')}</option>
				<option value='2'>
					{t('information.modbusSettings.temperature')} 1
				</option>
				<option value='3'>
					{t('information.modbusSettings.temperature')} 2
				</option>
				<option value='4'>
					{t('information.modbusSettings.temperature')} 3
				</option>
				<option value='5'>{t('information.modbusSettings.co2')}</option>
				<option value='6'>
					{t('information.modbusSettings.soil')}
				</option>
			</select>
			<h3>{t('information.modbusSettings.address')}</h3>
			<div className='input-field'>
				<div className='input'>
					<label>{t('information.modbusSettings.oldAddress')}</label>
					<input
						ref={oldAdressInputField}
						type='number'
						placeholder='1'
						value={selectedSensor === '1' ? '1' : oldAddress}
						onChange={(e) => setOldAddress(e.target.value)}
					/>
				</div>
				<div className='input'>
					<label>{t('information.modbusSettings.newAddress')}</label>
					<input
						type='number'
						placeholder='1'
						disabled
						value={selectedSensor}
					/>
				</div>
			</div>
			{response !== '' ? <p>{response}</p> : null}
			{selectedSensor === '1' ? (
				<p>{t('information.modbusSettings.parMessage')}</p>
			) : null}
			<Btn onClick={handleChangeAddress}>
				{t('information.modbusSettings.changeAddress')}
			</Btn>
			<h3>{t('information.modbusSettings.readSensorValue')}</h3>
			<input disabled value={sensorValue} />
			<Btn onClick={handleReadSensor}>
				{t('information.modbusSettings.readValue')}
			</Btn>
		</Container>
	)
}

export default Modbus
