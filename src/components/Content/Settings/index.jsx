import React, { useContext, useState } from "react"
import { useTranslation } from "react-i18next"

// Styles
import { Container } from "./Settings.styles"

// Components
import SetpointsButtons from "../../UI/SetpointsButtons"
import Slider from "./Slider"
import MenuSpacer from "../../UI/MenuSpacer"

// Data
import CONSTANTS from "../../../CONSTANTS.json"
// Context
import { SetpointsContext } from "../../../store/context/setpoints-context"
import { AllValuesContext } from "../../../store/context/allValues-context"
import useLoginContext from "../../../hooks/useLoginContext"

import { t } from "i18next"
import Btn from "../../UI/Btn"

// Static data
const setpointsArray = ["default", "user1", "user2"]

function Settings() {
	const { updateSetpoints, updateSelctedSetpoints, selectedSetpoints } =
		useContext(SetpointsContext)
	const { data: allValues } = useContext(AllValuesContext)

	return (
		<Container>
			<SetpointsButtons
				onSelectSetpoints={(value) => updateSelctedSetpoints(value)}
				activeSetpoints={selectedSetpoints}
				setpointsArray={setpointsArray}
			/>
			<Slider
				marks={CONSTANTS.constants.sliders.parSlider}
				switchValue={allValues.statuses.zone1_par}
				sliderValue={[
					allValues.setpoints[`${selectedSetpoints}_led_light_50_on`],
					allValues.setpoints[`${selectedSetpoints}_led_dim_50_range2`],
					allValues.setpoints[`${selectedSetpoints}_led_light_50_off`],
				]}
				headerTitle={t("generic.parRange")}
				sliderValueText={`${
					allValues.setpoints[`${selectedSetpoints}_led_light_50_on`]
				} - 
                ${
									allValues.setpoints[`${selectedSetpoints}_led_dim_50_range2`]
								} - 
                ${
									allValues.setpoints[`${selectedSetpoints}_led_light_50_off`]
								}`}
				sliderUnit={"µMol"}
				sliderMax={2500}
				sliderStep={50}
				sliderColor={"orange"}
				onChange={updateSetpoints}
				controlledItem={"par"}
			/>
			<Slider
				marks={CONSTANTS.constants.sliders.waterTargetSlider}
				switchValue={undefined}
				sliderValue={allValues.setpoints[`${selectedSetpoints}_led_dim_cover`]}
				headerTitle={t("light.dimCover")}
				sliderValueText={`${
					allValues.setpoints[`${selectedSetpoints}_led_dim_cover`]
				}`}
				sliderUnit={"%"}
				sliderMin={0}
				sliderMax={100}
				sliderStep={1}
				onChange={updateSetpoints}
				sliderColor={"orange"}
				controlledItem={"dim_cover"}
			/>
			<Slider
				marks={CONSTANTS.constants.sliders.tempRangeSliderMarks}
				switchValue={allValues.statuses.zone1_temp}
				sliderValue={allValues.setpoints[`${selectedSetpoints}_heating_target`]}
				headerTitle={t("generic.temperature")}
				sliderValueText={`${
					allValues.setpoints[`${selectedSetpoints}_heating_target`]
				}`}
				sliderUnit={"°C"}
				sliderMin={5}
				sliderMax={35}
				sliderStep={0.5}
				sliderColor={"red"}
				onChange={updateSetpoints}
				controlledItem={"temperature"}
			/>
			<Slider
				marks={CONSTANTS.constants.sliders.waterTargetSlider}
				switchValue={allValues.statuses?.zone1_irrigation}
				sliderValue={
					allValues.setpoints[`${selectedSetpoints}_irrigation_target`]
				}
				headerTitle={t("irrigation.soilMoisture")}
				sliderValueText={`${
					allValues.setpoints[`${selectedSetpoints}_irrigation_target`]
				}`}
				sliderUnit={"%"}
				sliderMin={0}
				sliderMax={100}
				sliderStep={1}
				onChange={updateSetpoints}
				sliderColor={"dodgerblue"}
				controlledItem={"irrigation"}
			/>
			{allValues.values?.co2 && ( // removed since the back end is not completed
				<Slider
					marks={CONSTANTS.constants.sliders.co2Target}
					switchValue={allValues.statuses.zone1_co2}
					sliderValue={allValues.setpoints[`${selectedSetpoints}_co2_target`]}
					headerTitle={"CO2"}
					sliderValueText={`${
						allValues.setpoints[`${selectedSetpoints}_co2_target`]
					}`}
					sliderUnit={"ppm"}
					sliderMin={400}
					sliderMax={2000}
					sliderStep={50}
					onChange={updateSetpoints}
					sliderColor={"grey"}
					controlledItem={"co2"}
				/>
			)}
			<Btn
				onClick={() => {
					updateSetpoints(true, "resetAutoSetpoints")
				}}
			>
				{t("generic.resetSetpoints")}
			</Btn>
			<MenuSpacer />
		</Container>
	)
}

export default Settings
