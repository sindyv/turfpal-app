import { createContext, useState } from "react"
import useWriteToRig from "../../hooks/useWriteToRig"

export const SetpointsContext = createContext()

function SetpointsContextProvider({ children }) {
	const [selectedSetpoints, setSelectedSetpoints] = useState("default")

	const { writeSetpoints, writeCommands } = useWriteToRig()

	const updateSetpoints = (value, target) => {
		switch (target) {
			case "par":
				writeSetpoints({
					[`${selectedSetpoints}_led_light_50_on`]: value[0],
					[`${selectedSetpoints}_led_dim_50_range2`]: value[1],
					[`${selectedSetpoints}_led_light_50_off`]: value[2],
				})
				break

			case "dim_cover":
				writeSetpoints({
					[`${selectedSetpoints}_led_dim_cover`]: value,
				})
				break

			case "temperature":
				writeSetpoints({
					[`${selectedSetpoints}_heating_target`]: value,
				})
				break

			case "irrigation":
				writeSetpoints({
					[`${selectedSetpoints}_irrigation_target`]: value,
				})
				break

			case "co2":
				writeSetpoints({
					[`${selectedSetpoints}_co2_target`]: value,
				})
				break

			case "par_switch":
				writeCommands({
					zone1_par: value,
				})
				break

			case "temperature_switch":
				writeCommands({
					zone1_temp: value,
				})
				break

			case "co2_switch":
				writeCommands({
					zone1_co2: value,
				})
				break

			case "irrigation_switch":
				writeCommands({
					zone1_irrigation: value,
				})
				break
			case "resetAutoSetpoints":
				writeSetpoints({
					[`resetAutoSetpoints`]: value,
				})
				break
			case "resetLightSetpoints":
				writeSetpoints({
					[`resetLightSetpoints`]: value,
				})
				break
			case "resetHeatingSetpoints":
				writeSetpoints({
					[`resetHeatingSetpoints`]: value,
				})
				break
			case "resetIrrigationSetpoints":
				writeSetpoints({
					[`resetIrrigationSetpoints`]: value,
				})
				break
			case "resetCO2Setpoints":
				writeSetpoints({
					[`resetCO2Setpoints`]: value,
				})
				break
			case "resetWindSetpoints":
				writeSetpoints({
					[`resetWindSetpoints`]: value,
				})
				break

			default:
				break
		}
	}

	const updateSelctedSetpoints = (setpoints) => {
		setSelectedSetpoints(setpoints)
	}

	return (
		<SetpointsContext.Provider
			value={{
				updateSetpoints,
				updateSelctedSetpoints,
				selectedSetpoints,
			}}
		>
			{children}
		</SetpointsContext.Provider>
	)
}

export default SetpointsContextProvider
