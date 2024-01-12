import React from "react"
import { useQuery } from "@tanstack/react-query"

import Card from "../../../../UI/Card"

import { Wrapper, Header, Content, LinkItem } from "./HeatingSettings.styles"

import API from "../../../../../API"

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

function HeatingSettings() {
    // const query = useQuery({
    //     queryKey: ["allValues"],
    //     queryFn: API.fetchAllValues,
    //     refetchInterval: 5000,
    // })

    // if (query.isLoading) return <h1>Loading...</h1>
    // if (query.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            <Header>
                <LinkItem to={"../"}>
                    <ArrowBackIosNewOutlinedIcon />
                </LinkItem>
                Information
            </Header>
            <Content></Content>
        </Wrapper>
    )
}

export default HeatingSettings
