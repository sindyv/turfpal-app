import React from "react"

import { Wrapper, TextArea } from "./Btn.styles"

function Btn({ children, disabled, svgSize, selected, onClick }) {
    const handleClick = () => {
        onClick()
    }

    return (
        <Wrapper
            $disabled={disabled}
            $svgSize={svgSize}
            $selected={selected}
            onClick={handleClick}
        >
            <TextArea>{children}</TextArea>
        </Wrapper>
    )
}

export default Btn
