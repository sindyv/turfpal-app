import React, { useState } from "react"

import { LogoImg, Container } from "./Login.styles"
import Logo from "../../../assets/img/Turfpal-logo.png"

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Btn from "../../UI/Btn"
function Login({ onLogin }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())

        onLogin(formJson)
    }
    return (
        <Container>
            <LogoImg src={Logo} />
            <form method='post' onSubmit={handleLogin}>
                <div>
                    <PermIdentityOutlinedIcon className='icon' />
                    <input
                        placeholder='Username'
                        value={username}
                        name='username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <LockOutlinedIcon className='icon' />
                    <input
                        placeholder='Password'
                        value={password}
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Btn type={"submit"} onClick={() => {}}>
                    Login
                </Btn>
            </form>
        </Container>
    )
}

export default Login
