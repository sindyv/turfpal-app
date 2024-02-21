import React, { useState, useRef, useEffect } from "react"
import { Container } from "./Modbus.styles"
import Btn from "../../UI/Btn"

import ModbusAPI from "../../../ModbusAPI"

function Modbus() {
    const [selectedSensor, setSelectedSensor] = useState("1")
    const [oldAddress, setOldAddress] = useState(1)
    const [sensorValue, setSensorValue] = useState("0")
    const [response, setResponse] = useState("")

    const oldAdressInputField = useRef(null)

    useEffect(() => {
        oldAdressInputField.current.disabled = selectedSensor === "1"
    }, [selectedSensor])

    const handleSelectSensor = (event) => {
        setSelectedSensor(event.target.value)
    }

    const handleChangeAddress = async () => {
        setResponse("")
        const response = await ModbusAPI.updateAddress(
            oldAddress,
            selectedSensor
        )
        setResponse(response.data)
    }

    const handleReadSensor = async () => {
        setSensorValue("Reading...")
        setResponse("")
        const response = await ModbusAPI.fetchValue(selectedSensor)
        setSensorValue(response?.data ?? "Error")
    }

    return (
        <Container>
            <label>Select sensor</label>
            <select defaultValue={"1"} autoFocus onChange={handleSelectSensor}>
                <option value='1'>PAR</option>
                <option value='2'>Temperature 1</option>
                <option value='3'>Temperature 2</option>
                <option value='4'>Temperature 3</option>
                <option value='5'>CO2</option>
                <option value='6'>Soil</option>
            </select>
            <h3>Address</h3>
            <div className='input-field'>
                <div className='input'>
                    <label>Old address</label>
                    <input
                        ref={oldAdressInputField}
                        type='number'
                        placeholder='1'
                        value={selectedSensor === "1" ? "1" : oldAddress}
                        onChange={(e) => setOldAddress(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <label>New address</label>
                    <input
                        type='number'
                        placeholder='1'
                        disabled
                        value={selectedSensor}
                    />
                </div>
            </div>
            {response !== "" ? <p>{response}</p> : null}
            {selectedSensor === "1" ? (
                <p>
                    The PAR-sensor comes with a fixd address of 1 and cannot be
                    changed
                </p>
            ) : null}
            <Btn onClick={handleChangeAddress}>Change address</Btn>
            <h3>Read sensor value</h3>
            <input disabled value={sensorValue} />
            <Btn onClick={handleReadSensor}>Read value</Btn>
        </Container>
    )
}

export default Modbus
