import React, { useContext } from "react"

import { BtnContainer } from "./ControlAll.styles"
import Btn from "../../../../UI/Btn"

import DaliAPI from "../../../../../DaliAPI"

import { DaliConfiguratorContext } from "../../../../../store/context/daliConfigurator-context"

function ControlAll() {
    const daliCtx = useContext(DaliConfiguratorContext)

    function handleControlAll(value) {
        daliCtx.controlAll(value)
    }
    return (
        <BtnContainer>
            <Btn onClick={() => handleControlAll(true)} selected={false}>
                All on
            </Btn>
            <Btn onClick={() => handleControlAll(false)}>All off</Btn>
        </BtnContainer>
    )
}

export default ControlAll
