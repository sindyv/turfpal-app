import React from "react"

import { Wrapper, TextArea } from "./Btn.styles"

function Btn({
    children,
    disabled,
    svgSize = 18,
    selected,
    onClick,
    type,
    backgroundColorSelected = "var(--turfpalActiveBtn)",
    backgroundColorDeselected = "var(--turfpalColor)",
    textColorSelected = "var(--turfpalColor)",
    textColorDeselected = "var(--white)",
    customFont = "var(--turfpalFont)",
}) {
    const handleClick = () => {
        onClick()
    }

    return (
        <Wrapper
            $disabled={disabled}
            $selected={selected}
            $textColorSelected={textColorSelected}
            $textColorDeselected={textColorDeselected}
            $backgroundColorSelected={backgroundColorSelected}
            $backgroundColorDeselected={backgroundColorDeselected}
            type={type}
            onClick={disabled ? null : handleClick}
        >
            <TextArea $svgSize={svgSize} $customFont={customFont}>
                {children}
            </TextArea>
        </Wrapper>
    )
}

export default Btn
