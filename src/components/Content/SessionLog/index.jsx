import React, { useContext } from "react"

// Styles
import { Wrapper } from "./SessionLog.styles"

// Components
import SessionLogEntry from "./SessionLogEntry"
import MenuSpacer from "../../UI/MenuSpacer"

// Icons

// Context
import { AllValuesContext } from "../../../store/context/allValues-context"
function SessionLog() {
    const { data: allValues } = useContext(AllValuesContext)
    if (Array.isArray(allValues.logData.session)) {
        const logData = [...allValues.logData.session]
        logData.reverse()
        return (
            <Wrapper>
                {logData.map((entry) => {
                    return <SessionLogEntry entry={entry} />
                })}
                <MenuSpacer />
            </Wrapper>
        )
    } else {
        return <h3>No logdata on record...</h3>
    }
}

export default SessionLog
