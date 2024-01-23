import React from "react"

import { LogoImg, Container } from "./Login.styles"
import Logo from "../../../assets/img/Turfpal-logo.png"

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
function Login() {
    return (
        <Container>
            <LogoImg src={Logo} />
            <form>
                <div>
                    <PermIdentityOutlinedIcon className='icon' />
                    <input placeholder='Username' />
                </div>
                <div>
                    <LockOutlinedIcon className='icon' />
                    <input placeholder='Password' />
                </div>
            </form>
        </Container>
    )
}

export default Login
