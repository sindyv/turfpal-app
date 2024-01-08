import React from "react"
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"

// Styles
import { Wrapper, Header, Content } from "./HeatingLog.styles"

//Components
import LogEntry from "../../../../UI/LogEntry"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

// API
import API from "../../../../../API"

function HeatingLog() {
    const camera = false

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>
                <ArrowBackIosNewOutlinedIcon /> Heating
            </Header>
            <Content>
                <p>Data showing for the past 7 days</p>
                <LogEntry />
            </Content>
        </Wrapper>
    )
}

export default HeatingLog
