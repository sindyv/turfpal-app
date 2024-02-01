import React, { useContext } from "react"

// Styles
import { Container } from "./Settings.styles"

// Components
import SetpointsButtons from "../../UI/SetpointsButtons"
import Slider from "./Slider"

// Data
import CONSTANTS from "../../../CONSTANTS.json"
// Context
import { AllValuesContext } from "../../../store/context/allValues-context"

function Settings() {
    const { data: allValues } = useContext(AllValuesContext)

    const onCommitedChange = (newValue, target) => {
        if (target === "horti") {
            onCommand(
                {
                    setpoints: {
                        led_zone1_dim: newValue,
                    },
                },
                100
            )
        } else if (target === "blue") {
            onCommand(
                {
                    setpoints: {
                        led_zone2_dim: newValue,
                    },
                },
                100
            )
        } else if (target === "par") {
            onCommand(
                {
                    setpoints: {
                        default_led_light_50_on: newValue[0],
                        default_led_dim_50_range2: newValue[1],
                        default_led_light_50_off: newValue[2],
                    },
                },
                100
            )
        }
    }

    const handleSelectSetpoints = (values) => {
        console.log(values)
    }

    const handleEnable = (state, value) => {}

    return (
        <Container>
            <SetpointsButtons
                onSelectSetpoints={handleSelectSetpoints}
                activeSetpoints={"default"}
            />
            <Slider
                marks={CONSTANTS.constants.sliders.parSlider}
                switchValue={true}
                sliderValue={[500, 1000, 2000]}
                allValues={allValues}
                headerTitle={"PAR Range"}
                sliderValueText={"500-2500"}
                sliderUnit={"µMol"}
                sliderMax={2500}
                sliderStep={50}
                sliderColor={"orange"}
            />
            <Slider
                marks={CONSTANTS.constants.sliders.tempRangeSliderMarks}
                switchValue={true}
                sliderValue={[10, 20]}
                allValues={allValues}
                headerTitle={"Temperature"}
                sliderValueText={"6-25"}
                sliderUnit={"°C"}
                sliderMin={5}
                sliderMax={25}
                sliderStep={1}
                sliderColor={"red"}
            />
            <Slider
                marks={CONSTANTS.constants.sliders.waterTargetSlider}
                switchValue={true}
                sliderValue={[10]}
                allValues={allValues}
                headerTitle={"Soil moisture"}
                sliderValueText={"25"}
                sliderUnit={"%"}
                sliderMin={0}
                sliderMax={100}
                sliderStep={1}
                sliderColor={"dodgerblue"}
            />
            <Slider
                marks={CONSTANTS.constants.sliders.co2Target}
                switchValue={true}
                sliderValue={[1200]}
                allValues={allValues}
                headerTitle={"CO2"}
                sliderValueText={"1200"}
                sliderUnit={"ppm"}
                sliderMin={400}
                sliderMax={2000}
                sliderStep={1}
                sliderColor={"grey"}
            />
        </Container>
    )
}

export default Settings
