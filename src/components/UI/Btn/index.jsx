import React from "react"

import { Wrapper, TextArea } from "./Btn.styles"

function Btn({
    children,
    disabled,
    svgSize = 18,
    selected,
    onClick,
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
            onClick={handleClick}
        >
            <TextArea $svgSize={svgSize} $customFont={customFont}>
                {children}
            </TextArea>
        </Wrapper>
    )
}

export default Btn
