import React from "react"

import { Wrapper, Header, Data } from "./InformationDataField.styles"

function DataField({ header, data, unit = "" }) {
    return (
        <Wrapper>
            <Header>{header}</Header>
            <Data>{data + unit} </Data>
        </Wrapper>
    )
}

export default DataField
