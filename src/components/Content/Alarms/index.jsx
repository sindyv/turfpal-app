import React from "react"

import { Wrapper, Header } from "./Schedule.styles"

import StatusCard from "../../UI/StatusCard"

function Alarms() {
    return (
        <Wrapper>
            <Header>Alarms</Header>
            <StatusCard
                state={"warning"}
                title={"Surge protector"}
                activeText={
                    "The surge protector is faulty. Replace as soon as possible to avoid damage to equitment"
                }
                inactiveText={"Surge protection is operational"}
                active={false}
            />
            <StatusCard
                state={"warning"}
                title={"Fuses"}
                activeText={
                    "A fuse has tripped! Please check as soon as possible as the rig will not function correctly"
                }
                inactiveText={"All fuses intact"}
                active={false}
            />
            <StatusCard
                state={"warning"}
                title={"PAR sensor"}
                activeText={
                    "The PAR sensor has malfunctioned. The lighting rig will work properly in 'Auto'-mode. Please call Turfpal support at +44 7949 429360 "
                }
                inactiveText={"Sensor working"}
                active={true}
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
                active={false}
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
                active={false}
                activePrimaryColor='#ffedb5'
                activeSecondaryColor='#665e48'
            />
        </Wrapper>
    )
}

export default Alarms
