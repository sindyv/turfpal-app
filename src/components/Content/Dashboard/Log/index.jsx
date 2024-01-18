import React from "react"

// Styles
import { Wrapper, Content } from "./Log.styles"

//Components
import LogEntry from "../../../UI/LogEntry"

// API
import { useLocation } from "react-router-dom"

function Log({ allValues }) {
    // extract information from link
    let location = useLocation()

    const log = location?.state?.log ?? ""
    const logData = location?.state?.logData
    return (
        <Wrapper>
            <Content>
                {log === "" ? (
                    <p>No logdata provided</p>
                ) : (
                    <>
                        <p>Data showing for the past 7 days</p>
                        <LogEntry data={logData} />
                    </>
                )}
            </Content>
        </Wrapper>
    )
}

export default Log
