import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import LoginContextProvider from './store/context/login-context'
import useGetTheme from './hooks/useGetTheme'
// styles
import { GlobalStyle } from './GlobalStyle'
import '../src/fonts/fonts.css'
//Components
import Header from './components/Header'
import MainContent from './components/MainContent'

// Context
import MenuContextProvider from './store/context/menu-context'
import SetpointsContextProvider from './store/context/setpoints-context'
import { useContext } from 'react'
import { AllValuesContext } from './store/context/allValues-context'

// Custom Themes for MUI
const theme = useGetTheme()

function App() {
	const { isLoading, error, data: allValues } = useContext(AllValuesContext)
	if (isLoading) return <h1>Loading...</h1>
	if (error) return <h1>Error fetching data!</h1>
	return (
		<div className='App'>
			<GlobalStyle />
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<LoginContextProvider>
					<MenuContextProvider>
						<SetpointsContextProvider>
							<ThemeProvider theme={theme}>
								<Router>
									<Header />
									<MainContent />
								</Router>
							</ThemeProvider>
						</SetpointsContextProvider>
					</MenuContextProvider>
				</LoginContextProvider>
			</LocalizationProvider>
		</div>
	)
}

export default App
