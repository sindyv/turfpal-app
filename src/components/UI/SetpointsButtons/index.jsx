import React from "react"

import { ButtonArea } from "./SetpointButtons.styles"

import Btn from "../Btn"
function SetpointsButtons({
    onSelectSetpoints,
    activeSetpoints,
    setpointsArray,
}) {
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
                selected={activeSetpoints === `${setpointsArray[0]}`}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints(`${setpointsArray[0]}`)}
            >
                Default
            </Btn>
            <Btn
                selected={activeSetpoints === `${setpointsArray[1]}`}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints(`${setpointsArray[1]}`)}
            >
                Summer
            </Btn>
            <Btn
                backgroundColorDeselected={"var(--lightGrey)"}
                selected={activeSetpoints === `${setpointsArray[2]}`}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => handleSelectSetpoints(`${setpointsArray[2]}`)}
            >
                Winter
            </Btn>
        </ButtonArea>
    )
}

export default SetpointsButtons
