import React from "react"
import { useQuery } from "@tanstack/react-query"

import { Wrapper, Header } from "./Schedule.styles"

import StatusCard from "../../UI/StatusCard"
import MenuSpacer from "../../UI/MenuSpacer"

import API from "../../../API"

function Alarms() {
    const query = useQuery({
        queryKey: ["alarms"],
        queryFn: API.fetchAlarms,
        refetchInterval: 5000,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>Alarms</Header>
            {typeof query.data.surge_protection !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Surge protector"}
                    activeText={
                        "The surge protector is faulty. Replace as soon as possible to avoid damage to equitment"
                    }
                    inactiveText={"Surge protection is operational"}
                    active={query.data.surge_protection}
                />
            )}
            {typeof query.data.fuse !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Fuses"}
                    activeText={
                        "A fuse has tripped! Please check as soon as possible as the rig will not function correctly"
                    }
                    inactiveText={"All fuses intact"}
                    active={query.data.fuse}
                />
            )}
            {typeof query.data.tilt !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Tilt sensor"}
                    activeText={
                        "The tilt sensor has tripped! Please verify that the rig is in an upright position"
                    }
                    inactiveText={"Tilt sensor OK"}
                    active={query.data.tilt}
                />
            )}
            {typeof query.data.sensor_par !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"PAR sensor"}
                    activeText={
                        "The PAR sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={query.data.sensor_par}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof query.data.sensor_temp !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Temperature sensor"}
                    activeText={
                        "The temperature sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode.  Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={query.data.sensor_temp}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof query.data.sensor_soil !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Soil sensor"}
                    activeText={
                        "The soil sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={query.data.sensor_soil}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof query.data.sensor_co2 !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"CO2 sensor"}
                    activeText={
                        "The CO2 sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={query.data.sensor_co2}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            {typeof query.data.sensor_wind !== "undefined" && (
                <StatusCard
                    state={"warning"}
                    title={"Wind sensor"}
                    activeText={
                        "The Wind sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                    }
                    inactiveText={"Sensor working"}
                    active={query.data.sensor_wind}
                    activePrimaryColor='#ffedb5'
                    activeSecondaryColor='#665e48'
                />
            )}
            <MenuSpacer />
        </Wrapper>
    )
}

export default Alarms
