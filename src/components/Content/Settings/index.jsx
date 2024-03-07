import React, { useContext, useState } from "react"

// Styles
import { Container } from "./Settings.styles"

// Components
import SetpointsButtons from "../../UI/SetpointsButtons"
import Slider from "./Slider"

// Data
import CONSTANTS from "../../../CONSTANTS.json"
// Context
import { SetpointsContext } from "../../../store/context/setpoints-context"
import { AllValuesContext } from "../../../store/context/allValues-context"

// Static data
const setpointsArray = ["default", "user1", "user2"]

function Settings() {
    const { updateSetpoints, updateSelctedSetpoints, selectedSetpoints } =
        useContext(SetpointsContext)
    const { data: allValues } = useContext(AllValuesContext)
    console.log(selectedSetpoints)
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
                    allValues.setpoints[
                        `${selectedSetpoints}_led_dim_50_range2`
                    ],
                    allValues.setpoints[
                        `${selectedSetpoints}_led_light_50_off`
                    ],
                ]}
                headerTitle={"PAR Range"}
                sliderValueText={`${
                    allValues.setpoints[`${selectedSetpoints}_led_light_50_on`]
                } - 
                ${
                    allValues.setpoints[
                        `${selectedSetpoints}_led_dim_50_range2`
                    ]
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
                marks={CONSTANTS.constants.sliders.tempRangeSliderMarks}
                switchValue={allValues.statuses.zone1_temp}
                sliderValue={[
                    allValues.setpoints[`${selectedSetpoints}_hps_temp_50_on`],
                    allValues.setpoints[`${selectedSetpoints}_hps_temp_50_off`],
                ]}
                headerTitle={"Temperature"}
                sliderValueText={`${
                    allValues.setpoints[`${selectedSetpoints}_hps_temp_50_on`]
                } - 
                ${allValues.setpoints[`${selectedSetpoints}_hps_temp_50_off`]}`}
                sliderUnit={"°C"}
                sliderMin={5}
                sliderMax={25}
                sliderStep={1}
                sliderColor={"red"}
                onChange={updateSetpoints}
                controlledItem={"temperature"}
            />
            {/* <Slider
                marks={CONSTANTS.constants.sliders.waterTargetSlider}
                switchValue={allValues.statuses?.irrigation}
                sliderValue={
                    allValues.setpoints[
                        `${selectedSetpoints}_irrigation_target`
                    ]
                }
                headerTitle={"Soil moisture"}
                sliderValueText={`${
                    allValues.setpoints[
                        `${selectedSetpoints}_irrigation_target`
                    ]
                }`}
                sliderUnit={"%"}
                sliderMin={0}
                sliderMax={100}
                sliderStep={1}
                onChange={updateSetpoints}
                sliderColor={"dodgerblue"}
                controlledItem={"irrigation"}
            /> */}
            {allValues.values?.co2 &&
                false && ( // removed since the back end is not completed
                    <Slider
                        marks={CONSTANTS.constants.sliders.co2Target}
                        switchValue={allValues.statuses.co2}
                        sliderValue={
                            allValues.setpoints[
                                `${selectedSetpoints}_co2_target`
                            ]
                        }
                        headerTitle={"CO2"}
                        sliderValueText={`${
                            allValues.setpoints[
                                `${selectedSetpoints}_co2_target`
                            ]
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
        </Container>
    )
}

export default Settings
