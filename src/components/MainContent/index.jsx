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
import ScheduleAddEntry from "../Content/Schedule/AddEntry"
import Login from "../Content/Login"

const MainContent = ({ children, allValues }) => {
    return (
        <Wrapper>
            <Routes>
                <Route
                    path='/Login'
                    element={<Login allValues={allValues} />}
                />
                <Route path='/' element={<Dashboard allValues={allValues} />} />
                <Route path='/log' element={<Log allValues={allValues} />} />
                <Route
                    path='lighting'
                    element={<Lighting allValues={allValues} />}
                />
                <Route
                    path='lighting/settings'
                    element={<LightingSettings allValues={allValues} />}
                />
                <Route
                    path='heating'
                    element={<Heating allValues={allValues} />}
                />
                <Route
                    path='heating/settings'
                    element={<HeatingSettings allValues={allValues} />}
                />
                <Route
                    path='irrigation'
                    element={<Irrigation allValues={allValues} />}
                />
                <Route
                    path='irrigation/settings'
                    element={<IrrigationSettings allValues={allValues} />}
                />
                <Route path='co2' element={<CO2 allValues={allValues} />} />
                <Route
                    path='co2/settings'
                    element={<CO2Settings allValues={allValues} />}
                />
                <Route path='cover' element={<Cover allValues={allValues} />} />
                <Route
                    path='information'
                    element={<Information allValues={allValues} />}
                />
                <Route
                    path='device'
                    element={<Device allValues={allValues} />}
                />
                <Route
                    path='connectivity'
                    element={<Connectivity allValues={allValues} />}
                />
                <Route
                    path='schedule'
                    element={<Schedule allValues={allValues} />}
                />
                <Route
                    path='schedule/entries'
                    element={<ScheduleEntries allValues={allValues} />}
                />
                <Route
                    path='schedule/entries/add'
                    element={<ScheduleAddEntry />}
                />
                <Route
                    path='alarms'
                    element={<Alarms allValues={allValues} />}
                />
                <Route
                    path='energy'
                    element={<Energy allValues={allValues} />}
                />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
            {children}
            <MenuSpacer />
        </Wrapper>
    )
}

export default MainContent
