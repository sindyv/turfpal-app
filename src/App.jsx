import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { BrowserRouter as Router } from "react-router-dom"
// styles
import { GlobalStyle } from "./GlobalStyle"

//Components
import Header from "./components/Header"
import Menu from "./components/Menu"
import MainContent from "./components/MainContent"

const queryClient = new QueryClient()

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <Header />
                        <MainContent>
                            <Menu />
                        </MainContent>
                    </Router>
                </QueryClientProvider>
            </LocalizationProvider>
        </div>
    )
}

export default App
