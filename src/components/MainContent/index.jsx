import React from "react"
import { Routes, Route } from "react-router-dom"

import { Wrapper } from "./MainContent.styles"

import Dashboard from "../Content/Dashboard"
import Information from "../Content/Information"
import ErrorPage from "../ErrorPage"
import Connectivity from "../Content/Information/Connectivity"
import Schedule from "../Content/Schedule"
import Alarms from "../Content/Alarms"
import Device from "../Content/Information/Device"
import Energy from "../Content/Energy"
import Heating from "../Content/Dashboard/Control/Heating"
import HeatingLog from "../Content/Dashboard/Log/Heating"

const MainContent = (props) => {
    return (
        <Wrapper>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='heating' element={<Heating />} />
                <Route path='heating/log' element={<HeatingLog />} />
                <Route path='information' element={<Information />} />
                <Route path='device' element={<Device />} />
                <Route path='connectivity' element={<Connectivity />} />
                <Route path='schedule' element={<Schedule />} />
                <Route path='alarms' element={<Alarms />} />
                <Route path='energy' element={<Energy />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            {props.children}
        </Wrapper>
    )
}

export default MainContent
