import React from "react"
import { Container } from "./Dali.Styles"

import DaliConfiguratorContextProvider from "../../../store/context/daliConfigurator-context"

import CustomTable from "./Components/CustomTable"

import Addressing from "./Components/Addressing"
import ControlAll from "./Components/ControlAll"
import AssignGroup from "./Components/AssignGroup"

function Dali() {
    return (
        <DaliConfiguratorContextProvider>
            <Container>
                <Addressing />
                <ControlAll />
                <AssignGroup />
                <CustomTable />
            </Container>
        </DaliConfiguratorContextProvider>
    )
}

export default Dali
