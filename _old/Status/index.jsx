import React from "react"

import {} from "./Status.styles"
import StatusCard from "../ui/StatusCard"

import { useQuery } from "@tanstack/react-query"

import API from "../../API"

const Status = () => {
    const query = useQuery({
        queryKey: ["alarms"],
        queryFn: API.fetchAlarmsPromise,
        refetchInterval: 5000,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data</h1>

    return (
        <>
            <StatusCard
                state={"warning"}
                title={"Surge protector"}
                activeText={
                    "The surge protector is faulty. Replace as soon as possible to avoid damage to equitment"
                }
                inactiveText={"Surge protection is operational"}
                active={query.data.surge_protection}
            />
            <StatusCard
                state={"warning"}
                title={"Fuses"}
                activeText={
                    "A fuse has tripped! Please check as soon as possible as the rig will not function correctly"
                }
                inactiveText={"All fuses intact"}
                active={query.data.fuse}
            />
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
        </>
    )
}

export default Status
