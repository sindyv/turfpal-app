import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { AllValuesContext } from "../../../store/context/allValues-context"

import dayjs from "dayjs"

import { LineChart as MuiLineChart } from "@mui/x-charts/LineChart"

function LineChart() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const { t } = useTranslation()

	// extract info from router
	let location = useLocation()

	// define variables to assess
	let values = []
	let timestamps = []
	let min = 10000

	if (
		// chech if data is available as an array
		Array.isArray(allValues.logData.sensorData[`${location.state.logObject}`])
	) {
		// extract value, limit to 24 entries
		values = allValues.logData.sensorData[`${location.state.logObject}`]
			.map((item) => item.value)
			.slice(0, 23)

		// extract timestamp, limit to 24 entries, convert to string with HH:mm
		timestamps = allValues.logData.sensorData[`${location.state.logObject}`]
			.map((item) => dayjs(item.timestamp).format("HH:mm").toString())
			.splice(0, 23)

		// find min value for chart
		values.map((value) => {
			if (value < min) {
				min = value
			}
		})
		min = min * 0.95
	} else {
		return <p>No logdata found!</p>
	}

	// set label and color based on logtype
	let label = ""
	let color = "grey"

	switch (location.state.logObject) {
		case "co2Log":
			label = "CO2"
			color = "grey"
			break
		case "temperatureLog":
			label = t("generic.temperature")
			color = "red"
			break
		case "windSpeedLog":
			label = t("cover.windSpeed")
			color = "grey"
			break
		case "soilTemperatureLog":
			label = t("alarm.soilTemperature.title")
			color = "red"
			break
		case "soilMoistureLog":
			label = t("irrigation.soilMoisture")
			color = "dodgerblue"
			break
		case "lightLog":
			label = t("alarm.par.title")
			color = "gold"
			break

		default:
			break
	}

	return (
		<div>
			<MuiLineChart
				xAxis={[{ scaleType: "point", data: timestamps }]}
				yAxis={[{ min: min }]}
				series={[
					{
						data: values,
						label: label,
						color: color,
					},
				]}
				width={400}
				height={300}
			/>
		</div>
	)
}

export default LineChart
