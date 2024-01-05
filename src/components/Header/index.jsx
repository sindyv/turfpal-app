import React from "react"
import { useQuery } from "@tanstack/react-query"

// Styles
import { Wrapper, Icons, LinkItem } from "./Header.styles"

// Images
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"

// API
import API from "../../API"

const Header = () => {
    const valuesQuery = useQuery({
        queryKey: ["values"],
        queryFn: API.fetchValuesPromise,
    })

    if (valuesQuery.isLoading) return <h1>Loading...</h1>
    if (valuesQuery.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            10003 - TLS LED 70{" "}
            <Icons>
                <LinkItem to={"information"}>
                    <InfoOutlinedIcon />
                </LinkItem>
                <LinkItem to={"information"}>
                    <PermIdentityOutlinedIcon />
                </LinkItem>
            </Icons>
        </Wrapper>
    )
}

export default Header
