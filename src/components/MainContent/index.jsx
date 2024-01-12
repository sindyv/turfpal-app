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
import HeatingSettings from "../Content/Dashboard/Settings/HeatingSettings"
import MenuSpacer from "../UI/MenuSpacer"
import Lighting from "../Content/Dashboard/Control/Lighting"
import LightingSettings from "../Content/Dashboard/Settings/LightingSettings"
import Irrigation from "../Content/Dashboard/Control/Irrigation"
import CO2 from "../Content/Dashboard/Control/CO2"
import Cover from "../Content/Dashboard/Control/Cover"
import Log from "../Content/Dashboard/Log"
import IrrigationSettings from "../Content/Dashboard/Settings/IrrigationSettings"
import CO2Settings from "../Content/Dashboard/Settings/CO2Settings"
import ScheduleEntries from "../Content/Schedule/ScheduleEntries"

const MainContent = (props) => {
    return (
        <Wrapper>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/log' element={<Log />} />
                <Route path='lighting' element={<Lighting />} />
                <Route
                    path='lighting/settings'
                    element={<LightingSettings />}
                />
                <Route path='heating' element={<Heating />} />
                <Route path='heating/settings' element={<HeatingSettings />} />
                <Route path='irrigation' element={<Irrigation />} />
                <Route
                    path='irrigation/settings'
                    element={<IrrigationSettings />}
                />
                <Route path='co2' element={<CO2 />} />
                <Route path='co2/settings' element={<CO2Settings />} />
                <Route path='cover' element={<Cover />} />
                <Route path='information' element={<Information />} />
                <Route path='device' element={<Device />} />
                <Route path='connectivity' element={<Connectivity />} />
                <Route path='schedule' element={<Schedule />} />
                <Route path='schedule/entries' element={<ScheduleEntries />} />
                <Route path='alarms' element={<Alarms />} />
                <Route path='energy' element={<Energy />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            {props.children}
            <MenuSpacer />
        </Wrapper>
    )
}

export default MainContent
