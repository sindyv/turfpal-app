import React from "react"

import { Wrapper, TextArea } from "./Btn.styles"

function Btn({ children, disabled, svgSize }) {
    return (
        <Wrapper $disabled={disabled} $svgSize={svgSize}>
            <TextArea>{children}</TextArea>
        </Wrapper>
    )
}

export default Btn
