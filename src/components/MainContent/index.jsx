import React from "react"

import { Wrapper } from "./MainContent.styles"

import Dashboard from "../Content/Dashboard"

const MainContent = (props) => {
    return (
        <Wrapper>
            <Dashboard />
            {props.children}
        </Wrapper>
    )
}

export default MainContent
