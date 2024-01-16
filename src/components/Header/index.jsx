import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"

// Styles
import {
    Wrapper,
    Icons,
    LinkItem,
    Menu,
    MenuHeader,
    MenuOptions,
    MenuSignOut,
} from "./Header.styles"

// Images
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"

// API
import API from "../../API"

const Header = ({}) => {
    const [viewMenu, setViewMenu] = useState(false)
    const location = useLocation()

    let headerText = location?.state?.headerText ?? "Dashboard"

    if (headerText !== "Dashboard") {
        headerText = (
            <LinkItem to={".."} relative={"path"}>
                <ArrowBackIosNewOutlinedIcon />
                {headerText}
            </LinkItem>
        )
    }

    const valuesQuery = useQuery({
        queryKey: ["values"],
        queryFn: API.fetchRigdata,
    })

    const handleClick = () => {
        setViewMenu((prev) => !prev)
    }

    if (valuesQuery.isLoading) return <h1>Loading...</h1>
    if (valuesQuery.isError) return <h1>Error fetching data!</h1>

    return (
        <Wrapper>
            {headerText}
            <Icons>
                <InfoOutlinedIcon onClick={handleClick} />
                <Menu $view={viewMenu}>
                    <MenuHeader>
                        <h3>10003 TLS LED 70</h3>
                        <p>Admin</p>
                    </MenuHeader>
                    <MenuOptions>
                        <div>
                            <span>
                                <ImportExportOutlinedIcon /> Switch Device
                            </span>
                        </div>
                        <div>
                            <span>
                                <SettingsOutlinedIcon /> Settings and
                                information
                            </span>
                        </div>
                        <div>
                            <span>
                                <HelpOutlineOutlinedIcon /> Help
                            </span>
                        </div>
                    </MenuOptions>
                    <MenuSignOut>
                        <ExitToAppOutlinedIcon /> Sign out
                    </MenuSignOut>
                </Menu>

                <LinkItem to={"information"}>
                    <PermIdentityOutlinedIcon />
                </LinkItem>
            </Icons>
        </Wrapper>
    )
}

export default Header
