import React, { useContext } from "react"

// Hooks
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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined"
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined"
import TimelineIcon from "@mui/icons-material/Timeline"
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined"
import DeviceHubIcon from "@mui/icons-material/DeviceHub"

// Context
import { LoginContext } from "../../store/context/login-context"
import { MenuContext } from "../../store/context/menu-context"
import { AllValuesContext } from "../../store/context/allValues-context"

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { loggedIn, logout } = useContext(LoginContext)
    const { viewMenu, toggleMenu, hideMenu } = useContext(MenuContext)
    const { data: allValues } = useContext(AllValuesContext)
    let headerText = location?.state?.headerText ?? "Dashboard"

    if (headerText !== "Dashboard") {
        headerText = (
            <>
                <ArrowBackIosNewOutlinedIcon onClick={() => navigate(-1)} />
                {headerText}
            </>
        )
    }

    if (!loggedIn) {
        return
    }

    const username = useFetchUsername()

    return (
        <Wrapper>
            <HeaderText>{headerText}</HeaderText>
            <Icons>
                <InfoOutlinedIcon onClick={() => toggleMenu()} />
                <Menu $view={viewMenu}>
                    <MenuHeader>
                        <h3>
                            {allValues.rig_data.deviceid +
                                " " +
                                allValues.rig_data.type}
                        </h3>
                        <p>{username}</p>
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
                                    onClick={() => {
                                        hideMenu()
                                    }}
                                    state={{ headerText: "Information" }}
                                >
                                    <SettingsOutlinedIcon /> Settings and
                                    information
                                </LinkItem>
                            </span>
                        </div>
                        {username === "admin" ? (
                            <>
                                <div>
                                    <span>
                                        <LinkItem
                                            to={"modbus"}
                                            onClick={() => {
                                                hideMenu()
                                            }}
                                            state={{
                                                headerText: "Modbus settings",
                                            }}
                                        >
                                            <DeviceHubIcon /> Modbus Settings
                                        </LinkItem>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <LinkItem
                                            to={"dali"}
                                            onClick={() => {
                                                hideMenu()
                                            }}
                                            state={{
                                                headerText: "Dali settings",
                                            }}
                                        >
                                            <LightbulbOutlinedIcon /> DALI
                                            Settings
                                        </LinkItem>
                                    </span>
                                </div>
                            </>
                        ) : null}
                        <div>
                            <span>
                                <LinkItem
                                    to={"help"}
                                    onClick={() => {
                                        hideMenu()
                                    }}
                                    state={{ headerText: "Help" }}
                                >
                                    <HelpOutlineOutlinedIcon /> Help
                                </LinkItem>
                            </span>
                        </div>
                        <div>
                            <span>
                                <LinkItem
                                    to={"sessionlog"}
                                    onClick={() => {
                                        hideMenu()
                                    }}
                                    state={{ headerText: "Session log" }}
                                >
                                    <TimelineIcon /> Session Log
                                </LinkItem>
                            </span>
                        </div>
                    </MenuOptions>
                    <MenuSignOut onClick={logout}>
                        <ExitToAppOutlinedIcon /> Sign out
                    </MenuSignOut>
                </Menu>
                {/* 
                <LinkItem
                    to={"information"}
                    onClick={onMenuClick}
                    state={{ headerText: "Information" }}
                >
                    <PermIdentityOutlinedIcon />
                </LinkItem> */}
            </Icons>
        </Wrapper>
    )
}

export default Header
