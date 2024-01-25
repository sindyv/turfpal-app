import { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material/styles"

// styles
import { GlobalStyle } from "./GlobalStyle"
import "../src/fonts/fonts.css"
//Components
import Header from "./components/Header"
import MainContent from "./components/MainContent"

// API
import API from "./API"

// Custom Themes for MUI
const theme = createTheme({
    palette: {
        custom: {
            main: "#fff",
            contrastText: "#242105",
        },
        whiteBackground: {
            main: "#004e41",
            contrastText: "#242105",
        },
    },
})
// const socket = new WebSocket("ws://192.168.1.116:1880/ws/nodered")

// socket.addEventListener("open", () => {
//     socket.send("Hi server!")
// })

// socket.addEventListener("message", (event) => {
//     const data = JSON.parse(event.data)
//     console.log(data.payload)
// })

function App() {
    const [viewMenu, setViewMenu] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    const onLogin = ({ username, password }) => {
        if (username === "admin" && password === "1234") {
            localStorage.setItem(
                "loginInformation",
                JSON.stringify({
                    loggedIn: true,
                    user: username,
                    timestamp: Date.now(),
                })
            )
            setLoggedIn(true)
        }
    }

    const onLogout = () => {
        localStorage.removeItem("loginInformation")
        setLoggedIn(false)
    }

    const checkLogin = () => {
        const loginData =
            JSON?.parse(localStorage.getItem("loginInformation")) ?? false
        if (loginData != null) {
            if (Date.now() - loginData.timestamp < 7 * 24 * 60 * 60 * 1000) {
                return loginData.loggedIn
            }
        } else {
            return false
        }
    }

    useState(() => {
        setLoggedIn(checkLogin())
    }, [])

    const onMenuClick = (action) => {
        if (action === "toggle") {
            setViewMenu((prev) => !prev)
            return
        }

        setViewMenu(false)
    }

    const query = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })

    if (query.isLoading) return <h1>Loading...</h1>
    if (query.isError) return <h1>Error fetching data!</h1>

    const allValues = query.data
    return (
        <div className='App'>
            <GlobalStyle />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    <Router>
                        {loggedIn ? (
                            <Header
                                allValues={allValues}
                                onMenuClick={onMenuClick}
                                viewMenu={viewMenu}
                                onLogout={onLogout}
                            />
                        ) : null}
                        <MainContent
                            allValues={allValues}
                            loggedIn={loggedIn}
                            onLogin={onLogin}
                            onLogout={onLogout}
                            onClick={onMenuClick}
                        >
                            {/* <Menu allValues={allValues} /> */}
                        </MainContent>
                    </Router>
                </ThemeProvider>
            </LocalizationProvider>
        </div>
    )
}

export default App
