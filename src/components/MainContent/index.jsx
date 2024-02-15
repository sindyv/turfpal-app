import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"

// Styles
import { Wrapper } from "./MainContent.styles"

// Components
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
import Menu from "../Menu"
import Timer from "../Content/Schedule/Timer"
import Help from "../Content/Help"
import TimeZone from "../Content/Information/TimeZone"
import Settings from "../Content/Settings"

// Context
import { MenuContext } from "../../store/context/menu-context"
import { LoginContext } from "../../store/context/login-context"
import SessionLog from "../Content/SessionLog"
import Dali from "../Content/Dali"

const MainContent = () => {
    const { hideMenu } = useContext(MenuContext)
    const { loggedIn } = useContext(LoginContext)
    return (
        <Wrapper onClick={() => hideMenu()}>
            {loggedIn ? (
                <>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/log' element={<Log />} />
                        <Route path='/sessionlog' element={<SessionLog />} />
                        <Route path='/dali' element={<Dali />} />

                        <Route path='lighting' element={<Lighting />} />
                        <Route path='settings' element={<Settings />} />
                        <Route
                            path='lighting/settings'
                            element={<LightingSettings />}
                        />
                        <Route path='heating' element={<Heating />} />
                        <Route
                            path='heating/settings'
                            element={<HeatingSettings />}
                        />
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
                        <Route
                            path='schedule/entries'
                            element={<ScheduleEntries />}
                        />
                        <Route
                            path='schedule/entries/add'
                            element={<ScheduleAddEntry />}
                        />
                        <Route path='alarms' element={<Alarms />} />
                        <Route path='energy' element={<Energy />} />
                        <Route path='timezone' element={<TimeZone />} />
                        <Route path='schedule/timer' element={<Timer />} />
                        <Route path='/*' element={<ErrorPage />} />
                        <Route path='/help' element={<Help />} />
                    </Routes>
                    {/* <MenuSpacer /> */}

                    <Menu />
                </>
            ) : (
                <Login />
            )}
        </Wrapper>
    )
}

export default MainContent
