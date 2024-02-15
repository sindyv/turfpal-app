import React from "react"

import { ButtonArea } from "./SetpointButtons.styles"

import Btn from "../Btn"
function SetpointsButtons({ onSelectSetpoints, activeSetpoints }) {
    const handleSelectSetpoints = (value) => {
        onSelectSetpoints(value)
    }

    return (
        <ButtonArea>
            {/* <Btn
                selected={activeSetpoints === "default"}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints("default")}
            >
                Default
            </Btn> */}
            <Btn
                selected={activeSetpoints === "default"}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints("default")}
            >
                Default
            </Btn>
            <Btn
                selected={activeSetpoints === "user_defined1"}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints("user_defined1")}
            >
                Summer
            </Btn>
            <Btn
                backgroundColorDeselected={"var(--lightGrey)"}
                selected={activeSetpoints === "user_defined2"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints("user_defined2")}
            >
                Winter
            </Btn>
        </ButtonArea>
    )
}

export default SetpointsButtons
