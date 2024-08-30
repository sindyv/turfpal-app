import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { Wrapper, Content, ButtonArea } from './Trend.styles'

import dayjs from 'dayjs'
import { AllValuesContext } from '../../../../store/context/allValues-context'
import LineChart from '../../../UI/LineChart'
import Btn from '../../../UI/Btn'

function Trend() {
	const { t } = useTranslation()
	const { data: allValues } = useContext(AllValuesContext)
	const [label, setLabel] = useState('')
	const [color, setColor] = useState('grey')
	const [min, setMin] = useState(0)
	const [data, setData] = useState(undefined)
	const [timeRange, setTimeRange] = useState(6 * 60 * 60 * 1000)

	const handleSetTime = (time) => {
		setTimeRange(time * 60 * 60 * 1000)
	}

	// extract info from router
	let location = useLocation()

	useEffect(() => {
		// define variables to assess
		let values = []
		let timestamps = []

		if (
			// check if data is available as an array
			Array.isArray(
				allValues.logData.sensorData[`${location.state.logObject}`]
			)
		) {
			const data = [
				...allValues.logData.sensorData[`${location.state.logObject}`],
			]

			const filteredData = data.filter(
				(item) => item.timestamp > Date.now() - timeRange
			)
			if (filteredData.length > 200) {
				const sortedArray = []

				for (let index = 0; index < 24; index++) {
					sortedArray[index] = []
				}

				filteredData.forEach((item) => {
					const hour = parseInt(dayjs(item.timestamp).format('HH'))

					sortedArray[hour].push(item)
				})

				console.log(sortedArray)

				let newArray = sortedArray.map((item) => {
					const step = Math.floor(item.length / 2)

					const newArray = []

					for (let index = 0; index < 2; index++) {
						newArray.push(item[index * step])
					}

					return newArray
				})

				newArray = newArray.flat()

				newArray.sort((a, b) => a.timestamp - b.timestamp)

				newArray.forEach((item) => {
					item.timestamp = dayjs(item.timestamp).format('HH:mm')
				})

				console.log(newArray)
				// Convert timestamps to string value
				timestamps = newArray.map((item) => item.timestamp)

				// extract equal amount of values to timestamps
				values = newArray.map((item) => item.value)
				setData({ values, timestamps })
			} else {
				const formattedData = filteredData.map((item) => {
					const newItem = {
						value: item.value,
						timestamp: dayjs(item.timestamp).format('HH:mm'),
					}

					return newItem
				})

				// Convert timestamps to string value
				timestamps = formattedData.map((item) => item.timestamp)

				// extract equal amount of values to timestamps
				values = formattedData.map((item) => item.value)

				setData({ values, timestamps })
			}

			// find min value for chart
			let minValue = 10000
			values.map((value) => {
				if (value < minValue) {
					minValue = value
				}
			})

			minValue = minValue * 0.95
			setMin(minValue)

			switch (location.state.logObject) {
				case 'co2Log':
					setLabel('CO2')
					setColor('grey')
					break
				case 'temperatureLog':
					setLabel(t('generic.temperature'))
					setColor('red')
					break
				case 'windSpeedLog':
					setLabel(t('cover.windSpeed'))
					setColor('grey')
					break
				case 'soilTemperatureLog':
					setLabel(t('alarm.soilTemperature.title'))
					setColor('red')
					break
				case 'soilMoistureLog':
					setLabel(t('irrigation.soilMoisture'))
					setColor('dodgerblue')
					break
				case 'lightLog':
					setLabel(t('alarm.par.title'))
					setColor('gold')
					break

				default:
					break
			}
		} else {
			setData(undefined)
		}
	}, [timeRange])

	if (!data) {
		return <p>Loading...</p>
	}

	// set label and color based on logtype

	return (
		<Wrapper>
			<div>
				<LineChart color={color} label={label} data={data} min={min} />
			</div>
			<ButtonArea>
				<Btn onClick={() => handleSetTime(24)}>24h</Btn>
				<Btn onClick={() => handleSetTime(6)}>6h</Btn>
				<Btn onClick={() => handleSetTime(1)}>1h</Btn>
			</ButtonArea>
		</Wrapper>
	)
}

export default Trend
