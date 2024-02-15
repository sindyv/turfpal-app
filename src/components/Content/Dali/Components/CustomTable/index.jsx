import React, { useContext, useEffect, useState } from "react"

import { Table, Tr, Td, Th } from "./Table.styles"

import DaliAPI from "../../../../../DaliAPI"

import { DaliConfiguratorContext } from "../../../../../store/context/daliConfigurator-context"

function CustomTable({ data }) {
    const daliCtx = useContext(DaliConfiguratorContext)

    useEffect(() => {
        daliCtx.getDevices()
    }, [])

    const handleRowClick = (id, value) => {
        daliCtx.controlDevice(id, value)
        daliCtx.handleSelectedEcgs(id)
    }

    // console.log(daliCtx)

    if (daliCtx?.devices?.devices?.length > 0) {
        return (
            <Table>
                <thead>
                    <Tr>
                        <Th>Toggle</Th>
                        <Th>Address</Th>
                        <Th>Name</Th>
                        <Th>Group(s)</Th>
                    </Tr>
                </thead>
                <tbody>
                    {daliCtx.devices.devices.map((device) => {
                        const isChecked =
                            daliCtx.selected.indexOf(device.id) !== -1
                        return (
                            <Tr key={device.id}>
                                <Td>
                                    <input
                                        type='checkbox'
                                        checked={isChecked}
                                        onChange={() =>
                                            handleRowClick(
                                                device.id,
                                                !isChecked
                                            )
                                        }
                                    />
                                </Td>
                                <Td>{device.address}</Td>
                                <Td>{device.name}</Td>
                                <Td>{device.groups}</Td>
                            </Tr>
                        )
                    })}
                </tbody>
            </Table>
        )
    } else {
        return null
    }
}

export default CustomTable
