import { createContext, useContext, useState, useEffect } from 'react'

import RouterAPI from '../../RouterAPI'

export const RouterContext = createContext({
	loggedIn: false,
	error: '',
	loading: { loading: false, loadText: '' },
	authToken: '',
	wifiInterface: [],
	wifiScanResult: [],
	failoverInterface: {},
	login: () => {},
	wifiConnect: (command) => {},
	fetchWifiInterfaces: () => {},
	wifiDelete: () => {},
	wifiScan: () => {},
	wifiJoin: () => {},
	wifiSetFailover: () => {},
	setError: () => {},
	apnSim1: {},
	apnList: [],
	apnData: {},
	apnGetInfo: () => {},
	apnToggleAuto: () => {},
	apnUpdateApn: () => {},
})

function RouterContextProvider({ children }) {
	const [loggedIn, setLoggedIn] = useState(false)
	const [loading, setLoading] = useState({
		loading: true,
		loadText: 'Loading ..',
	})

	//################################################################################
	//####      WiFi-related functions and states                                 ####
	//################################################################################
	const [scanResult, setScanResult] = useState([])
	const [wifiInterface, setWifiInterface] = useState(false)
	const [failoverInterface, setFailoverInterface] = useState({})
	const [error, setError] = useState('')
	const [authToken, setAuthToken] = useState('')

	// Function for logging in
	async function login() {
		setLoading({ loading: true, loadText: 'Logging in to router' })

		try {
			const result = await RouterAPI.login()
			if (result.success) {
				setLoggedIn(true)
				setAuthToken(result.data.token)
			}
		} catch (error) {
			setError(error || ' There was an error logging in to the Router!')
		}
		setLoading({ loading: false, loadText: '' })
	}

	// Login and find authToken when Context is loaded
	useEffect(() => {
		if (!loggedIn) {
			login()
		}
	}, [])

	// Function for fetching interfaces from router
	async function fetchWifiInterfaces() {
		setError('')
		setLoading({ loading: true, loadText: 'Fetching interfacess' })
		try {
			const result = await RouterAPI.wifiFetchInterfaces(authToken)

			if (result.success) {
				// Try to find existing wifi interface ('wifi1')
				const wifiInterface =
					result.data[0].data.find(
						(item) => item['network'] === 'wifi1'
					) || false
				setWifiInterface(wifiInterface)

				// try to find failover interface ('ifWan1')
				const failoverInterface =
					result.data[1].data.find((item) => item.id === 'ifWan1') ||
					false
				setFailoverInterface(failoverInterface)
			}
		} catch (error) {
			setError(error || 'There was an error fetching the interfaces')
		}
		setLoading({ loading: false, loadText: '' })
	}

	// When auth-token is loaded, fetch wifi-interfaces.
	// useEffect(() => {
	// 	if (authToken !== '') {
	// 		fetchWifiInterfaces()
	// 	}
	// }, [authToken])

	// function for connecting and disconnecting wifi
	async function wifiConnect(command) {
		setError('')
		try {
			const result = await RouterAPI.wifiConnect(
				authToken,
				wifiInterface.id,
				command
			)

			if (result.success) {
				setWifiInterface(result.data)
			}
		} catch (error) {
			setError(error || 'An error occured')
		}
	}

	//function for deleting wifi (forget)
	async function wifiDelete() {
		setError('')
		setLoading({ loading: true, loadText: 'Disconnecting...' })
		try {
			const result = await RouterAPI.wifiDelete(
				authToken,
				wifiInterface.id
			)

			if (result.success) {
				setWifiInterface(undefined)
				fetchWifiInterfaces()
			}
		} catch (error) {
			setError(error || 'An error occured')
		}

		setLoading({ loading: false, loadText: '' })
	}

	//function for scanning for wifi's
	async function wifiScan() {
		setError('')
		setLoading({ loading: true, loadText: 'Scanning for Wifi ...' })
		setScanResult([])
		try {
			const result = await RouterAPI.wifiScan(authToken)

			if (result.success) {
				setScanResult(result.data)
			}
		} catch (error) {
			setError(error || 'An error occured while scanning for wifi')
		}
		setLoading({ loading: false, loadText: '' })
	}

	// function for joinging (adding) a wifi
	async function wifiJoin(bssid, password) {
		setError('')
		setLoading({ loading: true, loadText: 'Connecting to WiFi...' })
		try {
			const result = await RouterAPI.wifiJoin(authToken, bssid, password)
			if (result.success) {
				setWifiInterface(result.data)
				fetchWifiInterfaces()
			}
		} catch (error) {
			console.log(error)
			setError(error || 'Error connecting to Wifi')
		}
		setLoading({ loading: false, loadText: '' })
	}

	// function for turning failover on and off.
	async function wifiSetFailover(id, enabled) {
		setError('')
		try {
			const result = await RouterAPI.wifiFailoverEnabled(
				authToken,
				id,
				enabled
			)

			if (result.success) {
				setFailoverInterface(result.data)
			} else {
				setError('Failed to issue command')
			}
		} catch (error) {
			setError(error || 'An error occured setting the failover')
		}
	}

	//################################################################################
	//####      APN-related functions and states                                  ####
	//################################################################################
	const [apnSim1, setApnSim1] = useState({})
	const [apnList, setApnList] = useState([])
	const [apnData, setApnData] = useState({})

	// function for fetching APN data
	async function apnGetInfo() {
		setLoading({ loading: true, loadText: 'Fetching mobile information' })
		setError('')

		try {
			const result = await RouterAPI.bulkFetch(authToken, [
				{
					endpoint: '/api/interfaces/status',
					method: 'GET',
				},
				{
					endpoint: '/api/modems/apns/status',
					method: 'GET',
				},
				{
					endpoint: '/api/interfaces/config/mob1s1a1',
					method: 'GET',
				},
			])

			// find interface for SIM-card 1 (mob1s1a1)
			const iface = result.data[0].data.filter(
				(item) => item.id === 'mob1s1a1'
			)[0]

			setApnSim1(iface)

			// set list of available APNs
			setApnList(result.data[1].data[0].apns)

			// Check if Auto-APN is
			setApnData(result.data[2].data)
		} catch (error) {
			setError(error)
		}
		setLoading({ loading: false, loadText: '' })
	}

	// // fetch APN settings on load
	// useEffect(() => {
	//     if (loggedIn) {
	//         getInfo()
	//     }
	// }, [authToken])

	// function for toggeling Auto-APN
	async function apnToggleAuto(value) {
		setError('')
		try {
			const result = await RouterAPI.wifiGeneralRequest(
				authToken,
				'/interfaces/config/mob1s1a1',
				'PUT',
				{
					data: {
						auto_apn: value ? '1' : '0',
					},
				}
			)
			setApnData(result.data)
		} catch (error) {
			setError(error)
		}
	}

	// function for updating APN settings
	async function apnUpdateApn(apn, auth, username, password) {
		setError('')
		try {
			const result = await RouterAPI.wifiGeneralRequest(
				authToken,
				'/interfaces/config/mob1s1a1',
				'PUT',
				{
					data: {
						username,
						auth,
						password,
						apn,
					},
				}
			)
			setApnData(result.data)

			console.log(result)
		} catch (error) {
			setError(error)
		}
	}

	//################################################################################
	//####      Context object                                                    ####
	//################################################################################

	const routerCtx = {
		loggedIn,
		error,
		loading,
		authToken,
		wifiInterface,
		scanResult,
		failoverInterface,
		login,
		fetchWifiInterfaces,
		wifiConnect,
		wifiDelete,
		wifiScan,
		wifiJoin,
		wifiSetFailover,
		setError,
		apnSim1,
		apnList,
		apnData,
		apnGetInfo,
		apnToggleAuto,
		apnUpdateApn,
	}

	return (
		<RouterContext.Provider value={routerCtx}>
			{children}
		</RouterContext.Provider>
	)
}

export default RouterContextProvider
