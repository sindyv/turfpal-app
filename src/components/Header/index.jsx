import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useFetchUsername from "../../hooks/useFetchUsername"

// Styles
import {
    Wrapper,
    Icons,
    LinkItem,
    Menu,
    MenuHeader,
    MenuOptions,
    MenuSignOut,
    HeaderText,
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

const Header = ({ allValues, onMenuClick, viewMenu, onLogout }) => {
    const location = useLocation()
    const navigate = useNavigate()

    let headerText = location?.state?.headerText ?? "Dashboard"

    if (headerText !== "Dashboard") {
        headerText = (
            <>
                <ArrowBackIosNewOutlinedIcon onClick={() => navigate(-1)} />
                {headerText}
            </>
        )
    }

    const handleClick = () => {
        onMenuClick("toggle")
    }
    return (
        <Wrapper>
            <HeaderText>{headerText}</HeaderText>
            <Icons>
                <InfoOutlinedIcon onClick={handleClick} />
                <Menu $view={viewMenu}>
                    <MenuHeader>
                        <h3>
                            {allValues.rig_data.deviceid +
                                " " +
                                allValues.rig_data.type}
                        </h3>
                        <p>{useFetchUsername()}</p>
                    </MenuHeader>
                    <MenuOptions>
                        {/* <div>
                            <span>
                                <ImportExportOutlinedIcon /> Switch Device
                            </span>
                        </div> */}
                        <div>
                            <span>
                                <LinkItem
                                    to={"information"}
                                    onClick={onMenuClick}
                                    state={{ headerText: "Information" }}
                                >
                                    <SettingsOutlinedIcon /> Settings and
                                    information
                                </LinkItem>
                            </span>
                        </div>
                        <div>
                            <span>
                                <HelpOutlineOutlinedIcon /> Help
                            </span>
                        </div>
                    </MenuOptions>
                    <MenuSignOut onClick={onLogout}>
                        <ExitToAppOutlinedIcon /> Sign out
                    </MenuSignOut>
                </Menu>

                <LinkItem
                    to={"information"}
                    onClick={onMenuClick}
                    state={{ headerText: "Information" }}
                >
                    <PermIdentityOutlinedIcon />
                </LinkItem>
            </Icons>
        </Wrapper>
    )
}

export default Header
