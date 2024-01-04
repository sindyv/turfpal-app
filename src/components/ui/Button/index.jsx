import React from "react"

import { Wrapper, TextArea } from "./Button.styles"

function Button({ children, disabled, svgSize }) {
    return (
        <Wrapper $disabled={disabled} $svgSize={svgSize}>
            <TextArea>{children}</TextArea>
        </Wrapper>
    )
}

export default Button
