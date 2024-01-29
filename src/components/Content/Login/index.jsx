import React, { useState, useContext } from "react"

import { LogoImg, Container } from "./Login.styles"
import Logo from "../../../assets/img/Turfpal-logo.png"
import { LoginContext } from "../../../store/context/login-context"

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Btn from "../../UI/Btn"
function Login({}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const LoginCtx = useContext(LoginContext)

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())

        LoginCtx.login(formJson)
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
                        type='password'
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
