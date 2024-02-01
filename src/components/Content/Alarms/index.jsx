import React from "react"

import { Wrapper } from "./Alarms.styles"

import StatusCard from "../../UI/StatusCard"
import MenuSpacer from "../../UI/MenuSpacer"

import { useContext } from "react"
import { AllValuesContext } from "../../../store/context/allValues-context"
function Alarms({}) {
    const { data: allValues } = useContext(AllValuesContext)
    return (
        <Wrapper>
            {(typeof allValues?.alarms?.surge_protection !== "undefined" ||
                typeof allValues?.alarms?.surge_protection2 !==
                    "undefined") && (
                <StatusCard
                    state={"warning"}
                    title={"Surge protector"}
                    activeText={
                        "The surge protector is faulty. Replace as soon as possible to avoid damage to equitment"
                    }
                    inactiveText={"Surge protection is operational"}
                    active={
                        allValues.alarms.surge_protection ||
                        allValues?.alarms?.surge_protection2
                    }
                />
            )}
            {typeof allValues.alarms.fuse !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Fuses"}
                    activeText={
                        "A fuse has tripped! Please check as soon as possible as the rig will not function correctly"
                    }
                    inactiveText={"All fuses intact"}
                    active={allValues.alarms.fuse || allValues.alarms.fuse2}
                />
            )}
            {typeof allValues.alarms.tilt !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Tilt sensor"}
                    activeText={
                        "The tilt sensor has tripped! Please verify that the rig is in an upright position"
                    }
                    inactiveText={"Tilt sensor OK"}
                    active={allValues.alarms.tilt}
                />
            )}
            {typeof allValues.alarms.sensor_par !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"PAR sensor"}
                    activeText={
                        "The PAR sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={allValues.alarms.sensor_par}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof allValues.alarms.sensor_temp !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Temperature sensor"}
                    activeText={
                        "The temperature sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode.  Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={allValues.alarms.sensor_temp}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof allValues.alarms.sensor_soil !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Soil sensor"}
                    activeText={
                        "The soil sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={allValues.alarms.sensor_soil}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof allValues.alarms.sensor_co2 !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"CO2 sensor"}
                    activeText={
                        "The CO2 sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={allValues.alarms.sensor_co2}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof allValues.alarms.sensor_wind !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Wind sensor"}
                    activeText={
                        "The Wind sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={allValues.alarms.sensor_wind}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof allValues.alarms.high_soil_temp !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Soil temperature"}
                    activeText={
                        "The soil temperature has exeeded the limit. The heating has been shut off"
                    }
                    inactiveText={"Temperature normal"}
                    active={allValues.alarms.high_soil_temp}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            <MenuSpacer />
        </Wrapper>
    )
}

export default Alarms
