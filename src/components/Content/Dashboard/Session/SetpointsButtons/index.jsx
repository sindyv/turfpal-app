import React from "react"

import { ButtonArea } from "./SetpointButtons.styles"

import Btn from "../../../../UI/Btn"
function SetpointsButtons() {
    return (
        <ButtonArea>
            <Btn
                selected={true}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
            >
                Default
            </Btn>
            <Btn
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
            >
                Summer
            </Btn>
            <Btn
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
            >
                Winter
            </Btn>
            <Btn
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
            >
                Custom
            </Btn>
        </ButtonArea>
    )
}

export default SetpointsButtons
