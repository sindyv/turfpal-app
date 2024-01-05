import React from "react"

import { Wrapper, Header, Data } from "./ConnectivityDataField.styles"

function ConnectivityDataField({ header, data }) {
    return (
        <Wrapper>
            <Header>{header}</Header>
            <Data>{data} </Data>
        </Wrapper>
    )
}

export default ConnectivityDataField
