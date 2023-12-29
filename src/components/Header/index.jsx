import React from "react"
import { useQuery } from "@tanstack/react-query"

// Images
import TurfLogo from "../../images/logo_primary.png"
import MenuIcon from "@mui/icons-material/Menu"
// Styles
import { Wrapper, Content, LogoImg, Hamburger } from "./Header.styles"

// API
import API from "../../API"

const Header = () => {
    const valuesQuery = useQuery({
        queryKey: ["values"],
        queryFn: API.fetchValuesPromise,
    })

    if (valuesQuery.isLoading) return <h1>Loading...</h1>
    if (valuesQuery.isError) return <h1>Error fetching data!</h1>

    const date = new Date()
    date.setTime(valuesQuery.data.system_time)

    return (
        <Wrapper>
            <Content>
                <LogoImg src={TurfLogo} alt='turfpal-logo' />
                <div className='header__clock'>{`${date.getHours()}:${
                    date.getMinutes() >= 10
                        ? date.getMinutes()
                        : "0" + date.getMinutes()
                }`}</div>
            </Content>
        </Wrapper>
    )
}

export default Header
