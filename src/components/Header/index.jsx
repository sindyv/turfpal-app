import React, { useState } from "react"
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

const Header = ({ allValues }) => {
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

    const handleClick = () => {
        setViewMenu((prev) => !prev)
    }

    return (
        <Wrapper>
            {headerText}
            <Icons>
                <InfoOutlinedIcon onClick={handleClick} />
                <Menu $view={viewMenu}>
                    <MenuHeader>
                        <h3>
                            {allValues.rig_data.deviceid +
                                " " +
                                allValues.rig_data.type}
                        </h3>
                        <p>{"Admin (change this)"}</p>
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
