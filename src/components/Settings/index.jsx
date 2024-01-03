import React, { useState } from "react"
import { Wrapper, Clicker, Sub } from "./Settings.styles"

const Settings = () => {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        setVisible((prev) => !prev)
        console.log(visible)
    }

    return (
        <Wrapper>
            <Clicker onClick={handleClick}>Click me!</Clicker>
            <Sub className={visible ? null : "invisible"}>This is the sub!</Sub>
        </Wrapper>
    )
}

export default Settings
