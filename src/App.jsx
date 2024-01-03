import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

// styles
import { GlobalStyle } from "./GlobalStyle"

//Components
import Header from "./components/Header"
import Section from "./components/Section"

const queryClient = new QueryClient()

function App() {
    return (
        <div className='App'>
            <GlobalStyle />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    <Section></Section>
                </QueryClientProvider>
            </LocalizationProvider>
        </div>
    )
}

export default App
