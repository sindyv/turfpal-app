import React, { useContext, useState } from "react"
import { Container, Select } from "./AssignGroup.styles"

import { DaliConfiguratorContext } from "../../../../../store/context/daliConfigurator-context"
import Btn from "../../../../UI/Btn"

function AssignGroup() {
    const [name, setName] = useState("Horti")
    const [group, setGroup] = useState("1")

    const daliCtx = useContext(DaliConfiguratorContext)

    const handleSaveBtn = () => {
        daliCtx.updateDevices(name, group)
    }

    const handleSelectName = (event) => {
        setName(event.target.value)
    }
    const handleSelectGroup = (event) => {
        setGroup(event.target.value)
    }

    return (
        <>
            <Container>
                <div>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <Select onChange={handleSelectName} value={name}>
                            <option>Horti</option>
                            <option>Blue</option>
                        </Select>
                    </div>
                    <div>
                        <label htmlFor='group'>Group</label>
                        <Select onChange={handleSelectGroup} value={group}>
                            <option>1</option>
                            <option>2</option>
                        </Select>
                    </div>
                </div>
            </Container>
            <Btn
                disabled={daliCtx.selected.length === 0}
                onClick={handleSaveBtn}
            >
                Save
            </Btn>
        </>
    )
}
export default AssignGroup
