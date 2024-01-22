import React from "react"

import { LogoImg, Container } from "./Login.styles"
import Logo from "../../../assets/img/Turfpal-logo.png"
function Login() {
    return (
        <Container>
            <LogoImg src={Logo} />
        </Container>
    )
}

export default Login
