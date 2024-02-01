import React from "react"

//Styles
import {
    CenteredDiv,
    RangeView,
    SliderContainer,
    SliderHeader,
} from "./Slider.styles"

// Components
import CustomSlider from "../../../UI/CustomSlider"
import { Switch } from "@mui/material"

function Slider({
    marks,
    allValues,
    headerTitle,
    sliderValue,
    sliderUnit,
    switchValue,
    sliderValueText,
    sliderMin = 0,
    sliderMax,
    sliderStep,
    sliderColor,
}) {
    const handleChange = () => {}

    return (
        <CenteredDiv>
            <SliderHeader>
                <div>
                    <h4>{headerTitle}</h4>
                </div>
                <div>
                    <Switch
                        disabled={false}
                        size='small'
                        color='whiteBackground'
                        checked={switchValue}
                        onChange={(event) =>
                            handleChange("Par", event.target.value)
                        }
                    />
                </div>
            </SliderHeader>
            <SliderContainer>
                <CustomSlider
                    onCommitedChange={handleChange}
                    initialValue={sliderValue}
                    width={"90%"}
                    color={sliderColor}
                    controlledItem={"par"}
                    // marks={marks}
                    min={sliderMin}
                    max={sliderMax}
                    step={sliderStep}
                />

                <RangeView>
                    {sliderValueText}
                    <span>{sliderUnit}</span>
                </RangeView>
            </SliderContainer>
        </CenteredDiv>
    )
}

export default Slider
