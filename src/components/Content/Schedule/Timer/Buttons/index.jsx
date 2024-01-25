import React from "react"
import { ButtonGroup } from "./Buttons.styles"

import Btn from "../../../../UI/Btn"

function Buttons({ onChangeState, state }) {
    return (
        <ButtonGroup>
            <Btn
                selected={state === "on"}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => onChangeState("on")}
            >
                Keep on
            </Btn>
            <Btn
                selected={state === "off"}
                backgroundColorDeselected={"var(--lightGrey)"}
                backgroundColorSelected={"var(--turfpalActiveBtn)"}
                textColorSelected={"black"}
                textColorDeselected={"black"}
                customFont={"var(--turfpalFontBold)"}
                onClick={() => onChangeState("off")}
            >
                Keep off
            </Btn>
        </ButtonGroup>
    )
}

export default Buttons
