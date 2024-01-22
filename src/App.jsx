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
import Menu from "./components/Menu"
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
                        <Header allValues={allValues} />
                        <MainContent allValues={allValues}>
                            <Menu allValues={allValues} />
                        </MainContent>
                    </Router>
                </ThemeProvider>
            </LocalizationProvider>
        </div>
    )
}

export default App
