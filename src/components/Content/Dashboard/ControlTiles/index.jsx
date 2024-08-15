import React, { useContext } from "react"

// Styles
import { TileArea, HeatTile } from "./ControlTiles.styles"

// Components
import ControlTile from "../../../UI/ControlTile"

// Icons
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined"
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined"
import HeatIcon from "../../../../assets/icons/heat.jsx"

// Context
import { AllValuesContext } from "../../../../store/context/allValues-context"
import { useTranslation } from "react-i18next"

function ControlTiles() {
	const { data: allValues, onCommand } = useContext(AllValuesContext)
	const camera = false
	const handleClickedButton = (controlledItem, state) => {
		switch (controlledItem) {
			case "Lighting":
				onCommand({
					commands: {
						led_zone1_on: state,
						led_zone1_off: !state,
						led_zone2_on: state,
						led_zone2_off: !state,
					},
				})
				break
			case "Heating":
				onCommand(
					{
						commands: {
							heat_zone1: state,
							heat_zone2: state,
							heat_zone3: state,
						},
					},
					100
				)

				break
			case "Irrigation":
				onCommand(
					{
						commands: { irrigation_solenoid: state },
					},
					100
				)
				break
			case "CO2":
				onCommand(
					{
						commands: { co2_solenoid: state },
					},
					100
				)
				break
			case "Cover":
				onCommand(
					{
						commands: { cover: state },
					},
					100
				)
				break

			default:
				console.log("Invalid")
				break
		}
	}
	const { t } = useTranslation()
	return (
		<TileArea>
			<ControlTile
				disabled={true}
				linkParams={{
					to: "lighting",
					state: { headerText: t("light.lighting") },
				}}
				changeState={handleClickedButton}
				enabled={
					allValues.values.led_zone1_dim > 0 ||
					allValues.values.led_zone2_dim > 0
				}
				icon={LightbulbOutlinedIcon}
				title={t("light.lighting")}
				data={{
					value: allValues.values.light,
					valueUnit: "µMol",
					additionalData: [
						allValues.values.led_zone1_dim, //allValues.values.energyMeters[0].power,
						allValues.values.led_zone1_rh,
					],
					additionalDataUnits: ["%", "h"],
				}}
			/>
			<ControlTile
				disabled={true}
				linkParams={{
					to: "heating",
					state: { headerText: t("heat.heating") },
				}}
				changeState={handleClickedButton}
				enabled={allValues.statuses.heat_zone1}
				icon={HeatIcon}
				title={t("heat.heating")}
				data={{
					value: parseFloat(allValues.values?.temperature).toFixed(1),
					valueUnit: "°C",
					additionalData: [
						// some rigs only have 1 energy meter. If so, show other state
						null,
						// allValues.values.energyMeters.length > 1
						//     ? allValues.values.energyMeters[1].power
						//     : allValues.values.energyMeters[0].power,
						allValues.values.heat_rh,
					],
					additionalDataUnits: ["", "h"],
				}}
			/>
			{allValues?.statuses?.mode_irrigation ?? false ? (
				<ControlTile
					disabled={true}
					linkParams={{
						to: "irrigation",
						state: { headerText: t("irrigation.irrigation") },
					}}
					changeState={handleClickedButton}
					enabled={allValues.statuses.irrigation_valve}
					icon={WaterDropOutlinedIcon}
					title={t("irrigation.irrigation")}
					data={{
						value: allValues.values?.soil_moisture,
						valueUnit: "%",
						additionalData: [
							allValues.values?.irrigation_valve_rh,
							allValues.values["soil_temperature"],
						],
						additionalDataUnits: ["h", "°C"],
					}}
				/>
			) : null}
			{allValues?.values?.co2 ?? false ? (
				<ControlTile
					disabled={true}
					linkParams={{ to: "co2", state: { headerText: t("co2.co2") } }}
					changeState={handleClickedButton}
					controlledItem={"CO2"}
					enabled={allValues.statuses.co2_valve}
					icon={CloudOutlinedIcon}
					title={t("co2.co2")}
					data={{
						value: allValues.values.co2,
						valueUnit: "ppm",
						additionalData: [
							null, //allValues.values.co2_consumption, <--- Temporary commented out because it is not finished in the back-end
							allValues.values?.co2_valve_rh, //allValues.values.co2_rh,<--- Temporary commented out because it is not finished in the back-end
						],
						additionalDataUnits: [null, "h"], //["kg", "h"],
					}}
				/>
			) : null}
			{allValues.statuses.hasOwnProperty("cover") && (
				<ControlTile
					disabled={true}
					linkParams={{
						to: "cover",
						state: { headerText: t("cover.cover") },
					}}
					changeState={handleClickedButton}
					// enabled={allValues.statuses.cover}
					icon={CloudOutlinedIcon}
					title={"Cover"}
					data={{
						value: allValues.statuses.cover
							? t("generic.open")
							: t("generic.closed"),
						valueUnit: "",
						additionalData: [null, null],
						additionalDataUnits: [null, null],
					}}
				/>
			)}
			{camera ? (
				<ControlTile
					enabled={false}
					icon={LightbulbOutlinedIcon}
					title={"Camera"}
					data={{ value: "No camera", valueUnit: "" }}
				/>
			) : null}
		</TileArea>
	)
}

export default ControlTiles
