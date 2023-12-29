import { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

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
            <QueryClientProvider client={queryClient}>
                <Header />
                <Section></Section>
            </QueryClientProvider>
        </div>
    )
}

export default App
