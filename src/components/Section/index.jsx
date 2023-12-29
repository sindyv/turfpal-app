import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Wrapper, Content } from "./Section.styles"

import Menu from "../Menu"
import Values from "../Values"
import EnergyData from "../EnergyData"
import ErrorPage from "../ErrorPage"
import RouterData from "../routerData"
import Heating from "../Heating"

const Section = (props) => {
    return (
        <Wrapper>
            <Router>
                <Menu />
                <Content>
                    <Routes>
                        <Route path='/' element={<Values />} />
                        <Route path='energyData' element={<EnergyData />} />
                        <Route path='routerData' element={<RouterData />} />
                        <Route path='heating' element={<Heating />} />
                        <Route path='/*' element={<ErrorPage />} />
                    </Routes>
                </Content>
            </Router>
        </Wrapper>
    )
}

export default Section
