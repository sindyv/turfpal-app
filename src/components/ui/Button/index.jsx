import React from "react"

import { Btn } from "./Button.styles"

const Button = ({ children, selected, enabled, danger, handleClick }) => (
    <Btn
        disabled={!enabled}
        $selected={selected}
        $enabled={enabled}
        $danger={danger}
        onClick={handleClick}
    >
        {children}
    </Btn>
)

export default Button
