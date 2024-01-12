import React from "react"

import { Wrapper, TextArea } from "./Btn.styles"

function Btn({ children, disabled, svgSize = 18, selected, onClick }) {
    const handleClick = () => {
        onClick()
    }

    return (
        <Wrapper
            $disabled={disabled}
            $selected={selected}
            onClick={handleClick}
        >
            <TextArea $svgSize={svgSize}>{children}</TextArea>
        </Wrapper>
    )
}

export default Btn
