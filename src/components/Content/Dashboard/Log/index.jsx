import React from "react"
import { useQuery } from "@tanstack/react-query"

// Styles
import { Wrapper, Header, Content, LinkItem } from "./Log.styles"

//Components
import LogEntry from "../../../UI/LogEntry"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

// API
import API from "../../../../API"
import { useLocation } from "react-router-dom"

function Log() {
    // extract information from link
    let location = useLocation()

    const log = location?.state?.log ?? ""

    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"/" + log}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                {log === "" ? "To Dashboard" : log}
            </Header>
            <Content>
                {log === "" ? (
                    <p>No logdata provided</p>
                ) : (
                    <>
                        <p>Data showing for the past 7 days</p>
                        <LogEntry />
                    </>
                )}
            </Content>
        </Wrapper>
    )
}

export default Log
